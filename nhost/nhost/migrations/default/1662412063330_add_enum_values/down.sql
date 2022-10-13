-- Could not auto-generate a down migration.
-- Please write an appropriate down migration for the SQL below:
-- INSERT INTO "public"."activity_verb" (value, comment) VALUES
--    ( 'accepted', 'accepted' ),
-- ( 'added', 'added' ),
-- ( 'commented', 'commented' ),
-- ( 'joined', 'joined' ),
-- ( 'posted', 'posted' ),
-- ( 'rejected', 'rejected' ),
-- ( 'requested_to_join', 'requested_to_join' ),
-- ( 'showed_interest', 'showed_interest' ),
-- ( 'updated', 'updated' );
--
-- INSERT INTO "public"."group_join_request_status" (value, comment) VALUES
-- ( 'accepted', 'accepted status' ),
-- ( 'cancelled', 'cancelled status' ),
-- ( 'pending', 'pending status' ),
-- ( 'rejected', 'rejected status' );
--
--
-- INSERT INTO "public"."group_post_type" (value, comment) VALUES
-- ( 'message', 'a generic message post' ),
-- ( 'request', 'a request for something' );
--
--
-- INSERT INTO "public"."group_role" (value, comment) VALUES
-- ( 'admin', 'group administrator role' ),
-- ( 'owner', 'owner of the group' ),
-- ( 'user', 'regular member' );
--
--
-- INSERT INTO "public"."thing_type" (value, comment) VALUES
-- ( 'give', 'give away' ),
-- ( 'have_some', 'have parts of it' ),
-- ( 'lend', 'borrow and bring back' ),
-- ( 'other', 'something else' );