import aws from 'aws-sdk';
import { tinyid } from '../../utils/random';
import { decodeToken, errorReply } from '../../server';

// This generates a unique, signed url that can be used to upload files to the S3 bucket for 60 seconds
export default async function handler(req, res) {
    if (!req.headers.authorization) {
        errorReply(res, 400, 'You must be logged in to perform this action');
        return;
    }

    // If decoding succeeds it means a valid JWT is given
    // Remove 'Bearer ' from auth header
    decodeToken(req.headers.authorization.slice(7));

    aws.config.update({
        accessKeyId: process.env.RS_AWS_ACCESS_KEY,
        secretAccessKey: process.env.RS_AWS_SECRET_KEY,
        region: process.env.RS_AWS_REGION,
        signatureVersion: 'v4',
    });

    const key = `${tinyid()}-${req.query.file}`;

    const s3 = new aws.S3();
    const post = await s3.createPresignedPost({
        Bucket: process.env.RS_AWS_BUCKET_NAME,
        Fields: { key },
        Expires: 60, // seconds
        Conditions: [
            ['content-length-range', 100, 10000000], // 100 bytes up to 10 MB
        ],
    });

    res.status(200).json(post);
}
