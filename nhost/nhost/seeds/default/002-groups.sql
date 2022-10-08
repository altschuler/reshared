-- Add group "One"
INSERT INTO public."groups"
(id, created_at, updated_at, name, description, public, short_id, banner_file_id, creator_id)
VALUES ('24c2d6e1-04e1-42bc-9444-3cc5635242b7'::uuid, '2022-09-27 19:43:46.759', '2022-09-27 19:43:46.759', 'One', 'The first group', false, 'swmWPzLRozcIaNz', NULL, NULL);

-- Alice is the owner
INSERT INTO public.group_members
(id, created_at, updated_at, user_id, group_id, "role")
VALUES('a86bce24-753d-468d-9da0-150fa78d0697'::uuid, '2022-09-27 19:43:46.759', '2022-09-27 19:43:46.759', 'a3076366-c0b9-4238-a0ed-d73426309ae9'::uuid, '24c2d6e1-04e1-42bc-9444-3cc5635242b7'::uuid, 'owner');

-- Bob is a regular member
INSERT INTO public.group_members
(id, created_at, updated_at, user_id, group_id, "role")
VALUES('b6a54a36-4b38-49fc-824f-09b0b31d0331'::uuid, '2022-09-27 19:43:46.759', '2022-09-27 19:43:46.759', '0c76dc81-5f81-4158-8cb1-f56af2e72a9a'::uuid, '24c2d6e1-04e1-42bc-9444-3cc5635242b7'::uuid, 'user');

