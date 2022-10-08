SET check_function_bodies = false;
CREATE TABLE public.entities (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    thing_id uuid,
    group_id uuid,
    join_request_id uuid,
    user_id uuid,
    dummy smallint,
    group_post_id uuid,
    group_post_comment_id uuid,
    group_thing_id uuid,
    group_member_id uuid,
    CONSTRAINT single_entity_only CHECK (((((((((((thing_id IS NOT NULL))::integer + ((group_id IS NOT NULL))::integer) + ((join_request_id IS NOT NULL))::integer) + ((user_id IS NOT NULL))::integer) + ((group_post_id IS NOT NULL))::integer) + ((group_post_comment_id IS NOT NULL))::integer) + ((group_thing_id IS NOT NULL))::integer) + ((group_member_id IS NOT NULL))::integer) <= 1))
);
CREATE FUNCTION public.entity_valid(entity_row public.entities) RETURNS boolean
    LANGUAGE sql STABLE
    AS $$
  SELECT (
    (entity_row.thing_id IS NOT NULL)::integer + 
    (entity_row.group_id IS NOT NULL)::integer + 
    (entity_row.join_request_id IS NOT NULL)::integer + 
    (entity_row.user_id IS NOT NULL)::integer + 
    (entity_row.group_post_id IS NOT NULL)::integer + 
    (entity_row.group_post_comment_id IS NOT NULL)::integer + 
    (entity_row.group_thing_id IS NOT NULL)::integer) = 1
$$;
CREATE FUNCTION public.generate_short_id(size integer) RETURNS text
    LANGUAGE plpgsql
    AS $$
DECLARE
  characters TEXT := 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  bytes BYTEA := gen_random_bytes(size);
  l INT := length(characters);
  i INT := 0;
  output TEXT := '';
BEGIN
  WHILE i < size LOOP
    output := output || substr(characters, get_byte(bytes, i) % l + 1, 1);
    i := i + 1;
  END LOOP;
  RETURN output;
END;
$$;
CREATE OR REPLACE FUNCTION public.set_current_timestamp_read_at() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."read_at" = NOW();
  RETURN _new;
END;
$$;
CREATE OR REPLACE FUNCTION public.set_current_timestamp_updated_at() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$;
CREATE TABLE public.activities (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    verb text NOT NULL,
    actor_id uuid,
    entity_id uuid NOT NULL,
    secondary_entity_id uuid,
    group_id uuid
);
CREATE TABLE public.activity_verb (
    value text NOT NULL,
    comment text NOT NULL
);
CREATE TABLE public.chat_group_members (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    user_id uuid NOT NULL,
    chat_group_id uuid NOT NULL,
    last_read timestamp with time zone
);
CREATE TABLE public.chat_groups (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    name text NOT NULL
);
CREATE TABLE public.chat_messages (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    sender_id uuid NOT NULL,
    chat_group_id uuid NOT NULL,
    message text NOT NULL,
    entity_id uuid
);
CREATE TABLE public.comments (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    content text NOT NULL,
    author_id uuid NOT NULL
);
CREATE TABLE public.file_uploads (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    name text NOT NULL,
    owner_id uuid,
    url text NOT NULL,
    mime_type text,
    size integer DEFAULT 0 NOT NULL
);
CREATE TABLE public.group_join_request_status (
    value text NOT NULL,
    comment text NOT NULL
);
CREATE TABLE public.group_join_requests (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    user_id uuid NOT NULL,
    group_id uuid NOT NULL,
    status text,
    message text NOT NULL,
    response text,
    responder_id uuid
);
CREATE TABLE public.group_join_tokens (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    disabled boolean DEFAULT false NOT NULL,
    token text DEFAULT public.gen_random_uuid() NOT NULL,
    group_id uuid NOT NULL,
    note text
);
CREATE TABLE public.group_members (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    user_id uuid NOT NULL,
    group_id uuid NOT NULL,
    role text NOT NULL
);
CREATE TABLE public.group_post_comment (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    group_post_id uuid NOT NULL,
    comment_id uuid NOT NULL
);
CREATE TABLE public.group_post_type (
    value text NOT NULL,
    comment text NOT NULL
);
CREATE TABLE public.group_posts (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    author_id uuid NOT NULL,
    content text NOT NULL,
    group_id uuid NOT NULL,
    type text NOT NULL,
    resolved boolean DEFAULT false NOT NULL
);
CREATE TABLE public.group_role (
    value text NOT NULL,
    comment text NOT NULL
);
CREATE TABLE public.group_thing (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    group_id uuid NOT NULL,
    thing_id uuid NOT NULL
);
CREATE TABLE public.groups (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    name text NOT NULL,
    description text,
    public boolean DEFAULT false NOT NULL,
    short_id text DEFAULT public.generate_short_id(15) NOT NULL
);
CREATE TABLE public.notifications (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    read_at timestamp with time zone,
    activity_id uuid NOT NULL,
    user_id uuid NOT NULL
);
CREATE TABLE public.thing_images (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    thing_id uuid NOT NULL,
    file_id uuid NOT NULL,
    description text NOT NULL,
    "order" integer DEFAULT 1000 NOT NULL
);
CREATE TABLE public.thing_type (
    value text NOT NULL,
    comment text NOT NULL
);
CREATE TABLE public.things (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    name text NOT NULL,
    owner_id uuid NOT NULL,
    description text DEFAULT ' '::text NOT NULL,
    type text NOT NULL,
    category text,
    expiry date,
    enabled boolean DEFAULT true NOT NULL,
    short_id text DEFAULT public.generate_short_id(15) NOT NULL,
    CONSTRAINT name_length CHECK (((char_length(name) >= 3) AND (char_length(name) < 100)))
);
ALTER TABLE ONLY public.activities
    ADD CONSTRAINT activities_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.activity_verb
    ADD CONSTRAINT activity_verb_pkey PRIMARY KEY (value);
ALTER TABLE ONLY public.chat_group_members
    ADD CONSTRAINT chat_group_members_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.chat_groups
    ADD CONSTRAINT chat_groups_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.comments
    ADD CONSTRAINT comment_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.entities
    ADD CONSTRAINT entities_group_id_key UNIQUE (group_id);
ALTER TABLE ONLY public.entities
    ADD CONSTRAINT entities_group_member_id_key UNIQUE (group_member_id);
ALTER TABLE ONLY public.entities
    ADD CONSTRAINT entities_group_post_comment_id_key UNIQUE (group_post_comment_id);
ALTER TABLE ONLY public.entities
    ADD CONSTRAINT entities_group_post_id_key UNIQUE (group_post_id);
ALTER TABLE ONLY public.entities
    ADD CONSTRAINT entities_group_thing_id_key UNIQUE (group_thing_id);
ALTER TABLE ONLY public.entities
    ADD CONSTRAINT entities_join_request_id_key UNIQUE (join_request_id);
ALTER TABLE ONLY public.entities
    ADD CONSTRAINT entities_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.entities
    ADD CONSTRAINT entities_thing_id_key UNIQUE (thing_id);
ALTER TABLE ONLY public.entities
    ADD CONSTRAINT entities_user_id_key UNIQUE (user_id);
ALTER TABLE ONLY public.file_uploads
    ADD CONSTRAINT file_uploads_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.file_uploads
    ADD CONSTRAINT file_uploads_url_key UNIQUE (url);
ALTER TABLE ONLY public.group_join_request_status
    ADD CONSTRAINT group_join_request_status_pkey PRIMARY KEY (value);
ALTER TABLE ONLY public.group_join_requests
    ADD CONSTRAINT group_join_requests_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.group_join_tokens
    ADD CONSTRAINT group_join_token_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.group_members
    ADD CONSTRAINT group_members_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.group_post_comment
    ADD CONSTRAINT group_post_comment_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.group_posts
    ADD CONSTRAINT group_post_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.group_post_type
    ADD CONSTRAINT group_post_type_pkey PRIMARY KEY (value);
ALTER TABLE ONLY public.group_role
    ADD CONSTRAINT group_role_pkey PRIMARY KEY (value);
ALTER TABLE ONLY public.group_thing
    ADD CONSTRAINT group_thing_group_id_thing_id_key UNIQUE (group_id, thing_id);
ALTER TABLE ONLY public.group_thing
    ADD CONSTRAINT group_thing_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.groups
    ADD CONSTRAINT groups_name_key UNIQUE (name);
ALTER TABLE ONLY public.groups
    ADD CONSTRAINT groups_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.groups
    ADD CONSTRAINT groups_short_id_key UNIQUE (short_id);
ALTER TABLE ONLY public.chat_messages
    ADD CONSTRAINT messages_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.notifications
    ADD CONSTRAINT notifications_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.thing_images
    ADD CONSTRAINT thing_images_file_id_key UNIQUE (file_id);
ALTER TABLE ONLY public.thing_images
    ADD CONSTRAINT thing_images_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.thing_type
    ADD CONSTRAINT thing_type_pkey PRIMARY KEY (value);
ALTER TABLE ONLY public.things
    ADD CONSTRAINT things_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.things
    ADD CONSTRAINT things_short_id_key UNIQUE (short_id);
CREATE TRIGGER set_public_chat_groups_updated_at BEFORE UPDATE ON public.chat_groups FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_chat_groups_updated_at ON public.chat_groups IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_comment_updated_at BEFORE UPDATE ON public.comments FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_comment_updated_at ON public.comments IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_file_uploads_updated_at BEFORE UPDATE ON public.file_uploads FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_file_uploads_updated_at ON public.file_uploads IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_group_join_requests_updated_at BEFORE UPDATE ON public.group_join_requests FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_group_join_requests_updated_at ON public.group_join_requests IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_group_join_token_updated_at BEFORE UPDATE ON public.group_join_tokens FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_group_join_token_updated_at ON public.group_join_tokens IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_group_members_updated_at BEFORE UPDATE ON public.group_members FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_group_members_updated_at ON public.group_members IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_group_post_comment_updated_at BEFORE UPDATE ON public.group_post_comment FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_group_post_comment_updated_at ON public.group_post_comment IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_group_post_updated_at BEFORE UPDATE ON public.group_posts FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_group_post_updated_at ON public.group_posts IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_group_thing_updated_at BEFORE UPDATE ON public.group_thing FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_group_thing_updated_at ON public.group_thing IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_groups_updated_at BEFORE UPDATE ON public.groups FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_groups_updated_at ON public.groups IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_notifications_read_at BEFORE UPDATE ON public.notifications FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_read_at();
COMMENT ON TRIGGER set_public_notifications_read_at ON public.notifications IS 'trigger to set value of column "read_at" to current timestamp on row update';
CREATE TRIGGER set_public_thing_images_updated_at BEFORE UPDATE ON public.thing_images FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_thing_images_updated_at ON public.thing_images IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_things_updated_at BEFORE UPDATE ON public.things FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_things_updated_at ON public.things IS 'trigger to set value of column "updated_at" to current timestamp on row update';
ALTER TABLE ONLY public.activities
    ADD CONSTRAINT activities_actor_id_fkey FOREIGN KEY (actor_id) REFERENCES auth.users(id) ON UPDATE CASCADE ON DELETE SET NULL;
ALTER TABLE ONLY public.activities
    ADD CONSTRAINT activities_entity_id_fkey FOREIGN KEY (entity_id) REFERENCES public.entities(id) ON UPDATE CASCADE ON DELETE SET NULL;
ALTER TABLE ONLY public.activities
    ADD CONSTRAINT activities_group_id_fkey FOREIGN KEY (group_id) REFERENCES public.groups(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.activities
    ADD CONSTRAINT activities_secondary_entity_id_fkey FOREIGN KEY (secondary_entity_id) REFERENCES public.entities(id) ON UPDATE CASCADE ON DELETE SET NULL;
ALTER TABLE ONLY public.activities
    ADD CONSTRAINT activity_verb_fkey FOREIGN KEY (verb) REFERENCES public.activity_verb(value);
ALTER TABLE ONLY public.chat_group_members
    ADD CONSTRAINT chat_group_members_chat_group_id_fkey FOREIGN KEY (chat_group_id) REFERENCES public.chat_groups(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.chat_group_members
    ADD CONSTRAINT chat_group_members_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.chat_messages
    ADD CONSTRAINT chat_messages_chat_group_id_fkey FOREIGN KEY (chat_group_id) REFERENCES public.chat_groups(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.chat_messages
    ADD CONSTRAINT chat_messages_entity_id_fkey FOREIGN KEY (entity_id) REFERENCES public.entities(id) ON UPDATE CASCADE ON DELETE SET NULL;
ALTER TABLE ONLY public.comments
    ADD CONSTRAINT comment_author_id_fkey FOREIGN KEY (author_id) REFERENCES auth.users(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.entities
    ADD CONSTRAINT entities_group_id_fkey FOREIGN KEY (group_id) REFERENCES public.groups(id) ON UPDATE CASCADE ON DELETE SET NULL;
ALTER TABLE ONLY public.entities
    ADD CONSTRAINT entities_group_member_id_fkey FOREIGN KEY (group_member_id) REFERENCES public.group_members(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.entities
    ADD CONSTRAINT entities_group_post_comment_id_fkey FOREIGN KEY (group_post_comment_id) REFERENCES public.group_post_comment(id) ON UPDATE CASCADE ON DELETE SET NULL;
ALTER TABLE ONLY public.entities
    ADD CONSTRAINT entities_group_post_id_fkey FOREIGN KEY (group_post_id) REFERENCES public.group_posts(id) ON UPDATE CASCADE ON DELETE SET NULL;
ALTER TABLE ONLY public.entities
    ADD CONSTRAINT entities_group_thing_id_fkey FOREIGN KEY (group_thing_id) REFERENCES public.group_thing(id) ON UPDATE CASCADE ON DELETE SET NULL;
ALTER TABLE ONLY public.entities
    ADD CONSTRAINT entities_join_request_id_fkey FOREIGN KEY (join_request_id) REFERENCES public.group_join_requests(id) ON UPDATE CASCADE ON DELETE SET NULL;
ALTER TABLE ONLY public.entities
    ADD CONSTRAINT entities_thing_id_fkey FOREIGN KEY (thing_id) REFERENCES public.things(id) ON UPDATE CASCADE ON DELETE SET NULL;
ALTER TABLE ONLY public.entities
    ADD CONSTRAINT entities_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id) ON UPDATE CASCADE ON DELETE SET NULL;
ALTER TABLE ONLY public.file_uploads
    ADD CONSTRAINT file_uploads_owner_id_fkey FOREIGN KEY (owner_id) REFERENCES auth.users(id) ON UPDATE CASCADE ON DELETE SET NULL;
ALTER TABLE ONLY public.group_join_requests
    ADD CONSTRAINT group_join_requests_group_id_fkey FOREIGN KEY (group_id) REFERENCES public.groups(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.group_join_requests
    ADD CONSTRAINT group_join_requests_responder_id_fkey FOREIGN KEY (responder_id) REFERENCES auth.users(id) ON UPDATE CASCADE ON DELETE SET NULL;
ALTER TABLE ONLY public.group_join_requests
    ADD CONSTRAINT group_join_requests_status_fkey FOREIGN KEY (status) REFERENCES public.group_join_request_status(value);
ALTER TABLE ONLY public.group_join_requests
    ADD CONSTRAINT group_join_requests_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.group_join_tokens
    ADD CONSTRAINT group_join_tokens_group_id_fkey FOREIGN KEY (group_id) REFERENCES public.groups(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.group_members
    ADD CONSTRAINT group_members_group_id_fkey FOREIGN KEY (group_id) REFERENCES public.groups(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.group_members
    ADD CONSTRAINT group_members_role_fkey FOREIGN KEY (role) REFERENCES public.group_role(value);
ALTER TABLE ONLY public.group_members
    ADD CONSTRAINT group_members_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.group_posts
    ADD CONSTRAINT group_post_author_id_fkey FOREIGN KEY (author_id) REFERENCES auth.users(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.group_post_comment
    ADD CONSTRAINT group_post_comment_comment_id_fkey FOREIGN KEY (comment_id) REFERENCES public.comments(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.group_post_comment
    ADD CONSTRAINT group_post_comment_group_post_id_fkey FOREIGN KEY (group_post_id) REFERENCES public.group_posts(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.group_posts
    ADD CONSTRAINT group_post_group_id_fkey FOREIGN KEY (group_id) REFERENCES public.groups(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.group_posts
    ADD CONSTRAINT group_post_type_fkey FOREIGN KEY (type) REFERENCES public.group_post_type(value);
ALTER TABLE ONLY public.group_thing
    ADD CONSTRAINT group_thing_group_id_fkey FOREIGN KEY (group_id) REFERENCES public.groups(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.group_thing
    ADD CONSTRAINT group_thing_thing_id_fkey FOREIGN KEY (thing_id) REFERENCES public.things(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.chat_messages
    ADD CONSTRAINT messages_sender_id_fkey FOREIGN KEY (sender_id) REFERENCES auth.users(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.notifications
    ADD CONSTRAINT notifications_activity_id_fkey FOREIGN KEY (activity_id) REFERENCES public.activities(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.notifications
    ADD CONSTRAINT notifications_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.thing_images
    ADD CONSTRAINT thing_images_file_id_fkey FOREIGN KEY (file_id) REFERENCES public.file_uploads(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.thing_images
    ADD CONSTRAINT thing_images_thing_id_fkey FOREIGN KEY (thing_id) REFERENCES public.things(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.things
    ADD CONSTRAINT thing_type_fkey FOREIGN KEY (type) REFERENCES public.thing_type(value);
ALTER TABLE ONLY public.things
    ADD CONSTRAINT things_owner_id_fkey FOREIGN KEY (owner_id) REFERENCES auth.users(id) ON UPDATE CASCADE ON DELETE CASCADE;
