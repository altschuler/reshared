import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  date: any;
  smallint: any;
  timestamptz: any;
  uuid: any;
};


/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: Maybe<Scalars['Boolean']>;
  _gt?: Maybe<Scalars['Boolean']>;
  _gte?: Maybe<Scalars['Boolean']>;
  _in?: Maybe<Array<Scalars['Boolean']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Boolean']>;
  _lte?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Scalars['Boolean']>;
  _nin?: Maybe<Array<Scalars['Boolean']>>;
};

export type CreateChatGroupInput = {
  message?: Maybe<Scalars['String']>;
  receiverIds: Array<Scalars['uuid']>;
  thing_id?: Maybe<Scalars['uuid']>;
};

export type CreateChatGroupResult = {
  __typename?: 'CreateChatGroupResult';
  /** An object relationship */
  chat_group: Chat_Groups;
  chat_group_id: Scalars['uuid'];
};

export type CreateGroupInput = {
  description: Scalars['String'];
  name: Scalars['String'];
  public?: Maybe<Scalars['Boolean']>;
};

export type CreateGroupResult = {
  __typename?: 'CreateGroupResult';
  /** An object relationship */
  group: Groups;
  group_id: Scalars['uuid'];
};

export type CreateJoinTokenInput = {
  group_id: Scalars['uuid'];
};

export type CreateJoinTokenResult = {
  __typename?: 'CreateJoinTokenResult';
  /** An object relationship */
  group: Groups;
  group_id: Scalars['uuid'];
  /** An object relationship */
  join_token: Group_Join_Tokens;
  join_token_id: Scalars['uuid'];
};

export type CredentialsInput = {
  email?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  password: Scalars['String'];
};

export type DeleteThingInput = {
  id: Scalars['uuid'];
};

export type DeleteThingOutput = {
  __typename?: 'DeleteThingOutput';
  /** An object relationship */
  thing: Things;
  thing_id: Scalars['uuid'];
};

export type HandleJoinRequestInput = {
  accepted: Scalars['Boolean'];
  join_request_id: Scalars['uuid'];
  response?: Maybe<Scalars['String']>;
};

export type HandleJoinRequestResult = {
  __typename?: 'HandleJoinRequestResult';
  /** An object relationship */
  join_request: Group_Join_Requests;
  join_request_id: Scalars['uuid'];
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

export type JoinGroupInput = {
  group_id: Scalars['uuid'];
  join_token?: Maybe<Scalars['String']>;
};

export type JoinGroupResult = {
  __typename?: 'JoinGroupResult';
  /** An object relationship */
  group: Groups;
  group_id: Scalars['uuid'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid'];
};

export type RegistrationResult = {
  __typename?: 'RegistrationResult';
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid'];
};

export type RequestJoinGroupInput = {
  group_id: Scalars['uuid'];
  message?: Maybe<Scalars['String']>;
};

export type RequestJoinGroupResult = {
  __typename?: 'RequestJoinGroupResult';
  /** An object relationship */
  group: Groups;
  group_id: Scalars['uuid'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid'];
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: Maybe<Scalars['String']>;
  _is_null?: Maybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: Maybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: Maybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: Maybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: Maybe<Scalars['String']>;
};

export type UpdateGroupThing = {
  groupId: Scalars['uuid'];
};

export type UpdateThingImage = {
  description: Scalars['String'];
  fileId: Scalars['uuid'];
  order: Scalars['Int'];
};

export type UpdateThingInput = {
  category?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  enabled?: Maybe<Scalars['Boolean']>;
  expiry?: Maybe<Scalars['timestamptz']>;
  groups?: Maybe<Array<UpdateGroupThing>>;
  id?: Maybe<Scalars['uuid']>;
  images?: Maybe<Array<UpdateThingImage>>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type UpdateThingResult = {
  __typename?: 'UpdateThingResult';
  /** An object relationship */
  thing: Things;
  thing_id: Scalars['uuid'];
};

/** columns and relationships of "activities" */
export type Activities = {
  __typename?: 'activities';
  /** An object relationship */
  actor?: Maybe<Users>;
  actor_id?: Maybe<Scalars['uuid']>;
  created_at: Scalars['timestamptz'];
  /** An object relationship */
  entity: Entities;
  entity_id: Scalars['uuid'];
  /** An object relationship */
  group?: Maybe<Groups>;
  group_id?: Maybe<Scalars['uuid']>;
  id: Scalars['uuid'];
  /** An array relationship */
  notifications: Array<Notifications>;
  /** An aggregate relationship */
  notifications_aggregate: Notifications_Aggregate;
  /** An object relationship */
  secondary_entity?: Maybe<Entities>;
  secondary_entity_id?: Maybe<Scalars['uuid']>;
  verb: Activity_Verb_Enum;
};


/** columns and relationships of "activities" */
export type ActivitiesNotificationsArgs = {
  distinct_on?: Maybe<Array<Notifications_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Notifications_Order_By>>;
  where?: Maybe<Notifications_Bool_Exp>;
};


/** columns and relationships of "activities" */
export type ActivitiesNotifications_AggregateArgs = {
  distinct_on?: Maybe<Array<Notifications_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Notifications_Order_By>>;
  where?: Maybe<Notifications_Bool_Exp>;
};

/** aggregated selection of "activities" */
export type Activities_Aggregate = {
  __typename?: 'activities_aggregate';
  aggregate?: Maybe<Activities_Aggregate_Fields>;
  nodes: Array<Activities>;
};

/** aggregate fields of "activities" */
export type Activities_Aggregate_Fields = {
  __typename?: 'activities_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Activities_Max_Fields>;
  min?: Maybe<Activities_Min_Fields>;
};


/** aggregate fields of "activities" */
export type Activities_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Activities_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "activities" */
export type Activities_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Activities_Max_Order_By>;
  min?: Maybe<Activities_Min_Order_By>;
};

/** input type for inserting array relation for remote table "activities" */
export type Activities_Arr_Rel_Insert_Input = {
  data: Array<Activities_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Activities_On_Conflict>;
};

/** Boolean expression to filter rows from the table "activities". All fields are combined with a logical 'AND'. */
export type Activities_Bool_Exp = {
  _and?: Maybe<Array<Activities_Bool_Exp>>;
  _not?: Maybe<Activities_Bool_Exp>;
  _or?: Maybe<Array<Activities_Bool_Exp>>;
  actor?: Maybe<Users_Bool_Exp>;
  actor_id?: Maybe<Uuid_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  entity?: Maybe<Entities_Bool_Exp>;
  entity_id?: Maybe<Uuid_Comparison_Exp>;
  group?: Maybe<Groups_Bool_Exp>;
  group_id?: Maybe<Uuid_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  notifications?: Maybe<Notifications_Bool_Exp>;
  secondary_entity?: Maybe<Entities_Bool_Exp>;
  secondary_entity_id?: Maybe<Uuid_Comparison_Exp>;
  verb?: Maybe<Activity_Verb_Enum_Comparison_Exp>;
};

/** unique or primary key constraints on table "activities" */
export enum Activities_Constraint {
  /** unique or primary key constraint */
  ActivitiesPkey = 'activities_pkey'
}

/** input type for inserting data into table "activities" */
export type Activities_Insert_Input = {
  actor?: Maybe<Users_Obj_Rel_Insert_Input>;
  actor_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  entity?: Maybe<Entities_Obj_Rel_Insert_Input>;
  entity_id?: Maybe<Scalars['uuid']>;
  group?: Maybe<Groups_Obj_Rel_Insert_Input>;
  group_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  notifications?: Maybe<Notifications_Arr_Rel_Insert_Input>;
  secondary_entity?: Maybe<Entities_Obj_Rel_Insert_Input>;
  secondary_entity_id?: Maybe<Scalars['uuid']>;
  verb?: Maybe<Activity_Verb_Enum>;
};

/** aggregate max on columns */
export type Activities_Max_Fields = {
  __typename?: 'activities_max_fields';
  actor_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  entity_id?: Maybe<Scalars['uuid']>;
  group_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  secondary_entity_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "activities" */
export type Activities_Max_Order_By = {
  actor_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  entity_id?: Maybe<Order_By>;
  group_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  secondary_entity_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Activities_Min_Fields = {
  __typename?: 'activities_min_fields';
  actor_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  entity_id?: Maybe<Scalars['uuid']>;
  group_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  secondary_entity_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "activities" */
export type Activities_Min_Order_By = {
  actor_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  entity_id?: Maybe<Order_By>;
  group_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  secondary_entity_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "activities" */
export type Activities_Mutation_Response = {
  __typename?: 'activities_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Activities>;
};

/** input type for inserting object relation for remote table "activities" */
export type Activities_Obj_Rel_Insert_Input = {
  data: Activities_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Activities_On_Conflict>;
};

/** on conflict condition type for table "activities" */
export type Activities_On_Conflict = {
  constraint: Activities_Constraint;
  update_columns?: Array<Activities_Update_Column>;
  where?: Maybe<Activities_Bool_Exp>;
};

/** Ordering options when selecting data from "activities". */
export type Activities_Order_By = {
  actor?: Maybe<Users_Order_By>;
  actor_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  entity?: Maybe<Entities_Order_By>;
  entity_id?: Maybe<Order_By>;
  group?: Maybe<Groups_Order_By>;
  group_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  notifications_aggregate?: Maybe<Notifications_Aggregate_Order_By>;
  secondary_entity?: Maybe<Entities_Order_By>;
  secondary_entity_id?: Maybe<Order_By>;
  verb?: Maybe<Order_By>;
};

/** primary key columns input for table: activities */
export type Activities_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "activities" */
export enum Activities_Select_Column {
  /** column name */
  ActorId = 'actor_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EntityId = 'entity_id',
  /** column name */
  GroupId = 'group_id',
  /** column name */
  Id = 'id',
  /** column name */
  SecondaryEntityId = 'secondary_entity_id',
  /** column name */
  Verb = 'verb'
}

/** input type for updating data in table "activities" */
export type Activities_Set_Input = {
  actor_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  entity_id?: Maybe<Scalars['uuid']>;
  group_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  secondary_entity_id?: Maybe<Scalars['uuid']>;
  verb?: Maybe<Activity_Verb_Enum>;
};

/** update columns of table "activities" */
export enum Activities_Update_Column {
  /** column name */
  ActorId = 'actor_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EntityId = 'entity_id',
  /** column name */
  GroupId = 'group_id',
  /** column name */
  Id = 'id',
  /** column name */
  SecondaryEntityId = 'secondary_entity_id',
  /** column name */
  Verb = 'verb'
}

/** columns and relationships of "activity_verb" */
export type Activity_Verb = {
  __typename?: 'activity_verb';
  comment: Scalars['String'];
  value: Scalars['String'];
};

/** aggregated selection of "activity_verb" */
export type Activity_Verb_Aggregate = {
  __typename?: 'activity_verb_aggregate';
  aggregate?: Maybe<Activity_Verb_Aggregate_Fields>;
  nodes: Array<Activity_Verb>;
};

/** aggregate fields of "activity_verb" */
export type Activity_Verb_Aggregate_Fields = {
  __typename?: 'activity_verb_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Activity_Verb_Max_Fields>;
  min?: Maybe<Activity_Verb_Min_Fields>;
};


/** aggregate fields of "activity_verb" */
export type Activity_Verb_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Activity_Verb_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "activity_verb". All fields are combined with a logical 'AND'. */
export type Activity_Verb_Bool_Exp = {
  _and?: Maybe<Array<Activity_Verb_Bool_Exp>>;
  _not?: Maybe<Activity_Verb_Bool_Exp>;
  _or?: Maybe<Array<Activity_Verb_Bool_Exp>>;
  comment?: Maybe<String_Comparison_Exp>;
  value?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "activity_verb" */
export enum Activity_Verb_Constraint {
  /** unique or primary key constraint */
  ActivityVerbPkey = 'activity_verb_pkey'
}

export enum Activity_Verb_Enum {
  /** accepted */
  Accepted = 'accepted',
  /** added */
  Added = 'added',
  /** commented */
  Commented = 'commented',
  /** deleted */
  Deleted = 'deleted',
  /** joined */
  Joined = 'joined',
  /** posted */
  Posted = 'posted',
  /** rejected */
  Rejected = 'rejected',
  /** requested_to_join */
  RequestedToJoin = 'requested_to_join',
  /** showed_interest */
  ShowedInterest = 'showed_interest',
  /** updated */
  Updated = 'updated'
}

/** Boolean expression to compare columns of type "activity_verb_enum". All fields are combined with logical 'AND'. */
export type Activity_Verb_Enum_Comparison_Exp = {
  _eq?: Maybe<Activity_Verb_Enum>;
  _in?: Maybe<Array<Activity_Verb_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Activity_Verb_Enum>;
  _nin?: Maybe<Array<Activity_Verb_Enum>>;
};

/** input type for inserting data into table "activity_verb" */
export type Activity_Verb_Insert_Input = {
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Activity_Verb_Max_Fields = {
  __typename?: 'activity_verb_max_fields';
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Activity_Verb_Min_Fields = {
  __typename?: 'activity_verb_min_fields';
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "activity_verb" */
export type Activity_Verb_Mutation_Response = {
  __typename?: 'activity_verb_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Activity_Verb>;
};

/** on conflict condition type for table "activity_verb" */
export type Activity_Verb_On_Conflict = {
  constraint: Activity_Verb_Constraint;
  update_columns?: Array<Activity_Verb_Update_Column>;
  where?: Maybe<Activity_Verb_Bool_Exp>;
};

/** Ordering options when selecting data from "activity_verb". */
export type Activity_Verb_Order_By = {
  comment?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** primary key columns input for table: activity_verb */
export type Activity_Verb_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "activity_verb" */
export enum Activity_Verb_Select_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "activity_verb" */
export type Activity_Verb_Set_Input = {
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** update columns of table "activity_verb" */
export enum Activity_Verb_Update_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

/** columns and relationships of "chat_group_members" */
export type Chat_Group_Members = {
  __typename?: 'chat_group_members';
  /** An object relationship */
  chat_group: Chat_Groups;
  chat_group_id: Scalars['uuid'];
  id: Scalars['uuid'];
  last_read?: Maybe<Scalars['timestamptz']>;
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid'];
};

/** aggregated selection of "chat_group_members" */
export type Chat_Group_Members_Aggregate = {
  __typename?: 'chat_group_members_aggregate';
  aggregate?: Maybe<Chat_Group_Members_Aggregate_Fields>;
  nodes: Array<Chat_Group_Members>;
};

/** aggregate fields of "chat_group_members" */
export type Chat_Group_Members_Aggregate_Fields = {
  __typename?: 'chat_group_members_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Chat_Group_Members_Max_Fields>;
  min?: Maybe<Chat_Group_Members_Min_Fields>;
};


/** aggregate fields of "chat_group_members" */
export type Chat_Group_Members_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Chat_Group_Members_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "chat_group_members" */
export type Chat_Group_Members_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Chat_Group_Members_Max_Order_By>;
  min?: Maybe<Chat_Group_Members_Min_Order_By>;
};

/** input type for inserting array relation for remote table "chat_group_members" */
export type Chat_Group_Members_Arr_Rel_Insert_Input = {
  data: Array<Chat_Group_Members_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Chat_Group_Members_On_Conflict>;
};

/** Boolean expression to filter rows from the table "chat_group_members". All fields are combined with a logical 'AND'. */
export type Chat_Group_Members_Bool_Exp = {
  _and?: Maybe<Array<Chat_Group_Members_Bool_Exp>>;
  _not?: Maybe<Chat_Group_Members_Bool_Exp>;
  _or?: Maybe<Array<Chat_Group_Members_Bool_Exp>>;
  chat_group?: Maybe<Chat_Groups_Bool_Exp>;
  chat_group_id?: Maybe<Uuid_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  last_read?: Maybe<Timestamptz_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  user_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "chat_group_members" */
export enum Chat_Group_Members_Constraint {
  /** unique or primary key constraint */
  ChatGroupMembersPkey = 'chat_group_members_pkey'
}

/** input type for inserting data into table "chat_group_members" */
export type Chat_Group_Members_Insert_Input = {
  chat_group?: Maybe<Chat_Groups_Obj_Rel_Insert_Input>;
  chat_group_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  last_read?: Maybe<Scalars['timestamptz']>;
  user?: Maybe<Users_Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Chat_Group_Members_Max_Fields = {
  __typename?: 'chat_group_members_max_fields';
  chat_group_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  last_read?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "chat_group_members" */
export type Chat_Group_Members_Max_Order_By = {
  chat_group_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  last_read?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Chat_Group_Members_Min_Fields = {
  __typename?: 'chat_group_members_min_fields';
  chat_group_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  last_read?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "chat_group_members" */
export type Chat_Group_Members_Min_Order_By = {
  chat_group_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  last_read?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "chat_group_members" */
export type Chat_Group_Members_Mutation_Response = {
  __typename?: 'chat_group_members_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Chat_Group_Members>;
};

/** on conflict condition type for table "chat_group_members" */
export type Chat_Group_Members_On_Conflict = {
  constraint: Chat_Group_Members_Constraint;
  update_columns?: Array<Chat_Group_Members_Update_Column>;
  where?: Maybe<Chat_Group_Members_Bool_Exp>;
};

/** Ordering options when selecting data from "chat_group_members". */
export type Chat_Group_Members_Order_By = {
  chat_group?: Maybe<Chat_Groups_Order_By>;
  chat_group_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  last_read?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: chat_group_members */
export type Chat_Group_Members_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "chat_group_members" */
export enum Chat_Group_Members_Select_Column {
  /** column name */
  ChatGroupId = 'chat_group_id',
  /** column name */
  Id = 'id',
  /** column name */
  LastRead = 'last_read',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "chat_group_members" */
export type Chat_Group_Members_Set_Input = {
  chat_group_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  last_read?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** update columns of table "chat_group_members" */
export enum Chat_Group_Members_Update_Column {
  /** column name */
  ChatGroupId = 'chat_group_id',
  /** column name */
  Id = 'id',
  /** column name */
  LastRead = 'last_read',
  /** column name */
  UserId = 'user_id'
}

/** columns and relationships of "chat_groups" */
export type Chat_Groups = {
  __typename?: 'chat_groups';
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  /** An array relationship */
  members: Array<Chat_Group_Members>;
  /** An aggregate relationship */
  members_aggregate: Chat_Group_Members_Aggregate;
  /** An array relationship */
  messages: Array<Chat_Messages>;
  /** An aggregate relationship */
  messages_aggregate: Chat_Messages_Aggregate;
  name: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "chat_groups" */
export type Chat_GroupsMembersArgs = {
  distinct_on?: Maybe<Array<Chat_Group_Members_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Chat_Group_Members_Order_By>>;
  where?: Maybe<Chat_Group_Members_Bool_Exp>;
};


/** columns and relationships of "chat_groups" */
export type Chat_GroupsMembers_AggregateArgs = {
  distinct_on?: Maybe<Array<Chat_Group_Members_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Chat_Group_Members_Order_By>>;
  where?: Maybe<Chat_Group_Members_Bool_Exp>;
};


/** columns and relationships of "chat_groups" */
export type Chat_GroupsMessagesArgs = {
  distinct_on?: Maybe<Array<Chat_Messages_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Chat_Messages_Order_By>>;
  where?: Maybe<Chat_Messages_Bool_Exp>;
};


/** columns and relationships of "chat_groups" */
export type Chat_GroupsMessages_AggregateArgs = {
  distinct_on?: Maybe<Array<Chat_Messages_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Chat_Messages_Order_By>>;
  where?: Maybe<Chat_Messages_Bool_Exp>;
};

/** aggregated selection of "chat_groups" */
export type Chat_Groups_Aggregate = {
  __typename?: 'chat_groups_aggregate';
  aggregate?: Maybe<Chat_Groups_Aggregate_Fields>;
  nodes: Array<Chat_Groups>;
};

/** aggregate fields of "chat_groups" */
export type Chat_Groups_Aggregate_Fields = {
  __typename?: 'chat_groups_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Chat_Groups_Max_Fields>;
  min?: Maybe<Chat_Groups_Min_Fields>;
};


/** aggregate fields of "chat_groups" */
export type Chat_Groups_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Chat_Groups_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "chat_groups". All fields are combined with a logical 'AND'. */
export type Chat_Groups_Bool_Exp = {
  _and?: Maybe<Array<Chat_Groups_Bool_Exp>>;
  _not?: Maybe<Chat_Groups_Bool_Exp>;
  _or?: Maybe<Array<Chat_Groups_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  members?: Maybe<Chat_Group_Members_Bool_Exp>;
  messages?: Maybe<Chat_Messages_Bool_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "chat_groups" */
export enum Chat_Groups_Constraint {
  /** unique or primary key constraint */
  ChatGroupsPkey = 'chat_groups_pkey'
}

/** input type for inserting data into table "chat_groups" */
export type Chat_Groups_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  members?: Maybe<Chat_Group_Members_Arr_Rel_Insert_Input>;
  messages?: Maybe<Chat_Messages_Arr_Rel_Insert_Input>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Chat_Groups_Max_Fields = {
  __typename?: 'chat_groups_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Chat_Groups_Min_Fields = {
  __typename?: 'chat_groups_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "chat_groups" */
export type Chat_Groups_Mutation_Response = {
  __typename?: 'chat_groups_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Chat_Groups>;
};

/** input type for inserting object relation for remote table "chat_groups" */
export type Chat_Groups_Obj_Rel_Insert_Input = {
  data: Chat_Groups_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Chat_Groups_On_Conflict>;
};

/** on conflict condition type for table "chat_groups" */
export type Chat_Groups_On_Conflict = {
  constraint: Chat_Groups_Constraint;
  update_columns?: Array<Chat_Groups_Update_Column>;
  where?: Maybe<Chat_Groups_Bool_Exp>;
};

/** Ordering options when selecting data from "chat_groups". */
export type Chat_Groups_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  members_aggregate?: Maybe<Chat_Group_Members_Aggregate_Order_By>;
  messages_aggregate?: Maybe<Chat_Messages_Aggregate_Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: chat_groups */
export type Chat_Groups_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "chat_groups" */
export enum Chat_Groups_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "chat_groups" */
export type Chat_Groups_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "chat_groups" */
export enum Chat_Groups_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** columns and relationships of "chat_messages" */
export type Chat_Messages = {
  __typename?: 'chat_messages';
  /** An object relationship */
  chat_group: Chat_Groups;
  chat_group_id: Scalars['uuid'];
  created_at: Scalars['timestamptz'];
  /** An object relationship */
  entity?: Maybe<Entities>;
  entity_id?: Maybe<Scalars['uuid']>;
  id: Scalars['uuid'];
  message: Scalars['String'];
  /** An object relationship */
  sender: Users;
  sender_id: Scalars['uuid'];
};

/** aggregated selection of "chat_messages" */
export type Chat_Messages_Aggregate = {
  __typename?: 'chat_messages_aggregate';
  aggregate?: Maybe<Chat_Messages_Aggregate_Fields>;
  nodes: Array<Chat_Messages>;
};

/** aggregate fields of "chat_messages" */
export type Chat_Messages_Aggregate_Fields = {
  __typename?: 'chat_messages_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Chat_Messages_Max_Fields>;
  min?: Maybe<Chat_Messages_Min_Fields>;
};


/** aggregate fields of "chat_messages" */
export type Chat_Messages_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Chat_Messages_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "chat_messages" */
export type Chat_Messages_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Chat_Messages_Max_Order_By>;
  min?: Maybe<Chat_Messages_Min_Order_By>;
};

/** input type for inserting array relation for remote table "chat_messages" */
export type Chat_Messages_Arr_Rel_Insert_Input = {
  data: Array<Chat_Messages_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Chat_Messages_On_Conflict>;
};

/** Boolean expression to filter rows from the table "chat_messages". All fields are combined with a logical 'AND'. */
export type Chat_Messages_Bool_Exp = {
  _and?: Maybe<Array<Chat_Messages_Bool_Exp>>;
  _not?: Maybe<Chat_Messages_Bool_Exp>;
  _or?: Maybe<Array<Chat_Messages_Bool_Exp>>;
  chat_group?: Maybe<Chat_Groups_Bool_Exp>;
  chat_group_id?: Maybe<Uuid_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  entity?: Maybe<Entities_Bool_Exp>;
  entity_id?: Maybe<Uuid_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  message?: Maybe<String_Comparison_Exp>;
  sender?: Maybe<Users_Bool_Exp>;
  sender_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "chat_messages" */
export enum Chat_Messages_Constraint {
  /** unique or primary key constraint */
  MessagesPkey = 'messages_pkey'
}

/** input type for inserting data into table "chat_messages" */
export type Chat_Messages_Insert_Input = {
  chat_group?: Maybe<Chat_Groups_Obj_Rel_Insert_Input>;
  chat_group_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  entity?: Maybe<Entities_Obj_Rel_Insert_Input>;
  entity_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  message?: Maybe<Scalars['String']>;
  sender?: Maybe<Users_Obj_Rel_Insert_Input>;
  sender_id?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Chat_Messages_Max_Fields = {
  __typename?: 'chat_messages_max_fields';
  chat_group_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  entity_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  message?: Maybe<Scalars['String']>;
  sender_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "chat_messages" */
export type Chat_Messages_Max_Order_By = {
  chat_group_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  entity_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  message?: Maybe<Order_By>;
  sender_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Chat_Messages_Min_Fields = {
  __typename?: 'chat_messages_min_fields';
  chat_group_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  entity_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  message?: Maybe<Scalars['String']>;
  sender_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "chat_messages" */
export type Chat_Messages_Min_Order_By = {
  chat_group_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  entity_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  message?: Maybe<Order_By>;
  sender_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "chat_messages" */
export type Chat_Messages_Mutation_Response = {
  __typename?: 'chat_messages_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Chat_Messages>;
};

/** on conflict condition type for table "chat_messages" */
export type Chat_Messages_On_Conflict = {
  constraint: Chat_Messages_Constraint;
  update_columns?: Array<Chat_Messages_Update_Column>;
  where?: Maybe<Chat_Messages_Bool_Exp>;
};

/** Ordering options when selecting data from "chat_messages". */
export type Chat_Messages_Order_By = {
  chat_group?: Maybe<Chat_Groups_Order_By>;
  chat_group_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  entity?: Maybe<Entities_Order_By>;
  entity_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  message?: Maybe<Order_By>;
  sender?: Maybe<Users_Order_By>;
  sender_id?: Maybe<Order_By>;
};

/** primary key columns input for table: chat_messages */
export type Chat_Messages_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "chat_messages" */
export enum Chat_Messages_Select_Column {
  /** column name */
  ChatGroupId = 'chat_group_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EntityId = 'entity_id',
  /** column name */
  Id = 'id',
  /** column name */
  Message = 'message',
  /** column name */
  SenderId = 'sender_id'
}

/** input type for updating data in table "chat_messages" */
export type Chat_Messages_Set_Input = {
  chat_group_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  entity_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  message?: Maybe<Scalars['String']>;
  sender_id?: Maybe<Scalars['uuid']>;
};

/** update columns of table "chat_messages" */
export enum Chat_Messages_Update_Column {
  /** column name */
  ChatGroupId = 'chat_group_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EntityId = 'entity_id',
  /** column name */
  Id = 'id',
  /** column name */
  Message = 'message',
  /** column name */
  SenderId = 'sender_id'
}

/** columns and relationships of "comments" */
export type Comments = {
  __typename?: 'comments';
  /** An object relationship */
  author: Users;
  author_id: Scalars['uuid'];
  content: Scalars['String'];
  created_at: Scalars['timestamptz'];
  /** An array relationship */
  group_post_relations: Array<Group_Post_Comment>;
  /** An aggregate relationship */
  group_post_relations_aggregate: Group_Post_Comment_Aggregate;
  id: Scalars['uuid'];
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "comments" */
export type CommentsGroup_Post_RelationsArgs = {
  distinct_on?: Maybe<Array<Group_Post_Comment_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Post_Comment_Order_By>>;
  where?: Maybe<Group_Post_Comment_Bool_Exp>;
};


/** columns and relationships of "comments" */
export type CommentsGroup_Post_Relations_AggregateArgs = {
  distinct_on?: Maybe<Array<Group_Post_Comment_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Post_Comment_Order_By>>;
  where?: Maybe<Group_Post_Comment_Bool_Exp>;
};

/** aggregated selection of "comments" */
export type Comments_Aggregate = {
  __typename?: 'comments_aggregate';
  aggregate?: Maybe<Comments_Aggregate_Fields>;
  nodes: Array<Comments>;
};

/** aggregate fields of "comments" */
export type Comments_Aggregate_Fields = {
  __typename?: 'comments_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Comments_Max_Fields>;
  min?: Maybe<Comments_Min_Fields>;
};


/** aggregate fields of "comments" */
export type Comments_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Comments_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "comments" */
export type Comments_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Comments_Max_Order_By>;
  min?: Maybe<Comments_Min_Order_By>;
};

/** input type for inserting array relation for remote table "comments" */
export type Comments_Arr_Rel_Insert_Input = {
  data: Array<Comments_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Comments_On_Conflict>;
};

/** Boolean expression to filter rows from the table "comments". All fields are combined with a logical 'AND'. */
export type Comments_Bool_Exp = {
  _and?: Maybe<Array<Comments_Bool_Exp>>;
  _not?: Maybe<Comments_Bool_Exp>;
  _or?: Maybe<Array<Comments_Bool_Exp>>;
  author?: Maybe<Users_Bool_Exp>;
  author_id?: Maybe<Uuid_Comparison_Exp>;
  content?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  group_post_relations?: Maybe<Group_Post_Comment_Bool_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "comments" */
export enum Comments_Constraint {
  /** unique or primary key constraint */
  CommentPkey = 'comment_pkey'
}

/** input type for inserting data into table "comments" */
export type Comments_Insert_Input = {
  author?: Maybe<Users_Obj_Rel_Insert_Input>;
  author_id?: Maybe<Scalars['uuid']>;
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  group_post_relations?: Maybe<Group_Post_Comment_Arr_Rel_Insert_Input>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Comments_Max_Fields = {
  __typename?: 'comments_max_fields';
  author_id?: Maybe<Scalars['uuid']>;
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "comments" */
export type Comments_Max_Order_By = {
  author_id?: Maybe<Order_By>;
  content?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Comments_Min_Fields = {
  __typename?: 'comments_min_fields';
  author_id?: Maybe<Scalars['uuid']>;
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "comments" */
export type Comments_Min_Order_By = {
  author_id?: Maybe<Order_By>;
  content?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "comments" */
export type Comments_Mutation_Response = {
  __typename?: 'comments_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Comments>;
};

/** input type for inserting object relation for remote table "comments" */
export type Comments_Obj_Rel_Insert_Input = {
  data: Comments_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Comments_On_Conflict>;
};

/** on conflict condition type for table "comments" */
export type Comments_On_Conflict = {
  constraint: Comments_Constraint;
  update_columns?: Array<Comments_Update_Column>;
  where?: Maybe<Comments_Bool_Exp>;
};

/** Ordering options when selecting data from "comments". */
export type Comments_Order_By = {
  author?: Maybe<Users_Order_By>;
  author_id?: Maybe<Order_By>;
  content?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  group_post_relations_aggregate?: Maybe<Group_Post_Comment_Aggregate_Order_By>;
  id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: comments */
export type Comments_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "comments" */
export enum Comments_Select_Column {
  /** column name */
  AuthorId = 'author_id',
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "comments" */
export type Comments_Set_Input = {
  author_id?: Maybe<Scalars['uuid']>;
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "comments" */
export enum Comments_Update_Column {
  /** column name */
  AuthorId = 'author_id',
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at'
}


/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: Maybe<Scalars['date']>;
  _gt?: Maybe<Scalars['date']>;
  _gte?: Maybe<Scalars['date']>;
  _in?: Maybe<Array<Scalars['date']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['date']>;
  _lte?: Maybe<Scalars['date']>;
  _neq?: Maybe<Scalars['date']>;
  _nin?: Maybe<Array<Scalars['date']>>;
};

/** columns and relationships of "entities" */
export type Entities = {
  __typename?: 'entities';
  dummy?: Maybe<Scalars['smallint']>;
  /** An object relationship */
  group?: Maybe<Groups>;
  group_id?: Maybe<Scalars['uuid']>;
  /** An object relationship */
  group_join_request?: Maybe<Group_Join_Requests>;
  /** An object relationship */
  group_member?: Maybe<Group_Members>;
  group_member_id?: Maybe<Scalars['uuid']>;
  /** An object relationship */
  group_post?: Maybe<Group_Posts>;
  /** An object relationship */
  group_post_comment?: Maybe<Group_Post_Comment>;
  group_post_comment_id?: Maybe<Scalars['uuid']>;
  group_post_id?: Maybe<Scalars['uuid']>;
  /** An object relationship */
  group_thing?: Maybe<Group_Thing>;
  group_thing_id?: Maybe<Scalars['uuid']>;
  id: Scalars['uuid'];
  /** A computed field, executes function "entity_valid" */
  is_valid?: Maybe<Scalars['Boolean']>;
  join_request_id?: Maybe<Scalars['uuid']>;
  /** An object relationship */
  thing?: Maybe<Things>;
  thing_id?: Maybe<Scalars['uuid']>;
  /** An object relationship */
  user?: Maybe<Users>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** aggregated selection of "entities" */
export type Entities_Aggregate = {
  __typename?: 'entities_aggregate';
  aggregate?: Maybe<Entities_Aggregate_Fields>;
  nodes: Array<Entities>;
};

/** aggregate fields of "entities" */
export type Entities_Aggregate_Fields = {
  __typename?: 'entities_aggregate_fields';
  avg?: Maybe<Entities_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Entities_Max_Fields>;
  min?: Maybe<Entities_Min_Fields>;
  stddev?: Maybe<Entities_Stddev_Fields>;
  stddev_pop?: Maybe<Entities_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Entities_Stddev_Samp_Fields>;
  sum?: Maybe<Entities_Sum_Fields>;
  var_pop?: Maybe<Entities_Var_Pop_Fields>;
  var_samp?: Maybe<Entities_Var_Samp_Fields>;
  variance?: Maybe<Entities_Variance_Fields>;
};


/** aggregate fields of "entities" */
export type Entities_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Entities_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Entities_Avg_Fields = {
  __typename?: 'entities_avg_fields';
  dummy?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "entities". All fields are combined with a logical 'AND'. */
export type Entities_Bool_Exp = {
  _and?: Maybe<Array<Entities_Bool_Exp>>;
  _not?: Maybe<Entities_Bool_Exp>;
  _or?: Maybe<Array<Entities_Bool_Exp>>;
  dummy?: Maybe<Smallint_Comparison_Exp>;
  group?: Maybe<Groups_Bool_Exp>;
  group_id?: Maybe<Uuid_Comparison_Exp>;
  group_join_request?: Maybe<Group_Join_Requests_Bool_Exp>;
  group_member?: Maybe<Group_Members_Bool_Exp>;
  group_member_id?: Maybe<Uuid_Comparison_Exp>;
  group_post?: Maybe<Group_Posts_Bool_Exp>;
  group_post_comment?: Maybe<Group_Post_Comment_Bool_Exp>;
  group_post_comment_id?: Maybe<Uuid_Comparison_Exp>;
  group_post_id?: Maybe<Uuid_Comparison_Exp>;
  group_thing?: Maybe<Group_Thing_Bool_Exp>;
  group_thing_id?: Maybe<Uuid_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  is_valid?: Maybe<Boolean_Comparison_Exp>;
  join_request_id?: Maybe<Uuid_Comparison_Exp>;
  thing?: Maybe<Things_Bool_Exp>;
  thing_id?: Maybe<Uuid_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  user_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "entities" */
export enum Entities_Constraint {
  /** unique or primary key constraint */
  EntitiesGroupIdKey = 'entities_group_id_key',
  /** unique or primary key constraint */
  EntitiesGroupMemberIdKey = 'entities_group_member_id_key',
  /** unique or primary key constraint */
  EntitiesGroupPostCommentIdKey = 'entities_group_post_comment_id_key',
  /** unique or primary key constraint */
  EntitiesGroupPostIdKey = 'entities_group_post_id_key',
  /** unique or primary key constraint */
  EntitiesGroupThingIdKey = 'entities_group_thing_id_key',
  /** unique or primary key constraint */
  EntitiesJoinRequestIdKey = 'entities_join_request_id_key',
  /** unique or primary key constraint */
  EntitiesPkey = 'entities_pkey',
  /** unique or primary key constraint */
  EntitiesThingIdKey = 'entities_thing_id_key',
  /** unique or primary key constraint */
  EntitiesUserIdKey = 'entities_user_id_key'
}

/** input type for incrementing numeric columns in table "entities" */
export type Entities_Inc_Input = {
  dummy?: Maybe<Scalars['smallint']>;
};

/** input type for inserting data into table "entities" */
export type Entities_Insert_Input = {
  dummy?: Maybe<Scalars['smallint']>;
  group?: Maybe<Groups_Obj_Rel_Insert_Input>;
  group_id?: Maybe<Scalars['uuid']>;
  group_join_request?: Maybe<Group_Join_Requests_Obj_Rel_Insert_Input>;
  group_member?: Maybe<Group_Members_Obj_Rel_Insert_Input>;
  group_member_id?: Maybe<Scalars['uuid']>;
  group_post?: Maybe<Group_Posts_Obj_Rel_Insert_Input>;
  group_post_comment?: Maybe<Group_Post_Comment_Obj_Rel_Insert_Input>;
  group_post_comment_id?: Maybe<Scalars['uuid']>;
  group_post_id?: Maybe<Scalars['uuid']>;
  group_thing?: Maybe<Group_Thing_Obj_Rel_Insert_Input>;
  group_thing_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  join_request_id?: Maybe<Scalars['uuid']>;
  thing?: Maybe<Things_Obj_Rel_Insert_Input>;
  thing_id?: Maybe<Scalars['uuid']>;
  user?: Maybe<Users_Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Entities_Max_Fields = {
  __typename?: 'entities_max_fields';
  dummy?: Maybe<Scalars['smallint']>;
  group_id?: Maybe<Scalars['uuid']>;
  group_member_id?: Maybe<Scalars['uuid']>;
  group_post_comment_id?: Maybe<Scalars['uuid']>;
  group_post_id?: Maybe<Scalars['uuid']>;
  group_thing_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  join_request_id?: Maybe<Scalars['uuid']>;
  thing_id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type Entities_Min_Fields = {
  __typename?: 'entities_min_fields';
  dummy?: Maybe<Scalars['smallint']>;
  group_id?: Maybe<Scalars['uuid']>;
  group_member_id?: Maybe<Scalars['uuid']>;
  group_post_comment_id?: Maybe<Scalars['uuid']>;
  group_post_id?: Maybe<Scalars['uuid']>;
  group_thing_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  join_request_id?: Maybe<Scalars['uuid']>;
  thing_id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "entities" */
export type Entities_Mutation_Response = {
  __typename?: 'entities_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Entities>;
};

/** input type for inserting object relation for remote table "entities" */
export type Entities_Obj_Rel_Insert_Input = {
  data: Entities_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Entities_On_Conflict>;
};

/** on conflict condition type for table "entities" */
export type Entities_On_Conflict = {
  constraint: Entities_Constraint;
  update_columns?: Array<Entities_Update_Column>;
  where?: Maybe<Entities_Bool_Exp>;
};

/** Ordering options when selecting data from "entities". */
export type Entities_Order_By = {
  dummy?: Maybe<Order_By>;
  group?: Maybe<Groups_Order_By>;
  group_id?: Maybe<Order_By>;
  group_join_request?: Maybe<Group_Join_Requests_Order_By>;
  group_member?: Maybe<Group_Members_Order_By>;
  group_member_id?: Maybe<Order_By>;
  group_post?: Maybe<Group_Posts_Order_By>;
  group_post_comment?: Maybe<Group_Post_Comment_Order_By>;
  group_post_comment_id?: Maybe<Order_By>;
  group_post_id?: Maybe<Order_By>;
  group_thing?: Maybe<Group_Thing_Order_By>;
  group_thing_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  is_valid?: Maybe<Order_By>;
  join_request_id?: Maybe<Order_By>;
  thing?: Maybe<Things_Order_By>;
  thing_id?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: entities */
export type Entities_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "entities" */
export enum Entities_Select_Column {
  /** column name */
  Dummy = 'dummy',
  /** column name */
  GroupId = 'group_id',
  /** column name */
  GroupMemberId = 'group_member_id',
  /** column name */
  GroupPostCommentId = 'group_post_comment_id',
  /** column name */
  GroupPostId = 'group_post_id',
  /** column name */
  GroupThingId = 'group_thing_id',
  /** column name */
  Id = 'id',
  /** column name */
  JoinRequestId = 'join_request_id',
  /** column name */
  ThingId = 'thing_id',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "entities" */
export type Entities_Set_Input = {
  dummy?: Maybe<Scalars['smallint']>;
  group_id?: Maybe<Scalars['uuid']>;
  group_member_id?: Maybe<Scalars['uuid']>;
  group_post_comment_id?: Maybe<Scalars['uuid']>;
  group_post_id?: Maybe<Scalars['uuid']>;
  group_thing_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  join_request_id?: Maybe<Scalars['uuid']>;
  thing_id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Entities_Stddev_Fields = {
  __typename?: 'entities_stddev_fields';
  dummy?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Entities_Stddev_Pop_Fields = {
  __typename?: 'entities_stddev_pop_fields';
  dummy?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Entities_Stddev_Samp_Fields = {
  __typename?: 'entities_stddev_samp_fields';
  dummy?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Entities_Sum_Fields = {
  __typename?: 'entities_sum_fields';
  dummy?: Maybe<Scalars['smallint']>;
};

/** update columns of table "entities" */
export enum Entities_Update_Column {
  /** column name */
  Dummy = 'dummy',
  /** column name */
  GroupId = 'group_id',
  /** column name */
  GroupMemberId = 'group_member_id',
  /** column name */
  GroupPostCommentId = 'group_post_comment_id',
  /** column name */
  GroupPostId = 'group_post_id',
  /** column name */
  GroupThingId = 'group_thing_id',
  /** column name */
  Id = 'id',
  /** column name */
  JoinRequestId = 'join_request_id',
  /** column name */
  ThingId = 'thing_id',
  /** column name */
  UserId = 'user_id'
}

/** aggregate var_pop on columns */
export type Entities_Var_Pop_Fields = {
  __typename?: 'entities_var_pop_fields';
  dummy?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Entities_Var_Samp_Fields = {
  __typename?: 'entities_var_samp_fields';
  dummy?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Entities_Variance_Fields = {
  __typename?: 'entities_variance_fields';
  dummy?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "file_uploads" */
export type File_Uploads = {
  __typename?: 'file_uploads';
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  mime_type?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  /** An object relationship */
  owner?: Maybe<Users>;
  owner_id?: Maybe<Scalars['uuid']>;
  size: Scalars['Int'];
  /** An object relationship */
  thing_image?: Maybe<Thing_Images>;
  updated_at: Scalars['timestamptz'];
  url: Scalars['String'];
  /** An array relationship */
  user_profile_pictures: Array<Users>;
  /** An aggregate relationship */
  user_profile_pictures_aggregate: Users_Aggregate;
};


/** columns and relationships of "file_uploads" */
export type File_UploadsUser_Profile_PicturesArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** columns and relationships of "file_uploads" */
export type File_UploadsUser_Profile_Pictures_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};

/** aggregated selection of "file_uploads" */
export type File_Uploads_Aggregate = {
  __typename?: 'file_uploads_aggregate';
  aggregate?: Maybe<File_Uploads_Aggregate_Fields>;
  nodes: Array<File_Uploads>;
};

/** aggregate fields of "file_uploads" */
export type File_Uploads_Aggregate_Fields = {
  __typename?: 'file_uploads_aggregate_fields';
  avg?: Maybe<File_Uploads_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<File_Uploads_Max_Fields>;
  min?: Maybe<File_Uploads_Min_Fields>;
  stddev?: Maybe<File_Uploads_Stddev_Fields>;
  stddev_pop?: Maybe<File_Uploads_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<File_Uploads_Stddev_Samp_Fields>;
  sum?: Maybe<File_Uploads_Sum_Fields>;
  var_pop?: Maybe<File_Uploads_Var_Pop_Fields>;
  var_samp?: Maybe<File_Uploads_Var_Samp_Fields>;
  variance?: Maybe<File_Uploads_Variance_Fields>;
};


/** aggregate fields of "file_uploads" */
export type File_Uploads_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<File_Uploads_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type File_Uploads_Avg_Fields = {
  __typename?: 'file_uploads_avg_fields';
  size?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "file_uploads". All fields are combined with a logical 'AND'. */
export type File_Uploads_Bool_Exp = {
  _and?: Maybe<Array<File_Uploads_Bool_Exp>>;
  _not?: Maybe<File_Uploads_Bool_Exp>;
  _or?: Maybe<Array<File_Uploads_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  mime_type?: Maybe<String_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  owner?: Maybe<Users_Bool_Exp>;
  owner_id?: Maybe<Uuid_Comparison_Exp>;
  size?: Maybe<Int_Comparison_Exp>;
  thing_image?: Maybe<Thing_Images_Bool_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  url?: Maybe<String_Comparison_Exp>;
  user_profile_pictures?: Maybe<Users_Bool_Exp>;
};

/** unique or primary key constraints on table "file_uploads" */
export enum File_Uploads_Constraint {
  /** unique or primary key constraint */
  FileUploadsPkey = 'file_uploads_pkey',
  /** unique or primary key constraint */
  FileUploadsUrlKey = 'file_uploads_url_key'
}

/** input type for incrementing numeric columns in table "file_uploads" */
export type File_Uploads_Inc_Input = {
  size?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "file_uploads" */
export type File_Uploads_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  mime_type?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  owner?: Maybe<Users_Obj_Rel_Insert_Input>;
  owner_id?: Maybe<Scalars['uuid']>;
  size?: Maybe<Scalars['Int']>;
  thing_image?: Maybe<Thing_Images_Obj_Rel_Insert_Input>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  url?: Maybe<Scalars['String']>;
  user_profile_pictures?: Maybe<Users_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type File_Uploads_Max_Fields = {
  __typename?: 'file_uploads_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  mime_type?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  owner_id?: Maybe<Scalars['uuid']>;
  size?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  url?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type File_Uploads_Min_Fields = {
  __typename?: 'file_uploads_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  mime_type?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  owner_id?: Maybe<Scalars['uuid']>;
  size?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  url?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "file_uploads" */
export type File_Uploads_Mutation_Response = {
  __typename?: 'file_uploads_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<File_Uploads>;
};

/** input type for inserting object relation for remote table "file_uploads" */
export type File_Uploads_Obj_Rel_Insert_Input = {
  data: File_Uploads_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<File_Uploads_On_Conflict>;
};

/** on conflict condition type for table "file_uploads" */
export type File_Uploads_On_Conflict = {
  constraint: File_Uploads_Constraint;
  update_columns?: Array<File_Uploads_Update_Column>;
  where?: Maybe<File_Uploads_Bool_Exp>;
};

/** Ordering options when selecting data from "file_uploads". */
export type File_Uploads_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  mime_type?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  owner?: Maybe<Users_Order_By>;
  owner_id?: Maybe<Order_By>;
  size?: Maybe<Order_By>;
  thing_image?: Maybe<Thing_Images_Order_By>;
  updated_at?: Maybe<Order_By>;
  url?: Maybe<Order_By>;
  user_profile_pictures_aggregate?: Maybe<Users_Aggregate_Order_By>;
};

/** primary key columns input for table: file_uploads */
export type File_Uploads_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "file_uploads" */
export enum File_Uploads_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  MimeType = 'mime_type',
  /** column name */
  Name = 'name',
  /** column name */
  OwnerId = 'owner_id',
  /** column name */
  Size = 'size',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Url = 'url'
}

/** input type for updating data in table "file_uploads" */
export type File_Uploads_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  mime_type?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  owner_id?: Maybe<Scalars['uuid']>;
  size?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  url?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type File_Uploads_Stddev_Fields = {
  __typename?: 'file_uploads_stddev_fields';
  size?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type File_Uploads_Stddev_Pop_Fields = {
  __typename?: 'file_uploads_stddev_pop_fields';
  size?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type File_Uploads_Stddev_Samp_Fields = {
  __typename?: 'file_uploads_stddev_samp_fields';
  size?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type File_Uploads_Sum_Fields = {
  __typename?: 'file_uploads_sum_fields';
  size?: Maybe<Scalars['Int']>;
};

/** update columns of table "file_uploads" */
export enum File_Uploads_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  MimeType = 'mime_type',
  /** column name */
  Name = 'name',
  /** column name */
  OwnerId = 'owner_id',
  /** column name */
  Size = 'size',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Url = 'url'
}

/** aggregate var_pop on columns */
export type File_Uploads_Var_Pop_Fields = {
  __typename?: 'file_uploads_var_pop_fields';
  size?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type File_Uploads_Var_Samp_Fields = {
  __typename?: 'file_uploads_var_samp_fields';
  size?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type File_Uploads_Variance_Fields = {
  __typename?: 'file_uploads_variance_fields';
  size?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "group_join_request_status" */
export type Group_Join_Request_Status = {
  __typename?: 'group_join_request_status';
  comment: Scalars['String'];
  value: Scalars['String'];
};

/** aggregated selection of "group_join_request_status" */
export type Group_Join_Request_Status_Aggregate = {
  __typename?: 'group_join_request_status_aggregate';
  aggregate?: Maybe<Group_Join_Request_Status_Aggregate_Fields>;
  nodes: Array<Group_Join_Request_Status>;
};

/** aggregate fields of "group_join_request_status" */
export type Group_Join_Request_Status_Aggregate_Fields = {
  __typename?: 'group_join_request_status_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Group_Join_Request_Status_Max_Fields>;
  min?: Maybe<Group_Join_Request_Status_Min_Fields>;
};


/** aggregate fields of "group_join_request_status" */
export type Group_Join_Request_Status_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Group_Join_Request_Status_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "group_join_request_status". All fields are combined with a logical 'AND'. */
export type Group_Join_Request_Status_Bool_Exp = {
  _and?: Maybe<Array<Group_Join_Request_Status_Bool_Exp>>;
  _not?: Maybe<Group_Join_Request_Status_Bool_Exp>;
  _or?: Maybe<Array<Group_Join_Request_Status_Bool_Exp>>;
  comment?: Maybe<String_Comparison_Exp>;
  value?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "group_join_request_status" */
export enum Group_Join_Request_Status_Constraint {
  /** unique or primary key constraint */
  GroupJoinRequestStatusPkey = 'group_join_request_status_pkey'
}

export enum Group_Join_Request_Status_Enum {
  /** Request accepted */
  Accepted = 'accepted',
  /** Request cancelled */
  Cancelled = 'cancelled',
  /** Pending status */
  Pending = 'pending',
  /** Request rejected */
  Rejected = 'rejected'
}

/** Boolean expression to compare columns of type "group_join_request_status_enum". All fields are combined with logical 'AND'. */
export type Group_Join_Request_Status_Enum_Comparison_Exp = {
  _eq?: Maybe<Group_Join_Request_Status_Enum>;
  _in?: Maybe<Array<Group_Join_Request_Status_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Group_Join_Request_Status_Enum>;
  _nin?: Maybe<Array<Group_Join_Request_Status_Enum>>;
};

/** input type for inserting data into table "group_join_request_status" */
export type Group_Join_Request_Status_Insert_Input = {
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Group_Join_Request_Status_Max_Fields = {
  __typename?: 'group_join_request_status_max_fields';
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Group_Join_Request_Status_Min_Fields = {
  __typename?: 'group_join_request_status_min_fields';
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "group_join_request_status" */
export type Group_Join_Request_Status_Mutation_Response = {
  __typename?: 'group_join_request_status_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Group_Join_Request_Status>;
};

/** on conflict condition type for table "group_join_request_status" */
export type Group_Join_Request_Status_On_Conflict = {
  constraint: Group_Join_Request_Status_Constraint;
  update_columns?: Array<Group_Join_Request_Status_Update_Column>;
  where?: Maybe<Group_Join_Request_Status_Bool_Exp>;
};

/** Ordering options when selecting data from "group_join_request_status". */
export type Group_Join_Request_Status_Order_By = {
  comment?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** primary key columns input for table: group_join_request_status */
export type Group_Join_Request_Status_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "group_join_request_status" */
export enum Group_Join_Request_Status_Select_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "group_join_request_status" */
export type Group_Join_Request_Status_Set_Input = {
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** update columns of table "group_join_request_status" */
export enum Group_Join_Request_Status_Update_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

/** columns and relationships of "group_join_requests" */
export type Group_Join_Requests = {
  __typename?: 'group_join_requests';
  created_at: Scalars['timestamptz'];
  /** An object relationship */
  group: Groups;
  group_id: Scalars['uuid'];
  id: Scalars['uuid'];
  message: Scalars['String'];
  responder_id?: Maybe<Scalars['uuid']>;
  response?: Maybe<Scalars['String']>;
  status?: Maybe<Group_Join_Request_Status_Enum>;
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid'];
};

/** aggregated selection of "group_join_requests" */
export type Group_Join_Requests_Aggregate = {
  __typename?: 'group_join_requests_aggregate';
  aggregate?: Maybe<Group_Join_Requests_Aggregate_Fields>;
  nodes: Array<Group_Join_Requests>;
};

/** aggregate fields of "group_join_requests" */
export type Group_Join_Requests_Aggregate_Fields = {
  __typename?: 'group_join_requests_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Group_Join_Requests_Max_Fields>;
  min?: Maybe<Group_Join_Requests_Min_Fields>;
};


/** aggregate fields of "group_join_requests" */
export type Group_Join_Requests_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Group_Join_Requests_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "group_join_requests" */
export type Group_Join_Requests_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Group_Join_Requests_Max_Order_By>;
  min?: Maybe<Group_Join_Requests_Min_Order_By>;
};

/** input type for inserting array relation for remote table "group_join_requests" */
export type Group_Join_Requests_Arr_Rel_Insert_Input = {
  data: Array<Group_Join_Requests_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Group_Join_Requests_On_Conflict>;
};

/** Boolean expression to filter rows from the table "group_join_requests". All fields are combined with a logical 'AND'. */
export type Group_Join_Requests_Bool_Exp = {
  _and?: Maybe<Array<Group_Join_Requests_Bool_Exp>>;
  _not?: Maybe<Group_Join_Requests_Bool_Exp>;
  _or?: Maybe<Array<Group_Join_Requests_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  group?: Maybe<Groups_Bool_Exp>;
  group_id?: Maybe<Uuid_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  message?: Maybe<String_Comparison_Exp>;
  responder_id?: Maybe<Uuid_Comparison_Exp>;
  response?: Maybe<String_Comparison_Exp>;
  status?: Maybe<Group_Join_Request_Status_Enum_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  user_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "group_join_requests" */
export enum Group_Join_Requests_Constraint {
  /** unique or primary key constraint */
  GroupJoinRequestsPkey = 'group_join_requests_pkey'
}

/** input type for inserting data into table "group_join_requests" */
export type Group_Join_Requests_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  group?: Maybe<Groups_Obj_Rel_Insert_Input>;
  group_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  message?: Maybe<Scalars['String']>;
  responder_id?: Maybe<Scalars['uuid']>;
  response?: Maybe<Scalars['String']>;
  status?: Maybe<Group_Join_Request_Status_Enum>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user?: Maybe<Users_Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Group_Join_Requests_Max_Fields = {
  __typename?: 'group_join_requests_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  group_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  message?: Maybe<Scalars['String']>;
  responder_id?: Maybe<Scalars['uuid']>;
  response?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "group_join_requests" */
export type Group_Join_Requests_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  group_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  message?: Maybe<Order_By>;
  responder_id?: Maybe<Order_By>;
  response?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Group_Join_Requests_Min_Fields = {
  __typename?: 'group_join_requests_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  group_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  message?: Maybe<Scalars['String']>;
  responder_id?: Maybe<Scalars['uuid']>;
  response?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "group_join_requests" */
export type Group_Join_Requests_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  group_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  message?: Maybe<Order_By>;
  responder_id?: Maybe<Order_By>;
  response?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "group_join_requests" */
export type Group_Join_Requests_Mutation_Response = {
  __typename?: 'group_join_requests_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Group_Join_Requests>;
};

/** input type for inserting object relation for remote table "group_join_requests" */
export type Group_Join_Requests_Obj_Rel_Insert_Input = {
  data: Group_Join_Requests_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Group_Join_Requests_On_Conflict>;
};

/** on conflict condition type for table "group_join_requests" */
export type Group_Join_Requests_On_Conflict = {
  constraint: Group_Join_Requests_Constraint;
  update_columns?: Array<Group_Join_Requests_Update_Column>;
  where?: Maybe<Group_Join_Requests_Bool_Exp>;
};

/** Ordering options when selecting data from "group_join_requests". */
export type Group_Join_Requests_Order_By = {
  created_at?: Maybe<Order_By>;
  group?: Maybe<Groups_Order_By>;
  group_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  message?: Maybe<Order_By>;
  responder_id?: Maybe<Order_By>;
  response?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: group_join_requests */
export type Group_Join_Requests_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "group_join_requests" */
export enum Group_Join_Requests_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  GroupId = 'group_id',
  /** column name */
  Id = 'id',
  /** column name */
  Message = 'message',
  /** column name */
  ResponderId = 'responder_id',
  /** column name */
  Response = 'response',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "group_join_requests" */
export type Group_Join_Requests_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  group_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  message?: Maybe<Scalars['String']>;
  responder_id?: Maybe<Scalars['uuid']>;
  response?: Maybe<Scalars['String']>;
  status?: Maybe<Group_Join_Request_Status_Enum>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** update columns of table "group_join_requests" */
export enum Group_Join_Requests_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  GroupId = 'group_id',
  /** column name */
  Id = 'id',
  /** column name */
  Message = 'message',
  /** column name */
  ResponderId = 'responder_id',
  /** column name */
  Response = 'response',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** columns and relationships of "group_join_tokens" */
export type Group_Join_Tokens = {
  __typename?: 'group_join_tokens';
  created_at: Scalars['timestamptz'];
  disabled: Scalars['Boolean'];
  /** An object relationship */
  group: Groups;
  group_id: Scalars['uuid'];
  id: Scalars['uuid'];
  note?: Maybe<Scalars['String']>;
  token: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "group_join_tokens" */
export type Group_Join_Tokens_Aggregate = {
  __typename?: 'group_join_tokens_aggregate';
  aggregate?: Maybe<Group_Join_Tokens_Aggregate_Fields>;
  nodes: Array<Group_Join_Tokens>;
};

/** aggregate fields of "group_join_tokens" */
export type Group_Join_Tokens_Aggregate_Fields = {
  __typename?: 'group_join_tokens_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Group_Join_Tokens_Max_Fields>;
  min?: Maybe<Group_Join_Tokens_Min_Fields>;
};


/** aggregate fields of "group_join_tokens" */
export type Group_Join_Tokens_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Group_Join_Tokens_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "group_join_tokens" */
export type Group_Join_Tokens_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Group_Join_Tokens_Max_Order_By>;
  min?: Maybe<Group_Join_Tokens_Min_Order_By>;
};

/** input type for inserting array relation for remote table "group_join_tokens" */
export type Group_Join_Tokens_Arr_Rel_Insert_Input = {
  data: Array<Group_Join_Tokens_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Group_Join_Tokens_On_Conflict>;
};

/** Boolean expression to filter rows from the table "group_join_tokens". All fields are combined with a logical 'AND'. */
export type Group_Join_Tokens_Bool_Exp = {
  _and?: Maybe<Array<Group_Join_Tokens_Bool_Exp>>;
  _not?: Maybe<Group_Join_Tokens_Bool_Exp>;
  _or?: Maybe<Array<Group_Join_Tokens_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  disabled?: Maybe<Boolean_Comparison_Exp>;
  group?: Maybe<Groups_Bool_Exp>;
  group_id?: Maybe<Uuid_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  note?: Maybe<String_Comparison_Exp>;
  token?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "group_join_tokens" */
export enum Group_Join_Tokens_Constraint {
  /** unique or primary key constraint */
  GroupJoinTokenPkey = 'group_join_token_pkey'
}

/** input type for inserting data into table "group_join_tokens" */
export type Group_Join_Tokens_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  disabled?: Maybe<Scalars['Boolean']>;
  group?: Maybe<Groups_Obj_Rel_Insert_Input>;
  group_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  note?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Group_Join_Tokens_Max_Fields = {
  __typename?: 'group_join_tokens_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  group_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  note?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "group_join_tokens" */
export type Group_Join_Tokens_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  group_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  note?: Maybe<Order_By>;
  token?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Group_Join_Tokens_Min_Fields = {
  __typename?: 'group_join_tokens_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  group_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  note?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "group_join_tokens" */
export type Group_Join_Tokens_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  group_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  note?: Maybe<Order_By>;
  token?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "group_join_tokens" */
export type Group_Join_Tokens_Mutation_Response = {
  __typename?: 'group_join_tokens_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Group_Join_Tokens>;
};

/** on conflict condition type for table "group_join_tokens" */
export type Group_Join_Tokens_On_Conflict = {
  constraint: Group_Join_Tokens_Constraint;
  update_columns?: Array<Group_Join_Tokens_Update_Column>;
  where?: Maybe<Group_Join_Tokens_Bool_Exp>;
};

/** Ordering options when selecting data from "group_join_tokens". */
export type Group_Join_Tokens_Order_By = {
  created_at?: Maybe<Order_By>;
  disabled?: Maybe<Order_By>;
  group?: Maybe<Groups_Order_By>;
  group_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  note?: Maybe<Order_By>;
  token?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: group_join_tokens */
export type Group_Join_Tokens_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "group_join_tokens" */
export enum Group_Join_Tokens_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Disabled = 'disabled',
  /** column name */
  GroupId = 'group_id',
  /** column name */
  Id = 'id',
  /** column name */
  Note = 'note',
  /** column name */
  Token = 'token',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "group_join_tokens" */
export type Group_Join_Tokens_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  disabled?: Maybe<Scalars['Boolean']>;
  group_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  note?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "group_join_tokens" */
export enum Group_Join_Tokens_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Disabled = 'disabled',
  /** column name */
  GroupId = 'group_id',
  /** column name */
  Id = 'id',
  /** column name */
  Note = 'note',
  /** column name */
  Token = 'token',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** columns and relationships of "group_members" */
export type Group_Members = {
  __typename?: 'group_members';
  created_at: Scalars['timestamptz'];
  /** An object relationship */
  group: Groups;
  group_id: Scalars['uuid'];
  id: Scalars['uuid'];
  role: Group_Role_Enum;
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid'];
};

/** aggregated selection of "group_members" */
export type Group_Members_Aggregate = {
  __typename?: 'group_members_aggregate';
  aggregate?: Maybe<Group_Members_Aggregate_Fields>;
  nodes: Array<Group_Members>;
};

/** aggregate fields of "group_members" */
export type Group_Members_Aggregate_Fields = {
  __typename?: 'group_members_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Group_Members_Max_Fields>;
  min?: Maybe<Group_Members_Min_Fields>;
};


/** aggregate fields of "group_members" */
export type Group_Members_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Group_Members_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "group_members" */
export type Group_Members_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Group_Members_Max_Order_By>;
  min?: Maybe<Group_Members_Min_Order_By>;
};

/** input type for inserting array relation for remote table "group_members" */
export type Group_Members_Arr_Rel_Insert_Input = {
  data: Array<Group_Members_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Group_Members_On_Conflict>;
};

/** Boolean expression to filter rows from the table "group_members". All fields are combined with a logical 'AND'. */
export type Group_Members_Bool_Exp = {
  _and?: Maybe<Array<Group_Members_Bool_Exp>>;
  _not?: Maybe<Group_Members_Bool_Exp>;
  _or?: Maybe<Array<Group_Members_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  group?: Maybe<Groups_Bool_Exp>;
  group_id?: Maybe<Uuid_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  role?: Maybe<Group_Role_Enum_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  user_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "group_members" */
export enum Group_Members_Constraint {
  /** unique or primary key constraint */
  GroupMembersPkey = 'group_members_pkey'
}

/** input type for inserting data into table "group_members" */
export type Group_Members_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  group?: Maybe<Groups_Obj_Rel_Insert_Input>;
  group_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  role?: Maybe<Group_Role_Enum>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user?: Maybe<Users_Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Group_Members_Max_Fields = {
  __typename?: 'group_members_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  group_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "group_members" */
export type Group_Members_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  group_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Group_Members_Min_Fields = {
  __typename?: 'group_members_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  group_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "group_members" */
export type Group_Members_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  group_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "group_members" */
export type Group_Members_Mutation_Response = {
  __typename?: 'group_members_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Group_Members>;
};

/** input type for inserting object relation for remote table "group_members" */
export type Group_Members_Obj_Rel_Insert_Input = {
  data: Group_Members_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Group_Members_On_Conflict>;
};

/** on conflict condition type for table "group_members" */
export type Group_Members_On_Conflict = {
  constraint: Group_Members_Constraint;
  update_columns?: Array<Group_Members_Update_Column>;
  where?: Maybe<Group_Members_Bool_Exp>;
};

/** Ordering options when selecting data from "group_members". */
export type Group_Members_Order_By = {
  created_at?: Maybe<Order_By>;
  group?: Maybe<Groups_Order_By>;
  group_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  role?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: group_members */
export type Group_Members_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "group_members" */
export enum Group_Members_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  GroupId = 'group_id',
  /** column name */
  Id = 'id',
  /** column name */
  Role = 'role',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "group_members" */
export type Group_Members_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  group_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  role?: Maybe<Group_Role_Enum>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** update columns of table "group_members" */
export enum Group_Members_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  GroupId = 'group_id',
  /** column name */
  Id = 'id',
  /** column name */
  Role = 'role',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** columns and relationships of "group_post_comment" */
export type Group_Post_Comment = {
  __typename?: 'group_post_comment';
  /** An object relationship */
  comment: Comments;
  comment_id: Scalars['uuid'];
  created_at: Scalars['timestamptz'];
  group_post_id: Scalars['uuid'];
  id: Scalars['uuid'];
  /** An object relationship */
  post: Group_Posts;
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "group_post_comment" */
export type Group_Post_Comment_Aggregate = {
  __typename?: 'group_post_comment_aggregate';
  aggregate?: Maybe<Group_Post_Comment_Aggregate_Fields>;
  nodes: Array<Group_Post_Comment>;
};

/** aggregate fields of "group_post_comment" */
export type Group_Post_Comment_Aggregate_Fields = {
  __typename?: 'group_post_comment_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Group_Post_Comment_Max_Fields>;
  min?: Maybe<Group_Post_Comment_Min_Fields>;
};


/** aggregate fields of "group_post_comment" */
export type Group_Post_Comment_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Group_Post_Comment_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "group_post_comment" */
export type Group_Post_Comment_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Group_Post_Comment_Max_Order_By>;
  min?: Maybe<Group_Post_Comment_Min_Order_By>;
};

/** input type for inserting array relation for remote table "group_post_comment" */
export type Group_Post_Comment_Arr_Rel_Insert_Input = {
  data: Array<Group_Post_Comment_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Group_Post_Comment_On_Conflict>;
};

/** Boolean expression to filter rows from the table "group_post_comment". All fields are combined with a logical 'AND'. */
export type Group_Post_Comment_Bool_Exp = {
  _and?: Maybe<Array<Group_Post_Comment_Bool_Exp>>;
  _not?: Maybe<Group_Post_Comment_Bool_Exp>;
  _or?: Maybe<Array<Group_Post_Comment_Bool_Exp>>;
  comment?: Maybe<Comments_Bool_Exp>;
  comment_id?: Maybe<Uuid_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  group_post_id?: Maybe<Uuid_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  post?: Maybe<Group_Posts_Bool_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "group_post_comment" */
export enum Group_Post_Comment_Constraint {
  /** unique or primary key constraint */
  GroupPostCommentPkey = 'group_post_comment_pkey'
}

/** input type for inserting data into table "group_post_comment" */
export type Group_Post_Comment_Insert_Input = {
  comment?: Maybe<Comments_Obj_Rel_Insert_Input>;
  comment_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  group_post_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  post?: Maybe<Group_Posts_Obj_Rel_Insert_Input>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Group_Post_Comment_Max_Fields = {
  __typename?: 'group_post_comment_max_fields';
  comment_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  group_post_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "group_post_comment" */
export type Group_Post_Comment_Max_Order_By = {
  comment_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  group_post_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Group_Post_Comment_Min_Fields = {
  __typename?: 'group_post_comment_min_fields';
  comment_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  group_post_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "group_post_comment" */
export type Group_Post_Comment_Min_Order_By = {
  comment_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  group_post_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "group_post_comment" */
export type Group_Post_Comment_Mutation_Response = {
  __typename?: 'group_post_comment_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Group_Post_Comment>;
};

/** input type for inserting object relation for remote table "group_post_comment" */
export type Group_Post_Comment_Obj_Rel_Insert_Input = {
  data: Group_Post_Comment_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Group_Post_Comment_On_Conflict>;
};

/** on conflict condition type for table "group_post_comment" */
export type Group_Post_Comment_On_Conflict = {
  constraint: Group_Post_Comment_Constraint;
  update_columns?: Array<Group_Post_Comment_Update_Column>;
  where?: Maybe<Group_Post_Comment_Bool_Exp>;
};

/** Ordering options when selecting data from "group_post_comment". */
export type Group_Post_Comment_Order_By = {
  comment?: Maybe<Comments_Order_By>;
  comment_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  group_post_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  post?: Maybe<Group_Posts_Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: group_post_comment */
export type Group_Post_Comment_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "group_post_comment" */
export enum Group_Post_Comment_Select_Column {
  /** column name */
  CommentId = 'comment_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  GroupPostId = 'group_post_id',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "group_post_comment" */
export type Group_Post_Comment_Set_Input = {
  comment_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  group_post_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "group_post_comment" */
export enum Group_Post_Comment_Update_Column {
  /** column name */
  CommentId = 'comment_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  GroupPostId = 'group_post_id',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** columns and relationships of "group_post_type" */
export type Group_Post_Type = {
  __typename?: 'group_post_type';
  comment: Scalars['String'];
  value: Scalars['String'];
};

/** aggregated selection of "group_post_type" */
export type Group_Post_Type_Aggregate = {
  __typename?: 'group_post_type_aggregate';
  aggregate?: Maybe<Group_Post_Type_Aggregate_Fields>;
  nodes: Array<Group_Post_Type>;
};

/** aggregate fields of "group_post_type" */
export type Group_Post_Type_Aggregate_Fields = {
  __typename?: 'group_post_type_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Group_Post_Type_Max_Fields>;
  min?: Maybe<Group_Post_Type_Min_Fields>;
};


/** aggregate fields of "group_post_type" */
export type Group_Post_Type_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Group_Post_Type_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "group_post_type". All fields are combined with a logical 'AND'. */
export type Group_Post_Type_Bool_Exp = {
  _and?: Maybe<Array<Group_Post_Type_Bool_Exp>>;
  _not?: Maybe<Group_Post_Type_Bool_Exp>;
  _or?: Maybe<Array<Group_Post_Type_Bool_Exp>>;
  comment?: Maybe<String_Comparison_Exp>;
  value?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "group_post_type" */
export enum Group_Post_Type_Constraint {
  /** unique or primary key constraint */
  GroupPostTypePkey = 'group_post_type_pkey'
}

export enum Group_Post_Type_Enum {
  /** a generic message post */
  Message = 'message',
  /** a request for something */
  Request = 'request'
}

/** Boolean expression to compare columns of type "group_post_type_enum". All fields are combined with logical 'AND'. */
export type Group_Post_Type_Enum_Comparison_Exp = {
  _eq?: Maybe<Group_Post_Type_Enum>;
  _in?: Maybe<Array<Group_Post_Type_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Group_Post_Type_Enum>;
  _nin?: Maybe<Array<Group_Post_Type_Enum>>;
};

/** input type for inserting data into table "group_post_type" */
export type Group_Post_Type_Insert_Input = {
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Group_Post_Type_Max_Fields = {
  __typename?: 'group_post_type_max_fields';
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Group_Post_Type_Min_Fields = {
  __typename?: 'group_post_type_min_fields';
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "group_post_type" */
export type Group_Post_Type_Mutation_Response = {
  __typename?: 'group_post_type_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Group_Post_Type>;
};

/** on conflict condition type for table "group_post_type" */
export type Group_Post_Type_On_Conflict = {
  constraint: Group_Post_Type_Constraint;
  update_columns?: Array<Group_Post_Type_Update_Column>;
  where?: Maybe<Group_Post_Type_Bool_Exp>;
};

/** Ordering options when selecting data from "group_post_type". */
export type Group_Post_Type_Order_By = {
  comment?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** primary key columns input for table: group_post_type */
export type Group_Post_Type_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "group_post_type" */
export enum Group_Post_Type_Select_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "group_post_type" */
export type Group_Post_Type_Set_Input = {
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** update columns of table "group_post_type" */
export enum Group_Post_Type_Update_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

/** columns and relationships of "group_posts" */
export type Group_Posts = {
  __typename?: 'group_posts';
  /** An object relationship */
  author: Users;
  author_id: Scalars['uuid'];
  /** An array relationship */
  comments: Array<Group_Post_Comment>;
  /** An aggregate relationship */
  comments_aggregate: Group_Post_Comment_Aggregate;
  content: Scalars['String'];
  created_at: Scalars['timestamptz'];
  /** An object relationship */
  group: Groups;
  group_id: Scalars['uuid'];
  id: Scalars['uuid'];
  resolved: Scalars['Boolean'];
  type: Group_Post_Type_Enum;
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "group_posts" */
export type Group_PostsCommentsArgs = {
  distinct_on?: Maybe<Array<Group_Post_Comment_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Post_Comment_Order_By>>;
  where?: Maybe<Group_Post_Comment_Bool_Exp>;
};


/** columns and relationships of "group_posts" */
export type Group_PostsComments_AggregateArgs = {
  distinct_on?: Maybe<Array<Group_Post_Comment_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Post_Comment_Order_By>>;
  where?: Maybe<Group_Post_Comment_Bool_Exp>;
};

/** aggregated selection of "group_posts" */
export type Group_Posts_Aggregate = {
  __typename?: 'group_posts_aggregate';
  aggregate?: Maybe<Group_Posts_Aggregate_Fields>;
  nodes: Array<Group_Posts>;
};

/** aggregate fields of "group_posts" */
export type Group_Posts_Aggregate_Fields = {
  __typename?: 'group_posts_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Group_Posts_Max_Fields>;
  min?: Maybe<Group_Posts_Min_Fields>;
};


/** aggregate fields of "group_posts" */
export type Group_Posts_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Group_Posts_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "group_posts" */
export type Group_Posts_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Group_Posts_Max_Order_By>;
  min?: Maybe<Group_Posts_Min_Order_By>;
};

/** input type for inserting array relation for remote table "group_posts" */
export type Group_Posts_Arr_Rel_Insert_Input = {
  data: Array<Group_Posts_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Group_Posts_On_Conflict>;
};

/** Boolean expression to filter rows from the table "group_posts". All fields are combined with a logical 'AND'. */
export type Group_Posts_Bool_Exp = {
  _and?: Maybe<Array<Group_Posts_Bool_Exp>>;
  _not?: Maybe<Group_Posts_Bool_Exp>;
  _or?: Maybe<Array<Group_Posts_Bool_Exp>>;
  author?: Maybe<Users_Bool_Exp>;
  author_id?: Maybe<Uuid_Comparison_Exp>;
  comments?: Maybe<Group_Post_Comment_Bool_Exp>;
  content?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  group?: Maybe<Groups_Bool_Exp>;
  group_id?: Maybe<Uuid_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  resolved?: Maybe<Boolean_Comparison_Exp>;
  type?: Maybe<Group_Post_Type_Enum_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "group_posts" */
export enum Group_Posts_Constraint {
  /** unique or primary key constraint */
  GroupPostPkey = 'group_post_pkey'
}

/** input type for inserting data into table "group_posts" */
export type Group_Posts_Insert_Input = {
  author?: Maybe<Users_Obj_Rel_Insert_Input>;
  author_id?: Maybe<Scalars['uuid']>;
  comments?: Maybe<Group_Post_Comment_Arr_Rel_Insert_Input>;
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  group?: Maybe<Groups_Obj_Rel_Insert_Input>;
  group_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  resolved?: Maybe<Scalars['Boolean']>;
  type?: Maybe<Group_Post_Type_Enum>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Group_Posts_Max_Fields = {
  __typename?: 'group_posts_max_fields';
  author_id?: Maybe<Scalars['uuid']>;
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  group_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "group_posts" */
export type Group_Posts_Max_Order_By = {
  author_id?: Maybe<Order_By>;
  content?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  group_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Group_Posts_Min_Fields = {
  __typename?: 'group_posts_min_fields';
  author_id?: Maybe<Scalars['uuid']>;
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  group_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "group_posts" */
export type Group_Posts_Min_Order_By = {
  author_id?: Maybe<Order_By>;
  content?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  group_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "group_posts" */
export type Group_Posts_Mutation_Response = {
  __typename?: 'group_posts_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Group_Posts>;
};

/** input type for inserting object relation for remote table "group_posts" */
export type Group_Posts_Obj_Rel_Insert_Input = {
  data: Group_Posts_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Group_Posts_On_Conflict>;
};

/** on conflict condition type for table "group_posts" */
export type Group_Posts_On_Conflict = {
  constraint: Group_Posts_Constraint;
  update_columns?: Array<Group_Posts_Update_Column>;
  where?: Maybe<Group_Posts_Bool_Exp>;
};

/** Ordering options when selecting data from "group_posts". */
export type Group_Posts_Order_By = {
  author?: Maybe<Users_Order_By>;
  author_id?: Maybe<Order_By>;
  comments_aggregate?: Maybe<Group_Post_Comment_Aggregate_Order_By>;
  content?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  group?: Maybe<Groups_Order_By>;
  group_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  resolved?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: group_posts */
export type Group_Posts_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "group_posts" */
export enum Group_Posts_Select_Column {
  /** column name */
  AuthorId = 'author_id',
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  GroupId = 'group_id',
  /** column name */
  Id = 'id',
  /** column name */
  Resolved = 'resolved',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "group_posts" */
export type Group_Posts_Set_Input = {
  author_id?: Maybe<Scalars['uuid']>;
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  group_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  resolved?: Maybe<Scalars['Boolean']>;
  type?: Maybe<Group_Post_Type_Enum>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "group_posts" */
export enum Group_Posts_Update_Column {
  /** column name */
  AuthorId = 'author_id',
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  GroupId = 'group_id',
  /** column name */
  Id = 'id',
  /** column name */
  Resolved = 'resolved',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** columns and relationships of "group_role" */
export type Group_Role = {
  __typename?: 'group_role';
  comment: Scalars['String'];
  value: Scalars['String'];
};

/** aggregated selection of "group_role" */
export type Group_Role_Aggregate = {
  __typename?: 'group_role_aggregate';
  aggregate?: Maybe<Group_Role_Aggregate_Fields>;
  nodes: Array<Group_Role>;
};

/** aggregate fields of "group_role" */
export type Group_Role_Aggregate_Fields = {
  __typename?: 'group_role_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Group_Role_Max_Fields>;
  min?: Maybe<Group_Role_Min_Fields>;
};


/** aggregate fields of "group_role" */
export type Group_Role_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Group_Role_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "group_role". All fields are combined with a logical 'AND'. */
export type Group_Role_Bool_Exp = {
  _and?: Maybe<Array<Group_Role_Bool_Exp>>;
  _not?: Maybe<Group_Role_Bool_Exp>;
  _or?: Maybe<Array<Group_Role_Bool_Exp>>;
  comment?: Maybe<String_Comparison_Exp>;
  value?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "group_role" */
export enum Group_Role_Constraint {
  /** unique or primary key constraint */
  GroupRolePkey = 'group_role_pkey'
}

export enum Group_Role_Enum {
  /** group administrator role */
  Admin = 'admin',
  /** the owner of the group */
  Owner = 'owner',
  /** regular member */
  User = 'user'
}

/** Boolean expression to compare columns of type "group_role_enum". All fields are combined with logical 'AND'. */
export type Group_Role_Enum_Comparison_Exp = {
  _eq?: Maybe<Group_Role_Enum>;
  _in?: Maybe<Array<Group_Role_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Group_Role_Enum>;
  _nin?: Maybe<Array<Group_Role_Enum>>;
};

/** input type for inserting data into table "group_role" */
export type Group_Role_Insert_Input = {
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Group_Role_Max_Fields = {
  __typename?: 'group_role_max_fields';
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Group_Role_Min_Fields = {
  __typename?: 'group_role_min_fields';
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "group_role" */
export type Group_Role_Mutation_Response = {
  __typename?: 'group_role_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Group_Role>;
};

/** on conflict condition type for table "group_role" */
export type Group_Role_On_Conflict = {
  constraint: Group_Role_Constraint;
  update_columns?: Array<Group_Role_Update_Column>;
  where?: Maybe<Group_Role_Bool_Exp>;
};

/** Ordering options when selecting data from "group_role". */
export type Group_Role_Order_By = {
  comment?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** primary key columns input for table: group_role */
export type Group_Role_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "group_role" */
export enum Group_Role_Select_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "group_role" */
export type Group_Role_Set_Input = {
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** update columns of table "group_role" */
export enum Group_Role_Update_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

/** columns and relationships of "group_thing" */
export type Group_Thing = {
  __typename?: 'group_thing';
  created_at: Scalars['timestamptz'];
  /** An object relationship */
  group: Groups;
  group_id: Scalars['uuid'];
  id: Scalars['uuid'];
  /** An object relationship */
  thing: Things;
  thing_id: Scalars['uuid'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "group_thing" */
export type Group_Thing_Aggregate = {
  __typename?: 'group_thing_aggregate';
  aggregate?: Maybe<Group_Thing_Aggregate_Fields>;
  nodes: Array<Group_Thing>;
};

/** aggregate fields of "group_thing" */
export type Group_Thing_Aggregate_Fields = {
  __typename?: 'group_thing_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Group_Thing_Max_Fields>;
  min?: Maybe<Group_Thing_Min_Fields>;
};


/** aggregate fields of "group_thing" */
export type Group_Thing_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Group_Thing_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "group_thing" */
export type Group_Thing_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Group_Thing_Max_Order_By>;
  min?: Maybe<Group_Thing_Min_Order_By>;
};

/** input type for inserting array relation for remote table "group_thing" */
export type Group_Thing_Arr_Rel_Insert_Input = {
  data: Array<Group_Thing_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Group_Thing_On_Conflict>;
};

/** Boolean expression to filter rows from the table "group_thing". All fields are combined with a logical 'AND'. */
export type Group_Thing_Bool_Exp = {
  _and?: Maybe<Array<Group_Thing_Bool_Exp>>;
  _not?: Maybe<Group_Thing_Bool_Exp>;
  _or?: Maybe<Array<Group_Thing_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  group?: Maybe<Groups_Bool_Exp>;
  group_id?: Maybe<Uuid_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  thing?: Maybe<Things_Bool_Exp>;
  thing_id?: Maybe<Uuid_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "group_thing" */
export enum Group_Thing_Constraint {
  /** unique or primary key constraint */
  GroupThingGroupIdThingIdKey = 'group_thing_group_id_thing_id_key',
  /** unique or primary key constraint */
  GroupThingPkey = 'group_thing_pkey'
}

/** input type for inserting data into table "group_thing" */
export type Group_Thing_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  group?: Maybe<Groups_Obj_Rel_Insert_Input>;
  group_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  thing?: Maybe<Things_Obj_Rel_Insert_Input>;
  thing_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Group_Thing_Max_Fields = {
  __typename?: 'group_thing_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  group_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  thing_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "group_thing" */
export type Group_Thing_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  group_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  thing_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Group_Thing_Min_Fields = {
  __typename?: 'group_thing_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  group_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  thing_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "group_thing" */
export type Group_Thing_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  group_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  thing_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "group_thing" */
export type Group_Thing_Mutation_Response = {
  __typename?: 'group_thing_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Group_Thing>;
};

/** input type for inserting object relation for remote table "group_thing" */
export type Group_Thing_Obj_Rel_Insert_Input = {
  data: Group_Thing_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Group_Thing_On_Conflict>;
};

/** on conflict condition type for table "group_thing" */
export type Group_Thing_On_Conflict = {
  constraint: Group_Thing_Constraint;
  update_columns?: Array<Group_Thing_Update_Column>;
  where?: Maybe<Group_Thing_Bool_Exp>;
};

/** Ordering options when selecting data from "group_thing". */
export type Group_Thing_Order_By = {
  created_at?: Maybe<Order_By>;
  group?: Maybe<Groups_Order_By>;
  group_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  thing?: Maybe<Things_Order_By>;
  thing_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: group_thing */
export type Group_Thing_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "group_thing" */
export enum Group_Thing_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  GroupId = 'group_id',
  /** column name */
  Id = 'id',
  /** column name */
  ThingId = 'thing_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "group_thing" */
export type Group_Thing_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  group_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  thing_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "group_thing" */
export enum Group_Thing_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  GroupId = 'group_id',
  /** column name */
  Id = 'id',
  /** column name */
  ThingId = 'thing_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** columns and relationships of "groups" */
export type Groups = {
  __typename?: 'groups';
  /** An array relationship */
  activities: Array<Activities>;
  /** An aggregate relationship */
  activities_aggregate: Activities_Aggregate;
  created_at: Scalars['timestamptz'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  /** An array relationship */
  join_requests: Array<Group_Join_Requests>;
  /** An aggregate relationship */
  join_requests_aggregate: Group_Join_Requests_Aggregate;
  /** An array relationship */
  join_tokens: Array<Group_Join_Tokens>;
  /** An aggregate relationship */
  join_tokens_aggregate: Group_Join_Tokens_Aggregate;
  /** An array relationship */
  memberships: Array<Group_Members>;
  /** An aggregate relationship */
  memberships_aggregate: Group_Members_Aggregate;
  name: Scalars['String'];
  public: Scalars['Boolean'];
  short_id: Scalars['String'];
  /** An array relationship */
  thing_relations: Array<Group_Thing>;
  /** An aggregate relationship */
  thing_relations_aggregate: Group_Thing_Aggregate;
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "groups" */
export type GroupsActivitiesArgs = {
  distinct_on?: Maybe<Array<Activities_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Activities_Order_By>>;
  where?: Maybe<Activities_Bool_Exp>;
};


/** columns and relationships of "groups" */
export type GroupsActivities_AggregateArgs = {
  distinct_on?: Maybe<Array<Activities_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Activities_Order_By>>;
  where?: Maybe<Activities_Bool_Exp>;
};


/** columns and relationships of "groups" */
export type GroupsJoin_RequestsArgs = {
  distinct_on?: Maybe<Array<Group_Join_Requests_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Join_Requests_Order_By>>;
  where?: Maybe<Group_Join_Requests_Bool_Exp>;
};


/** columns and relationships of "groups" */
export type GroupsJoin_Requests_AggregateArgs = {
  distinct_on?: Maybe<Array<Group_Join_Requests_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Join_Requests_Order_By>>;
  where?: Maybe<Group_Join_Requests_Bool_Exp>;
};


/** columns and relationships of "groups" */
export type GroupsJoin_TokensArgs = {
  distinct_on?: Maybe<Array<Group_Join_Tokens_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Join_Tokens_Order_By>>;
  where?: Maybe<Group_Join_Tokens_Bool_Exp>;
};


/** columns and relationships of "groups" */
export type GroupsJoin_Tokens_AggregateArgs = {
  distinct_on?: Maybe<Array<Group_Join_Tokens_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Join_Tokens_Order_By>>;
  where?: Maybe<Group_Join_Tokens_Bool_Exp>;
};


/** columns and relationships of "groups" */
export type GroupsMembershipsArgs = {
  distinct_on?: Maybe<Array<Group_Members_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Members_Order_By>>;
  where?: Maybe<Group_Members_Bool_Exp>;
};


/** columns and relationships of "groups" */
export type GroupsMemberships_AggregateArgs = {
  distinct_on?: Maybe<Array<Group_Members_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Members_Order_By>>;
  where?: Maybe<Group_Members_Bool_Exp>;
};


/** columns and relationships of "groups" */
export type GroupsThing_RelationsArgs = {
  distinct_on?: Maybe<Array<Group_Thing_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Thing_Order_By>>;
  where?: Maybe<Group_Thing_Bool_Exp>;
};


/** columns and relationships of "groups" */
export type GroupsThing_Relations_AggregateArgs = {
  distinct_on?: Maybe<Array<Group_Thing_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Thing_Order_By>>;
  where?: Maybe<Group_Thing_Bool_Exp>;
};

/** aggregated selection of "groups" */
export type Groups_Aggregate = {
  __typename?: 'groups_aggregate';
  aggregate?: Maybe<Groups_Aggregate_Fields>;
  nodes: Array<Groups>;
};

/** aggregate fields of "groups" */
export type Groups_Aggregate_Fields = {
  __typename?: 'groups_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Groups_Max_Fields>;
  min?: Maybe<Groups_Min_Fields>;
};


/** aggregate fields of "groups" */
export type Groups_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Groups_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "groups". All fields are combined with a logical 'AND'. */
export type Groups_Bool_Exp = {
  _and?: Maybe<Array<Groups_Bool_Exp>>;
  _not?: Maybe<Groups_Bool_Exp>;
  _or?: Maybe<Array<Groups_Bool_Exp>>;
  activities?: Maybe<Activities_Bool_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  join_requests?: Maybe<Group_Join_Requests_Bool_Exp>;
  join_tokens?: Maybe<Group_Join_Tokens_Bool_Exp>;
  memberships?: Maybe<Group_Members_Bool_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  public?: Maybe<Boolean_Comparison_Exp>;
  short_id?: Maybe<String_Comparison_Exp>;
  thing_relations?: Maybe<Group_Thing_Bool_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "groups" */
export enum Groups_Constraint {
  /** unique or primary key constraint */
  GroupsNameKey = 'groups_name_key',
  /** unique or primary key constraint */
  GroupsPkey = 'groups_pkey',
  /** unique or primary key constraint */
  GroupsShortIdKey = 'groups_short_id_key'
}

/** input type for inserting data into table "groups" */
export type Groups_Insert_Input = {
  activities?: Maybe<Activities_Arr_Rel_Insert_Input>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  join_requests?: Maybe<Group_Join_Requests_Arr_Rel_Insert_Input>;
  join_tokens?: Maybe<Group_Join_Tokens_Arr_Rel_Insert_Input>;
  memberships?: Maybe<Group_Members_Arr_Rel_Insert_Input>;
  name?: Maybe<Scalars['String']>;
  public?: Maybe<Scalars['Boolean']>;
  short_id?: Maybe<Scalars['String']>;
  thing_relations?: Maybe<Group_Thing_Arr_Rel_Insert_Input>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Groups_Max_Fields = {
  __typename?: 'groups_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  short_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Groups_Min_Fields = {
  __typename?: 'groups_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  short_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "groups" */
export type Groups_Mutation_Response = {
  __typename?: 'groups_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Groups>;
};

/** input type for inserting object relation for remote table "groups" */
export type Groups_Obj_Rel_Insert_Input = {
  data: Groups_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Groups_On_Conflict>;
};

/** on conflict condition type for table "groups" */
export type Groups_On_Conflict = {
  constraint: Groups_Constraint;
  update_columns?: Array<Groups_Update_Column>;
  where?: Maybe<Groups_Bool_Exp>;
};

/** Ordering options when selecting data from "groups". */
export type Groups_Order_By = {
  activities_aggregate?: Maybe<Activities_Aggregate_Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  join_requests_aggregate?: Maybe<Group_Join_Requests_Aggregate_Order_By>;
  join_tokens_aggregate?: Maybe<Group_Join_Tokens_Aggregate_Order_By>;
  memberships_aggregate?: Maybe<Group_Members_Aggregate_Order_By>;
  name?: Maybe<Order_By>;
  public?: Maybe<Order_By>;
  short_id?: Maybe<Order_By>;
  thing_relations_aggregate?: Maybe<Group_Thing_Aggregate_Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: groups */
export type Groups_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "groups" */
export enum Groups_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Public = 'public',
  /** column name */
  ShortId = 'short_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "groups" */
export type Groups_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  public?: Maybe<Scalars['Boolean']>;
  short_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "groups" */
export enum Groups_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Public = 'public',
  /** column name */
  ShortId = 'short_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  createChatGroup?: Maybe<CreateChatGroupResult>;
  createGroup: CreateGroupResult;
  createJoinToken?: Maybe<CreateJoinTokenResult>;
  deleteThing?: Maybe<DeleteThingOutput>;
  /** delete data from the table: "activities" */
  delete_activities?: Maybe<Activities_Mutation_Response>;
  /** delete single row from the table: "activities" */
  delete_activities_by_pk?: Maybe<Activities>;
  /** delete data from the table: "activity_verb" */
  delete_activity_verb?: Maybe<Activity_Verb_Mutation_Response>;
  /** delete single row from the table: "activity_verb" */
  delete_activity_verb_by_pk?: Maybe<Activity_Verb>;
  /** delete data from the table: "chat_group_members" */
  delete_chat_group_members?: Maybe<Chat_Group_Members_Mutation_Response>;
  /** delete single row from the table: "chat_group_members" */
  delete_chat_group_members_by_pk?: Maybe<Chat_Group_Members>;
  /** delete data from the table: "chat_groups" */
  delete_chat_groups?: Maybe<Chat_Groups_Mutation_Response>;
  /** delete single row from the table: "chat_groups" */
  delete_chat_groups_by_pk?: Maybe<Chat_Groups>;
  /** delete data from the table: "chat_messages" */
  delete_chat_messages?: Maybe<Chat_Messages_Mutation_Response>;
  /** delete single row from the table: "chat_messages" */
  delete_chat_messages_by_pk?: Maybe<Chat_Messages>;
  /** delete data from the table: "comments" */
  delete_comments?: Maybe<Comments_Mutation_Response>;
  /** delete single row from the table: "comments" */
  delete_comments_by_pk?: Maybe<Comments>;
  /** delete data from the table: "entities" */
  delete_entities?: Maybe<Entities_Mutation_Response>;
  /** delete single row from the table: "entities" */
  delete_entities_by_pk?: Maybe<Entities>;
  /** delete data from the table: "file_uploads" */
  delete_file_uploads?: Maybe<File_Uploads_Mutation_Response>;
  /** delete single row from the table: "file_uploads" */
  delete_file_uploads_by_pk?: Maybe<File_Uploads>;
  /** delete data from the table: "group_join_request_status" */
  delete_group_join_request_status?: Maybe<Group_Join_Request_Status_Mutation_Response>;
  /** delete single row from the table: "group_join_request_status" */
  delete_group_join_request_status_by_pk?: Maybe<Group_Join_Request_Status>;
  /** delete data from the table: "group_join_requests" */
  delete_group_join_requests?: Maybe<Group_Join_Requests_Mutation_Response>;
  /** delete single row from the table: "group_join_requests" */
  delete_group_join_requests_by_pk?: Maybe<Group_Join_Requests>;
  /** delete data from the table: "group_join_tokens" */
  delete_group_join_tokens?: Maybe<Group_Join_Tokens_Mutation_Response>;
  /** delete single row from the table: "group_join_tokens" */
  delete_group_join_tokens_by_pk?: Maybe<Group_Join_Tokens>;
  /** delete data from the table: "group_members" */
  delete_group_members?: Maybe<Group_Members_Mutation_Response>;
  /** delete single row from the table: "group_members" */
  delete_group_members_by_pk?: Maybe<Group_Members>;
  /** delete data from the table: "group_post_comment" */
  delete_group_post_comment?: Maybe<Group_Post_Comment_Mutation_Response>;
  /** delete single row from the table: "group_post_comment" */
  delete_group_post_comment_by_pk?: Maybe<Group_Post_Comment>;
  /** delete data from the table: "group_post_type" */
  delete_group_post_type?: Maybe<Group_Post_Type_Mutation_Response>;
  /** delete single row from the table: "group_post_type" */
  delete_group_post_type_by_pk?: Maybe<Group_Post_Type>;
  /** delete data from the table: "group_posts" */
  delete_group_posts?: Maybe<Group_Posts_Mutation_Response>;
  /** delete single row from the table: "group_posts" */
  delete_group_posts_by_pk?: Maybe<Group_Posts>;
  /** delete data from the table: "group_role" */
  delete_group_role?: Maybe<Group_Role_Mutation_Response>;
  /** delete single row from the table: "group_role" */
  delete_group_role_by_pk?: Maybe<Group_Role>;
  /** delete data from the table: "group_thing" */
  delete_group_thing?: Maybe<Group_Thing_Mutation_Response>;
  /** delete single row from the table: "group_thing" */
  delete_group_thing_by_pk?: Maybe<Group_Thing>;
  /** delete data from the table: "groups" */
  delete_groups?: Maybe<Groups_Mutation_Response>;
  /** delete single row from the table: "groups" */
  delete_groups_by_pk?: Maybe<Groups>;
  /** delete data from the table: "notifications" */
  delete_notifications?: Maybe<Notifications_Mutation_Response>;
  /** delete single row from the table: "notifications" */
  delete_notifications_by_pk?: Maybe<Notifications>;
  /** delete data from the table: "thing_images" */
  delete_thing_images?: Maybe<Thing_Images_Mutation_Response>;
  /** delete single row from the table: "thing_images" */
  delete_thing_images_by_pk?: Maybe<Thing_Images>;
  /** delete data from the table: "thing_type" */
  delete_thing_type?: Maybe<Thing_Type_Mutation_Response>;
  /** delete single row from the table: "thing_type" */
  delete_thing_type_by_pk?: Maybe<Thing_Type>;
  /** delete data from the table: "things" */
  delete_things?: Maybe<Things_Mutation_Response>;
  /** delete single row from the table: "things" */
  delete_things_by_pk?: Maybe<Things>;
  /** delete data from the table: "user_private" */
  delete_user_private?: Maybe<User_Private_Mutation_Response>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** delete data from the table: "verification_requests" */
  delete_verification_requests?: Maybe<Verification_Requests_Mutation_Response>;
  /** delete single row from the table: "verification_requests" */
  delete_verification_requests_by_pk?: Maybe<Verification_Requests>;
  handleJoinRequest: HandleJoinRequestResult;
  /** insert data into the table: "activities" */
  insert_activities?: Maybe<Activities_Mutation_Response>;
  /** insert a single row into the table: "activities" */
  insert_activities_one?: Maybe<Activities>;
  /** insert data into the table: "activity_verb" */
  insert_activity_verb?: Maybe<Activity_Verb_Mutation_Response>;
  /** insert a single row into the table: "activity_verb" */
  insert_activity_verb_one?: Maybe<Activity_Verb>;
  /** insert data into the table: "chat_group_members" */
  insert_chat_group_members?: Maybe<Chat_Group_Members_Mutation_Response>;
  /** insert a single row into the table: "chat_group_members" */
  insert_chat_group_members_one?: Maybe<Chat_Group_Members>;
  /** insert data into the table: "chat_groups" */
  insert_chat_groups?: Maybe<Chat_Groups_Mutation_Response>;
  /** insert a single row into the table: "chat_groups" */
  insert_chat_groups_one?: Maybe<Chat_Groups>;
  /** insert data into the table: "chat_messages" */
  insert_chat_messages?: Maybe<Chat_Messages_Mutation_Response>;
  /** insert a single row into the table: "chat_messages" */
  insert_chat_messages_one?: Maybe<Chat_Messages>;
  /** insert data into the table: "comments" */
  insert_comments?: Maybe<Comments_Mutation_Response>;
  /** insert a single row into the table: "comments" */
  insert_comments_one?: Maybe<Comments>;
  /** insert data into the table: "entities" */
  insert_entities?: Maybe<Entities_Mutation_Response>;
  /** insert a single row into the table: "entities" */
  insert_entities_one?: Maybe<Entities>;
  /** insert data into the table: "file_uploads" */
  insert_file_uploads?: Maybe<File_Uploads_Mutation_Response>;
  /** insert a single row into the table: "file_uploads" */
  insert_file_uploads_one?: Maybe<File_Uploads>;
  /** insert data into the table: "group_join_request_status" */
  insert_group_join_request_status?: Maybe<Group_Join_Request_Status_Mutation_Response>;
  /** insert a single row into the table: "group_join_request_status" */
  insert_group_join_request_status_one?: Maybe<Group_Join_Request_Status>;
  /** insert data into the table: "group_join_requests" */
  insert_group_join_requests?: Maybe<Group_Join_Requests_Mutation_Response>;
  /** insert a single row into the table: "group_join_requests" */
  insert_group_join_requests_one?: Maybe<Group_Join_Requests>;
  /** insert data into the table: "group_join_tokens" */
  insert_group_join_tokens?: Maybe<Group_Join_Tokens_Mutation_Response>;
  /** insert a single row into the table: "group_join_tokens" */
  insert_group_join_tokens_one?: Maybe<Group_Join_Tokens>;
  /** insert data into the table: "group_members" */
  insert_group_members?: Maybe<Group_Members_Mutation_Response>;
  /** insert a single row into the table: "group_members" */
  insert_group_members_one?: Maybe<Group_Members>;
  /** insert data into the table: "group_post_comment" */
  insert_group_post_comment?: Maybe<Group_Post_Comment_Mutation_Response>;
  /** insert a single row into the table: "group_post_comment" */
  insert_group_post_comment_one?: Maybe<Group_Post_Comment>;
  /** insert data into the table: "group_post_type" */
  insert_group_post_type?: Maybe<Group_Post_Type_Mutation_Response>;
  /** insert a single row into the table: "group_post_type" */
  insert_group_post_type_one?: Maybe<Group_Post_Type>;
  /** insert data into the table: "group_posts" */
  insert_group_posts?: Maybe<Group_Posts_Mutation_Response>;
  /** insert a single row into the table: "group_posts" */
  insert_group_posts_one?: Maybe<Group_Posts>;
  /** insert data into the table: "group_role" */
  insert_group_role?: Maybe<Group_Role_Mutation_Response>;
  /** insert a single row into the table: "group_role" */
  insert_group_role_one?: Maybe<Group_Role>;
  /** insert data into the table: "group_thing" */
  insert_group_thing?: Maybe<Group_Thing_Mutation_Response>;
  /** insert a single row into the table: "group_thing" */
  insert_group_thing_one?: Maybe<Group_Thing>;
  /** insert data into the table: "groups" */
  insert_groups?: Maybe<Groups_Mutation_Response>;
  /** insert a single row into the table: "groups" */
  insert_groups_one?: Maybe<Groups>;
  /** insert data into the table: "notifications" */
  insert_notifications?: Maybe<Notifications_Mutation_Response>;
  /** insert a single row into the table: "notifications" */
  insert_notifications_one?: Maybe<Notifications>;
  /** insert data into the table: "thing_images" */
  insert_thing_images?: Maybe<Thing_Images_Mutation_Response>;
  /** insert a single row into the table: "thing_images" */
  insert_thing_images_one?: Maybe<Thing_Images>;
  /** insert data into the table: "thing_type" */
  insert_thing_type?: Maybe<Thing_Type_Mutation_Response>;
  /** insert a single row into the table: "thing_type" */
  insert_thing_type_one?: Maybe<Thing_Type>;
  /** insert data into the table: "things" */
  insert_things?: Maybe<Things_Mutation_Response>;
  /** insert a single row into the table: "things" */
  insert_things_one?: Maybe<Things>;
  /** insert data into the table: "user_private" */
  insert_user_private?: Maybe<User_Private_Mutation_Response>;
  /** insert a single row into the table: "user_private" */
  insert_user_private_one?: Maybe<User_Private>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** insert data into the table: "verification_requests" */
  insert_verification_requests?: Maybe<Verification_Requests_Mutation_Response>;
  /** insert a single row into the table: "verification_requests" */
  insert_verification_requests_one?: Maybe<Verification_Requests>;
  joinGroup?: Maybe<JoinGroupResult>;
  registerCredentials?: Maybe<RegistrationResult>;
  requestJoinGroup?: Maybe<RequestJoinGroupResult>;
  updateThing?: Maybe<UpdateThingResult>;
  /** update data of the table: "activities" */
  update_activities?: Maybe<Activities_Mutation_Response>;
  /** update single row of the table: "activities" */
  update_activities_by_pk?: Maybe<Activities>;
  /** update data of the table: "activity_verb" */
  update_activity_verb?: Maybe<Activity_Verb_Mutation_Response>;
  /** update single row of the table: "activity_verb" */
  update_activity_verb_by_pk?: Maybe<Activity_Verb>;
  /** update data of the table: "chat_group_members" */
  update_chat_group_members?: Maybe<Chat_Group_Members_Mutation_Response>;
  /** update single row of the table: "chat_group_members" */
  update_chat_group_members_by_pk?: Maybe<Chat_Group_Members>;
  /** update data of the table: "chat_groups" */
  update_chat_groups?: Maybe<Chat_Groups_Mutation_Response>;
  /** update single row of the table: "chat_groups" */
  update_chat_groups_by_pk?: Maybe<Chat_Groups>;
  /** update data of the table: "chat_messages" */
  update_chat_messages?: Maybe<Chat_Messages_Mutation_Response>;
  /** update single row of the table: "chat_messages" */
  update_chat_messages_by_pk?: Maybe<Chat_Messages>;
  /** update data of the table: "comments" */
  update_comments?: Maybe<Comments_Mutation_Response>;
  /** update single row of the table: "comments" */
  update_comments_by_pk?: Maybe<Comments>;
  /** update data of the table: "entities" */
  update_entities?: Maybe<Entities_Mutation_Response>;
  /** update single row of the table: "entities" */
  update_entities_by_pk?: Maybe<Entities>;
  /** update data of the table: "file_uploads" */
  update_file_uploads?: Maybe<File_Uploads_Mutation_Response>;
  /** update single row of the table: "file_uploads" */
  update_file_uploads_by_pk?: Maybe<File_Uploads>;
  /** update data of the table: "group_join_request_status" */
  update_group_join_request_status?: Maybe<Group_Join_Request_Status_Mutation_Response>;
  /** update single row of the table: "group_join_request_status" */
  update_group_join_request_status_by_pk?: Maybe<Group_Join_Request_Status>;
  /** update data of the table: "group_join_requests" */
  update_group_join_requests?: Maybe<Group_Join_Requests_Mutation_Response>;
  /** update single row of the table: "group_join_requests" */
  update_group_join_requests_by_pk?: Maybe<Group_Join_Requests>;
  /** update data of the table: "group_join_tokens" */
  update_group_join_tokens?: Maybe<Group_Join_Tokens_Mutation_Response>;
  /** update single row of the table: "group_join_tokens" */
  update_group_join_tokens_by_pk?: Maybe<Group_Join_Tokens>;
  /** update data of the table: "group_members" */
  update_group_members?: Maybe<Group_Members_Mutation_Response>;
  /** update single row of the table: "group_members" */
  update_group_members_by_pk?: Maybe<Group_Members>;
  /** update data of the table: "group_post_comment" */
  update_group_post_comment?: Maybe<Group_Post_Comment_Mutation_Response>;
  /** update single row of the table: "group_post_comment" */
  update_group_post_comment_by_pk?: Maybe<Group_Post_Comment>;
  /** update data of the table: "group_post_type" */
  update_group_post_type?: Maybe<Group_Post_Type_Mutation_Response>;
  /** update single row of the table: "group_post_type" */
  update_group_post_type_by_pk?: Maybe<Group_Post_Type>;
  /** update data of the table: "group_posts" */
  update_group_posts?: Maybe<Group_Posts_Mutation_Response>;
  /** update single row of the table: "group_posts" */
  update_group_posts_by_pk?: Maybe<Group_Posts>;
  /** update data of the table: "group_role" */
  update_group_role?: Maybe<Group_Role_Mutation_Response>;
  /** update single row of the table: "group_role" */
  update_group_role_by_pk?: Maybe<Group_Role>;
  /** update data of the table: "group_thing" */
  update_group_thing?: Maybe<Group_Thing_Mutation_Response>;
  /** update single row of the table: "group_thing" */
  update_group_thing_by_pk?: Maybe<Group_Thing>;
  /** update data of the table: "groups" */
  update_groups?: Maybe<Groups_Mutation_Response>;
  /** update single row of the table: "groups" */
  update_groups_by_pk?: Maybe<Groups>;
  /** update data of the table: "notifications" */
  update_notifications?: Maybe<Notifications_Mutation_Response>;
  /** update single row of the table: "notifications" */
  update_notifications_by_pk?: Maybe<Notifications>;
  /** update data of the table: "thing_images" */
  update_thing_images?: Maybe<Thing_Images_Mutation_Response>;
  /** update single row of the table: "thing_images" */
  update_thing_images_by_pk?: Maybe<Thing_Images>;
  /** update data of the table: "thing_type" */
  update_thing_type?: Maybe<Thing_Type_Mutation_Response>;
  /** update single row of the table: "thing_type" */
  update_thing_type_by_pk?: Maybe<Thing_Type>;
  /** update data of the table: "things" */
  update_things?: Maybe<Things_Mutation_Response>;
  /** update single row of the table: "things" */
  update_things_by_pk?: Maybe<Things>;
  /** update data of the table: "user_private" */
  update_user_private?: Maybe<User_Private_Mutation_Response>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
  /** update data of the table: "verification_requests" */
  update_verification_requests?: Maybe<Verification_Requests_Mutation_Response>;
  /** update single row of the table: "verification_requests" */
  update_verification_requests_by_pk?: Maybe<Verification_Requests>;
};


/** mutation root */
export type Mutation_RootCreateChatGroupArgs = {
  input: CreateChatGroupInput;
};


/** mutation root */
export type Mutation_RootCreateGroupArgs = {
  input: CreateGroupInput;
};


/** mutation root */
export type Mutation_RootCreateJoinTokenArgs = {
  input: CreateJoinTokenInput;
};


/** mutation root */
export type Mutation_RootDeleteThingArgs = {
  input: DeleteThingInput;
};


/** mutation root */
export type Mutation_RootDelete_ActivitiesArgs = {
  where: Activities_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Activities_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Activity_VerbArgs = {
  where: Activity_Verb_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Activity_Verb_By_PkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Chat_Group_MembersArgs = {
  where: Chat_Group_Members_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Chat_Group_Members_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Chat_GroupsArgs = {
  where: Chat_Groups_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Chat_Groups_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Chat_MessagesArgs = {
  where: Chat_Messages_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Chat_Messages_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_CommentsArgs = {
  where: Comments_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Comments_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_EntitiesArgs = {
  where: Entities_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Entities_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_File_UploadsArgs = {
  where: File_Uploads_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_File_Uploads_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Group_Join_Request_StatusArgs = {
  where: Group_Join_Request_Status_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Group_Join_Request_Status_By_PkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Group_Join_RequestsArgs = {
  where: Group_Join_Requests_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Group_Join_Requests_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Group_Join_TokensArgs = {
  where: Group_Join_Tokens_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Group_Join_Tokens_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Group_MembersArgs = {
  where: Group_Members_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Group_Members_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Group_Post_CommentArgs = {
  where: Group_Post_Comment_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Group_Post_Comment_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Group_Post_TypeArgs = {
  where: Group_Post_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Group_Post_Type_By_PkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Group_PostsArgs = {
  where: Group_Posts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Group_Posts_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Group_RoleArgs = {
  where: Group_Role_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Group_Role_By_PkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Group_ThingArgs = {
  where: Group_Thing_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Group_Thing_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_GroupsArgs = {
  where: Groups_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Groups_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_NotificationsArgs = {
  where: Notifications_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Notifications_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Thing_ImagesArgs = {
  where: Thing_Images_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Thing_Images_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Thing_TypeArgs = {
  where: Thing_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Thing_Type_By_PkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_ThingsArgs = {
  where: Things_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Things_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_User_PrivateArgs = {
  where: User_Private_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Verification_RequestsArgs = {
  where: Verification_Requests_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Verification_Requests_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootHandleJoinRequestArgs = {
  input: HandleJoinRequestInput;
};


/** mutation root */
export type Mutation_RootInsert_ActivitiesArgs = {
  objects: Array<Activities_Insert_Input>;
  on_conflict?: Maybe<Activities_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Activities_OneArgs = {
  object: Activities_Insert_Input;
  on_conflict?: Maybe<Activities_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Activity_VerbArgs = {
  objects: Array<Activity_Verb_Insert_Input>;
  on_conflict?: Maybe<Activity_Verb_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Activity_Verb_OneArgs = {
  object: Activity_Verb_Insert_Input;
  on_conflict?: Maybe<Activity_Verb_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Chat_Group_MembersArgs = {
  objects: Array<Chat_Group_Members_Insert_Input>;
  on_conflict?: Maybe<Chat_Group_Members_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Chat_Group_Members_OneArgs = {
  object: Chat_Group_Members_Insert_Input;
  on_conflict?: Maybe<Chat_Group_Members_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Chat_GroupsArgs = {
  objects: Array<Chat_Groups_Insert_Input>;
  on_conflict?: Maybe<Chat_Groups_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Chat_Groups_OneArgs = {
  object: Chat_Groups_Insert_Input;
  on_conflict?: Maybe<Chat_Groups_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Chat_MessagesArgs = {
  objects: Array<Chat_Messages_Insert_Input>;
  on_conflict?: Maybe<Chat_Messages_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Chat_Messages_OneArgs = {
  object: Chat_Messages_Insert_Input;
  on_conflict?: Maybe<Chat_Messages_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CommentsArgs = {
  objects: Array<Comments_Insert_Input>;
  on_conflict?: Maybe<Comments_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Comments_OneArgs = {
  object: Comments_Insert_Input;
  on_conflict?: Maybe<Comments_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_EntitiesArgs = {
  objects: Array<Entities_Insert_Input>;
  on_conflict?: Maybe<Entities_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Entities_OneArgs = {
  object: Entities_Insert_Input;
  on_conflict?: Maybe<Entities_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_File_UploadsArgs = {
  objects: Array<File_Uploads_Insert_Input>;
  on_conflict?: Maybe<File_Uploads_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_File_Uploads_OneArgs = {
  object: File_Uploads_Insert_Input;
  on_conflict?: Maybe<File_Uploads_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Group_Join_Request_StatusArgs = {
  objects: Array<Group_Join_Request_Status_Insert_Input>;
  on_conflict?: Maybe<Group_Join_Request_Status_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Group_Join_Request_Status_OneArgs = {
  object: Group_Join_Request_Status_Insert_Input;
  on_conflict?: Maybe<Group_Join_Request_Status_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Group_Join_RequestsArgs = {
  objects: Array<Group_Join_Requests_Insert_Input>;
  on_conflict?: Maybe<Group_Join_Requests_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Group_Join_Requests_OneArgs = {
  object: Group_Join_Requests_Insert_Input;
  on_conflict?: Maybe<Group_Join_Requests_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Group_Join_TokensArgs = {
  objects: Array<Group_Join_Tokens_Insert_Input>;
  on_conflict?: Maybe<Group_Join_Tokens_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Group_Join_Tokens_OneArgs = {
  object: Group_Join_Tokens_Insert_Input;
  on_conflict?: Maybe<Group_Join_Tokens_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Group_MembersArgs = {
  objects: Array<Group_Members_Insert_Input>;
  on_conflict?: Maybe<Group_Members_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Group_Members_OneArgs = {
  object: Group_Members_Insert_Input;
  on_conflict?: Maybe<Group_Members_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Group_Post_CommentArgs = {
  objects: Array<Group_Post_Comment_Insert_Input>;
  on_conflict?: Maybe<Group_Post_Comment_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Group_Post_Comment_OneArgs = {
  object: Group_Post_Comment_Insert_Input;
  on_conflict?: Maybe<Group_Post_Comment_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Group_Post_TypeArgs = {
  objects: Array<Group_Post_Type_Insert_Input>;
  on_conflict?: Maybe<Group_Post_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Group_Post_Type_OneArgs = {
  object: Group_Post_Type_Insert_Input;
  on_conflict?: Maybe<Group_Post_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Group_PostsArgs = {
  objects: Array<Group_Posts_Insert_Input>;
  on_conflict?: Maybe<Group_Posts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Group_Posts_OneArgs = {
  object: Group_Posts_Insert_Input;
  on_conflict?: Maybe<Group_Posts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Group_RoleArgs = {
  objects: Array<Group_Role_Insert_Input>;
  on_conflict?: Maybe<Group_Role_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Group_Role_OneArgs = {
  object: Group_Role_Insert_Input;
  on_conflict?: Maybe<Group_Role_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Group_ThingArgs = {
  objects: Array<Group_Thing_Insert_Input>;
  on_conflict?: Maybe<Group_Thing_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Group_Thing_OneArgs = {
  object: Group_Thing_Insert_Input;
  on_conflict?: Maybe<Group_Thing_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_GroupsArgs = {
  objects: Array<Groups_Insert_Input>;
  on_conflict?: Maybe<Groups_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Groups_OneArgs = {
  object: Groups_Insert_Input;
  on_conflict?: Maybe<Groups_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_NotificationsArgs = {
  objects: Array<Notifications_Insert_Input>;
  on_conflict?: Maybe<Notifications_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Notifications_OneArgs = {
  object: Notifications_Insert_Input;
  on_conflict?: Maybe<Notifications_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Thing_ImagesArgs = {
  objects: Array<Thing_Images_Insert_Input>;
  on_conflict?: Maybe<Thing_Images_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Thing_Images_OneArgs = {
  object: Thing_Images_Insert_Input;
  on_conflict?: Maybe<Thing_Images_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Thing_TypeArgs = {
  objects: Array<Thing_Type_Insert_Input>;
  on_conflict?: Maybe<Thing_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Thing_Type_OneArgs = {
  object: Thing_Type_Insert_Input;
  on_conflict?: Maybe<Thing_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ThingsArgs = {
  objects: Array<Things_Insert_Input>;
  on_conflict?: Maybe<Things_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Things_OneArgs = {
  object: Things_Insert_Input;
  on_conflict?: Maybe<Things_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_PrivateArgs = {
  objects: Array<User_Private_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_User_Private_OneArgs = {
  object: User_Private_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: Maybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Verification_RequestsArgs = {
  objects: Array<Verification_Requests_Insert_Input>;
  on_conflict?: Maybe<Verification_Requests_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Verification_Requests_OneArgs = {
  object: Verification_Requests_Insert_Input;
  on_conflict?: Maybe<Verification_Requests_On_Conflict>;
};


/** mutation root */
export type Mutation_RootJoinGroupArgs = {
  input: JoinGroupInput;
};


/** mutation root */
export type Mutation_RootRegisterCredentialsArgs = {
  input: CredentialsInput;
};


/** mutation root */
export type Mutation_RootRequestJoinGroupArgs = {
  input: RequestJoinGroupInput;
};


/** mutation root */
export type Mutation_RootUpdateThingArgs = {
  input: UpdateThingInput;
};


/** mutation root */
export type Mutation_RootUpdate_ActivitiesArgs = {
  _set?: Maybe<Activities_Set_Input>;
  where: Activities_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Activities_By_PkArgs = {
  _set?: Maybe<Activities_Set_Input>;
  pk_columns: Activities_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Activity_VerbArgs = {
  _set?: Maybe<Activity_Verb_Set_Input>;
  where: Activity_Verb_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Activity_Verb_By_PkArgs = {
  _set?: Maybe<Activity_Verb_Set_Input>;
  pk_columns: Activity_Verb_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Chat_Group_MembersArgs = {
  _set?: Maybe<Chat_Group_Members_Set_Input>;
  where: Chat_Group_Members_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Chat_Group_Members_By_PkArgs = {
  _set?: Maybe<Chat_Group_Members_Set_Input>;
  pk_columns: Chat_Group_Members_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Chat_GroupsArgs = {
  _set?: Maybe<Chat_Groups_Set_Input>;
  where: Chat_Groups_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Chat_Groups_By_PkArgs = {
  _set?: Maybe<Chat_Groups_Set_Input>;
  pk_columns: Chat_Groups_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Chat_MessagesArgs = {
  _set?: Maybe<Chat_Messages_Set_Input>;
  where: Chat_Messages_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Chat_Messages_By_PkArgs = {
  _set?: Maybe<Chat_Messages_Set_Input>;
  pk_columns: Chat_Messages_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_CommentsArgs = {
  _set?: Maybe<Comments_Set_Input>;
  where: Comments_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Comments_By_PkArgs = {
  _set?: Maybe<Comments_Set_Input>;
  pk_columns: Comments_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_EntitiesArgs = {
  _inc?: Maybe<Entities_Inc_Input>;
  _set?: Maybe<Entities_Set_Input>;
  where: Entities_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Entities_By_PkArgs = {
  _inc?: Maybe<Entities_Inc_Input>;
  _set?: Maybe<Entities_Set_Input>;
  pk_columns: Entities_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_File_UploadsArgs = {
  _inc?: Maybe<File_Uploads_Inc_Input>;
  _set?: Maybe<File_Uploads_Set_Input>;
  where: File_Uploads_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_File_Uploads_By_PkArgs = {
  _inc?: Maybe<File_Uploads_Inc_Input>;
  _set?: Maybe<File_Uploads_Set_Input>;
  pk_columns: File_Uploads_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Group_Join_Request_StatusArgs = {
  _set?: Maybe<Group_Join_Request_Status_Set_Input>;
  where: Group_Join_Request_Status_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Group_Join_Request_Status_By_PkArgs = {
  _set?: Maybe<Group_Join_Request_Status_Set_Input>;
  pk_columns: Group_Join_Request_Status_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Group_Join_RequestsArgs = {
  _set?: Maybe<Group_Join_Requests_Set_Input>;
  where: Group_Join_Requests_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Group_Join_Requests_By_PkArgs = {
  _set?: Maybe<Group_Join_Requests_Set_Input>;
  pk_columns: Group_Join_Requests_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Group_Join_TokensArgs = {
  _set?: Maybe<Group_Join_Tokens_Set_Input>;
  where: Group_Join_Tokens_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Group_Join_Tokens_By_PkArgs = {
  _set?: Maybe<Group_Join_Tokens_Set_Input>;
  pk_columns: Group_Join_Tokens_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Group_MembersArgs = {
  _set?: Maybe<Group_Members_Set_Input>;
  where: Group_Members_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Group_Members_By_PkArgs = {
  _set?: Maybe<Group_Members_Set_Input>;
  pk_columns: Group_Members_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Group_Post_CommentArgs = {
  _set?: Maybe<Group_Post_Comment_Set_Input>;
  where: Group_Post_Comment_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Group_Post_Comment_By_PkArgs = {
  _set?: Maybe<Group_Post_Comment_Set_Input>;
  pk_columns: Group_Post_Comment_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Group_Post_TypeArgs = {
  _set?: Maybe<Group_Post_Type_Set_Input>;
  where: Group_Post_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Group_Post_Type_By_PkArgs = {
  _set?: Maybe<Group_Post_Type_Set_Input>;
  pk_columns: Group_Post_Type_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Group_PostsArgs = {
  _set?: Maybe<Group_Posts_Set_Input>;
  where: Group_Posts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Group_Posts_By_PkArgs = {
  _set?: Maybe<Group_Posts_Set_Input>;
  pk_columns: Group_Posts_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Group_RoleArgs = {
  _set?: Maybe<Group_Role_Set_Input>;
  where: Group_Role_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Group_Role_By_PkArgs = {
  _set?: Maybe<Group_Role_Set_Input>;
  pk_columns: Group_Role_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Group_ThingArgs = {
  _set?: Maybe<Group_Thing_Set_Input>;
  where: Group_Thing_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Group_Thing_By_PkArgs = {
  _set?: Maybe<Group_Thing_Set_Input>;
  pk_columns: Group_Thing_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_GroupsArgs = {
  _set?: Maybe<Groups_Set_Input>;
  where: Groups_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Groups_By_PkArgs = {
  _set?: Maybe<Groups_Set_Input>;
  pk_columns: Groups_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_NotificationsArgs = {
  _set?: Maybe<Notifications_Set_Input>;
  where: Notifications_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Notifications_By_PkArgs = {
  _set?: Maybe<Notifications_Set_Input>;
  pk_columns: Notifications_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Thing_ImagesArgs = {
  _inc?: Maybe<Thing_Images_Inc_Input>;
  _set?: Maybe<Thing_Images_Set_Input>;
  where: Thing_Images_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Thing_Images_By_PkArgs = {
  _inc?: Maybe<Thing_Images_Inc_Input>;
  _set?: Maybe<Thing_Images_Set_Input>;
  pk_columns: Thing_Images_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Thing_TypeArgs = {
  _set?: Maybe<Thing_Type_Set_Input>;
  where: Thing_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Thing_Type_By_PkArgs = {
  _set?: Maybe<Thing_Type_Set_Input>;
  pk_columns: Thing_Type_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_ThingsArgs = {
  _set?: Maybe<Things_Set_Input>;
  where: Things_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Things_By_PkArgs = {
  _set?: Maybe<Things_Set_Input>;
  pk_columns: Things_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_PrivateArgs = {
  _set?: Maybe<User_Private_Set_Input>;
  where: User_Private_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: Maybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: Maybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Verification_RequestsArgs = {
  _inc?: Maybe<Verification_Requests_Inc_Input>;
  _set?: Maybe<Verification_Requests_Set_Input>;
  where: Verification_Requests_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Verification_Requests_By_PkArgs = {
  _inc?: Maybe<Verification_Requests_Inc_Input>;
  _set?: Maybe<Verification_Requests_Set_Input>;
  pk_columns: Verification_Requests_Pk_Columns_Input;
};

/** columns and relationships of "notifications" */
export type Notifications = {
  __typename?: 'notifications';
  /** An object relationship */
  activity: Activities;
  activity_id: Scalars['uuid'];
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  read_at?: Maybe<Scalars['timestamptz']>;
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid'];
};

/** aggregated selection of "notifications" */
export type Notifications_Aggregate = {
  __typename?: 'notifications_aggregate';
  aggregate?: Maybe<Notifications_Aggregate_Fields>;
  nodes: Array<Notifications>;
};

/** aggregate fields of "notifications" */
export type Notifications_Aggregate_Fields = {
  __typename?: 'notifications_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Notifications_Max_Fields>;
  min?: Maybe<Notifications_Min_Fields>;
};


/** aggregate fields of "notifications" */
export type Notifications_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Notifications_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "notifications" */
export type Notifications_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Notifications_Max_Order_By>;
  min?: Maybe<Notifications_Min_Order_By>;
};

/** input type for inserting array relation for remote table "notifications" */
export type Notifications_Arr_Rel_Insert_Input = {
  data: Array<Notifications_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Notifications_On_Conflict>;
};

/** Boolean expression to filter rows from the table "notifications". All fields are combined with a logical 'AND'. */
export type Notifications_Bool_Exp = {
  _and?: Maybe<Array<Notifications_Bool_Exp>>;
  _not?: Maybe<Notifications_Bool_Exp>;
  _or?: Maybe<Array<Notifications_Bool_Exp>>;
  activity?: Maybe<Activities_Bool_Exp>;
  activity_id?: Maybe<Uuid_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  read_at?: Maybe<Timestamptz_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  user_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "notifications" */
export enum Notifications_Constraint {
  /** unique or primary key constraint */
  NotificationsPkey = 'notifications_pkey'
}

/** input type for inserting data into table "notifications" */
export type Notifications_Insert_Input = {
  activity?: Maybe<Activities_Obj_Rel_Insert_Input>;
  activity_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  read_at?: Maybe<Scalars['timestamptz']>;
  user?: Maybe<Users_Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Notifications_Max_Fields = {
  __typename?: 'notifications_max_fields';
  activity_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  read_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "notifications" */
export type Notifications_Max_Order_By = {
  activity_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  read_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Notifications_Min_Fields = {
  __typename?: 'notifications_min_fields';
  activity_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  read_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "notifications" */
export type Notifications_Min_Order_By = {
  activity_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  read_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "notifications" */
export type Notifications_Mutation_Response = {
  __typename?: 'notifications_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Notifications>;
};

/** on conflict condition type for table "notifications" */
export type Notifications_On_Conflict = {
  constraint: Notifications_Constraint;
  update_columns?: Array<Notifications_Update_Column>;
  where?: Maybe<Notifications_Bool_Exp>;
};

/** Ordering options when selecting data from "notifications". */
export type Notifications_Order_By = {
  activity?: Maybe<Activities_Order_By>;
  activity_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  read_at?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: notifications */
export type Notifications_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "notifications" */
export enum Notifications_Select_Column {
  /** column name */
  ActivityId = 'activity_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ReadAt = 'read_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "notifications" */
export type Notifications_Set_Input = {
  activity_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  read_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** update columns of table "notifications" */
export enum Notifications_Update_Column {
  /** column name */
  ActivityId = 'activity_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ReadAt = 'read_at',
  /** column name */
  UserId = 'user_id'
}

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** An array relationship */
  activities: Array<Activities>;
  /** An aggregate relationship */
  activities_aggregate: Activities_Aggregate;
  /** fetch data from the table: "activities" using primary key columns */
  activities_by_pk?: Maybe<Activities>;
  /** fetch data from the table: "activity_verb" */
  activity_verb: Array<Activity_Verb>;
  /** fetch aggregated fields from the table: "activity_verb" */
  activity_verb_aggregate: Activity_Verb_Aggregate;
  /** fetch data from the table: "activity_verb" using primary key columns */
  activity_verb_by_pk?: Maybe<Activity_Verb>;
  /** fetch data from the table: "chat_group_members" */
  chat_group_members: Array<Chat_Group_Members>;
  /** fetch aggregated fields from the table: "chat_group_members" */
  chat_group_members_aggregate: Chat_Group_Members_Aggregate;
  /** fetch data from the table: "chat_group_members" using primary key columns */
  chat_group_members_by_pk?: Maybe<Chat_Group_Members>;
  /** fetch data from the table: "chat_groups" */
  chat_groups: Array<Chat_Groups>;
  /** fetch aggregated fields from the table: "chat_groups" */
  chat_groups_aggregate: Chat_Groups_Aggregate;
  /** fetch data from the table: "chat_groups" using primary key columns */
  chat_groups_by_pk?: Maybe<Chat_Groups>;
  /** An array relationship */
  chat_messages: Array<Chat_Messages>;
  /** An aggregate relationship */
  chat_messages_aggregate: Chat_Messages_Aggregate;
  /** fetch data from the table: "chat_messages" using primary key columns */
  chat_messages_by_pk?: Maybe<Chat_Messages>;
  /** An array relationship */
  comments: Array<Comments>;
  /** An aggregate relationship */
  comments_aggregate: Comments_Aggregate;
  /** fetch data from the table: "comments" using primary key columns */
  comments_by_pk?: Maybe<Comments>;
  /** fetch data from the table: "entities" */
  entities: Array<Entities>;
  /** fetch aggregated fields from the table: "entities" */
  entities_aggregate: Entities_Aggregate;
  /** fetch data from the table: "entities" using primary key columns */
  entities_by_pk?: Maybe<Entities>;
  /** fetch data from the table: "file_uploads" */
  file_uploads: Array<File_Uploads>;
  /** fetch aggregated fields from the table: "file_uploads" */
  file_uploads_aggregate: File_Uploads_Aggregate;
  /** fetch data from the table: "file_uploads" using primary key columns */
  file_uploads_by_pk?: Maybe<File_Uploads>;
  /** fetch data from the table: "group_join_request_status" */
  group_join_request_status: Array<Group_Join_Request_Status>;
  /** fetch aggregated fields from the table: "group_join_request_status" */
  group_join_request_status_aggregate: Group_Join_Request_Status_Aggregate;
  /** fetch data from the table: "group_join_request_status" using primary key columns */
  group_join_request_status_by_pk?: Maybe<Group_Join_Request_Status>;
  /** An array relationship */
  group_join_requests: Array<Group_Join_Requests>;
  /** An aggregate relationship */
  group_join_requests_aggregate: Group_Join_Requests_Aggregate;
  /** fetch data from the table: "group_join_requests" using primary key columns */
  group_join_requests_by_pk?: Maybe<Group_Join_Requests>;
  /** fetch data from the table: "group_join_tokens" */
  group_join_tokens: Array<Group_Join_Tokens>;
  /** fetch aggregated fields from the table: "group_join_tokens" */
  group_join_tokens_aggregate: Group_Join_Tokens_Aggregate;
  /** fetch data from the table: "group_join_tokens" using primary key columns */
  group_join_tokens_by_pk?: Maybe<Group_Join_Tokens>;
  /** fetch data from the table: "group_members" */
  group_members: Array<Group_Members>;
  /** fetch aggregated fields from the table: "group_members" */
  group_members_aggregate: Group_Members_Aggregate;
  /** fetch data from the table: "group_members" using primary key columns */
  group_members_by_pk?: Maybe<Group_Members>;
  /** fetch data from the table: "group_post_comment" */
  group_post_comment: Array<Group_Post_Comment>;
  /** fetch aggregated fields from the table: "group_post_comment" */
  group_post_comment_aggregate: Group_Post_Comment_Aggregate;
  /** fetch data from the table: "group_post_comment" using primary key columns */
  group_post_comment_by_pk?: Maybe<Group_Post_Comment>;
  /** fetch data from the table: "group_post_type" */
  group_post_type: Array<Group_Post_Type>;
  /** fetch aggregated fields from the table: "group_post_type" */
  group_post_type_aggregate: Group_Post_Type_Aggregate;
  /** fetch data from the table: "group_post_type" using primary key columns */
  group_post_type_by_pk?: Maybe<Group_Post_Type>;
  /** An array relationship */
  group_posts: Array<Group_Posts>;
  /** An aggregate relationship */
  group_posts_aggregate: Group_Posts_Aggregate;
  /** fetch data from the table: "group_posts" using primary key columns */
  group_posts_by_pk?: Maybe<Group_Posts>;
  /** fetch data from the table: "group_role" */
  group_role: Array<Group_Role>;
  /** fetch aggregated fields from the table: "group_role" */
  group_role_aggregate: Group_Role_Aggregate;
  /** fetch data from the table: "group_role" using primary key columns */
  group_role_by_pk?: Maybe<Group_Role>;
  /** fetch data from the table: "group_thing" */
  group_thing: Array<Group_Thing>;
  /** fetch aggregated fields from the table: "group_thing" */
  group_thing_aggregate: Group_Thing_Aggregate;
  /** fetch data from the table: "group_thing" using primary key columns */
  group_thing_by_pk?: Maybe<Group_Thing>;
  /** fetch data from the table: "groups" */
  groups: Array<Groups>;
  /** fetch aggregated fields from the table: "groups" */
  groups_aggregate: Groups_Aggregate;
  /** fetch data from the table: "groups" using primary key columns */
  groups_by_pk?: Maybe<Groups>;
  /** An array relationship */
  notifications: Array<Notifications>;
  /** An aggregate relationship */
  notifications_aggregate: Notifications_Aggregate;
  /** fetch data from the table: "notifications" using primary key columns */
  notifications_by_pk?: Maybe<Notifications>;
  /** fetch data from the table: "thing_images" */
  thing_images: Array<Thing_Images>;
  /** fetch aggregated fields from the table: "thing_images" */
  thing_images_aggregate: Thing_Images_Aggregate;
  /** fetch data from the table: "thing_images" using primary key columns */
  thing_images_by_pk?: Maybe<Thing_Images>;
  /** fetch data from the table: "thing_type" */
  thing_type: Array<Thing_Type>;
  /** fetch aggregated fields from the table: "thing_type" */
  thing_type_aggregate: Thing_Type_Aggregate;
  /** fetch data from the table: "thing_type" using primary key columns */
  thing_type_by_pk?: Maybe<Thing_Type>;
  /** An array relationship */
  things: Array<Things>;
  /** An aggregate relationship */
  things_aggregate: Things_Aggregate;
  /** fetch data from the table: "things" using primary key columns */
  things_by_pk?: Maybe<Things>;
  /** fetch data from the table: "user_private" */
  user_private: Array<User_Private>;
  /** fetch aggregated fields from the table: "user_private" */
  user_private_aggregate: User_Private_Aggregate;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table: "verification_requests" */
  verification_requests: Array<Verification_Requests>;
  /** fetch aggregated fields from the table: "verification_requests" */
  verification_requests_aggregate: Verification_Requests_Aggregate;
  /** fetch data from the table: "verification_requests" using primary key columns */
  verification_requests_by_pk?: Maybe<Verification_Requests>;
};


export type Query_RootActivitiesArgs = {
  distinct_on?: Maybe<Array<Activities_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Activities_Order_By>>;
  where?: Maybe<Activities_Bool_Exp>;
};


export type Query_RootActivities_AggregateArgs = {
  distinct_on?: Maybe<Array<Activities_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Activities_Order_By>>;
  where?: Maybe<Activities_Bool_Exp>;
};


export type Query_RootActivities_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootActivity_VerbArgs = {
  distinct_on?: Maybe<Array<Activity_Verb_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Activity_Verb_Order_By>>;
  where?: Maybe<Activity_Verb_Bool_Exp>;
};


export type Query_RootActivity_Verb_AggregateArgs = {
  distinct_on?: Maybe<Array<Activity_Verb_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Activity_Verb_Order_By>>;
  where?: Maybe<Activity_Verb_Bool_Exp>;
};


export type Query_RootActivity_Verb_By_PkArgs = {
  value: Scalars['String'];
};


export type Query_RootChat_Group_MembersArgs = {
  distinct_on?: Maybe<Array<Chat_Group_Members_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Chat_Group_Members_Order_By>>;
  where?: Maybe<Chat_Group_Members_Bool_Exp>;
};


export type Query_RootChat_Group_Members_AggregateArgs = {
  distinct_on?: Maybe<Array<Chat_Group_Members_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Chat_Group_Members_Order_By>>;
  where?: Maybe<Chat_Group_Members_Bool_Exp>;
};


export type Query_RootChat_Group_Members_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootChat_GroupsArgs = {
  distinct_on?: Maybe<Array<Chat_Groups_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Chat_Groups_Order_By>>;
  where?: Maybe<Chat_Groups_Bool_Exp>;
};


export type Query_RootChat_Groups_AggregateArgs = {
  distinct_on?: Maybe<Array<Chat_Groups_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Chat_Groups_Order_By>>;
  where?: Maybe<Chat_Groups_Bool_Exp>;
};


export type Query_RootChat_Groups_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootChat_MessagesArgs = {
  distinct_on?: Maybe<Array<Chat_Messages_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Chat_Messages_Order_By>>;
  where?: Maybe<Chat_Messages_Bool_Exp>;
};


export type Query_RootChat_Messages_AggregateArgs = {
  distinct_on?: Maybe<Array<Chat_Messages_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Chat_Messages_Order_By>>;
  where?: Maybe<Chat_Messages_Bool_Exp>;
};


export type Query_RootChat_Messages_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootCommentsArgs = {
  distinct_on?: Maybe<Array<Comments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Comments_Order_By>>;
  where?: Maybe<Comments_Bool_Exp>;
};


export type Query_RootComments_AggregateArgs = {
  distinct_on?: Maybe<Array<Comments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Comments_Order_By>>;
  where?: Maybe<Comments_Bool_Exp>;
};


export type Query_RootComments_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootEntitiesArgs = {
  distinct_on?: Maybe<Array<Entities_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Entities_Order_By>>;
  where?: Maybe<Entities_Bool_Exp>;
};


export type Query_RootEntities_AggregateArgs = {
  distinct_on?: Maybe<Array<Entities_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Entities_Order_By>>;
  where?: Maybe<Entities_Bool_Exp>;
};


export type Query_RootEntities_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootFile_UploadsArgs = {
  distinct_on?: Maybe<Array<File_Uploads_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<File_Uploads_Order_By>>;
  where?: Maybe<File_Uploads_Bool_Exp>;
};


export type Query_RootFile_Uploads_AggregateArgs = {
  distinct_on?: Maybe<Array<File_Uploads_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<File_Uploads_Order_By>>;
  where?: Maybe<File_Uploads_Bool_Exp>;
};


export type Query_RootFile_Uploads_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootGroup_Join_Request_StatusArgs = {
  distinct_on?: Maybe<Array<Group_Join_Request_Status_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Join_Request_Status_Order_By>>;
  where?: Maybe<Group_Join_Request_Status_Bool_Exp>;
};


export type Query_RootGroup_Join_Request_Status_AggregateArgs = {
  distinct_on?: Maybe<Array<Group_Join_Request_Status_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Join_Request_Status_Order_By>>;
  where?: Maybe<Group_Join_Request_Status_Bool_Exp>;
};


export type Query_RootGroup_Join_Request_Status_By_PkArgs = {
  value: Scalars['String'];
};


export type Query_RootGroup_Join_RequestsArgs = {
  distinct_on?: Maybe<Array<Group_Join_Requests_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Join_Requests_Order_By>>;
  where?: Maybe<Group_Join_Requests_Bool_Exp>;
};


export type Query_RootGroup_Join_Requests_AggregateArgs = {
  distinct_on?: Maybe<Array<Group_Join_Requests_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Join_Requests_Order_By>>;
  where?: Maybe<Group_Join_Requests_Bool_Exp>;
};


export type Query_RootGroup_Join_Requests_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootGroup_Join_TokensArgs = {
  distinct_on?: Maybe<Array<Group_Join_Tokens_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Join_Tokens_Order_By>>;
  where?: Maybe<Group_Join_Tokens_Bool_Exp>;
};


export type Query_RootGroup_Join_Tokens_AggregateArgs = {
  distinct_on?: Maybe<Array<Group_Join_Tokens_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Join_Tokens_Order_By>>;
  where?: Maybe<Group_Join_Tokens_Bool_Exp>;
};


export type Query_RootGroup_Join_Tokens_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootGroup_MembersArgs = {
  distinct_on?: Maybe<Array<Group_Members_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Members_Order_By>>;
  where?: Maybe<Group_Members_Bool_Exp>;
};


export type Query_RootGroup_Members_AggregateArgs = {
  distinct_on?: Maybe<Array<Group_Members_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Members_Order_By>>;
  where?: Maybe<Group_Members_Bool_Exp>;
};


export type Query_RootGroup_Members_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootGroup_Post_CommentArgs = {
  distinct_on?: Maybe<Array<Group_Post_Comment_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Post_Comment_Order_By>>;
  where?: Maybe<Group_Post_Comment_Bool_Exp>;
};


export type Query_RootGroup_Post_Comment_AggregateArgs = {
  distinct_on?: Maybe<Array<Group_Post_Comment_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Post_Comment_Order_By>>;
  where?: Maybe<Group_Post_Comment_Bool_Exp>;
};


export type Query_RootGroup_Post_Comment_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootGroup_Post_TypeArgs = {
  distinct_on?: Maybe<Array<Group_Post_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Post_Type_Order_By>>;
  where?: Maybe<Group_Post_Type_Bool_Exp>;
};


export type Query_RootGroup_Post_Type_AggregateArgs = {
  distinct_on?: Maybe<Array<Group_Post_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Post_Type_Order_By>>;
  where?: Maybe<Group_Post_Type_Bool_Exp>;
};


export type Query_RootGroup_Post_Type_By_PkArgs = {
  value: Scalars['String'];
};


export type Query_RootGroup_PostsArgs = {
  distinct_on?: Maybe<Array<Group_Posts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Posts_Order_By>>;
  where?: Maybe<Group_Posts_Bool_Exp>;
};


export type Query_RootGroup_Posts_AggregateArgs = {
  distinct_on?: Maybe<Array<Group_Posts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Posts_Order_By>>;
  where?: Maybe<Group_Posts_Bool_Exp>;
};


export type Query_RootGroup_Posts_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootGroup_RoleArgs = {
  distinct_on?: Maybe<Array<Group_Role_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Role_Order_By>>;
  where?: Maybe<Group_Role_Bool_Exp>;
};


export type Query_RootGroup_Role_AggregateArgs = {
  distinct_on?: Maybe<Array<Group_Role_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Role_Order_By>>;
  where?: Maybe<Group_Role_Bool_Exp>;
};


export type Query_RootGroup_Role_By_PkArgs = {
  value: Scalars['String'];
};


export type Query_RootGroup_ThingArgs = {
  distinct_on?: Maybe<Array<Group_Thing_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Thing_Order_By>>;
  where?: Maybe<Group_Thing_Bool_Exp>;
};


export type Query_RootGroup_Thing_AggregateArgs = {
  distinct_on?: Maybe<Array<Group_Thing_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Thing_Order_By>>;
  where?: Maybe<Group_Thing_Bool_Exp>;
};


export type Query_RootGroup_Thing_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootGroupsArgs = {
  distinct_on?: Maybe<Array<Groups_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Groups_Order_By>>;
  where?: Maybe<Groups_Bool_Exp>;
};


export type Query_RootGroups_AggregateArgs = {
  distinct_on?: Maybe<Array<Groups_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Groups_Order_By>>;
  where?: Maybe<Groups_Bool_Exp>;
};


export type Query_RootGroups_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootNotificationsArgs = {
  distinct_on?: Maybe<Array<Notifications_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Notifications_Order_By>>;
  where?: Maybe<Notifications_Bool_Exp>;
};


export type Query_RootNotifications_AggregateArgs = {
  distinct_on?: Maybe<Array<Notifications_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Notifications_Order_By>>;
  where?: Maybe<Notifications_Bool_Exp>;
};


export type Query_RootNotifications_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootThing_ImagesArgs = {
  distinct_on?: Maybe<Array<Thing_Images_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Thing_Images_Order_By>>;
  where?: Maybe<Thing_Images_Bool_Exp>;
};


export type Query_RootThing_Images_AggregateArgs = {
  distinct_on?: Maybe<Array<Thing_Images_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Thing_Images_Order_By>>;
  where?: Maybe<Thing_Images_Bool_Exp>;
};


export type Query_RootThing_Images_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootThing_TypeArgs = {
  distinct_on?: Maybe<Array<Thing_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Thing_Type_Order_By>>;
  where?: Maybe<Thing_Type_Bool_Exp>;
};


export type Query_RootThing_Type_AggregateArgs = {
  distinct_on?: Maybe<Array<Thing_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Thing_Type_Order_By>>;
  where?: Maybe<Thing_Type_Bool_Exp>;
};


export type Query_RootThing_Type_By_PkArgs = {
  value: Scalars['String'];
};


export type Query_RootThingsArgs = {
  distinct_on?: Maybe<Array<Things_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Things_Order_By>>;
  where?: Maybe<Things_Bool_Exp>;
};


export type Query_RootThings_AggregateArgs = {
  distinct_on?: Maybe<Array<Things_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Things_Order_By>>;
  where?: Maybe<Things_Bool_Exp>;
};


export type Query_RootThings_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootUser_PrivateArgs = {
  distinct_on?: Maybe<Array<User_Private_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Private_Order_By>>;
  where?: Maybe<User_Private_Bool_Exp>;
};


export type Query_RootUser_Private_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Private_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Private_Order_By>>;
  where?: Maybe<User_Private_Bool_Exp>;
};


export type Query_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootVerification_RequestsArgs = {
  distinct_on?: Maybe<Array<Verification_Requests_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Verification_Requests_Order_By>>;
  where?: Maybe<Verification_Requests_Bool_Exp>;
};


export type Query_RootVerification_Requests_AggregateArgs = {
  distinct_on?: Maybe<Array<Verification_Requests_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Verification_Requests_Order_By>>;
  where?: Maybe<Verification_Requests_Bool_Exp>;
};


export type Query_RootVerification_Requests_By_PkArgs = {
  id: Scalars['Int'];
};


/** Boolean expression to compare columns of type "smallint". All fields are combined with logical 'AND'. */
export type Smallint_Comparison_Exp = {
  _eq?: Maybe<Scalars['smallint']>;
  _gt?: Maybe<Scalars['smallint']>;
  _gte?: Maybe<Scalars['smallint']>;
  _in?: Maybe<Array<Scalars['smallint']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['smallint']>;
  _lte?: Maybe<Scalars['smallint']>;
  _neq?: Maybe<Scalars['smallint']>;
  _nin?: Maybe<Array<Scalars['smallint']>>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** An array relationship */
  activities: Array<Activities>;
  /** An aggregate relationship */
  activities_aggregate: Activities_Aggregate;
  /** fetch data from the table: "activities" using primary key columns */
  activities_by_pk?: Maybe<Activities>;
  /** fetch data from the table: "activity_verb" */
  activity_verb: Array<Activity_Verb>;
  /** fetch aggregated fields from the table: "activity_verb" */
  activity_verb_aggregate: Activity_Verb_Aggregate;
  /** fetch data from the table: "activity_verb" using primary key columns */
  activity_verb_by_pk?: Maybe<Activity_Verb>;
  /** fetch data from the table: "chat_group_members" */
  chat_group_members: Array<Chat_Group_Members>;
  /** fetch aggregated fields from the table: "chat_group_members" */
  chat_group_members_aggregate: Chat_Group_Members_Aggregate;
  /** fetch data from the table: "chat_group_members" using primary key columns */
  chat_group_members_by_pk?: Maybe<Chat_Group_Members>;
  /** fetch data from the table: "chat_groups" */
  chat_groups: Array<Chat_Groups>;
  /** fetch aggregated fields from the table: "chat_groups" */
  chat_groups_aggregate: Chat_Groups_Aggregate;
  /** fetch data from the table: "chat_groups" using primary key columns */
  chat_groups_by_pk?: Maybe<Chat_Groups>;
  /** An array relationship */
  chat_messages: Array<Chat_Messages>;
  /** An aggregate relationship */
  chat_messages_aggregate: Chat_Messages_Aggregate;
  /** fetch data from the table: "chat_messages" using primary key columns */
  chat_messages_by_pk?: Maybe<Chat_Messages>;
  /** An array relationship */
  comments: Array<Comments>;
  /** An aggregate relationship */
  comments_aggregate: Comments_Aggregate;
  /** fetch data from the table: "comments" using primary key columns */
  comments_by_pk?: Maybe<Comments>;
  /** fetch data from the table: "entities" */
  entities: Array<Entities>;
  /** fetch aggregated fields from the table: "entities" */
  entities_aggregate: Entities_Aggregate;
  /** fetch data from the table: "entities" using primary key columns */
  entities_by_pk?: Maybe<Entities>;
  /** fetch data from the table: "file_uploads" */
  file_uploads: Array<File_Uploads>;
  /** fetch aggregated fields from the table: "file_uploads" */
  file_uploads_aggregate: File_Uploads_Aggregate;
  /** fetch data from the table: "file_uploads" using primary key columns */
  file_uploads_by_pk?: Maybe<File_Uploads>;
  /** fetch data from the table: "group_join_request_status" */
  group_join_request_status: Array<Group_Join_Request_Status>;
  /** fetch aggregated fields from the table: "group_join_request_status" */
  group_join_request_status_aggregate: Group_Join_Request_Status_Aggregate;
  /** fetch data from the table: "group_join_request_status" using primary key columns */
  group_join_request_status_by_pk?: Maybe<Group_Join_Request_Status>;
  /** An array relationship */
  group_join_requests: Array<Group_Join_Requests>;
  /** An aggregate relationship */
  group_join_requests_aggregate: Group_Join_Requests_Aggregate;
  /** fetch data from the table: "group_join_requests" using primary key columns */
  group_join_requests_by_pk?: Maybe<Group_Join_Requests>;
  /** fetch data from the table: "group_join_tokens" */
  group_join_tokens: Array<Group_Join_Tokens>;
  /** fetch aggregated fields from the table: "group_join_tokens" */
  group_join_tokens_aggregate: Group_Join_Tokens_Aggregate;
  /** fetch data from the table: "group_join_tokens" using primary key columns */
  group_join_tokens_by_pk?: Maybe<Group_Join_Tokens>;
  /** fetch data from the table: "group_members" */
  group_members: Array<Group_Members>;
  /** fetch aggregated fields from the table: "group_members" */
  group_members_aggregate: Group_Members_Aggregate;
  /** fetch data from the table: "group_members" using primary key columns */
  group_members_by_pk?: Maybe<Group_Members>;
  /** fetch data from the table: "group_post_comment" */
  group_post_comment: Array<Group_Post_Comment>;
  /** fetch aggregated fields from the table: "group_post_comment" */
  group_post_comment_aggregate: Group_Post_Comment_Aggregate;
  /** fetch data from the table: "group_post_comment" using primary key columns */
  group_post_comment_by_pk?: Maybe<Group_Post_Comment>;
  /** fetch data from the table: "group_post_type" */
  group_post_type: Array<Group_Post_Type>;
  /** fetch aggregated fields from the table: "group_post_type" */
  group_post_type_aggregate: Group_Post_Type_Aggregate;
  /** fetch data from the table: "group_post_type" using primary key columns */
  group_post_type_by_pk?: Maybe<Group_Post_Type>;
  /** An array relationship */
  group_posts: Array<Group_Posts>;
  /** An aggregate relationship */
  group_posts_aggregate: Group_Posts_Aggregate;
  /** fetch data from the table: "group_posts" using primary key columns */
  group_posts_by_pk?: Maybe<Group_Posts>;
  /** fetch data from the table: "group_role" */
  group_role: Array<Group_Role>;
  /** fetch aggregated fields from the table: "group_role" */
  group_role_aggregate: Group_Role_Aggregate;
  /** fetch data from the table: "group_role" using primary key columns */
  group_role_by_pk?: Maybe<Group_Role>;
  /** fetch data from the table: "group_thing" */
  group_thing: Array<Group_Thing>;
  /** fetch aggregated fields from the table: "group_thing" */
  group_thing_aggregate: Group_Thing_Aggregate;
  /** fetch data from the table: "group_thing" using primary key columns */
  group_thing_by_pk?: Maybe<Group_Thing>;
  /** fetch data from the table: "groups" */
  groups: Array<Groups>;
  /** fetch aggregated fields from the table: "groups" */
  groups_aggregate: Groups_Aggregate;
  /** fetch data from the table: "groups" using primary key columns */
  groups_by_pk?: Maybe<Groups>;
  /** An array relationship */
  notifications: Array<Notifications>;
  /** An aggregate relationship */
  notifications_aggregate: Notifications_Aggregate;
  /** fetch data from the table: "notifications" using primary key columns */
  notifications_by_pk?: Maybe<Notifications>;
  /** fetch data from the table: "thing_images" */
  thing_images: Array<Thing_Images>;
  /** fetch aggregated fields from the table: "thing_images" */
  thing_images_aggregate: Thing_Images_Aggregate;
  /** fetch data from the table: "thing_images" using primary key columns */
  thing_images_by_pk?: Maybe<Thing_Images>;
  /** fetch data from the table: "thing_type" */
  thing_type: Array<Thing_Type>;
  /** fetch aggregated fields from the table: "thing_type" */
  thing_type_aggregate: Thing_Type_Aggregate;
  /** fetch data from the table: "thing_type" using primary key columns */
  thing_type_by_pk?: Maybe<Thing_Type>;
  /** An array relationship */
  things: Array<Things>;
  /** An aggregate relationship */
  things_aggregate: Things_Aggregate;
  /** fetch data from the table: "things" using primary key columns */
  things_by_pk?: Maybe<Things>;
  /** fetch data from the table: "user_private" */
  user_private: Array<User_Private>;
  /** fetch aggregated fields from the table: "user_private" */
  user_private_aggregate: User_Private_Aggregate;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table: "verification_requests" */
  verification_requests: Array<Verification_Requests>;
  /** fetch aggregated fields from the table: "verification_requests" */
  verification_requests_aggregate: Verification_Requests_Aggregate;
  /** fetch data from the table: "verification_requests" using primary key columns */
  verification_requests_by_pk?: Maybe<Verification_Requests>;
};


export type Subscription_RootActivitiesArgs = {
  distinct_on?: Maybe<Array<Activities_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Activities_Order_By>>;
  where?: Maybe<Activities_Bool_Exp>;
};


export type Subscription_RootActivities_AggregateArgs = {
  distinct_on?: Maybe<Array<Activities_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Activities_Order_By>>;
  where?: Maybe<Activities_Bool_Exp>;
};


export type Subscription_RootActivities_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootActivity_VerbArgs = {
  distinct_on?: Maybe<Array<Activity_Verb_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Activity_Verb_Order_By>>;
  where?: Maybe<Activity_Verb_Bool_Exp>;
};


export type Subscription_RootActivity_Verb_AggregateArgs = {
  distinct_on?: Maybe<Array<Activity_Verb_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Activity_Verb_Order_By>>;
  where?: Maybe<Activity_Verb_Bool_Exp>;
};


export type Subscription_RootActivity_Verb_By_PkArgs = {
  value: Scalars['String'];
};


export type Subscription_RootChat_Group_MembersArgs = {
  distinct_on?: Maybe<Array<Chat_Group_Members_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Chat_Group_Members_Order_By>>;
  where?: Maybe<Chat_Group_Members_Bool_Exp>;
};


export type Subscription_RootChat_Group_Members_AggregateArgs = {
  distinct_on?: Maybe<Array<Chat_Group_Members_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Chat_Group_Members_Order_By>>;
  where?: Maybe<Chat_Group_Members_Bool_Exp>;
};


export type Subscription_RootChat_Group_Members_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootChat_GroupsArgs = {
  distinct_on?: Maybe<Array<Chat_Groups_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Chat_Groups_Order_By>>;
  where?: Maybe<Chat_Groups_Bool_Exp>;
};


export type Subscription_RootChat_Groups_AggregateArgs = {
  distinct_on?: Maybe<Array<Chat_Groups_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Chat_Groups_Order_By>>;
  where?: Maybe<Chat_Groups_Bool_Exp>;
};


export type Subscription_RootChat_Groups_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootChat_MessagesArgs = {
  distinct_on?: Maybe<Array<Chat_Messages_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Chat_Messages_Order_By>>;
  where?: Maybe<Chat_Messages_Bool_Exp>;
};


export type Subscription_RootChat_Messages_AggregateArgs = {
  distinct_on?: Maybe<Array<Chat_Messages_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Chat_Messages_Order_By>>;
  where?: Maybe<Chat_Messages_Bool_Exp>;
};


export type Subscription_RootChat_Messages_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootCommentsArgs = {
  distinct_on?: Maybe<Array<Comments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Comments_Order_By>>;
  where?: Maybe<Comments_Bool_Exp>;
};


export type Subscription_RootComments_AggregateArgs = {
  distinct_on?: Maybe<Array<Comments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Comments_Order_By>>;
  where?: Maybe<Comments_Bool_Exp>;
};


export type Subscription_RootComments_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootEntitiesArgs = {
  distinct_on?: Maybe<Array<Entities_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Entities_Order_By>>;
  where?: Maybe<Entities_Bool_Exp>;
};


export type Subscription_RootEntities_AggregateArgs = {
  distinct_on?: Maybe<Array<Entities_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Entities_Order_By>>;
  where?: Maybe<Entities_Bool_Exp>;
};


export type Subscription_RootEntities_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootFile_UploadsArgs = {
  distinct_on?: Maybe<Array<File_Uploads_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<File_Uploads_Order_By>>;
  where?: Maybe<File_Uploads_Bool_Exp>;
};


export type Subscription_RootFile_Uploads_AggregateArgs = {
  distinct_on?: Maybe<Array<File_Uploads_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<File_Uploads_Order_By>>;
  where?: Maybe<File_Uploads_Bool_Exp>;
};


export type Subscription_RootFile_Uploads_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootGroup_Join_Request_StatusArgs = {
  distinct_on?: Maybe<Array<Group_Join_Request_Status_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Join_Request_Status_Order_By>>;
  where?: Maybe<Group_Join_Request_Status_Bool_Exp>;
};


export type Subscription_RootGroup_Join_Request_Status_AggregateArgs = {
  distinct_on?: Maybe<Array<Group_Join_Request_Status_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Join_Request_Status_Order_By>>;
  where?: Maybe<Group_Join_Request_Status_Bool_Exp>;
};


export type Subscription_RootGroup_Join_Request_Status_By_PkArgs = {
  value: Scalars['String'];
};


export type Subscription_RootGroup_Join_RequestsArgs = {
  distinct_on?: Maybe<Array<Group_Join_Requests_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Join_Requests_Order_By>>;
  where?: Maybe<Group_Join_Requests_Bool_Exp>;
};


export type Subscription_RootGroup_Join_Requests_AggregateArgs = {
  distinct_on?: Maybe<Array<Group_Join_Requests_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Join_Requests_Order_By>>;
  where?: Maybe<Group_Join_Requests_Bool_Exp>;
};


export type Subscription_RootGroup_Join_Requests_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootGroup_Join_TokensArgs = {
  distinct_on?: Maybe<Array<Group_Join_Tokens_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Join_Tokens_Order_By>>;
  where?: Maybe<Group_Join_Tokens_Bool_Exp>;
};


export type Subscription_RootGroup_Join_Tokens_AggregateArgs = {
  distinct_on?: Maybe<Array<Group_Join_Tokens_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Join_Tokens_Order_By>>;
  where?: Maybe<Group_Join_Tokens_Bool_Exp>;
};


export type Subscription_RootGroup_Join_Tokens_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootGroup_MembersArgs = {
  distinct_on?: Maybe<Array<Group_Members_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Members_Order_By>>;
  where?: Maybe<Group_Members_Bool_Exp>;
};


export type Subscription_RootGroup_Members_AggregateArgs = {
  distinct_on?: Maybe<Array<Group_Members_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Members_Order_By>>;
  where?: Maybe<Group_Members_Bool_Exp>;
};


export type Subscription_RootGroup_Members_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootGroup_Post_CommentArgs = {
  distinct_on?: Maybe<Array<Group_Post_Comment_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Post_Comment_Order_By>>;
  where?: Maybe<Group_Post_Comment_Bool_Exp>;
};


export type Subscription_RootGroup_Post_Comment_AggregateArgs = {
  distinct_on?: Maybe<Array<Group_Post_Comment_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Post_Comment_Order_By>>;
  where?: Maybe<Group_Post_Comment_Bool_Exp>;
};


export type Subscription_RootGroup_Post_Comment_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootGroup_Post_TypeArgs = {
  distinct_on?: Maybe<Array<Group_Post_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Post_Type_Order_By>>;
  where?: Maybe<Group_Post_Type_Bool_Exp>;
};


export type Subscription_RootGroup_Post_Type_AggregateArgs = {
  distinct_on?: Maybe<Array<Group_Post_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Post_Type_Order_By>>;
  where?: Maybe<Group_Post_Type_Bool_Exp>;
};


export type Subscription_RootGroup_Post_Type_By_PkArgs = {
  value: Scalars['String'];
};


export type Subscription_RootGroup_PostsArgs = {
  distinct_on?: Maybe<Array<Group_Posts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Posts_Order_By>>;
  where?: Maybe<Group_Posts_Bool_Exp>;
};


export type Subscription_RootGroup_Posts_AggregateArgs = {
  distinct_on?: Maybe<Array<Group_Posts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Posts_Order_By>>;
  where?: Maybe<Group_Posts_Bool_Exp>;
};


export type Subscription_RootGroup_Posts_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootGroup_RoleArgs = {
  distinct_on?: Maybe<Array<Group_Role_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Role_Order_By>>;
  where?: Maybe<Group_Role_Bool_Exp>;
};


export type Subscription_RootGroup_Role_AggregateArgs = {
  distinct_on?: Maybe<Array<Group_Role_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Role_Order_By>>;
  where?: Maybe<Group_Role_Bool_Exp>;
};


export type Subscription_RootGroup_Role_By_PkArgs = {
  value: Scalars['String'];
};


export type Subscription_RootGroup_ThingArgs = {
  distinct_on?: Maybe<Array<Group_Thing_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Thing_Order_By>>;
  where?: Maybe<Group_Thing_Bool_Exp>;
};


export type Subscription_RootGroup_Thing_AggregateArgs = {
  distinct_on?: Maybe<Array<Group_Thing_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Thing_Order_By>>;
  where?: Maybe<Group_Thing_Bool_Exp>;
};


export type Subscription_RootGroup_Thing_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootGroupsArgs = {
  distinct_on?: Maybe<Array<Groups_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Groups_Order_By>>;
  where?: Maybe<Groups_Bool_Exp>;
};


export type Subscription_RootGroups_AggregateArgs = {
  distinct_on?: Maybe<Array<Groups_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Groups_Order_By>>;
  where?: Maybe<Groups_Bool_Exp>;
};


export type Subscription_RootGroups_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootNotificationsArgs = {
  distinct_on?: Maybe<Array<Notifications_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Notifications_Order_By>>;
  where?: Maybe<Notifications_Bool_Exp>;
};


export type Subscription_RootNotifications_AggregateArgs = {
  distinct_on?: Maybe<Array<Notifications_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Notifications_Order_By>>;
  where?: Maybe<Notifications_Bool_Exp>;
};


export type Subscription_RootNotifications_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootThing_ImagesArgs = {
  distinct_on?: Maybe<Array<Thing_Images_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Thing_Images_Order_By>>;
  where?: Maybe<Thing_Images_Bool_Exp>;
};


export type Subscription_RootThing_Images_AggregateArgs = {
  distinct_on?: Maybe<Array<Thing_Images_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Thing_Images_Order_By>>;
  where?: Maybe<Thing_Images_Bool_Exp>;
};


export type Subscription_RootThing_Images_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootThing_TypeArgs = {
  distinct_on?: Maybe<Array<Thing_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Thing_Type_Order_By>>;
  where?: Maybe<Thing_Type_Bool_Exp>;
};


export type Subscription_RootThing_Type_AggregateArgs = {
  distinct_on?: Maybe<Array<Thing_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Thing_Type_Order_By>>;
  where?: Maybe<Thing_Type_Bool_Exp>;
};


export type Subscription_RootThing_Type_By_PkArgs = {
  value: Scalars['String'];
};


export type Subscription_RootThingsArgs = {
  distinct_on?: Maybe<Array<Things_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Things_Order_By>>;
  where?: Maybe<Things_Bool_Exp>;
};


export type Subscription_RootThings_AggregateArgs = {
  distinct_on?: Maybe<Array<Things_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Things_Order_By>>;
  where?: Maybe<Things_Bool_Exp>;
};


export type Subscription_RootThings_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootUser_PrivateArgs = {
  distinct_on?: Maybe<Array<User_Private_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Private_Order_By>>;
  where?: Maybe<User_Private_Bool_Exp>;
};


export type Subscription_RootUser_Private_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Private_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Private_Order_By>>;
  where?: Maybe<User_Private_Bool_Exp>;
};


export type Subscription_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootVerification_RequestsArgs = {
  distinct_on?: Maybe<Array<Verification_Requests_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Verification_Requests_Order_By>>;
  where?: Maybe<Verification_Requests_Bool_Exp>;
};


export type Subscription_RootVerification_Requests_AggregateArgs = {
  distinct_on?: Maybe<Array<Verification_Requests_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Verification_Requests_Order_By>>;
  where?: Maybe<Verification_Requests_Bool_Exp>;
};


export type Subscription_RootVerification_Requests_By_PkArgs = {
  id: Scalars['Int'];
};

/** columns and relationships of "thing_images" */
export type Thing_Images = {
  __typename?: 'thing_images';
  created_at: Scalars['timestamptz'];
  description: Scalars['String'];
  /** An object relationship */
  file: File_Uploads;
  file_id: Scalars['uuid'];
  id: Scalars['uuid'];
  order: Scalars['Int'];
  /** An object relationship */
  thing: Things;
  thing_id: Scalars['uuid'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "thing_images" */
export type Thing_Images_Aggregate = {
  __typename?: 'thing_images_aggregate';
  aggregate?: Maybe<Thing_Images_Aggregate_Fields>;
  nodes: Array<Thing_Images>;
};

/** aggregate fields of "thing_images" */
export type Thing_Images_Aggregate_Fields = {
  __typename?: 'thing_images_aggregate_fields';
  avg?: Maybe<Thing_Images_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Thing_Images_Max_Fields>;
  min?: Maybe<Thing_Images_Min_Fields>;
  stddev?: Maybe<Thing_Images_Stddev_Fields>;
  stddev_pop?: Maybe<Thing_Images_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Thing_Images_Stddev_Samp_Fields>;
  sum?: Maybe<Thing_Images_Sum_Fields>;
  var_pop?: Maybe<Thing_Images_Var_Pop_Fields>;
  var_samp?: Maybe<Thing_Images_Var_Samp_Fields>;
  variance?: Maybe<Thing_Images_Variance_Fields>;
};


/** aggregate fields of "thing_images" */
export type Thing_Images_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Thing_Images_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "thing_images" */
export type Thing_Images_Aggregate_Order_By = {
  avg?: Maybe<Thing_Images_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Thing_Images_Max_Order_By>;
  min?: Maybe<Thing_Images_Min_Order_By>;
  stddev?: Maybe<Thing_Images_Stddev_Order_By>;
  stddev_pop?: Maybe<Thing_Images_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Thing_Images_Stddev_Samp_Order_By>;
  sum?: Maybe<Thing_Images_Sum_Order_By>;
  var_pop?: Maybe<Thing_Images_Var_Pop_Order_By>;
  var_samp?: Maybe<Thing_Images_Var_Samp_Order_By>;
  variance?: Maybe<Thing_Images_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "thing_images" */
export type Thing_Images_Arr_Rel_Insert_Input = {
  data: Array<Thing_Images_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Thing_Images_On_Conflict>;
};

/** aggregate avg on columns */
export type Thing_Images_Avg_Fields = {
  __typename?: 'thing_images_avg_fields';
  order?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "thing_images" */
export type Thing_Images_Avg_Order_By = {
  order?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "thing_images". All fields are combined with a logical 'AND'. */
export type Thing_Images_Bool_Exp = {
  _and?: Maybe<Array<Thing_Images_Bool_Exp>>;
  _not?: Maybe<Thing_Images_Bool_Exp>;
  _or?: Maybe<Array<Thing_Images_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  file?: Maybe<File_Uploads_Bool_Exp>;
  file_id?: Maybe<Uuid_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  order?: Maybe<Int_Comparison_Exp>;
  thing?: Maybe<Things_Bool_Exp>;
  thing_id?: Maybe<Uuid_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "thing_images" */
export enum Thing_Images_Constraint {
  /** unique or primary key constraint */
  ThingImagesFileIdKey = 'thing_images_file_id_key',
  /** unique or primary key constraint */
  ThingImagesPkey = 'thing_images_pkey'
}

/** input type for incrementing numeric columns in table "thing_images" */
export type Thing_Images_Inc_Input = {
  order?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "thing_images" */
export type Thing_Images_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  file?: Maybe<File_Uploads_Obj_Rel_Insert_Input>;
  file_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  order?: Maybe<Scalars['Int']>;
  thing?: Maybe<Things_Obj_Rel_Insert_Input>;
  thing_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Thing_Images_Max_Fields = {
  __typename?: 'thing_images_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  file_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  order?: Maybe<Scalars['Int']>;
  thing_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "thing_images" */
export type Thing_Images_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  file_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
  thing_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Thing_Images_Min_Fields = {
  __typename?: 'thing_images_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  file_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  order?: Maybe<Scalars['Int']>;
  thing_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "thing_images" */
export type Thing_Images_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  file_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
  thing_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "thing_images" */
export type Thing_Images_Mutation_Response = {
  __typename?: 'thing_images_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Thing_Images>;
};

/** input type for inserting object relation for remote table "thing_images" */
export type Thing_Images_Obj_Rel_Insert_Input = {
  data: Thing_Images_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Thing_Images_On_Conflict>;
};

/** on conflict condition type for table "thing_images" */
export type Thing_Images_On_Conflict = {
  constraint: Thing_Images_Constraint;
  update_columns?: Array<Thing_Images_Update_Column>;
  where?: Maybe<Thing_Images_Bool_Exp>;
};

/** Ordering options when selecting data from "thing_images". */
export type Thing_Images_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  file?: Maybe<File_Uploads_Order_By>;
  file_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
  thing?: Maybe<Things_Order_By>;
  thing_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: thing_images */
export type Thing_Images_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "thing_images" */
export enum Thing_Images_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  FileId = 'file_id',
  /** column name */
  Id = 'id',
  /** column name */
  Order = 'order',
  /** column name */
  ThingId = 'thing_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "thing_images" */
export type Thing_Images_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  file_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  order?: Maybe<Scalars['Int']>;
  thing_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Thing_Images_Stddev_Fields = {
  __typename?: 'thing_images_stddev_fields';
  order?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "thing_images" */
export type Thing_Images_Stddev_Order_By = {
  order?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Thing_Images_Stddev_Pop_Fields = {
  __typename?: 'thing_images_stddev_pop_fields';
  order?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "thing_images" */
export type Thing_Images_Stddev_Pop_Order_By = {
  order?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Thing_Images_Stddev_Samp_Fields = {
  __typename?: 'thing_images_stddev_samp_fields';
  order?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "thing_images" */
export type Thing_Images_Stddev_Samp_Order_By = {
  order?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Thing_Images_Sum_Fields = {
  __typename?: 'thing_images_sum_fields';
  order?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "thing_images" */
export type Thing_Images_Sum_Order_By = {
  order?: Maybe<Order_By>;
};

/** update columns of table "thing_images" */
export enum Thing_Images_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  FileId = 'file_id',
  /** column name */
  Id = 'id',
  /** column name */
  Order = 'order',
  /** column name */
  ThingId = 'thing_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Thing_Images_Var_Pop_Fields = {
  __typename?: 'thing_images_var_pop_fields';
  order?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "thing_images" */
export type Thing_Images_Var_Pop_Order_By = {
  order?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Thing_Images_Var_Samp_Fields = {
  __typename?: 'thing_images_var_samp_fields';
  order?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "thing_images" */
export type Thing_Images_Var_Samp_Order_By = {
  order?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Thing_Images_Variance_Fields = {
  __typename?: 'thing_images_variance_fields';
  order?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "thing_images" */
export type Thing_Images_Variance_Order_By = {
  order?: Maybe<Order_By>;
};

/** columns and relationships of "thing_type" */
export type Thing_Type = {
  __typename?: 'thing_type';
  comment: Scalars['String'];
  value: Scalars['String'];
};

/** aggregated selection of "thing_type" */
export type Thing_Type_Aggregate = {
  __typename?: 'thing_type_aggregate';
  aggregate?: Maybe<Thing_Type_Aggregate_Fields>;
  nodes: Array<Thing_Type>;
};

/** aggregate fields of "thing_type" */
export type Thing_Type_Aggregate_Fields = {
  __typename?: 'thing_type_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Thing_Type_Max_Fields>;
  min?: Maybe<Thing_Type_Min_Fields>;
};


/** aggregate fields of "thing_type" */
export type Thing_Type_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Thing_Type_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "thing_type". All fields are combined with a logical 'AND'. */
export type Thing_Type_Bool_Exp = {
  _and?: Maybe<Array<Thing_Type_Bool_Exp>>;
  _not?: Maybe<Thing_Type_Bool_Exp>;
  _or?: Maybe<Array<Thing_Type_Bool_Exp>>;
  comment?: Maybe<String_Comparison_Exp>;
  value?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "thing_type" */
export enum Thing_Type_Constraint {
  /** unique or primary key constraint */
  ThingTypePkey = 'thing_type_pkey'
}

export enum Thing_Type_Enum {
  /** give away */
  Give = 'give',
  /** have parts of it */
  HaveSome = 'have_some',
  /** borrow and bring back */
  Lend = 'lend',
  /** something else */
  Other = 'other'
}

/** Boolean expression to compare columns of type "thing_type_enum". All fields are combined with logical 'AND'. */
export type Thing_Type_Enum_Comparison_Exp = {
  _eq?: Maybe<Thing_Type_Enum>;
  _in?: Maybe<Array<Thing_Type_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Thing_Type_Enum>;
  _nin?: Maybe<Array<Thing_Type_Enum>>;
};

/** input type for inserting data into table "thing_type" */
export type Thing_Type_Insert_Input = {
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Thing_Type_Max_Fields = {
  __typename?: 'thing_type_max_fields';
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Thing_Type_Min_Fields = {
  __typename?: 'thing_type_min_fields';
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "thing_type" */
export type Thing_Type_Mutation_Response = {
  __typename?: 'thing_type_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Thing_Type>;
};

/** on conflict condition type for table "thing_type" */
export type Thing_Type_On_Conflict = {
  constraint: Thing_Type_Constraint;
  update_columns?: Array<Thing_Type_Update_Column>;
  where?: Maybe<Thing_Type_Bool_Exp>;
};

/** Ordering options when selecting data from "thing_type". */
export type Thing_Type_Order_By = {
  comment?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** primary key columns input for table: thing_type */
export type Thing_Type_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "thing_type" */
export enum Thing_Type_Select_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "thing_type" */
export type Thing_Type_Set_Input = {
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** update columns of table "thing_type" */
export enum Thing_Type_Update_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

/** columns and relationships of "things" */
export type Things = {
  __typename?: 'things';
  category?: Maybe<Scalars['String']>;
  created_at: Scalars['timestamptz'];
  description: Scalars['String'];
  enabled: Scalars['Boolean'];
  expiry?: Maybe<Scalars['date']>;
  /** An array relationship */
  group_relations: Array<Group_Thing>;
  /** An aggregate relationship */
  group_relations_aggregate: Group_Thing_Aggregate;
  id: Scalars['uuid'];
  /** An array relationship */
  images: Array<Thing_Images>;
  /** An aggregate relationship */
  images_aggregate: Thing_Images_Aggregate;
  name: Scalars['String'];
  /** An object relationship */
  owner: Users;
  owner_id: Scalars['uuid'];
  short_id: Scalars['String'];
  type: Thing_Type_Enum;
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "things" */
export type ThingsGroup_RelationsArgs = {
  distinct_on?: Maybe<Array<Group_Thing_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Thing_Order_By>>;
  where?: Maybe<Group_Thing_Bool_Exp>;
};


/** columns and relationships of "things" */
export type ThingsGroup_Relations_AggregateArgs = {
  distinct_on?: Maybe<Array<Group_Thing_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Thing_Order_By>>;
  where?: Maybe<Group_Thing_Bool_Exp>;
};


/** columns and relationships of "things" */
export type ThingsImagesArgs = {
  distinct_on?: Maybe<Array<Thing_Images_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Thing_Images_Order_By>>;
  where?: Maybe<Thing_Images_Bool_Exp>;
};


/** columns and relationships of "things" */
export type ThingsImages_AggregateArgs = {
  distinct_on?: Maybe<Array<Thing_Images_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Thing_Images_Order_By>>;
  where?: Maybe<Thing_Images_Bool_Exp>;
};

/** aggregated selection of "things" */
export type Things_Aggregate = {
  __typename?: 'things_aggregate';
  aggregate?: Maybe<Things_Aggregate_Fields>;
  nodes: Array<Things>;
};

/** aggregate fields of "things" */
export type Things_Aggregate_Fields = {
  __typename?: 'things_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Things_Max_Fields>;
  min?: Maybe<Things_Min_Fields>;
};


/** aggregate fields of "things" */
export type Things_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Things_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "things" */
export type Things_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Things_Max_Order_By>;
  min?: Maybe<Things_Min_Order_By>;
};

/** input type for inserting array relation for remote table "things" */
export type Things_Arr_Rel_Insert_Input = {
  data: Array<Things_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Things_On_Conflict>;
};

/** Boolean expression to filter rows from the table "things". All fields are combined with a logical 'AND'. */
export type Things_Bool_Exp = {
  _and?: Maybe<Array<Things_Bool_Exp>>;
  _not?: Maybe<Things_Bool_Exp>;
  _or?: Maybe<Array<Things_Bool_Exp>>;
  category?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  enabled?: Maybe<Boolean_Comparison_Exp>;
  expiry?: Maybe<Date_Comparison_Exp>;
  group_relations?: Maybe<Group_Thing_Bool_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  images?: Maybe<Thing_Images_Bool_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  owner?: Maybe<Users_Bool_Exp>;
  owner_id?: Maybe<Uuid_Comparison_Exp>;
  short_id?: Maybe<String_Comparison_Exp>;
  type?: Maybe<Thing_Type_Enum_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "things" */
export enum Things_Constraint {
  /** unique or primary key constraint */
  ThingsPkey = 'things_pkey',
  /** unique or primary key constraint */
  ThingsShortIdKey = 'things_short_id_key'
}

/** input type for inserting data into table "things" */
export type Things_Insert_Input = {
  category?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  enabled?: Maybe<Scalars['Boolean']>;
  expiry?: Maybe<Scalars['date']>;
  group_relations?: Maybe<Group_Thing_Arr_Rel_Insert_Input>;
  id?: Maybe<Scalars['uuid']>;
  images?: Maybe<Thing_Images_Arr_Rel_Insert_Input>;
  name?: Maybe<Scalars['String']>;
  owner?: Maybe<Users_Obj_Rel_Insert_Input>;
  owner_id?: Maybe<Scalars['uuid']>;
  short_id?: Maybe<Scalars['String']>;
  type?: Maybe<Thing_Type_Enum>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Things_Max_Fields = {
  __typename?: 'things_max_fields';
  category?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  expiry?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  owner_id?: Maybe<Scalars['uuid']>;
  short_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "things" */
export type Things_Max_Order_By = {
  category?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  expiry?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  owner_id?: Maybe<Order_By>;
  short_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Things_Min_Fields = {
  __typename?: 'things_min_fields';
  category?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  expiry?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  owner_id?: Maybe<Scalars['uuid']>;
  short_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "things" */
export type Things_Min_Order_By = {
  category?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  expiry?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  owner_id?: Maybe<Order_By>;
  short_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "things" */
export type Things_Mutation_Response = {
  __typename?: 'things_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Things>;
};

/** input type for inserting object relation for remote table "things" */
export type Things_Obj_Rel_Insert_Input = {
  data: Things_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Things_On_Conflict>;
};

/** on conflict condition type for table "things" */
export type Things_On_Conflict = {
  constraint: Things_Constraint;
  update_columns?: Array<Things_Update_Column>;
  where?: Maybe<Things_Bool_Exp>;
};

/** Ordering options when selecting data from "things". */
export type Things_Order_By = {
  category?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  enabled?: Maybe<Order_By>;
  expiry?: Maybe<Order_By>;
  group_relations_aggregate?: Maybe<Group_Thing_Aggregate_Order_By>;
  id?: Maybe<Order_By>;
  images_aggregate?: Maybe<Thing_Images_Aggregate_Order_By>;
  name?: Maybe<Order_By>;
  owner?: Maybe<Users_Order_By>;
  owner_id?: Maybe<Order_By>;
  short_id?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: things */
export type Things_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "things" */
export enum Things_Select_Column {
  /** column name */
  Category = 'category',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Enabled = 'enabled',
  /** column name */
  Expiry = 'expiry',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  OwnerId = 'owner_id',
  /** column name */
  ShortId = 'short_id',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "things" */
export type Things_Set_Input = {
  category?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  enabled?: Maybe<Scalars['Boolean']>;
  expiry?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  owner_id?: Maybe<Scalars['uuid']>;
  short_id?: Maybe<Scalars['String']>;
  type?: Maybe<Thing_Type_Enum>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "things" */
export enum Things_Update_Column {
  /** column name */
  Category = 'category',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Enabled = 'enabled',
  /** column name */
  Expiry = 'expiry',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  OwnerId = 'owner_id',
  /** column name */
  ShortId = 'short_id',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at'
}


/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "user_private" */
export type User_Private = {
  __typename?: 'user_private';
  email?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** aggregated selection of "user_private" */
export type User_Private_Aggregate = {
  __typename?: 'user_private_aggregate';
  aggregate?: Maybe<User_Private_Aggregate_Fields>;
  nodes: Array<User_Private>;
};

/** aggregate fields of "user_private" */
export type User_Private_Aggregate_Fields = {
  __typename?: 'user_private_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<User_Private_Max_Fields>;
  min?: Maybe<User_Private_Min_Fields>;
};


/** aggregate fields of "user_private" */
export type User_Private_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<User_Private_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "user_private". All fields are combined with a logical 'AND'. */
export type User_Private_Bool_Exp = {
  _and?: Maybe<Array<User_Private_Bool_Exp>>;
  _not?: Maybe<User_Private_Bool_Exp>;
  _or?: Maybe<Array<User_Private_Bool_Exp>>;
  email?: Maybe<String_Comparison_Exp>;
  user_id?: Maybe<Uuid_Comparison_Exp>;
};

/** input type for inserting data into table "user_private" */
export type User_Private_Insert_Input = {
  email?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type User_Private_Max_Fields = {
  __typename?: 'user_private_max_fields';
  email?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type User_Private_Min_Fields = {
  __typename?: 'user_private_min_fields';
  email?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "user_private" */
export type User_Private_Mutation_Response = {
  __typename?: 'user_private_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Private>;
};

/** input type for inserting object relation for remote table "user_private" */
export type User_Private_Obj_Rel_Insert_Input = {
  data: User_Private_Insert_Input;
};

/** Ordering options when selecting data from "user_private". */
export type User_Private_Order_By = {
  email?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** select columns of table "user_private" */
export enum User_Private_Select_Column {
  /** column name */
  Email = 'email',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "user_private" */
export type User_Private_Set_Input = {
  email?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  auth0_id?: Maybe<Scalars['String']>;
  /** An array relationship */
  chat_group_memberships: Array<Chat_Group_Members>;
  /** An aggregate relationship */
  chat_group_memberships_aggregate: Chat_Group_Members_Aggregate;
  /** An array relationship */
  chat_messages: Array<Chat_Messages>;
  /** An aggregate relationship */
  chat_messages_aggregate: Chat_Messages_Aggregate;
  /** An array relationship */
  comments: Array<Comments>;
  /** An aggregate relationship */
  comments_aggregate: Comments_Aggregate;
  created_at: Scalars['timestamptz'];
  email?: Maybe<Scalars['String']>;
  email_verified?: Maybe<Scalars['timestamptz']>;
  /** An array relationship */
  group_join_requests: Array<Group_Join_Requests>;
  /** An aggregate relationship */
  group_join_requests_aggregate: Group_Join_Requests_Aggregate;
  /** An array relationship */
  group_posts: Array<Group_Posts>;
  /** An aggregate relationship */
  group_posts_aggregate: Group_Posts_Aggregate;
  id: Scalars['uuid'];
  image?: Maybe<Scalars['String']>;
  last_chat_notification?: Maybe<Scalars['timestamptz']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  /** An array relationship */
  memberships: Array<Group_Members>;
  /** An aggregate relationship */
  memberships_aggregate: Group_Members_Aggregate;
  name: Scalars['String'];
  password_hash?: Maybe<Scalars['String']>;
  /** An object relationship */
  private_info?: Maybe<User_Private>;
  /** An object relationship */
  profile_picture?: Maybe<File_Uploads>;
  profile_picture_id?: Maybe<Scalars['uuid']>;
  /** An array relationship */
  things: Array<Things>;
  /** An aggregate relationship */
  things_aggregate: Things_Aggregate;
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "users" */
export type UsersChat_Group_MembershipsArgs = {
  distinct_on?: Maybe<Array<Chat_Group_Members_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Chat_Group_Members_Order_By>>;
  where?: Maybe<Chat_Group_Members_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersChat_Group_Memberships_AggregateArgs = {
  distinct_on?: Maybe<Array<Chat_Group_Members_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Chat_Group_Members_Order_By>>;
  where?: Maybe<Chat_Group_Members_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersChat_MessagesArgs = {
  distinct_on?: Maybe<Array<Chat_Messages_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Chat_Messages_Order_By>>;
  where?: Maybe<Chat_Messages_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersChat_Messages_AggregateArgs = {
  distinct_on?: Maybe<Array<Chat_Messages_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Chat_Messages_Order_By>>;
  where?: Maybe<Chat_Messages_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersCommentsArgs = {
  distinct_on?: Maybe<Array<Comments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Comments_Order_By>>;
  where?: Maybe<Comments_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersComments_AggregateArgs = {
  distinct_on?: Maybe<Array<Comments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Comments_Order_By>>;
  where?: Maybe<Comments_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersGroup_Join_RequestsArgs = {
  distinct_on?: Maybe<Array<Group_Join_Requests_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Join_Requests_Order_By>>;
  where?: Maybe<Group_Join_Requests_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersGroup_Join_Requests_AggregateArgs = {
  distinct_on?: Maybe<Array<Group_Join_Requests_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Join_Requests_Order_By>>;
  where?: Maybe<Group_Join_Requests_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersGroup_PostsArgs = {
  distinct_on?: Maybe<Array<Group_Posts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Posts_Order_By>>;
  where?: Maybe<Group_Posts_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersGroup_Posts_AggregateArgs = {
  distinct_on?: Maybe<Array<Group_Posts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Posts_Order_By>>;
  where?: Maybe<Group_Posts_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersMembershipsArgs = {
  distinct_on?: Maybe<Array<Group_Members_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Members_Order_By>>;
  where?: Maybe<Group_Members_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersMemberships_AggregateArgs = {
  distinct_on?: Maybe<Array<Group_Members_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Members_Order_By>>;
  where?: Maybe<Group_Members_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersThingsArgs = {
  distinct_on?: Maybe<Array<Things_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Things_Order_By>>;
  where?: Maybe<Things_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersThings_AggregateArgs = {
  distinct_on?: Maybe<Array<Things_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Things_Order_By>>;
  where?: Maybe<Things_Bool_Exp>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Users_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "users" */
export type Users_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Users_Max_Order_By>;
  min?: Maybe<Users_Min_Order_By>;
};

/** input type for inserting array relation for remote table "users" */
export type Users_Arr_Rel_Insert_Input = {
  data: Array<Users_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: Maybe<Array<Users_Bool_Exp>>;
  _not?: Maybe<Users_Bool_Exp>;
  _or?: Maybe<Array<Users_Bool_Exp>>;
  auth0_id?: Maybe<String_Comparison_Exp>;
  chat_group_memberships?: Maybe<Chat_Group_Members_Bool_Exp>;
  chat_messages?: Maybe<Chat_Messages_Bool_Exp>;
  comments?: Maybe<Comments_Bool_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  email?: Maybe<String_Comparison_Exp>;
  email_verified?: Maybe<Timestamptz_Comparison_Exp>;
  group_join_requests?: Maybe<Group_Join_Requests_Bool_Exp>;
  group_posts?: Maybe<Group_Posts_Bool_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  image?: Maybe<String_Comparison_Exp>;
  last_chat_notification?: Maybe<Timestamptz_Comparison_Exp>;
  last_seen?: Maybe<Timestamptz_Comparison_Exp>;
  memberships?: Maybe<Group_Members_Bool_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  password_hash?: Maybe<String_Comparison_Exp>;
  private_info?: Maybe<User_Private_Bool_Exp>;
  profile_picture?: Maybe<File_Uploads_Bool_Exp>;
  profile_picture_id?: Maybe<Uuid_Comparison_Exp>;
  things?: Maybe<Things_Bool_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint */
  Email = 'email',
  /** unique or primary key constraint */
  UsersAuth0IdKey = 'users_auth0_id_key',
  /** unique or primary key constraint */
  UsersEmailKey = 'users_email_key',
  /** unique or primary key constraint */
  UsersPkey = 'users_pkey'
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  auth0_id?: Maybe<Scalars['String']>;
  chat_group_memberships?: Maybe<Chat_Group_Members_Arr_Rel_Insert_Input>;
  chat_messages?: Maybe<Chat_Messages_Arr_Rel_Insert_Input>;
  comments?: Maybe<Comments_Arr_Rel_Insert_Input>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  email_verified?: Maybe<Scalars['timestamptz']>;
  group_join_requests?: Maybe<Group_Join_Requests_Arr_Rel_Insert_Input>;
  group_posts?: Maybe<Group_Posts_Arr_Rel_Insert_Input>;
  id?: Maybe<Scalars['uuid']>;
  image?: Maybe<Scalars['String']>;
  last_chat_notification?: Maybe<Scalars['timestamptz']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  memberships?: Maybe<Group_Members_Arr_Rel_Insert_Input>;
  name?: Maybe<Scalars['String']>;
  password_hash?: Maybe<Scalars['String']>;
  private_info?: Maybe<User_Private_Obj_Rel_Insert_Input>;
  profile_picture?: Maybe<File_Uploads_Obj_Rel_Insert_Input>;
  profile_picture_id?: Maybe<Scalars['uuid']>;
  things?: Maybe<Things_Arr_Rel_Insert_Input>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  auth0_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  email_verified?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  image?: Maybe<Scalars['String']>;
  last_chat_notification?: Maybe<Scalars['timestamptz']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  password_hash?: Maybe<Scalars['String']>;
  profile_picture_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "users" */
export type Users_Max_Order_By = {
  auth0_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  email_verified?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  image?: Maybe<Order_By>;
  last_chat_notification?: Maybe<Order_By>;
  last_seen?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  password_hash?: Maybe<Order_By>;
  profile_picture_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  auth0_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  email_verified?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  image?: Maybe<Scalars['String']>;
  last_chat_notification?: Maybe<Scalars['timestamptz']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  password_hash?: Maybe<Scalars['String']>;
  profile_picture_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "users" */
export type Users_Min_Order_By = {
  auth0_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  email_verified?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  image?: Maybe<Order_By>;
  last_chat_notification?: Maybe<Order_By>;
  last_seen?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  password_hash?: Maybe<Order_By>;
  profile_picture_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** on conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: Maybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  auth0_id?: Maybe<Order_By>;
  chat_group_memberships_aggregate?: Maybe<Chat_Group_Members_Aggregate_Order_By>;
  chat_messages_aggregate?: Maybe<Chat_Messages_Aggregate_Order_By>;
  comments_aggregate?: Maybe<Comments_Aggregate_Order_By>;
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  email_verified?: Maybe<Order_By>;
  group_join_requests_aggregate?: Maybe<Group_Join_Requests_Aggregate_Order_By>;
  group_posts_aggregate?: Maybe<Group_Posts_Aggregate_Order_By>;
  id?: Maybe<Order_By>;
  image?: Maybe<Order_By>;
  last_chat_notification?: Maybe<Order_By>;
  last_seen?: Maybe<Order_By>;
  memberships_aggregate?: Maybe<Group_Members_Aggregate_Order_By>;
  name?: Maybe<Order_By>;
  password_hash?: Maybe<Order_By>;
  private_info?: Maybe<User_Private_Order_By>;
  profile_picture?: Maybe<File_Uploads_Order_By>;
  profile_picture_id?: Maybe<Order_By>;
  things_aggregate?: Maybe<Things_Aggregate_Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  Auth0Id = 'auth0_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  EmailVerified = 'email_verified',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  LastChatNotification = 'last_chat_notification',
  /** column name */
  LastSeen = 'last_seen',
  /** column name */
  Name = 'name',
  /** column name */
  PasswordHash = 'password_hash',
  /** column name */
  ProfilePictureId = 'profile_picture_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  auth0_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  email_verified?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  image?: Maybe<Scalars['String']>;
  last_chat_notification?: Maybe<Scalars['timestamptz']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  password_hash?: Maybe<Scalars['String']>;
  profile_picture_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  Auth0Id = 'auth0_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  EmailVerified = 'email_verified',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  LastChatNotification = 'last_chat_notification',
  /** column name */
  LastSeen = 'last_seen',
  /** column name */
  Name = 'name',
  /** column name */
  PasswordHash = 'password_hash',
  /** column name */
  ProfilePictureId = 'profile_picture_id',
  /** column name */
  UpdatedAt = 'updated_at'
}


/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: Maybe<Scalars['uuid']>;
  _gt?: Maybe<Scalars['uuid']>;
  _gte?: Maybe<Scalars['uuid']>;
  _in?: Maybe<Array<Scalars['uuid']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['uuid']>;
  _lte?: Maybe<Scalars['uuid']>;
  _neq?: Maybe<Scalars['uuid']>;
  _nin?: Maybe<Array<Scalars['uuid']>>;
};

/** columns and relationships of "verification_requests" */
export type Verification_Requests = {
  __typename?: 'verification_requests';
  created_at: Scalars['timestamptz'];
  expires: Scalars['timestamptz'];
  id: Scalars['Int'];
  identifier: Scalars['String'];
  token: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "verification_requests" */
export type Verification_Requests_Aggregate = {
  __typename?: 'verification_requests_aggregate';
  aggregate?: Maybe<Verification_Requests_Aggregate_Fields>;
  nodes: Array<Verification_Requests>;
};

/** aggregate fields of "verification_requests" */
export type Verification_Requests_Aggregate_Fields = {
  __typename?: 'verification_requests_aggregate_fields';
  avg?: Maybe<Verification_Requests_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Verification_Requests_Max_Fields>;
  min?: Maybe<Verification_Requests_Min_Fields>;
  stddev?: Maybe<Verification_Requests_Stddev_Fields>;
  stddev_pop?: Maybe<Verification_Requests_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Verification_Requests_Stddev_Samp_Fields>;
  sum?: Maybe<Verification_Requests_Sum_Fields>;
  var_pop?: Maybe<Verification_Requests_Var_Pop_Fields>;
  var_samp?: Maybe<Verification_Requests_Var_Samp_Fields>;
  variance?: Maybe<Verification_Requests_Variance_Fields>;
};


/** aggregate fields of "verification_requests" */
export type Verification_Requests_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Verification_Requests_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Verification_Requests_Avg_Fields = {
  __typename?: 'verification_requests_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "verification_requests". All fields are combined with a logical 'AND'. */
export type Verification_Requests_Bool_Exp = {
  _and?: Maybe<Array<Verification_Requests_Bool_Exp>>;
  _not?: Maybe<Verification_Requests_Bool_Exp>;
  _or?: Maybe<Array<Verification_Requests_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  expires?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  identifier?: Maybe<String_Comparison_Exp>;
  token?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "verification_requests" */
export enum Verification_Requests_Constraint {
  /** unique or primary key constraint */
  Token = 'token',
  /** unique or primary key constraint */
  VerificationRequestsPkey = 'verification_requests_pkey'
}

/** input type for incrementing numeric columns in table "verification_requests" */
export type Verification_Requests_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "verification_requests" */
export type Verification_Requests_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  expires?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  identifier?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Verification_Requests_Max_Fields = {
  __typename?: 'verification_requests_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  expires?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  identifier?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Verification_Requests_Min_Fields = {
  __typename?: 'verification_requests_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  expires?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  identifier?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "verification_requests" */
export type Verification_Requests_Mutation_Response = {
  __typename?: 'verification_requests_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Verification_Requests>;
};

/** on conflict condition type for table "verification_requests" */
export type Verification_Requests_On_Conflict = {
  constraint: Verification_Requests_Constraint;
  update_columns?: Array<Verification_Requests_Update_Column>;
  where?: Maybe<Verification_Requests_Bool_Exp>;
};

/** Ordering options when selecting data from "verification_requests". */
export type Verification_Requests_Order_By = {
  created_at?: Maybe<Order_By>;
  expires?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  identifier?: Maybe<Order_By>;
  token?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: verification_requests */
export type Verification_Requests_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "verification_requests" */
export enum Verification_Requests_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Expires = 'expires',
  /** column name */
  Id = 'id',
  /** column name */
  Identifier = 'identifier',
  /** column name */
  Token = 'token',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "verification_requests" */
export type Verification_Requests_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  expires?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  identifier?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Verification_Requests_Stddev_Fields = {
  __typename?: 'verification_requests_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Verification_Requests_Stddev_Pop_Fields = {
  __typename?: 'verification_requests_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Verification_Requests_Stddev_Samp_Fields = {
  __typename?: 'verification_requests_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Verification_Requests_Sum_Fields = {
  __typename?: 'verification_requests_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "verification_requests" */
export enum Verification_Requests_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Expires = 'expires',
  /** column name */
  Id = 'id',
  /** column name */
  Identifier = 'identifier',
  /** column name */
  Token = 'token',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Verification_Requests_Var_Pop_Fields = {
  __typename?: 'verification_requests_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Verification_Requests_Var_Samp_Fields = {
  __typename?: 'verification_requests_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Verification_Requests_Variance_Fields = {
  __typename?: 'verification_requests_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

export type DetailedActivityFragment = { __typename?: 'activities', id: any, created_at: any, verb: Activity_Verb_Enum, actor?: Maybe<{ __typename?: 'users', id: any, name: string, image?: Maybe<string> }>, entity: { __typename?: 'entities', id: any, group?: Maybe<{ __typename?: 'groups', id: any, short_id: string, name: string, created_at: any, description?: Maybe<string>, public: boolean, memberships_aggregate: { __typename?: 'group_members_aggregate', aggregate?: Maybe<{ __typename?: 'group_members_aggregate_fields', count: number }> }, thing_relations_aggregate: { __typename?: 'group_thing_aggregate', aggregate?: Maybe<{ __typename?: 'group_thing_aggregate_fields', count: number }> } }>, user?: Maybe<{ __typename?: 'users', id: any, name: string, image?: Maybe<string> }>, group_post?: Maybe<{ __typename?: 'group_posts', id: any, created_at: any, updated_at: any, type: Group_Post_Type_Enum, resolved: boolean, content: string, comments: Array<{ __typename?: 'group_post_comment', id: any, comment: { __typename?: 'comments', id: any, content: string, created_at: any, author: { __typename?: 'users', id: any, name: string, image?: Maybe<string> } } }>, group: { __typename?: 'groups', id: any, short_id: string, name: string, created_at: any, description?: Maybe<string>, public: boolean, memberships_aggregate: { __typename?: 'group_members_aggregate', aggregate?: Maybe<{ __typename?: 'group_members_aggregate_fields', count: number }> }, thing_relations_aggregate: { __typename?: 'group_thing_aggregate', aggregate?: Maybe<{ __typename?: 'group_thing_aggregate_fields', count: number }> } }, author: { __typename?: 'users', id: any, name: string, image?: Maybe<string> } }>, group_thing?: Maybe<{ __typename?: 'group_thing', id: any, thing: { __typename?: 'things', id: any, name: string, description: string, category?: Maybe<string>, type: Thing_Type_Enum, expiry?: Maybe<any>, short_id: string, images: Array<{ __typename?: 'thing_images', id: any, description: string, order: number, file: { __typename?: 'file_uploads', id: any, name: string, url: string, mime_type?: Maybe<string>, size: number } }>, owner: { __typename?: 'users', id: any, name: string, image?: Maybe<string> } } }>, group_member?: Maybe<{ __typename?: 'group_members', id: any, role: Group_Role_Enum, created_at: any, group: { __typename?: 'groups', id: any, short_id: string, name: string }, user: { __typename?: 'users', id: any, name: string, image?: Maybe<string> } }> } };

export type ActivityCardFragment = { __typename?: 'activities', id: any, created_at: any, verb: Activity_Verb_Enum, entity: { __typename?: 'entities', id: any, group?: Maybe<{ __typename?: 'groups', id: any, short_id: string, name: string }>, thing?: Maybe<{ __typename?: 'things', id: any, short_id: string, name: string, images: Array<{ __typename?: 'thing_images', file: { __typename?: 'file_uploads', url: string } }> }>, user?: Maybe<{ __typename?: 'users', id: any, name: string, image?: Maybe<string> }>, group_join_request?: Maybe<{ __typename?: 'group_join_requests', id: any, response?: Maybe<string>, group: { __typename?: 'groups', id: any, short_id: string, name: string } }>, group_post_comment?: Maybe<{ __typename?: 'group_post_comment', id: any, post: { __typename?: 'group_posts', id: any, author_id: any, group: { __typename?: 'groups', id: any, short_id: string, name: string } }, comment: { __typename?: 'comments', id: any, content: string, created_at: any, author: { __typename?: 'users', id: any, name: string, image?: Maybe<string> } } }>, group_post?: Maybe<{ __typename?: 'group_posts', id: any, group: { __typename?: 'groups', id: any, short_id: string, name: string } }>, group_thing?: Maybe<{ __typename?: 'group_thing', id: any, thing: { __typename?: 'things', id: any, short_id: string, name: string, images: Array<{ __typename?: 'thing_images', file: { __typename?: 'file_uploads', url: string } }> }, group: { __typename?: 'groups', id: any, short_id: string, name: string } }>, group_member?: Maybe<{ __typename?: 'group_members', user: { __typename?: 'users', id: any, name: string, image?: Maybe<string> }, group: { __typename?: 'groups', id: any, short_id: string, name: string } }> }, secondary_entity?: Maybe<{ __typename?: 'entities', id: any, group?: Maybe<{ __typename?: 'groups', id: any, short_id: string, name: string }>, thing?: Maybe<{ __typename?: 'things', id: any, short_id: string, name: string, images: Array<{ __typename?: 'thing_images', file: { __typename?: 'file_uploads', url: string } }> }>, user?: Maybe<{ __typename?: 'users', id: any, name: string, image?: Maybe<string> }>, group_join_request?: Maybe<{ __typename?: 'group_join_requests', id: any, response?: Maybe<string>, group: { __typename?: 'groups', id: any, short_id: string, name: string } }>, group_post_comment?: Maybe<{ __typename?: 'group_post_comment', id: any, post: { __typename?: 'group_posts', id: any, author_id: any, group: { __typename?: 'groups', id: any, short_id: string, name: string } }, comment: { __typename?: 'comments', id: any, content: string, created_at: any, author: { __typename?: 'users', id: any, name: string, image?: Maybe<string> } } }>, group_post?: Maybe<{ __typename?: 'group_posts', id: any, group: { __typename?: 'groups', id: any, short_id: string, name: string } }>, group_thing?: Maybe<{ __typename?: 'group_thing', id: any, thing: { __typename?: 'things', id: any, short_id: string, name: string, images: Array<{ __typename?: 'thing_images', file: { __typename?: 'file_uploads', url: string } }> }, group: { __typename?: 'groups', id: any, short_id: string, name: string } }>, group_member?: Maybe<{ __typename?: 'group_members', user: { __typename?: 'users', id: any, name: string, image?: Maybe<string> }, group: { __typename?: 'groups', id: any, short_id: string, name: string } }> }>, actor?: Maybe<{ __typename?: 'users', id: any, name: string, image?: Maybe<string> }> };

export type NotificationCardFragment = { __typename?: 'notifications', id: any, read_at?: Maybe<any>, created_at: any, activity: { __typename?: 'activities', id: any, created_at: any, verb: Activity_Verb_Enum, entity: { __typename?: 'entities', id: any, group?: Maybe<{ __typename?: 'groups', id: any, short_id: string, name: string }>, thing?: Maybe<{ __typename?: 'things', id: any, short_id: string, name: string, images: Array<{ __typename?: 'thing_images', file: { __typename?: 'file_uploads', url: string } }> }>, user?: Maybe<{ __typename?: 'users', id: any, name: string, image?: Maybe<string> }>, group_join_request?: Maybe<{ __typename?: 'group_join_requests', id: any, response?: Maybe<string>, group: { __typename?: 'groups', id: any, short_id: string, name: string } }>, group_post_comment?: Maybe<{ __typename?: 'group_post_comment', id: any, post: { __typename?: 'group_posts', id: any, author_id: any, group: { __typename?: 'groups', id: any, short_id: string, name: string } }, comment: { __typename?: 'comments', id: any, content: string, created_at: any, author: { __typename?: 'users', id: any, name: string, image?: Maybe<string> } } }>, group_post?: Maybe<{ __typename?: 'group_posts', id: any, group: { __typename?: 'groups', id: any, short_id: string, name: string } }>, group_thing?: Maybe<{ __typename?: 'group_thing', id: any, thing: { __typename?: 'things', id: any, short_id: string, name: string, images: Array<{ __typename?: 'thing_images', file: { __typename?: 'file_uploads', url: string } }> }, group: { __typename?: 'groups', id: any, short_id: string, name: string } }>, group_member?: Maybe<{ __typename?: 'group_members', user: { __typename?: 'users', id: any, name: string, image?: Maybe<string> }, group: { __typename?: 'groups', id: any, short_id: string, name: string } }> }, secondary_entity?: Maybe<{ __typename?: 'entities', id: any, group?: Maybe<{ __typename?: 'groups', id: any, short_id: string, name: string }>, thing?: Maybe<{ __typename?: 'things', id: any, short_id: string, name: string, images: Array<{ __typename?: 'thing_images', file: { __typename?: 'file_uploads', url: string } }> }>, user?: Maybe<{ __typename?: 'users', id: any, name: string, image?: Maybe<string> }>, group_join_request?: Maybe<{ __typename?: 'group_join_requests', id: any, response?: Maybe<string>, group: { __typename?: 'groups', id: any, short_id: string, name: string } }>, group_post_comment?: Maybe<{ __typename?: 'group_post_comment', id: any, post: { __typename?: 'group_posts', id: any, author_id: any, group: { __typename?: 'groups', id: any, short_id: string, name: string } }, comment: { __typename?: 'comments', id: any, content: string, created_at: any, author: { __typename?: 'users', id: any, name: string, image?: Maybe<string> } } }>, group_post?: Maybe<{ __typename?: 'group_posts', id: any, group: { __typename?: 'groups', id: any, short_id: string, name: string } }>, group_thing?: Maybe<{ __typename?: 'group_thing', id: any, thing: { __typename?: 'things', id: any, short_id: string, name: string, images: Array<{ __typename?: 'thing_images', file: { __typename?: 'file_uploads', url: string } }> }, group: { __typename?: 'groups', id: any, short_id: string, name: string } }>, group_member?: Maybe<{ __typename?: 'group_members', user: { __typename?: 'users', id: any, name: string, image?: Maybe<string> }, group: { __typename?: 'groups', id: any, short_id: string, name: string } }> }>, actor?: Maybe<{ __typename?: 'users', id: any, name: string, image?: Maybe<string> }> } };

export type GroupRefFragment = { __typename?: 'groups', id: any, short_id: string, name: string };

export type ThingRefFragment = { __typename?: 'things', id: any, short_id: string, name: string, images: Array<{ __typename?: 'thing_images', file: { __typename?: 'file_uploads', url: string } }> };

export type EntityCardFragment = { __typename?: 'entities', id: any, group?: Maybe<{ __typename?: 'groups', id: any, short_id: string, name: string }>, thing?: Maybe<{ __typename?: 'things', id: any, short_id: string, name: string, images: Array<{ __typename?: 'thing_images', file: { __typename?: 'file_uploads', url: string } }> }>, user?: Maybe<{ __typename?: 'users', id: any, name: string, image?: Maybe<string> }>, group_join_request?: Maybe<{ __typename?: 'group_join_requests', id: any, response?: Maybe<string>, group: { __typename?: 'groups', id: any, short_id: string, name: string } }>, group_post_comment?: Maybe<{ __typename?: 'group_post_comment', id: any, post: { __typename?: 'group_posts', id: any, author_id: any, group: { __typename?: 'groups', id: any, short_id: string, name: string } }, comment: { __typename?: 'comments', id: any, content: string, created_at: any, author: { __typename?: 'users', id: any, name: string, image?: Maybe<string> } } }>, group_post?: Maybe<{ __typename?: 'group_posts', id: any, group: { __typename?: 'groups', id: any, short_id: string, name: string } }>, group_thing?: Maybe<{ __typename?: 'group_thing', id: any, thing: { __typename?: 'things', id: any, short_id: string, name: string, images: Array<{ __typename?: 'thing_images', file: { __typename?: 'file_uploads', url: string } }> }, group: { __typename?: 'groups', id: any, short_id: string, name: string } }>, group_member?: Maybe<{ __typename?: 'group_members', user: { __typename?: 'users', id: any, name: string, image?: Maybe<string> }, group: { __typename?: 'groups', id: any, short_id: string, name: string } }> };

export type DetailedEntityFragment = { __typename?: 'entities', id: any, group?: Maybe<{ __typename?: 'groups', id: any, short_id: string, name: string, created_at: any, description?: Maybe<string>, public: boolean, memberships_aggregate: { __typename?: 'group_members_aggregate', aggregate?: Maybe<{ __typename?: 'group_members_aggregate_fields', count: number }> }, thing_relations_aggregate: { __typename?: 'group_thing_aggregate', aggregate?: Maybe<{ __typename?: 'group_thing_aggregate_fields', count: number }> } }>, user?: Maybe<{ __typename?: 'users', id: any, name: string, image?: Maybe<string> }>, group_post?: Maybe<{ __typename?: 'group_posts', id: any, created_at: any, updated_at: any, type: Group_Post_Type_Enum, resolved: boolean, content: string, comments: Array<{ __typename?: 'group_post_comment', id: any, comment: { __typename?: 'comments', id: any, content: string, created_at: any, author: { __typename?: 'users', id: any, name: string, image?: Maybe<string> } } }>, group: { __typename?: 'groups', id: any, short_id: string, name: string, created_at: any, description?: Maybe<string>, public: boolean, memberships_aggregate: { __typename?: 'group_members_aggregate', aggregate?: Maybe<{ __typename?: 'group_members_aggregate_fields', count: number }> }, thing_relations_aggregate: { __typename?: 'group_thing_aggregate', aggregate?: Maybe<{ __typename?: 'group_thing_aggregate_fields', count: number }> } }, author: { __typename?: 'users', id: any, name: string, image?: Maybe<string> } }>, group_thing?: Maybe<{ __typename?: 'group_thing', id: any, thing: { __typename?: 'things', id: any, name: string, description: string, category?: Maybe<string>, type: Thing_Type_Enum, expiry?: Maybe<any>, short_id: string, images: Array<{ __typename?: 'thing_images', id: any, description: string, order: number, file: { __typename?: 'file_uploads', id: any, name: string, url: string, mime_type?: Maybe<string>, size: number } }>, owner: { __typename?: 'users', id: any, name: string, image?: Maybe<string> } } }>, group_member?: Maybe<{ __typename?: 'group_members', id: any, role: Group_Role_Enum, created_at: any, group: { __typename?: 'groups', id: any, short_id: string, name: string }, user: { __typename?: 'users', id: any, name: string, image?: Maybe<string> } }> };

export type GroupActivityQueryVariables = Exact<{
  shortId: Scalars['String'];
  limit: Scalars['Int'];
  offset: Scalars['Int'];
}>;


export type GroupActivityQuery = { __typename?: 'query_root', groups: Array<{ __typename?: 'groups', activities: Array<{ __typename?: 'activities', id: any, created_at: any, verb: Activity_Verb_Enum, actor?: Maybe<{ __typename?: 'users', id: any, name: string, image?: Maybe<string> }>, entity: { __typename?: 'entities', id: any, group?: Maybe<{ __typename?: 'groups', id: any, short_id: string, name: string, created_at: any, description?: Maybe<string>, public: boolean, memberships_aggregate: { __typename?: 'group_members_aggregate', aggregate?: Maybe<{ __typename?: 'group_members_aggregate_fields', count: number }> }, thing_relations_aggregate: { __typename?: 'group_thing_aggregate', aggregate?: Maybe<{ __typename?: 'group_thing_aggregate_fields', count: number }> } }>, user?: Maybe<{ __typename?: 'users', id: any, name: string, image?: Maybe<string> }>, group_post?: Maybe<{ __typename?: 'group_posts', id: any, created_at: any, updated_at: any, type: Group_Post_Type_Enum, resolved: boolean, content: string, comments: Array<{ __typename?: 'group_post_comment', id: any, comment: { __typename?: 'comments', id: any, content: string, created_at: any, author: { __typename?: 'users', id: any, name: string, image?: Maybe<string> } } }>, group: { __typename?: 'groups', id: any, short_id: string, name: string, created_at: any, description?: Maybe<string>, public: boolean, memberships_aggregate: { __typename?: 'group_members_aggregate', aggregate?: Maybe<{ __typename?: 'group_members_aggregate_fields', count: number }> }, thing_relations_aggregate: { __typename?: 'group_thing_aggregate', aggregate?: Maybe<{ __typename?: 'group_thing_aggregate_fields', count: number }> } }, author: { __typename?: 'users', id: any, name: string, image?: Maybe<string> } }>, group_thing?: Maybe<{ __typename?: 'group_thing', id: any, thing: { __typename?: 'things', id: any, name: string, description: string, category?: Maybe<string>, type: Thing_Type_Enum, expiry?: Maybe<any>, short_id: string, images: Array<{ __typename?: 'thing_images', id: any, description: string, order: number, file: { __typename?: 'file_uploads', id: any, name: string, url: string, mime_type?: Maybe<string>, size: number } }>, owner: { __typename?: 'users', id: any, name: string, image?: Maybe<string> } } }>, group_member?: Maybe<{ __typename?: 'group_members', id: any, role: Group_Role_Enum, created_at: any, group: { __typename?: 'groups', id: any, short_id: string, name: string }, user: { __typename?: 'users', id: any, name: string, image?: Maybe<string> } }> } }> }> };

export type ChatMessageCardFragment = { __typename?: 'chat_messages', id: any, sender_id: any, message: string, created_at: any, entity?: Maybe<{ __typename?: 'entities', id: any, group?: Maybe<{ __typename?: 'groups', id: any, short_id: string, name: string }>, thing?: Maybe<{ __typename?: 'things', id: any, short_id: string, name: string, images: Array<{ __typename?: 'thing_images', file: { __typename?: 'file_uploads', url: string } }> }>, user?: Maybe<{ __typename?: 'users', id: any, name: string, image?: Maybe<string> }>, group_join_request?: Maybe<{ __typename?: 'group_join_requests', id: any, response?: Maybe<string>, group: { __typename?: 'groups', id: any, short_id: string, name: string } }>, group_post_comment?: Maybe<{ __typename?: 'group_post_comment', id: any, post: { __typename?: 'group_posts', id: any, author_id: any, group: { __typename?: 'groups', id: any, short_id: string, name: string } }, comment: { __typename?: 'comments', id: any, content: string, created_at: any, author: { __typename?: 'users', id: any, name: string, image?: Maybe<string> } } }>, group_post?: Maybe<{ __typename?: 'group_posts', id: any, group: { __typename?: 'groups', id: any, short_id: string, name: string } }>, group_thing?: Maybe<{ __typename?: 'group_thing', id: any, thing: { __typename?: 'things', id: any, short_id: string, name: string, images: Array<{ __typename?: 'thing_images', file: { __typename?: 'file_uploads', url: string } }> }, group: { __typename?: 'groups', id: any, short_id: string, name: string } }>, group_member?: Maybe<{ __typename?: 'group_members', user: { __typename?: 'users', id: any, name: string, image?: Maybe<string> }, group: { __typename?: 'groups', id: any, short_id: string, name: string } }> }> };

export type ChatGroupCardFragment = { __typename?: 'chat_groups', id: any, name: string, members: Array<{ __typename?: 'chat_group_members', user: { __typename?: 'users', id: any, name: string, image?: Maybe<string> } }>, messages: Array<{ __typename?: 'chat_messages', message: string, sender: { __typename?: 'users', id: any, name: string, image?: Maybe<string> } }> };

export type ChatMessagesQueryVariables = Exact<{
  where: Chat_Messages_Bool_Exp;
  limit: Scalars['Int'];
}>;


export type ChatMessagesQuery = { __typename?: 'query_root', chat_messages: Array<{ __typename?: 'chat_messages', id: any, sender_id: any, message: string, created_at: any, entity?: Maybe<{ __typename?: 'entities', id: any, group?: Maybe<{ __typename?: 'groups', id: any, short_id: string, name: string }>, thing?: Maybe<{ __typename?: 'things', id: any, short_id: string, name: string, images: Array<{ __typename?: 'thing_images', file: { __typename?: 'file_uploads', url: string } }> }>, user?: Maybe<{ __typename?: 'users', id: any, name: string, image?: Maybe<string> }>, group_join_request?: Maybe<{ __typename?: 'group_join_requests', id: any, response?: Maybe<string>, group: { __typename?: 'groups', id: any, short_id: string, name: string } }>, group_post_comment?: Maybe<{ __typename?: 'group_post_comment', id: any, post: { __typename?: 'group_posts', id: any, author_id: any, group: { __typename?: 'groups', id: any, short_id: string, name: string } }, comment: { __typename?: 'comments', id: any, content: string, created_at: any, author: { __typename?: 'users', id: any, name: string, image?: Maybe<string> } } }>, group_post?: Maybe<{ __typename?: 'group_posts', id: any, group: { __typename?: 'groups', id: any, short_id: string, name: string } }>, group_thing?: Maybe<{ __typename?: 'group_thing', id: any, thing: { __typename?: 'things', id: any, short_id: string, name: string, images: Array<{ __typename?: 'thing_images', file: { __typename?: 'file_uploads', url: string } }> }, group: { __typename?: 'groups', id: any, short_id: string, name: string } }>, group_member?: Maybe<{ __typename?: 'group_members', user: { __typename?: 'users', id: any, name: string, image?: Maybe<string> }, group: { __typename?: 'groups', id: any, short_id: string, name: string } }> }> }> };

export type ChatGroupsSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type ChatGroupsSubscription = { __typename?: 'subscription_root', chat_groups: Array<{ __typename?: 'chat_groups', id: any, name: string, members: Array<{ __typename?: 'chat_group_members', user: { __typename?: 'users', id: any, name: string, image?: Maybe<string> } }>, messages: Array<{ __typename?: 'chat_messages', message: string, sender: { __typename?: 'users', id: any, name: string, image?: Maybe<string> } }> }> };

export type ChatMessagesFeedSubscriptionVariables = Exact<{
  where: Chat_Messages_Bool_Exp;
}>;


export type ChatMessagesFeedSubscription = { __typename?: 'subscription_root', chat_messages: Array<{ __typename?: 'chat_messages', id: any, sender_id: any, message: string, created_at: any, entity?: Maybe<{ __typename?: 'entities', id: any, group?: Maybe<{ __typename?: 'groups', id: any, short_id: string, name: string }>, thing?: Maybe<{ __typename?: 'things', id: any, short_id: string, name: string, images: Array<{ __typename?: 'thing_images', file: { __typename?: 'file_uploads', url: string } }> }>, user?: Maybe<{ __typename?: 'users', id: any, name: string, image?: Maybe<string> }>, group_join_request?: Maybe<{ __typename?: 'group_join_requests', id: any, response?: Maybe<string>, group: { __typename?: 'groups', id: any, short_id: string, name: string } }>, group_post_comment?: Maybe<{ __typename?: 'group_post_comment', id: any, post: { __typename?: 'group_posts', id: any, author_id: any, group: { __typename?: 'groups', id: any, short_id: string, name: string } }, comment: { __typename?: 'comments', id: any, content: string, created_at: any, author: { __typename?: 'users', id: any, name: string, image?: Maybe<string> } } }>, group_post?: Maybe<{ __typename?: 'group_posts', id: any, group: { __typename?: 'groups', id: any, short_id: string, name: string } }>, group_thing?: Maybe<{ __typename?: 'group_thing', id: any, thing: { __typename?: 'things', id: any, short_id: string, name: string, images: Array<{ __typename?: 'thing_images', file: { __typename?: 'file_uploads', url: string } }> }, group: { __typename?: 'groups', id: any, short_id: string, name: string } }>, group_member?: Maybe<{ __typename?: 'group_members', user: { __typename?: 'users', id: any, name: string, image?: Maybe<string> }, group: { __typename?: 'groups', id: any, short_id: string, name: string } }> }> }> };

export type CreateChatGroupMutationVariables = Exact<{
  input: CreateChatGroupInput;
}>;


export type CreateChatGroupMutation = { __typename?: 'mutation_root', createChatGroup?: Maybe<{ __typename?: 'CreateChatGroupResult', chat_group: { __typename?: 'chat_groups', id: any, name: string, members: Array<{ __typename?: 'chat_group_members', user: { __typename?: 'users', id: any, name: string, image?: Maybe<string> } }>, messages: Array<{ __typename?: 'chat_messages', message: string, sender: { __typename?: 'users', id: any, name: string, image?: Maybe<string> } }> } }> };

export type CreateChatMessageMutationVariables = Exact<{
  input: Chat_Messages_Insert_Input;
}>;


export type CreateChatMessageMutation = { __typename?: 'mutation_root', insert_chat_messages_one?: Maybe<{ __typename?: 'chat_messages', id: any, sender_id: any, message: string, created_at: any, entity?: Maybe<{ __typename?: 'entities', id: any, group?: Maybe<{ __typename?: 'groups', id: any, short_id: string, name: string }>, thing?: Maybe<{ __typename?: 'things', id: any, short_id: string, name: string, images: Array<{ __typename?: 'thing_images', file: { __typename?: 'file_uploads', url: string } }> }>, user?: Maybe<{ __typename?: 'users', id: any, name: string, image?: Maybe<string> }>, group_join_request?: Maybe<{ __typename?: 'group_join_requests', id: any, response?: Maybe<string>, group: { __typename?: 'groups', id: any, short_id: string, name: string } }>, group_post_comment?: Maybe<{ __typename?: 'group_post_comment', id: any, post: { __typename?: 'group_posts', id: any, author_id: any, group: { __typename?: 'groups', id: any, short_id: string, name: string } }, comment: { __typename?: 'comments', id: any, content: string, created_at: any, author: { __typename?: 'users', id: any, name: string, image?: Maybe<string> } } }>, group_post?: Maybe<{ __typename?: 'group_posts', id: any, group: { __typename?: 'groups', id: any, short_id: string, name: string } }>, group_thing?: Maybe<{ __typename?: 'group_thing', id: any, thing: { __typename?: 'things', id: any, short_id: string, name: string, images: Array<{ __typename?: 'thing_images', file: { __typename?: 'file_uploads', url: string } }> }, group: { __typename?: 'groups', id: any, short_id: string, name: string } }>, group_member?: Maybe<{ __typename?: 'group_members', user: { __typename?: 'users', id: any, name: string, image?: Maybe<string> }, group: { __typename?: 'groups', id: any, short_id: string, name: string } }> }> }> };

export type CommentCardFragment = { __typename?: 'comments', id: any, content: string, created_at: any, author: { __typename?: 'users', id: any, name: string, image?: Maybe<string> } };

export type GroupMemberCardFragment = { __typename?: 'group_members', id: any, role: Group_Role_Enum, created_at: any, user: { __typename?: 'users', id: any, name: string, image?: Maybe<string> } };

export type GroupMemberWithGroupCardFragment = { __typename?: 'group_members', id: any, role: Group_Role_Enum, created_at: any, group: { __typename?: 'groups', id: any, short_id: string, name: string }, user: { __typename?: 'users', id: any, name: string, image?: Maybe<string> } };

export type GroupCardFragment = { __typename?: 'groups', id: any, short_id: string, name: string, created_at: any, description?: Maybe<string>, public: boolean, memberships_aggregate: { __typename?: 'group_members_aggregate', aggregate?: Maybe<{ __typename?: 'group_members_aggregate_fields', count: number }> }, thing_relations_aggregate: { __typename?: 'group_thing_aggregate', aggregate?: Maybe<{ __typename?: 'group_thing_aggregate_fields', count: number }> } };

export type GroupDetailsFragment = { __typename?: 'groups', id: any, short_id: string, name: string, created_at: any, description?: Maybe<string>, public: boolean, memberships: Array<{ __typename?: 'group_members', id: any, role: Group_Role_Enum, created_at: any, user: { __typename?: 'users', id: any, name: string, image?: Maybe<string> } }>, memberships_aggregate: { __typename?: 'group_members_aggregate', aggregate?: Maybe<{ __typename?: 'group_members_aggregate_fields', count: number }> }, thing_relations_aggregate: { __typename?: 'group_thing_aggregate', aggregate?: Maybe<{ __typename?: 'group_thing_aggregate_fields', count: number }> } };

export type GroupJoinRequestCardFragment = { __typename?: 'group_join_requests', id: any, created_at: any, updated_at: any, status?: Maybe<Group_Join_Request_Status_Enum>, group_id: any, message: string, user: { __typename?: 'users', id: any, name: string, image?: Maybe<string> } };

export type GroupJoinTokenCardFragment = { __typename?: 'group_join_tokens', id: any, created_at: any, updated_at: any, token: string, disabled: boolean, note?: Maybe<string> };

export type GroupPostFragment = { __typename?: 'group_posts', id: any, created_at: any, updated_at: any, type: Group_Post_Type_Enum, resolved: boolean, content: string, comments: Array<{ __typename?: 'group_post_comment', id: any, comment: { __typename?: 'comments', id: any, content: string, created_at: any, author: { __typename?: 'users', id: any, name: string, image?: Maybe<string> } } }>, group: { __typename?: 'groups', id: any, short_id: string, name: string, created_at: any, description?: Maybe<string>, public: boolean, memberships_aggregate: { __typename?: 'group_members_aggregate', aggregate?: Maybe<{ __typename?: 'group_members_aggregate_fields', count: number }> }, thing_relations_aggregate: { __typename?: 'group_thing_aggregate', aggregate?: Maybe<{ __typename?: 'group_thing_aggregate_fields', count: number }> } }, author: { __typename?: 'users', id: any, name: string, image?: Maybe<string> } };

export type ListGroupsQueryVariables = Exact<{
  limit: Scalars['Int'];
  offset: Scalars['Int'];
  orderBy: Groups_Order_By;
  where?: Maybe<Groups_Bool_Exp>;
}>;


export type ListGroupsQuery = { __typename?: 'query_root', groups_aggregate: { __typename?: 'groups_aggregate', aggregate?: Maybe<{ __typename?: 'groups_aggregate_fields', count: number }> }, groups: Array<{ __typename?: 'groups', id: any, short_id: string, name: string, created_at: any, description?: Maybe<string>, public: boolean, memberships_aggregate: { __typename?: 'group_members_aggregate', aggregate?: Maybe<{ __typename?: 'group_members_aggregate_fields', count: number }> }, thing_relations_aggregate: { __typename?: 'group_thing_aggregate', aggregate?: Maybe<{ __typename?: 'group_thing_aggregate_fields', count: number }> } }> };

export type GroupDetailsQueryVariables = Exact<{
  shortId: Scalars['String'];
}>;


export type GroupDetailsQuery = { __typename?: 'query_root', groups: Array<{ __typename?: 'groups', id: any, short_id: string, name: string, created_at: any, description?: Maybe<string>, public: boolean, memberships: Array<{ __typename?: 'group_members', id: any, role: Group_Role_Enum, created_at: any, user: { __typename?: 'users', id: any, name: string, image?: Maybe<string> } }>, memberships_aggregate: { __typename?: 'group_members_aggregate', aggregate?: Maybe<{ __typename?: 'group_members_aggregate_fields', count: number }> }, thing_relations_aggregate: { __typename?: 'group_thing_aggregate', aggregate?: Maybe<{ __typename?: 'group_thing_aggregate_fields', count: number }> } }> };

export type GroupJoinRequestsQueryVariables = Exact<{
  where: Group_Join_Requests_Bool_Exp;
}>;


export type GroupJoinRequestsQuery = { __typename?: 'query_root', group_join_requests: Array<{ __typename?: 'group_join_requests', id: any, created_at: any, updated_at: any, status?: Maybe<Group_Join_Request_Status_Enum>, group_id: any, message: string, user: { __typename?: 'users', id: any, name: string, image?: Maybe<string> } }> };

export type GroupJoinTokensQueryVariables = Exact<{
  where: Group_Join_Tokens_Bool_Exp;
}>;


export type GroupJoinTokensQuery = { __typename?: 'query_root', group_join_tokens: Array<{ __typename?: 'group_join_tokens', id: any, created_at: any, updated_at: any, token: string, disabled: boolean, note?: Maybe<string> }> };

export type GroupPostListQueryVariables = Exact<{
  where: Group_Posts_Bool_Exp;
  limit: Scalars['Int'];
  offset: Scalars['Int'];
  orderBy?: Maybe<Array<Group_Posts_Order_By> | Group_Posts_Order_By>;
}>;


export type GroupPostListQuery = { __typename?: 'query_root', group_posts: Array<{ __typename?: 'group_posts', id: any, created_at: any, updated_at: any, type: Group_Post_Type_Enum, resolved: boolean, content: string, comments: Array<{ __typename?: 'group_post_comment', id: any, comment: { __typename?: 'comments', id: any, content: string, created_at: any, author: { __typename?: 'users', id: any, name: string, image?: Maybe<string> } } }>, group: { __typename?: 'groups', id: any, short_id: string, name: string, created_at: any, description?: Maybe<string>, public: boolean, memberships_aggregate: { __typename?: 'group_members_aggregate', aggregate?: Maybe<{ __typename?: 'group_members_aggregate_fields', count: number }> }, thing_relations_aggregate: { __typename?: 'group_thing_aggregate', aggregate?: Maybe<{ __typename?: 'group_thing_aggregate_fields', count: number }> } }, author: { __typename?: 'users', id: any, name: string, image?: Maybe<string> } }>, group_posts_aggregate: { __typename?: 'group_posts_aggregate', aggregate?: Maybe<{ __typename?: 'group_posts_aggregate_fields', count: number }> } };

export type ActivityListQueryVariables = Exact<{
  offset?: Maybe<Scalars['Int']>;
}>;


export type ActivityListQuery = { __typename?: 'query_root', activities: Array<{ __typename?: 'activities', id: any, created_at: any, verb: Activity_Verb_Enum, entity: { __typename?: 'entities', id: any, group?: Maybe<{ __typename?: 'groups', id: any, short_id: string, name: string }>, thing?: Maybe<{ __typename?: 'things', id: any, short_id: string, name: string, images: Array<{ __typename?: 'thing_images', file: { __typename?: 'file_uploads', url: string } }> }>, user?: Maybe<{ __typename?: 'users', id: any, name: string, image?: Maybe<string> }>, group_join_request?: Maybe<{ __typename?: 'group_join_requests', id: any, response?: Maybe<string>, group: { __typename?: 'groups', id: any, short_id: string, name: string } }>, group_post_comment?: Maybe<{ __typename?: 'group_post_comment', id: any, post: { __typename?: 'group_posts', id: any, author_id: any, group: { __typename?: 'groups', id: any, short_id: string, name: string } }, comment: { __typename?: 'comments', id: any, content: string, created_at: any, author: { __typename?: 'users', id: any, name: string, image?: Maybe<string> } } }>, group_post?: Maybe<{ __typename?: 'group_posts', id: any, group: { __typename?: 'groups', id: any, short_id: string, name: string } }>, group_thing?: Maybe<{ __typename?: 'group_thing', id: any, thing: { __typename?: 'things', id: any, short_id: string, name: string, images: Array<{ __typename?: 'thing_images', file: { __typename?: 'file_uploads', url: string } }> }, group: { __typename?: 'groups', id: any, short_id: string, name: string } }>, group_member?: Maybe<{ __typename?: 'group_members', user: { __typename?: 'users', id: any, name: string, image?: Maybe<string> }, group: { __typename?: 'groups', id: any, short_id: string, name: string } }> }, secondary_entity?: Maybe<{ __typename?: 'entities', id: any, group?: Maybe<{ __typename?: 'groups', id: any, short_id: string, name: string }>, thing?: Maybe<{ __typename?: 'things', id: any, short_id: string, name: string, images: Array<{ __typename?: 'thing_images', file: { __typename?: 'file_uploads', url: string } }> }>, user?: Maybe<{ __typename?: 'users', id: any, name: string, image?: Maybe<string> }>, group_join_request?: Maybe<{ __typename?: 'group_join_requests', id: any, response?: Maybe<string>, group: { __typename?: 'groups', id: any, short_id: string, name: string } }>, group_post_comment?: Maybe<{ __typename?: 'group_post_comment', id: any, post: { __typename?: 'group_posts', id: any, author_id: any, group: { __typename?: 'groups', id: any, short_id: string, name: string } }, comment: { __typename?: 'comments', id: any, content: string, created_at: any, author: { __typename?: 'users', id: any, name: string, image?: Maybe<string> } } }>, group_post?: Maybe<{ __typename?: 'group_posts', id: any, group: { __typename?: 'groups', id: any, short_id: string, name: string } }>, group_thing?: Maybe<{ __typename?: 'group_thing', id: any, thing: { __typename?: 'things', id: any, short_id: string, name: string, images: Array<{ __typename?: 'thing_images', file: { __typename?: 'file_uploads', url: string } }> }, group: { __typename?: 'groups', id: any, short_id: string, name: string } }>, group_member?: Maybe<{ __typename?: 'group_members', user: { __typename?: 'users', id: any, name: string, image?: Maybe<string> }, group: { __typename?: 'groups', id: any, short_id: string, name: string } }> }>, actor?: Maybe<{ __typename?: 'users', id: any, name: string, image?: Maybe<string> }> }> };

export type CreateGroupMutationVariables = Exact<{
  input: CreateGroupInput;
}>;


export type CreateGroupMutation = { __typename?: 'mutation_root', createGroup: { __typename?: 'CreateGroupResult', group: { __typename?: 'groups', id: any, short_id: string, name: string, created_at: any, description?: Maybe<string>, public: boolean, memberships_aggregate: { __typename?: 'group_members_aggregate', aggregate?: Maybe<{ __typename?: 'group_members_aggregate_fields', count: number }> }, thing_relations_aggregate: { __typename?: 'group_thing_aggregate', aggregate?: Maybe<{ __typename?: 'group_thing_aggregate_fields', count: number }> } } } };

export type UpdateGroupMutationVariables = Exact<{
  id: Scalars['uuid'];
  input: Groups_Set_Input;
}>;


export type UpdateGroupMutation = { __typename?: 'mutation_root', update_groups_by_pk?: Maybe<{ __typename?: 'groups', id: any, short_id: string, name: string, created_at: any, description?: Maybe<string>, public: boolean, memberships: Array<{ __typename?: 'group_members', id: any, role: Group_Role_Enum, created_at: any, user: { __typename?: 'users', id: any, name: string, image?: Maybe<string> } }>, memberships_aggregate: { __typename?: 'group_members_aggregate', aggregate?: Maybe<{ __typename?: 'group_members_aggregate_fields', count: number }> }, thing_relations_aggregate: { __typename?: 'group_thing_aggregate', aggregate?: Maybe<{ __typename?: 'group_thing_aggregate_fields', count: number }> } }> };

export type DeleteGroupMutationVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type DeleteGroupMutation = { __typename?: 'mutation_root', delete_groups_by_pk?: Maybe<{ __typename?: 'groups', id: any, short_id: string, name: string, created_at: any, description?: Maybe<string>, public: boolean, memberships_aggregate: { __typename?: 'group_members_aggregate', aggregate?: Maybe<{ __typename?: 'group_members_aggregate_fields', count: number }> }, thing_relations_aggregate: { __typename?: 'group_thing_aggregate', aggregate?: Maybe<{ __typename?: 'group_thing_aggregate_fields', count: number }> } }> };

export type CreateGroupPostMutationVariables = Exact<{
  input: Group_Posts_Insert_Input;
}>;


export type CreateGroupPostMutation = { __typename?: 'mutation_root', insert_group_posts_one?: Maybe<{ __typename?: 'group_posts', id: any, created_at: any, updated_at: any, type: Group_Post_Type_Enum, resolved: boolean, content: string, comments: Array<{ __typename?: 'group_post_comment', id: any, comment: { __typename?: 'comments', id: any, content: string, created_at: any, author: { __typename?: 'users', id: any, name: string, image?: Maybe<string> } } }>, group: { __typename?: 'groups', id: any, short_id: string, name: string, created_at: any, description?: Maybe<string>, public: boolean, memberships_aggregate: { __typename?: 'group_members_aggregate', aggregate?: Maybe<{ __typename?: 'group_members_aggregate_fields', count: number }> }, thing_relations_aggregate: { __typename?: 'group_thing_aggregate', aggregate?: Maybe<{ __typename?: 'group_thing_aggregate_fields', count: number }> } }, author: { __typename?: 'users', id: any, name: string, image?: Maybe<string> } }> };

export type UpdateGroupPostMutationVariables = Exact<{
  id: Scalars['uuid'];
  input: Group_Posts_Set_Input;
}>;


export type UpdateGroupPostMutation = { __typename?: 'mutation_root', update_group_posts_by_pk?: Maybe<{ __typename?: 'group_posts', id: any, created_at: any, updated_at: any, type: Group_Post_Type_Enum, resolved: boolean, content: string, comments: Array<{ __typename?: 'group_post_comment', id: any, comment: { __typename?: 'comments', id: any, content: string, created_at: any, author: { __typename?: 'users', id: any, name: string, image?: Maybe<string> } } }>, group: { __typename?: 'groups', id: any, short_id: string, name: string, created_at: any, description?: Maybe<string>, public: boolean, memberships_aggregate: { __typename?: 'group_members_aggregate', aggregate?: Maybe<{ __typename?: 'group_members_aggregate_fields', count: number }> }, thing_relations_aggregate: { __typename?: 'group_thing_aggregate', aggregate?: Maybe<{ __typename?: 'group_thing_aggregate_fields', count: number }> } }, author: { __typename?: 'users', id: any, name: string, image?: Maybe<string> } }> };

export type CreateGroupPostCommentMutationVariables = Exact<{
  groupPostId: Scalars['uuid'];
  input: Comments_Insert_Input;
}>;


export type CreateGroupPostCommentMutation = { __typename?: 'mutation_root', insert_group_post_comment_one?: Maybe<{ __typename?: 'group_post_comment', comment: { __typename?: 'comments', id: any, content: string, created_at: any, author: { __typename?: 'users', id: any, name: string, image?: Maybe<string> } }, post: { __typename?: 'group_posts', id: any, created_at: any, updated_at: any, type: Group_Post_Type_Enum, resolved: boolean, content: string, comments: Array<{ __typename?: 'group_post_comment', id: any, comment: { __typename?: 'comments', id: any, content: string, created_at: any, author: { __typename?: 'users', id: any, name: string, image?: Maybe<string> } } }>, group: { __typename?: 'groups', id: any, short_id: string, name: string, created_at: any, description?: Maybe<string>, public: boolean, memberships_aggregate: { __typename?: 'group_members_aggregate', aggregate?: Maybe<{ __typename?: 'group_members_aggregate_fields', count: number }> }, thing_relations_aggregate: { __typename?: 'group_thing_aggregate', aggregate?: Maybe<{ __typename?: 'group_thing_aggregate_fields', count: number }> } }, author: { __typename?: 'users', id: any, name: string, image?: Maybe<string> } } }> };

export type LeaveGroupMutationVariables = Exact<{
  groupId: Scalars['uuid'];
  userId: Scalars['uuid'];
}>;


export type LeaveGroupMutation = { __typename?: 'mutation_root', delete_group_members?: Maybe<{ __typename?: 'group_members_mutation_response', affected_rows: number }> };

export type JoinGroupMutationVariables = Exact<{
  groupId: Scalars['uuid'];
}>;


export type JoinGroupMutation = { __typename?: 'mutation_root', insert_group_members_one?: Maybe<{ __typename?: 'group_members', id: any, role: Group_Role_Enum, created_at: any, user: { __typename?: 'users', id: any, name: string, image?: Maybe<string>, created_at: any, memberships: Array<{ __typename?: 'group_members', id: any, role: Group_Role_Enum, group: { __typename?: 'groups', id: any, short_id: string, name: string, created_at: any, description?: Maybe<string>, public: boolean, memberships_aggregate: { __typename?: 'group_members_aggregate', aggregate?: Maybe<{ __typename?: 'group_members_aggregate_fields', count: number }> }, thing_relations_aggregate: { __typename?: 'group_thing_aggregate', aggregate?: Maybe<{ __typename?: 'group_thing_aggregate_fields', count: number }> } } }>, private_info?: Maybe<{ __typename?: 'user_private', email?: Maybe<string> }>, group_join_requests: Array<{ __typename?: 'group_join_requests', id: any, created_at: any, updated_at: any, status?: Maybe<Group_Join_Request_Status_Enum>, group_id: any, message: string, user: { __typename?: 'users', id: any, name: string, image?: Maybe<string> } }> } }> };

export type JoinGroupWithTokenMutationVariables = Exact<{
  input: JoinGroupInput;
}>;


export type JoinGroupWithTokenMutation = { __typename?: 'mutation_root', joinGroup?: Maybe<{ __typename?: 'JoinGroupResult', group: { __typename?: 'groups', id: any }, user: { __typename?: 'users', created_at: any, id: any, name: string, image?: Maybe<string>, memberships: Array<{ __typename?: 'group_members', id: any, role: Group_Role_Enum, group: { __typename?: 'groups', id: any, short_id: string, name: string, created_at: any, description?: Maybe<string>, public: boolean, memberships_aggregate: { __typename?: 'group_members_aggregate', aggregate?: Maybe<{ __typename?: 'group_members_aggregate_fields', count: number }> }, thing_relations_aggregate: { __typename?: 'group_thing_aggregate', aggregate?: Maybe<{ __typename?: 'group_thing_aggregate_fields', count: number }> } } }>, private_info?: Maybe<{ __typename?: 'user_private', email?: Maybe<string> }>, group_join_requests: Array<{ __typename?: 'group_join_requests', id: any, created_at: any, updated_at: any, status?: Maybe<Group_Join_Request_Status_Enum>, group_id: any, message: string, user: { __typename?: 'users', id: any, name: string, image?: Maybe<string> } }> } }> };

export type RequestJoinGroupMutationVariables = Exact<{
  input: RequestJoinGroupInput;
}>;


export type RequestJoinGroupMutation = { __typename?: 'mutation_root', requestJoinGroup?: Maybe<{ __typename?: 'RequestJoinGroupResult', group: { __typename?: 'groups', id: any, short_id: string, name: string, created_at: any, description?: Maybe<string>, public: boolean, memberships_aggregate: { __typename?: 'group_members_aggregate', aggregate?: Maybe<{ __typename?: 'group_members_aggregate_fields', count: number }> }, thing_relations_aggregate: { __typename?: 'group_thing_aggregate', aggregate?: Maybe<{ __typename?: 'group_thing_aggregate_fields', count: number }> } }, user: { __typename?: 'users', id: any, group_join_requests: Array<{ __typename?: 'group_join_requests', id: any, created_at: any, updated_at: any, status?: Maybe<Group_Join_Request_Status_Enum>, group_id: any, message: string, user: { __typename?: 'users', id: any, name: string, image?: Maybe<string> } }> } }> };

export type CancelJoinRequestMutationVariables = Exact<{
  requestId: Scalars['uuid'];
}>;


export type CancelJoinRequestMutation = { __typename?: 'mutation_root', delete_group_join_requests?: Maybe<{ __typename?: 'group_join_requests_mutation_response', returning: Array<{ __typename?: 'group_join_requests', user: { __typename?: 'users', id: any, group_join_requests: Array<{ __typename?: 'group_join_requests', id: any, created_at: any, updated_at: any, status?: Maybe<Group_Join_Request_Status_Enum>, group_id: any, message: string, user: { __typename?: 'users', id: any, name: string, image?: Maybe<string> } }> } }> }> };

export type HandleJoinRequestMutationVariables = Exact<{
  input: HandleJoinRequestInput;
}>;


export type HandleJoinRequestMutation = { __typename?: 'mutation_root', handleJoinRequest: { __typename?: 'HandleJoinRequestResult', join_request: { __typename?: 'group_join_requests', id: any, created_at: any, updated_at: any, status?: Maybe<Group_Join_Request_Status_Enum>, group_id: any, message: string, user: { __typename?: 'users', id: any, name: string, image?: Maybe<string> } } } };

export type CreateJoinTokenMutationVariables = Exact<{
  input: Group_Join_Tokens_Insert_Input;
}>;


export type CreateJoinTokenMutation = { __typename?: 'mutation_root', insert_group_join_tokens_one?: Maybe<{ __typename?: 'group_join_tokens', id: any, created_at: any, updated_at: any, token: string, disabled: boolean, note?: Maybe<string> }> };

export type DeleteJoinTokenMutationVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type DeleteJoinTokenMutation = { __typename?: 'mutation_root', delete_group_join_tokens_by_pk?: Maybe<{ __typename?: 'group_join_tokens', id: any, created_at: any, updated_at: any, token: string, disabled: boolean, note?: Maybe<string> }> };

export type UpdateJoinTokenMutationVariables = Exact<{
  id: Scalars['uuid'];
  input: Group_Join_Tokens_Set_Input;
}>;


export type UpdateJoinTokenMutation = { __typename?: 'mutation_root', update_group_join_tokens_by_pk?: Maybe<{ __typename?: 'group_join_tokens', id: any, created_at: any, updated_at: any, token: string, disabled: boolean, note?: Maybe<string> }> };

export type SearchCountsQueryVariables = Exact<{
  thingWhere: Things_Bool_Exp;
  groupWhere: Groups_Bool_Exp;
  userWhere: Users_Bool_Exp;
}>;


export type SearchCountsQuery = { __typename?: 'query_root', users_aggregate: { __typename?: 'users_aggregate', aggregate?: Maybe<{ __typename?: 'users_aggregate_fields', count: number }> }, groups_aggregate: { __typename?: 'groups_aggregate', aggregate?: Maybe<{ __typename?: 'groups_aggregate_fields', count: number }> }, things_aggregate: { __typename?: 'things_aggregate', aggregate?: Maybe<{ __typename?: 'things_aggregate_fields', count: number }> } };

export type ThingCardFragment = { __typename?: 'things', id: any, name: string, description: string, category?: Maybe<string>, type: Thing_Type_Enum, expiry?: Maybe<any>, short_id: string, images: Array<{ __typename?: 'thing_images', id: any, description: string, order: number, file: { __typename?: 'file_uploads', id: any, name: string, url: string, mime_type?: Maybe<string>, size: number } }>, owner: { __typename?: 'users', id: any, name: string, image?: Maybe<string> } };

export type ThingImageCardFragment = { __typename?: 'thing_images', id: any, description: string, order: number, file: { __typename?: 'file_uploads', id: any, name: string, url: string, mime_type?: Maybe<string>, size: number } };

export type ThingDetailsFragment = { __typename?: 'things', enabled: boolean, id: any, name: string, description: string, category?: Maybe<string>, type: Thing_Type_Enum, expiry?: Maybe<any>, short_id: string, group_relations: Array<{ __typename?: 'group_thing', id: any, group: { __typename?: 'groups', id: any, short_id: string, name: string, created_at: any, description?: Maybe<string>, public: boolean, memberships_aggregate: { __typename?: 'group_members_aggregate', aggregate?: Maybe<{ __typename?: 'group_members_aggregate_fields', count: number }> }, thing_relations_aggregate: { __typename?: 'group_thing_aggregate', aggregate?: Maybe<{ __typename?: 'group_thing_aggregate_fields', count: number }> } } }>, images: Array<{ __typename?: 'thing_images', id: any, description: string, order: number, file: { __typename?: 'file_uploads', id: any, name: string, url: string, mime_type?: Maybe<string>, size: number } }>, owner: { __typename?: 'users', id: any, name: string, image?: Maybe<string> } };

export type ThingListQueryVariables = Exact<{
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Things_Order_By> | Things_Order_By>;
  where: Things_Bool_Exp;
}>;


export type ThingListQuery = { __typename?: 'query_root', things: Array<{ __typename?: 'things', id: any, name: string, description: string, category?: Maybe<string>, type: Thing_Type_Enum, expiry?: Maybe<any>, short_id: string, images: Array<{ __typename?: 'thing_images', id: any, description: string, order: number, file: { __typename?: 'file_uploads', id: any, name: string, url: string, mime_type?: Maybe<string>, size: number } }>, owner: { __typename?: 'users', id: any, name: string, image?: Maybe<string> } }>, things_aggregate: { __typename?: 'things_aggregate', aggregate?: Maybe<{ __typename?: 'things_aggregate_fields', count: number }> } };

export type ThingDetailsQueryVariables = Exact<{
  shortId: Scalars['String'];
}>;


export type ThingDetailsQuery = { __typename?: 'query_root', things: Array<{ __typename?: 'things', enabled: boolean, id: any, name: string, description: string, category?: Maybe<string>, type: Thing_Type_Enum, expiry?: Maybe<any>, short_id: string, group_relations: Array<{ __typename?: 'group_thing', id: any, group: { __typename?: 'groups', id: any, short_id: string, name: string, created_at: any, description?: Maybe<string>, public: boolean, memberships_aggregate: { __typename?: 'group_members_aggregate', aggregate?: Maybe<{ __typename?: 'group_members_aggregate_fields', count: number }> }, thing_relations_aggregate: { __typename?: 'group_thing_aggregate', aggregate?: Maybe<{ __typename?: 'group_thing_aggregate_fields', count: number }> } } }>, images: Array<{ __typename?: 'thing_images', id: any, description: string, order: number, file: { __typename?: 'file_uploads', id: any, name: string, url: string, mime_type?: Maybe<string>, size: number } }>, owner: { __typename?: 'users', id: any, name: string, image?: Maybe<string> } }> };

export type CreateThingMutationVariables = Exact<{
  input: Things_Insert_Input;
}>;


export type CreateThingMutation = { __typename?: 'mutation_root', insert_things_one?: Maybe<{ __typename?: 'things', enabled: boolean, id: any, name: string, description: string, category?: Maybe<string>, type: Thing_Type_Enum, expiry?: Maybe<any>, short_id: string, group_relations: Array<{ __typename?: 'group_thing', id: any, group: { __typename?: 'groups', id: any, short_id: string, name: string, created_at: any, description?: Maybe<string>, public: boolean, memberships_aggregate: { __typename?: 'group_members_aggregate', aggregate?: Maybe<{ __typename?: 'group_members_aggregate_fields', count: number }> }, thing_relations_aggregate: { __typename?: 'group_thing_aggregate', aggregate?: Maybe<{ __typename?: 'group_thing_aggregate_fields', count: number }> } } }>, images: Array<{ __typename?: 'thing_images', id: any, description: string, order: number, file: { __typename?: 'file_uploads', id: any, name: string, url: string, mime_type?: Maybe<string>, size: number } }>, owner: { __typename?: 'users', id: any, name: string, image?: Maybe<string> } }> };

export type UpdateThingMutationVariables = Exact<{
  input: UpdateThingInput;
}>;


export type UpdateThingMutation = { __typename?: 'mutation_root', updateThing?: Maybe<{ __typename?: 'UpdateThingResult', thing: { __typename?: 'things', enabled: boolean, id: any, name: string, description: string, category?: Maybe<string>, type: Thing_Type_Enum, expiry?: Maybe<any>, short_id: string, group_relations: Array<{ __typename?: 'group_thing', id: any, group: { __typename?: 'groups', id: any, short_id: string, name: string, created_at: any, description?: Maybe<string>, public: boolean, memberships_aggregate: { __typename?: 'group_members_aggregate', aggregate?: Maybe<{ __typename?: 'group_members_aggregate_fields', count: number }> }, thing_relations_aggregate: { __typename?: 'group_thing_aggregate', aggregate?: Maybe<{ __typename?: 'group_thing_aggregate_fields', count: number }> } } }>, images: Array<{ __typename?: 'thing_images', id: any, description: string, order: number, file: { __typename?: 'file_uploads', id: any, name: string, url: string, mime_type?: Maybe<string>, size: number } }>, owner: { __typename?: 'users', id: any, name: string, image?: Maybe<string> } } }> };

export type DeleteThingMutationVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type DeleteThingMutation = { __typename?: 'mutation_root', delete_things_by_pk?: Maybe<{ __typename?: 'things', enabled: boolean, id: any, name: string, description: string, category?: Maybe<string>, type: Thing_Type_Enum, expiry?: Maybe<any>, short_id: string, group_relations: Array<{ __typename?: 'group_thing', id: any, group: { __typename?: 'groups', id: any, short_id: string, name: string, created_at: any, description?: Maybe<string>, public: boolean, memberships_aggregate: { __typename?: 'group_members_aggregate', aggregate?: Maybe<{ __typename?: 'group_members_aggregate_fields', count: number }> }, thing_relations_aggregate: { __typename?: 'group_thing_aggregate', aggregate?: Maybe<{ __typename?: 'group_thing_aggregate_fields', count: number }> } } }>, images: Array<{ __typename?: 'thing_images', id: any, description: string, order: number, file: { __typename?: 'file_uploads', id: any, name: string, url: string, mime_type?: Maybe<string>, size: number } }>, owner: { __typename?: 'users', id: any, name: string, image?: Maybe<string> } }> };

export type FileUploadCardFragment = { __typename?: 'file_uploads', id: any, name: string, url: string, mime_type?: Maybe<string>, size: number };

export type InsertFileUploadMutationVariables = Exact<{
  input: File_Uploads_Insert_Input;
}>;


export type InsertFileUploadMutation = { __typename?: 'mutation_root', insert_file_uploads_one?: Maybe<{ __typename?: 'file_uploads', id: any, name: string, url: string, mime_type?: Maybe<string>, size: number }> };

export type UserCardFragment = { __typename?: 'users', id: any, name: string, image?: Maybe<string> };

export type UserDetailFragment = { __typename?: 'users', created_at: any, id: any, name: string, image?: Maybe<string> };

export type UserJoinRequestsFragment = { __typename?: 'users', id: any, group_join_requests: Array<{ __typename?: 'group_join_requests', id: any, created_at: any, updated_at: any, status?: Maybe<Group_Join_Request_Status_Enum>, group_id: any, message: string, user: { __typename?: 'users', id: any, name: string, image?: Maybe<string> } }> };

export type UserPrivateDetailFragment = { __typename?: 'users', created_at: any, id: any, name: string, image?: Maybe<string>, memberships: Array<{ __typename?: 'group_members', id: any, role: Group_Role_Enum, group: { __typename?: 'groups', id: any, short_id: string, name: string, created_at: any, description?: Maybe<string>, public: boolean, memberships_aggregate: { __typename?: 'group_members_aggregate', aggregate?: Maybe<{ __typename?: 'group_members_aggregate_fields', count: number }> }, thing_relations_aggregate: { __typename?: 'group_thing_aggregate', aggregate?: Maybe<{ __typename?: 'group_thing_aggregate_fields', count: number }> } } }>, private_info?: Maybe<{ __typename?: 'user_private', email?: Maybe<string> }>, group_join_requests: Array<{ __typename?: 'group_join_requests', id: any, created_at: any, updated_at: any, status?: Maybe<Group_Join_Request_Status_Enum>, group_id: any, message: string, user: { __typename?: 'users', id: any, name: string, image?: Maybe<string> } }> };

export type UserListQueryVariables = Exact<{
  where?: Maybe<Users_Bool_Exp>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
}>;


export type UserListQuery = { __typename?: 'query_root', users: Array<{ __typename?: 'users', id: any, name: string, image?: Maybe<string> }>, users_aggregate: { __typename?: 'users_aggregate', aggregate?: Maybe<{ __typename?: 'users_aggregate_fields', count: number }> } };

export type UserPrivateDetailsQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type UserPrivateDetailsQuery = { __typename?: 'query_root', users_by_pk?: Maybe<{ __typename?: 'users', created_at: any, id: any, name: string, image?: Maybe<string>, memberships: Array<{ __typename?: 'group_members', id: any, role: Group_Role_Enum, group: { __typename?: 'groups', id: any, short_id: string, name: string, created_at: any, description?: Maybe<string>, public: boolean, memberships_aggregate: { __typename?: 'group_members_aggregate', aggregate?: Maybe<{ __typename?: 'group_members_aggregate_fields', count: number }> }, thing_relations_aggregate: { __typename?: 'group_thing_aggregate', aggregate?: Maybe<{ __typename?: 'group_thing_aggregate_fields', count: number }> } } }>, private_info?: Maybe<{ __typename?: 'user_private', email?: Maybe<string> }>, group_join_requests: Array<{ __typename?: 'group_join_requests', id: any, created_at: any, updated_at: any, status?: Maybe<Group_Join_Request_Status_Enum>, group_id: any, message: string, user: { __typename?: 'users', id: any, name: string, image?: Maybe<string> } }> }> };

export type NotificationsSubscriptionVariables = Exact<{
  userId: Scalars['uuid'];
}>;


export type NotificationsSubscription = { __typename?: 'subscription_root', notifications: Array<{ __typename?: 'notifications', id: any, read_at?: Maybe<any>, created_at: any, activity: { __typename?: 'activities', id: any, created_at: any, verb: Activity_Verb_Enum, entity: { __typename?: 'entities', id: any, group?: Maybe<{ __typename?: 'groups', id: any, short_id: string, name: string }>, thing?: Maybe<{ __typename?: 'things', id: any, short_id: string, name: string, images: Array<{ __typename?: 'thing_images', file: { __typename?: 'file_uploads', url: string } }> }>, user?: Maybe<{ __typename?: 'users', id: any, name: string, image?: Maybe<string> }>, group_join_request?: Maybe<{ __typename?: 'group_join_requests', id: any, response?: Maybe<string>, group: { __typename?: 'groups', id: any, short_id: string, name: string } }>, group_post_comment?: Maybe<{ __typename?: 'group_post_comment', id: any, post: { __typename?: 'group_posts', id: any, author_id: any, group: { __typename?: 'groups', id: any, short_id: string, name: string } }, comment: { __typename?: 'comments', id: any, content: string, created_at: any, author: { __typename?: 'users', id: any, name: string, image?: Maybe<string> } } }>, group_post?: Maybe<{ __typename?: 'group_posts', id: any, group: { __typename?: 'groups', id: any, short_id: string, name: string } }>, group_thing?: Maybe<{ __typename?: 'group_thing', id: any, thing: { __typename?: 'things', id: any, short_id: string, name: string, images: Array<{ __typename?: 'thing_images', file: { __typename?: 'file_uploads', url: string } }> }, group: { __typename?: 'groups', id: any, short_id: string, name: string } }>, group_member?: Maybe<{ __typename?: 'group_members', user: { __typename?: 'users', id: any, name: string, image?: Maybe<string> }, group: { __typename?: 'groups', id: any, short_id: string, name: string } }> }, secondary_entity?: Maybe<{ __typename?: 'entities', id: any, group?: Maybe<{ __typename?: 'groups', id: any, short_id: string, name: string }>, thing?: Maybe<{ __typename?: 'things', id: any, short_id: string, name: string, images: Array<{ __typename?: 'thing_images', file: { __typename?: 'file_uploads', url: string } }> }>, user?: Maybe<{ __typename?: 'users', id: any, name: string, image?: Maybe<string> }>, group_join_request?: Maybe<{ __typename?: 'group_join_requests', id: any, response?: Maybe<string>, group: { __typename?: 'groups', id: any, short_id: string, name: string } }>, group_post_comment?: Maybe<{ __typename?: 'group_post_comment', id: any, post: { __typename?: 'group_posts', id: any, author_id: any, group: { __typename?: 'groups', id: any, short_id: string, name: string } }, comment: { __typename?: 'comments', id: any, content: string, created_at: any, author: { __typename?: 'users', id: any, name: string, image?: Maybe<string> } } }>, group_post?: Maybe<{ __typename?: 'group_posts', id: any, group: { __typename?: 'groups', id: any, short_id: string, name: string } }>, group_thing?: Maybe<{ __typename?: 'group_thing', id: any, thing: { __typename?: 'things', id: any, short_id: string, name: string, images: Array<{ __typename?: 'thing_images', file: { __typename?: 'file_uploads', url: string } }> }, group: { __typename?: 'groups', id: any, short_id: string, name: string } }>, group_member?: Maybe<{ __typename?: 'group_members', user: { __typename?: 'users', id: any, name: string, image?: Maybe<string> }, group: { __typename?: 'groups', id: any, short_id: string, name: string } }> }>, actor?: Maybe<{ __typename?: 'users', id: any, name: string, image?: Maybe<string> }> } }> };

export type MarkNotificationReadMutationVariables = Exact<{
  id: Scalars['uuid'];
  readAt: Scalars['timestamptz'];
}>;


export type MarkNotificationReadMutation = { __typename?: 'mutation_root', update_notifications_by_pk?: Maybe<{ __typename?: 'notifications', id: any, read_at?: Maybe<any>, created_at: any, activity: { __typename?: 'activities', id: any, created_at: any, verb: Activity_Verb_Enum, entity: { __typename?: 'entities', id: any, group?: Maybe<{ __typename?: 'groups', id: any, short_id: string, name: string }>, thing?: Maybe<{ __typename?: 'things', id: any, short_id: string, name: string, images: Array<{ __typename?: 'thing_images', file: { __typename?: 'file_uploads', url: string } }> }>, user?: Maybe<{ __typename?: 'users', id: any, name: string, image?: Maybe<string> }>, group_join_request?: Maybe<{ __typename?: 'group_join_requests', id: any, response?: Maybe<string>, group: { __typename?: 'groups', id: any, short_id: string, name: string } }>, group_post_comment?: Maybe<{ __typename?: 'group_post_comment', id: any, post: { __typename?: 'group_posts', id: any, author_id: any, group: { __typename?: 'groups', id: any, short_id: string, name: string } }, comment: { __typename?: 'comments', id: any, content: string, created_at: any, author: { __typename?: 'users', id: any, name: string, image?: Maybe<string> } } }>, group_post?: Maybe<{ __typename?: 'group_posts', id: any, group: { __typename?: 'groups', id: any, short_id: string, name: string } }>, group_thing?: Maybe<{ __typename?: 'group_thing', id: any, thing: { __typename?: 'things', id: any, short_id: string, name: string, images: Array<{ __typename?: 'thing_images', file: { __typename?: 'file_uploads', url: string } }> }, group: { __typename?: 'groups', id: any, short_id: string, name: string } }>, group_member?: Maybe<{ __typename?: 'group_members', user: { __typename?: 'users', id: any, name: string, image?: Maybe<string> }, group: { __typename?: 'groups', id: any, short_id: string, name: string } }> }, secondary_entity?: Maybe<{ __typename?: 'entities', id: any, group?: Maybe<{ __typename?: 'groups', id: any, short_id: string, name: string }>, thing?: Maybe<{ __typename?: 'things', id: any, short_id: string, name: string, images: Array<{ __typename?: 'thing_images', file: { __typename?: 'file_uploads', url: string } }> }>, user?: Maybe<{ __typename?: 'users', id: any, name: string, image?: Maybe<string> }>, group_join_request?: Maybe<{ __typename?: 'group_join_requests', id: any, response?: Maybe<string>, group: { __typename?: 'groups', id: any, short_id: string, name: string } }>, group_post_comment?: Maybe<{ __typename?: 'group_post_comment', id: any, post: { __typename?: 'group_posts', id: any, author_id: any, group: { __typename?: 'groups', id: any, short_id: string, name: string } }, comment: { __typename?: 'comments', id: any, content: string, created_at: any, author: { __typename?: 'users', id: any, name: string, image?: Maybe<string> } } }>, group_post?: Maybe<{ __typename?: 'group_posts', id: any, group: { __typename?: 'groups', id: any, short_id: string, name: string } }>, group_thing?: Maybe<{ __typename?: 'group_thing', id: any, thing: { __typename?: 'things', id: any, short_id: string, name: string, images: Array<{ __typename?: 'thing_images', file: { __typename?: 'file_uploads', url: string } }> }, group: { __typename?: 'groups', id: any, short_id: string, name: string } }>, group_member?: Maybe<{ __typename?: 'group_members', user: { __typename?: 'users', id: any, name: string, image?: Maybe<string> }, group: { __typename?: 'groups', id: any, short_id: string, name: string } }> }>, actor?: Maybe<{ __typename?: 'users', id: any, name: string, image?: Maybe<string> }> } }> };

export type MarkAllNotificationsReadMutationVariables = Exact<{
  userId: Scalars['uuid'];
  readAt: Scalars['timestamptz'];
}>;


export type MarkAllNotificationsReadMutation = { __typename?: 'mutation_root', update_notifications?: Maybe<{ __typename?: 'notifications_mutation_response', affected_rows: number, returning: Array<{ __typename?: 'notifications', id: any, read_at?: Maybe<any>, created_at: any, activity: { __typename?: 'activities', id: any, created_at: any, verb: Activity_Verb_Enum, entity: { __typename?: 'entities', id: any, group?: Maybe<{ __typename?: 'groups', id: any, short_id: string, name: string }>, thing?: Maybe<{ __typename?: 'things', id: any, short_id: string, name: string, images: Array<{ __typename?: 'thing_images', file: { __typename?: 'file_uploads', url: string } }> }>, user?: Maybe<{ __typename?: 'users', id: any, name: string, image?: Maybe<string> }>, group_join_request?: Maybe<{ __typename?: 'group_join_requests', id: any, response?: Maybe<string>, group: { __typename?: 'groups', id: any, short_id: string, name: string } }>, group_post_comment?: Maybe<{ __typename?: 'group_post_comment', id: any, post: { __typename?: 'group_posts', id: any, author_id: any, group: { __typename?: 'groups', id: any, short_id: string, name: string } }, comment: { __typename?: 'comments', id: any, content: string, created_at: any, author: { __typename?: 'users', id: any, name: string, image?: Maybe<string> } } }>, group_post?: Maybe<{ __typename?: 'group_posts', id: any, group: { __typename?: 'groups', id: any, short_id: string, name: string } }>, group_thing?: Maybe<{ __typename?: 'group_thing', id: any, thing: { __typename?: 'things', id: any, short_id: string, name: string, images: Array<{ __typename?: 'thing_images', file: { __typename?: 'file_uploads', url: string } }> }, group: { __typename?: 'groups', id: any, short_id: string, name: string } }>, group_member?: Maybe<{ __typename?: 'group_members', user: { __typename?: 'users', id: any, name: string, image?: Maybe<string> }, group: { __typename?: 'groups', id: any, short_id: string, name: string } }> }, secondary_entity?: Maybe<{ __typename?: 'entities', id: any, group?: Maybe<{ __typename?: 'groups', id: any, short_id: string, name: string }>, thing?: Maybe<{ __typename?: 'things', id: any, short_id: string, name: string, images: Array<{ __typename?: 'thing_images', file: { __typename?: 'file_uploads', url: string } }> }>, user?: Maybe<{ __typename?: 'users', id: any, name: string, image?: Maybe<string> }>, group_join_request?: Maybe<{ __typename?: 'group_join_requests', id: any, response?: Maybe<string>, group: { __typename?: 'groups', id: any, short_id: string, name: string } }>, group_post_comment?: Maybe<{ __typename?: 'group_post_comment', id: any, post: { __typename?: 'group_posts', id: any, author_id: any, group: { __typename?: 'groups', id: any, short_id: string, name: string } }, comment: { __typename?: 'comments', id: any, content: string, created_at: any, author: { __typename?: 'users', id: any, name: string, image?: Maybe<string> } } }>, group_post?: Maybe<{ __typename?: 'group_posts', id: any, group: { __typename?: 'groups', id: any, short_id: string, name: string } }>, group_thing?: Maybe<{ __typename?: 'group_thing', id: any, thing: { __typename?: 'things', id: any, short_id: string, name: string, images: Array<{ __typename?: 'thing_images', file: { __typename?: 'file_uploads', url: string } }> }, group: { __typename?: 'groups', id: any, short_id: string, name: string } }>, group_member?: Maybe<{ __typename?: 'group_members', user: { __typename?: 'users', id: any, name: string, image?: Maybe<string> }, group: { __typename?: 'groups', id: any, short_id: string, name: string } }> }>, actor?: Maybe<{ __typename?: 'users', id: any, name: string, image?: Maybe<string> }> } }> }> };

export type RegisterUserMutationVariables = Exact<{
  input: CredentialsInput;
}>;


export type RegisterUserMutation = { __typename?: 'mutation_root', registerCredentials?: Maybe<{ __typename?: 'RegistrationResult', user_id: any }> };

export type ServerInsertActivitiesMutationVariables = Exact<{
  input: Array<Activities_Insert_Input> | Activities_Insert_Input;
}>;


export type ServerInsertActivitiesMutation = { __typename?: 'mutation_root', insert_activities?: Maybe<{ __typename?: 'activities_mutation_response', returning: Array<{ __typename?: 'activities', id: any }> }> };

export type ServerChatGroupFragment = { __typename?: 'chat_groups', id: any, members: Array<{ __typename?: 'chat_group_members', user: { __typename?: 'users', id: any } }> };

export type ServerFindChatGroupQueryVariables = Exact<{
  where: Chat_Groups_Bool_Exp;
}>;


export type ServerFindChatGroupQuery = { __typename?: 'query_root', chat_groups: Array<{ __typename?: 'chat_groups', id: any, members: Array<{ __typename?: 'chat_group_members', user: { __typename?: 'users', id: any } }> }> };

export type ServerMostRecentChatsQueryVariables = Exact<{ [key: string]: never; }>;


export type ServerMostRecentChatsQuery = { __typename?: 'query_root', chat_groups: Array<{ __typename?: 'chat_groups', id: any }> };

export type ServerCreateChatGroupMutationVariables = Exact<{
  input: Chat_Groups_Insert_Input;
}>;


export type ServerCreateChatGroupMutation = { __typename?: 'mutation_root', insert_chat_groups_one?: Maybe<{ __typename?: 'chat_groups', id: any }> };

export type ServerCreateChatMessageMutationVariables = Exact<{
  input: Chat_Messages_Insert_Input;
}>;


export type ServerCreateChatMessageMutation = { __typename?: 'mutation_root', insert_chat_messages_one?: Maybe<{ __typename?: 'chat_messages', id: any }> };

export type ServerFindGroupQueryVariables = Exact<{
  where?: Maybe<Groups_Bool_Exp>;
}>;


export type ServerFindGroupQuery = { __typename?: 'query_root', groups: Array<{ __typename?: 'groups', id: any, name: string }> };

export type ServerFindGroupJoinRequestQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type ServerFindGroupJoinRequestQuery = { __typename?: 'query_root', group_join_requests_by_pk?: Maybe<{ __typename?: 'group_join_requests', id: any, group_id: any, user_id: any }> };

export type ServerFindJoinTokenQueryVariables = Exact<{
  where: Group_Join_Tokens_Bool_Exp;
}>;


export type ServerFindJoinTokenQuery = { __typename?: 'query_root', group_join_tokens: Array<{ __typename?: 'group_join_tokens', id: any, token: string }> };

export type ServerFindGroupMembersQueryVariables = Exact<{
  groupId: Scalars['uuid'];
  where?: Maybe<Group_Members_Bool_Exp>;
}>;


export type ServerFindGroupMembersQuery = { __typename?: 'query_root', groups_by_pk?: Maybe<{ __typename?: 'groups', id: any, memberships: Array<{ __typename?: 'group_members', user: { __typename?: 'users', id: any } }> }> };

export type ServerCountGroupMembersQueryVariables = Exact<{
  where?: Maybe<Group_Members_Bool_Exp>;
}>;


export type ServerCountGroupMembersQuery = { __typename?: 'query_root', group_members_aggregate: { __typename?: 'group_members_aggregate', aggregate?: Maybe<{ __typename?: 'group_members_aggregate_fields', count: number }> } };

export type ServerFindPostParticipantsQueryVariables = Exact<{
  groupPostId: Scalars['uuid'];
  groupPostCommentId: Scalars['uuid'];
}>;


export type ServerFindPostParticipantsQuery = { __typename?: 'query_root', postComment?: Maybe<{ __typename?: 'group_post_comment', id: any, comment: { __typename?: 'comments', id: any, author: { __typename?: 'users', id: any, name: string, image?: Maybe<string> } }, post: { __typename?: 'group_posts', id: any, group_id: any, author: { __typename?: 'users', id: any, name: string, image?: Maybe<string> } } }>, participants: Array<{ __typename?: 'users', id: any, name: string, image?: Maybe<string> }> };

export type ServerInsertGroupJoinTokenMutationVariables = Exact<{
  input: Group_Join_Tokens_Insert_Input;
}>;


export type ServerInsertGroupJoinTokenMutation = { __typename?: 'mutation_root', insert_group_join_tokens_one?: Maybe<{ __typename?: 'group_join_tokens', id: any, group_id: any }> };

export type ServerInsertGroupMutationVariables = Exact<{
  input: Groups_Insert_Input;
}>;


export type ServerInsertGroupMutation = { __typename?: 'mutation_root', insert_groups_one?: Maybe<{ __typename?: 'groups', id: any }> };

export type ServerInsertGroupJoinRequestMutationVariables = Exact<{
  input: Group_Join_Requests_Insert_Input;
}>;


export type ServerInsertGroupJoinRequestMutation = { __typename?: 'mutation_root', insert_group_join_requests_one?: Maybe<{ __typename?: 'group_join_requests', group_id: any, status?: Maybe<Group_Join_Request_Status_Enum> }> };

export type ServerInsertGroupMemberMutationVariables = Exact<{
  input: Group_Members_Insert_Input;
}>;


export type ServerInsertGroupMemberMutation = { __typename?: 'mutation_root', insert_group_members_one?: Maybe<{ __typename?: 'group_members', id: any }> };

export type ServerUpdateGroupJoinRequestMutationVariables = Exact<{
  id: Scalars['uuid'];
  input: Group_Join_Requests_Set_Input;
}>;


export type ServerUpdateGroupJoinRequestMutation = { __typename?: 'mutation_root', update_group_join_requests_by_pk?: Maybe<{ __typename?: 'group_join_requests', id: any, group_id: any }> };

export type ServerFetchThingPageDetailsQueryVariables = Exact<{
  shortId: Scalars['String'];
}>;


export type ServerFetchThingPageDetailsQuery = { __typename?: 'query_root', things: Array<{ __typename?: 'things', enabled: boolean, id: any, name: string, description: string, category?: Maybe<string>, type: Thing_Type_Enum, expiry?: Maybe<any>, short_id: string, group_relations: Array<{ __typename?: 'group_thing', id: any, group: { __typename?: 'groups', id: any, short_id: string, name: string, created_at: any, description?: Maybe<string>, public: boolean, memberships_aggregate: { __typename?: 'group_members_aggregate', aggregate?: Maybe<{ __typename?: 'group_members_aggregate_fields', count: number }> }, thing_relations_aggregate: { __typename?: 'group_thing_aggregate', aggregate?: Maybe<{ __typename?: 'group_thing_aggregate_fields', count: number }> } } }>, images: Array<{ __typename?: 'thing_images', id: any, description: string, order: number, file: { __typename?: 'file_uploads', id: any, name: string, url: string, mime_type?: Maybe<string>, size: number } }>, owner: { __typename?: 'users', id: any, name: string, image?: Maybe<string> } }> };

export type ServerFetchThingDetailsQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type ServerFetchThingDetailsQuery = { __typename?: 'query_root', things_by_pk?: Maybe<{ __typename?: 'things', id: any, short_id: string, created_at: any, owner: { __typename?: 'users', id: any, name: string }, group_relations: Array<{ __typename?: 'group_thing', id: any, group: { __typename?: 'groups', id: any, public: boolean, name: string, memberships: Array<{ __typename?: 'group_members', role: Group_Role_Enum, user: { __typename?: 'users', id: any } }> } }>, images: Array<{ __typename?: 'thing_images', id: any, file_id: any, order: number, description: string }> }> };

export type ServerUpdateThingMutationVariables = Exact<{
  id: Scalars['uuid'];
  input: Things_Insert_Input;
  deletedFileIds: Array<Scalars['uuid']> | Scalars['uuid'];
  deletedGroupIds: Array<Scalars['uuid']> | Scalars['uuid'];
}>;


export type ServerUpdateThingMutation = { __typename?: 'mutation_root', insert_things_one?: Maybe<{ __typename?: 'things', id: any }>, delete_thing_images?: Maybe<{ __typename?: 'thing_images_mutation_response', affected_rows: number }>, delete_group_thing?: Maybe<{ __typename?: 'group_thing_mutation_response', affected_rows: number }> };

export type ServerUserCredentialsQueryVariables = Exact<{
  email: Scalars['String'];
}>;


export type ServerUserCredentialsQuery = { __typename?: 'query_root', users: Array<{ __typename?: 'users', id: any, password_hash?: Maybe<string> }> };

export type ServerFindUserQueryVariables = Exact<{
  email?: Maybe<Scalars['String']>;
}>;


export type ServerFindUserQuery = { __typename?: 'query_root', users: Array<{ __typename?: 'users', id: any, email?: Maybe<string> }> };

export type ServerInsertUserMutationVariables = Exact<{
  input: Users_Insert_Input;
}>;


export type ServerInsertUserMutation = { __typename?: 'mutation_root', insert_users_one?: Maybe<{ __typename?: 'users', id: any }> };



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean_comparison_exp: Boolean_Comparison_Exp;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  CreateChatGroupInput: CreateChatGroupInput;
  String: ResolverTypeWrapper<Scalars['String']>;
  CreateChatGroupResult: ResolverTypeWrapper<CreateChatGroupResult>;
  CreateGroupInput: CreateGroupInput;
  CreateGroupResult: ResolverTypeWrapper<CreateGroupResult>;
  CreateJoinTokenInput: CreateJoinTokenInput;
  CreateJoinTokenResult: ResolverTypeWrapper<CreateJoinTokenResult>;
  CredentialsInput: CredentialsInput;
  DeleteThingInput: DeleteThingInput;
  DeleteThingOutput: ResolverTypeWrapper<DeleteThingOutput>;
  HandleJoinRequestInput: HandleJoinRequestInput;
  HandleJoinRequestResult: ResolverTypeWrapper<HandleJoinRequestResult>;
  Int_comparison_exp: Int_Comparison_Exp;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  JoinGroupInput: JoinGroupInput;
  JoinGroupResult: ResolverTypeWrapper<JoinGroupResult>;
  RegistrationResult: ResolverTypeWrapper<RegistrationResult>;
  RequestJoinGroupInput: RequestJoinGroupInput;
  RequestJoinGroupResult: ResolverTypeWrapper<RequestJoinGroupResult>;
  String_comparison_exp: String_Comparison_Exp;
  UpdateGroupThing: UpdateGroupThing;
  UpdateThingImage: UpdateThingImage;
  UpdateThingInput: UpdateThingInput;
  UpdateThingResult: ResolverTypeWrapper<UpdateThingResult>;
  activities: ResolverTypeWrapper<Activities>;
  activities_aggregate: ResolverTypeWrapper<Activities_Aggregate>;
  activities_aggregate_fields: ResolverTypeWrapper<Activities_Aggregate_Fields>;
  activities_aggregate_order_by: Activities_Aggregate_Order_By;
  activities_arr_rel_insert_input: Activities_Arr_Rel_Insert_Input;
  activities_bool_exp: Activities_Bool_Exp;
  activities_constraint: Activities_Constraint;
  activities_insert_input: Activities_Insert_Input;
  activities_max_fields: ResolverTypeWrapper<Activities_Max_Fields>;
  activities_max_order_by: Activities_Max_Order_By;
  activities_min_fields: ResolverTypeWrapper<Activities_Min_Fields>;
  activities_min_order_by: Activities_Min_Order_By;
  activities_mutation_response: ResolverTypeWrapper<Activities_Mutation_Response>;
  activities_obj_rel_insert_input: Activities_Obj_Rel_Insert_Input;
  activities_on_conflict: Activities_On_Conflict;
  activities_order_by: Activities_Order_By;
  activities_pk_columns_input: Activities_Pk_Columns_Input;
  activities_select_column: Activities_Select_Column;
  activities_set_input: Activities_Set_Input;
  activities_update_column: Activities_Update_Column;
  activity_verb: ResolverTypeWrapper<Activity_Verb>;
  activity_verb_aggregate: ResolverTypeWrapper<Activity_Verb_Aggregate>;
  activity_verb_aggregate_fields: ResolverTypeWrapper<Activity_Verb_Aggregate_Fields>;
  activity_verb_bool_exp: Activity_Verb_Bool_Exp;
  activity_verb_constraint: Activity_Verb_Constraint;
  activity_verb_enum: Activity_Verb_Enum;
  activity_verb_enum_comparison_exp: Activity_Verb_Enum_Comparison_Exp;
  activity_verb_insert_input: Activity_Verb_Insert_Input;
  activity_verb_max_fields: ResolverTypeWrapper<Activity_Verb_Max_Fields>;
  activity_verb_min_fields: ResolverTypeWrapper<Activity_Verb_Min_Fields>;
  activity_verb_mutation_response: ResolverTypeWrapper<Activity_Verb_Mutation_Response>;
  activity_verb_on_conflict: Activity_Verb_On_Conflict;
  activity_verb_order_by: Activity_Verb_Order_By;
  activity_verb_pk_columns_input: Activity_Verb_Pk_Columns_Input;
  activity_verb_select_column: Activity_Verb_Select_Column;
  activity_verb_set_input: Activity_Verb_Set_Input;
  activity_verb_update_column: Activity_Verb_Update_Column;
  chat_group_members: ResolverTypeWrapper<Chat_Group_Members>;
  chat_group_members_aggregate: ResolverTypeWrapper<Chat_Group_Members_Aggregate>;
  chat_group_members_aggregate_fields: ResolverTypeWrapper<Chat_Group_Members_Aggregate_Fields>;
  chat_group_members_aggregate_order_by: Chat_Group_Members_Aggregate_Order_By;
  chat_group_members_arr_rel_insert_input: Chat_Group_Members_Arr_Rel_Insert_Input;
  chat_group_members_bool_exp: Chat_Group_Members_Bool_Exp;
  chat_group_members_constraint: Chat_Group_Members_Constraint;
  chat_group_members_insert_input: Chat_Group_Members_Insert_Input;
  chat_group_members_max_fields: ResolverTypeWrapper<Chat_Group_Members_Max_Fields>;
  chat_group_members_max_order_by: Chat_Group_Members_Max_Order_By;
  chat_group_members_min_fields: ResolverTypeWrapper<Chat_Group_Members_Min_Fields>;
  chat_group_members_min_order_by: Chat_Group_Members_Min_Order_By;
  chat_group_members_mutation_response: ResolverTypeWrapper<Chat_Group_Members_Mutation_Response>;
  chat_group_members_on_conflict: Chat_Group_Members_On_Conflict;
  chat_group_members_order_by: Chat_Group_Members_Order_By;
  chat_group_members_pk_columns_input: Chat_Group_Members_Pk_Columns_Input;
  chat_group_members_select_column: Chat_Group_Members_Select_Column;
  chat_group_members_set_input: Chat_Group_Members_Set_Input;
  chat_group_members_update_column: Chat_Group_Members_Update_Column;
  chat_groups: ResolverTypeWrapper<Chat_Groups>;
  chat_groups_aggregate: ResolverTypeWrapper<Chat_Groups_Aggregate>;
  chat_groups_aggregate_fields: ResolverTypeWrapper<Chat_Groups_Aggregate_Fields>;
  chat_groups_bool_exp: Chat_Groups_Bool_Exp;
  chat_groups_constraint: Chat_Groups_Constraint;
  chat_groups_insert_input: Chat_Groups_Insert_Input;
  chat_groups_max_fields: ResolverTypeWrapper<Chat_Groups_Max_Fields>;
  chat_groups_min_fields: ResolverTypeWrapper<Chat_Groups_Min_Fields>;
  chat_groups_mutation_response: ResolverTypeWrapper<Chat_Groups_Mutation_Response>;
  chat_groups_obj_rel_insert_input: Chat_Groups_Obj_Rel_Insert_Input;
  chat_groups_on_conflict: Chat_Groups_On_Conflict;
  chat_groups_order_by: Chat_Groups_Order_By;
  chat_groups_pk_columns_input: Chat_Groups_Pk_Columns_Input;
  chat_groups_select_column: Chat_Groups_Select_Column;
  chat_groups_set_input: Chat_Groups_Set_Input;
  chat_groups_update_column: Chat_Groups_Update_Column;
  chat_messages: ResolverTypeWrapper<Chat_Messages>;
  chat_messages_aggregate: ResolverTypeWrapper<Chat_Messages_Aggregate>;
  chat_messages_aggregate_fields: ResolverTypeWrapper<Chat_Messages_Aggregate_Fields>;
  chat_messages_aggregate_order_by: Chat_Messages_Aggregate_Order_By;
  chat_messages_arr_rel_insert_input: Chat_Messages_Arr_Rel_Insert_Input;
  chat_messages_bool_exp: Chat_Messages_Bool_Exp;
  chat_messages_constraint: Chat_Messages_Constraint;
  chat_messages_insert_input: Chat_Messages_Insert_Input;
  chat_messages_max_fields: ResolverTypeWrapper<Chat_Messages_Max_Fields>;
  chat_messages_max_order_by: Chat_Messages_Max_Order_By;
  chat_messages_min_fields: ResolverTypeWrapper<Chat_Messages_Min_Fields>;
  chat_messages_min_order_by: Chat_Messages_Min_Order_By;
  chat_messages_mutation_response: ResolverTypeWrapper<Chat_Messages_Mutation_Response>;
  chat_messages_on_conflict: Chat_Messages_On_Conflict;
  chat_messages_order_by: Chat_Messages_Order_By;
  chat_messages_pk_columns_input: Chat_Messages_Pk_Columns_Input;
  chat_messages_select_column: Chat_Messages_Select_Column;
  chat_messages_set_input: Chat_Messages_Set_Input;
  chat_messages_update_column: Chat_Messages_Update_Column;
  comments: ResolverTypeWrapper<Comments>;
  comments_aggregate: ResolverTypeWrapper<Comments_Aggregate>;
  comments_aggregate_fields: ResolverTypeWrapper<Comments_Aggregate_Fields>;
  comments_aggregate_order_by: Comments_Aggregate_Order_By;
  comments_arr_rel_insert_input: Comments_Arr_Rel_Insert_Input;
  comments_bool_exp: Comments_Bool_Exp;
  comments_constraint: Comments_Constraint;
  comments_insert_input: Comments_Insert_Input;
  comments_max_fields: ResolverTypeWrapper<Comments_Max_Fields>;
  comments_max_order_by: Comments_Max_Order_By;
  comments_min_fields: ResolverTypeWrapper<Comments_Min_Fields>;
  comments_min_order_by: Comments_Min_Order_By;
  comments_mutation_response: ResolverTypeWrapper<Comments_Mutation_Response>;
  comments_obj_rel_insert_input: Comments_Obj_Rel_Insert_Input;
  comments_on_conflict: Comments_On_Conflict;
  comments_order_by: Comments_Order_By;
  comments_pk_columns_input: Comments_Pk_Columns_Input;
  comments_select_column: Comments_Select_Column;
  comments_set_input: Comments_Set_Input;
  comments_update_column: Comments_Update_Column;
  date: ResolverTypeWrapper<Scalars['date']>;
  date_comparison_exp: Date_Comparison_Exp;
  entities: ResolverTypeWrapper<Entities>;
  entities_aggregate: ResolverTypeWrapper<Entities_Aggregate>;
  entities_aggregate_fields: ResolverTypeWrapper<Entities_Aggregate_Fields>;
  entities_avg_fields: ResolverTypeWrapper<Entities_Avg_Fields>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  entities_bool_exp: Entities_Bool_Exp;
  entities_constraint: Entities_Constraint;
  entities_inc_input: Entities_Inc_Input;
  entities_insert_input: Entities_Insert_Input;
  entities_max_fields: ResolverTypeWrapper<Entities_Max_Fields>;
  entities_min_fields: ResolverTypeWrapper<Entities_Min_Fields>;
  entities_mutation_response: ResolverTypeWrapper<Entities_Mutation_Response>;
  entities_obj_rel_insert_input: Entities_Obj_Rel_Insert_Input;
  entities_on_conflict: Entities_On_Conflict;
  entities_order_by: Entities_Order_By;
  entities_pk_columns_input: Entities_Pk_Columns_Input;
  entities_select_column: Entities_Select_Column;
  entities_set_input: Entities_Set_Input;
  entities_stddev_fields: ResolverTypeWrapper<Entities_Stddev_Fields>;
  entities_stddev_pop_fields: ResolverTypeWrapper<Entities_Stddev_Pop_Fields>;
  entities_stddev_samp_fields: ResolverTypeWrapper<Entities_Stddev_Samp_Fields>;
  entities_sum_fields: ResolverTypeWrapper<Entities_Sum_Fields>;
  entities_update_column: Entities_Update_Column;
  entities_var_pop_fields: ResolverTypeWrapper<Entities_Var_Pop_Fields>;
  entities_var_samp_fields: ResolverTypeWrapper<Entities_Var_Samp_Fields>;
  entities_variance_fields: ResolverTypeWrapper<Entities_Variance_Fields>;
  file_uploads: ResolverTypeWrapper<File_Uploads>;
  file_uploads_aggregate: ResolverTypeWrapper<File_Uploads_Aggregate>;
  file_uploads_aggregate_fields: ResolverTypeWrapper<File_Uploads_Aggregate_Fields>;
  file_uploads_avg_fields: ResolverTypeWrapper<File_Uploads_Avg_Fields>;
  file_uploads_bool_exp: File_Uploads_Bool_Exp;
  file_uploads_constraint: File_Uploads_Constraint;
  file_uploads_inc_input: File_Uploads_Inc_Input;
  file_uploads_insert_input: File_Uploads_Insert_Input;
  file_uploads_max_fields: ResolverTypeWrapper<File_Uploads_Max_Fields>;
  file_uploads_min_fields: ResolverTypeWrapper<File_Uploads_Min_Fields>;
  file_uploads_mutation_response: ResolverTypeWrapper<File_Uploads_Mutation_Response>;
  file_uploads_obj_rel_insert_input: File_Uploads_Obj_Rel_Insert_Input;
  file_uploads_on_conflict: File_Uploads_On_Conflict;
  file_uploads_order_by: File_Uploads_Order_By;
  file_uploads_pk_columns_input: File_Uploads_Pk_Columns_Input;
  file_uploads_select_column: File_Uploads_Select_Column;
  file_uploads_set_input: File_Uploads_Set_Input;
  file_uploads_stddev_fields: ResolverTypeWrapper<File_Uploads_Stddev_Fields>;
  file_uploads_stddev_pop_fields: ResolverTypeWrapper<File_Uploads_Stddev_Pop_Fields>;
  file_uploads_stddev_samp_fields: ResolverTypeWrapper<File_Uploads_Stddev_Samp_Fields>;
  file_uploads_sum_fields: ResolverTypeWrapper<File_Uploads_Sum_Fields>;
  file_uploads_update_column: File_Uploads_Update_Column;
  file_uploads_var_pop_fields: ResolverTypeWrapper<File_Uploads_Var_Pop_Fields>;
  file_uploads_var_samp_fields: ResolverTypeWrapper<File_Uploads_Var_Samp_Fields>;
  file_uploads_variance_fields: ResolverTypeWrapper<File_Uploads_Variance_Fields>;
  group_join_request_status: ResolverTypeWrapper<Group_Join_Request_Status>;
  group_join_request_status_aggregate: ResolverTypeWrapper<Group_Join_Request_Status_Aggregate>;
  group_join_request_status_aggregate_fields: ResolverTypeWrapper<Group_Join_Request_Status_Aggregate_Fields>;
  group_join_request_status_bool_exp: Group_Join_Request_Status_Bool_Exp;
  group_join_request_status_constraint: Group_Join_Request_Status_Constraint;
  group_join_request_status_enum: Group_Join_Request_Status_Enum;
  group_join_request_status_enum_comparison_exp: Group_Join_Request_Status_Enum_Comparison_Exp;
  group_join_request_status_insert_input: Group_Join_Request_Status_Insert_Input;
  group_join_request_status_max_fields: ResolverTypeWrapper<Group_Join_Request_Status_Max_Fields>;
  group_join_request_status_min_fields: ResolverTypeWrapper<Group_Join_Request_Status_Min_Fields>;
  group_join_request_status_mutation_response: ResolverTypeWrapper<Group_Join_Request_Status_Mutation_Response>;
  group_join_request_status_on_conflict: Group_Join_Request_Status_On_Conflict;
  group_join_request_status_order_by: Group_Join_Request_Status_Order_By;
  group_join_request_status_pk_columns_input: Group_Join_Request_Status_Pk_Columns_Input;
  group_join_request_status_select_column: Group_Join_Request_Status_Select_Column;
  group_join_request_status_set_input: Group_Join_Request_Status_Set_Input;
  group_join_request_status_update_column: Group_Join_Request_Status_Update_Column;
  group_join_requests: ResolverTypeWrapper<Group_Join_Requests>;
  group_join_requests_aggregate: ResolverTypeWrapper<Group_Join_Requests_Aggregate>;
  group_join_requests_aggregate_fields: ResolverTypeWrapper<Group_Join_Requests_Aggregate_Fields>;
  group_join_requests_aggregate_order_by: Group_Join_Requests_Aggregate_Order_By;
  group_join_requests_arr_rel_insert_input: Group_Join_Requests_Arr_Rel_Insert_Input;
  group_join_requests_bool_exp: Group_Join_Requests_Bool_Exp;
  group_join_requests_constraint: Group_Join_Requests_Constraint;
  group_join_requests_insert_input: Group_Join_Requests_Insert_Input;
  group_join_requests_max_fields: ResolverTypeWrapper<Group_Join_Requests_Max_Fields>;
  group_join_requests_max_order_by: Group_Join_Requests_Max_Order_By;
  group_join_requests_min_fields: ResolverTypeWrapper<Group_Join_Requests_Min_Fields>;
  group_join_requests_min_order_by: Group_Join_Requests_Min_Order_By;
  group_join_requests_mutation_response: ResolverTypeWrapper<Group_Join_Requests_Mutation_Response>;
  group_join_requests_obj_rel_insert_input: Group_Join_Requests_Obj_Rel_Insert_Input;
  group_join_requests_on_conflict: Group_Join_Requests_On_Conflict;
  group_join_requests_order_by: Group_Join_Requests_Order_By;
  group_join_requests_pk_columns_input: Group_Join_Requests_Pk_Columns_Input;
  group_join_requests_select_column: Group_Join_Requests_Select_Column;
  group_join_requests_set_input: Group_Join_Requests_Set_Input;
  group_join_requests_update_column: Group_Join_Requests_Update_Column;
  group_join_tokens: ResolverTypeWrapper<Group_Join_Tokens>;
  group_join_tokens_aggregate: ResolverTypeWrapper<Group_Join_Tokens_Aggregate>;
  group_join_tokens_aggregate_fields: ResolverTypeWrapper<Group_Join_Tokens_Aggregate_Fields>;
  group_join_tokens_aggregate_order_by: Group_Join_Tokens_Aggregate_Order_By;
  group_join_tokens_arr_rel_insert_input: Group_Join_Tokens_Arr_Rel_Insert_Input;
  group_join_tokens_bool_exp: Group_Join_Tokens_Bool_Exp;
  group_join_tokens_constraint: Group_Join_Tokens_Constraint;
  group_join_tokens_insert_input: Group_Join_Tokens_Insert_Input;
  group_join_tokens_max_fields: ResolverTypeWrapper<Group_Join_Tokens_Max_Fields>;
  group_join_tokens_max_order_by: Group_Join_Tokens_Max_Order_By;
  group_join_tokens_min_fields: ResolverTypeWrapper<Group_Join_Tokens_Min_Fields>;
  group_join_tokens_min_order_by: Group_Join_Tokens_Min_Order_By;
  group_join_tokens_mutation_response: ResolverTypeWrapper<Group_Join_Tokens_Mutation_Response>;
  group_join_tokens_on_conflict: Group_Join_Tokens_On_Conflict;
  group_join_tokens_order_by: Group_Join_Tokens_Order_By;
  group_join_tokens_pk_columns_input: Group_Join_Tokens_Pk_Columns_Input;
  group_join_tokens_select_column: Group_Join_Tokens_Select_Column;
  group_join_tokens_set_input: Group_Join_Tokens_Set_Input;
  group_join_tokens_update_column: Group_Join_Tokens_Update_Column;
  group_members: ResolverTypeWrapper<Group_Members>;
  group_members_aggregate: ResolverTypeWrapper<Group_Members_Aggregate>;
  group_members_aggregate_fields: ResolverTypeWrapper<Group_Members_Aggregate_Fields>;
  group_members_aggregate_order_by: Group_Members_Aggregate_Order_By;
  group_members_arr_rel_insert_input: Group_Members_Arr_Rel_Insert_Input;
  group_members_bool_exp: Group_Members_Bool_Exp;
  group_members_constraint: Group_Members_Constraint;
  group_members_insert_input: Group_Members_Insert_Input;
  group_members_max_fields: ResolverTypeWrapper<Group_Members_Max_Fields>;
  group_members_max_order_by: Group_Members_Max_Order_By;
  group_members_min_fields: ResolverTypeWrapper<Group_Members_Min_Fields>;
  group_members_min_order_by: Group_Members_Min_Order_By;
  group_members_mutation_response: ResolverTypeWrapper<Group_Members_Mutation_Response>;
  group_members_obj_rel_insert_input: Group_Members_Obj_Rel_Insert_Input;
  group_members_on_conflict: Group_Members_On_Conflict;
  group_members_order_by: Group_Members_Order_By;
  group_members_pk_columns_input: Group_Members_Pk_Columns_Input;
  group_members_select_column: Group_Members_Select_Column;
  group_members_set_input: Group_Members_Set_Input;
  group_members_update_column: Group_Members_Update_Column;
  group_post_comment: ResolverTypeWrapper<Group_Post_Comment>;
  group_post_comment_aggregate: ResolverTypeWrapper<Group_Post_Comment_Aggregate>;
  group_post_comment_aggregate_fields: ResolverTypeWrapper<Group_Post_Comment_Aggregate_Fields>;
  group_post_comment_aggregate_order_by: Group_Post_Comment_Aggregate_Order_By;
  group_post_comment_arr_rel_insert_input: Group_Post_Comment_Arr_Rel_Insert_Input;
  group_post_comment_bool_exp: Group_Post_Comment_Bool_Exp;
  group_post_comment_constraint: Group_Post_Comment_Constraint;
  group_post_comment_insert_input: Group_Post_Comment_Insert_Input;
  group_post_comment_max_fields: ResolverTypeWrapper<Group_Post_Comment_Max_Fields>;
  group_post_comment_max_order_by: Group_Post_Comment_Max_Order_By;
  group_post_comment_min_fields: ResolverTypeWrapper<Group_Post_Comment_Min_Fields>;
  group_post_comment_min_order_by: Group_Post_Comment_Min_Order_By;
  group_post_comment_mutation_response: ResolverTypeWrapper<Group_Post_Comment_Mutation_Response>;
  group_post_comment_obj_rel_insert_input: Group_Post_Comment_Obj_Rel_Insert_Input;
  group_post_comment_on_conflict: Group_Post_Comment_On_Conflict;
  group_post_comment_order_by: Group_Post_Comment_Order_By;
  group_post_comment_pk_columns_input: Group_Post_Comment_Pk_Columns_Input;
  group_post_comment_select_column: Group_Post_Comment_Select_Column;
  group_post_comment_set_input: Group_Post_Comment_Set_Input;
  group_post_comment_update_column: Group_Post_Comment_Update_Column;
  group_post_type: ResolverTypeWrapper<Group_Post_Type>;
  group_post_type_aggregate: ResolverTypeWrapper<Group_Post_Type_Aggregate>;
  group_post_type_aggregate_fields: ResolverTypeWrapper<Group_Post_Type_Aggregate_Fields>;
  group_post_type_bool_exp: Group_Post_Type_Bool_Exp;
  group_post_type_constraint: Group_Post_Type_Constraint;
  group_post_type_enum: Group_Post_Type_Enum;
  group_post_type_enum_comparison_exp: Group_Post_Type_Enum_Comparison_Exp;
  group_post_type_insert_input: Group_Post_Type_Insert_Input;
  group_post_type_max_fields: ResolverTypeWrapper<Group_Post_Type_Max_Fields>;
  group_post_type_min_fields: ResolverTypeWrapper<Group_Post_Type_Min_Fields>;
  group_post_type_mutation_response: ResolverTypeWrapper<Group_Post_Type_Mutation_Response>;
  group_post_type_on_conflict: Group_Post_Type_On_Conflict;
  group_post_type_order_by: Group_Post_Type_Order_By;
  group_post_type_pk_columns_input: Group_Post_Type_Pk_Columns_Input;
  group_post_type_select_column: Group_Post_Type_Select_Column;
  group_post_type_set_input: Group_Post_Type_Set_Input;
  group_post_type_update_column: Group_Post_Type_Update_Column;
  group_posts: ResolverTypeWrapper<Group_Posts>;
  group_posts_aggregate: ResolverTypeWrapper<Group_Posts_Aggregate>;
  group_posts_aggregate_fields: ResolverTypeWrapper<Group_Posts_Aggregate_Fields>;
  group_posts_aggregate_order_by: Group_Posts_Aggregate_Order_By;
  group_posts_arr_rel_insert_input: Group_Posts_Arr_Rel_Insert_Input;
  group_posts_bool_exp: Group_Posts_Bool_Exp;
  group_posts_constraint: Group_Posts_Constraint;
  group_posts_insert_input: Group_Posts_Insert_Input;
  group_posts_max_fields: ResolverTypeWrapper<Group_Posts_Max_Fields>;
  group_posts_max_order_by: Group_Posts_Max_Order_By;
  group_posts_min_fields: ResolverTypeWrapper<Group_Posts_Min_Fields>;
  group_posts_min_order_by: Group_Posts_Min_Order_By;
  group_posts_mutation_response: ResolverTypeWrapper<Group_Posts_Mutation_Response>;
  group_posts_obj_rel_insert_input: Group_Posts_Obj_Rel_Insert_Input;
  group_posts_on_conflict: Group_Posts_On_Conflict;
  group_posts_order_by: Group_Posts_Order_By;
  group_posts_pk_columns_input: Group_Posts_Pk_Columns_Input;
  group_posts_select_column: Group_Posts_Select_Column;
  group_posts_set_input: Group_Posts_Set_Input;
  group_posts_update_column: Group_Posts_Update_Column;
  group_role: ResolverTypeWrapper<Group_Role>;
  group_role_aggregate: ResolverTypeWrapper<Group_Role_Aggregate>;
  group_role_aggregate_fields: ResolverTypeWrapper<Group_Role_Aggregate_Fields>;
  group_role_bool_exp: Group_Role_Bool_Exp;
  group_role_constraint: Group_Role_Constraint;
  group_role_enum: Group_Role_Enum;
  group_role_enum_comparison_exp: Group_Role_Enum_Comparison_Exp;
  group_role_insert_input: Group_Role_Insert_Input;
  group_role_max_fields: ResolverTypeWrapper<Group_Role_Max_Fields>;
  group_role_min_fields: ResolverTypeWrapper<Group_Role_Min_Fields>;
  group_role_mutation_response: ResolverTypeWrapper<Group_Role_Mutation_Response>;
  group_role_on_conflict: Group_Role_On_Conflict;
  group_role_order_by: Group_Role_Order_By;
  group_role_pk_columns_input: Group_Role_Pk_Columns_Input;
  group_role_select_column: Group_Role_Select_Column;
  group_role_set_input: Group_Role_Set_Input;
  group_role_update_column: Group_Role_Update_Column;
  group_thing: ResolverTypeWrapper<Group_Thing>;
  group_thing_aggregate: ResolverTypeWrapper<Group_Thing_Aggregate>;
  group_thing_aggregate_fields: ResolverTypeWrapper<Group_Thing_Aggregate_Fields>;
  group_thing_aggregate_order_by: Group_Thing_Aggregate_Order_By;
  group_thing_arr_rel_insert_input: Group_Thing_Arr_Rel_Insert_Input;
  group_thing_bool_exp: Group_Thing_Bool_Exp;
  group_thing_constraint: Group_Thing_Constraint;
  group_thing_insert_input: Group_Thing_Insert_Input;
  group_thing_max_fields: ResolverTypeWrapper<Group_Thing_Max_Fields>;
  group_thing_max_order_by: Group_Thing_Max_Order_By;
  group_thing_min_fields: ResolverTypeWrapper<Group_Thing_Min_Fields>;
  group_thing_min_order_by: Group_Thing_Min_Order_By;
  group_thing_mutation_response: ResolverTypeWrapper<Group_Thing_Mutation_Response>;
  group_thing_obj_rel_insert_input: Group_Thing_Obj_Rel_Insert_Input;
  group_thing_on_conflict: Group_Thing_On_Conflict;
  group_thing_order_by: Group_Thing_Order_By;
  group_thing_pk_columns_input: Group_Thing_Pk_Columns_Input;
  group_thing_select_column: Group_Thing_Select_Column;
  group_thing_set_input: Group_Thing_Set_Input;
  group_thing_update_column: Group_Thing_Update_Column;
  groups: ResolverTypeWrapper<Groups>;
  groups_aggregate: ResolverTypeWrapper<Groups_Aggregate>;
  groups_aggregate_fields: ResolverTypeWrapper<Groups_Aggregate_Fields>;
  groups_bool_exp: Groups_Bool_Exp;
  groups_constraint: Groups_Constraint;
  groups_insert_input: Groups_Insert_Input;
  groups_max_fields: ResolverTypeWrapper<Groups_Max_Fields>;
  groups_min_fields: ResolverTypeWrapper<Groups_Min_Fields>;
  groups_mutation_response: ResolverTypeWrapper<Groups_Mutation_Response>;
  groups_obj_rel_insert_input: Groups_Obj_Rel_Insert_Input;
  groups_on_conflict: Groups_On_Conflict;
  groups_order_by: Groups_Order_By;
  groups_pk_columns_input: Groups_Pk_Columns_Input;
  groups_select_column: Groups_Select_Column;
  groups_set_input: Groups_Set_Input;
  groups_update_column: Groups_Update_Column;
  mutation_root: ResolverTypeWrapper<{}>;
  notifications: ResolverTypeWrapper<Notifications>;
  notifications_aggregate: ResolverTypeWrapper<Notifications_Aggregate>;
  notifications_aggregate_fields: ResolverTypeWrapper<Notifications_Aggregate_Fields>;
  notifications_aggregate_order_by: Notifications_Aggregate_Order_By;
  notifications_arr_rel_insert_input: Notifications_Arr_Rel_Insert_Input;
  notifications_bool_exp: Notifications_Bool_Exp;
  notifications_constraint: Notifications_Constraint;
  notifications_insert_input: Notifications_Insert_Input;
  notifications_max_fields: ResolverTypeWrapper<Notifications_Max_Fields>;
  notifications_max_order_by: Notifications_Max_Order_By;
  notifications_min_fields: ResolverTypeWrapper<Notifications_Min_Fields>;
  notifications_min_order_by: Notifications_Min_Order_By;
  notifications_mutation_response: ResolverTypeWrapper<Notifications_Mutation_Response>;
  notifications_on_conflict: Notifications_On_Conflict;
  notifications_order_by: Notifications_Order_By;
  notifications_pk_columns_input: Notifications_Pk_Columns_Input;
  notifications_select_column: Notifications_Select_Column;
  notifications_set_input: Notifications_Set_Input;
  notifications_update_column: Notifications_Update_Column;
  order_by: Order_By;
  query_root: ResolverTypeWrapper<{}>;
  smallint: ResolverTypeWrapper<Scalars['smallint']>;
  smallint_comparison_exp: Smallint_Comparison_Exp;
  subscription_root: ResolverTypeWrapper<{}>;
  thing_images: ResolverTypeWrapper<Thing_Images>;
  thing_images_aggregate: ResolverTypeWrapper<Thing_Images_Aggregate>;
  thing_images_aggregate_fields: ResolverTypeWrapper<Thing_Images_Aggregate_Fields>;
  thing_images_aggregate_order_by: Thing_Images_Aggregate_Order_By;
  thing_images_arr_rel_insert_input: Thing_Images_Arr_Rel_Insert_Input;
  thing_images_avg_fields: ResolverTypeWrapper<Thing_Images_Avg_Fields>;
  thing_images_avg_order_by: Thing_Images_Avg_Order_By;
  thing_images_bool_exp: Thing_Images_Bool_Exp;
  thing_images_constraint: Thing_Images_Constraint;
  thing_images_inc_input: Thing_Images_Inc_Input;
  thing_images_insert_input: Thing_Images_Insert_Input;
  thing_images_max_fields: ResolverTypeWrapper<Thing_Images_Max_Fields>;
  thing_images_max_order_by: Thing_Images_Max_Order_By;
  thing_images_min_fields: ResolverTypeWrapper<Thing_Images_Min_Fields>;
  thing_images_min_order_by: Thing_Images_Min_Order_By;
  thing_images_mutation_response: ResolverTypeWrapper<Thing_Images_Mutation_Response>;
  thing_images_obj_rel_insert_input: Thing_Images_Obj_Rel_Insert_Input;
  thing_images_on_conflict: Thing_Images_On_Conflict;
  thing_images_order_by: Thing_Images_Order_By;
  thing_images_pk_columns_input: Thing_Images_Pk_Columns_Input;
  thing_images_select_column: Thing_Images_Select_Column;
  thing_images_set_input: Thing_Images_Set_Input;
  thing_images_stddev_fields: ResolverTypeWrapper<Thing_Images_Stddev_Fields>;
  thing_images_stddev_order_by: Thing_Images_Stddev_Order_By;
  thing_images_stddev_pop_fields: ResolverTypeWrapper<Thing_Images_Stddev_Pop_Fields>;
  thing_images_stddev_pop_order_by: Thing_Images_Stddev_Pop_Order_By;
  thing_images_stddev_samp_fields: ResolverTypeWrapper<Thing_Images_Stddev_Samp_Fields>;
  thing_images_stddev_samp_order_by: Thing_Images_Stddev_Samp_Order_By;
  thing_images_sum_fields: ResolverTypeWrapper<Thing_Images_Sum_Fields>;
  thing_images_sum_order_by: Thing_Images_Sum_Order_By;
  thing_images_update_column: Thing_Images_Update_Column;
  thing_images_var_pop_fields: ResolverTypeWrapper<Thing_Images_Var_Pop_Fields>;
  thing_images_var_pop_order_by: Thing_Images_Var_Pop_Order_By;
  thing_images_var_samp_fields: ResolverTypeWrapper<Thing_Images_Var_Samp_Fields>;
  thing_images_var_samp_order_by: Thing_Images_Var_Samp_Order_By;
  thing_images_variance_fields: ResolverTypeWrapper<Thing_Images_Variance_Fields>;
  thing_images_variance_order_by: Thing_Images_Variance_Order_By;
  thing_type: ResolverTypeWrapper<Thing_Type>;
  thing_type_aggregate: ResolverTypeWrapper<Thing_Type_Aggregate>;
  thing_type_aggregate_fields: ResolverTypeWrapper<Thing_Type_Aggregate_Fields>;
  thing_type_bool_exp: Thing_Type_Bool_Exp;
  thing_type_constraint: Thing_Type_Constraint;
  thing_type_enum: Thing_Type_Enum;
  thing_type_enum_comparison_exp: Thing_Type_Enum_Comparison_Exp;
  thing_type_insert_input: Thing_Type_Insert_Input;
  thing_type_max_fields: ResolverTypeWrapper<Thing_Type_Max_Fields>;
  thing_type_min_fields: ResolverTypeWrapper<Thing_Type_Min_Fields>;
  thing_type_mutation_response: ResolverTypeWrapper<Thing_Type_Mutation_Response>;
  thing_type_on_conflict: Thing_Type_On_Conflict;
  thing_type_order_by: Thing_Type_Order_By;
  thing_type_pk_columns_input: Thing_Type_Pk_Columns_Input;
  thing_type_select_column: Thing_Type_Select_Column;
  thing_type_set_input: Thing_Type_Set_Input;
  thing_type_update_column: Thing_Type_Update_Column;
  things: ResolverTypeWrapper<Things>;
  things_aggregate: ResolverTypeWrapper<Things_Aggregate>;
  things_aggregate_fields: ResolverTypeWrapper<Things_Aggregate_Fields>;
  things_aggregate_order_by: Things_Aggregate_Order_By;
  things_arr_rel_insert_input: Things_Arr_Rel_Insert_Input;
  things_bool_exp: Things_Bool_Exp;
  things_constraint: Things_Constraint;
  things_insert_input: Things_Insert_Input;
  things_max_fields: ResolverTypeWrapper<Things_Max_Fields>;
  things_max_order_by: Things_Max_Order_By;
  things_min_fields: ResolverTypeWrapper<Things_Min_Fields>;
  things_min_order_by: Things_Min_Order_By;
  things_mutation_response: ResolverTypeWrapper<Things_Mutation_Response>;
  things_obj_rel_insert_input: Things_Obj_Rel_Insert_Input;
  things_on_conflict: Things_On_Conflict;
  things_order_by: Things_Order_By;
  things_pk_columns_input: Things_Pk_Columns_Input;
  things_select_column: Things_Select_Column;
  things_set_input: Things_Set_Input;
  things_update_column: Things_Update_Column;
  timestamptz: ResolverTypeWrapper<Scalars['timestamptz']>;
  timestamptz_comparison_exp: Timestamptz_Comparison_Exp;
  user_private: ResolverTypeWrapper<User_Private>;
  user_private_aggregate: ResolverTypeWrapper<User_Private_Aggregate>;
  user_private_aggregate_fields: ResolverTypeWrapper<User_Private_Aggregate_Fields>;
  user_private_bool_exp: User_Private_Bool_Exp;
  user_private_insert_input: User_Private_Insert_Input;
  user_private_max_fields: ResolverTypeWrapper<User_Private_Max_Fields>;
  user_private_min_fields: ResolverTypeWrapper<User_Private_Min_Fields>;
  user_private_mutation_response: ResolverTypeWrapper<User_Private_Mutation_Response>;
  user_private_obj_rel_insert_input: User_Private_Obj_Rel_Insert_Input;
  user_private_order_by: User_Private_Order_By;
  user_private_select_column: User_Private_Select_Column;
  user_private_set_input: User_Private_Set_Input;
  users: ResolverTypeWrapper<Users>;
  users_aggregate: ResolverTypeWrapper<Users_Aggregate>;
  users_aggregate_fields: ResolverTypeWrapper<Users_Aggregate_Fields>;
  users_aggregate_order_by: Users_Aggregate_Order_By;
  users_arr_rel_insert_input: Users_Arr_Rel_Insert_Input;
  users_bool_exp: Users_Bool_Exp;
  users_constraint: Users_Constraint;
  users_insert_input: Users_Insert_Input;
  users_max_fields: ResolverTypeWrapper<Users_Max_Fields>;
  users_max_order_by: Users_Max_Order_By;
  users_min_fields: ResolverTypeWrapper<Users_Min_Fields>;
  users_min_order_by: Users_Min_Order_By;
  users_mutation_response: ResolverTypeWrapper<Users_Mutation_Response>;
  users_obj_rel_insert_input: Users_Obj_Rel_Insert_Input;
  users_on_conflict: Users_On_Conflict;
  users_order_by: Users_Order_By;
  users_pk_columns_input: Users_Pk_Columns_Input;
  users_select_column: Users_Select_Column;
  users_set_input: Users_Set_Input;
  users_update_column: Users_Update_Column;
  uuid: ResolverTypeWrapper<Scalars['uuid']>;
  uuid_comparison_exp: Uuid_Comparison_Exp;
  verification_requests: ResolverTypeWrapper<Verification_Requests>;
  verification_requests_aggregate: ResolverTypeWrapper<Verification_Requests_Aggregate>;
  verification_requests_aggregate_fields: ResolverTypeWrapper<Verification_Requests_Aggregate_Fields>;
  verification_requests_avg_fields: ResolverTypeWrapper<Verification_Requests_Avg_Fields>;
  verification_requests_bool_exp: Verification_Requests_Bool_Exp;
  verification_requests_constraint: Verification_Requests_Constraint;
  verification_requests_inc_input: Verification_Requests_Inc_Input;
  verification_requests_insert_input: Verification_Requests_Insert_Input;
  verification_requests_max_fields: ResolverTypeWrapper<Verification_Requests_Max_Fields>;
  verification_requests_min_fields: ResolverTypeWrapper<Verification_Requests_Min_Fields>;
  verification_requests_mutation_response: ResolverTypeWrapper<Verification_Requests_Mutation_Response>;
  verification_requests_on_conflict: Verification_Requests_On_Conflict;
  verification_requests_order_by: Verification_Requests_Order_By;
  verification_requests_pk_columns_input: Verification_Requests_Pk_Columns_Input;
  verification_requests_select_column: Verification_Requests_Select_Column;
  verification_requests_set_input: Verification_Requests_Set_Input;
  verification_requests_stddev_fields: ResolverTypeWrapper<Verification_Requests_Stddev_Fields>;
  verification_requests_stddev_pop_fields: ResolverTypeWrapper<Verification_Requests_Stddev_Pop_Fields>;
  verification_requests_stddev_samp_fields: ResolverTypeWrapper<Verification_Requests_Stddev_Samp_Fields>;
  verification_requests_sum_fields: ResolverTypeWrapper<Verification_Requests_Sum_Fields>;
  verification_requests_update_column: Verification_Requests_Update_Column;
  verification_requests_var_pop_fields: ResolverTypeWrapper<Verification_Requests_Var_Pop_Fields>;
  verification_requests_var_samp_fields: ResolverTypeWrapper<Verification_Requests_Var_Samp_Fields>;
  verification_requests_variance_fields: ResolverTypeWrapper<Verification_Requests_Variance_Fields>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean_comparison_exp: Boolean_Comparison_Exp;
  Boolean: Scalars['Boolean'];
  CreateChatGroupInput: CreateChatGroupInput;
  String: Scalars['String'];
  CreateChatGroupResult: CreateChatGroupResult;
  CreateGroupInput: CreateGroupInput;
  CreateGroupResult: CreateGroupResult;
  CreateJoinTokenInput: CreateJoinTokenInput;
  CreateJoinTokenResult: CreateJoinTokenResult;
  CredentialsInput: CredentialsInput;
  DeleteThingInput: DeleteThingInput;
  DeleteThingOutput: DeleteThingOutput;
  HandleJoinRequestInput: HandleJoinRequestInput;
  HandleJoinRequestResult: HandleJoinRequestResult;
  Int_comparison_exp: Int_Comparison_Exp;
  Int: Scalars['Int'];
  JoinGroupInput: JoinGroupInput;
  JoinGroupResult: JoinGroupResult;
  RegistrationResult: RegistrationResult;
  RequestJoinGroupInput: RequestJoinGroupInput;
  RequestJoinGroupResult: RequestJoinGroupResult;
  String_comparison_exp: String_Comparison_Exp;
  UpdateGroupThing: UpdateGroupThing;
  UpdateThingImage: UpdateThingImage;
  UpdateThingInput: UpdateThingInput;
  UpdateThingResult: UpdateThingResult;
  activities: Activities;
  activities_aggregate: Activities_Aggregate;
  activities_aggregate_fields: Activities_Aggregate_Fields;
  activities_aggregate_order_by: Activities_Aggregate_Order_By;
  activities_arr_rel_insert_input: Activities_Arr_Rel_Insert_Input;
  activities_bool_exp: Activities_Bool_Exp;
  activities_insert_input: Activities_Insert_Input;
  activities_max_fields: Activities_Max_Fields;
  activities_max_order_by: Activities_Max_Order_By;
  activities_min_fields: Activities_Min_Fields;
  activities_min_order_by: Activities_Min_Order_By;
  activities_mutation_response: Activities_Mutation_Response;
  activities_obj_rel_insert_input: Activities_Obj_Rel_Insert_Input;
  activities_on_conflict: Activities_On_Conflict;
  activities_order_by: Activities_Order_By;
  activities_pk_columns_input: Activities_Pk_Columns_Input;
  activities_set_input: Activities_Set_Input;
  activity_verb: Activity_Verb;
  activity_verb_aggregate: Activity_Verb_Aggregate;
  activity_verb_aggregate_fields: Activity_Verb_Aggregate_Fields;
  activity_verb_bool_exp: Activity_Verb_Bool_Exp;
  activity_verb_enum_comparison_exp: Activity_Verb_Enum_Comparison_Exp;
  activity_verb_insert_input: Activity_Verb_Insert_Input;
  activity_verb_max_fields: Activity_Verb_Max_Fields;
  activity_verb_min_fields: Activity_Verb_Min_Fields;
  activity_verb_mutation_response: Activity_Verb_Mutation_Response;
  activity_verb_on_conflict: Activity_Verb_On_Conflict;
  activity_verb_order_by: Activity_Verb_Order_By;
  activity_verb_pk_columns_input: Activity_Verb_Pk_Columns_Input;
  activity_verb_set_input: Activity_Verb_Set_Input;
  chat_group_members: Chat_Group_Members;
  chat_group_members_aggregate: Chat_Group_Members_Aggregate;
  chat_group_members_aggregate_fields: Chat_Group_Members_Aggregate_Fields;
  chat_group_members_aggregate_order_by: Chat_Group_Members_Aggregate_Order_By;
  chat_group_members_arr_rel_insert_input: Chat_Group_Members_Arr_Rel_Insert_Input;
  chat_group_members_bool_exp: Chat_Group_Members_Bool_Exp;
  chat_group_members_insert_input: Chat_Group_Members_Insert_Input;
  chat_group_members_max_fields: Chat_Group_Members_Max_Fields;
  chat_group_members_max_order_by: Chat_Group_Members_Max_Order_By;
  chat_group_members_min_fields: Chat_Group_Members_Min_Fields;
  chat_group_members_min_order_by: Chat_Group_Members_Min_Order_By;
  chat_group_members_mutation_response: Chat_Group_Members_Mutation_Response;
  chat_group_members_on_conflict: Chat_Group_Members_On_Conflict;
  chat_group_members_order_by: Chat_Group_Members_Order_By;
  chat_group_members_pk_columns_input: Chat_Group_Members_Pk_Columns_Input;
  chat_group_members_set_input: Chat_Group_Members_Set_Input;
  chat_groups: Chat_Groups;
  chat_groups_aggregate: Chat_Groups_Aggregate;
  chat_groups_aggregate_fields: Chat_Groups_Aggregate_Fields;
  chat_groups_bool_exp: Chat_Groups_Bool_Exp;
  chat_groups_insert_input: Chat_Groups_Insert_Input;
  chat_groups_max_fields: Chat_Groups_Max_Fields;
  chat_groups_min_fields: Chat_Groups_Min_Fields;
  chat_groups_mutation_response: Chat_Groups_Mutation_Response;
  chat_groups_obj_rel_insert_input: Chat_Groups_Obj_Rel_Insert_Input;
  chat_groups_on_conflict: Chat_Groups_On_Conflict;
  chat_groups_order_by: Chat_Groups_Order_By;
  chat_groups_pk_columns_input: Chat_Groups_Pk_Columns_Input;
  chat_groups_set_input: Chat_Groups_Set_Input;
  chat_messages: Chat_Messages;
  chat_messages_aggregate: Chat_Messages_Aggregate;
  chat_messages_aggregate_fields: Chat_Messages_Aggregate_Fields;
  chat_messages_aggregate_order_by: Chat_Messages_Aggregate_Order_By;
  chat_messages_arr_rel_insert_input: Chat_Messages_Arr_Rel_Insert_Input;
  chat_messages_bool_exp: Chat_Messages_Bool_Exp;
  chat_messages_insert_input: Chat_Messages_Insert_Input;
  chat_messages_max_fields: Chat_Messages_Max_Fields;
  chat_messages_max_order_by: Chat_Messages_Max_Order_By;
  chat_messages_min_fields: Chat_Messages_Min_Fields;
  chat_messages_min_order_by: Chat_Messages_Min_Order_By;
  chat_messages_mutation_response: Chat_Messages_Mutation_Response;
  chat_messages_on_conflict: Chat_Messages_On_Conflict;
  chat_messages_order_by: Chat_Messages_Order_By;
  chat_messages_pk_columns_input: Chat_Messages_Pk_Columns_Input;
  chat_messages_set_input: Chat_Messages_Set_Input;
  comments: Comments;
  comments_aggregate: Comments_Aggregate;
  comments_aggregate_fields: Comments_Aggregate_Fields;
  comments_aggregate_order_by: Comments_Aggregate_Order_By;
  comments_arr_rel_insert_input: Comments_Arr_Rel_Insert_Input;
  comments_bool_exp: Comments_Bool_Exp;
  comments_insert_input: Comments_Insert_Input;
  comments_max_fields: Comments_Max_Fields;
  comments_max_order_by: Comments_Max_Order_By;
  comments_min_fields: Comments_Min_Fields;
  comments_min_order_by: Comments_Min_Order_By;
  comments_mutation_response: Comments_Mutation_Response;
  comments_obj_rel_insert_input: Comments_Obj_Rel_Insert_Input;
  comments_on_conflict: Comments_On_Conflict;
  comments_order_by: Comments_Order_By;
  comments_pk_columns_input: Comments_Pk_Columns_Input;
  comments_set_input: Comments_Set_Input;
  date: Scalars['date'];
  date_comparison_exp: Date_Comparison_Exp;
  entities: Entities;
  entities_aggregate: Entities_Aggregate;
  entities_aggregate_fields: Entities_Aggregate_Fields;
  entities_avg_fields: Entities_Avg_Fields;
  Float: Scalars['Float'];
  entities_bool_exp: Entities_Bool_Exp;
  entities_inc_input: Entities_Inc_Input;
  entities_insert_input: Entities_Insert_Input;
  entities_max_fields: Entities_Max_Fields;
  entities_min_fields: Entities_Min_Fields;
  entities_mutation_response: Entities_Mutation_Response;
  entities_obj_rel_insert_input: Entities_Obj_Rel_Insert_Input;
  entities_on_conflict: Entities_On_Conflict;
  entities_order_by: Entities_Order_By;
  entities_pk_columns_input: Entities_Pk_Columns_Input;
  entities_set_input: Entities_Set_Input;
  entities_stddev_fields: Entities_Stddev_Fields;
  entities_stddev_pop_fields: Entities_Stddev_Pop_Fields;
  entities_stddev_samp_fields: Entities_Stddev_Samp_Fields;
  entities_sum_fields: Entities_Sum_Fields;
  entities_var_pop_fields: Entities_Var_Pop_Fields;
  entities_var_samp_fields: Entities_Var_Samp_Fields;
  entities_variance_fields: Entities_Variance_Fields;
  file_uploads: File_Uploads;
  file_uploads_aggregate: File_Uploads_Aggregate;
  file_uploads_aggregate_fields: File_Uploads_Aggregate_Fields;
  file_uploads_avg_fields: File_Uploads_Avg_Fields;
  file_uploads_bool_exp: File_Uploads_Bool_Exp;
  file_uploads_inc_input: File_Uploads_Inc_Input;
  file_uploads_insert_input: File_Uploads_Insert_Input;
  file_uploads_max_fields: File_Uploads_Max_Fields;
  file_uploads_min_fields: File_Uploads_Min_Fields;
  file_uploads_mutation_response: File_Uploads_Mutation_Response;
  file_uploads_obj_rel_insert_input: File_Uploads_Obj_Rel_Insert_Input;
  file_uploads_on_conflict: File_Uploads_On_Conflict;
  file_uploads_order_by: File_Uploads_Order_By;
  file_uploads_pk_columns_input: File_Uploads_Pk_Columns_Input;
  file_uploads_set_input: File_Uploads_Set_Input;
  file_uploads_stddev_fields: File_Uploads_Stddev_Fields;
  file_uploads_stddev_pop_fields: File_Uploads_Stddev_Pop_Fields;
  file_uploads_stddev_samp_fields: File_Uploads_Stddev_Samp_Fields;
  file_uploads_sum_fields: File_Uploads_Sum_Fields;
  file_uploads_var_pop_fields: File_Uploads_Var_Pop_Fields;
  file_uploads_var_samp_fields: File_Uploads_Var_Samp_Fields;
  file_uploads_variance_fields: File_Uploads_Variance_Fields;
  group_join_request_status: Group_Join_Request_Status;
  group_join_request_status_aggregate: Group_Join_Request_Status_Aggregate;
  group_join_request_status_aggregate_fields: Group_Join_Request_Status_Aggregate_Fields;
  group_join_request_status_bool_exp: Group_Join_Request_Status_Bool_Exp;
  group_join_request_status_enum_comparison_exp: Group_Join_Request_Status_Enum_Comparison_Exp;
  group_join_request_status_insert_input: Group_Join_Request_Status_Insert_Input;
  group_join_request_status_max_fields: Group_Join_Request_Status_Max_Fields;
  group_join_request_status_min_fields: Group_Join_Request_Status_Min_Fields;
  group_join_request_status_mutation_response: Group_Join_Request_Status_Mutation_Response;
  group_join_request_status_on_conflict: Group_Join_Request_Status_On_Conflict;
  group_join_request_status_order_by: Group_Join_Request_Status_Order_By;
  group_join_request_status_pk_columns_input: Group_Join_Request_Status_Pk_Columns_Input;
  group_join_request_status_set_input: Group_Join_Request_Status_Set_Input;
  group_join_requests: Group_Join_Requests;
  group_join_requests_aggregate: Group_Join_Requests_Aggregate;
  group_join_requests_aggregate_fields: Group_Join_Requests_Aggregate_Fields;
  group_join_requests_aggregate_order_by: Group_Join_Requests_Aggregate_Order_By;
  group_join_requests_arr_rel_insert_input: Group_Join_Requests_Arr_Rel_Insert_Input;
  group_join_requests_bool_exp: Group_Join_Requests_Bool_Exp;
  group_join_requests_insert_input: Group_Join_Requests_Insert_Input;
  group_join_requests_max_fields: Group_Join_Requests_Max_Fields;
  group_join_requests_max_order_by: Group_Join_Requests_Max_Order_By;
  group_join_requests_min_fields: Group_Join_Requests_Min_Fields;
  group_join_requests_min_order_by: Group_Join_Requests_Min_Order_By;
  group_join_requests_mutation_response: Group_Join_Requests_Mutation_Response;
  group_join_requests_obj_rel_insert_input: Group_Join_Requests_Obj_Rel_Insert_Input;
  group_join_requests_on_conflict: Group_Join_Requests_On_Conflict;
  group_join_requests_order_by: Group_Join_Requests_Order_By;
  group_join_requests_pk_columns_input: Group_Join_Requests_Pk_Columns_Input;
  group_join_requests_set_input: Group_Join_Requests_Set_Input;
  group_join_tokens: Group_Join_Tokens;
  group_join_tokens_aggregate: Group_Join_Tokens_Aggregate;
  group_join_tokens_aggregate_fields: Group_Join_Tokens_Aggregate_Fields;
  group_join_tokens_aggregate_order_by: Group_Join_Tokens_Aggregate_Order_By;
  group_join_tokens_arr_rel_insert_input: Group_Join_Tokens_Arr_Rel_Insert_Input;
  group_join_tokens_bool_exp: Group_Join_Tokens_Bool_Exp;
  group_join_tokens_insert_input: Group_Join_Tokens_Insert_Input;
  group_join_tokens_max_fields: Group_Join_Tokens_Max_Fields;
  group_join_tokens_max_order_by: Group_Join_Tokens_Max_Order_By;
  group_join_tokens_min_fields: Group_Join_Tokens_Min_Fields;
  group_join_tokens_min_order_by: Group_Join_Tokens_Min_Order_By;
  group_join_tokens_mutation_response: Group_Join_Tokens_Mutation_Response;
  group_join_tokens_on_conflict: Group_Join_Tokens_On_Conflict;
  group_join_tokens_order_by: Group_Join_Tokens_Order_By;
  group_join_tokens_pk_columns_input: Group_Join_Tokens_Pk_Columns_Input;
  group_join_tokens_set_input: Group_Join_Tokens_Set_Input;
  group_members: Group_Members;
  group_members_aggregate: Group_Members_Aggregate;
  group_members_aggregate_fields: Group_Members_Aggregate_Fields;
  group_members_aggregate_order_by: Group_Members_Aggregate_Order_By;
  group_members_arr_rel_insert_input: Group_Members_Arr_Rel_Insert_Input;
  group_members_bool_exp: Group_Members_Bool_Exp;
  group_members_insert_input: Group_Members_Insert_Input;
  group_members_max_fields: Group_Members_Max_Fields;
  group_members_max_order_by: Group_Members_Max_Order_By;
  group_members_min_fields: Group_Members_Min_Fields;
  group_members_min_order_by: Group_Members_Min_Order_By;
  group_members_mutation_response: Group_Members_Mutation_Response;
  group_members_obj_rel_insert_input: Group_Members_Obj_Rel_Insert_Input;
  group_members_on_conflict: Group_Members_On_Conflict;
  group_members_order_by: Group_Members_Order_By;
  group_members_pk_columns_input: Group_Members_Pk_Columns_Input;
  group_members_set_input: Group_Members_Set_Input;
  group_post_comment: Group_Post_Comment;
  group_post_comment_aggregate: Group_Post_Comment_Aggregate;
  group_post_comment_aggregate_fields: Group_Post_Comment_Aggregate_Fields;
  group_post_comment_aggregate_order_by: Group_Post_Comment_Aggregate_Order_By;
  group_post_comment_arr_rel_insert_input: Group_Post_Comment_Arr_Rel_Insert_Input;
  group_post_comment_bool_exp: Group_Post_Comment_Bool_Exp;
  group_post_comment_insert_input: Group_Post_Comment_Insert_Input;
  group_post_comment_max_fields: Group_Post_Comment_Max_Fields;
  group_post_comment_max_order_by: Group_Post_Comment_Max_Order_By;
  group_post_comment_min_fields: Group_Post_Comment_Min_Fields;
  group_post_comment_min_order_by: Group_Post_Comment_Min_Order_By;
  group_post_comment_mutation_response: Group_Post_Comment_Mutation_Response;
  group_post_comment_obj_rel_insert_input: Group_Post_Comment_Obj_Rel_Insert_Input;
  group_post_comment_on_conflict: Group_Post_Comment_On_Conflict;
  group_post_comment_order_by: Group_Post_Comment_Order_By;
  group_post_comment_pk_columns_input: Group_Post_Comment_Pk_Columns_Input;
  group_post_comment_set_input: Group_Post_Comment_Set_Input;
  group_post_type: Group_Post_Type;
  group_post_type_aggregate: Group_Post_Type_Aggregate;
  group_post_type_aggregate_fields: Group_Post_Type_Aggregate_Fields;
  group_post_type_bool_exp: Group_Post_Type_Bool_Exp;
  group_post_type_enum_comparison_exp: Group_Post_Type_Enum_Comparison_Exp;
  group_post_type_insert_input: Group_Post_Type_Insert_Input;
  group_post_type_max_fields: Group_Post_Type_Max_Fields;
  group_post_type_min_fields: Group_Post_Type_Min_Fields;
  group_post_type_mutation_response: Group_Post_Type_Mutation_Response;
  group_post_type_on_conflict: Group_Post_Type_On_Conflict;
  group_post_type_order_by: Group_Post_Type_Order_By;
  group_post_type_pk_columns_input: Group_Post_Type_Pk_Columns_Input;
  group_post_type_set_input: Group_Post_Type_Set_Input;
  group_posts: Group_Posts;
  group_posts_aggregate: Group_Posts_Aggregate;
  group_posts_aggregate_fields: Group_Posts_Aggregate_Fields;
  group_posts_aggregate_order_by: Group_Posts_Aggregate_Order_By;
  group_posts_arr_rel_insert_input: Group_Posts_Arr_Rel_Insert_Input;
  group_posts_bool_exp: Group_Posts_Bool_Exp;
  group_posts_insert_input: Group_Posts_Insert_Input;
  group_posts_max_fields: Group_Posts_Max_Fields;
  group_posts_max_order_by: Group_Posts_Max_Order_By;
  group_posts_min_fields: Group_Posts_Min_Fields;
  group_posts_min_order_by: Group_Posts_Min_Order_By;
  group_posts_mutation_response: Group_Posts_Mutation_Response;
  group_posts_obj_rel_insert_input: Group_Posts_Obj_Rel_Insert_Input;
  group_posts_on_conflict: Group_Posts_On_Conflict;
  group_posts_order_by: Group_Posts_Order_By;
  group_posts_pk_columns_input: Group_Posts_Pk_Columns_Input;
  group_posts_set_input: Group_Posts_Set_Input;
  group_role: Group_Role;
  group_role_aggregate: Group_Role_Aggregate;
  group_role_aggregate_fields: Group_Role_Aggregate_Fields;
  group_role_bool_exp: Group_Role_Bool_Exp;
  group_role_enum_comparison_exp: Group_Role_Enum_Comparison_Exp;
  group_role_insert_input: Group_Role_Insert_Input;
  group_role_max_fields: Group_Role_Max_Fields;
  group_role_min_fields: Group_Role_Min_Fields;
  group_role_mutation_response: Group_Role_Mutation_Response;
  group_role_on_conflict: Group_Role_On_Conflict;
  group_role_order_by: Group_Role_Order_By;
  group_role_pk_columns_input: Group_Role_Pk_Columns_Input;
  group_role_set_input: Group_Role_Set_Input;
  group_thing: Group_Thing;
  group_thing_aggregate: Group_Thing_Aggregate;
  group_thing_aggregate_fields: Group_Thing_Aggregate_Fields;
  group_thing_aggregate_order_by: Group_Thing_Aggregate_Order_By;
  group_thing_arr_rel_insert_input: Group_Thing_Arr_Rel_Insert_Input;
  group_thing_bool_exp: Group_Thing_Bool_Exp;
  group_thing_insert_input: Group_Thing_Insert_Input;
  group_thing_max_fields: Group_Thing_Max_Fields;
  group_thing_max_order_by: Group_Thing_Max_Order_By;
  group_thing_min_fields: Group_Thing_Min_Fields;
  group_thing_min_order_by: Group_Thing_Min_Order_By;
  group_thing_mutation_response: Group_Thing_Mutation_Response;
  group_thing_obj_rel_insert_input: Group_Thing_Obj_Rel_Insert_Input;
  group_thing_on_conflict: Group_Thing_On_Conflict;
  group_thing_order_by: Group_Thing_Order_By;
  group_thing_pk_columns_input: Group_Thing_Pk_Columns_Input;
  group_thing_set_input: Group_Thing_Set_Input;
  groups: Groups;
  groups_aggregate: Groups_Aggregate;
  groups_aggregate_fields: Groups_Aggregate_Fields;
  groups_bool_exp: Groups_Bool_Exp;
  groups_insert_input: Groups_Insert_Input;
  groups_max_fields: Groups_Max_Fields;
  groups_min_fields: Groups_Min_Fields;
  groups_mutation_response: Groups_Mutation_Response;
  groups_obj_rel_insert_input: Groups_Obj_Rel_Insert_Input;
  groups_on_conflict: Groups_On_Conflict;
  groups_order_by: Groups_Order_By;
  groups_pk_columns_input: Groups_Pk_Columns_Input;
  groups_set_input: Groups_Set_Input;
  mutation_root: {};
  notifications: Notifications;
  notifications_aggregate: Notifications_Aggregate;
  notifications_aggregate_fields: Notifications_Aggregate_Fields;
  notifications_aggregate_order_by: Notifications_Aggregate_Order_By;
  notifications_arr_rel_insert_input: Notifications_Arr_Rel_Insert_Input;
  notifications_bool_exp: Notifications_Bool_Exp;
  notifications_insert_input: Notifications_Insert_Input;
  notifications_max_fields: Notifications_Max_Fields;
  notifications_max_order_by: Notifications_Max_Order_By;
  notifications_min_fields: Notifications_Min_Fields;
  notifications_min_order_by: Notifications_Min_Order_By;
  notifications_mutation_response: Notifications_Mutation_Response;
  notifications_on_conflict: Notifications_On_Conflict;
  notifications_order_by: Notifications_Order_By;
  notifications_pk_columns_input: Notifications_Pk_Columns_Input;
  notifications_set_input: Notifications_Set_Input;
  query_root: {};
  smallint: Scalars['smallint'];
  smallint_comparison_exp: Smallint_Comparison_Exp;
  subscription_root: {};
  thing_images: Thing_Images;
  thing_images_aggregate: Thing_Images_Aggregate;
  thing_images_aggregate_fields: Thing_Images_Aggregate_Fields;
  thing_images_aggregate_order_by: Thing_Images_Aggregate_Order_By;
  thing_images_arr_rel_insert_input: Thing_Images_Arr_Rel_Insert_Input;
  thing_images_avg_fields: Thing_Images_Avg_Fields;
  thing_images_avg_order_by: Thing_Images_Avg_Order_By;
  thing_images_bool_exp: Thing_Images_Bool_Exp;
  thing_images_inc_input: Thing_Images_Inc_Input;
  thing_images_insert_input: Thing_Images_Insert_Input;
  thing_images_max_fields: Thing_Images_Max_Fields;
  thing_images_max_order_by: Thing_Images_Max_Order_By;
  thing_images_min_fields: Thing_Images_Min_Fields;
  thing_images_min_order_by: Thing_Images_Min_Order_By;
  thing_images_mutation_response: Thing_Images_Mutation_Response;
  thing_images_obj_rel_insert_input: Thing_Images_Obj_Rel_Insert_Input;
  thing_images_on_conflict: Thing_Images_On_Conflict;
  thing_images_order_by: Thing_Images_Order_By;
  thing_images_pk_columns_input: Thing_Images_Pk_Columns_Input;
  thing_images_set_input: Thing_Images_Set_Input;
  thing_images_stddev_fields: Thing_Images_Stddev_Fields;
  thing_images_stddev_order_by: Thing_Images_Stddev_Order_By;
  thing_images_stddev_pop_fields: Thing_Images_Stddev_Pop_Fields;
  thing_images_stddev_pop_order_by: Thing_Images_Stddev_Pop_Order_By;
  thing_images_stddev_samp_fields: Thing_Images_Stddev_Samp_Fields;
  thing_images_stddev_samp_order_by: Thing_Images_Stddev_Samp_Order_By;
  thing_images_sum_fields: Thing_Images_Sum_Fields;
  thing_images_sum_order_by: Thing_Images_Sum_Order_By;
  thing_images_var_pop_fields: Thing_Images_Var_Pop_Fields;
  thing_images_var_pop_order_by: Thing_Images_Var_Pop_Order_By;
  thing_images_var_samp_fields: Thing_Images_Var_Samp_Fields;
  thing_images_var_samp_order_by: Thing_Images_Var_Samp_Order_By;
  thing_images_variance_fields: Thing_Images_Variance_Fields;
  thing_images_variance_order_by: Thing_Images_Variance_Order_By;
  thing_type: Thing_Type;
  thing_type_aggregate: Thing_Type_Aggregate;
  thing_type_aggregate_fields: Thing_Type_Aggregate_Fields;
  thing_type_bool_exp: Thing_Type_Bool_Exp;
  thing_type_enum_comparison_exp: Thing_Type_Enum_Comparison_Exp;
  thing_type_insert_input: Thing_Type_Insert_Input;
  thing_type_max_fields: Thing_Type_Max_Fields;
  thing_type_min_fields: Thing_Type_Min_Fields;
  thing_type_mutation_response: Thing_Type_Mutation_Response;
  thing_type_on_conflict: Thing_Type_On_Conflict;
  thing_type_order_by: Thing_Type_Order_By;
  thing_type_pk_columns_input: Thing_Type_Pk_Columns_Input;
  thing_type_set_input: Thing_Type_Set_Input;
  things: Things;
  things_aggregate: Things_Aggregate;
  things_aggregate_fields: Things_Aggregate_Fields;
  things_aggregate_order_by: Things_Aggregate_Order_By;
  things_arr_rel_insert_input: Things_Arr_Rel_Insert_Input;
  things_bool_exp: Things_Bool_Exp;
  things_insert_input: Things_Insert_Input;
  things_max_fields: Things_Max_Fields;
  things_max_order_by: Things_Max_Order_By;
  things_min_fields: Things_Min_Fields;
  things_min_order_by: Things_Min_Order_By;
  things_mutation_response: Things_Mutation_Response;
  things_obj_rel_insert_input: Things_Obj_Rel_Insert_Input;
  things_on_conflict: Things_On_Conflict;
  things_order_by: Things_Order_By;
  things_pk_columns_input: Things_Pk_Columns_Input;
  things_set_input: Things_Set_Input;
  timestamptz: Scalars['timestamptz'];
  timestamptz_comparison_exp: Timestamptz_Comparison_Exp;
  user_private: User_Private;
  user_private_aggregate: User_Private_Aggregate;
  user_private_aggregate_fields: User_Private_Aggregate_Fields;
  user_private_bool_exp: User_Private_Bool_Exp;
  user_private_insert_input: User_Private_Insert_Input;
  user_private_max_fields: User_Private_Max_Fields;
  user_private_min_fields: User_Private_Min_Fields;
  user_private_mutation_response: User_Private_Mutation_Response;
  user_private_obj_rel_insert_input: User_Private_Obj_Rel_Insert_Input;
  user_private_order_by: User_Private_Order_By;
  user_private_set_input: User_Private_Set_Input;
  users: Users;
  users_aggregate: Users_Aggregate;
  users_aggregate_fields: Users_Aggregate_Fields;
  users_aggregate_order_by: Users_Aggregate_Order_By;
  users_arr_rel_insert_input: Users_Arr_Rel_Insert_Input;
  users_bool_exp: Users_Bool_Exp;
  users_insert_input: Users_Insert_Input;
  users_max_fields: Users_Max_Fields;
  users_max_order_by: Users_Max_Order_By;
  users_min_fields: Users_Min_Fields;
  users_min_order_by: Users_Min_Order_By;
  users_mutation_response: Users_Mutation_Response;
  users_obj_rel_insert_input: Users_Obj_Rel_Insert_Input;
  users_on_conflict: Users_On_Conflict;
  users_order_by: Users_Order_By;
  users_pk_columns_input: Users_Pk_Columns_Input;
  users_set_input: Users_Set_Input;
  uuid: Scalars['uuid'];
  uuid_comparison_exp: Uuid_Comparison_Exp;
  verification_requests: Verification_Requests;
  verification_requests_aggregate: Verification_Requests_Aggregate;
  verification_requests_aggregate_fields: Verification_Requests_Aggregate_Fields;
  verification_requests_avg_fields: Verification_Requests_Avg_Fields;
  verification_requests_bool_exp: Verification_Requests_Bool_Exp;
  verification_requests_inc_input: Verification_Requests_Inc_Input;
  verification_requests_insert_input: Verification_Requests_Insert_Input;
  verification_requests_max_fields: Verification_Requests_Max_Fields;
  verification_requests_min_fields: Verification_Requests_Min_Fields;
  verification_requests_mutation_response: Verification_Requests_Mutation_Response;
  verification_requests_on_conflict: Verification_Requests_On_Conflict;
  verification_requests_order_by: Verification_Requests_Order_By;
  verification_requests_pk_columns_input: Verification_Requests_Pk_Columns_Input;
  verification_requests_set_input: Verification_Requests_Set_Input;
  verification_requests_stddev_fields: Verification_Requests_Stddev_Fields;
  verification_requests_stddev_pop_fields: Verification_Requests_Stddev_Pop_Fields;
  verification_requests_stddev_samp_fields: Verification_Requests_Stddev_Samp_Fields;
  verification_requests_sum_fields: Verification_Requests_Sum_Fields;
  verification_requests_var_pop_fields: Verification_Requests_Var_Pop_Fields;
  verification_requests_var_samp_fields: Verification_Requests_Var_Samp_Fields;
  verification_requests_variance_fields: Verification_Requests_Variance_Fields;
};

export type CachedDirectiveArgs = {   ttl?: Scalars['Int'];
  refresh?: Scalars['Boolean']; };

export type CachedDirectiveResolver<Result, Parent, ContextType = any, Args = CachedDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type CreateChatGroupResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateChatGroupResult'] = ResolversParentTypes['CreateChatGroupResult']> = {
  chat_group?: Resolver<ResolversTypes['chat_groups'], ParentType, ContextType>;
  chat_group_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateGroupResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateGroupResult'] = ResolversParentTypes['CreateGroupResult']> = {
  group?: Resolver<ResolversTypes['groups'], ParentType, ContextType>;
  group_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateJoinTokenResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateJoinTokenResult'] = ResolversParentTypes['CreateJoinTokenResult']> = {
  group?: Resolver<ResolversTypes['groups'], ParentType, ContextType>;
  group_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  join_token?: Resolver<ResolversTypes['group_join_tokens'], ParentType, ContextType>;
  join_token_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteThingOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteThingOutput'] = ResolversParentTypes['DeleteThingOutput']> = {
  thing?: Resolver<ResolversTypes['things'], ParentType, ContextType>;
  thing_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HandleJoinRequestResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['HandleJoinRequestResult'] = ResolversParentTypes['HandleJoinRequestResult']> = {
  join_request?: Resolver<ResolversTypes['group_join_requests'], ParentType, ContextType>;
  join_request_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type JoinGroupResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['JoinGroupResult'] = ResolversParentTypes['JoinGroupResult']> = {
  group?: Resolver<ResolversTypes['groups'], ParentType, ContextType>;
  group_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['users'], ParentType, ContextType>;
  user_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RegistrationResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['RegistrationResult'] = ResolversParentTypes['RegistrationResult']> = {
  user?: Resolver<ResolversTypes['users'], ParentType, ContextType>;
  user_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RequestJoinGroupResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['RequestJoinGroupResult'] = ResolversParentTypes['RequestJoinGroupResult']> = {
  group?: Resolver<ResolversTypes['groups'], ParentType, ContextType>;
  group_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['users'], ParentType, ContextType>;
  user_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateThingResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateThingResult'] = ResolversParentTypes['UpdateThingResult']> = {
  thing?: Resolver<ResolversTypes['things'], ParentType, ContextType>;
  thing_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ActivitiesResolvers<ContextType = any, ParentType extends ResolversParentTypes['activities'] = ResolversParentTypes['activities']> = {
  actor?: Resolver<Maybe<ResolversTypes['users']>, ParentType, ContextType>;
  actor_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  entity?: Resolver<ResolversTypes['entities'], ParentType, ContextType>;
  entity_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  group?: Resolver<Maybe<ResolversTypes['groups']>, ParentType, ContextType>;
  group_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  notifications?: Resolver<Array<ResolversTypes['notifications']>, ParentType, ContextType, RequireFields<ActivitiesNotificationsArgs, never>>;
  notifications_aggregate?: Resolver<ResolversTypes['notifications_aggregate'], ParentType, ContextType, RequireFields<ActivitiesNotifications_AggregateArgs, never>>;
  secondary_entity?: Resolver<Maybe<ResolversTypes['entities']>, ParentType, ContextType>;
  secondary_entity_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  verb?: Resolver<ResolversTypes['activity_verb_enum'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Activities_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['activities_aggregate'] = ResolversParentTypes['activities_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['activities_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['activities']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Activities_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['activities_aggregate_fields'] = ResolversParentTypes['activities_aggregate_fields']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<Activities_Aggregate_FieldsCountArgs, never>>;
  max?: Resolver<Maybe<ResolversTypes['activities_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['activities_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Activities_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['activities_max_fields'] = ResolversParentTypes['activities_max_fields']> = {
  actor_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  entity_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  group_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  secondary_entity_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Activities_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['activities_min_fields'] = ResolversParentTypes['activities_min_fields']> = {
  actor_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  entity_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  group_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  secondary_entity_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Activities_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['activities_mutation_response'] = ResolversParentTypes['activities_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['activities']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Activity_VerbResolvers<ContextType = any, ParentType extends ResolversParentTypes['activity_verb'] = ResolversParentTypes['activity_verb']> = {
  comment?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Activity_Verb_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['activity_verb_aggregate'] = ResolversParentTypes['activity_verb_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['activity_verb_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['activity_verb']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Activity_Verb_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['activity_verb_aggregate_fields'] = ResolversParentTypes['activity_verb_aggregate_fields']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<Activity_Verb_Aggregate_FieldsCountArgs, never>>;
  max?: Resolver<Maybe<ResolversTypes['activity_verb_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['activity_verb_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Activity_Verb_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['activity_verb_max_fields'] = ResolversParentTypes['activity_verb_max_fields']> = {
  comment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Activity_Verb_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['activity_verb_min_fields'] = ResolversParentTypes['activity_verb_min_fields']> = {
  comment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Activity_Verb_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['activity_verb_mutation_response'] = ResolversParentTypes['activity_verb_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['activity_verb']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Chat_Group_MembersResolvers<ContextType = any, ParentType extends ResolversParentTypes['chat_group_members'] = ResolversParentTypes['chat_group_members']> = {
  chat_group?: Resolver<ResolversTypes['chat_groups'], ParentType, ContextType>;
  chat_group_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  last_read?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  user?: Resolver<ResolversTypes['users'], ParentType, ContextType>;
  user_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Chat_Group_Members_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['chat_group_members_aggregate'] = ResolversParentTypes['chat_group_members_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['chat_group_members_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['chat_group_members']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Chat_Group_Members_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['chat_group_members_aggregate_fields'] = ResolversParentTypes['chat_group_members_aggregate_fields']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<Chat_Group_Members_Aggregate_FieldsCountArgs, never>>;
  max?: Resolver<Maybe<ResolversTypes['chat_group_members_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['chat_group_members_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Chat_Group_Members_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['chat_group_members_max_fields'] = ResolversParentTypes['chat_group_members_max_fields']> = {
  chat_group_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  last_read?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Chat_Group_Members_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['chat_group_members_min_fields'] = ResolversParentTypes['chat_group_members_min_fields']> = {
  chat_group_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  last_read?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Chat_Group_Members_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['chat_group_members_mutation_response'] = ResolversParentTypes['chat_group_members_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['chat_group_members']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Chat_GroupsResolvers<ContextType = any, ParentType extends ResolversParentTypes['chat_groups'] = ResolversParentTypes['chat_groups']> = {
  created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  members?: Resolver<Array<ResolversTypes['chat_group_members']>, ParentType, ContextType, RequireFields<Chat_GroupsMembersArgs, never>>;
  members_aggregate?: Resolver<ResolversTypes['chat_group_members_aggregate'], ParentType, ContextType, RequireFields<Chat_GroupsMembers_AggregateArgs, never>>;
  messages?: Resolver<Array<ResolversTypes['chat_messages']>, ParentType, ContextType, RequireFields<Chat_GroupsMessagesArgs, never>>;
  messages_aggregate?: Resolver<ResolversTypes['chat_messages_aggregate'], ParentType, ContextType, RequireFields<Chat_GroupsMessages_AggregateArgs, never>>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Chat_Groups_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['chat_groups_aggregate'] = ResolversParentTypes['chat_groups_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['chat_groups_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['chat_groups']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Chat_Groups_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['chat_groups_aggregate_fields'] = ResolversParentTypes['chat_groups_aggregate_fields']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<Chat_Groups_Aggregate_FieldsCountArgs, never>>;
  max?: Resolver<Maybe<ResolversTypes['chat_groups_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['chat_groups_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Chat_Groups_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['chat_groups_max_fields'] = ResolversParentTypes['chat_groups_max_fields']> = {
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Chat_Groups_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['chat_groups_min_fields'] = ResolversParentTypes['chat_groups_min_fields']> = {
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Chat_Groups_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['chat_groups_mutation_response'] = ResolversParentTypes['chat_groups_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['chat_groups']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Chat_MessagesResolvers<ContextType = any, ParentType extends ResolversParentTypes['chat_messages'] = ResolversParentTypes['chat_messages']> = {
  chat_group?: Resolver<ResolversTypes['chat_groups'], ParentType, ContextType>;
  chat_group_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  entity?: Resolver<Maybe<ResolversTypes['entities']>, ParentType, ContextType>;
  entity_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sender?: Resolver<ResolversTypes['users'], ParentType, ContextType>;
  sender_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Chat_Messages_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['chat_messages_aggregate'] = ResolversParentTypes['chat_messages_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['chat_messages_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['chat_messages']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Chat_Messages_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['chat_messages_aggregate_fields'] = ResolversParentTypes['chat_messages_aggregate_fields']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<Chat_Messages_Aggregate_FieldsCountArgs, never>>;
  max?: Resolver<Maybe<ResolversTypes['chat_messages_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['chat_messages_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Chat_Messages_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['chat_messages_max_fields'] = ResolversParentTypes['chat_messages_max_fields']> = {
  chat_group_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  entity_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sender_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Chat_Messages_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['chat_messages_min_fields'] = ResolversParentTypes['chat_messages_min_fields']> = {
  chat_group_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  entity_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sender_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Chat_Messages_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['chat_messages_mutation_response'] = ResolversParentTypes['chat_messages_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['chat_messages']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommentsResolvers<ContextType = any, ParentType extends ResolversParentTypes['comments'] = ResolversParentTypes['comments']> = {
  author?: Resolver<ResolversTypes['users'], ParentType, ContextType>;
  author_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  group_post_relations?: Resolver<Array<ResolversTypes['group_post_comment']>, ParentType, ContextType, RequireFields<CommentsGroup_Post_RelationsArgs, never>>;
  group_post_relations_aggregate?: Resolver<ResolversTypes['group_post_comment_aggregate'], ParentType, ContextType, RequireFields<CommentsGroup_Post_Relations_AggregateArgs, never>>;
  id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Comments_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['comments_aggregate'] = ResolversParentTypes['comments_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['comments_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['comments']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Comments_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['comments_aggregate_fields'] = ResolversParentTypes['comments_aggregate_fields']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<Comments_Aggregate_FieldsCountArgs, never>>;
  max?: Resolver<Maybe<ResolversTypes['comments_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['comments_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Comments_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['comments_max_fields'] = ResolversParentTypes['comments_max_fields']> = {
  author_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  content?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Comments_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['comments_min_fields'] = ResolversParentTypes['comments_min_fields']> = {
  author_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  content?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Comments_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['comments_mutation_response'] = ResolversParentTypes['comments_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['comments']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['date'], any> {
  name: 'date';
}

export type EntitiesResolvers<ContextType = any, ParentType extends ResolversParentTypes['entities'] = ResolversParentTypes['entities']> = {
  dummy?: Resolver<Maybe<ResolversTypes['smallint']>, ParentType, ContextType>;
  group?: Resolver<Maybe<ResolversTypes['groups']>, ParentType, ContextType>;
  group_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  group_join_request?: Resolver<Maybe<ResolversTypes['group_join_requests']>, ParentType, ContextType>;
  group_member?: Resolver<Maybe<ResolversTypes['group_members']>, ParentType, ContextType>;
  group_member_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  group_post?: Resolver<Maybe<ResolversTypes['group_posts']>, ParentType, ContextType>;
  group_post_comment?: Resolver<Maybe<ResolversTypes['group_post_comment']>, ParentType, ContextType>;
  group_post_comment_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  group_post_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  group_thing?: Resolver<Maybe<ResolversTypes['group_thing']>, ParentType, ContextType>;
  group_thing_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  is_valid?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  join_request_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  thing?: Resolver<Maybe<ResolversTypes['things']>, ParentType, ContextType>;
  thing_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['users']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Entities_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['entities_aggregate'] = ResolversParentTypes['entities_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['entities_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['entities']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Entities_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['entities_aggregate_fields'] = ResolversParentTypes['entities_aggregate_fields']> = {
  avg?: Resolver<Maybe<ResolversTypes['entities_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<Entities_Aggregate_FieldsCountArgs, never>>;
  max?: Resolver<Maybe<ResolversTypes['entities_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['entities_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['entities_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['entities_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['entities_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['entities_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['entities_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['entities_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['entities_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Entities_Avg_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['entities_avg_fields'] = ResolversParentTypes['entities_avg_fields']> = {
  dummy?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Entities_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['entities_max_fields'] = ResolversParentTypes['entities_max_fields']> = {
  dummy?: Resolver<Maybe<ResolversTypes['smallint']>, ParentType, ContextType>;
  group_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  group_member_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  group_post_comment_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  group_post_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  group_thing_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  join_request_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  thing_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Entities_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['entities_min_fields'] = ResolversParentTypes['entities_min_fields']> = {
  dummy?: Resolver<Maybe<ResolversTypes['smallint']>, ParentType, ContextType>;
  group_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  group_member_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  group_post_comment_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  group_post_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  group_thing_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  join_request_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  thing_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Entities_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['entities_mutation_response'] = ResolversParentTypes['entities_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['entities']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Entities_Stddev_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['entities_stddev_fields'] = ResolversParentTypes['entities_stddev_fields']> = {
  dummy?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Entities_Stddev_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['entities_stddev_pop_fields'] = ResolversParentTypes['entities_stddev_pop_fields']> = {
  dummy?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Entities_Stddev_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['entities_stddev_samp_fields'] = ResolversParentTypes['entities_stddev_samp_fields']> = {
  dummy?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Entities_Sum_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['entities_sum_fields'] = ResolversParentTypes['entities_sum_fields']> = {
  dummy?: Resolver<Maybe<ResolversTypes['smallint']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Entities_Var_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['entities_var_pop_fields'] = ResolversParentTypes['entities_var_pop_fields']> = {
  dummy?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Entities_Var_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['entities_var_samp_fields'] = ResolversParentTypes['entities_var_samp_fields']> = {
  dummy?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Entities_Variance_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['entities_variance_fields'] = ResolversParentTypes['entities_variance_fields']> = {
  dummy?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type File_UploadsResolvers<ContextType = any, ParentType extends ResolversParentTypes['file_uploads'] = ResolversParentTypes['file_uploads']> = {
  created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  mime_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  owner?: Resolver<Maybe<ResolversTypes['users']>, ParentType, ContextType>;
  owner_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  size?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  thing_image?: Resolver<Maybe<ResolversTypes['thing_images']>, ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user_profile_pictures?: Resolver<Array<ResolversTypes['users']>, ParentType, ContextType, RequireFields<File_UploadsUser_Profile_PicturesArgs, never>>;
  user_profile_pictures_aggregate?: Resolver<ResolversTypes['users_aggregate'], ParentType, ContextType, RequireFields<File_UploadsUser_Profile_Pictures_AggregateArgs, never>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type File_Uploads_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['file_uploads_aggregate'] = ResolversParentTypes['file_uploads_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['file_uploads_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['file_uploads']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type File_Uploads_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['file_uploads_aggregate_fields'] = ResolversParentTypes['file_uploads_aggregate_fields']> = {
  avg?: Resolver<Maybe<ResolversTypes['file_uploads_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<File_Uploads_Aggregate_FieldsCountArgs, never>>;
  max?: Resolver<Maybe<ResolversTypes['file_uploads_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['file_uploads_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['file_uploads_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['file_uploads_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['file_uploads_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['file_uploads_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['file_uploads_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['file_uploads_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['file_uploads_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type File_Uploads_Avg_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['file_uploads_avg_fields'] = ResolversParentTypes['file_uploads_avg_fields']> = {
  size?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type File_Uploads_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['file_uploads_max_fields'] = ResolversParentTypes['file_uploads_max_fields']> = {
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  mime_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  owner_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  size?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type File_Uploads_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['file_uploads_min_fields'] = ResolversParentTypes['file_uploads_min_fields']> = {
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  mime_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  owner_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  size?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type File_Uploads_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['file_uploads_mutation_response'] = ResolversParentTypes['file_uploads_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['file_uploads']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type File_Uploads_Stddev_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['file_uploads_stddev_fields'] = ResolversParentTypes['file_uploads_stddev_fields']> = {
  size?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type File_Uploads_Stddev_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['file_uploads_stddev_pop_fields'] = ResolversParentTypes['file_uploads_stddev_pop_fields']> = {
  size?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type File_Uploads_Stddev_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['file_uploads_stddev_samp_fields'] = ResolversParentTypes['file_uploads_stddev_samp_fields']> = {
  size?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type File_Uploads_Sum_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['file_uploads_sum_fields'] = ResolversParentTypes['file_uploads_sum_fields']> = {
  size?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type File_Uploads_Var_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['file_uploads_var_pop_fields'] = ResolversParentTypes['file_uploads_var_pop_fields']> = {
  size?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type File_Uploads_Var_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['file_uploads_var_samp_fields'] = ResolversParentTypes['file_uploads_var_samp_fields']> = {
  size?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type File_Uploads_Variance_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['file_uploads_variance_fields'] = ResolversParentTypes['file_uploads_variance_fields']> = {
  size?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Group_Join_Request_StatusResolvers<ContextType = any, ParentType extends ResolversParentTypes['group_join_request_status'] = ResolversParentTypes['group_join_request_status']> = {
  comment?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Group_Join_Request_Status_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['group_join_request_status_aggregate'] = ResolversParentTypes['group_join_request_status_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['group_join_request_status_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['group_join_request_status']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Group_Join_Request_Status_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['group_join_request_status_aggregate_fields'] = ResolversParentTypes['group_join_request_status_aggregate_fields']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<Group_Join_Request_Status_Aggregate_FieldsCountArgs, never>>;
  max?: Resolver<Maybe<ResolversTypes['group_join_request_status_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['group_join_request_status_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Group_Join_Request_Status_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['group_join_request_status_max_fields'] = ResolversParentTypes['group_join_request_status_max_fields']> = {
  comment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Group_Join_Request_Status_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['group_join_request_status_min_fields'] = ResolversParentTypes['group_join_request_status_min_fields']> = {
  comment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Group_Join_Request_Status_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['group_join_request_status_mutation_response'] = ResolversParentTypes['group_join_request_status_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['group_join_request_status']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Group_Join_RequestsResolvers<ContextType = any, ParentType extends ResolversParentTypes['group_join_requests'] = ResolversParentTypes['group_join_requests']> = {
  created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  group?: Resolver<ResolversTypes['groups'], ParentType, ContextType>;
  group_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  responder_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  response?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['group_join_request_status_enum']>, ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['users'], ParentType, ContextType>;
  user_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Group_Join_Requests_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['group_join_requests_aggregate'] = ResolversParentTypes['group_join_requests_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['group_join_requests_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['group_join_requests']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Group_Join_Requests_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['group_join_requests_aggregate_fields'] = ResolversParentTypes['group_join_requests_aggregate_fields']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<Group_Join_Requests_Aggregate_FieldsCountArgs, never>>;
  max?: Resolver<Maybe<ResolversTypes['group_join_requests_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['group_join_requests_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Group_Join_Requests_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['group_join_requests_max_fields'] = ResolversParentTypes['group_join_requests_max_fields']> = {
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  group_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  responder_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  response?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Group_Join_Requests_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['group_join_requests_min_fields'] = ResolversParentTypes['group_join_requests_min_fields']> = {
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  group_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  responder_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  response?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Group_Join_Requests_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['group_join_requests_mutation_response'] = ResolversParentTypes['group_join_requests_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['group_join_requests']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Group_Join_TokensResolvers<ContextType = any, ParentType extends ResolversParentTypes['group_join_tokens'] = ResolversParentTypes['group_join_tokens']> = {
  created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  disabled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  group?: Resolver<ResolversTypes['groups'], ParentType, ContextType>;
  group_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  note?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Group_Join_Tokens_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['group_join_tokens_aggregate'] = ResolversParentTypes['group_join_tokens_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['group_join_tokens_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['group_join_tokens']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Group_Join_Tokens_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['group_join_tokens_aggregate_fields'] = ResolversParentTypes['group_join_tokens_aggregate_fields']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<Group_Join_Tokens_Aggregate_FieldsCountArgs, never>>;
  max?: Resolver<Maybe<ResolversTypes['group_join_tokens_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['group_join_tokens_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Group_Join_Tokens_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['group_join_tokens_max_fields'] = ResolversParentTypes['group_join_tokens_max_fields']> = {
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  group_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  note?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Group_Join_Tokens_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['group_join_tokens_min_fields'] = ResolversParentTypes['group_join_tokens_min_fields']> = {
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  group_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  note?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Group_Join_Tokens_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['group_join_tokens_mutation_response'] = ResolversParentTypes['group_join_tokens_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['group_join_tokens']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Group_MembersResolvers<ContextType = any, ParentType extends ResolversParentTypes['group_members'] = ResolversParentTypes['group_members']> = {
  created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  group?: Resolver<ResolversTypes['groups'], ParentType, ContextType>;
  group_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  role?: Resolver<ResolversTypes['group_role_enum'], ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['users'], ParentType, ContextType>;
  user_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Group_Members_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['group_members_aggregate'] = ResolversParentTypes['group_members_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['group_members_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['group_members']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Group_Members_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['group_members_aggregate_fields'] = ResolversParentTypes['group_members_aggregate_fields']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<Group_Members_Aggregate_FieldsCountArgs, never>>;
  max?: Resolver<Maybe<ResolversTypes['group_members_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['group_members_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Group_Members_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['group_members_max_fields'] = ResolversParentTypes['group_members_max_fields']> = {
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  group_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Group_Members_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['group_members_min_fields'] = ResolversParentTypes['group_members_min_fields']> = {
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  group_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Group_Members_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['group_members_mutation_response'] = ResolversParentTypes['group_members_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['group_members']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Group_Post_CommentResolvers<ContextType = any, ParentType extends ResolversParentTypes['group_post_comment'] = ResolversParentTypes['group_post_comment']> = {
  comment?: Resolver<ResolversTypes['comments'], ParentType, ContextType>;
  comment_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  group_post_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  post?: Resolver<ResolversTypes['group_posts'], ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Group_Post_Comment_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['group_post_comment_aggregate'] = ResolversParentTypes['group_post_comment_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['group_post_comment_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['group_post_comment']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Group_Post_Comment_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['group_post_comment_aggregate_fields'] = ResolversParentTypes['group_post_comment_aggregate_fields']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<Group_Post_Comment_Aggregate_FieldsCountArgs, never>>;
  max?: Resolver<Maybe<ResolversTypes['group_post_comment_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['group_post_comment_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Group_Post_Comment_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['group_post_comment_max_fields'] = ResolversParentTypes['group_post_comment_max_fields']> = {
  comment_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  group_post_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Group_Post_Comment_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['group_post_comment_min_fields'] = ResolversParentTypes['group_post_comment_min_fields']> = {
  comment_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  group_post_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Group_Post_Comment_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['group_post_comment_mutation_response'] = ResolversParentTypes['group_post_comment_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['group_post_comment']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Group_Post_TypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['group_post_type'] = ResolversParentTypes['group_post_type']> = {
  comment?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Group_Post_Type_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['group_post_type_aggregate'] = ResolversParentTypes['group_post_type_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['group_post_type_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['group_post_type']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Group_Post_Type_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['group_post_type_aggregate_fields'] = ResolversParentTypes['group_post_type_aggregate_fields']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<Group_Post_Type_Aggregate_FieldsCountArgs, never>>;
  max?: Resolver<Maybe<ResolversTypes['group_post_type_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['group_post_type_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Group_Post_Type_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['group_post_type_max_fields'] = ResolversParentTypes['group_post_type_max_fields']> = {
  comment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Group_Post_Type_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['group_post_type_min_fields'] = ResolversParentTypes['group_post_type_min_fields']> = {
  comment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Group_Post_Type_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['group_post_type_mutation_response'] = ResolversParentTypes['group_post_type_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['group_post_type']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Group_PostsResolvers<ContextType = any, ParentType extends ResolversParentTypes['group_posts'] = ResolversParentTypes['group_posts']> = {
  author?: Resolver<ResolversTypes['users'], ParentType, ContextType>;
  author_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  comments?: Resolver<Array<ResolversTypes['group_post_comment']>, ParentType, ContextType, RequireFields<Group_PostsCommentsArgs, never>>;
  comments_aggregate?: Resolver<ResolversTypes['group_post_comment_aggregate'], ParentType, ContextType, RequireFields<Group_PostsComments_AggregateArgs, never>>;
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  group?: Resolver<ResolversTypes['groups'], ParentType, ContextType>;
  group_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  resolved?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['group_post_type_enum'], ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Group_Posts_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['group_posts_aggregate'] = ResolversParentTypes['group_posts_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['group_posts_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['group_posts']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Group_Posts_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['group_posts_aggregate_fields'] = ResolversParentTypes['group_posts_aggregate_fields']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<Group_Posts_Aggregate_FieldsCountArgs, never>>;
  max?: Resolver<Maybe<ResolversTypes['group_posts_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['group_posts_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Group_Posts_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['group_posts_max_fields'] = ResolversParentTypes['group_posts_max_fields']> = {
  author_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  content?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  group_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Group_Posts_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['group_posts_min_fields'] = ResolversParentTypes['group_posts_min_fields']> = {
  author_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  content?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  group_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Group_Posts_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['group_posts_mutation_response'] = ResolversParentTypes['group_posts_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['group_posts']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Group_RoleResolvers<ContextType = any, ParentType extends ResolversParentTypes['group_role'] = ResolversParentTypes['group_role']> = {
  comment?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Group_Role_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['group_role_aggregate'] = ResolversParentTypes['group_role_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['group_role_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['group_role']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Group_Role_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['group_role_aggregate_fields'] = ResolversParentTypes['group_role_aggregate_fields']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<Group_Role_Aggregate_FieldsCountArgs, never>>;
  max?: Resolver<Maybe<ResolversTypes['group_role_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['group_role_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Group_Role_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['group_role_max_fields'] = ResolversParentTypes['group_role_max_fields']> = {
  comment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Group_Role_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['group_role_min_fields'] = ResolversParentTypes['group_role_min_fields']> = {
  comment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Group_Role_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['group_role_mutation_response'] = ResolversParentTypes['group_role_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['group_role']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Group_ThingResolvers<ContextType = any, ParentType extends ResolversParentTypes['group_thing'] = ResolversParentTypes['group_thing']> = {
  created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  group?: Resolver<ResolversTypes['groups'], ParentType, ContextType>;
  group_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  thing?: Resolver<ResolversTypes['things'], ParentType, ContextType>;
  thing_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Group_Thing_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['group_thing_aggregate'] = ResolversParentTypes['group_thing_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['group_thing_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['group_thing']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Group_Thing_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['group_thing_aggregate_fields'] = ResolversParentTypes['group_thing_aggregate_fields']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<Group_Thing_Aggregate_FieldsCountArgs, never>>;
  max?: Resolver<Maybe<ResolversTypes['group_thing_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['group_thing_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Group_Thing_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['group_thing_max_fields'] = ResolversParentTypes['group_thing_max_fields']> = {
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  group_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  thing_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Group_Thing_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['group_thing_min_fields'] = ResolversParentTypes['group_thing_min_fields']> = {
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  group_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  thing_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Group_Thing_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['group_thing_mutation_response'] = ResolversParentTypes['group_thing_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['group_thing']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GroupsResolvers<ContextType = any, ParentType extends ResolversParentTypes['groups'] = ResolversParentTypes['groups']> = {
  activities?: Resolver<Array<ResolversTypes['activities']>, ParentType, ContextType, RequireFields<GroupsActivitiesArgs, never>>;
  activities_aggregate?: Resolver<ResolversTypes['activities_aggregate'], ParentType, ContextType, RequireFields<GroupsActivities_AggregateArgs, never>>;
  created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  join_requests?: Resolver<Array<ResolversTypes['group_join_requests']>, ParentType, ContextType, RequireFields<GroupsJoin_RequestsArgs, never>>;
  join_requests_aggregate?: Resolver<ResolversTypes['group_join_requests_aggregate'], ParentType, ContextType, RequireFields<GroupsJoin_Requests_AggregateArgs, never>>;
  join_tokens?: Resolver<Array<ResolversTypes['group_join_tokens']>, ParentType, ContextType, RequireFields<GroupsJoin_TokensArgs, never>>;
  join_tokens_aggregate?: Resolver<ResolversTypes['group_join_tokens_aggregate'], ParentType, ContextType, RequireFields<GroupsJoin_Tokens_AggregateArgs, never>>;
  memberships?: Resolver<Array<ResolversTypes['group_members']>, ParentType, ContextType, RequireFields<GroupsMembershipsArgs, never>>;
  memberships_aggregate?: Resolver<ResolversTypes['group_members_aggregate'], ParentType, ContextType, RequireFields<GroupsMemberships_AggregateArgs, never>>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  public?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  short_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  thing_relations?: Resolver<Array<ResolversTypes['group_thing']>, ParentType, ContextType, RequireFields<GroupsThing_RelationsArgs, never>>;
  thing_relations_aggregate?: Resolver<ResolversTypes['group_thing_aggregate'], ParentType, ContextType, RequireFields<GroupsThing_Relations_AggregateArgs, never>>;
  updated_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Groups_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['groups_aggregate'] = ResolversParentTypes['groups_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['groups_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['groups']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Groups_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['groups_aggregate_fields'] = ResolversParentTypes['groups_aggregate_fields']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<Groups_Aggregate_FieldsCountArgs, never>>;
  max?: Resolver<Maybe<ResolversTypes['groups_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['groups_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Groups_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['groups_max_fields'] = ResolversParentTypes['groups_max_fields']> = {
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  short_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Groups_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['groups_min_fields'] = ResolversParentTypes['groups_min_fields']> = {
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  short_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Groups_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['groups_mutation_response'] = ResolversParentTypes['groups_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['groups']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Mutation_RootResolvers<ContextType = any, ParentType extends ResolversParentTypes['mutation_root'] = ResolversParentTypes['mutation_root']> = {
  createChatGroup?: Resolver<Maybe<ResolversTypes['CreateChatGroupResult']>, ParentType, ContextType, RequireFields<Mutation_RootCreateChatGroupArgs, 'input'>>;
  createGroup?: Resolver<ResolversTypes['CreateGroupResult'], ParentType, ContextType, RequireFields<Mutation_RootCreateGroupArgs, 'input'>>;
  createJoinToken?: Resolver<Maybe<ResolversTypes['CreateJoinTokenResult']>, ParentType, ContextType, RequireFields<Mutation_RootCreateJoinTokenArgs, 'input'>>;
  deleteThing?: Resolver<Maybe<ResolversTypes['DeleteThingOutput']>, ParentType, ContextType, RequireFields<Mutation_RootDeleteThingArgs, 'input'>>;
  delete_activities?: Resolver<Maybe<ResolversTypes['activities_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_ActivitiesArgs, 'where'>>;
  delete_activities_by_pk?: Resolver<Maybe<ResolversTypes['activities']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Activities_By_PkArgs, 'id'>>;
  delete_activity_verb?: Resolver<Maybe<ResolversTypes['activity_verb_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Activity_VerbArgs, 'where'>>;
  delete_activity_verb_by_pk?: Resolver<Maybe<ResolversTypes['activity_verb']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Activity_Verb_By_PkArgs, 'value'>>;
  delete_chat_group_members?: Resolver<Maybe<ResolversTypes['chat_group_members_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Chat_Group_MembersArgs, 'where'>>;
  delete_chat_group_members_by_pk?: Resolver<Maybe<ResolversTypes['chat_group_members']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Chat_Group_Members_By_PkArgs, 'id'>>;
  delete_chat_groups?: Resolver<Maybe<ResolversTypes['chat_groups_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Chat_GroupsArgs, 'where'>>;
  delete_chat_groups_by_pk?: Resolver<Maybe<ResolversTypes['chat_groups']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Chat_Groups_By_PkArgs, 'id'>>;
  delete_chat_messages?: Resolver<Maybe<ResolversTypes['chat_messages_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Chat_MessagesArgs, 'where'>>;
  delete_chat_messages_by_pk?: Resolver<Maybe<ResolversTypes['chat_messages']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Chat_Messages_By_PkArgs, 'id'>>;
  delete_comments?: Resolver<Maybe<ResolversTypes['comments_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_CommentsArgs, 'where'>>;
  delete_comments_by_pk?: Resolver<Maybe<ResolversTypes['comments']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Comments_By_PkArgs, 'id'>>;
  delete_entities?: Resolver<Maybe<ResolversTypes['entities_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_EntitiesArgs, 'where'>>;
  delete_entities_by_pk?: Resolver<Maybe<ResolversTypes['entities']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Entities_By_PkArgs, 'id'>>;
  delete_file_uploads?: Resolver<Maybe<ResolversTypes['file_uploads_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_File_UploadsArgs, 'where'>>;
  delete_file_uploads_by_pk?: Resolver<Maybe<ResolversTypes['file_uploads']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_File_Uploads_By_PkArgs, 'id'>>;
  delete_group_join_request_status?: Resolver<Maybe<ResolversTypes['group_join_request_status_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Group_Join_Request_StatusArgs, 'where'>>;
  delete_group_join_request_status_by_pk?: Resolver<Maybe<ResolversTypes['group_join_request_status']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Group_Join_Request_Status_By_PkArgs, 'value'>>;
  delete_group_join_requests?: Resolver<Maybe<ResolversTypes['group_join_requests_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Group_Join_RequestsArgs, 'where'>>;
  delete_group_join_requests_by_pk?: Resolver<Maybe<ResolversTypes['group_join_requests']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Group_Join_Requests_By_PkArgs, 'id'>>;
  delete_group_join_tokens?: Resolver<Maybe<ResolversTypes['group_join_tokens_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Group_Join_TokensArgs, 'where'>>;
  delete_group_join_tokens_by_pk?: Resolver<Maybe<ResolversTypes['group_join_tokens']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Group_Join_Tokens_By_PkArgs, 'id'>>;
  delete_group_members?: Resolver<Maybe<ResolversTypes['group_members_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Group_MembersArgs, 'where'>>;
  delete_group_members_by_pk?: Resolver<Maybe<ResolversTypes['group_members']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Group_Members_By_PkArgs, 'id'>>;
  delete_group_post_comment?: Resolver<Maybe<ResolversTypes['group_post_comment_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Group_Post_CommentArgs, 'where'>>;
  delete_group_post_comment_by_pk?: Resolver<Maybe<ResolversTypes['group_post_comment']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Group_Post_Comment_By_PkArgs, 'id'>>;
  delete_group_post_type?: Resolver<Maybe<ResolversTypes['group_post_type_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Group_Post_TypeArgs, 'where'>>;
  delete_group_post_type_by_pk?: Resolver<Maybe<ResolversTypes['group_post_type']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Group_Post_Type_By_PkArgs, 'value'>>;
  delete_group_posts?: Resolver<Maybe<ResolversTypes['group_posts_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Group_PostsArgs, 'where'>>;
  delete_group_posts_by_pk?: Resolver<Maybe<ResolversTypes['group_posts']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Group_Posts_By_PkArgs, 'id'>>;
  delete_group_role?: Resolver<Maybe<ResolversTypes['group_role_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Group_RoleArgs, 'where'>>;
  delete_group_role_by_pk?: Resolver<Maybe<ResolversTypes['group_role']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Group_Role_By_PkArgs, 'value'>>;
  delete_group_thing?: Resolver<Maybe<ResolversTypes['group_thing_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Group_ThingArgs, 'where'>>;
  delete_group_thing_by_pk?: Resolver<Maybe<ResolversTypes['group_thing']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Group_Thing_By_PkArgs, 'id'>>;
  delete_groups?: Resolver<Maybe<ResolversTypes['groups_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_GroupsArgs, 'where'>>;
  delete_groups_by_pk?: Resolver<Maybe<ResolversTypes['groups']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Groups_By_PkArgs, 'id'>>;
  delete_notifications?: Resolver<Maybe<ResolversTypes['notifications_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_NotificationsArgs, 'where'>>;
  delete_notifications_by_pk?: Resolver<Maybe<ResolversTypes['notifications']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Notifications_By_PkArgs, 'id'>>;
  delete_thing_images?: Resolver<Maybe<ResolversTypes['thing_images_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Thing_ImagesArgs, 'where'>>;
  delete_thing_images_by_pk?: Resolver<Maybe<ResolversTypes['thing_images']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Thing_Images_By_PkArgs, 'id'>>;
  delete_thing_type?: Resolver<Maybe<ResolversTypes['thing_type_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Thing_TypeArgs, 'where'>>;
  delete_thing_type_by_pk?: Resolver<Maybe<ResolversTypes['thing_type']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Thing_Type_By_PkArgs, 'value'>>;
  delete_things?: Resolver<Maybe<ResolversTypes['things_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_ThingsArgs, 'where'>>;
  delete_things_by_pk?: Resolver<Maybe<ResolversTypes['things']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Things_By_PkArgs, 'id'>>;
  delete_user_private?: Resolver<Maybe<ResolversTypes['user_private_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_User_PrivateArgs, 'where'>>;
  delete_users?: Resolver<Maybe<ResolversTypes['users_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_UsersArgs, 'where'>>;
  delete_users_by_pk?: Resolver<Maybe<ResolversTypes['users']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Users_By_PkArgs, 'id'>>;
  delete_verification_requests?: Resolver<Maybe<ResolversTypes['verification_requests_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Verification_RequestsArgs, 'where'>>;
  delete_verification_requests_by_pk?: Resolver<Maybe<ResolversTypes['verification_requests']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Verification_Requests_By_PkArgs, 'id'>>;
  handleJoinRequest?: Resolver<ResolversTypes['HandleJoinRequestResult'], ParentType, ContextType, RequireFields<Mutation_RootHandleJoinRequestArgs, 'input'>>;
  insert_activities?: Resolver<Maybe<ResolversTypes['activities_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_ActivitiesArgs, 'objects'>>;
  insert_activities_one?: Resolver<Maybe<ResolversTypes['activities']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Activities_OneArgs, 'object'>>;
  insert_activity_verb?: Resolver<Maybe<ResolversTypes['activity_verb_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Activity_VerbArgs, 'objects'>>;
  insert_activity_verb_one?: Resolver<Maybe<ResolversTypes['activity_verb']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Activity_Verb_OneArgs, 'object'>>;
  insert_chat_group_members?: Resolver<Maybe<ResolversTypes['chat_group_members_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Chat_Group_MembersArgs, 'objects'>>;
  insert_chat_group_members_one?: Resolver<Maybe<ResolversTypes['chat_group_members']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Chat_Group_Members_OneArgs, 'object'>>;
  insert_chat_groups?: Resolver<Maybe<ResolversTypes['chat_groups_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Chat_GroupsArgs, 'objects'>>;
  insert_chat_groups_one?: Resolver<Maybe<ResolversTypes['chat_groups']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Chat_Groups_OneArgs, 'object'>>;
  insert_chat_messages?: Resolver<Maybe<ResolversTypes['chat_messages_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Chat_MessagesArgs, 'objects'>>;
  insert_chat_messages_one?: Resolver<Maybe<ResolversTypes['chat_messages']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Chat_Messages_OneArgs, 'object'>>;
  insert_comments?: Resolver<Maybe<ResolversTypes['comments_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_CommentsArgs, 'objects'>>;
  insert_comments_one?: Resolver<Maybe<ResolversTypes['comments']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Comments_OneArgs, 'object'>>;
  insert_entities?: Resolver<Maybe<ResolversTypes['entities_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_EntitiesArgs, 'objects'>>;
  insert_entities_one?: Resolver<Maybe<ResolversTypes['entities']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Entities_OneArgs, 'object'>>;
  insert_file_uploads?: Resolver<Maybe<ResolversTypes['file_uploads_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_File_UploadsArgs, 'objects'>>;
  insert_file_uploads_one?: Resolver<Maybe<ResolversTypes['file_uploads']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_File_Uploads_OneArgs, 'object'>>;
  insert_group_join_request_status?: Resolver<Maybe<ResolversTypes['group_join_request_status_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Group_Join_Request_StatusArgs, 'objects'>>;
  insert_group_join_request_status_one?: Resolver<Maybe<ResolversTypes['group_join_request_status']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Group_Join_Request_Status_OneArgs, 'object'>>;
  insert_group_join_requests?: Resolver<Maybe<ResolversTypes['group_join_requests_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Group_Join_RequestsArgs, 'objects'>>;
  insert_group_join_requests_one?: Resolver<Maybe<ResolversTypes['group_join_requests']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Group_Join_Requests_OneArgs, 'object'>>;
  insert_group_join_tokens?: Resolver<Maybe<ResolversTypes['group_join_tokens_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Group_Join_TokensArgs, 'objects'>>;
  insert_group_join_tokens_one?: Resolver<Maybe<ResolversTypes['group_join_tokens']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Group_Join_Tokens_OneArgs, 'object'>>;
  insert_group_members?: Resolver<Maybe<ResolversTypes['group_members_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Group_MembersArgs, 'objects'>>;
  insert_group_members_one?: Resolver<Maybe<ResolversTypes['group_members']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Group_Members_OneArgs, 'object'>>;
  insert_group_post_comment?: Resolver<Maybe<ResolversTypes['group_post_comment_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Group_Post_CommentArgs, 'objects'>>;
  insert_group_post_comment_one?: Resolver<Maybe<ResolversTypes['group_post_comment']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Group_Post_Comment_OneArgs, 'object'>>;
  insert_group_post_type?: Resolver<Maybe<ResolversTypes['group_post_type_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Group_Post_TypeArgs, 'objects'>>;
  insert_group_post_type_one?: Resolver<Maybe<ResolversTypes['group_post_type']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Group_Post_Type_OneArgs, 'object'>>;
  insert_group_posts?: Resolver<Maybe<ResolversTypes['group_posts_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Group_PostsArgs, 'objects'>>;
  insert_group_posts_one?: Resolver<Maybe<ResolversTypes['group_posts']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Group_Posts_OneArgs, 'object'>>;
  insert_group_role?: Resolver<Maybe<ResolversTypes['group_role_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Group_RoleArgs, 'objects'>>;
  insert_group_role_one?: Resolver<Maybe<ResolversTypes['group_role']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Group_Role_OneArgs, 'object'>>;
  insert_group_thing?: Resolver<Maybe<ResolversTypes['group_thing_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Group_ThingArgs, 'objects'>>;
  insert_group_thing_one?: Resolver<Maybe<ResolversTypes['group_thing']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Group_Thing_OneArgs, 'object'>>;
  insert_groups?: Resolver<Maybe<ResolversTypes['groups_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_GroupsArgs, 'objects'>>;
  insert_groups_one?: Resolver<Maybe<ResolversTypes['groups']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Groups_OneArgs, 'object'>>;
  insert_notifications?: Resolver<Maybe<ResolversTypes['notifications_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_NotificationsArgs, 'objects'>>;
  insert_notifications_one?: Resolver<Maybe<ResolversTypes['notifications']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Notifications_OneArgs, 'object'>>;
  insert_thing_images?: Resolver<Maybe<ResolversTypes['thing_images_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Thing_ImagesArgs, 'objects'>>;
  insert_thing_images_one?: Resolver<Maybe<ResolversTypes['thing_images']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Thing_Images_OneArgs, 'object'>>;
  insert_thing_type?: Resolver<Maybe<ResolversTypes['thing_type_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Thing_TypeArgs, 'objects'>>;
  insert_thing_type_one?: Resolver<Maybe<ResolversTypes['thing_type']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Thing_Type_OneArgs, 'object'>>;
  insert_things?: Resolver<Maybe<ResolversTypes['things_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_ThingsArgs, 'objects'>>;
  insert_things_one?: Resolver<Maybe<ResolversTypes['things']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Things_OneArgs, 'object'>>;
  insert_user_private?: Resolver<Maybe<ResolversTypes['user_private_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_User_PrivateArgs, 'objects'>>;
  insert_user_private_one?: Resolver<Maybe<ResolversTypes['user_private']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_User_Private_OneArgs, 'object'>>;
  insert_users?: Resolver<Maybe<ResolversTypes['users_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_UsersArgs, 'objects'>>;
  insert_users_one?: Resolver<Maybe<ResolversTypes['users']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Users_OneArgs, 'object'>>;
  insert_verification_requests?: Resolver<Maybe<ResolversTypes['verification_requests_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Verification_RequestsArgs, 'objects'>>;
  insert_verification_requests_one?: Resolver<Maybe<ResolversTypes['verification_requests']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Verification_Requests_OneArgs, 'object'>>;
  joinGroup?: Resolver<Maybe<ResolversTypes['JoinGroupResult']>, ParentType, ContextType, RequireFields<Mutation_RootJoinGroupArgs, 'input'>>;
  registerCredentials?: Resolver<Maybe<ResolversTypes['RegistrationResult']>, ParentType, ContextType, RequireFields<Mutation_RootRegisterCredentialsArgs, 'input'>>;
  requestJoinGroup?: Resolver<Maybe<ResolversTypes['RequestJoinGroupResult']>, ParentType, ContextType, RequireFields<Mutation_RootRequestJoinGroupArgs, 'input'>>;
  updateThing?: Resolver<Maybe<ResolversTypes['UpdateThingResult']>, ParentType, ContextType, RequireFields<Mutation_RootUpdateThingArgs, 'input'>>;
  update_activities?: Resolver<Maybe<ResolversTypes['activities_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_ActivitiesArgs, 'where'>>;
  update_activities_by_pk?: Resolver<Maybe<ResolversTypes['activities']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Activities_By_PkArgs, 'pk_columns'>>;
  update_activity_verb?: Resolver<Maybe<ResolversTypes['activity_verb_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Activity_VerbArgs, 'where'>>;
  update_activity_verb_by_pk?: Resolver<Maybe<ResolversTypes['activity_verb']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Activity_Verb_By_PkArgs, 'pk_columns'>>;
  update_chat_group_members?: Resolver<Maybe<ResolversTypes['chat_group_members_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Chat_Group_MembersArgs, 'where'>>;
  update_chat_group_members_by_pk?: Resolver<Maybe<ResolversTypes['chat_group_members']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Chat_Group_Members_By_PkArgs, 'pk_columns'>>;
  update_chat_groups?: Resolver<Maybe<ResolversTypes['chat_groups_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Chat_GroupsArgs, 'where'>>;
  update_chat_groups_by_pk?: Resolver<Maybe<ResolversTypes['chat_groups']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Chat_Groups_By_PkArgs, 'pk_columns'>>;
  update_chat_messages?: Resolver<Maybe<ResolversTypes['chat_messages_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Chat_MessagesArgs, 'where'>>;
  update_chat_messages_by_pk?: Resolver<Maybe<ResolversTypes['chat_messages']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Chat_Messages_By_PkArgs, 'pk_columns'>>;
  update_comments?: Resolver<Maybe<ResolversTypes['comments_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_CommentsArgs, 'where'>>;
  update_comments_by_pk?: Resolver<Maybe<ResolversTypes['comments']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Comments_By_PkArgs, 'pk_columns'>>;
  update_entities?: Resolver<Maybe<ResolversTypes['entities_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_EntitiesArgs, 'where'>>;
  update_entities_by_pk?: Resolver<Maybe<ResolversTypes['entities']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Entities_By_PkArgs, 'pk_columns'>>;
  update_file_uploads?: Resolver<Maybe<ResolversTypes['file_uploads_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_File_UploadsArgs, 'where'>>;
  update_file_uploads_by_pk?: Resolver<Maybe<ResolversTypes['file_uploads']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_File_Uploads_By_PkArgs, 'pk_columns'>>;
  update_group_join_request_status?: Resolver<Maybe<ResolversTypes['group_join_request_status_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Group_Join_Request_StatusArgs, 'where'>>;
  update_group_join_request_status_by_pk?: Resolver<Maybe<ResolversTypes['group_join_request_status']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Group_Join_Request_Status_By_PkArgs, 'pk_columns'>>;
  update_group_join_requests?: Resolver<Maybe<ResolversTypes['group_join_requests_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Group_Join_RequestsArgs, 'where'>>;
  update_group_join_requests_by_pk?: Resolver<Maybe<ResolversTypes['group_join_requests']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Group_Join_Requests_By_PkArgs, 'pk_columns'>>;
  update_group_join_tokens?: Resolver<Maybe<ResolversTypes['group_join_tokens_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Group_Join_TokensArgs, 'where'>>;
  update_group_join_tokens_by_pk?: Resolver<Maybe<ResolversTypes['group_join_tokens']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Group_Join_Tokens_By_PkArgs, 'pk_columns'>>;
  update_group_members?: Resolver<Maybe<ResolversTypes['group_members_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Group_MembersArgs, 'where'>>;
  update_group_members_by_pk?: Resolver<Maybe<ResolversTypes['group_members']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Group_Members_By_PkArgs, 'pk_columns'>>;
  update_group_post_comment?: Resolver<Maybe<ResolversTypes['group_post_comment_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Group_Post_CommentArgs, 'where'>>;
  update_group_post_comment_by_pk?: Resolver<Maybe<ResolversTypes['group_post_comment']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Group_Post_Comment_By_PkArgs, 'pk_columns'>>;
  update_group_post_type?: Resolver<Maybe<ResolversTypes['group_post_type_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Group_Post_TypeArgs, 'where'>>;
  update_group_post_type_by_pk?: Resolver<Maybe<ResolversTypes['group_post_type']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Group_Post_Type_By_PkArgs, 'pk_columns'>>;
  update_group_posts?: Resolver<Maybe<ResolversTypes['group_posts_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Group_PostsArgs, 'where'>>;
  update_group_posts_by_pk?: Resolver<Maybe<ResolversTypes['group_posts']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Group_Posts_By_PkArgs, 'pk_columns'>>;
  update_group_role?: Resolver<Maybe<ResolversTypes['group_role_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Group_RoleArgs, 'where'>>;
  update_group_role_by_pk?: Resolver<Maybe<ResolversTypes['group_role']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Group_Role_By_PkArgs, 'pk_columns'>>;
  update_group_thing?: Resolver<Maybe<ResolversTypes['group_thing_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Group_ThingArgs, 'where'>>;
  update_group_thing_by_pk?: Resolver<Maybe<ResolversTypes['group_thing']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Group_Thing_By_PkArgs, 'pk_columns'>>;
  update_groups?: Resolver<Maybe<ResolversTypes['groups_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_GroupsArgs, 'where'>>;
  update_groups_by_pk?: Resolver<Maybe<ResolversTypes['groups']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Groups_By_PkArgs, 'pk_columns'>>;
  update_notifications?: Resolver<Maybe<ResolversTypes['notifications_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_NotificationsArgs, 'where'>>;
  update_notifications_by_pk?: Resolver<Maybe<ResolversTypes['notifications']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Notifications_By_PkArgs, 'pk_columns'>>;
  update_thing_images?: Resolver<Maybe<ResolversTypes['thing_images_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Thing_ImagesArgs, 'where'>>;
  update_thing_images_by_pk?: Resolver<Maybe<ResolversTypes['thing_images']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Thing_Images_By_PkArgs, 'pk_columns'>>;
  update_thing_type?: Resolver<Maybe<ResolversTypes['thing_type_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Thing_TypeArgs, 'where'>>;
  update_thing_type_by_pk?: Resolver<Maybe<ResolversTypes['thing_type']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Thing_Type_By_PkArgs, 'pk_columns'>>;
  update_things?: Resolver<Maybe<ResolversTypes['things_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_ThingsArgs, 'where'>>;
  update_things_by_pk?: Resolver<Maybe<ResolversTypes['things']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Things_By_PkArgs, 'pk_columns'>>;
  update_user_private?: Resolver<Maybe<ResolversTypes['user_private_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_User_PrivateArgs, 'where'>>;
  update_users?: Resolver<Maybe<ResolversTypes['users_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_UsersArgs, 'where'>>;
  update_users_by_pk?: Resolver<Maybe<ResolversTypes['users']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Users_By_PkArgs, 'pk_columns'>>;
  update_verification_requests?: Resolver<Maybe<ResolversTypes['verification_requests_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Verification_RequestsArgs, 'where'>>;
  update_verification_requests_by_pk?: Resolver<Maybe<ResolversTypes['verification_requests']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Verification_Requests_By_PkArgs, 'pk_columns'>>;
};

export type NotificationsResolvers<ContextType = any, ParentType extends ResolversParentTypes['notifications'] = ResolversParentTypes['notifications']> = {
  activity?: Resolver<ResolversTypes['activities'], ParentType, ContextType>;
  activity_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  read_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  user?: Resolver<ResolversTypes['users'], ParentType, ContextType>;
  user_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Notifications_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['notifications_aggregate'] = ResolversParentTypes['notifications_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['notifications_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['notifications']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Notifications_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['notifications_aggregate_fields'] = ResolversParentTypes['notifications_aggregate_fields']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<Notifications_Aggregate_FieldsCountArgs, never>>;
  max?: Resolver<Maybe<ResolversTypes['notifications_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['notifications_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Notifications_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['notifications_max_fields'] = ResolversParentTypes['notifications_max_fields']> = {
  activity_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  read_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Notifications_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['notifications_min_fields'] = ResolversParentTypes['notifications_min_fields']> = {
  activity_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  read_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Notifications_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['notifications_mutation_response'] = ResolversParentTypes['notifications_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['notifications']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Query_RootResolvers<ContextType = any, ParentType extends ResolversParentTypes['query_root'] = ResolversParentTypes['query_root']> = {
  activities?: Resolver<Array<ResolversTypes['activities']>, ParentType, ContextType, RequireFields<Query_RootActivitiesArgs, never>>;
  activities_aggregate?: Resolver<ResolversTypes['activities_aggregate'], ParentType, ContextType, RequireFields<Query_RootActivities_AggregateArgs, never>>;
  activities_by_pk?: Resolver<Maybe<ResolversTypes['activities']>, ParentType, ContextType, RequireFields<Query_RootActivities_By_PkArgs, 'id'>>;
  activity_verb?: Resolver<Array<ResolversTypes['activity_verb']>, ParentType, ContextType, RequireFields<Query_RootActivity_VerbArgs, never>>;
  activity_verb_aggregate?: Resolver<ResolversTypes['activity_verb_aggregate'], ParentType, ContextType, RequireFields<Query_RootActivity_Verb_AggregateArgs, never>>;
  activity_verb_by_pk?: Resolver<Maybe<ResolversTypes['activity_verb']>, ParentType, ContextType, RequireFields<Query_RootActivity_Verb_By_PkArgs, 'value'>>;
  chat_group_members?: Resolver<Array<ResolversTypes['chat_group_members']>, ParentType, ContextType, RequireFields<Query_RootChat_Group_MembersArgs, never>>;
  chat_group_members_aggregate?: Resolver<ResolversTypes['chat_group_members_aggregate'], ParentType, ContextType, RequireFields<Query_RootChat_Group_Members_AggregateArgs, never>>;
  chat_group_members_by_pk?: Resolver<Maybe<ResolversTypes['chat_group_members']>, ParentType, ContextType, RequireFields<Query_RootChat_Group_Members_By_PkArgs, 'id'>>;
  chat_groups?: Resolver<Array<ResolversTypes['chat_groups']>, ParentType, ContextType, RequireFields<Query_RootChat_GroupsArgs, never>>;
  chat_groups_aggregate?: Resolver<ResolversTypes['chat_groups_aggregate'], ParentType, ContextType, RequireFields<Query_RootChat_Groups_AggregateArgs, never>>;
  chat_groups_by_pk?: Resolver<Maybe<ResolversTypes['chat_groups']>, ParentType, ContextType, RequireFields<Query_RootChat_Groups_By_PkArgs, 'id'>>;
  chat_messages?: Resolver<Array<ResolversTypes['chat_messages']>, ParentType, ContextType, RequireFields<Query_RootChat_MessagesArgs, never>>;
  chat_messages_aggregate?: Resolver<ResolversTypes['chat_messages_aggregate'], ParentType, ContextType, RequireFields<Query_RootChat_Messages_AggregateArgs, never>>;
  chat_messages_by_pk?: Resolver<Maybe<ResolversTypes['chat_messages']>, ParentType, ContextType, RequireFields<Query_RootChat_Messages_By_PkArgs, 'id'>>;
  comments?: Resolver<Array<ResolversTypes['comments']>, ParentType, ContextType, RequireFields<Query_RootCommentsArgs, never>>;
  comments_aggregate?: Resolver<ResolversTypes['comments_aggregate'], ParentType, ContextType, RequireFields<Query_RootComments_AggregateArgs, never>>;
  comments_by_pk?: Resolver<Maybe<ResolversTypes['comments']>, ParentType, ContextType, RequireFields<Query_RootComments_By_PkArgs, 'id'>>;
  entities?: Resolver<Array<ResolversTypes['entities']>, ParentType, ContextType, RequireFields<Query_RootEntitiesArgs, never>>;
  entities_aggregate?: Resolver<ResolversTypes['entities_aggregate'], ParentType, ContextType, RequireFields<Query_RootEntities_AggregateArgs, never>>;
  entities_by_pk?: Resolver<Maybe<ResolversTypes['entities']>, ParentType, ContextType, RequireFields<Query_RootEntities_By_PkArgs, 'id'>>;
  file_uploads?: Resolver<Array<ResolversTypes['file_uploads']>, ParentType, ContextType, RequireFields<Query_RootFile_UploadsArgs, never>>;
  file_uploads_aggregate?: Resolver<ResolversTypes['file_uploads_aggregate'], ParentType, ContextType, RequireFields<Query_RootFile_Uploads_AggregateArgs, never>>;
  file_uploads_by_pk?: Resolver<Maybe<ResolversTypes['file_uploads']>, ParentType, ContextType, RequireFields<Query_RootFile_Uploads_By_PkArgs, 'id'>>;
  group_join_request_status?: Resolver<Array<ResolversTypes['group_join_request_status']>, ParentType, ContextType, RequireFields<Query_RootGroup_Join_Request_StatusArgs, never>>;
  group_join_request_status_aggregate?: Resolver<ResolversTypes['group_join_request_status_aggregate'], ParentType, ContextType, RequireFields<Query_RootGroup_Join_Request_Status_AggregateArgs, never>>;
  group_join_request_status_by_pk?: Resolver<Maybe<ResolversTypes['group_join_request_status']>, ParentType, ContextType, RequireFields<Query_RootGroup_Join_Request_Status_By_PkArgs, 'value'>>;
  group_join_requests?: Resolver<Array<ResolversTypes['group_join_requests']>, ParentType, ContextType, RequireFields<Query_RootGroup_Join_RequestsArgs, never>>;
  group_join_requests_aggregate?: Resolver<ResolversTypes['group_join_requests_aggregate'], ParentType, ContextType, RequireFields<Query_RootGroup_Join_Requests_AggregateArgs, never>>;
  group_join_requests_by_pk?: Resolver<Maybe<ResolversTypes['group_join_requests']>, ParentType, ContextType, RequireFields<Query_RootGroup_Join_Requests_By_PkArgs, 'id'>>;
  group_join_tokens?: Resolver<Array<ResolversTypes['group_join_tokens']>, ParentType, ContextType, RequireFields<Query_RootGroup_Join_TokensArgs, never>>;
  group_join_tokens_aggregate?: Resolver<ResolversTypes['group_join_tokens_aggregate'], ParentType, ContextType, RequireFields<Query_RootGroup_Join_Tokens_AggregateArgs, never>>;
  group_join_tokens_by_pk?: Resolver<Maybe<ResolversTypes['group_join_tokens']>, ParentType, ContextType, RequireFields<Query_RootGroup_Join_Tokens_By_PkArgs, 'id'>>;
  group_members?: Resolver<Array<ResolversTypes['group_members']>, ParentType, ContextType, RequireFields<Query_RootGroup_MembersArgs, never>>;
  group_members_aggregate?: Resolver<ResolversTypes['group_members_aggregate'], ParentType, ContextType, RequireFields<Query_RootGroup_Members_AggregateArgs, never>>;
  group_members_by_pk?: Resolver<Maybe<ResolversTypes['group_members']>, ParentType, ContextType, RequireFields<Query_RootGroup_Members_By_PkArgs, 'id'>>;
  group_post_comment?: Resolver<Array<ResolversTypes['group_post_comment']>, ParentType, ContextType, RequireFields<Query_RootGroup_Post_CommentArgs, never>>;
  group_post_comment_aggregate?: Resolver<ResolversTypes['group_post_comment_aggregate'], ParentType, ContextType, RequireFields<Query_RootGroup_Post_Comment_AggregateArgs, never>>;
  group_post_comment_by_pk?: Resolver<Maybe<ResolversTypes['group_post_comment']>, ParentType, ContextType, RequireFields<Query_RootGroup_Post_Comment_By_PkArgs, 'id'>>;
  group_post_type?: Resolver<Array<ResolversTypes['group_post_type']>, ParentType, ContextType, RequireFields<Query_RootGroup_Post_TypeArgs, never>>;
  group_post_type_aggregate?: Resolver<ResolversTypes['group_post_type_aggregate'], ParentType, ContextType, RequireFields<Query_RootGroup_Post_Type_AggregateArgs, never>>;
  group_post_type_by_pk?: Resolver<Maybe<ResolversTypes['group_post_type']>, ParentType, ContextType, RequireFields<Query_RootGroup_Post_Type_By_PkArgs, 'value'>>;
  group_posts?: Resolver<Array<ResolversTypes['group_posts']>, ParentType, ContextType, RequireFields<Query_RootGroup_PostsArgs, never>>;
  group_posts_aggregate?: Resolver<ResolversTypes['group_posts_aggregate'], ParentType, ContextType, RequireFields<Query_RootGroup_Posts_AggregateArgs, never>>;
  group_posts_by_pk?: Resolver<Maybe<ResolversTypes['group_posts']>, ParentType, ContextType, RequireFields<Query_RootGroup_Posts_By_PkArgs, 'id'>>;
  group_role?: Resolver<Array<ResolversTypes['group_role']>, ParentType, ContextType, RequireFields<Query_RootGroup_RoleArgs, never>>;
  group_role_aggregate?: Resolver<ResolversTypes['group_role_aggregate'], ParentType, ContextType, RequireFields<Query_RootGroup_Role_AggregateArgs, never>>;
  group_role_by_pk?: Resolver<Maybe<ResolversTypes['group_role']>, ParentType, ContextType, RequireFields<Query_RootGroup_Role_By_PkArgs, 'value'>>;
  group_thing?: Resolver<Array<ResolversTypes['group_thing']>, ParentType, ContextType, RequireFields<Query_RootGroup_ThingArgs, never>>;
  group_thing_aggregate?: Resolver<ResolversTypes['group_thing_aggregate'], ParentType, ContextType, RequireFields<Query_RootGroup_Thing_AggregateArgs, never>>;
  group_thing_by_pk?: Resolver<Maybe<ResolversTypes['group_thing']>, ParentType, ContextType, RequireFields<Query_RootGroup_Thing_By_PkArgs, 'id'>>;
  groups?: Resolver<Array<ResolversTypes['groups']>, ParentType, ContextType, RequireFields<Query_RootGroupsArgs, never>>;
  groups_aggregate?: Resolver<ResolversTypes['groups_aggregate'], ParentType, ContextType, RequireFields<Query_RootGroups_AggregateArgs, never>>;
  groups_by_pk?: Resolver<Maybe<ResolversTypes['groups']>, ParentType, ContextType, RequireFields<Query_RootGroups_By_PkArgs, 'id'>>;
  notifications?: Resolver<Array<ResolversTypes['notifications']>, ParentType, ContextType, RequireFields<Query_RootNotificationsArgs, never>>;
  notifications_aggregate?: Resolver<ResolversTypes['notifications_aggregate'], ParentType, ContextType, RequireFields<Query_RootNotifications_AggregateArgs, never>>;
  notifications_by_pk?: Resolver<Maybe<ResolversTypes['notifications']>, ParentType, ContextType, RequireFields<Query_RootNotifications_By_PkArgs, 'id'>>;
  thing_images?: Resolver<Array<ResolversTypes['thing_images']>, ParentType, ContextType, RequireFields<Query_RootThing_ImagesArgs, never>>;
  thing_images_aggregate?: Resolver<ResolversTypes['thing_images_aggregate'], ParentType, ContextType, RequireFields<Query_RootThing_Images_AggregateArgs, never>>;
  thing_images_by_pk?: Resolver<Maybe<ResolversTypes['thing_images']>, ParentType, ContextType, RequireFields<Query_RootThing_Images_By_PkArgs, 'id'>>;
  thing_type?: Resolver<Array<ResolversTypes['thing_type']>, ParentType, ContextType, RequireFields<Query_RootThing_TypeArgs, never>>;
  thing_type_aggregate?: Resolver<ResolversTypes['thing_type_aggregate'], ParentType, ContextType, RequireFields<Query_RootThing_Type_AggregateArgs, never>>;
  thing_type_by_pk?: Resolver<Maybe<ResolversTypes['thing_type']>, ParentType, ContextType, RequireFields<Query_RootThing_Type_By_PkArgs, 'value'>>;
  things?: Resolver<Array<ResolversTypes['things']>, ParentType, ContextType, RequireFields<Query_RootThingsArgs, never>>;
  things_aggregate?: Resolver<ResolversTypes['things_aggregate'], ParentType, ContextType, RequireFields<Query_RootThings_AggregateArgs, never>>;
  things_by_pk?: Resolver<Maybe<ResolversTypes['things']>, ParentType, ContextType, RequireFields<Query_RootThings_By_PkArgs, 'id'>>;
  user_private?: Resolver<Array<ResolversTypes['user_private']>, ParentType, ContextType, RequireFields<Query_RootUser_PrivateArgs, never>>;
  user_private_aggregate?: Resolver<ResolversTypes['user_private_aggregate'], ParentType, ContextType, RequireFields<Query_RootUser_Private_AggregateArgs, never>>;
  users?: Resolver<Array<ResolversTypes['users']>, ParentType, ContextType, RequireFields<Query_RootUsersArgs, never>>;
  users_aggregate?: Resolver<ResolversTypes['users_aggregate'], ParentType, ContextType, RequireFields<Query_RootUsers_AggregateArgs, never>>;
  users_by_pk?: Resolver<Maybe<ResolversTypes['users']>, ParentType, ContextType, RequireFields<Query_RootUsers_By_PkArgs, 'id'>>;
  verification_requests?: Resolver<Array<ResolversTypes['verification_requests']>, ParentType, ContextType, RequireFields<Query_RootVerification_RequestsArgs, never>>;
  verification_requests_aggregate?: Resolver<ResolversTypes['verification_requests_aggregate'], ParentType, ContextType, RequireFields<Query_RootVerification_Requests_AggregateArgs, never>>;
  verification_requests_by_pk?: Resolver<Maybe<ResolversTypes['verification_requests']>, ParentType, ContextType, RequireFields<Query_RootVerification_Requests_By_PkArgs, 'id'>>;
};

export interface SmallintScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['smallint'], any> {
  name: 'smallint';
}

export type Subscription_RootResolvers<ContextType = any, ParentType extends ResolversParentTypes['subscription_root'] = ResolversParentTypes['subscription_root']> = {
  activities?: SubscriptionResolver<Array<ResolversTypes['activities']>, "activities", ParentType, ContextType, RequireFields<Subscription_RootActivitiesArgs, never>>;
  activities_aggregate?: SubscriptionResolver<ResolversTypes['activities_aggregate'], "activities_aggregate", ParentType, ContextType, RequireFields<Subscription_RootActivities_AggregateArgs, never>>;
  activities_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['activities']>, "activities_by_pk", ParentType, ContextType, RequireFields<Subscription_RootActivities_By_PkArgs, 'id'>>;
  activity_verb?: SubscriptionResolver<Array<ResolversTypes['activity_verb']>, "activity_verb", ParentType, ContextType, RequireFields<Subscription_RootActivity_VerbArgs, never>>;
  activity_verb_aggregate?: SubscriptionResolver<ResolversTypes['activity_verb_aggregate'], "activity_verb_aggregate", ParentType, ContextType, RequireFields<Subscription_RootActivity_Verb_AggregateArgs, never>>;
  activity_verb_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['activity_verb']>, "activity_verb_by_pk", ParentType, ContextType, RequireFields<Subscription_RootActivity_Verb_By_PkArgs, 'value'>>;
  chat_group_members?: SubscriptionResolver<Array<ResolversTypes['chat_group_members']>, "chat_group_members", ParentType, ContextType, RequireFields<Subscription_RootChat_Group_MembersArgs, never>>;
  chat_group_members_aggregate?: SubscriptionResolver<ResolversTypes['chat_group_members_aggregate'], "chat_group_members_aggregate", ParentType, ContextType, RequireFields<Subscription_RootChat_Group_Members_AggregateArgs, never>>;
  chat_group_members_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['chat_group_members']>, "chat_group_members_by_pk", ParentType, ContextType, RequireFields<Subscription_RootChat_Group_Members_By_PkArgs, 'id'>>;
  chat_groups?: SubscriptionResolver<Array<ResolversTypes['chat_groups']>, "chat_groups", ParentType, ContextType, RequireFields<Subscription_RootChat_GroupsArgs, never>>;
  chat_groups_aggregate?: SubscriptionResolver<ResolversTypes['chat_groups_aggregate'], "chat_groups_aggregate", ParentType, ContextType, RequireFields<Subscription_RootChat_Groups_AggregateArgs, never>>;
  chat_groups_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['chat_groups']>, "chat_groups_by_pk", ParentType, ContextType, RequireFields<Subscription_RootChat_Groups_By_PkArgs, 'id'>>;
  chat_messages?: SubscriptionResolver<Array<ResolversTypes['chat_messages']>, "chat_messages", ParentType, ContextType, RequireFields<Subscription_RootChat_MessagesArgs, never>>;
  chat_messages_aggregate?: SubscriptionResolver<ResolversTypes['chat_messages_aggregate'], "chat_messages_aggregate", ParentType, ContextType, RequireFields<Subscription_RootChat_Messages_AggregateArgs, never>>;
  chat_messages_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['chat_messages']>, "chat_messages_by_pk", ParentType, ContextType, RequireFields<Subscription_RootChat_Messages_By_PkArgs, 'id'>>;
  comments?: SubscriptionResolver<Array<ResolversTypes['comments']>, "comments", ParentType, ContextType, RequireFields<Subscription_RootCommentsArgs, never>>;
  comments_aggregate?: SubscriptionResolver<ResolversTypes['comments_aggregate'], "comments_aggregate", ParentType, ContextType, RequireFields<Subscription_RootComments_AggregateArgs, never>>;
  comments_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['comments']>, "comments_by_pk", ParentType, ContextType, RequireFields<Subscription_RootComments_By_PkArgs, 'id'>>;
  entities?: SubscriptionResolver<Array<ResolversTypes['entities']>, "entities", ParentType, ContextType, RequireFields<Subscription_RootEntitiesArgs, never>>;
  entities_aggregate?: SubscriptionResolver<ResolversTypes['entities_aggregate'], "entities_aggregate", ParentType, ContextType, RequireFields<Subscription_RootEntities_AggregateArgs, never>>;
  entities_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['entities']>, "entities_by_pk", ParentType, ContextType, RequireFields<Subscription_RootEntities_By_PkArgs, 'id'>>;
  file_uploads?: SubscriptionResolver<Array<ResolversTypes['file_uploads']>, "file_uploads", ParentType, ContextType, RequireFields<Subscription_RootFile_UploadsArgs, never>>;
  file_uploads_aggregate?: SubscriptionResolver<ResolversTypes['file_uploads_aggregate'], "file_uploads_aggregate", ParentType, ContextType, RequireFields<Subscription_RootFile_Uploads_AggregateArgs, never>>;
  file_uploads_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['file_uploads']>, "file_uploads_by_pk", ParentType, ContextType, RequireFields<Subscription_RootFile_Uploads_By_PkArgs, 'id'>>;
  group_join_request_status?: SubscriptionResolver<Array<ResolversTypes['group_join_request_status']>, "group_join_request_status", ParentType, ContextType, RequireFields<Subscription_RootGroup_Join_Request_StatusArgs, never>>;
  group_join_request_status_aggregate?: SubscriptionResolver<ResolversTypes['group_join_request_status_aggregate'], "group_join_request_status_aggregate", ParentType, ContextType, RequireFields<Subscription_RootGroup_Join_Request_Status_AggregateArgs, never>>;
  group_join_request_status_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['group_join_request_status']>, "group_join_request_status_by_pk", ParentType, ContextType, RequireFields<Subscription_RootGroup_Join_Request_Status_By_PkArgs, 'value'>>;
  group_join_requests?: SubscriptionResolver<Array<ResolversTypes['group_join_requests']>, "group_join_requests", ParentType, ContextType, RequireFields<Subscription_RootGroup_Join_RequestsArgs, never>>;
  group_join_requests_aggregate?: SubscriptionResolver<ResolversTypes['group_join_requests_aggregate'], "group_join_requests_aggregate", ParentType, ContextType, RequireFields<Subscription_RootGroup_Join_Requests_AggregateArgs, never>>;
  group_join_requests_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['group_join_requests']>, "group_join_requests_by_pk", ParentType, ContextType, RequireFields<Subscription_RootGroup_Join_Requests_By_PkArgs, 'id'>>;
  group_join_tokens?: SubscriptionResolver<Array<ResolversTypes['group_join_tokens']>, "group_join_tokens", ParentType, ContextType, RequireFields<Subscription_RootGroup_Join_TokensArgs, never>>;
  group_join_tokens_aggregate?: SubscriptionResolver<ResolversTypes['group_join_tokens_aggregate'], "group_join_tokens_aggregate", ParentType, ContextType, RequireFields<Subscription_RootGroup_Join_Tokens_AggregateArgs, never>>;
  group_join_tokens_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['group_join_tokens']>, "group_join_tokens_by_pk", ParentType, ContextType, RequireFields<Subscription_RootGroup_Join_Tokens_By_PkArgs, 'id'>>;
  group_members?: SubscriptionResolver<Array<ResolversTypes['group_members']>, "group_members", ParentType, ContextType, RequireFields<Subscription_RootGroup_MembersArgs, never>>;
  group_members_aggregate?: SubscriptionResolver<ResolversTypes['group_members_aggregate'], "group_members_aggregate", ParentType, ContextType, RequireFields<Subscription_RootGroup_Members_AggregateArgs, never>>;
  group_members_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['group_members']>, "group_members_by_pk", ParentType, ContextType, RequireFields<Subscription_RootGroup_Members_By_PkArgs, 'id'>>;
  group_post_comment?: SubscriptionResolver<Array<ResolversTypes['group_post_comment']>, "group_post_comment", ParentType, ContextType, RequireFields<Subscription_RootGroup_Post_CommentArgs, never>>;
  group_post_comment_aggregate?: SubscriptionResolver<ResolversTypes['group_post_comment_aggregate'], "group_post_comment_aggregate", ParentType, ContextType, RequireFields<Subscription_RootGroup_Post_Comment_AggregateArgs, never>>;
  group_post_comment_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['group_post_comment']>, "group_post_comment_by_pk", ParentType, ContextType, RequireFields<Subscription_RootGroup_Post_Comment_By_PkArgs, 'id'>>;
  group_post_type?: SubscriptionResolver<Array<ResolversTypes['group_post_type']>, "group_post_type", ParentType, ContextType, RequireFields<Subscription_RootGroup_Post_TypeArgs, never>>;
  group_post_type_aggregate?: SubscriptionResolver<ResolversTypes['group_post_type_aggregate'], "group_post_type_aggregate", ParentType, ContextType, RequireFields<Subscription_RootGroup_Post_Type_AggregateArgs, never>>;
  group_post_type_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['group_post_type']>, "group_post_type_by_pk", ParentType, ContextType, RequireFields<Subscription_RootGroup_Post_Type_By_PkArgs, 'value'>>;
  group_posts?: SubscriptionResolver<Array<ResolversTypes['group_posts']>, "group_posts", ParentType, ContextType, RequireFields<Subscription_RootGroup_PostsArgs, never>>;
  group_posts_aggregate?: SubscriptionResolver<ResolversTypes['group_posts_aggregate'], "group_posts_aggregate", ParentType, ContextType, RequireFields<Subscription_RootGroup_Posts_AggregateArgs, never>>;
  group_posts_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['group_posts']>, "group_posts_by_pk", ParentType, ContextType, RequireFields<Subscription_RootGroup_Posts_By_PkArgs, 'id'>>;
  group_role?: SubscriptionResolver<Array<ResolversTypes['group_role']>, "group_role", ParentType, ContextType, RequireFields<Subscription_RootGroup_RoleArgs, never>>;
  group_role_aggregate?: SubscriptionResolver<ResolversTypes['group_role_aggregate'], "group_role_aggregate", ParentType, ContextType, RequireFields<Subscription_RootGroup_Role_AggregateArgs, never>>;
  group_role_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['group_role']>, "group_role_by_pk", ParentType, ContextType, RequireFields<Subscription_RootGroup_Role_By_PkArgs, 'value'>>;
  group_thing?: SubscriptionResolver<Array<ResolversTypes['group_thing']>, "group_thing", ParentType, ContextType, RequireFields<Subscription_RootGroup_ThingArgs, never>>;
  group_thing_aggregate?: SubscriptionResolver<ResolversTypes['group_thing_aggregate'], "group_thing_aggregate", ParentType, ContextType, RequireFields<Subscription_RootGroup_Thing_AggregateArgs, never>>;
  group_thing_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['group_thing']>, "group_thing_by_pk", ParentType, ContextType, RequireFields<Subscription_RootGroup_Thing_By_PkArgs, 'id'>>;
  groups?: SubscriptionResolver<Array<ResolversTypes['groups']>, "groups", ParentType, ContextType, RequireFields<Subscription_RootGroupsArgs, never>>;
  groups_aggregate?: SubscriptionResolver<ResolversTypes['groups_aggregate'], "groups_aggregate", ParentType, ContextType, RequireFields<Subscription_RootGroups_AggregateArgs, never>>;
  groups_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['groups']>, "groups_by_pk", ParentType, ContextType, RequireFields<Subscription_RootGroups_By_PkArgs, 'id'>>;
  notifications?: SubscriptionResolver<Array<ResolversTypes['notifications']>, "notifications", ParentType, ContextType, RequireFields<Subscription_RootNotificationsArgs, never>>;
  notifications_aggregate?: SubscriptionResolver<ResolversTypes['notifications_aggregate'], "notifications_aggregate", ParentType, ContextType, RequireFields<Subscription_RootNotifications_AggregateArgs, never>>;
  notifications_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['notifications']>, "notifications_by_pk", ParentType, ContextType, RequireFields<Subscription_RootNotifications_By_PkArgs, 'id'>>;
  thing_images?: SubscriptionResolver<Array<ResolversTypes['thing_images']>, "thing_images", ParentType, ContextType, RequireFields<Subscription_RootThing_ImagesArgs, never>>;
  thing_images_aggregate?: SubscriptionResolver<ResolversTypes['thing_images_aggregate'], "thing_images_aggregate", ParentType, ContextType, RequireFields<Subscription_RootThing_Images_AggregateArgs, never>>;
  thing_images_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['thing_images']>, "thing_images_by_pk", ParentType, ContextType, RequireFields<Subscription_RootThing_Images_By_PkArgs, 'id'>>;
  thing_type?: SubscriptionResolver<Array<ResolversTypes['thing_type']>, "thing_type", ParentType, ContextType, RequireFields<Subscription_RootThing_TypeArgs, never>>;
  thing_type_aggregate?: SubscriptionResolver<ResolversTypes['thing_type_aggregate'], "thing_type_aggregate", ParentType, ContextType, RequireFields<Subscription_RootThing_Type_AggregateArgs, never>>;
  thing_type_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['thing_type']>, "thing_type_by_pk", ParentType, ContextType, RequireFields<Subscription_RootThing_Type_By_PkArgs, 'value'>>;
  things?: SubscriptionResolver<Array<ResolversTypes['things']>, "things", ParentType, ContextType, RequireFields<Subscription_RootThingsArgs, never>>;
  things_aggregate?: SubscriptionResolver<ResolversTypes['things_aggregate'], "things_aggregate", ParentType, ContextType, RequireFields<Subscription_RootThings_AggregateArgs, never>>;
  things_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['things']>, "things_by_pk", ParentType, ContextType, RequireFields<Subscription_RootThings_By_PkArgs, 'id'>>;
  user_private?: SubscriptionResolver<Array<ResolversTypes['user_private']>, "user_private", ParentType, ContextType, RequireFields<Subscription_RootUser_PrivateArgs, never>>;
  user_private_aggregate?: SubscriptionResolver<ResolversTypes['user_private_aggregate'], "user_private_aggregate", ParentType, ContextType, RequireFields<Subscription_RootUser_Private_AggregateArgs, never>>;
  users?: SubscriptionResolver<Array<ResolversTypes['users']>, "users", ParentType, ContextType, RequireFields<Subscription_RootUsersArgs, never>>;
  users_aggregate?: SubscriptionResolver<ResolversTypes['users_aggregate'], "users_aggregate", ParentType, ContextType, RequireFields<Subscription_RootUsers_AggregateArgs, never>>;
  users_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['users']>, "users_by_pk", ParentType, ContextType, RequireFields<Subscription_RootUsers_By_PkArgs, 'id'>>;
  verification_requests?: SubscriptionResolver<Array<ResolversTypes['verification_requests']>, "verification_requests", ParentType, ContextType, RequireFields<Subscription_RootVerification_RequestsArgs, never>>;
  verification_requests_aggregate?: SubscriptionResolver<ResolversTypes['verification_requests_aggregate'], "verification_requests_aggregate", ParentType, ContextType, RequireFields<Subscription_RootVerification_Requests_AggregateArgs, never>>;
  verification_requests_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['verification_requests']>, "verification_requests_by_pk", ParentType, ContextType, RequireFields<Subscription_RootVerification_Requests_By_PkArgs, 'id'>>;
};

export type Thing_ImagesResolvers<ContextType = any, ParentType extends ResolversParentTypes['thing_images'] = ResolversParentTypes['thing_images']> = {
  created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  file?: Resolver<ResolversTypes['file_uploads'], ParentType, ContextType>;
  file_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  order?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  thing?: Resolver<ResolversTypes['things'], ParentType, ContextType>;
  thing_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Thing_Images_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['thing_images_aggregate'] = ResolversParentTypes['thing_images_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['thing_images_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['thing_images']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Thing_Images_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['thing_images_aggregate_fields'] = ResolversParentTypes['thing_images_aggregate_fields']> = {
  avg?: Resolver<Maybe<ResolversTypes['thing_images_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<Thing_Images_Aggregate_FieldsCountArgs, never>>;
  max?: Resolver<Maybe<ResolversTypes['thing_images_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['thing_images_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['thing_images_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['thing_images_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['thing_images_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['thing_images_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['thing_images_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['thing_images_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['thing_images_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Thing_Images_Avg_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['thing_images_avg_fields'] = ResolversParentTypes['thing_images_avg_fields']> = {
  order?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Thing_Images_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['thing_images_max_fields'] = ResolversParentTypes['thing_images_max_fields']> = {
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  file_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  order?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  thing_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Thing_Images_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['thing_images_min_fields'] = ResolversParentTypes['thing_images_min_fields']> = {
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  file_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  order?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  thing_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Thing_Images_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['thing_images_mutation_response'] = ResolversParentTypes['thing_images_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['thing_images']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Thing_Images_Stddev_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['thing_images_stddev_fields'] = ResolversParentTypes['thing_images_stddev_fields']> = {
  order?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Thing_Images_Stddev_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['thing_images_stddev_pop_fields'] = ResolversParentTypes['thing_images_stddev_pop_fields']> = {
  order?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Thing_Images_Stddev_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['thing_images_stddev_samp_fields'] = ResolversParentTypes['thing_images_stddev_samp_fields']> = {
  order?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Thing_Images_Sum_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['thing_images_sum_fields'] = ResolversParentTypes['thing_images_sum_fields']> = {
  order?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Thing_Images_Var_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['thing_images_var_pop_fields'] = ResolversParentTypes['thing_images_var_pop_fields']> = {
  order?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Thing_Images_Var_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['thing_images_var_samp_fields'] = ResolversParentTypes['thing_images_var_samp_fields']> = {
  order?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Thing_Images_Variance_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['thing_images_variance_fields'] = ResolversParentTypes['thing_images_variance_fields']> = {
  order?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Thing_TypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['thing_type'] = ResolversParentTypes['thing_type']> = {
  comment?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Thing_Type_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['thing_type_aggregate'] = ResolversParentTypes['thing_type_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['thing_type_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['thing_type']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Thing_Type_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['thing_type_aggregate_fields'] = ResolversParentTypes['thing_type_aggregate_fields']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<Thing_Type_Aggregate_FieldsCountArgs, never>>;
  max?: Resolver<Maybe<ResolversTypes['thing_type_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['thing_type_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Thing_Type_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['thing_type_max_fields'] = ResolversParentTypes['thing_type_max_fields']> = {
  comment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Thing_Type_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['thing_type_min_fields'] = ResolversParentTypes['thing_type_min_fields']> = {
  comment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Thing_Type_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['thing_type_mutation_response'] = ResolversParentTypes['thing_type_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['thing_type']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ThingsResolvers<ContextType = any, ParentType extends ResolversParentTypes['things'] = ResolversParentTypes['things']> = {
  category?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  enabled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  expiry?: Resolver<Maybe<ResolversTypes['date']>, ParentType, ContextType>;
  group_relations?: Resolver<Array<ResolversTypes['group_thing']>, ParentType, ContextType, RequireFields<ThingsGroup_RelationsArgs, never>>;
  group_relations_aggregate?: Resolver<ResolversTypes['group_thing_aggregate'], ParentType, ContextType, RequireFields<ThingsGroup_Relations_AggregateArgs, never>>;
  id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  images?: Resolver<Array<ResolversTypes['thing_images']>, ParentType, ContextType, RequireFields<ThingsImagesArgs, never>>;
  images_aggregate?: Resolver<ResolversTypes['thing_images_aggregate'], ParentType, ContextType, RequireFields<ThingsImages_AggregateArgs, never>>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['users'], ParentType, ContextType>;
  owner_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  short_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['thing_type_enum'], ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Things_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['things_aggregate'] = ResolversParentTypes['things_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['things_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['things']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Things_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['things_aggregate_fields'] = ResolversParentTypes['things_aggregate_fields']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<Things_Aggregate_FieldsCountArgs, never>>;
  max?: Resolver<Maybe<ResolversTypes['things_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['things_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Things_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['things_max_fields'] = ResolversParentTypes['things_max_fields']> = {
  category?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  expiry?: Resolver<Maybe<ResolversTypes['date']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  owner_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  short_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Things_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['things_min_fields'] = ResolversParentTypes['things_min_fields']> = {
  category?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  expiry?: Resolver<Maybe<ResolversTypes['date']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  owner_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  short_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Things_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['things_mutation_response'] = ResolversParentTypes['things_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['things']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface TimestamptzScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['timestamptz'], any> {
  name: 'timestamptz';
}

export type User_PrivateResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_private'] = ResolversParentTypes['user_private']> = {
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type User_Private_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_private_aggregate'] = ResolversParentTypes['user_private_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['user_private_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['user_private']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type User_Private_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_private_aggregate_fields'] = ResolversParentTypes['user_private_aggregate_fields']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<User_Private_Aggregate_FieldsCountArgs, never>>;
  max?: Resolver<Maybe<ResolversTypes['user_private_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['user_private_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type User_Private_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_private_max_fields'] = ResolversParentTypes['user_private_max_fields']> = {
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type User_Private_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_private_min_fields'] = ResolversParentTypes['user_private_min_fields']> = {
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type User_Private_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_private_mutation_response'] = ResolversParentTypes['user_private_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['user_private']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersResolvers<ContextType = any, ParentType extends ResolversParentTypes['users'] = ResolversParentTypes['users']> = {
  auth0_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  chat_group_memberships?: Resolver<Array<ResolversTypes['chat_group_members']>, ParentType, ContextType, RequireFields<UsersChat_Group_MembershipsArgs, never>>;
  chat_group_memberships_aggregate?: Resolver<ResolversTypes['chat_group_members_aggregate'], ParentType, ContextType, RequireFields<UsersChat_Group_Memberships_AggregateArgs, never>>;
  chat_messages?: Resolver<Array<ResolversTypes['chat_messages']>, ParentType, ContextType, RequireFields<UsersChat_MessagesArgs, never>>;
  chat_messages_aggregate?: Resolver<ResolversTypes['chat_messages_aggregate'], ParentType, ContextType, RequireFields<UsersChat_Messages_AggregateArgs, never>>;
  comments?: Resolver<Array<ResolversTypes['comments']>, ParentType, ContextType, RequireFields<UsersCommentsArgs, never>>;
  comments_aggregate?: Resolver<ResolversTypes['comments_aggregate'], ParentType, ContextType, RequireFields<UsersComments_AggregateArgs, never>>;
  created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email_verified?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  group_join_requests?: Resolver<Array<ResolversTypes['group_join_requests']>, ParentType, ContextType, RequireFields<UsersGroup_Join_RequestsArgs, never>>;
  group_join_requests_aggregate?: Resolver<ResolversTypes['group_join_requests_aggregate'], ParentType, ContextType, RequireFields<UsersGroup_Join_Requests_AggregateArgs, never>>;
  group_posts?: Resolver<Array<ResolversTypes['group_posts']>, ParentType, ContextType, RequireFields<UsersGroup_PostsArgs, never>>;
  group_posts_aggregate?: Resolver<ResolversTypes['group_posts_aggregate'], ParentType, ContextType, RequireFields<UsersGroup_Posts_AggregateArgs, never>>;
  id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  last_chat_notification?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  last_seen?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  memberships?: Resolver<Array<ResolversTypes['group_members']>, ParentType, ContextType, RequireFields<UsersMembershipsArgs, never>>;
  memberships_aggregate?: Resolver<ResolversTypes['group_members_aggregate'], ParentType, ContextType, RequireFields<UsersMemberships_AggregateArgs, never>>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  password_hash?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  private_info?: Resolver<Maybe<ResolversTypes['user_private']>, ParentType, ContextType>;
  profile_picture?: Resolver<Maybe<ResolversTypes['file_uploads']>, ParentType, ContextType>;
  profile_picture_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  things?: Resolver<Array<ResolversTypes['things']>, ParentType, ContextType, RequireFields<UsersThingsArgs, never>>;
  things_aggregate?: Resolver<ResolversTypes['things_aggregate'], ParentType, ContextType, RequireFields<UsersThings_AggregateArgs, never>>;
  updated_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Users_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['users_aggregate'] = ResolversParentTypes['users_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['users_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['users']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Users_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['users_aggregate_fields'] = ResolversParentTypes['users_aggregate_fields']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<Users_Aggregate_FieldsCountArgs, never>>;
  max?: Resolver<Maybe<ResolversTypes['users_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['users_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Users_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['users_max_fields'] = ResolversParentTypes['users_max_fields']> = {
  auth0_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email_verified?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  last_chat_notification?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  last_seen?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  password_hash?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  profile_picture_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Users_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['users_min_fields'] = ResolversParentTypes['users_min_fields']> = {
  auth0_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email_verified?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  last_chat_notification?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  last_seen?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  password_hash?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  profile_picture_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Users_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['users_mutation_response'] = ResolversParentTypes['users_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['users']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface UuidScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['uuid'], any> {
  name: 'uuid';
}

export type Verification_RequestsResolvers<ContextType = any, ParentType extends ResolversParentTypes['verification_requests'] = ResolversParentTypes['verification_requests']> = {
  created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  expires?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  identifier?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Verification_Requests_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['verification_requests_aggregate'] = ResolversParentTypes['verification_requests_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['verification_requests_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['verification_requests']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Verification_Requests_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['verification_requests_aggregate_fields'] = ResolversParentTypes['verification_requests_aggregate_fields']> = {
  avg?: Resolver<Maybe<ResolversTypes['verification_requests_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<Verification_Requests_Aggregate_FieldsCountArgs, never>>;
  max?: Resolver<Maybe<ResolversTypes['verification_requests_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['verification_requests_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['verification_requests_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['verification_requests_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['verification_requests_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['verification_requests_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['verification_requests_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['verification_requests_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['verification_requests_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Verification_Requests_Avg_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['verification_requests_avg_fields'] = ResolversParentTypes['verification_requests_avg_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Verification_Requests_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['verification_requests_max_fields'] = ResolversParentTypes['verification_requests_max_fields']> = {
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  expires?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  identifier?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Verification_Requests_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['verification_requests_min_fields'] = ResolversParentTypes['verification_requests_min_fields']> = {
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  expires?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  identifier?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Verification_Requests_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['verification_requests_mutation_response'] = ResolversParentTypes['verification_requests_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['verification_requests']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Verification_Requests_Stddev_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['verification_requests_stddev_fields'] = ResolversParentTypes['verification_requests_stddev_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Verification_Requests_Stddev_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['verification_requests_stddev_pop_fields'] = ResolversParentTypes['verification_requests_stddev_pop_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Verification_Requests_Stddev_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['verification_requests_stddev_samp_fields'] = ResolversParentTypes['verification_requests_stddev_samp_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Verification_Requests_Sum_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['verification_requests_sum_fields'] = ResolversParentTypes['verification_requests_sum_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Verification_Requests_Var_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['verification_requests_var_pop_fields'] = ResolversParentTypes['verification_requests_var_pop_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Verification_Requests_Var_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['verification_requests_var_samp_fields'] = ResolversParentTypes['verification_requests_var_samp_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Verification_Requests_Variance_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['verification_requests_variance_fields'] = ResolversParentTypes['verification_requests_variance_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  CreateChatGroupResult?: CreateChatGroupResultResolvers<ContextType>;
  CreateGroupResult?: CreateGroupResultResolvers<ContextType>;
  CreateJoinTokenResult?: CreateJoinTokenResultResolvers<ContextType>;
  DeleteThingOutput?: DeleteThingOutputResolvers<ContextType>;
  HandleJoinRequestResult?: HandleJoinRequestResultResolvers<ContextType>;
  JoinGroupResult?: JoinGroupResultResolvers<ContextType>;
  RegistrationResult?: RegistrationResultResolvers<ContextType>;
  RequestJoinGroupResult?: RequestJoinGroupResultResolvers<ContextType>;
  UpdateThingResult?: UpdateThingResultResolvers<ContextType>;
  activities?: ActivitiesResolvers<ContextType>;
  activities_aggregate?: Activities_AggregateResolvers<ContextType>;
  activities_aggregate_fields?: Activities_Aggregate_FieldsResolvers<ContextType>;
  activities_max_fields?: Activities_Max_FieldsResolvers<ContextType>;
  activities_min_fields?: Activities_Min_FieldsResolvers<ContextType>;
  activities_mutation_response?: Activities_Mutation_ResponseResolvers<ContextType>;
  activity_verb?: Activity_VerbResolvers<ContextType>;
  activity_verb_aggregate?: Activity_Verb_AggregateResolvers<ContextType>;
  activity_verb_aggregate_fields?: Activity_Verb_Aggregate_FieldsResolvers<ContextType>;
  activity_verb_max_fields?: Activity_Verb_Max_FieldsResolvers<ContextType>;
  activity_verb_min_fields?: Activity_Verb_Min_FieldsResolvers<ContextType>;
  activity_verb_mutation_response?: Activity_Verb_Mutation_ResponseResolvers<ContextType>;
  chat_group_members?: Chat_Group_MembersResolvers<ContextType>;
  chat_group_members_aggregate?: Chat_Group_Members_AggregateResolvers<ContextType>;
  chat_group_members_aggregate_fields?: Chat_Group_Members_Aggregate_FieldsResolvers<ContextType>;
  chat_group_members_max_fields?: Chat_Group_Members_Max_FieldsResolvers<ContextType>;
  chat_group_members_min_fields?: Chat_Group_Members_Min_FieldsResolvers<ContextType>;
  chat_group_members_mutation_response?: Chat_Group_Members_Mutation_ResponseResolvers<ContextType>;
  chat_groups?: Chat_GroupsResolvers<ContextType>;
  chat_groups_aggregate?: Chat_Groups_AggregateResolvers<ContextType>;
  chat_groups_aggregate_fields?: Chat_Groups_Aggregate_FieldsResolvers<ContextType>;
  chat_groups_max_fields?: Chat_Groups_Max_FieldsResolvers<ContextType>;
  chat_groups_min_fields?: Chat_Groups_Min_FieldsResolvers<ContextType>;
  chat_groups_mutation_response?: Chat_Groups_Mutation_ResponseResolvers<ContextType>;
  chat_messages?: Chat_MessagesResolvers<ContextType>;
  chat_messages_aggregate?: Chat_Messages_AggregateResolvers<ContextType>;
  chat_messages_aggregate_fields?: Chat_Messages_Aggregate_FieldsResolvers<ContextType>;
  chat_messages_max_fields?: Chat_Messages_Max_FieldsResolvers<ContextType>;
  chat_messages_min_fields?: Chat_Messages_Min_FieldsResolvers<ContextType>;
  chat_messages_mutation_response?: Chat_Messages_Mutation_ResponseResolvers<ContextType>;
  comments?: CommentsResolvers<ContextType>;
  comments_aggregate?: Comments_AggregateResolvers<ContextType>;
  comments_aggregate_fields?: Comments_Aggregate_FieldsResolvers<ContextType>;
  comments_max_fields?: Comments_Max_FieldsResolvers<ContextType>;
  comments_min_fields?: Comments_Min_FieldsResolvers<ContextType>;
  comments_mutation_response?: Comments_Mutation_ResponseResolvers<ContextType>;
  date?: GraphQLScalarType;
  entities?: EntitiesResolvers<ContextType>;
  entities_aggregate?: Entities_AggregateResolvers<ContextType>;
  entities_aggregate_fields?: Entities_Aggregate_FieldsResolvers<ContextType>;
  entities_avg_fields?: Entities_Avg_FieldsResolvers<ContextType>;
  entities_max_fields?: Entities_Max_FieldsResolvers<ContextType>;
  entities_min_fields?: Entities_Min_FieldsResolvers<ContextType>;
  entities_mutation_response?: Entities_Mutation_ResponseResolvers<ContextType>;
  entities_stddev_fields?: Entities_Stddev_FieldsResolvers<ContextType>;
  entities_stddev_pop_fields?: Entities_Stddev_Pop_FieldsResolvers<ContextType>;
  entities_stddev_samp_fields?: Entities_Stddev_Samp_FieldsResolvers<ContextType>;
  entities_sum_fields?: Entities_Sum_FieldsResolvers<ContextType>;
  entities_var_pop_fields?: Entities_Var_Pop_FieldsResolvers<ContextType>;
  entities_var_samp_fields?: Entities_Var_Samp_FieldsResolvers<ContextType>;
  entities_variance_fields?: Entities_Variance_FieldsResolvers<ContextType>;
  file_uploads?: File_UploadsResolvers<ContextType>;
  file_uploads_aggregate?: File_Uploads_AggregateResolvers<ContextType>;
  file_uploads_aggregate_fields?: File_Uploads_Aggregate_FieldsResolvers<ContextType>;
  file_uploads_avg_fields?: File_Uploads_Avg_FieldsResolvers<ContextType>;
  file_uploads_max_fields?: File_Uploads_Max_FieldsResolvers<ContextType>;
  file_uploads_min_fields?: File_Uploads_Min_FieldsResolvers<ContextType>;
  file_uploads_mutation_response?: File_Uploads_Mutation_ResponseResolvers<ContextType>;
  file_uploads_stddev_fields?: File_Uploads_Stddev_FieldsResolvers<ContextType>;
  file_uploads_stddev_pop_fields?: File_Uploads_Stddev_Pop_FieldsResolvers<ContextType>;
  file_uploads_stddev_samp_fields?: File_Uploads_Stddev_Samp_FieldsResolvers<ContextType>;
  file_uploads_sum_fields?: File_Uploads_Sum_FieldsResolvers<ContextType>;
  file_uploads_var_pop_fields?: File_Uploads_Var_Pop_FieldsResolvers<ContextType>;
  file_uploads_var_samp_fields?: File_Uploads_Var_Samp_FieldsResolvers<ContextType>;
  file_uploads_variance_fields?: File_Uploads_Variance_FieldsResolvers<ContextType>;
  group_join_request_status?: Group_Join_Request_StatusResolvers<ContextType>;
  group_join_request_status_aggregate?: Group_Join_Request_Status_AggregateResolvers<ContextType>;
  group_join_request_status_aggregate_fields?: Group_Join_Request_Status_Aggregate_FieldsResolvers<ContextType>;
  group_join_request_status_max_fields?: Group_Join_Request_Status_Max_FieldsResolvers<ContextType>;
  group_join_request_status_min_fields?: Group_Join_Request_Status_Min_FieldsResolvers<ContextType>;
  group_join_request_status_mutation_response?: Group_Join_Request_Status_Mutation_ResponseResolvers<ContextType>;
  group_join_requests?: Group_Join_RequestsResolvers<ContextType>;
  group_join_requests_aggregate?: Group_Join_Requests_AggregateResolvers<ContextType>;
  group_join_requests_aggregate_fields?: Group_Join_Requests_Aggregate_FieldsResolvers<ContextType>;
  group_join_requests_max_fields?: Group_Join_Requests_Max_FieldsResolvers<ContextType>;
  group_join_requests_min_fields?: Group_Join_Requests_Min_FieldsResolvers<ContextType>;
  group_join_requests_mutation_response?: Group_Join_Requests_Mutation_ResponseResolvers<ContextType>;
  group_join_tokens?: Group_Join_TokensResolvers<ContextType>;
  group_join_tokens_aggregate?: Group_Join_Tokens_AggregateResolvers<ContextType>;
  group_join_tokens_aggregate_fields?: Group_Join_Tokens_Aggregate_FieldsResolvers<ContextType>;
  group_join_tokens_max_fields?: Group_Join_Tokens_Max_FieldsResolvers<ContextType>;
  group_join_tokens_min_fields?: Group_Join_Tokens_Min_FieldsResolvers<ContextType>;
  group_join_tokens_mutation_response?: Group_Join_Tokens_Mutation_ResponseResolvers<ContextType>;
  group_members?: Group_MembersResolvers<ContextType>;
  group_members_aggregate?: Group_Members_AggregateResolvers<ContextType>;
  group_members_aggregate_fields?: Group_Members_Aggregate_FieldsResolvers<ContextType>;
  group_members_max_fields?: Group_Members_Max_FieldsResolvers<ContextType>;
  group_members_min_fields?: Group_Members_Min_FieldsResolvers<ContextType>;
  group_members_mutation_response?: Group_Members_Mutation_ResponseResolvers<ContextType>;
  group_post_comment?: Group_Post_CommentResolvers<ContextType>;
  group_post_comment_aggregate?: Group_Post_Comment_AggregateResolvers<ContextType>;
  group_post_comment_aggregate_fields?: Group_Post_Comment_Aggregate_FieldsResolvers<ContextType>;
  group_post_comment_max_fields?: Group_Post_Comment_Max_FieldsResolvers<ContextType>;
  group_post_comment_min_fields?: Group_Post_Comment_Min_FieldsResolvers<ContextType>;
  group_post_comment_mutation_response?: Group_Post_Comment_Mutation_ResponseResolvers<ContextType>;
  group_post_type?: Group_Post_TypeResolvers<ContextType>;
  group_post_type_aggregate?: Group_Post_Type_AggregateResolvers<ContextType>;
  group_post_type_aggregate_fields?: Group_Post_Type_Aggregate_FieldsResolvers<ContextType>;
  group_post_type_max_fields?: Group_Post_Type_Max_FieldsResolvers<ContextType>;
  group_post_type_min_fields?: Group_Post_Type_Min_FieldsResolvers<ContextType>;
  group_post_type_mutation_response?: Group_Post_Type_Mutation_ResponseResolvers<ContextType>;
  group_posts?: Group_PostsResolvers<ContextType>;
  group_posts_aggregate?: Group_Posts_AggregateResolvers<ContextType>;
  group_posts_aggregate_fields?: Group_Posts_Aggregate_FieldsResolvers<ContextType>;
  group_posts_max_fields?: Group_Posts_Max_FieldsResolvers<ContextType>;
  group_posts_min_fields?: Group_Posts_Min_FieldsResolvers<ContextType>;
  group_posts_mutation_response?: Group_Posts_Mutation_ResponseResolvers<ContextType>;
  group_role?: Group_RoleResolvers<ContextType>;
  group_role_aggregate?: Group_Role_AggregateResolvers<ContextType>;
  group_role_aggregate_fields?: Group_Role_Aggregate_FieldsResolvers<ContextType>;
  group_role_max_fields?: Group_Role_Max_FieldsResolvers<ContextType>;
  group_role_min_fields?: Group_Role_Min_FieldsResolvers<ContextType>;
  group_role_mutation_response?: Group_Role_Mutation_ResponseResolvers<ContextType>;
  group_thing?: Group_ThingResolvers<ContextType>;
  group_thing_aggregate?: Group_Thing_AggregateResolvers<ContextType>;
  group_thing_aggregate_fields?: Group_Thing_Aggregate_FieldsResolvers<ContextType>;
  group_thing_max_fields?: Group_Thing_Max_FieldsResolvers<ContextType>;
  group_thing_min_fields?: Group_Thing_Min_FieldsResolvers<ContextType>;
  group_thing_mutation_response?: Group_Thing_Mutation_ResponseResolvers<ContextType>;
  groups?: GroupsResolvers<ContextType>;
  groups_aggregate?: Groups_AggregateResolvers<ContextType>;
  groups_aggregate_fields?: Groups_Aggregate_FieldsResolvers<ContextType>;
  groups_max_fields?: Groups_Max_FieldsResolvers<ContextType>;
  groups_min_fields?: Groups_Min_FieldsResolvers<ContextType>;
  groups_mutation_response?: Groups_Mutation_ResponseResolvers<ContextType>;
  mutation_root?: Mutation_RootResolvers<ContextType>;
  notifications?: NotificationsResolvers<ContextType>;
  notifications_aggregate?: Notifications_AggregateResolvers<ContextType>;
  notifications_aggregate_fields?: Notifications_Aggregate_FieldsResolvers<ContextType>;
  notifications_max_fields?: Notifications_Max_FieldsResolvers<ContextType>;
  notifications_min_fields?: Notifications_Min_FieldsResolvers<ContextType>;
  notifications_mutation_response?: Notifications_Mutation_ResponseResolvers<ContextType>;
  query_root?: Query_RootResolvers<ContextType>;
  smallint?: GraphQLScalarType;
  subscription_root?: Subscription_RootResolvers<ContextType>;
  thing_images?: Thing_ImagesResolvers<ContextType>;
  thing_images_aggregate?: Thing_Images_AggregateResolvers<ContextType>;
  thing_images_aggregate_fields?: Thing_Images_Aggregate_FieldsResolvers<ContextType>;
  thing_images_avg_fields?: Thing_Images_Avg_FieldsResolvers<ContextType>;
  thing_images_max_fields?: Thing_Images_Max_FieldsResolvers<ContextType>;
  thing_images_min_fields?: Thing_Images_Min_FieldsResolvers<ContextType>;
  thing_images_mutation_response?: Thing_Images_Mutation_ResponseResolvers<ContextType>;
  thing_images_stddev_fields?: Thing_Images_Stddev_FieldsResolvers<ContextType>;
  thing_images_stddev_pop_fields?: Thing_Images_Stddev_Pop_FieldsResolvers<ContextType>;
  thing_images_stddev_samp_fields?: Thing_Images_Stddev_Samp_FieldsResolvers<ContextType>;
  thing_images_sum_fields?: Thing_Images_Sum_FieldsResolvers<ContextType>;
  thing_images_var_pop_fields?: Thing_Images_Var_Pop_FieldsResolvers<ContextType>;
  thing_images_var_samp_fields?: Thing_Images_Var_Samp_FieldsResolvers<ContextType>;
  thing_images_variance_fields?: Thing_Images_Variance_FieldsResolvers<ContextType>;
  thing_type?: Thing_TypeResolvers<ContextType>;
  thing_type_aggregate?: Thing_Type_AggregateResolvers<ContextType>;
  thing_type_aggregate_fields?: Thing_Type_Aggregate_FieldsResolvers<ContextType>;
  thing_type_max_fields?: Thing_Type_Max_FieldsResolvers<ContextType>;
  thing_type_min_fields?: Thing_Type_Min_FieldsResolvers<ContextType>;
  thing_type_mutation_response?: Thing_Type_Mutation_ResponseResolvers<ContextType>;
  things?: ThingsResolvers<ContextType>;
  things_aggregate?: Things_AggregateResolvers<ContextType>;
  things_aggregate_fields?: Things_Aggregate_FieldsResolvers<ContextType>;
  things_max_fields?: Things_Max_FieldsResolvers<ContextType>;
  things_min_fields?: Things_Min_FieldsResolvers<ContextType>;
  things_mutation_response?: Things_Mutation_ResponseResolvers<ContextType>;
  timestamptz?: GraphQLScalarType;
  user_private?: User_PrivateResolvers<ContextType>;
  user_private_aggregate?: User_Private_AggregateResolvers<ContextType>;
  user_private_aggregate_fields?: User_Private_Aggregate_FieldsResolvers<ContextType>;
  user_private_max_fields?: User_Private_Max_FieldsResolvers<ContextType>;
  user_private_min_fields?: User_Private_Min_FieldsResolvers<ContextType>;
  user_private_mutation_response?: User_Private_Mutation_ResponseResolvers<ContextType>;
  users?: UsersResolvers<ContextType>;
  users_aggregate?: Users_AggregateResolvers<ContextType>;
  users_aggregate_fields?: Users_Aggregate_FieldsResolvers<ContextType>;
  users_max_fields?: Users_Max_FieldsResolvers<ContextType>;
  users_min_fields?: Users_Min_FieldsResolvers<ContextType>;
  users_mutation_response?: Users_Mutation_ResponseResolvers<ContextType>;
  uuid?: GraphQLScalarType;
  verification_requests?: Verification_RequestsResolvers<ContextType>;
  verification_requests_aggregate?: Verification_Requests_AggregateResolvers<ContextType>;
  verification_requests_aggregate_fields?: Verification_Requests_Aggregate_FieldsResolvers<ContextType>;
  verification_requests_avg_fields?: Verification_Requests_Avg_FieldsResolvers<ContextType>;
  verification_requests_max_fields?: Verification_Requests_Max_FieldsResolvers<ContextType>;
  verification_requests_min_fields?: Verification_Requests_Min_FieldsResolvers<ContextType>;
  verification_requests_mutation_response?: Verification_Requests_Mutation_ResponseResolvers<ContextType>;
  verification_requests_stddev_fields?: Verification_Requests_Stddev_FieldsResolvers<ContextType>;
  verification_requests_stddev_pop_fields?: Verification_Requests_Stddev_Pop_FieldsResolvers<ContextType>;
  verification_requests_stddev_samp_fields?: Verification_Requests_Stddev_Samp_FieldsResolvers<ContextType>;
  verification_requests_sum_fields?: Verification_Requests_Sum_FieldsResolvers<ContextType>;
  verification_requests_var_pop_fields?: Verification_Requests_Var_Pop_FieldsResolvers<ContextType>;
  verification_requests_var_samp_fields?: Verification_Requests_Var_Samp_FieldsResolvers<ContextType>;
  verification_requests_variance_fields?: Verification_Requests_Variance_FieldsResolvers<ContextType>;
};

export type DirectiveResolvers<ContextType = any> = {
  cached?: CachedDirectiveResolver<any, any, ContextType>;
};

export const UserCardFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserCard"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}}]} as unknown as DocumentNode<UserCardFragment, unknown>;
export const GroupCardFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GroupCard"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"groups"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"short_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"public"}},{"kind":"Field","name":{"kind":"Name","value":"memberships_aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"thing_relations_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"thing"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"enabled"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"BooleanValue","value":true}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"_or"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"expiry"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_gt"},"value":{"kind":"StringValue","value":"now()","block":false}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"expiry"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_is_null"},"value":{"kind":"BooleanValue","value":true}}]}}]}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]}}]} as unknown as DocumentNode<GroupCardFragment, unknown>;
export const CommentCardFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CommentCard"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"comments"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserCard"}}]}}]}},...UserCardFragmentDoc.definitions]} as unknown as DocumentNode<CommentCardFragment, unknown>;
export const GroupPostFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GroupPost"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"group_posts"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"resolved"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"comments"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"created_at"},"value":{"kind":"EnumValue","value":"desc"}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"comment"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommentCard"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"group"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"GroupCard"}}]}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserCard"}}]}}]}},...CommentCardFragmentDoc.definitions,...GroupCardFragmentDoc.definitions,...UserCardFragmentDoc.definitions]} as unknown as DocumentNode<GroupPostFragment, unknown>;
export const FileUploadCardFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FileUploadCard"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"file_uploads"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"mime_type"}},{"kind":"Field","name":{"kind":"Name","value":"size"}}]}}]} as unknown as DocumentNode<FileUploadCardFragment, unknown>;
export const ThingImageCardFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ThingImageCard"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"thing_images"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"order"}},{"kind":"Field","name":{"kind":"Name","value":"file"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FileUploadCard"}}]}}]}},...FileUploadCardFragmentDoc.definitions]} as unknown as DocumentNode<ThingImageCardFragment, unknown>;
export const ThingCardFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ThingCard"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"things"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"expiry"}},{"kind":"Field","name":{"kind":"Name","value":"short_id"}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ThingImageCard"}}]}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserCard"}}]}}]}},...ThingImageCardFragmentDoc.definitions,...UserCardFragmentDoc.definitions]} as unknown as DocumentNode<ThingCardFragment, unknown>;
export const GroupMemberCardFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GroupMemberCard"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"group_members"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserCard"}}]}}]}},...UserCardFragmentDoc.definitions]} as unknown as DocumentNode<GroupMemberCardFragment, unknown>;
export const GroupMemberWithGroupCardFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GroupMemberWithGroupCard"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"group_members"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"GroupMemberCard"}},{"kind":"Field","name":{"kind":"Name","value":"group"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"short_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},...GroupMemberCardFragmentDoc.definitions]} as unknown as DocumentNode<GroupMemberWithGroupCardFragment, unknown>;
export const DetailedEntityFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DetailedEntity"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"entities"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"group"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"GroupCard"}}]}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserCard"}}]}},{"kind":"Field","name":{"kind":"Name","value":"group_post"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"GroupPost"}}]}},{"kind":"Field","name":{"kind":"Name","value":"group_thing"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"thing"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ThingCard"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"group_member"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"GroupMemberWithGroupCard"}}]}}]}},...GroupCardFragmentDoc.definitions,...UserCardFragmentDoc.definitions,...GroupPostFragmentDoc.definitions,...ThingCardFragmentDoc.definitions,...GroupMemberWithGroupCardFragmentDoc.definitions]} as unknown as DocumentNode<DetailedEntityFragment, unknown>;
export const DetailedActivityFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DetailedActivity"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"activities"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"verb"}},{"kind":"Field","name":{"kind":"Name","value":"actor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserCard"}}]}},{"kind":"Field","name":{"kind":"Name","value":"entity"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DetailedEntity"}}]}}]}},...UserCardFragmentDoc.definitions,...DetailedEntityFragmentDoc.definitions]} as unknown as DocumentNode<DetailedActivityFragment, unknown>;
export const GroupRefFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GroupRef"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"groups"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"short_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]} as unknown as DocumentNode<GroupRefFragment, unknown>;
export const ThingRefFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ThingRef"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"things"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"short_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"images"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"file"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]} as unknown as DocumentNode<ThingRefFragment, unknown>;
export const EntityCardFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EntityCard"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"entities"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"group"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"GroupRef"}}]}},{"kind":"Field","name":{"kind":"Name","value":"thing"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ThingRef"}}]}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserCard"}}]}},{"kind":"Field","name":{"kind":"Name","value":"group_join_request"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"response"}},{"kind":"Field","name":{"kind":"Name","value":"group"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"GroupRef"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"group_post_comment"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"post"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"author_id"}},{"kind":"Field","name":{"kind":"Name","value":"group"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"GroupRef"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"comment"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommentCard"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"group_post"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"group"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"GroupRef"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"group_thing"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"thing"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ThingRef"}}]}},{"kind":"Field","name":{"kind":"Name","value":"group"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"GroupRef"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"group_member"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserCard"}}]}},{"kind":"Field","name":{"kind":"Name","value":"group"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"GroupRef"}}]}}]}}]}},...GroupRefFragmentDoc.definitions,...ThingRefFragmentDoc.definitions,...UserCardFragmentDoc.definitions,...CommentCardFragmentDoc.definitions]} as unknown as DocumentNode<EntityCardFragment, unknown>;
export const ActivityCardFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ActivityCard"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"activities"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"verb"}},{"kind":"Field","name":{"kind":"Name","value":"entity"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EntityCard"}}]}},{"kind":"Field","name":{"kind":"Name","value":"secondary_entity"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EntityCard"}}]}},{"kind":"Field","name":{"kind":"Name","value":"actor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserCard"}}]}}]}},...EntityCardFragmentDoc.definitions,...UserCardFragmentDoc.definitions]} as unknown as DocumentNode<ActivityCardFragment, unknown>;
export const NotificationCardFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NotificationCard"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"notifications"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"read_at"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"activity"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActivityCard"}}]}}]}},...ActivityCardFragmentDoc.definitions]} as unknown as DocumentNode<NotificationCardFragment, unknown>;
export const ChatMessageCardFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ChatMessageCard"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"chat_messages"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"sender_id"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"entity"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EntityCard"}}]}}]}},...EntityCardFragmentDoc.definitions]} as unknown as DocumentNode<ChatMessageCardFragment, unknown>;
export const ChatGroupCardFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ChatGroupCard"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"chat_groups"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"members"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserCard"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"messages"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"created_at"},"value":{"kind":"EnumValue","value":"desc"}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sender"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserCard"}}]}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}},...UserCardFragmentDoc.definitions]} as unknown as DocumentNode<ChatGroupCardFragment, unknown>;
export const GroupDetailsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GroupDetails"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"groups"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"GroupCard"}},{"kind":"Field","name":{"kind":"Name","value":"memberships"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"GroupMemberCard"}}]}}]}},...GroupCardFragmentDoc.definitions,...GroupMemberCardFragmentDoc.definitions]} as unknown as DocumentNode<GroupDetailsFragment, unknown>;
export const GroupJoinTokenCardFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GroupJoinTokenCard"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"group_join_tokens"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"disabled"}},{"kind":"Field","name":{"kind":"Name","value":"note"}}]}}]} as unknown as DocumentNode<GroupJoinTokenCardFragment, unknown>;
export const ThingDetailsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ThingDetails"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"things"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ThingCard"}},{"kind":"Field","name":{"kind":"Name","value":"enabled"}},{"kind":"Field","name":{"kind":"Name","value":"group_relations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"group"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"GroupCard"}}]}}]}}]}},...ThingCardFragmentDoc.definitions,...GroupCardFragmentDoc.definitions]} as unknown as DocumentNode<ThingDetailsFragment, unknown>;
export const UserDetailFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserDetail"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserCard"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}}]}},...UserCardFragmentDoc.definitions]} as unknown as DocumentNode<UserDetailFragment, unknown>;
export const GroupJoinRequestCardFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GroupJoinRequestCard"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"group_join_requests"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"group_id"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserCard"}}]}}]}},...UserCardFragmentDoc.definitions]} as unknown as DocumentNode<GroupJoinRequestCardFragment, unknown>;
export const UserJoinRequestsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserJoinRequests"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"group_join_requests"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"status"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"EnumValue","value":"pending"}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"GroupJoinRequestCard"}}]}}]}},...GroupJoinRequestCardFragmentDoc.definitions]} as unknown as DocumentNode<UserJoinRequestsFragment, unknown>;
export const UserPrivateDetailFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserPrivateDetail"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserDetail"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserJoinRequests"}},{"kind":"Field","name":{"kind":"Name","value":"memberships"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"group"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"GroupCard"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"private_info"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}},...UserDetailFragmentDoc.definitions,...UserJoinRequestsFragmentDoc.definitions,...GroupCardFragmentDoc.definitions]} as unknown as DocumentNode<UserPrivateDetailFragment, unknown>;
export const ServerChatGroupFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ServerChatGroup"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"chat_groups"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"members"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<ServerChatGroupFragment, unknown>;
export const GroupActivityDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GroupActivity"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"shortId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"groups"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"short_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"shortId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"activities"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"created_at"},"value":{"kind":"EnumValue","value":"desc"}}]}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"verb"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_nin"},"value":{"kind":"ListValue","values":[{"kind":"EnumValue","value":"rejected"},{"kind":"EnumValue","value":"requested_to_join"},{"kind":"EnumValue","value":"accepted"},{"kind":"EnumValue","value":"deleted"},{"kind":"EnumValue","value":"showed_interest"}]}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"entity"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_or"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"group_thing_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_is_null"},"value":{"kind":"BooleanValue","value":false}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"group_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_is_null"},"value":{"kind":"BooleanValue","value":false}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"group_post_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_is_null"},"value":{"kind":"BooleanValue","value":false}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"group_member_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_is_null"},"value":{"kind":"BooleanValue","value":false}}]}}]}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DetailedActivity"}}]}}]}}]}},...DetailedActivityFragmentDoc.definitions]} as unknown as DocumentNode<GroupActivityQuery, GroupActivityQueryVariables>;
export const ChatMessagesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ChatMessages"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"chat_messages_bool_exp"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"chat_messages"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"created_at"},"value":{"kind":"EnumValue","value":"desc"}}]}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ChatMessageCard"}}]}}]}},...ChatMessageCardFragmentDoc.definitions]} as unknown as DocumentNode<ChatMessagesQuery, ChatMessagesQueryVariables>;
export const ChatGroupsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"ChatGroups"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"chat_groups"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"messages_aggregate"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"max"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"created_at"},"value":{"kind":"EnumValue","value":"desc"}}]}}]}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ChatGroupCard"}}]}}]}},...ChatGroupCardFragmentDoc.definitions]} as unknown as DocumentNode<ChatGroupsSubscription, ChatGroupsSubscriptionVariables>;
export const ChatMessagesFeedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"ChatMessagesFeed"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"chat_messages_bool_exp"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"chat_messages"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"created_at"},"value":{"kind":"EnumValue","value":"desc"}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ChatMessageCard"}}]}}]}},...ChatMessageCardFragmentDoc.definitions]} as unknown as DocumentNode<ChatMessagesFeedSubscription, ChatMessagesFeedSubscriptionVariables>;
export const CreateChatGroupDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateChatGroup"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateChatGroupInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createChatGroup"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"chat_group"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ChatGroupCard"}}]}}]}}]}},...ChatGroupCardFragmentDoc.definitions]} as unknown as DocumentNode<CreateChatGroupMutation, CreateChatGroupMutationVariables>;
export const CreateChatMessageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateChatMessage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"chat_messages_insert_input"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_chat_messages_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ChatMessageCard"}}]}}]}},...ChatMessageCardFragmentDoc.definitions]} as unknown as DocumentNode<CreateChatMessageMutation, CreateChatMessageMutationVariables>;
export const ListGroupsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ListGroups"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"groups_order_by"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"groups_bool_exp"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"groups_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"groups"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ListValue","values":[{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"GroupCard"}}]}}]}},...GroupCardFragmentDoc.definitions]} as unknown as DocumentNode<ListGroupsQuery, ListGroupsQueryVariables>;
export const GroupDetailsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GroupDetails"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"shortId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"groups"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"short_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"shortId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"GroupDetails"}}]}}]}},...GroupDetailsFragmentDoc.definitions]} as unknown as DocumentNode<GroupDetailsQuery, GroupDetailsQueryVariables>;
export const GroupJoinRequestsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GroupJoinRequests"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"group_join_requests_bool_exp"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"group_join_requests"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"GroupJoinRequestCard"}}]}}]}},...GroupJoinRequestCardFragmentDoc.definitions]} as unknown as DocumentNode<GroupJoinRequestsQuery, GroupJoinRequestsQueryVariables>;
export const GroupJoinTokensDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GroupJoinTokens"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"group_join_tokens_bool_exp"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"group_join_tokens"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"GroupJoinTokenCard"}}]}}]}},...GroupJoinTokenCardFragmentDoc.definitions]} as unknown as DocumentNode<GroupJoinTokensQuery, GroupJoinTokensQueryVariables>;
export const GroupPostListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GroupPostList"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"group_posts_bool_exp"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"group_posts_order_by"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"group_posts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"GroupPost"}}]}},{"kind":"Field","name":{"kind":"Name","value":"group_posts_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]}},...GroupPostFragmentDoc.definitions]} as unknown as DocumentNode<GroupPostListQuery, GroupPostListQueryVariables>;
export const ActivityListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ActivityList"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"defaultValue":{"kind":"IntValue","value":"10"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"activities"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"10"}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"created_at"},"value":{"kind":"EnumValue","value":"desc"}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActivityCard"}}]}}]}},...ActivityCardFragmentDoc.definitions]} as unknown as DocumentNode<ActivityListQuery, ActivityListQueryVariables>;
export const CreateGroupDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateGroup"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateGroupInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createGroup"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"group"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"GroupCard"}}]}}]}}]}},...GroupCardFragmentDoc.definitions]} as unknown as DocumentNode<CreateGroupMutation, CreateGroupMutationVariables>;
export const UpdateGroupDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateGroup"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"groups_set_input"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_groups_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"GroupDetails"}}]}}]}},...GroupDetailsFragmentDoc.definitions]} as unknown as DocumentNode<UpdateGroupMutation, UpdateGroupMutationVariables>;
export const DeleteGroupDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteGroup"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"delete_groups_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"GroupCard"}}]}}]}},...GroupCardFragmentDoc.definitions]} as unknown as DocumentNode<DeleteGroupMutation, DeleteGroupMutationVariables>;
export const CreateGroupPostDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateGroupPost"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"group_posts_insert_input"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_group_posts_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"GroupPost"}}]}}]}},...GroupPostFragmentDoc.definitions]} as unknown as DocumentNode<CreateGroupPostMutation, CreateGroupPostMutationVariables>;
export const UpdateGroupPostDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateGroupPost"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"group_posts_set_input"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_group_posts_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"GroupPost"}}]}}]}},...GroupPostFragmentDoc.definitions]} as unknown as DocumentNode<UpdateGroupPostMutation, UpdateGroupPostMutationVariables>;
export const CreateGroupPostCommentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateGroupPostComment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"groupPostId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"comments_insert_input"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_group_post_comment_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"group_post_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"groupPostId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"comment"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"comment"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommentCard"}}]}},{"kind":"Field","name":{"kind":"Name","value":"post"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"GroupPost"}}]}}]}}]}},...CommentCardFragmentDoc.definitions,...GroupPostFragmentDoc.definitions]} as unknown as DocumentNode<CreateGroupPostCommentMutation, CreateGroupPostCommentMutationVariables>;
export const LeaveGroupDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"LeaveGroup"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"groupId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"delete_group_members"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"group_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"groupId"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"user_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected_rows"}}]}}]}}]} as unknown as DocumentNode<LeaveGroupMutation, LeaveGroupMutationVariables>;
export const JoinGroupDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"JoinGroup"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"groupId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_group_members_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"group_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"groupId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"GroupMemberCard"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserPrivateDetail"}}]}}]}}]}},...GroupMemberCardFragmentDoc.definitions,...UserPrivateDetailFragmentDoc.definitions]} as unknown as DocumentNode<JoinGroupMutation, JoinGroupMutationVariables>;
export const JoinGroupWithTokenDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"JoinGroupWithToken"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"JoinGroupInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"joinGroup"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"group"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserPrivateDetail"}}]}}]}}]}},...UserPrivateDetailFragmentDoc.definitions]} as unknown as DocumentNode<JoinGroupWithTokenMutation, JoinGroupWithTokenMutationVariables>;
export const RequestJoinGroupDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RequestJoinGroup"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RequestJoinGroupInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"requestJoinGroup"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"group"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"GroupCard"}}]}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserJoinRequests"}}]}}]}}]}},...GroupCardFragmentDoc.definitions,...UserJoinRequestsFragmentDoc.definitions]} as unknown as DocumentNode<RequestJoinGroupMutation, RequestJoinGroupMutationVariables>;
export const CancelJoinRequestDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CancelJoinRequest"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"requestId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"delete_group_join_requests"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"requestId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserJoinRequests"}}]}}]}}]}}]}},...UserJoinRequestsFragmentDoc.definitions]} as unknown as DocumentNode<CancelJoinRequestMutation, CancelJoinRequestMutationVariables>;
export const HandleJoinRequestDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"HandleJoinRequest"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"HandleJoinRequestInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"handleJoinRequest"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"join_request"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"GroupJoinRequestCard"}}]}}]}}]}},...GroupJoinRequestCardFragmentDoc.definitions]} as unknown as DocumentNode<HandleJoinRequestMutation, HandleJoinRequestMutationVariables>;
export const CreateJoinTokenDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateJoinToken"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"group_join_tokens_insert_input"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_group_join_tokens_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"GroupJoinTokenCard"}}]}}]}},...GroupJoinTokenCardFragmentDoc.definitions]} as unknown as DocumentNode<CreateJoinTokenMutation, CreateJoinTokenMutationVariables>;
export const DeleteJoinTokenDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteJoinToken"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"delete_group_join_tokens_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"GroupJoinTokenCard"}}]}}]}},...GroupJoinTokenCardFragmentDoc.definitions]} as unknown as DocumentNode<DeleteJoinTokenMutation, DeleteJoinTokenMutationVariables>;
export const UpdateJoinTokenDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateJoinToken"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"group_join_tokens_set_input"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_group_join_tokens_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"GroupJoinTokenCard"}}]}}]}},...GroupJoinTokenCardFragmentDoc.definitions]} as unknown as DocumentNode<UpdateJoinTokenMutation, UpdateJoinTokenMutationVariables>;
export const SearchCountsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SearchCounts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"thingWhere"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"things_bool_exp"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"groupWhere"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"groups_bool_exp"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userWhere"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"users_bool_exp"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userWhere"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"10"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"groups_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"groupWhere"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"10"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"things_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"thingWhere"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"10"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]}}]} as unknown as DocumentNode<SearchCountsQuery, SearchCountsQueryVariables>;
export const ThingListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ThingList"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"things_order_by"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"things_bool_exp"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"things"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ThingCard"}}]}},{"kind":"Field","name":{"kind":"Name","value":"things_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]}},...ThingCardFragmentDoc.definitions]} as unknown as DocumentNode<ThingListQuery, ThingListQueryVariables>;
export const ThingDetailsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ThingDetails"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"shortId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"things"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"short_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"shortId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ThingDetails"}}]}}]}},...ThingDetailsFragmentDoc.definitions]} as unknown as DocumentNode<ThingDetailsQuery, ThingDetailsQueryVariables>;
export const CreateThingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateThing"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"things_insert_input"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_things_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ThingDetails"}}]}}]}},...ThingDetailsFragmentDoc.definitions]} as unknown as DocumentNode<CreateThingMutation, CreateThingMutationVariables>;
export const UpdateThingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateThing"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateThingInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateThing"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"thing"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ThingDetails"}}]}}]}}]}},...ThingDetailsFragmentDoc.definitions]} as unknown as DocumentNode<UpdateThingMutation, UpdateThingMutationVariables>;
export const DeleteThingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteThing"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"delete_things_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ThingDetails"}}]}}]}},...ThingDetailsFragmentDoc.definitions]} as unknown as DocumentNode<DeleteThingMutation, DeleteThingMutationVariables>;
export const InsertFileUploadDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"InsertFileUpload"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"file_uploads_insert_input"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_file_uploads_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FileUploadCard"}}]}}]}},...FileUploadCardFragmentDoc.definitions]} as unknown as DocumentNode<InsertFileUploadMutation, InsertFileUploadMutationVariables>;
export const UserListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UserList"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"users_bool_exp"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserCard"}}]}},{"kind":"Field","name":{"kind":"Name","value":"users_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"10"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]}},...UserCardFragmentDoc.definitions]} as unknown as DocumentNode<UserListQuery, UserListQueryVariables>;
export const UserPrivateDetailsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UserPrivateDetails"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserPrivateDetail"}}]}}]}},...UserPrivateDetailFragmentDoc.definitions]} as unknown as DocumentNode<UserPrivateDetailsQuery, UserPrivateDetailsQueryVariables>;
export const NotificationsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"Notifications"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"notifications"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"50"}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"created_at"},"value":{"kind":"EnumValue","value":"desc"}}]}]}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NotificationCard"}}]}}]}},...NotificationCardFragmentDoc.definitions]} as unknown as DocumentNode<NotificationsSubscription, NotificationsSubscriptionVariables>;
export const MarkNotificationReadDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"MarkNotificationRead"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"readAt"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"timestamptz"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_notifications_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"read_at"},"value":{"kind":"Variable","name":{"kind":"Name","value":"readAt"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NotificationCard"}}]}}]}},...NotificationCardFragmentDoc.definitions]} as unknown as DocumentNode<MarkNotificationReadMutation, MarkNotificationReadMutationVariables>;
export const MarkAllNotificationsReadDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"MarkAllNotificationsRead"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"readAt"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"timestamptz"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_notifications"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"read_at"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_is_null"},"value":{"kind":"BooleanValue","value":true}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"read_at"},"value":{"kind":"Variable","name":{"kind":"Name","value":"readAt"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected_rows"}},{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NotificationCard"}}]}}]}}]}},...NotificationCardFragmentDoc.definitions]} as unknown as DocumentNode<MarkAllNotificationsReadMutation, MarkAllNotificationsReadMutationVariables>;
export const RegisterUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RegisterUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CredentialsInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"registerCredentials"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}}]}}]} as unknown as DocumentNode<RegisterUserMutation, RegisterUserMutationVariables>;
export const ServerInsertActivitiesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ServerInsertActivities"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"activities_insert_input"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_activities"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"objects"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<ServerInsertActivitiesMutation, ServerInsertActivitiesMutationVariables>;
export const ServerFindChatGroupDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ServerFindChatGroup"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"chat_groups_bool_exp"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"chat_groups"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ServerChatGroup"}}]}}]}},...ServerChatGroupFragmentDoc.definitions]} as unknown as DocumentNode<ServerFindChatGroupQuery, ServerFindChatGroupQueryVariables>;
export const ServerMostRecentChatsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ServerMostRecentChats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"chat_groups"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"messages_aggregate"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"max"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"created_at"},"value":{"kind":"EnumValue","value":"desc"}}]}}]}}]}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<ServerMostRecentChatsQuery, ServerMostRecentChatsQueryVariables>;
export const ServerCreateChatGroupDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ServerCreateChatGroup"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"chat_groups_insert_input"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_chat_groups_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<ServerCreateChatGroupMutation, ServerCreateChatGroupMutationVariables>;
export const ServerCreateChatMessageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ServerCreateChatMessage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"chat_messages_insert_input"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_chat_messages_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<ServerCreateChatMessageMutation, ServerCreateChatMessageMutationVariables>;
export const ServerFindGroupDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ServerFindGroup"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"groups_bool_exp"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"groups"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<ServerFindGroupQuery, ServerFindGroupQueryVariables>;
export const ServerFindGroupJoinRequestDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ServerFindGroupJoinRequest"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"group_join_requests_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"group_id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}}]}}]} as unknown as DocumentNode<ServerFindGroupJoinRequestQuery, ServerFindGroupJoinRequestQueryVariables>;
export const ServerFindJoinTokenDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ServerFindJoinToken"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"group_join_tokens_bool_exp"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"group_join_tokens"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"token"}}]}}]}}]} as unknown as DocumentNode<ServerFindJoinTokenQuery, ServerFindJoinTokenQueryVariables>;
export const ServerFindGroupMembersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ServerFindGroupMembers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"groupId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"group_members_bool_exp"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"groups_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"groupId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"memberships"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]} as unknown as DocumentNode<ServerFindGroupMembersQuery, ServerFindGroupMembersQueryVariables>;
export const ServerCountGroupMembersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ServerCountGroupMembers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"group_members_bool_exp"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"group_members_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]}}]} as unknown as DocumentNode<ServerCountGroupMembersQuery, ServerCountGroupMembersQueryVariables>;
export const ServerFindPostParticipantsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ServerFindPostParticipants"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"groupPostId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"groupPostCommentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"postComment"},"name":{"kind":"Name","value":"group_post_comment_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"groupPostCommentId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"comment"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserCard"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"post"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"group_id"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserCard"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"participants"},"name":{"kind":"Name","value":"users"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"comments"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"group_post_relations"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"group_post_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"groupPostId"}}}]}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserCard"}}]}}]}},...UserCardFragmentDoc.definitions]} as unknown as DocumentNode<ServerFindPostParticipantsQuery, ServerFindPostParticipantsQueryVariables>;
export const ServerInsertGroupJoinTokenDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ServerInsertGroupJoinToken"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"group_join_tokens_insert_input"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_group_join_tokens_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"group_id"}}]}}]}}]} as unknown as DocumentNode<ServerInsertGroupJoinTokenMutation, ServerInsertGroupJoinTokenMutationVariables>;
export const ServerInsertGroupDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ServerInsertGroup"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"groups_insert_input"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_groups_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<ServerInsertGroupMutation, ServerInsertGroupMutationVariables>;
export const ServerInsertGroupJoinRequestDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ServerInsertGroupJoinRequest"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"group_join_requests_insert_input"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_group_join_requests_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"group_id"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<ServerInsertGroupJoinRequestMutation, ServerInsertGroupJoinRequestMutationVariables>;
export const ServerInsertGroupMemberDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ServerInsertGroupMember"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"group_members_insert_input"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_group_members_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<ServerInsertGroupMemberMutation, ServerInsertGroupMemberMutationVariables>;
export const ServerUpdateGroupJoinRequestDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ServerUpdateGroupJoinRequest"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"group_join_requests_set_input"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_group_join_requests_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"group_id"}}]}}]}}]} as unknown as DocumentNode<ServerUpdateGroupJoinRequestMutation, ServerUpdateGroupJoinRequestMutationVariables>;
export const ServerFetchThingPageDetailsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ServerFetchThingPageDetails"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"shortId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"things"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"short_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"shortId"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ThingDetails"}}]}}]}},...ThingDetailsFragmentDoc.definitions]} as unknown as DocumentNode<ServerFetchThingPageDetailsQuery, ServerFetchThingPageDetailsQueryVariables>;
export const ServerFetchThingDetailsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ServerFetchThingDetails"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"things_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"short_id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"group_relations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"group"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"public"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"memberships"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"file_id"}},{"kind":"Field","name":{"kind":"Name","value":"order"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]}}]} as unknown as DocumentNode<ServerFetchThingDetailsQuery, ServerFetchThingDetailsQueryVariables>;
export const ServerUpdateThingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ServerUpdateThing"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"things_insert_input"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deletedFileIds"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deletedGroupIds"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_things_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}},{"kind":"Argument","name":{"kind":"Name","value":"on_conflict"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"constraint"},"value":{"kind":"EnumValue","value":"things_pkey"}},{"kind":"ObjectField","name":{"kind":"Name","value":"update_columns"},"value":{"kind":"ListValue","values":[{"kind":"EnumValue","value":"name"},{"kind":"EnumValue","value":"description"},{"kind":"EnumValue","value":"type"},{"kind":"EnumValue","value":"category"},{"kind":"EnumValue","value":"enabled"},{"kind":"EnumValue","value":"expiry"}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"delete_thing_images"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"thing_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"file_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_in"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deletedFileIds"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected_rows"}}]}},{"kind":"Field","name":{"kind":"Name","value":"delete_group_thing"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"thing_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"group_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_in"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deletedGroupIds"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected_rows"}}]}}]}}]} as unknown as DocumentNode<ServerUpdateThingMutation, ServerUpdateThingMutationVariables>;
export const ServerUserCredentialsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ServerUserCredentials"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"password_hash"}}]}}]}}]} as unknown as DocumentNode<ServerUserCredentialsQuery, ServerUserCredentialsQueryVariables>;
export const ServerFindUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ServerFindUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]} as unknown as DocumentNode<ServerFindUserQuery, ServerFindUserQueryVariables>;
export const ServerInsertUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ServerInsertUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"users_insert_input"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_users_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<ServerInsertUserMutation, ServerInsertUserMutationVariables>;

      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {}
};
      export default result;
    