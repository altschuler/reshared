import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  date: any;
  smallint: any;
  timestamptz: Date;
  uuid: string;
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

export type DetailedActivityFragment = { __typename?: 'activities', id: string, created_at: Date, verb: Activity_Verb_Enum, actor?: Maybe<{ __typename?: 'users', id: string, name: string, image?: Maybe<string> }>, entity: { __typename?: 'entities', id: string, group?: Maybe<{ __typename?: 'groups', id: string, short_id: string, name: string, created_at: Date, description?: Maybe<string>, public: boolean, memberships_aggregate: { __typename?: 'group_members_aggregate', aggregate?: Maybe<{ __typename?: 'group_members_aggregate_fields', count: number }> }, thing_relations_aggregate: { __typename?: 'group_thing_aggregate', aggregate?: Maybe<{ __typename?: 'group_thing_aggregate_fields', count: number }> } }>, user?: Maybe<{ __typename?: 'users', id: string, name: string, image?: Maybe<string> }>, group_post?: Maybe<{ __typename?: 'group_posts', id: string, created_at: Date, updated_at: Date, type: Group_Post_Type_Enum, resolved: boolean, content: string, comments: Array<{ __typename?: 'group_post_comment', id: string, comment: { __typename?: 'comments', id: string, content: string, created_at: Date, author: { __typename?: 'users', id: string, name: string, image?: Maybe<string> } } }>, group: { __typename?: 'groups', id: string, short_id: string, name: string, created_at: Date, description?: Maybe<string>, public: boolean, memberships_aggregate: { __typename?: 'group_members_aggregate', aggregate?: Maybe<{ __typename?: 'group_members_aggregate_fields', count: number }> }, thing_relations_aggregate: { __typename?: 'group_thing_aggregate', aggregate?: Maybe<{ __typename?: 'group_thing_aggregate_fields', count: number }> } }, author: { __typename?: 'users', id: string, name: string, image?: Maybe<string> } }>, group_thing?: Maybe<{ __typename?: 'group_thing', id: string, thing: { __typename?: 'things', id: string, name: string, description: string, category?: Maybe<string>, type: Thing_Type_Enum, expiry?: Maybe<any>, short_id: string, images: Array<{ __typename?: 'thing_images', id: string, description: string, order: number, file: { __typename?: 'file_uploads', id: string, name: string, url: string, mime_type?: Maybe<string>, size: number } }>, owner: { __typename?: 'users', id: string, name: string, image?: Maybe<string> } } }>, group_member?: Maybe<{ __typename?: 'group_members', id: string, role: Group_Role_Enum, created_at: Date, group: { __typename?: 'groups', id: string, short_id: string, name: string }, user: { __typename?: 'users', id: string, name: string, image?: Maybe<string> } }> } };

export type ActivityCardFragment = { __typename?: 'activities', id: string, created_at: Date, verb: Activity_Verb_Enum, entity: { __typename?: 'entities', id: string, group?: Maybe<{ __typename?: 'groups', id: string, short_id: string, name: string }>, thing?: Maybe<{ __typename?: 'things', id: string, short_id: string, name: string, images: Array<{ __typename?: 'thing_images', file: { __typename?: 'file_uploads', url: string } }> }>, user?: Maybe<{ __typename?: 'users', id: string, name: string, image?: Maybe<string> }>, group_join_request?: Maybe<{ __typename?: 'group_join_requests', id: string, response?: Maybe<string>, group: { __typename?: 'groups', id: string, short_id: string, name: string } }>, group_post_comment?: Maybe<{ __typename?: 'group_post_comment', id: string, post: { __typename?: 'group_posts', id: string, author_id: string, group: { __typename?: 'groups', id: string, short_id: string, name: string } }, comment: { __typename?: 'comments', id: string, content: string, created_at: Date, author: { __typename?: 'users', id: string, name: string, image?: Maybe<string> } } }>, group_post?: Maybe<{ __typename?: 'group_posts', id: string, group: { __typename?: 'groups', id: string, short_id: string, name: string } }>, group_thing?: Maybe<{ __typename?: 'group_thing', id: string, thing: { __typename?: 'things', id: string, short_id: string, name: string, images: Array<{ __typename?: 'thing_images', file: { __typename?: 'file_uploads', url: string } }> }, group: { __typename?: 'groups', id: string, short_id: string, name: string } }>, group_member?: Maybe<{ __typename?: 'group_members', user: { __typename?: 'users', id: string, name: string, image?: Maybe<string> }, group: { __typename?: 'groups', id: string, short_id: string, name: string } }> }, secondary_entity?: Maybe<{ __typename?: 'entities', id: string, group?: Maybe<{ __typename?: 'groups', id: string, short_id: string, name: string }>, thing?: Maybe<{ __typename?: 'things', id: string, short_id: string, name: string, images: Array<{ __typename?: 'thing_images', file: { __typename?: 'file_uploads', url: string } }> }>, user?: Maybe<{ __typename?: 'users', id: string, name: string, image?: Maybe<string> }>, group_join_request?: Maybe<{ __typename?: 'group_join_requests', id: string, response?: Maybe<string>, group: { __typename?: 'groups', id: string, short_id: string, name: string } }>, group_post_comment?: Maybe<{ __typename?: 'group_post_comment', id: string, post: { __typename?: 'group_posts', id: string, author_id: string, group: { __typename?: 'groups', id: string, short_id: string, name: string } }, comment: { __typename?: 'comments', id: string, content: string, created_at: Date, author: { __typename?: 'users', id: string, name: string, image?: Maybe<string> } } }>, group_post?: Maybe<{ __typename?: 'group_posts', id: string, group: { __typename?: 'groups', id: string, short_id: string, name: string } }>, group_thing?: Maybe<{ __typename?: 'group_thing', id: string, thing: { __typename?: 'things', id: string, short_id: string, name: string, images: Array<{ __typename?: 'thing_images', file: { __typename?: 'file_uploads', url: string } }> }, group: { __typename?: 'groups', id: string, short_id: string, name: string } }>, group_member?: Maybe<{ __typename?: 'group_members', user: { __typename?: 'users', id: string, name: string, image?: Maybe<string> }, group: { __typename?: 'groups', id: string, short_id: string, name: string } }> }>, actor?: Maybe<{ __typename?: 'users', id: string, name: string, image?: Maybe<string> }> };

export type NotificationCardFragment = { __typename?: 'notifications', id: string, read_at?: Maybe<Date>, created_at: Date, activity: { __typename?: 'activities', id: string, created_at: Date, verb: Activity_Verb_Enum, entity: { __typename?: 'entities', id: string, group?: Maybe<{ __typename?: 'groups', id: string, short_id: string, name: string }>, thing?: Maybe<{ __typename?: 'things', id: string, short_id: string, name: string, images: Array<{ __typename?: 'thing_images', file: { __typename?: 'file_uploads', url: string } }> }>, user?: Maybe<{ __typename?: 'users', id: string, name: string, image?: Maybe<string> }>, group_join_request?: Maybe<{ __typename?: 'group_join_requests', id: string, response?: Maybe<string>, group: { __typename?: 'groups', id: string, short_id: string, name: string } }>, group_post_comment?: Maybe<{ __typename?: 'group_post_comment', id: string, post: { __typename?: 'group_posts', id: string, author_id: string, group: { __typename?: 'groups', id: string, short_id: string, name: string } }, comment: { __typename?: 'comments', id: string, content: string, created_at: Date, author: { __typename?: 'users', id: string, name: string, image?: Maybe<string> } } }>, group_post?: Maybe<{ __typename?: 'group_posts', id: string, group: { __typename?: 'groups', id: string, short_id: string, name: string } }>, group_thing?: Maybe<{ __typename?: 'group_thing', id: string, thing: { __typename?: 'things', id: string, short_id: string, name: string, images: Array<{ __typename?: 'thing_images', file: { __typename?: 'file_uploads', url: string } }> }, group: { __typename?: 'groups', id: string, short_id: string, name: string } }>, group_member?: Maybe<{ __typename?: 'group_members', user: { __typename?: 'users', id: string, name: string, image?: Maybe<string> }, group: { __typename?: 'groups', id: string, short_id: string, name: string } }> }, secondary_entity?: Maybe<{ __typename?: 'entities', id: string, group?: Maybe<{ __typename?: 'groups', id: string, short_id: string, name: string }>, thing?: Maybe<{ __typename?: 'things', id: string, short_id: string, name: string, images: Array<{ __typename?: 'thing_images', file: { __typename?: 'file_uploads', url: string } }> }>, user?: Maybe<{ __typename?: 'users', id: string, name: string, image?: Maybe<string> }>, group_join_request?: Maybe<{ __typename?: 'group_join_requests', id: string, response?: Maybe<string>, group: { __typename?: 'groups', id: string, short_id: string, name: string } }>, group_post_comment?: Maybe<{ __typename?: 'group_post_comment', id: string, post: { __typename?: 'group_posts', id: string, author_id: string, group: { __typename?: 'groups', id: string, short_id: string, name: string } }, comment: { __typename?: 'comments', id: string, content: string, created_at: Date, author: { __typename?: 'users', id: string, name: string, image?: Maybe<string> } } }>, group_post?: Maybe<{ __typename?: 'group_posts', id: string, group: { __typename?: 'groups', id: string, short_id: string, name: string } }>, group_thing?: Maybe<{ __typename?: 'group_thing', id: string, thing: { __typename?: 'things', id: string, short_id: string, name: string, images: Array<{ __typename?: 'thing_images', file: { __typename?: 'file_uploads', url: string } }> }, group: { __typename?: 'groups', id: string, short_id: string, name: string } }>, group_member?: Maybe<{ __typename?: 'group_members', user: { __typename?: 'users', id: string, name: string, image?: Maybe<string> }, group: { __typename?: 'groups', id: string, short_id: string, name: string } }> }>, actor?: Maybe<{ __typename?: 'users', id: string, name: string, image?: Maybe<string> }> } };

export type GroupRefFragment = { __typename?: 'groups', id: string, short_id: string, name: string };

export type ThingRefFragment = { __typename?: 'things', id: string, short_id: string, name: string, images: Array<{ __typename?: 'thing_images', file: { __typename?: 'file_uploads', url: string } }> };

export type EntityCardFragment = { __typename?: 'entities', id: string, group?: Maybe<{ __typename?: 'groups', id: string, short_id: string, name: string }>, thing?: Maybe<{ __typename?: 'things', id: string, short_id: string, name: string, images: Array<{ __typename?: 'thing_images', file: { __typename?: 'file_uploads', url: string } }> }>, user?: Maybe<{ __typename?: 'users', id: string, name: string, image?: Maybe<string> }>, group_join_request?: Maybe<{ __typename?: 'group_join_requests', id: string, response?: Maybe<string>, group: { __typename?: 'groups', id: string, short_id: string, name: string } }>, group_post_comment?: Maybe<{ __typename?: 'group_post_comment', id: string, post: { __typename?: 'group_posts', id: string, author_id: string, group: { __typename?: 'groups', id: string, short_id: string, name: string } }, comment: { __typename?: 'comments', id: string, content: string, created_at: Date, author: { __typename?: 'users', id: string, name: string, image?: Maybe<string> } } }>, group_post?: Maybe<{ __typename?: 'group_posts', id: string, group: { __typename?: 'groups', id: string, short_id: string, name: string } }>, group_thing?: Maybe<{ __typename?: 'group_thing', id: string, thing: { __typename?: 'things', id: string, short_id: string, name: string, images: Array<{ __typename?: 'thing_images', file: { __typename?: 'file_uploads', url: string } }> }, group: { __typename?: 'groups', id: string, short_id: string, name: string } }>, group_member?: Maybe<{ __typename?: 'group_members', user: { __typename?: 'users', id: string, name: string, image?: Maybe<string> }, group: { __typename?: 'groups', id: string, short_id: string, name: string } }> };

export type DetailedEntityFragment = { __typename?: 'entities', id: string, group?: Maybe<{ __typename?: 'groups', id: string, short_id: string, name: string, created_at: Date, description?: Maybe<string>, public: boolean, memberships_aggregate: { __typename?: 'group_members_aggregate', aggregate?: Maybe<{ __typename?: 'group_members_aggregate_fields', count: number }> }, thing_relations_aggregate: { __typename?: 'group_thing_aggregate', aggregate?: Maybe<{ __typename?: 'group_thing_aggregate_fields', count: number }> } }>, user?: Maybe<{ __typename?: 'users', id: string, name: string, image?: Maybe<string> }>, group_post?: Maybe<{ __typename?: 'group_posts', id: string, created_at: Date, updated_at: Date, type: Group_Post_Type_Enum, resolved: boolean, content: string, comments: Array<{ __typename?: 'group_post_comment', id: string, comment: { __typename?: 'comments', id: string, content: string, created_at: Date, author: { __typename?: 'users', id: string, name: string, image?: Maybe<string> } } }>, group: { __typename?: 'groups', id: string, short_id: string, name: string, created_at: Date, description?: Maybe<string>, public: boolean, memberships_aggregate: { __typename?: 'group_members_aggregate', aggregate?: Maybe<{ __typename?: 'group_members_aggregate_fields', count: number }> }, thing_relations_aggregate: { __typename?: 'group_thing_aggregate', aggregate?: Maybe<{ __typename?: 'group_thing_aggregate_fields', count: number }> } }, author: { __typename?: 'users', id: string, name: string, image?: Maybe<string> } }>, group_thing?: Maybe<{ __typename?: 'group_thing', id: string, thing: { __typename?: 'things', id: string, name: string, description: string, category?: Maybe<string>, type: Thing_Type_Enum, expiry?: Maybe<any>, short_id: string, images: Array<{ __typename?: 'thing_images', id: string, description: string, order: number, file: { __typename?: 'file_uploads', id: string, name: string, url: string, mime_type?: Maybe<string>, size: number } }>, owner: { __typename?: 'users', id: string, name: string, image?: Maybe<string> } } }>, group_member?: Maybe<{ __typename?: 'group_members', id: string, role: Group_Role_Enum, created_at: Date, group: { __typename?: 'groups', id: string, short_id: string, name: string }, user: { __typename?: 'users', id: string, name: string, image?: Maybe<string> } }> };

export type GroupActivityQueryVariables = Exact<{
  shortId: Scalars['String'];
  limit: Scalars['Int'];
  offset: Scalars['Int'];
}>;


export type GroupActivityQuery = { __typename?: 'query_root', groups: Array<{ __typename?: 'groups', activities: Array<{ __typename?: 'activities', id: string, created_at: Date, verb: Activity_Verb_Enum, actor?: Maybe<{ __typename?: 'users', id: string, name: string, image?: Maybe<string> }>, entity: { __typename?: 'entities', id: string, group?: Maybe<{ __typename?: 'groups', id: string, short_id: string, name: string, created_at: Date, description?: Maybe<string>, public: boolean, memberships_aggregate: { __typename?: 'group_members_aggregate', aggregate?: Maybe<{ __typename?: 'group_members_aggregate_fields', count: number }> }, thing_relations_aggregate: { __typename?: 'group_thing_aggregate', aggregate?: Maybe<{ __typename?: 'group_thing_aggregate_fields', count: number }> } }>, user?: Maybe<{ __typename?: 'users', id: string, name: string, image?: Maybe<string> }>, group_post?: Maybe<{ __typename?: 'group_posts', id: string, created_at: Date, updated_at: Date, type: Group_Post_Type_Enum, resolved: boolean, content: string, comments: Array<{ __typename?: 'group_post_comment', id: string, comment: { __typename?: 'comments', id: string, content: string, created_at: Date, author: { __typename?: 'users', id: string, name: string, image?: Maybe<string> } } }>, group: { __typename?: 'groups', id: string, short_id: string, name: string, created_at: Date, description?: Maybe<string>, public: boolean, memberships_aggregate: { __typename?: 'group_members_aggregate', aggregate?: Maybe<{ __typename?: 'group_members_aggregate_fields', count: number }> }, thing_relations_aggregate: { __typename?: 'group_thing_aggregate', aggregate?: Maybe<{ __typename?: 'group_thing_aggregate_fields', count: number }> } }, author: { __typename?: 'users', id: string, name: string, image?: Maybe<string> } }>, group_thing?: Maybe<{ __typename?: 'group_thing', id: string, thing: { __typename?: 'things', id: string, name: string, description: string, category?: Maybe<string>, type: Thing_Type_Enum, expiry?: Maybe<any>, short_id: string, images: Array<{ __typename?: 'thing_images', id: string, description: string, order: number, file: { __typename?: 'file_uploads', id: string, name: string, url: string, mime_type?: Maybe<string>, size: number } }>, owner: { __typename?: 'users', id: string, name: string, image?: Maybe<string> } } }>, group_member?: Maybe<{ __typename?: 'group_members', id: string, role: Group_Role_Enum, created_at: Date, group: { __typename?: 'groups', id: string, short_id: string, name: string }, user: { __typename?: 'users', id: string, name: string, image?: Maybe<string> } }> } }> }> };

export type ChatMessageCardFragment = { __typename?: 'chat_messages', id: string, sender_id: string, message: string, created_at: Date, entity?: Maybe<{ __typename?: 'entities', id: string, group?: Maybe<{ __typename?: 'groups', id: string, short_id: string, name: string }>, thing?: Maybe<{ __typename?: 'things', id: string, short_id: string, name: string, images: Array<{ __typename?: 'thing_images', file: { __typename?: 'file_uploads', url: string } }> }>, user?: Maybe<{ __typename?: 'users', id: string, name: string, image?: Maybe<string> }>, group_join_request?: Maybe<{ __typename?: 'group_join_requests', id: string, response?: Maybe<string>, group: { __typename?: 'groups', id: string, short_id: string, name: string } }>, group_post_comment?: Maybe<{ __typename?: 'group_post_comment', id: string, post: { __typename?: 'group_posts', id: string, author_id: string, group: { __typename?: 'groups', id: string, short_id: string, name: string } }, comment: { __typename?: 'comments', id: string, content: string, created_at: Date, author: { __typename?: 'users', id: string, name: string, image?: Maybe<string> } } }>, group_post?: Maybe<{ __typename?: 'group_posts', id: string, group: { __typename?: 'groups', id: string, short_id: string, name: string } }>, group_thing?: Maybe<{ __typename?: 'group_thing', id: string, thing: { __typename?: 'things', id: string, short_id: string, name: string, images: Array<{ __typename?: 'thing_images', file: { __typename?: 'file_uploads', url: string } }> }, group: { __typename?: 'groups', id: string, short_id: string, name: string } }>, group_member?: Maybe<{ __typename?: 'group_members', user: { __typename?: 'users', id: string, name: string, image?: Maybe<string> }, group: { __typename?: 'groups', id: string, short_id: string, name: string } }> }> };

export type ChatGroupCardFragment = { __typename?: 'chat_groups', id: string, name: string, members: Array<{ __typename?: 'chat_group_members', user: { __typename?: 'users', id: string, name: string, image?: Maybe<string> } }>, messages: Array<{ __typename?: 'chat_messages', message: string, sender: { __typename?: 'users', id: string, name: string, image?: Maybe<string> } }> };

export type ChatMessagesQueryVariables = Exact<{
  where: Chat_Messages_Bool_Exp;
  limit: Scalars['Int'];
}>;


export type ChatMessagesQuery = { __typename?: 'query_root', chat_messages: Array<{ __typename?: 'chat_messages', id: string, sender_id: string, message: string, created_at: Date, entity?: Maybe<{ __typename?: 'entities', id: string, group?: Maybe<{ __typename?: 'groups', id: string, short_id: string, name: string }>, thing?: Maybe<{ __typename?: 'things', id: string, short_id: string, name: string, images: Array<{ __typename?: 'thing_images', file: { __typename?: 'file_uploads', url: string } }> }>, user?: Maybe<{ __typename?: 'users', id: string, name: string, image?: Maybe<string> }>, group_join_request?: Maybe<{ __typename?: 'group_join_requests', id: string, response?: Maybe<string>, group: { __typename?: 'groups', id: string, short_id: string, name: string } }>, group_post_comment?: Maybe<{ __typename?: 'group_post_comment', id: string, post: { __typename?: 'group_posts', id: string, author_id: string, group: { __typename?: 'groups', id: string, short_id: string, name: string } }, comment: { __typename?: 'comments', id: string, content: string, created_at: Date, author: { __typename?: 'users', id: string, name: string, image?: Maybe<string> } } }>, group_post?: Maybe<{ __typename?: 'group_posts', id: string, group: { __typename?: 'groups', id: string, short_id: string, name: string } }>, group_thing?: Maybe<{ __typename?: 'group_thing', id: string, thing: { __typename?: 'things', id: string, short_id: string, name: string, images: Array<{ __typename?: 'thing_images', file: { __typename?: 'file_uploads', url: string } }> }, group: { __typename?: 'groups', id: string, short_id: string, name: string } }>, group_member?: Maybe<{ __typename?: 'group_members', user: { __typename?: 'users', id: string, name: string, image?: Maybe<string> }, group: { __typename?: 'groups', id: string, short_id: string, name: string } }> }> }> };

export type ChatGroupsSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type ChatGroupsSubscription = { __typename?: 'subscription_root', chat_groups: Array<{ __typename?: 'chat_groups', id: string, name: string, members: Array<{ __typename?: 'chat_group_members', user: { __typename?: 'users', id: string, name: string, image?: Maybe<string> } }>, messages: Array<{ __typename?: 'chat_messages', message: string, sender: { __typename?: 'users', id: string, name: string, image?: Maybe<string> } }> }> };

export type ChatMessagesFeedSubscriptionVariables = Exact<{
  where: Chat_Messages_Bool_Exp;
}>;


export type ChatMessagesFeedSubscription = { __typename?: 'subscription_root', chat_messages: Array<{ __typename?: 'chat_messages', id: string, sender_id: string, message: string, created_at: Date, entity?: Maybe<{ __typename?: 'entities', id: string, group?: Maybe<{ __typename?: 'groups', id: string, short_id: string, name: string }>, thing?: Maybe<{ __typename?: 'things', id: string, short_id: string, name: string, images: Array<{ __typename?: 'thing_images', file: { __typename?: 'file_uploads', url: string } }> }>, user?: Maybe<{ __typename?: 'users', id: string, name: string, image?: Maybe<string> }>, group_join_request?: Maybe<{ __typename?: 'group_join_requests', id: string, response?: Maybe<string>, group: { __typename?: 'groups', id: string, short_id: string, name: string } }>, group_post_comment?: Maybe<{ __typename?: 'group_post_comment', id: string, post: { __typename?: 'group_posts', id: string, author_id: string, group: { __typename?: 'groups', id: string, short_id: string, name: string } }, comment: { __typename?: 'comments', id: string, content: string, created_at: Date, author: { __typename?: 'users', id: string, name: string, image?: Maybe<string> } } }>, group_post?: Maybe<{ __typename?: 'group_posts', id: string, group: { __typename?: 'groups', id: string, short_id: string, name: string } }>, group_thing?: Maybe<{ __typename?: 'group_thing', id: string, thing: { __typename?: 'things', id: string, short_id: string, name: string, images: Array<{ __typename?: 'thing_images', file: { __typename?: 'file_uploads', url: string } }> }, group: { __typename?: 'groups', id: string, short_id: string, name: string } }>, group_member?: Maybe<{ __typename?: 'group_members', user: { __typename?: 'users', id: string, name: string, image?: Maybe<string> }, group: { __typename?: 'groups', id: string, short_id: string, name: string } }> }> }> };

export type CreateChatGroupMutationVariables = Exact<{
  input: CreateChatGroupInput;
}>;


export type CreateChatGroupMutation = { __typename?: 'mutation_root', createChatGroup?: Maybe<{ __typename?: 'CreateChatGroupResult', chat_group: { __typename?: 'chat_groups', id: string, name: string, members: Array<{ __typename?: 'chat_group_members', user: { __typename?: 'users', id: string, name: string, image?: Maybe<string> } }>, messages: Array<{ __typename?: 'chat_messages', message: string, sender: { __typename?: 'users', id: string, name: string, image?: Maybe<string> } }> } }> };

export type CreateChatMessageMutationVariables = Exact<{
  input: Chat_Messages_Insert_Input;
}>;


export type CreateChatMessageMutation = { __typename?: 'mutation_root', insert_chat_messages_one?: Maybe<{ __typename?: 'chat_messages', id: string, sender_id: string, message: string, created_at: Date, entity?: Maybe<{ __typename?: 'entities', id: string, group?: Maybe<{ __typename?: 'groups', id: string, short_id: string, name: string }>, thing?: Maybe<{ __typename?: 'things', id: string, short_id: string, name: string, images: Array<{ __typename?: 'thing_images', file: { __typename?: 'file_uploads', url: string } }> }>, user?: Maybe<{ __typename?: 'users', id: string, name: string, image?: Maybe<string> }>, group_join_request?: Maybe<{ __typename?: 'group_join_requests', id: string, response?: Maybe<string>, group: { __typename?: 'groups', id: string, short_id: string, name: string } }>, group_post_comment?: Maybe<{ __typename?: 'group_post_comment', id: string, post: { __typename?: 'group_posts', id: string, author_id: string, group: { __typename?: 'groups', id: string, short_id: string, name: string } }, comment: { __typename?: 'comments', id: string, content: string, created_at: Date, author: { __typename?: 'users', id: string, name: string, image?: Maybe<string> } } }>, group_post?: Maybe<{ __typename?: 'group_posts', id: string, group: { __typename?: 'groups', id: string, short_id: string, name: string } }>, group_thing?: Maybe<{ __typename?: 'group_thing', id: string, thing: { __typename?: 'things', id: string, short_id: string, name: string, images: Array<{ __typename?: 'thing_images', file: { __typename?: 'file_uploads', url: string } }> }, group: { __typename?: 'groups', id: string, short_id: string, name: string } }>, group_member?: Maybe<{ __typename?: 'group_members', user: { __typename?: 'users', id: string, name: string, image?: Maybe<string> }, group: { __typename?: 'groups', id: string, short_id: string, name: string } }> }> }> };

export type CommentCardFragment = { __typename?: 'comments', id: string, content: string, created_at: Date, author: { __typename?: 'users', id: string, name: string, image?: Maybe<string> } };

export type GroupMemberCardFragment = { __typename?: 'group_members', id: string, role: Group_Role_Enum, created_at: Date, user: { __typename?: 'users', id: string, name: string, image?: Maybe<string> } };

export type GroupMemberWithGroupCardFragment = { __typename?: 'group_members', id: string, role: Group_Role_Enum, created_at: Date, group: { __typename?: 'groups', id: string, short_id: string, name: string }, user: { __typename?: 'users', id: string, name: string, image?: Maybe<string> } };

export type GroupCardFragment = { __typename?: 'groups', id: string, short_id: string, name: string, created_at: Date, description?: Maybe<string>, public: boolean, memberships_aggregate: { __typename?: 'group_members_aggregate', aggregate?: Maybe<{ __typename?: 'group_members_aggregate_fields', count: number }> }, thing_relations_aggregate: { __typename?: 'group_thing_aggregate', aggregate?: Maybe<{ __typename?: 'group_thing_aggregate_fields', count: number }> } };

export type GroupDetailsFragment = { __typename?: 'groups', id: string, short_id: string, name: string, created_at: Date, description?: Maybe<string>, public: boolean, memberships: Array<{ __typename?: 'group_members', id: string, role: Group_Role_Enum, created_at: Date, user: { __typename?: 'users', id: string, name: string, image?: Maybe<string> } }>, memberships_aggregate: { __typename?: 'group_members_aggregate', aggregate?: Maybe<{ __typename?: 'group_members_aggregate_fields', count: number }> }, thing_relations_aggregate: { __typename?: 'group_thing_aggregate', aggregate?: Maybe<{ __typename?: 'group_thing_aggregate_fields', count: number }> } };

export type GroupJoinRequestCardFragment = { __typename?: 'group_join_requests', id: string, created_at: Date, updated_at: Date, status?: Maybe<Group_Join_Request_Status_Enum>, group_id: string, message: string, user: { __typename?: 'users', id: string, name: string, image?: Maybe<string> } };

export type GroupJoinTokenCardFragment = { __typename?: 'group_join_tokens', id: string, created_at: Date, updated_at: Date, token: string, disabled: boolean, note?: Maybe<string> };

export type GroupPostFragment = { __typename?: 'group_posts', id: string, created_at: Date, updated_at: Date, type: Group_Post_Type_Enum, resolved: boolean, content: string, comments: Array<{ __typename?: 'group_post_comment', id: string, comment: { __typename?: 'comments', id: string, content: string, created_at: Date, author: { __typename?: 'users', id: string, name: string, image?: Maybe<string> } } }>, group: { __typename?: 'groups', id: string, short_id: string, name: string, created_at: Date, description?: Maybe<string>, public: boolean, memberships_aggregate: { __typename?: 'group_members_aggregate', aggregate?: Maybe<{ __typename?: 'group_members_aggregate_fields', count: number }> }, thing_relations_aggregate: { __typename?: 'group_thing_aggregate', aggregate?: Maybe<{ __typename?: 'group_thing_aggregate_fields', count: number }> } }, author: { __typename?: 'users', id: string, name: string, image?: Maybe<string> } };

export type ListGroupsQueryVariables = Exact<{
  limit: Scalars['Int'];
  offset: Scalars['Int'];
  orderBy: Groups_Order_By;
  where?: Maybe<Groups_Bool_Exp>;
}>;


export type ListGroupsQuery = { __typename?: 'query_root', groups_aggregate: { __typename?: 'groups_aggregate', aggregate?: Maybe<{ __typename?: 'groups_aggregate_fields', count: number }> }, groups: Array<{ __typename?: 'groups', id: string, short_id: string, name: string, created_at: Date, description?: Maybe<string>, public: boolean, memberships_aggregate: { __typename?: 'group_members_aggregate', aggregate?: Maybe<{ __typename?: 'group_members_aggregate_fields', count: number }> }, thing_relations_aggregate: { __typename?: 'group_thing_aggregate', aggregate?: Maybe<{ __typename?: 'group_thing_aggregate_fields', count: number }> } }> };

export type GroupDetailsQueryVariables = Exact<{
  shortId: Scalars['String'];
}>;


export type GroupDetailsQuery = { __typename?: 'query_root', groups: Array<{ __typename?: 'groups', id: string, short_id: string, name: string, created_at: Date, description?: Maybe<string>, public: boolean, memberships: Array<{ __typename?: 'group_members', id: string, role: Group_Role_Enum, created_at: Date, user: { __typename?: 'users', id: string, name: string, image?: Maybe<string> } }>, memberships_aggregate: { __typename?: 'group_members_aggregate', aggregate?: Maybe<{ __typename?: 'group_members_aggregate_fields', count: number }> }, thing_relations_aggregate: { __typename?: 'group_thing_aggregate', aggregate?: Maybe<{ __typename?: 'group_thing_aggregate_fields', count: number }> } }> };

export type GroupJoinRequestsQueryVariables = Exact<{
  where: Group_Join_Requests_Bool_Exp;
}>;


export type GroupJoinRequestsQuery = { __typename?: 'query_root', group_join_requests: Array<{ __typename?: 'group_join_requests', id: string, created_at: Date, updated_at: Date, status?: Maybe<Group_Join_Request_Status_Enum>, group_id: string, message: string, user: { __typename?: 'users', id: string, name: string, image?: Maybe<string> } }> };

export type GroupJoinTokensQueryVariables = Exact<{
  where: Group_Join_Tokens_Bool_Exp;
}>;


export type GroupJoinTokensQuery = { __typename?: 'query_root', group_join_tokens: Array<{ __typename?: 'group_join_tokens', id: string, created_at: Date, updated_at: Date, token: string, disabled: boolean, note?: Maybe<string> }> };

export type GroupPostListQueryVariables = Exact<{
  where: Group_Posts_Bool_Exp;
  limit: Scalars['Int'];
  offset: Scalars['Int'];
  orderBy?: Maybe<Array<Group_Posts_Order_By> | Group_Posts_Order_By>;
}>;


export type GroupPostListQuery = { __typename?: 'query_root', group_posts: Array<{ __typename?: 'group_posts', id: string, created_at: Date, updated_at: Date, type: Group_Post_Type_Enum, resolved: boolean, content: string, comments: Array<{ __typename?: 'group_post_comment', id: string, comment: { __typename?: 'comments', id: string, content: string, created_at: Date, author: { __typename?: 'users', id: string, name: string, image?: Maybe<string> } } }>, group: { __typename?: 'groups', id: string, short_id: string, name: string, created_at: Date, description?: Maybe<string>, public: boolean, memberships_aggregate: { __typename?: 'group_members_aggregate', aggregate?: Maybe<{ __typename?: 'group_members_aggregate_fields', count: number }> }, thing_relations_aggregate: { __typename?: 'group_thing_aggregate', aggregate?: Maybe<{ __typename?: 'group_thing_aggregate_fields', count: number }> } }, author: { __typename?: 'users', id: string, name: string, image?: Maybe<string> } }>, group_posts_aggregate: { __typename?: 'group_posts_aggregate', aggregate?: Maybe<{ __typename?: 'group_posts_aggregate_fields', count: number }> } };

export type ActivityListQueryVariables = Exact<{
  offset?: Maybe<Scalars['Int']>;
}>;


export type ActivityListQuery = { __typename?: 'query_root', activities: Array<{ __typename?: 'activities', id: string, created_at: Date, verb: Activity_Verb_Enum, entity: { __typename?: 'entities', id: string, group?: Maybe<{ __typename?: 'groups', id: string, short_id: string, name: string }>, thing?: Maybe<{ __typename?: 'things', id: string, short_id: string, name: string, images: Array<{ __typename?: 'thing_images', file: { __typename?: 'file_uploads', url: string } }> }>, user?: Maybe<{ __typename?: 'users', id: string, name: string, image?: Maybe<string> }>, group_join_request?: Maybe<{ __typename?: 'group_join_requests', id: string, response?: Maybe<string>, group: { __typename?: 'groups', id: string, short_id: string, name: string } }>, group_post_comment?: Maybe<{ __typename?: 'group_post_comment', id: string, post: { __typename?: 'group_posts', id: string, author_id: string, group: { __typename?: 'groups', id: string, short_id: string, name: string } }, comment: { __typename?: 'comments', id: string, content: string, created_at: Date, author: { __typename?: 'users', id: string, name: string, image?: Maybe<string> } } }>, group_post?: Maybe<{ __typename?: 'group_posts', id: string, group: { __typename?: 'groups', id: string, short_id: string, name: string } }>, group_thing?: Maybe<{ __typename?: 'group_thing', id: string, thing: { __typename?: 'things', id: string, short_id: string, name: string, images: Array<{ __typename?: 'thing_images', file: { __typename?: 'file_uploads', url: string } }> }, group: { __typename?: 'groups', id: string, short_id: string, name: string } }>, group_member?: Maybe<{ __typename?: 'group_members', user: { __typename?: 'users', id: string, name: string, image?: Maybe<string> }, group: { __typename?: 'groups', id: string, short_id: string, name: string } }> }, secondary_entity?: Maybe<{ __typename?: 'entities', id: string, group?: Maybe<{ __typename?: 'groups', id: string, short_id: string, name: string }>, thing?: Maybe<{ __typename?: 'things', id: string, short_id: string, name: string, images: Array<{ __typename?: 'thing_images', file: { __typename?: 'file_uploads', url: string } }> }>, user?: Maybe<{ __typename?: 'users', id: string, name: string, image?: Maybe<string> }>, group_join_request?: Maybe<{ __typename?: 'group_join_requests', id: string, response?: Maybe<string>, group: { __typename?: 'groups', id: string, short_id: string, name: string } }>, group_post_comment?: Maybe<{ __typename?: 'group_post_comment', id: string, post: { __typename?: 'group_posts', id: string, author_id: string, group: { __typename?: 'groups', id: string, short_id: string, name: string } }, comment: { __typename?: 'comments', id: string, content: string, created_at: Date, author: { __typename?: 'users', id: string, name: string, image?: Maybe<string> } } }>, group_post?: Maybe<{ __typename?: 'group_posts', id: string, group: { __typename?: 'groups', id: string, short_id: string, name: string } }>, group_thing?: Maybe<{ __typename?: 'group_thing', id: string, thing: { __typename?: 'things', id: string, short_id: string, name: string, images: Array<{ __typename?: 'thing_images', file: { __typename?: 'file_uploads', url: string } }> }, group: { __typename?: 'groups', id: string, short_id: string, name: string } }>, group_member?: Maybe<{ __typename?: 'group_members', user: { __typename?: 'users', id: string, name: string, image?: Maybe<string> }, group: { __typename?: 'groups', id: string, short_id: string, name: string } }> }>, actor?: Maybe<{ __typename?: 'users', id: string, name: string, image?: Maybe<string> }> }> };

export type CreateGroupMutationVariables = Exact<{
  input: CreateGroupInput;
}>;


export type CreateGroupMutation = { __typename?: 'mutation_root', createGroup: { __typename?: 'CreateGroupResult', group: { __typename?: 'groups', id: string, short_id: string, name: string, created_at: Date, description?: Maybe<string>, public: boolean, memberships_aggregate: { __typename?: 'group_members_aggregate', aggregate?: Maybe<{ __typename?: 'group_members_aggregate_fields', count: number }> }, thing_relations_aggregate: { __typename?: 'group_thing_aggregate', aggregate?: Maybe<{ __typename?: 'group_thing_aggregate_fields', count: number }> } } } };

export type UpdateGroupMutationVariables = Exact<{
  id: Scalars['uuid'];
  input: Groups_Set_Input;
}>;


export type UpdateGroupMutation = { __typename?: 'mutation_root', update_groups_by_pk?: Maybe<{ __typename?: 'groups', id: string, short_id: string, name: string, created_at: Date, description?: Maybe<string>, public: boolean, memberships: Array<{ __typename?: 'group_members', id: string, role: Group_Role_Enum, created_at: Date, user: { __typename?: 'users', id: string, name: string, image?: Maybe<string> } }>, memberships_aggregate: { __typename?: 'group_members_aggregate', aggregate?: Maybe<{ __typename?: 'group_members_aggregate_fields', count: number }> }, thing_relations_aggregate: { __typename?: 'group_thing_aggregate', aggregate?: Maybe<{ __typename?: 'group_thing_aggregate_fields', count: number }> } }> };

export type DeleteGroupMutationVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type DeleteGroupMutation = { __typename?: 'mutation_root', delete_groups_by_pk?: Maybe<{ __typename?: 'groups', id: string, short_id: string, name: string, created_at: Date, description?: Maybe<string>, public: boolean, memberships_aggregate: { __typename?: 'group_members_aggregate', aggregate?: Maybe<{ __typename?: 'group_members_aggregate_fields', count: number }> }, thing_relations_aggregate: { __typename?: 'group_thing_aggregate', aggregate?: Maybe<{ __typename?: 'group_thing_aggregate_fields', count: number }> } }> };

export type CreateGroupPostMutationVariables = Exact<{
  input: Group_Posts_Insert_Input;
}>;


export type CreateGroupPostMutation = { __typename?: 'mutation_root', insert_group_posts_one?: Maybe<{ __typename?: 'group_posts', id: string, created_at: Date, updated_at: Date, type: Group_Post_Type_Enum, resolved: boolean, content: string, comments: Array<{ __typename?: 'group_post_comment', id: string, comment: { __typename?: 'comments', id: string, content: string, created_at: Date, author: { __typename?: 'users', id: string, name: string, image?: Maybe<string> } } }>, group: { __typename?: 'groups', id: string, short_id: string, name: string, created_at: Date, description?: Maybe<string>, public: boolean, memberships_aggregate: { __typename?: 'group_members_aggregate', aggregate?: Maybe<{ __typename?: 'group_members_aggregate_fields', count: number }> }, thing_relations_aggregate: { __typename?: 'group_thing_aggregate', aggregate?: Maybe<{ __typename?: 'group_thing_aggregate_fields', count: number }> } }, author: { __typename?: 'users', id: string, name: string, image?: Maybe<string> } }> };

export type UpdateGroupPostMutationVariables = Exact<{
  id: Scalars['uuid'];
  input: Group_Posts_Set_Input;
}>;


export type UpdateGroupPostMutation = { __typename?: 'mutation_root', update_group_posts_by_pk?: Maybe<{ __typename?: 'group_posts', id: string, created_at: Date, updated_at: Date, type: Group_Post_Type_Enum, resolved: boolean, content: string, comments: Array<{ __typename?: 'group_post_comment', id: string, comment: { __typename?: 'comments', id: string, content: string, created_at: Date, author: { __typename?: 'users', id: string, name: string, image?: Maybe<string> } } }>, group: { __typename?: 'groups', id: string, short_id: string, name: string, created_at: Date, description?: Maybe<string>, public: boolean, memberships_aggregate: { __typename?: 'group_members_aggregate', aggregate?: Maybe<{ __typename?: 'group_members_aggregate_fields', count: number }> }, thing_relations_aggregate: { __typename?: 'group_thing_aggregate', aggregate?: Maybe<{ __typename?: 'group_thing_aggregate_fields', count: number }> } }, author: { __typename?: 'users', id: string, name: string, image?: Maybe<string> } }> };

export type CreateGroupPostCommentMutationVariables = Exact<{
  groupPostId: Scalars['uuid'];
  input: Comments_Insert_Input;
}>;


export type CreateGroupPostCommentMutation = { __typename?: 'mutation_root', insert_group_post_comment_one?: Maybe<{ __typename?: 'group_post_comment', comment: { __typename?: 'comments', id: string, content: string, created_at: Date, author: { __typename?: 'users', id: string, name: string, image?: Maybe<string> } }, post: { __typename?: 'group_posts', id: string, created_at: Date, updated_at: Date, type: Group_Post_Type_Enum, resolved: boolean, content: string, comments: Array<{ __typename?: 'group_post_comment', id: string, comment: { __typename?: 'comments', id: string, content: string, created_at: Date, author: { __typename?: 'users', id: string, name: string, image?: Maybe<string> } } }>, group: { __typename?: 'groups', id: string, short_id: string, name: string, created_at: Date, description?: Maybe<string>, public: boolean, memberships_aggregate: { __typename?: 'group_members_aggregate', aggregate?: Maybe<{ __typename?: 'group_members_aggregate_fields', count: number }> }, thing_relations_aggregate: { __typename?: 'group_thing_aggregate', aggregate?: Maybe<{ __typename?: 'group_thing_aggregate_fields', count: number }> } }, author: { __typename?: 'users', id: string, name: string, image?: Maybe<string> } } }> };

export type LeaveGroupMutationVariables = Exact<{
  groupId: Scalars['uuid'];
  userId: Scalars['uuid'];
}>;


export type LeaveGroupMutation = { __typename?: 'mutation_root', delete_group_members?: Maybe<{ __typename?: 'group_members_mutation_response', affected_rows: number }> };

export type JoinGroupMutationVariables = Exact<{
  groupId: Scalars['uuid'];
}>;


export type JoinGroupMutation = { __typename?: 'mutation_root', insert_group_members_one?: Maybe<{ __typename?: 'group_members', id: string, role: Group_Role_Enum, created_at: Date, user: { __typename?: 'users', id: string, name: string, image?: Maybe<string>, created_at: Date, memberships: Array<{ __typename?: 'group_members', id: string, role: Group_Role_Enum, group: { __typename?: 'groups', id: string, short_id: string, name: string, created_at: Date, description?: Maybe<string>, public: boolean, memberships_aggregate: { __typename?: 'group_members_aggregate', aggregate?: Maybe<{ __typename?: 'group_members_aggregate_fields', count: number }> }, thing_relations_aggregate: { __typename?: 'group_thing_aggregate', aggregate?: Maybe<{ __typename?: 'group_thing_aggregate_fields', count: number }> } } }>, private_info?: Maybe<{ __typename?: 'user_private', email?: Maybe<string> }>, group_join_requests: Array<{ __typename?: 'group_join_requests', id: string, created_at: Date, updated_at: Date, status?: Maybe<Group_Join_Request_Status_Enum>, group_id: string, message: string, user: { __typename?: 'users', id: string, name: string, image?: Maybe<string> } }> } }> };

export type JoinGroupWithTokenMutationVariables = Exact<{
  input: JoinGroupInput;
}>;


export type JoinGroupWithTokenMutation = { __typename?: 'mutation_root', joinGroup?: Maybe<{ __typename?: 'JoinGroupResult', group: { __typename?: 'groups', id: string }, user: { __typename?: 'users', created_at: Date, id: string, name: string, image?: Maybe<string>, memberships: Array<{ __typename?: 'group_members', id: string, role: Group_Role_Enum, group: { __typename?: 'groups', id: string, short_id: string, name: string, created_at: Date, description?: Maybe<string>, public: boolean, memberships_aggregate: { __typename?: 'group_members_aggregate', aggregate?: Maybe<{ __typename?: 'group_members_aggregate_fields', count: number }> }, thing_relations_aggregate: { __typename?: 'group_thing_aggregate', aggregate?: Maybe<{ __typename?: 'group_thing_aggregate_fields', count: number }> } } }>, private_info?: Maybe<{ __typename?: 'user_private', email?: Maybe<string> }>, group_join_requests: Array<{ __typename?: 'group_join_requests', id: string, created_at: Date, updated_at: Date, status?: Maybe<Group_Join_Request_Status_Enum>, group_id: string, message: string, user: { __typename?: 'users', id: string, name: string, image?: Maybe<string> } }> } }> };

export type RequestJoinGroupMutationVariables = Exact<{
  input: RequestJoinGroupInput;
}>;


export type RequestJoinGroupMutation = { __typename?: 'mutation_root', requestJoinGroup?: Maybe<{ __typename?: 'RequestJoinGroupResult', group: { __typename?: 'groups', id: string, short_id: string, name: string, created_at: Date, description?: Maybe<string>, public: boolean, memberships_aggregate: { __typename?: 'group_members_aggregate', aggregate?: Maybe<{ __typename?: 'group_members_aggregate_fields', count: number }> }, thing_relations_aggregate: { __typename?: 'group_thing_aggregate', aggregate?: Maybe<{ __typename?: 'group_thing_aggregate_fields', count: number }> } }, user: { __typename?: 'users', id: string, group_join_requests: Array<{ __typename?: 'group_join_requests', id: string, created_at: Date, updated_at: Date, status?: Maybe<Group_Join_Request_Status_Enum>, group_id: string, message: string, user: { __typename?: 'users', id: string, name: string, image?: Maybe<string> } }> } }> };

export type CancelJoinRequestMutationVariables = Exact<{
  requestId: Scalars['uuid'];
}>;


export type CancelJoinRequestMutation = { __typename?: 'mutation_root', delete_group_join_requests?: Maybe<{ __typename?: 'group_join_requests_mutation_response', returning: Array<{ __typename?: 'group_join_requests', user: { __typename?: 'users', id: string, group_join_requests: Array<{ __typename?: 'group_join_requests', id: string, created_at: Date, updated_at: Date, status?: Maybe<Group_Join_Request_Status_Enum>, group_id: string, message: string, user: { __typename?: 'users', id: string, name: string, image?: Maybe<string> } }> } }> }> };

export type HandleJoinRequestMutationVariables = Exact<{
  input: HandleJoinRequestInput;
}>;


export type HandleJoinRequestMutation = { __typename?: 'mutation_root', handleJoinRequest: { __typename?: 'HandleJoinRequestResult', join_request: { __typename?: 'group_join_requests', id: string, created_at: Date, updated_at: Date, status?: Maybe<Group_Join_Request_Status_Enum>, group_id: string, message: string, user: { __typename?: 'users', id: string, name: string, image?: Maybe<string> } } } };

export type CreateJoinTokenMutationVariables = Exact<{
  input: Group_Join_Tokens_Insert_Input;
}>;


export type CreateJoinTokenMutation = { __typename?: 'mutation_root', insert_group_join_tokens_one?: Maybe<{ __typename?: 'group_join_tokens', id: string, created_at: Date, updated_at: Date, token: string, disabled: boolean, note?: Maybe<string> }> };

export type DeleteJoinTokenMutationVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type DeleteJoinTokenMutation = { __typename?: 'mutation_root', delete_group_join_tokens_by_pk?: Maybe<{ __typename?: 'group_join_tokens', id: string, created_at: Date, updated_at: Date, token: string, disabled: boolean, note?: Maybe<string> }> };

export type UpdateJoinTokenMutationVariables = Exact<{
  id: Scalars['uuid'];
  input: Group_Join_Tokens_Set_Input;
}>;


export type UpdateJoinTokenMutation = { __typename?: 'mutation_root', update_group_join_tokens_by_pk?: Maybe<{ __typename?: 'group_join_tokens', id: string, created_at: Date, updated_at: Date, token: string, disabled: boolean, note?: Maybe<string> }> };

export type SearchCountsQueryVariables = Exact<{
  thingWhere: Things_Bool_Exp;
  groupWhere: Groups_Bool_Exp;
  userWhere: Users_Bool_Exp;
}>;


export type SearchCountsQuery = { __typename?: 'query_root', users_aggregate: { __typename?: 'users_aggregate', aggregate?: Maybe<{ __typename?: 'users_aggregate_fields', count: number }> }, groups_aggregate: { __typename?: 'groups_aggregate', aggregate?: Maybe<{ __typename?: 'groups_aggregate_fields', count: number }> }, things_aggregate: { __typename?: 'things_aggregate', aggregate?: Maybe<{ __typename?: 'things_aggregate_fields', count: number }> } };

export type ThingCardFragment = { __typename?: 'things', id: string, name: string, description: string, category?: Maybe<string>, type: Thing_Type_Enum, expiry?: Maybe<any>, short_id: string, images: Array<{ __typename?: 'thing_images', id: string, description: string, order: number, file: { __typename?: 'file_uploads', id: string, name: string, url: string, mime_type?: Maybe<string>, size: number } }>, owner: { __typename?: 'users', id: string, name: string, image?: Maybe<string> } };

export type ThingImageCardFragment = { __typename?: 'thing_images', id: string, description: string, order: number, file: { __typename?: 'file_uploads', id: string, name: string, url: string, mime_type?: Maybe<string>, size: number } };

export type ThingDetailsFragment = { __typename?: 'things', enabled: boolean, id: string, name: string, description: string, category?: Maybe<string>, type: Thing_Type_Enum, expiry?: Maybe<any>, short_id: string, group_relations: Array<{ __typename?: 'group_thing', id: string, group: { __typename?: 'groups', id: string, short_id: string, name: string, created_at: Date, description?: Maybe<string>, public: boolean, memberships_aggregate: { __typename?: 'group_members_aggregate', aggregate?: Maybe<{ __typename?: 'group_members_aggregate_fields', count: number }> }, thing_relations_aggregate: { __typename?: 'group_thing_aggregate', aggregate?: Maybe<{ __typename?: 'group_thing_aggregate_fields', count: number }> } } }>, images: Array<{ __typename?: 'thing_images', id: string, description: string, order: number, file: { __typename?: 'file_uploads', id: string, name: string, url: string, mime_type?: Maybe<string>, size: number } }>, owner: { __typename?: 'users', id: string, name: string, image?: Maybe<string> } };

export type ThingListQueryVariables = Exact<{
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Things_Order_By> | Things_Order_By>;
  where: Things_Bool_Exp;
}>;


export type ThingListQuery = { __typename?: 'query_root', things: Array<{ __typename?: 'things', id: string, name: string, description: string, category?: Maybe<string>, type: Thing_Type_Enum, expiry?: Maybe<any>, short_id: string, images: Array<{ __typename?: 'thing_images', id: string, description: string, order: number, file: { __typename?: 'file_uploads', id: string, name: string, url: string, mime_type?: Maybe<string>, size: number } }>, owner: { __typename?: 'users', id: string, name: string, image?: Maybe<string> } }>, things_aggregate: { __typename?: 'things_aggregate', aggregate?: Maybe<{ __typename?: 'things_aggregate_fields', count: number }> } };

export type ThingDetailsQueryVariables = Exact<{
  shortId: Scalars['String'];
}>;


export type ThingDetailsQuery = { __typename?: 'query_root', things: Array<{ __typename?: 'things', enabled: boolean, id: string, name: string, description: string, category?: Maybe<string>, type: Thing_Type_Enum, expiry?: Maybe<any>, short_id: string, group_relations: Array<{ __typename?: 'group_thing', id: string, group: { __typename?: 'groups', id: string, short_id: string, name: string, created_at: Date, description?: Maybe<string>, public: boolean, memberships_aggregate: { __typename?: 'group_members_aggregate', aggregate?: Maybe<{ __typename?: 'group_members_aggregate_fields', count: number }> }, thing_relations_aggregate: { __typename?: 'group_thing_aggregate', aggregate?: Maybe<{ __typename?: 'group_thing_aggregate_fields', count: number }> } } }>, images: Array<{ __typename?: 'thing_images', id: string, description: string, order: number, file: { __typename?: 'file_uploads', id: string, name: string, url: string, mime_type?: Maybe<string>, size: number } }>, owner: { __typename?: 'users', id: string, name: string, image?: Maybe<string> } }> };

export type CreateThingMutationVariables = Exact<{
  input: Things_Insert_Input;
}>;


export type CreateThingMutation = { __typename?: 'mutation_root', insert_things_one?: Maybe<{ __typename?: 'things', enabled: boolean, id: string, name: string, description: string, category?: Maybe<string>, type: Thing_Type_Enum, expiry?: Maybe<any>, short_id: string, group_relations: Array<{ __typename?: 'group_thing', id: string, group: { __typename?: 'groups', id: string, short_id: string, name: string, created_at: Date, description?: Maybe<string>, public: boolean, memberships_aggregate: { __typename?: 'group_members_aggregate', aggregate?: Maybe<{ __typename?: 'group_members_aggregate_fields', count: number }> }, thing_relations_aggregate: { __typename?: 'group_thing_aggregate', aggregate?: Maybe<{ __typename?: 'group_thing_aggregate_fields', count: number }> } } }>, images: Array<{ __typename?: 'thing_images', id: string, description: string, order: number, file: { __typename?: 'file_uploads', id: string, name: string, url: string, mime_type?: Maybe<string>, size: number } }>, owner: { __typename?: 'users', id: string, name: string, image?: Maybe<string> } }> };

export type UpdateThingMutationVariables = Exact<{
  input: UpdateThingInput;
}>;


export type UpdateThingMutation = { __typename?: 'mutation_root', updateThing?: Maybe<{ __typename?: 'UpdateThingResult', thing: { __typename?: 'things', enabled: boolean, id: string, name: string, description: string, category?: Maybe<string>, type: Thing_Type_Enum, expiry?: Maybe<any>, short_id: string, group_relations: Array<{ __typename?: 'group_thing', id: string, group: { __typename?: 'groups', id: string, short_id: string, name: string, created_at: Date, description?: Maybe<string>, public: boolean, memberships_aggregate: { __typename?: 'group_members_aggregate', aggregate?: Maybe<{ __typename?: 'group_members_aggregate_fields', count: number }> }, thing_relations_aggregate: { __typename?: 'group_thing_aggregate', aggregate?: Maybe<{ __typename?: 'group_thing_aggregate_fields', count: number }> } } }>, images: Array<{ __typename?: 'thing_images', id: string, description: string, order: number, file: { __typename?: 'file_uploads', id: string, name: string, url: string, mime_type?: Maybe<string>, size: number } }>, owner: { __typename?: 'users', id: string, name: string, image?: Maybe<string> } } }> };

export type DeleteThingMutationVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type DeleteThingMutation = { __typename?: 'mutation_root', delete_things_by_pk?: Maybe<{ __typename?: 'things', enabled: boolean, id: string, name: string, description: string, category?: Maybe<string>, type: Thing_Type_Enum, expiry?: Maybe<any>, short_id: string, group_relations: Array<{ __typename?: 'group_thing', id: string, group: { __typename?: 'groups', id: string, short_id: string, name: string, created_at: Date, description?: Maybe<string>, public: boolean, memberships_aggregate: { __typename?: 'group_members_aggregate', aggregate?: Maybe<{ __typename?: 'group_members_aggregate_fields', count: number }> }, thing_relations_aggregate: { __typename?: 'group_thing_aggregate', aggregate?: Maybe<{ __typename?: 'group_thing_aggregate_fields', count: number }> } } }>, images: Array<{ __typename?: 'thing_images', id: string, description: string, order: number, file: { __typename?: 'file_uploads', id: string, name: string, url: string, mime_type?: Maybe<string>, size: number } }>, owner: { __typename?: 'users', id: string, name: string, image?: Maybe<string> } }> };

export type FileUploadCardFragment = { __typename?: 'file_uploads', id: string, name: string, url: string, mime_type?: Maybe<string>, size: number };

export type InsertFileUploadMutationVariables = Exact<{
  input: File_Uploads_Insert_Input;
}>;


export type InsertFileUploadMutation = { __typename?: 'mutation_root', insert_file_uploads_one?: Maybe<{ __typename?: 'file_uploads', id: string, name: string, url: string, mime_type?: Maybe<string>, size: number }> };

export type UserCardFragment = { __typename?: 'users', id: string, name: string, image?: Maybe<string> };

export type UserDetailFragment = { __typename?: 'users', created_at: Date, id: string, name: string, image?: Maybe<string> };

export type UserJoinRequestsFragment = { __typename?: 'users', id: string, group_join_requests: Array<{ __typename?: 'group_join_requests', id: string, created_at: Date, updated_at: Date, status?: Maybe<Group_Join_Request_Status_Enum>, group_id: string, message: string, user: { __typename?: 'users', id: string, name: string, image?: Maybe<string> } }> };

export type UserPrivateDetailFragment = { __typename?: 'users', created_at: Date, id: string, name: string, image?: Maybe<string>, memberships: Array<{ __typename?: 'group_members', id: string, role: Group_Role_Enum, group: { __typename?: 'groups', id: string, short_id: string, name: string, created_at: Date, description?: Maybe<string>, public: boolean, memberships_aggregate: { __typename?: 'group_members_aggregate', aggregate?: Maybe<{ __typename?: 'group_members_aggregate_fields', count: number }> }, thing_relations_aggregate: { __typename?: 'group_thing_aggregate', aggregate?: Maybe<{ __typename?: 'group_thing_aggregate_fields', count: number }> } } }>, private_info?: Maybe<{ __typename?: 'user_private', email?: Maybe<string> }>, group_join_requests: Array<{ __typename?: 'group_join_requests', id: string, created_at: Date, updated_at: Date, status?: Maybe<Group_Join_Request_Status_Enum>, group_id: string, message: string, user: { __typename?: 'users', id: string, name: string, image?: Maybe<string> } }> };

export type UserListQueryVariables = Exact<{
  where?: Maybe<Users_Bool_Exp>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
}>;


export type UserListQuery = { __typename?: 'query_root', users: Array<{ __typename?: 'users', id: string, name: string, image?: Maybe<string> }>, users_aggregate: { __typename?: 'users_aggregate', aggregate?: Maybe<{ __typename?: 'users_aggregate_fields', count: number }> } };

export type UserPrivateDetailsQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type UserPrivateDetailsQuery = { __typename?: 'query_root', users_by_pk?: Maybe<{ __typename?: 'users', created_at: Date, id: string, name: string, image?: Maybe<string>, memberships: Array<{ __typename?: 'group_members', id: string, role: Group_Role_Enum, group: { __typename?: 'groups', id: string, short_id: string, name: string, created_at: Date, description?: Maybe<string>, public: boolean, memberships_aggregate: { __typename?: 'group_members_aggregate', aggregate?: Maybe<{ __typename?: 'group_members_aggregate_fields', count: number }> }, thing_relations_aggregate: { __typename?: 'group_thing_aggregate', aggregate?: Maybe<{ __typename?: 'group_thing_aggregate_fields', count: number }> } } }>, private_info?: Maybe<{ __typename?: 'user_private', email?: Maybe<string> }>, group_join_requests: Array<{ __typename?: 'group_join_requests', id: string, created_at: Date, updated_at: Date, status?: Maybe<Group_Join_Request_Status_Enum>, group_id: string, message: string, user: { __typename?: 'users', id: string, name: string, image?: Maybe<string> } }> }> };

export type NotificationsSubscriptionVariables = Exact<{
  userId: Scalars['uuid'];
}>;


export type NotificationsSubscription = { __typename?: 'subscription_root', notifications: Array<{ __typename?: 'notifications', id: string, read_at?: Maybe<Date>, created_at: Date, activity: { __typename?: 'activities', id: string, created_at: Date, verb: Activity_Verb_Enum, entity: { __typename?: 'entities', id: string, group?: Maybe<{ __typename?: 'groups', id: string, short_id: string, name: string }>, thing?: Maybe<{ __typename?: 'things', id: string, short_id: string, name: string, images: Array<{ __typename?: 'thing_images', file: { __typename?: 'file_uploads', url: string } }> }>, user?: Maybe<{ __typename?: 'users', id: string, name: string, image?: Maybe<string> }>, group_join_request?: Maybe<{ __typename?: 'group_join_requests', id: string, response?: Maybe<string>, group: { __typename?: 'groups', id: string, short_id: string, name: string } }>, group_post_comment?: Maybe<{ __typename?: 'group_post_comment', id: string, post: { __typename?: 'group_posts', id: string, author_id: string, group: { __typename?: 'groups', id: string, short_id: string, name: string } }, comment: { __typename?: 'comments', id: string, content: string, created_at: Date, author: { __typename?: 'users', id: string, name: string, image?: Maybe<string> } } }>, group_post?: Maybe<{ __typename?: 'group_posts', id: string, group: { __typename?: 'groups', id: string, short_id: string, name: string } }>, group_thing?: Maybe<{ __typename?: 'group_thing', id: string, thing: { __typename?: 'things', id: string, short_id: string, name: string, images: Array<{ __typename?: 'thing_images', file: { __typename?: 'file_uploads', url: string } }> }, group: { __typename?: 'groups', id: string, short_id: string, name: string } }>, group_member?: Maybe<{ __typename?: 'group_members', user: { __typename?: 'users', id: string, name: string, image?: Maybe<string> }, group: { __typename?: 'groups', id: string, short_id: string, name: string } }> }, secondary_entity?: Maybe<{ __typename?: 'entities', id: string, group?: Maybe<{ __typename?: 'groups', id: string, short_id: string, name: string }>, thing?: Maybe<{ __typename?: 'things', id: string, short_id: string, name: string, images: Array<{ __typename?: 'thing_images', file: { __typename?: 'file_uploads', url: string } }> }>, user?: Maybe<{ __typename?: 'users', id: string, name: string, image?: Maybe<string> }>, group_join_request?: Maybe<{ __typename?: 'group_join_requests', id: string, response?: Maybe<string>, group: { __typename?: 'groups', id: string, short_id: string, name: string } }>, group_post_comment?: Maybe<{ __typename?: 'group_post_comment', id: string, post: { __typename?: 'group_posts', id: string, author_id: string, group: { __typename?: 'groups', id: string, short_id: string, name: string } }, comment: { __typename?: 'comments', id: string, content: string, created_at: Date, author: { __typename?: 'users', id: string, name: string, image?: Maybe<string> } } }>, group_post?: Maybe<{ __typename?: 'group_posts', id: string, group: { __typename?: 'groups', id: string, short_id: string, name: string } }>, group_thing?: Maybe<{ __typename?: 'group_thing', id: string, thing: { __typename?: 'things', id: string, short_id: string, name: string, images: Array<{ __typename?: 'thing_images', file: { __typename?: 'file_uploads', url: string } }> }, group: { __typename?: 'groups', id: string, short_id: string, name: string } }>, group_member?: Maybe<{ __typename?: 'group_members', user: { __typename?: 'users', id: string, name: string, image?: Maybe<string> }, group: { __typename?: 'groups', id: string, short_id: string, name: string } }> }>, actor?: Maybe<{ __typename?: 'users', id: string, name: string, image?: Maybe<string> }> } }> };

export type MarkNotificationReadMutationVariables = Exact<{
  id: Scalars['uuid'];
  readAt: Scalars['timestamptz'];
}>;


export type MarkNotificationReadMutation = { __typename?: 'mutation_root', update_notifications_by_pk?: Maybe<{ __typename?: 'notifications', id: string, read_at?: Maybe<Date>, created_at: Date, activity: { __typename?: 'activities', id: string, created_at: Date, verb: Activity_Verb_Enum, entity: { __typename?: 'entities', id: string, group?: Maybe<{ __typename?: 'groups', id: string, short_id: string, name: string }>, thing?: Maybe<{ __typename?: 'things', id: string, short_id: string, name: string, images: Array<{ __typename?: 'thing_images', file: { __typename?: 'file_uploads', url: string } }> }>, user?: Maybe<{ __typename?: 'users', id: string, name: string, image?: Maybe<string> }>, group_join_request?: Maybe<{ __typename?: 'group_join_requests', id: string, response?: Maybe<string>, group: { __typename?: 'groups', id: string, short_id: string, name: string } }>, group_post_comment?: Maybe<{ __typename?: 'group_post_comment', id: string, post: { __typename?: 'group_posts', id: string, author_id: string, group: { __typename?: 'groups', id: string, short_id: string, name: string } }, comment: { __typename?: 'comments', id: string, content: string, created_at: Date, author: { __typename?: 'users', id: string, name: string, image?: Maybe<string> } } }>, group_post?: Maybe<{ __typename?: 'group_posts', id: string, group: { __typename?: 'groups', id: string, short_id: string, name: string } }>, group_thing?: Maybe<{ __typename?: 'group_thing', id: string, thing: { __typename?: 'things', id: string, short_id: string, name: string, images: Array<{ __typename?: 'thing_images', file: { __typename?: 'file_uploads', url: string } }> }, group: { __typename?: 'groups', id: string, short_id: string, name: string } }>, group_member?: Maybe<{ __typename?: 'group_members', user: { __typename?: 'users', id: string, name: string, image?: Maybe<string> }, group: { __typename?: 'groups', id: string, short_id: string, name: string } }> }, secondary_entity?: Maybe<{ __typename?: 'entities', id: string, group?: Maybe<{ __typename?: 'groups', id: string, short_id: string, name: string }>, thing?: Maybe<{ __typename?: 'things', id: string, short_id: string, name: string, images: Array<{ __typename?: 'thing_images', file: { __typename?: 'file_uploads', url: string } }> }>, user?: Maybe<{ __typename?: 'users', id: string, name: string, image?: Maybe<string> }>, group_join_request?: Maybe<{ __typename?: 'group_join_requests', id: string, response?: Maybe<string>, group: { __typename?: 'groups', id: string, short_id: string, name: string } }>, group_post_comment?: Maybe<{ __typename?: 'group_post_comment', id: string, post: { __typename?: 'group_posts', id: string, author_id: string, group: { __typename?: 'groups', id: string, short_id: string, name: string } }, comment: { __typename?: 'comments', id: string, content: string, created_at: Date, author: { __typename?: 'users', id: string, name: string, image?: Maybe<string> } } }>, group_post?: Maybe<{ __typename?: 'group_posts', id: string, group: { __typename?: 'groups', id: string, short_id: string, name: string } }>, group_thing?: Maybe<{ __typename?: 'group_thing', id: string, thing: { __typename?: 'things', id: string, short_id: string, name: string, images: Array<{ __typename?: 'thing_images', file: { __typename?: 'file_uploads', url: string } }> }, group: { __typename?: 'groups', id: string, short_id: string, name: string } }>, group_member?: Maybe<{ __typename?: 'group_members', user: { __typename?: 'users', id: string, name: string, image?: Maybe<string> }, group: { __typename?: 'groups', id: string, short_id: string, name: string } }> }>, actor?: Maybe<{ __typename?: 'users', id: string, name: string, image?: Maybe<string> }> } }> };

export type MarkAllNotificationsReadMutationVariables = Exact<{
  userId: Scalars['uuid'];
  readAt: Scalars['timestamptz'];
}>;


export type MarkAllNotificationsReadMutation = { __typename?: 'mutation_root', update_notifications?: Maybe<{ __typename?: 'notifications_mutation_response', affected_rows: number, returning: Array<{ __typename?: 'notifications', id: string, read_at?: Maybe<Date>, created_at: Date, activity: { __typename?: 'activities', id: string, created_at: Date, verb: Activity_Verb_Enum, entity: { __typename?: 'entities', id: string, group?: Maybe<{ __typename?: 'groups', id: string, short_id: string, name: string }>, thing?: Maybe<{ __typename?: 'things', id: string, short_id: string, name: string, images: Array<{ __typename?: 'thing_images', file: { __typename?: 'file_uploads', url: string } }> }>, user?: Maybe<{ __typename?: 'users', id: string, name: string, image?: Maybe<string> }>, group_join_request?: Maybe<{ __typename?: 'group_join_requests', id: string, response?: Maybe<string>, group: { __typename?: 'groups', id: string, short_id: string, name: string } }>, group_post_comment?: Maybe<{ __typename?: 'group_post_comment', id: string, post: { __typename?: 'group_posts', id: string, author_id: string, group: { __typename?: 'groups', id: string, short_id: string, name: string } }, comment: { __typename?: 'comments', id: string, content: string, created_at: Date, author: { __typename?: 'users', id: string, name: string, image?: Maybe<string> } } }>, group_post?: Maybe<{ __typename?: 'group_posts', id: string, group: { __typename?: 'groups', id: string, short_id: string, name: string } }>, group_thing?: Maybe<{ __typename?: 'group_thing', id: string, thing: { __typename?: 'things', id: string, short_id: string, name: string, images: Array<{ __typename?: 'thing_images', file: { __typename?: 'file_uploads', url: string } }> }, group: { __typename?: 'groups', id: string, short_id: string, name: string } }>, group_member?: Maybe<{ __typename?: 'group_members', user: { __typename?: 'users', id: string, name: string, image?: Maybe<string> }, group: { __typename?: 'groups', id: string, short_id: string, name: string } }> }, secondary_entity?: Maybe<{ __typename?: 'entities', id: string, group?: Maybe<{ __typename?: 'groups', id: string, short_id: string, name: string }>, thing?: Maybe<{ __typename?: 'things', id: string, short_id: string, name: string, images: Array<{ __typename?: 'thing_images', file: { __typename?: 'file_uploads', url: string } }> }>, user?: Maybe<{ __typename?: 'users', id: string, name: string, image?: Maybe<string> }>, group_join_request?: Maybe<{ __typename?: 'group_join_requests', id: string, response?: Maybe<string>, group: { __typename?: 'groups', id: string, short_id: string, name: string } }>, group_post_comment?: Maybe<{ __typename?: 'group_post_comment', id: string, post: { __typename?: 'group_posts', id: string, author_id: string, group: { __typename?: 'groups', id: string, short_id: string, name: string } }, comment: { __typename?: 'comments', id: string, content: string, created_at: Date, author: { __typename?: 'users', id: string, name: string, image?: Maybe<string> } } }>, group_post?: Maybe<{ __typename?: 'group_posts', id: string, group: { __typename?: 'groups', id: string, short_id: string, name: string } }>, group_thing?: Maybe<{ __typename?: 'group_thing', id: string, thing: { __typename?: 'things', id: string, short_id: string, name: string, images: Array<{ __typename?: 'thing_images', file: { __typename?: 'file_uploads', url: string } }> }, group: { __typename?: 'groups', id: string, short_id: string, name: string } }>, group_member?: Maybe<{ __typename?: 'group_members', user: { __typename?: 'users', id: string, name: string, image?: Maybe<string> }, group: { __typename?: 'groups', id: string, short_id: string, name: string } }> }>, actor?: Maybe<{ __typename?: 'users', id: string, name: string, image?: Maybe<string> }> } }> }> };

export type RegisterUserMutationVariables = Exact<{
  input: CredentialsInput;
}>;


export type RegisterUserMutation = { __typename?: 'mutation_root', registerCredentials?: Maybe<{ __typename?: 'RegistrationResult', user_id: string }> };

export const UserCardFragmentDoc = gql`
    fragment UserCard on users {
  id
  name
  image
}
    `;
export const GroupCardFragmentDoc = gql`
    fragment GroupCard on groups {
  id
  short_id
  name
  created_at
  description
  public
  memberships_aggregate {
    aggregate {
      count
    }
  }
  thing_relations_aggregate(
    where: {thing: {enabled: {_eq: true}, _or: [{expiry: {_gt: "now()"}}, {expiry: {_is_null: true}}]}}
  ) {
    aggregate {
      count
    }
  }
}
    `;
export const CommentCardFragmentDoc = gql`
    fragment CommentCard on comments {
  id
  content
  created_at
  author {
    ...UserCard
  }
}
    ${UserCardFragmentDoc}`;
export const GroupPostFragmentDoc = gql`
    fragment GroupPost on group_posts {
  id
  created_at
  updated_at
  type
  resolved
  content
  comments(order_by: [{created_at: desc}]) {
    id
    comment {
      ...CommentCard
    }
  }
  group {
    ...GroupCard
  }
  author {
    ...UserCard
  }
}
    ${CommentCardFragmentDoc}
${GroupCardFragmentDoc}
${UserCardFragmentDoc}`;
export const FileUploadCardFragmentDoc = gql`
    fragment FileUploadCard on file_uploads {
  id
  name
  url
  mime_type
  size
}
    `;
export const ThingImageCardFragmentDoc = gql`
    fragment ThingImageCard on thing_images {
  id
  description
  order
  file {
    ...FileUploadCard
  }
}
    ${FileUploadCardFragmentDoc}`;
export const ThingCardFragmentDoc = gql`
    fragment ThingCard on things {
  id
  name
  description
  category
  type
  expiry
  short_id
  images {
    ...ThingImageCard
  }
  owner {
    ...UserCard
  }
}
    ${ThingImageCardFragmentDoc}
${UserCardFragmentDoc}`;
export const GroupMemberCardFragmentDoc = gql`
    fragment GroupMemberCard on group_members {
  id
  role
  created_at
  user {
    ...UserCard
  }
}
    ${UserCardFragmentDoc}`;
export const GroupMemberWithGroupCardFragmentDoc = gql`
    fragment GroupMemberWithGroupCard on group_members {
  ...GroupMemberCard
  group {
    id
    short_id
    name
  }
}
    ${GroupMemberCardFragmentDoc}`;
export const DetailedEntityFragmentDoc = gql`
    fragment DetailedEntity on entities {
  id
  group {
    ...GroupCard
  }
  user {
    ...UserCard
  }
  group_post {
    ...GroupPost
  }
  group_thing {
    id
    thing {
      ...ThingCard
    }
  }
  group_member {
    ...GroupMemberWithGroupCard
  }
}
    ${GroupCardFragmentDoc}
${UserCardFragmentDoc}
${GroupPostFragmentDoc}
${ThingCardFragmentDoc}
${GroupMemberWithGroupCardFragmentDoc}`;
export const DetailedActivityFragmentDoc = gql`
    fragment DetailedActivity on activities {
  id
  created_at
  verb
  actor {
    ...UserCard
  }
  entity {
    ...DetailedEntity
  }
}
    ${UserCardFragmentDoc}
${DetailedEntityFragmentDoc}`;
export const GroupRefFragmentDoc = gql`
    fragment GroupRef on groups {
  id
  short_id
  name
}
    `;
export const ThingRefFragmentDoc = gql`
    fragment ThingRef on things {
  id
  short_id
  name
  images(limit: 1) {
    file {
      url
    }
  }
}
    `;
export const EntityCardFragmentDoc = gql`
    fragment EntityCard on entities {
  id
  group {
    ...GroupRef
  }
  thing {
    ...ThingRef
  }
  user {
    ...UserCard
  }
  group_join_request {
    id
    response
    group {
      ...GroupRef
    }
  }
  group_post_comment {
    id
    post {
      id
      author_id
      group {
        ...GroupRef
      }
    }
    comment {
      ...CommentCard
    }
  }
  group_post {
    id
    group {
      ...GroupRef
    }
  }
  group_thing {
    id
    thing {
      ...ThingRef
    }
    group {
      ...GroupRef
    }
  }
  group_member {
    user {
      ...UserCard
    }
    group {
      ...GroupRef
    }
  }
}
    ${GroupRefFragmentDoc}
${ThingRefFragmentDoc}
${UserCardFragmentDoc}
${CommentCardFragmentDoc}`;
export const ActivityCardFragmentDoc = gql`
    fragment ActivityCard on activities {
  id
  created_at
  verb
  entity {
    ...EntityCard
  }
  secondary_entity {
    ...EntityCard
  }
  actor {
    ...UserCard
  }
}
    ${EntityCardFragmentDoc}
${UserCardFragmentDoc}`;
export const NotificationCardFragmentDoc = gql`
    fragment NotificationCard on notifications {
  id
  read_at
  created_at
  activity {
    ...ActivityCard
  }
}
    ${ActivityCardFragmentDoc}`;
export const ChatMessageCardFragmentDoc = gql`
    fragment ChatMessageCard on chat_messages {
  id
  sender_id
  message
  created_at
  entity {
    ...EntityCard
  }
}
    ${EntityCardFragmentDoc}`;
export const ChatGroupCardFragmentDoc = gql`
    fragment ChatGroupCard on chat_groups {
  id
  name
  members {
    user {
      ...UserCard
    }
  }
  messages(limit: 1, order_by: [{created_at: desc}]) {
    sender {
      ...UserCard
    }
    message
  }
}
    ${UserCardFragmentDoc}`;
export const GroupDetailsFragmentDoc = gql`
    fragment GroupDetails on groups {
  ...GroupCard
  memberships {
    ...GroupMemberCard
  }
}
    ${GroupCardFragmentDoc}
${GroupMemberCardFragmentDoc}`;
export const GroupJoinTokenCardFragmentDoc = gql`
    fragment GroupJoinTokenCard on group_join_tokens {
  id
  created_at
  updated_at
  token
  disabled
  note
}
    `;
export const ThingDetailsFragmentDoc = gql`
    fragment ThingDetails on things {
  ...ThingCard
  enabled
  group_relations {
    id
    group {
      ...GroupCard
    }
  }
}
    ${ThingCardFragmentDoc}
${GroupCardFragmentDoc}`;
export const UserDetailFragmentDoc = gql`
    fragment UserDetail on users {
  ...UserCard
  created_at
}
    ${UserCardFragmentDoc}`;
export const GroupJoinRequestCardFragmentDoc = gql`
    fragment GroupJoinRequestCard on group_join_requests {
  id
  created_at
  updated_at
  status
  group_id
  message
  user {
    ...UserCard
  }
}
    ${UserCardFragmentDoc}`;
export const UserJoinRequestsFragmentDoc = gql`
    fragment UserJoinRequests on users {
  id
  group_join_requests(where: {status: {_eq: pending}}) {
    ...GroupJoinRequestCard
  }
}
    ${GroupJoinRequestCardFragmentDoc}`;
export const UserPrivateDetailFragmentDoc = gql`
    fragment UserPrivateDetail on users {
  ...UserDetail
  ...UserJoinRequests
  memberships {
    id
    role
    group {
      ...GroupCard
    }
  }
  private_info {
    email
  }
}
    ${UserDetailFragmentDoc}
${UserJoinRequestsFragmentDoc}
${GroupCardFragmentDoc}`;
export const GroupActivityDocument = gql`
    query GroupActivity($shortId: String!, $limit: Int!, $offset: Int!) {
  groups(limit: 1, where: {short_id: {_eq: $shortId}}) {
    activities(
      order_by: [{created_at: desc}]
      limit: $limit
      offset: $offset
      where: {verb: {_nin: [rejected, requested_to_join, accepted, deleted, showed_interest]}, entity: {_or: [{group_thing_id: {_is_null: false}}, {group_id: {_is_null: false}}, {group_post_id: {_is_null: false}}, {group_member_id: {_is_null: false}}]}}
    ) {
      ...DetailedActivity
    }
  }
}
    ${DetailedActivityFragmentDoc}`;

/**
 * __useGroupActivityQuery__
 *
 * To run a query within a React component, call `useGroupActivityQuery` and pass it any options that fit your needs.
 * When your component renders, `useGroupActivityQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGroupActivityQuery({
 *   variables: {
 *      shortId: // value for 'shortId'
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useGroupActivityQuery(baseOptions: Apollo.QueryHookOptions<GroupActivityQuery, GroupActivityQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GroupActivityQuery, GroupActivityQueryVariables>(GroupActivityDocument, options);
      }
export function useGroupActivityLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GroupActivityQuery, GroupActivityQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GroupActivityQuery, GroupActivityQueryVariables>(GroupActivityDocument, options);
        }
export type GroupActivityQueryHookResult = ReturnType<typeof useGroupActivityQuery>;
export type GroupActivityLazyQueryHookResult = ReturnType<typeof useGroupActivityLazyQuery>;
export type GroupActivityQueryResult = Apollo.QueryResult<GroupActivityQuery, GroupActivityQueryVariables>;
export function refetchGroupActivityQuery(variables?: GroupActivityQueryVariables) {
      return { query: GroupActivityDocument, variables: variables }
    }
export const ChatMessagesDocument = gql`
    query ChatMessages($where: chat_messages_bool_exp!, $limit: Int!) {
  chat_messages(where: $where, order_by: [{created_at: desc}], limit: $limit) {
    ...ChatMessageCard
  }
}
    ${ChatMessageCardFragmentDoc}`;

/**
 * __useChatMessagesQuery__
 *
 * To run a query within a React component, call `useChatMessagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useChatMessagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useChatMessagesQuery({
 *   variables: {
 *      where: // value for 'where'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useChatMessagesQuery(baseOptions: Apollo.QueryHookOptions<ChatMessagesQuery, ChatMessagesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ChatMessagesQuery, ChatMessagesQueryVariables>(ChatMessagesDocument, options);
      }
export function useChatMessagesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ChatMessagesQuery, ChatMessagesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ChatMessagesQuery, ChatMessagesQueryVariables>(ChatMessagesDocument, options);
        }
export type ChatMessagesQueryHookResult = ReturnType<typeof useChatMessagesQuery>;
export type ChatMessagesLazyQueryHookResult = ReturnType<typeof useChatMessagesLazyQuery>;
export type ChatMessagesQueryResult = Apollo.QueryResult<ChatMessagesQuery, ChatMessagesQueryVariables>;
export function refetchChatMessagesQuery(variables?: ChatMessagesQueryVariables) {
      return { query: ChatMessagesDocument, variables: variables }
    }
export const ChatGroupsDocument = gql`
    subscription ChatGroups {
  chat_groups(order_by: [{messages_aggregate: {max: {created_at: desc}}}]) {
    ...ChatGroupCard
  }
}
    ${ChatGroupCardFragmentDoc}`;

/**
 * __useChatGroupsSubscription__
 *
 * To run a query within a React component, call `useChatGroupsSubscription` and pass it any options that fit your needs.
 * When your component renders, `useChatGroupsSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useChatGroupsSubscription({
 *   variables: {
 *   },
 * });
 */
export function useChatGroupsSubscription(baseOptions?: Apollo.SubscriptionHookOptions<ChatGroupsSubscription, ChatGroupsSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<ChatGroupsSubscription, ChatGroupsSubscriptionVariables>(ChatGroupsDocument, options);
      }
export type ChatGroupsSubscriptionHookResult = ReturnType<typeof useChatGroupsSubscription>;
export type ChatGroupsSubscriptionResult = Apollo.SubscriptionResult<ChatGroupsSubscription>;
export const ChatMessagesFeedDocument = gql`
    subscription ChatMessagesFeed($where: chat_messages_bool_exp!) {
  chat_messages(where: $where, order_by: [{created_at: desc}]) {
    ...ChatMessageCard
  }
}
    ${ChatMessageCardFragmentDoc}`;

/**
 * __useChatMessagesFeedSubscription__
 *
 * To run a query within a React component, call `useChatMessagesFeedSubscription` and pass it any options that fit your needs.
 * When your component renders, `useChatMessagesFeedSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useChatMessagesFeedSubscription({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useChatMessagesFeedSubscription(baseOptions: Apollo.SubscriptionHookOptions<ChatMessagesFeedSubscription, ChatMessagesFeedSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<ChatMessagesFeedSubscription, ChatMessagesFeedSubscriptionVariables>(ChatMessagesFeedDocument, options);
      }
export type ChatMessagesFeedSubscriptionHookResult = ReturnType<typeof useChatMessagesFeedSubscription>;
export type ChatMessagesFeedSubscriptionResult = Apollo.SubscriptionResult<ChatMessagesFeedSubscription>;
export const CreateChatGroupDocument = gql`
    mutation CreateChatGroup($input: CreateChatGroupInput!) {
  createChatGroup(input: $input) {
    chat_group {
      ...ChatGroupCard
    }
  }
}
    ${ChatGroupCardFragmentDoc}`;
export type CreateChatGroupMutationFn = Apollo.MutationFunction<CreateChatGroupMutation, CreateChatGroupMutationVariables>;

/**
 * __useCreateChatGroupMutation__
 *
 * To run a mutation, you first call `useCreateChatGroupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateChatGroupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createChatGroupMutation, { data, loading, error }] = useCreateChatGroupMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateChatGroupMutation(baseOptions?: Apollo.MutationHookOptions<CreateChatGroupMutation, CreateChatGroupMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateChatGroupMutation, CreateChatGroupMutationVariables>(CreateChatGroupDocument, options);
      }
export type CreateChatGroupMutationHookResult = ReturnType<typeof useCreateChatGroupMutation>;
export type CreateChatGroupMutationResult = Apollo.MutationResult<CreateChatGroupMutation>;
export type CreateChatGroupMutationOptions = Apollo.BaseMutationOptions<CreateChatGroupMutation, CreateChatGroupMutationVariables>;
export const CreateChatMessageDocument = gql`
    mutation CreateChatMessage($input: chat_messages_insert_input!) {
  insert_chat_messages_one(object: $input) {
    ...ChatMessageCard
  }
}
    ${ChatMessageCardFragmentDoc}`;
export type CreateChatMessageMutationFn = Apollo.MutationFunction<CreateChatMessageMutation, CreateChatMessageMutationVariables>;

/**
 * __useCreateChatMessageMutation__
 *
 * To run a mutation, you first call `useCreateChatMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateChatMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createChatMessageMutation, { data, loading, error }] = useCreateChatMessageMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateChatMessageMutation(baseOptions?: Apollo.MutationHookOptions<CreateChatMessageMutation, CreateChatMessageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateChatMessageMutation, CreateChatMessageMutationVariables>(CreateChatMessageDocument, options);
      }
export type CreateChatMessageMutationHookResult = ReturnType<typeof useCreateChatMessageMutation>;
export type CreateChatMessageMutationResult = Apollo.MutationResult<CreateChatMessageMutation>;
export type CreateChatMessageMutationOptions = Apollo.BaseMutationOptions<CreateChatMessageMutation, CreateChatMessageMutationVariables>;
export const ListGroupsDocument = gql`
    query ListGroups($limit: Int!, $offset: Int!, $orderBy: groups_order_by!, $where: groups_bool_exp) {
  groups_aggregate(where: $where) {
    aggregate {
      count
    }
  }
  groups(limit: $limit, offset: $offset, where: $where, order_by: [$orderBy]) {
    ...GroupCard
  }
}
    ${GroupCardFragmentDoc}`;

/**
 * __useListGroupsQuery__
 *
 * To run a query within a React component, call `useListGroupsQuery` and pass it any options that fit your needs.
 * When your component renders, `useListGroupsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListGroupsQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      orderBy: // value for 'orderBy'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useListGroupsQuery(baseOptions: Apollo.QueryHookOptions<ListGroupsQuery, ListGroupsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListGroupsQuery, ListGroupsQueryVariables>(ListGroupsDocument, options);
      }
export function useListGroupsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListGroupsQuery, ListGroupsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListGroupsQuery, ListGroupsQueryVariables>(ListGroupsDocument, options);
        }
export type ListGroupsQueryHookResult = ReturnType<typeof useListGroupsQuery>;
export type ListGroupsLazyQueryHookResult = ReturnType<typeof useListGroupsLazyQuery>;
export type ListGroupsQueryResult = Apollo.QueryResult<ListGroupsQuery, ListGroupsQueryVariables>;
export function refetchListGroupsQuery(variables?: ListGroupsQueryVariables) {
      return { query: ListGroupsDocument, variables: variables }
    }
export const GroupDetailsDocument = gql`
    query GroupDetails($shortId: String!) {
  groups(where: {short_id: {_eq: $shortId}}) {
    ...GroupDetails
  }
}
    ${GroupDetailsFragmentDoc}`;

/**
 * __useGroupDetailsQuery__
 *
 * To run a query within a React component, call `useGroupDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGroupDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGroupDetailsQuery({
 *   variables: {
 *      shortId: // value for 'shortId'
 *   },
 * });
 */
export function useGroupDetailsQuery(baseOptions: Apollo.QueryHookOptions<GroupDetailsQuery, GroupDetailsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GroupDetailsQuery, GroupDetailsQueryVariables>(GroupDetailsDocument, options);
      }
export function useGroupDetailsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GroupDetailsQuery, GroupDetailsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GroupDetailsQuery, GroupDetailsQueryVariables>(GroupDetailsDocument, options);
        }
export type GroupDetailsQueryHookResult = ReturnType<typeof useGroupDetailsQuery>;
export type GroupDetailsLazyQueryHookResult = ReturnType<typeof useGroupDetailsLazyQuery>;
export type GroupDetailsQueryResult = Apollo.QueryResult<GroupDetailsQuery, GroupDetailsQueryVariables>;
export function refetchGroupDetailsQuery(variables?: GroupDetailsQueryVariables) {
      return { query: GroupDetailsDocument, variables: variables }
    }
export const GroupJoinRequestsDocument = gql`
    query GroupJoinRequests($where: group_join_requests_bool_exp!) {
  group_join_requests(where: $where) {
    ...GroupJoinRequestCard
  }
}
    ${GroupJoinRequestCardFragmentDoc}`;

/**
 * __useGroupJoinRequestsQuery__
 *
 * To run a query within a React component, call `useGroupJoinRequestsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGroupJoinRequestsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGroupJoinRequestsQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useGroupJoinRequestsQuery(baseOptions: Apollo.QueryHookOptions<GroupJoinRequestsQuery, GroupJoinRequestsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GroupJoinRequestsQuery, GroupJoinRequestsQueryVariables>(GroupJoinRequestsDocument, options);
      }
export function useGroupJoinRequestsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GroupJoinRequestsQuery, GroupJoinRequestsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GroupJoinRequestsQuery, GroupJoinRequestsQueryVariables>(GroupJoinRequestsDocument, options);
        }
export type GroupJoinRequestsQueryHookResult = ReturnType<typeof useGroupJoinRequestsQuery>;
export type GroupJoinRequestsLazyQueryHookResult = ReturnType<typeof useGroupJoinRequestsLazyQuery>;
export type GroupJoinRequestsQueryResult = Apollo.QueryResult<GroupJoinRequestsQuery, GroupJoinRequestsQueryVariables>;
export function refetchGroupJoinRequestsQuery(variables?: GroupJoinRequestsQueryVariables) {
      return { query: GroupJoinRequestsDocument, variables: variables }
    }
export const GroupJoinTokensDocument = gql`
    query GroupJoinTokens($where: group_join_tokens_bool_exp!) {
  group_join_tokens(where: $where) {
    ...GroupJoinTokenCard
  }
}
    ${GroupJoinTokenCardFragmentDoc}`;

/**
 * __useGroupJoinTokensQuery__
 *
 * To run a query within a React component, call `useGroupJoinTokensQuery` and pass it any options that fit your needs.
 * When your component renders, `useGroupJoinTokensQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGroupJoinTokensQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useGroupJoinTokensQuery(baseOptions: Apollo.QueryHookOptions<GroupJoinTokensQuery, GroupJoinTokensQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GroupJoinTokensQuery, GroupJoinTokensQueryVariables>(GroupJoinTokensDocument, options);
      }
export function useGroupJoinTokensLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GroupJoinTokensQuery, GroupJoinTokensQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GroupJoinTokensQuery, GroupJoinTokensQueryVariables>(GroupJoinTokensDocument, options);
        }
export type GroupJoinTokensQueryHookResult = ReturnType<typeof useGroupJoinTokensQuery>;
export type GroupJoinTokensLazyQueryHookResult = ReturnType<typeof useGroupJoinTokensLazyQuery>;
export type GroupJoinTokensQueryResult = Apollo.QueryResult<GroupJoinTokensQuery, GroupJoinTokensQueryVariables>;
export function refetchGroupJoinTokensQuery(variables?: GroupJoinTokensQueryVariables) {
      return { query: GroupJoinTokensDocument, variables: variables }
    }
export const GroupPostListDocument = gql`
    query GroupPostList($where: group_posts_bool_exp!, $limit: Int!, $offset: Int!, $orderBy: [group_posts_order_by!]) {
  group_posts(limit: $limit, offset: $offset, where: $where, order_by: $orderBy) {
    ...GroupPost
  }
  group_posts_aggregate(where: $where) {
    aggregate {
      count
    }
  }
}
    ${GroupPostFragmentDoc}`;

/**
 * __useGroupPostListQuery__
 *
 * To run a query within a React component, call `useGroupPostListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGroupPostListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGroupPostListQuery({
 *   variables: {
 *      where: // value for 'where'
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useGroupPostListQuery(baseOptions: Apollo.QueryHookOptions<GroupPostListQuery, GroupPostListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GroupPostListQuery, GroupPostListQueryVariables>(GroupPostListDocument, options);
      }
export function useGroupPostListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GroupPostListQuery, GroupPostListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GroupPostListQuery, GroupPostListQueryVariables>(GroupPostListDocument, options);
        }
export type GroupPostListQueryHookResult = ReturnType<typeof useGroupPostListQuery>;
export type GroupPostListLazyQueryHookResult = ReturnType<typeof useGroupPostListLazyQuery>;
export type GroupPostListQueryResult = Apollo.QueryResult<GroupPostListQuery, GroupPostListQueryVariables>;
export function refetchGroupPostListQuery(variables?: GroupPostListQueryVariables) {
      return { query: GroupPostListDocument, variables: variables }
    }
export const ActivityListDocument = gql`
    query ActivityList($offset: Int = 10) {
  activities(limit: 10, offset: $offset, order_by: [{created_at: desc}]) {
    ...ActivityCard
  }
}
    ${ActivityCardFragmentDoc}`;

/**
 * __useActivityListQuery__
 *
 * To run a query within a React component, call `useActivityListQuery` and pass it any options that fit your needs.
 * When your component renders, `useActivityListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useActivityListQuery({
 *   variables: {
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useActivityListQuery(baseOptions?: Apollo.QueryHookOptions<ActivityListQuery, ActivityListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ActivityListQuery, ActivityListQueryVariables>(ActivityListDocument, options);
      }
export function useActivityListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ActivityListQuery, ActivityListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ActivityListQuery, ActivityListQueryVariables>(ActivityListDocument, options);
        }
export type ActivityListQueryHookResult = ReturnType<typeof useActivityListQuery>;
export type ActivityListLazyQueryHookResult = ReturnType<typeof useActivityListLazyQuery>;
export type ActivityListQueryResult = Apollo.QueryResult<ActivityListQuery, ActivityListQueryVariables>;
export function refetchActivityListQuery(variables?: ActivityListQueryVariables) {
      return { query: ActivityListDocument, variables: variables }
    }
export const CreateGroupDocument = gql`
    mutation CreateGroup($input: CreateGroupInput!) {
  createGroup(input: $input) {
    group {
      ...GroupCard
    }
  }
}
    ${GroupCardFragmentDoc}`;
export type CreateGroupMutationFn = Apollo.MutationFunction<CreateGroupMutation, CreateGroupMutationVariables>;

/**
 * __useCreateGroupMutation__
 *
 * To run a mutation, you first call `useCreateGroupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateGroupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createGroupMutation, { data, loading, error }] = useCreateGroupMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateGroupMutation(baseOptions?: Apollo.MutationHookOptions<CreateGroupMutation, CreateGroupMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateGroupMutation, CreateGroupMutationVariables>(CreateGroupDocument, options);
      }
export type CreateGroupMutationHookResult = ReturnType<typeof useCreateGroupMutation>;
export type CreateGroupMutationResult = Apollo.MutationResult<CreateGroupMutation>;
export type CreateGroupMutationOptions = Apollo.BaseMutationOptions<CreateGroupMutation, CreateGroupMutationVariables>;
export const UpdateGroupDocument = gql`
    mutation UpdateGroup($id: uuid!, $input: groups_set_input!) {
  update_groups_by_pk(pk_columns: {id: $id}, _set: $input) {
    ...GroupDetails
  }
}
    ${GroupDetailsFragmentDoc}`;
export type UpdateGroupMutationFn = Apollo.MutationFunction<UpdateGroupMutation, UpdateGroupMutationVariables>;

/**
 * __useUpdateGroupMutation__
 *
 * To run a mutation, you first call `useUpdateGroupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateGroupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateGroupMutation, { data, loading, error }] = useUpdateGroupMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateGroupMutation(baseOptions?: Apollo.MutationHookOptions<UpdateGroupMutation, UpdateGroupMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateGroupMutation, UpdateGroupMutationVariables>(UpdateGroupDocument, options);
      }
export type UpdateGroupMutationHookResult = ReturnType<typeof useUpdateGroupMutation>;
export type UpdateGroupMutationResult = Apollo.MutationResult<UpdateGroupMutation>;
export type UpdateGroupMutationOptions = Apollo.BaseMutationOptions<UpdateGroupMutation, UpdateGroupMutationVariables>;
export const DeleteGroupDocument = gql`
    mutation DeleteGroup($id: uuid!) {
  delete_groups_by_pk(id: $id) {
    ...GroupCard
  }
}
    ${GroupCardFragmentDoc}`;
export type DeleteGroupMutationFn = Apollo.MutationFunction<DeleteGroupMutation, DeleteGroupMutationVariables>;

/**
 * __useDeleteGroupMutation__
 *
 * To run a mutation, you first call `useDeleteGroupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteGroupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteGroupMutation, { data, loading, error }] = useDeleteGroupMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteGroupMutation(baseOptions?: Apollo.MutationHookOptions<DeleteGroupMutation, DeleteGroupMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteGroupMutation, DeleteGroupMutationVariables>(DeleteGroupDocument, options);
      }
export type DeleteGroupMutationHookResult = ReturnType<typeof useDeleteGroupMutation>;
export type DeleteGroupMutationResult = Apollo.MutationResult<DeleteGroupMutation>;
export type DeleteGroupMutationOptions = Apollo.BaseMutationOptions<DeleteGroupMutation, DeleteGroupMutationVariables>;
export const CreateGroupPostDocument = gql`
    mutation CreateGroupPost($input: group_posts_insert_input!) {
  insert_group_posts_one(object: $input) {
    ...GroupPost
  }
}
    ${GroupPostFragmentDoc}`;
export type CreateGroupPostMutationFn = Apollo.MutationFunction<CreateGroupPostMutation, CreateGroupPostMutationVariables>;

/**
 * __useCreateGroupPostMutation__
 *
 * To run a mutation, you first call `useCreateGroupPostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateGroupPostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createGroupPostMutation, { data, loading, error }] = useCreateGroupPostMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateGroupPostMutation(baseOptions?: Apollo.MutationHookOptions<CreateGroupPostMutation, CreateGroupPostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateGroupPostMutation, CreateGroupPostMutationVariables>(CreateGroupPostDocument, options);
      }
export type CreateGroupPostMutationHookResult = ReturnType<typeof useCreateGroupPostMutation>;
export type CreateGroupPostMutationResult = Apollo.MutationResult<CreateGroupPostMutation>;
export type CreateGroupPostMutationOptions = Apollo.BaseMutationOptions<CreateGroupPostMutation, CreateGroupPostMutationVariables>;
export const UpdateGroupPostDocument = gql`
    mutation UpdateGroupPost($id: uuid!, $input: group_posts_set_input!) {
  update_group_posts_by_pk(pk_columns: {id: $id}, _set: $input) {
    ...GroupPost
  }
}
    ${GroupPostFragmentDoc}`;
export type UpdateGroupPostMutationFn = Apollo.MutationFunction<UpdateGroupPostMutation, UpdateGroupPostMutationVariables>;

/**
 * __useUpdateGroupPostMutation__
 *
 * To run a mutation, you first call `useUpdateGroupPostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateGroupPostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateGroupPostMutation, { data, loading, error }] = useUpdateGroupPostMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateGroupPostMutation(baseOptions?: Apollo.MutationHookOptions<UpdateGroupPostMutation, UpdateGroupPostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateGroupPostMutation, UpdateGroupPostMutationVariables>(UpdateGroupPostDocument, options);
      }
export type UpdateGroupPostMutationHookResult = ReturnType<typeof useUpdateGroupPostMutation>;
export type UpdateGroupPostMutationResult = Apollo.MutationResult<UpdateGroupPostMutation>;
export type UpdateGroupPostMutationOptions = Apollo.BaseMutationOptions<UpdateGroupPostMutation, UpdateGroupPostMutationVariables>;
export const CreateGroupPostCommentDocument = gql`
    mutation CreateGroupPostComment($groupPostId: uuid!, $input: comments_insert_input!) {
  insert_group_post_comment_one(
    object: {group_post_id: $groupPostId, comment: {data: $input}}
  ) {
    comment {
      ...CommentCard
    }
    post {
      ...GroupPost
    }
  }
}
    ${CommentCardFragmentDoc}
${GroupPostFragmentDoc}`;
export type CreateGroupPostCommentMutationFn = Apollo.MutationFunction<CreateGroupPostCommentMutation, CreateGroupPostCommentMutationVariables>;

/**
 * __useCreateGroupPostCommentMutation__
 *
 * To run a mutation, you first call `useCreateGroupPostCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateGroupPostCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createGroupPostCommentMutation, { data, loading, error }] = useCreateGroupPostCommentMutation({
 *   variables: {
 *      groupPostId: // value for 'groupPostId'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateGroupPostCommentMutation(baseOptions?: Apollo.MutationHookOptions<CreateGroupPostCommentMutation, CreateGroupPostCommentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateGroupPostCommentMutation, CreateGroupPostCommentMutationVariables>(CreateGroupPostCommentDocument, options);
      }
export type CreateGroupPostCommentMutationHookResult = ReturnType<typeof useCreateGroupPostCommentMutation>;
export type CreateGroupPostCommentMutationResult = Apollo.MutationResult<CreateGroupPostCommentMutation>;
export type CreateGroupPostCommentMutationOptions = Apollo.BaseMutationOptions<CreateGroupPostCommentMutation, CreateGroupPostCommentMutationVariables>;
export const LeaveGroupDocument = gql`
    mutation LeaveGroup($groupId: uuid!, $userId: uuid!) {
  delete_group_members(
    where: {group_id: {_eq: $groupId}, user_id: {_eq: $userId}}
  ) {
    affected_rows
  }
}
    `;
export type LeaveGroupMutationFn = Apollo.MutationFunction<LeaveGroupMutation, LeaveGroupMutationVariables>;

/**
 * __useLeaveGroupMutation__
 *
 * To run a mutation, you first call `useLeaveGroupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLeaveGroupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [leaveGroupMutation, { data, loading, error }] = useLeaveGroupMutation({
 *   variables: {
 *      groupId: // value for 'groupId'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useLeaveGroupMutation(baseOptions?: Apollo.MutationHookOptions<LeaveGroupMutation, LeaveGroupMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LeaveGroupMutation, LeaveGroupMutationVariables>(LeaveGroupDocument, options);
      }
export type LeaveGroupMutationHookResult = ReturnType<typeof useLeaveGroupMutation>;
export type LeaveGroupMutationResult = Apollo.MutationResult<LeaveGroupMutation>;
export type LeaveGroupMutationOptions = Apollo.BaseMutationOptions<LeaveGroupMutation, LeaveGroupMutationVariables>;
export const JoinGroupDocument = gql`
    mutation JoinGroup($groupId: uuid!) {
  insert_group_members_one(object: {group_id: $groupId}) {
    ...GroupMemberCard
    user {
      ...UserPrivateDetail
    }
  }
}
    ${GroupMemberCardFragmentDoc}
${UserPrivateDetailFragmentDoc}`;
export type JoinGroupMutationFn = Apollo.MutationFunction<JoinGroupMutation, JoinGroupMutationVariables>;

/**
 * __useJoinGroupMutation__
 *
 * To run a mutation, you first call `useJoinGroupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useJoinGroupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [joinGroupMutation, { data, loading, error }] = useJoinGroupMutation({
 *   variables: {
 *      groupId: // value for 'groupId'
 *   },
 * });
 */
export function useJoinGroupMutation(baseOptions?: Apollo.MutationHookOptions<JoinGroupMutation, JoinGroupMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<JoinGroupMutation, JoinGroupMutationVariables>(JoinGroupDocument, options);
      }
export type JoinGroupMutationHookResult = ReturnType<typeof useJoinGroupMutation>;
export type JoinGroupMutationResult = Apollo.MutationResult<JoinGroupMutation>;
export type JoinGroupMutationOptions = Apollo.BaseMutationOptions<JoinGroupMutation, JoinGroupMutationVariables>;
export const JoinGroupWithTokenDocument = gql`
    mutation JoinGroupWithToken($input: JoinGroupInput!) {
  joinGroup(input: $input) {
    group {
      id
    }
    user {
      ...UserPrivateDetail
    }
  }
}
    ${UserPrivateDetailFragmentDoc}`;
export type JoinGroupWithTokenMutationFn = Apollo.MutationFunction<JoinGroupWithTokenMutation, JoinGroupWithTokenMutationVariables>;

/**
 * __useJoinGroupWithTokenMutation__
 *
 * To run a mutation, you first call `useJoinGroupWithTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useJoinGroupWithTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [joinGroupWithTokenMutation, { data, loading, error }] = useJoinGroupWithTokenMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useJoinGroupWithTokenMutation(baseOptions?: Apollo.MutationHookOptions<JoinGroupWithTokenMutation, JoinGroupWithTokenMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<JoinGroupWithTokenMutation, JoinGroupWithTokenMutationVariables>(JoinGroupWithTokenDocument, options);
      }
export type JoinGroupWithTokenMutationHookResult = ReturnType<typeof useJoinGroupWithTokenMutation>;
export type JoinGroupWithTokenMutationResult = Apollo.MutationResult<JoinGroupWithTokenMutation>;
export type JoinGroupWithTokenMutationOptions = Apollo.BaseMutationOptions<JoinGroupWithTokenMutation, JoinGroupWithTokenMutationVariables>;
export const RequestJoinGroupDocument = gql`
    mutation RequestJoinGroup($input: RequestJoinGroupInput!) {
  requestJoinGroup(input: $input) {
    group {
      ...GroupCard
    }
    user {
      ...UserJoinRequests
    }
  }
}
    ${GroupCardFragmentDoc}
${UserJoinRequestsFragmentDoc}`;
export type RequestJoinGroupMutationFn = Apollo.MutationFunction<RequestJoinGroupMutation, RequestJoinGroupMutationVariables>;

/**
 * __useRequestJoinGroupMutation__
 *
 * To run a mutation, you first call `useRequestJoinGroupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRequestJoinGroupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [requestJoinGroupMutation, { data, loading, error }] = useRequestJoinGroupMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRequestJoinGroupMutation(baseOptions?: Apollo.MutationHookOptions<RequestJoinGroupMutation, RequestJoinGroupMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RequestJoinGroupMutation, RequestJoinGroupMutationVariables>(RequestJoinGroupDocument, options);
      }
export type RequestJoinGroupMutationHookResult = ReturnType<typeof useRequestJoinGroupMutation>;
export type RequestJoinGroupMutationResult = Apollo.MutationResult<RequestJoinGroupMutation>;
export type RequestJoinGroupMutationOptions = Apollo.BaseMutationOptions<RequestJoinGroupMutation, RequestJoinGroupMutationVariables>;
export const CancelJoinRequestDocument = gql`
    mutation CancelJoinRequest($requestId: uuid!) {
  delete_group_join_requests(where: {id: {_eq: $requestId}}) {
    returning {
      user {
        ...UserJoinRequests
      }
    }
  }
}
    ${UserJoinRequestsFragmentDoc}`;
export type CancelJoinRequestMutationFn = Apollo.MutationFunction<CancelJoinRequestMutation, CancelJoinRequestMutationVariables>;

/**
 * __useCancelJoinRequestMutation__
 *
 * To run a mutation, you first call `useCancelJoinRequestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCancelJoinRequestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [cancelJoinRequestMutation, { data, loading, error }] = useCancelJoinRequestMutation({
 *   variables: {
 *      requestId: // value for 'requestId'
 *   },
 * });
 */
export function useCancelJoinRequestMutation(baseOptions?: Apollo.MutationHookOptions<CancelJoinRequestMutation, CancelJoinRequestMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CancelJoinRequestMutation, CancelJoinRequestMutationVariables>(CancelJoinRequestDocument, options);
      }
export type CancelJoinRequestMutationHookResult = ReturnType<typeof useCancelJoinRequestMutation>;
export type CancelJoinRequestMutationResult = Apollo.MutationResult<CancelJoinRequestMutation>;
export type CancelJoinRequestMutationOptions = Apollo.BaseMutationOptions<CancelJoinRequestMutation, CancelJoinRequestMutationVariables>;
export const HandleJoinRequestDocument = gql`
    mutation HandleJoinRequest($input: HandleJoinRequestInput!) {
  handleJoinRequest(input: $input) {
    join_request {
      ...GroupJoinRequestCard
    }
  }
}
    ${GroupJoinRequestCardFragmentDoc}`;
export type HandleJoinRequestMutationFn = Apollo.MutationFunction<HandleJoinRequestMutation, HandleJoinRequestMutationVariables>;

/**
 * __useHandleJoinRequestMutation__
 *
 * To run a mutation, you first call `useHandleJoinRequestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useHandleJoinRequestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [handleJoinRequestMutation, { data, loading, error }] = useHandleJoinRequestMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useHandleJoinRequestMutation(baseOptions?: Apollo.MutationHookOptions<HandleJoinRequestMutation, HandleJoinRequestMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<HandleJoinRequestMutation, HandleJoinRequestMutationVariables>(HandleJoinRequestDocument, options);
      }
export type HandleJoinRequestMutationHookResult = ReturnType<typeof useHandleJoinRequestMutation>;
export type HandleJoinRequestMutationResult = Apollo.MutationResult<HandleJoinRequestMutation>;
export type HandleJoinRequestMutationOptions = Apollo.BaseMutationOptions<HandleJoinRequestMutation, HandleJoinRequestMutationVariables>;
export const CreateJoinTokenDocument = gql`
    mutation CreateJoinToken($input: group_join_tokens_insert_input!) {
  insert_group_join_tokens_one(object: $input) {
    ...GroupJoinTokenCard
  }
}
    ${GroupJoinTokenCardFragmentDoc}`;
export type CreateJoinTokenMutationFn = Apollo.MutationFunction<CreateJoinTokenMutation, CreateJoinTokenMutationVariables>;

/**
 * __useCreateJoinTokenMutation__
 *
 * To run a mutation, you first call `useCreateJoinTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateJoinTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createJoinTokenMutation, { data, loading, error }] = useCreateJoinTokenMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateJoinTokenMutation(baseOptions?: Apollo.MutationHookOptions<CreateJoinTokenMutation, CreateJoinTokenMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateJoinTokenMutation, CreateJoinTokenMutationVariables>(CreateJoinTokenDocument, options);
      }
export type CreateJoinTokenMutationHookResult = ReturnType<typeof useCreateJoinTokenMutation>;
export type CreateJoinTokenMutationResult = Apollo.MutationResult<CreateJoinTokenMutation>;
export type CreateJoinTokenMutationOptions = Apollo.BaseMutationOptions<CreateJoinTokenMutation, CreateJoinTokenMutationVariables>;
export const DeleteJoinTokenDocument = gql`
    mutation DeleteJoinToken($id: uuid!) {
  delete_group_join_tokens_by_pk(id: $id) {
    ...GroupJoinTokenCard
  }
}
    ${GroupJoinTokenCardFragmentDoc}`;
export type DeleteJoinTokenMutationFn = Apollo.MutationFunction<DeleteJoinTokenMutation, DeleteJoinTokenMutationVariables>;

/**
 * __useDeleteJoinTokenMutation__
 *
 * To run a mutation, you first call `useDeleteJoinTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteJoinTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteJoinTokenMutation, { data, loading, error }] = useDeleteJoinTokenMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteJoinTokenMutation(baseOptions?: Apollo.MutationHookOptions<DeleteJoinTokenMutation, DeleteJoinTokenMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteJoinTokenMutation, DeleteJoinTokenMutationVariables>(DeleteJoinTokenDocument, options);
      }
export type DeleteJoinTokenMutationHookResult = ReturnType<typeof useDeleteJoinTokenMutation>;
export type DeleteJoinTokenMutationResult = Apollo.MutationResult<DeleteJoinTokenMutation>;
export type DeleteJoinTokenMutationOptions = Apollo.BaseMutationOptions<DeleteJoinTokenMutation, DeleteJoinTokenMutationVariables>;
export const UpdateJoinTokenDocument = gql`
    mutation UpdateJoinToken($id: uuid!, $input: group_join_tokens_set_input!) {
  update_group_join_tokens_by_pk(pk_columns: {id: $id}, _set: $input) {
    ...GroupJoinTokenCard
  }
}
    ${GroupJoinTokenCardFragmentDoc}`;
export type UpdateJoinTokenMutationFn = Apollo.MutationFunction<UpdateJoinTokenMutation, UpdateJoinTokenMutationVariables>;

/**
 * __useUpdateJoinTokenMutation__
 *
 * To run a mutation, you first call `useUpdateJoinTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateJoinTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateJoinTokenMutation, { data, loading, error }] = useUpdateJoinTokenMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateJoinTokenMutation(baseOptions?: Apollo.MutationHookOptions<UpdateJoinTokenMutation, UpdateJoinTokenMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateJoinTokenMutation, UpdateJoinTokenMutationVariables>(UpdateJoinTokenDocument, options);
      }
export type UpdateJoinTokenMutationHookResult = ReturnType<typeof useUpdateJoinTokenMutation>;
export type UpdateJoinTokenMutationResult = Apollo.MutationResult<UpdateJoinTokenMutation>;
export type UpdateJoinTokenMutationOptions = Apollo.BaseMutationOptions<UpdateJoinTokenMutation, UpdateJoinTokenMutationVariables>;
export const SearchCountsDocument = gql`
    query SearchCounts($thingWhere: things_bool_exp!, $groupWhere: groups_bool_exp!, $userWhere: users_bool_exp!) {
  users_aggregate(where: $userWhere, limit: 10) {
    aggregate {
      count
    }
  }
  groups_aggregate(where: $groupWhere, limit: 10) {
    aggregate {
      count
    }
  }
  things_aggregate(where: $thingWhere, limit: 10) {
    aggregate {
      count
    }
  }
}
    `;

/**
 * __useSearchCountsQuery__
 *
 * To run a query within a React component, call `useSearchCountsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchCountsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchCountsQuery({
 *   variables: {
 *      thingWhere: // value for 'thingWhere'
 *      groupWhere: // value for 'groupWhere'
 *      userWhere: // value for 'userWhere'
 *   },
 * });
 */
export function useSearchCountsQuery(baseOptions: Apollo.QueryHookOptions<SearchCountsQuery, SearchCountsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchCountsQuery, SearchCountsQueryVariables>(SearchCountsDocument, options);
      }
export function useSearchCountsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchCountsQuery, SearchCountsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchCountsQuery, SearchCountsQueryVariables>(SearchCountsDocument, options);
        }
export type SearchCountsQueryHookResult = ReturnType<typeof useSearchCountsQuery>;
export type SearchCountsLazyQueryHookResult = ReturnType<typeof useSearchCountsLazyQuery>;
export type SearchCountsQueryResult = Apollo.QueryResult<SearchCountsQuery, SearchCountsQueryVariables>;
export function refetchSearchCountsQuery(variables?: SearchCountsQueryVariables) {
      return { query: SearchCountsDocument, variables: variables }
    }
export const ThingListDocument = gql`
    query ThingList($limit: Int, $offset: Int, $orderBy: [things_order_by!], $where: things_bool_exp!) {
  things(where: $where, limit: $limit, offset: $offset, order_by: $orderBy) {
    ...ThingCard
  }
  things_aggregate(where: $where) {
    aggregate {
      count
    }
  }
}
    ${ThingCardFragmentDoc}`;

/**
 * __useThingListQuery__
 *
 * To run a query within a React component, call `useThingListQuery` and pass it any options that fit your needs.
 * When your component renders, `useThingListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useThingListQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      orderBy: // value for 'orderBy'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useThingListQuery(baseOptions: Apollo.QueryHookOptions<ThingListQuery, ThingListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ThingListQuery, ThingListQueryVariables>(ThingListDocument, options);
      }
export function useThingListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ThingListQuery, ThingListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ThingListQuery, ThingListQueryVariables>(ThingListDocument, options);
        }
export type ThingListQueryHookResult = ReturnType<typeof useThingListQuery>;
export type ThingListLazyQueryHookResult = ReturnType<typeof useThingListLazyQuery>;
export type ThingListQueryResult = Apollo.QueryResult<ThingListQuery, ThingListQueryVariables>;
export function refetchThingListQuery(variables?: ThingListQueryVariables) {
      return { query: ThingListDocument, variables: variables }
    }
export const ThingDetailsDocument = gql`
    query ThingDetails($shortId: String!) {
  things(where: {short_id: {_eq: $shortId}}) {
    ...ThingDetails
  }
}
    ${ThingDetailsFragmentDoc}`;

/**
 * __useThingDetailsQuery__
 *
 * To run a query within a React component, call `useThingDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useThingDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useThingDetailsQuery({
 *   variables: {
 *      shortId: // value for 'shortId'
 *   },
 * });
 */
export function useThingDetailsQuery(baseOptions: Apollo.QueryHookOptions<ThingDetailsQuery, ThingDetailsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ThingDetailsQuery, ThingDetailsQueryVariables>(ThingDetailsDocument, options);
      }
export function useThingDetailsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ThingDetailsQuery, ThingDetailsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ThingDetailsQuery, ThingDetailsQueryVariables>(ThingDetailsDocument, options);
        }
export type ThingDetailsQueryHookResult = ReturnType<typeof useThingDetailsQuery>;
export type ThingDetailsLazyQueryHookResult = ReturnType<typeof useThingDetailsLazyQuery>;
export type ThingDetailsQueryResult = Apollo.QueryResult<ThingDetailsQuery, ThingDetailsQueryVariables>;
export function refetchThingDetailsQuery(variables?: ThingDetailsQueryVariables) {
      return { query: ThingDetailsDocument, variables: variables }
    }
export const CreateThingDocument = gql`
    mutation CreateThing($input: things_insert_input!) {
  insert_things_one(object: $input) {
    ...ThingDetails
  }
}
    ${ThingDetailsFragmentDoc}`;
export type CreateThingMutationFn = Apollo.MutationFunction<CreateThingMutation, CreateThingMutationVariables>;

/**
 * __useCreateThingMutation__
 *
 * To run a mutation, you first call `useCreateThingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateThingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createThingMutation, { data, loading, error }] = useCreateThingMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateThingMutation(baseOptions?: Apollo.MutationHookOptions<CreateThingMutation, CreateThingMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateThingMutation, CreateThingMutationVariables>(CreateThingDocument, options);
      }
export type CreateThingMutationHookResult = ReturnType<typeof useCreateThingMutation>;
export type CreateThingMutationResult = Apollo.MutationResult<CreateThingMutation>;
export type CreateThingMutationOptions = Apollo.BaseMutationOptions<CreateThingMutation, CreateThingMutationVariables>;
export const UpdateThingDocument = gql`
    mutation UpdateThing($input: UpdateThingInput!) {
  updateThing(input: $input) {
    thing {
      ...ThingDetails
    }
  }
}
    ${ThingDetailsFragmentDoc}`;
export type UpdateThingMutationFn = Apollo.MutationFunction<UpdateThingMutation, UpdateThingMutationVariables>;

/**
 * __useUpdateThingMutation__
 *
 * To run a mutation, you first call `useUpdateThingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateThingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateThingMutation, { data, loading, error }] = useUpdateThingMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateThingMutation(baseOptions?: Apollo.MutationHookOptions<UpdateThingMutation, UpdateThingMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateThingMutation, UpdateThingMutationVariables>(UpdateThingDocument, options);
      }
export type UpdateThingMutationHookResult = ReturnType<typeof useUpdateThingMutation>;
export type UpdateThingMutationResult = Apollo.MutationResult<UpdateThingMutation>;
export type UpdateThingMutationOptions = Apollo.BaseMutationOptions<UpdateThingMutation, UpdateThingMutationVariables>;
export const DeleteThingDocument = gql`
    mutation DeleteThing($id: uuid!) {
  delete_things_by_pk(id: $id) {
    ...ThingDetails
  }
}
    ${ThingDetailsFragmentDoc}`;
export type DeleteThingMutationFn = Apollo.MutationFunction<DeleteThingMutation, DeleteThingMutationVariables>;

/**
 * __useDeleteThingMutation__
 *
 * To run a mutation, you first call `useDeleteThingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteThingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteThingMutation, { data, loading, error }] = useDeleteThingMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteThingMutation(baseOptions?: Apollo.MutationHookOptions<DeleteThingMutation, DeleteThingMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteThingMutation, DeleteThingMutationVariables>(DeleteThingDocument, options);
      }
export type DeleteThingMutationHookResult = ReturnType<typeof useDeleteThingMutation>;
export type DeleteThingMutationResult = Apollo.MutationResult<DeleteThingMutation>;
export type DeleteThingMutationOptions = Apollo.BaseMutationOptions<DeleteThingMutation, DeleteThingMutationVariables>;
export const InsertFileUploadDocument = gql`
    mutation InsertFileUpload($input: file_uploads_insert_input!) {
  insert_file_uploads_one(object: $input) {
    ...FileUploadCard
  }
}
    ${FileUploadCardFragmentDoc}`;
export type InsertFileUploadMutationFn = Apollo.MutationFunction<InsertFileUploadMutation, InsertFileUploadMutationVariables>;

/**
 * __useInsertFileUploadMutation__
 *
 * To run a mutation, you first call `useInsertFileUploadMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertFileUploadMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertFileUploadMutation, { data, loading, error }] = useInsertFileUploadMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useInsertFileUploadMutation(baseOptions?: Apollo.MutationHookOptions<InsertFileUploadMutation, InsertFileUploadMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertFileUploadMutation, InsertFileUploadMutationVariables>(InsertFileUploadDocument, options);
      }
export type InsertFileUploadMutationHookResult = ReturnType<typeof useInsertFileUploadMutation>;
export type InsertFileUploadMutationResult = Apollo.MutationResult<InsertFileUploadMutation>;
export type InsertFileUploadMutationOptions = Apollo.BaseMutationOptions<InsertFileUploadMutation, InsertFileUploadMutationVariables>;
export const UserListDocument = gql`
    query UserList($where: users_bool_exp, $limit: Int, $offset: Int) {
  users(where: $where, limit: $limit, offset: $offset) {
    ...UserCard
  }
  users_aggregate(where: $where, limit: 10) {
    aggregate {
      count
    }
  }
}
    ${UserCardFragmentDoc}`;

/**
 * __useUserListQuery__
 *
 * To run a query within a React component, call `useUserListQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserListQuery({
 *   variables: {
 *      where: // value for 'where'
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useUserListQuery(baseOptions?: Apollo.QueryHookOptions<UserListQuery, UserListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserListQuery, UserListQueryVariables>(UserListDocument, options);
      }
export function useUserListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserListQuery, UserListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserListQuery, UserListQueryVariables>(UserListDocument, options);
        }
export type UserListQueryHookResult = ReturnType<typeof useUserListQuery>;
export type UserListLazyQueryHookResult = ReturnType<typeof useUserListLazyQuery>;
export type UserListQueryResult = Apollo.QueryResult<UserListQuery, UserListQueryVariables>;
export function refetchUserListQuery(variables?: UserListQueryVariables) {
      return { query: UserListDocument, variables: variables }
    }
export const UserPrivateDetailsDocument = gql`
    query UserPrivateDetails($id: uuid!) {
  users_by_pk(id: $id) {
    ...UserPrivateDetail
  }
}
    ${UserPrivateDetailFragmentDoc}`;

/**
 * __useUserPrivateDetailsQuery__
 *
 * To run a query within a React component, call `useUserPrivateDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserPrivateDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserPrivateDetailsQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUserPrivateDetailsQuery(baseOptions: Apollo.QueryHookOptions<UserPrivateDetailsQuery, UserPrivateDetailsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserPrivateDetailsQuery, UserPrivateDetailsQueryVariables>(UserPrivateDetailsDocument, options);
      }
export function useUserPrivateDetailsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserPrivateDetailsQuery, UserPrivateDetailsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserPrivateDetailsQuery, UserPrivateDetailsQueryVariables>(UserPrivateDetailsDocument, options);
        }
export type UserPrivateDetailsQueryHookResult = ReturnType<typeof useUserPrivateDetailsQuery>;
export type UserPrivateDetailsLazyQueryHookResult = ReturnType<typeof useUserPrivateDetailsLazyQuery>;
export type UserPrivateDetailsQueryResult = Apollo.QueryResult<UserPrivateDetailsQuery, UserPrivateDetailsQueryVariables>;
export function refetchUserPrivateDetailsQuery(variables?: UserPrivateDetailsQueryVariables) {
      return { query: UserPrivateDetailsDocument, variables: variables }
    }
export const NotificationsDocument = gql`
    subscription Notifications($userId: uuid!) {
  notifications(
    limit: 50
    order_by: [{created_at: desc}]
    where: {user_id: {_eq: $userId}}
  ) {
    ...NotificationCard
  }
}
    ${NotificationCardFragmentDoc}`;

/**
 * __useNotificationsSubscription__
 *
 * To run a query within a React component, call `useNotificationsSubscription` and pass it any options that fit your needs.
 * When your component renders, `useNotificationsSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNotificationsSubscription({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useNotificationsSubscription(baseOptions: Apollo.SubscriptionHookOptions<NotificationsSubscription, NotificationsSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<NotificationsSubscription, NotificationsSubscriptionVariables>(NotificationsDocument, options);
      }
export type NotificationsSubscriptionHookResult = ReturnType<typeof useNotificationsSubscription>;
export type NotificationsSubscriptionResult = Apollo.SubscriptionResult<NotificationsSubscription>;
export const MarkNotificationReadDocument = gql`
    mutation MarkNotificationRead($id: uuid!, $readAt: timestamptz!) {
  update_notifications_by_pk(pk_columns: {id: $id}, _set: {read_at: $readAt}) {
    ...NotificationCard
  }
}
    ${NotificationCardFragmentDoc}`;
export type MarkNotificationReadMutationFn = Apollo.MutationFunction<MarkNotificationReadMutation, MarkNotificationReadMutationVariables>;

/**
 * __useMarkNotificationReadMutation__
 *
 * To run a mutation, you first call `useMarkNotificationReadMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMarkNotificationReadMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [markNotificationReadMutation, { data, loading, error }] = useMarkNotificationReadMutation({
 *   variables: {
 *      id: // value for 'id'
 *      readAt: // value for 'readAt'
 *   },
 * });
 */
export function useMarkNotificationReadMutation(baseOptions?: Apollo.MutationHookOptions<MarkNotificationReadMutation, MarkNotificationReadMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<MarkNotificationReadMutation, MarkNotificationReadMutationVariables>(MarkNotificationReadDocument, options);
      }
export type MarkNotificationReadMutationHookResult = ReturnType<typeof useMarkNotificationReadMutation>;
export type MarkNotificationReadMutationResult = Apollo.MutationResult<MarkNotificationReadMutation>;
export type MarkNotificationReadMutationOptions = Apollo.BaseMutationOptions<MarkNotificationReadMutation, MarkNotificationReadMutationVariables>;
export const MarkAllNotificationsReadDocument = gql`
    mutation MarkAllNotificationsRead($userId: uuid!, $readAt: timestamptz!) {
  update_notifications(
    where: {user_id: {_eq: $userId}, read_at: {_is_null: true}}
    _set: {read_at: $readAt}
  ) {
    affected_rows
    returning {
      ...NotificationCard
    }
  }
}
    ${NotificationCardFragmentDoc}`;
export type MarkAllNotificationsReadMutationFn = Apollo.MutationFunction<MarkAllNotificationsReadMutation, MarkAllNotificationsReadMutationVariables>;

/**
 * __useMarkAllNotificationsReadMutation__
 *
 * To run a mutation, you first call `useMarkAllNotificationsReadMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMarkAllNotificationsReadMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [markAllNotificationsReadMutation, { data, loading, error }] = useMarkAllNotificationsReadMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *      readAt: // value for 'readAt'
 *   },
 * });
 */
export function useMarkAllNotificationsReadMutation(baseOptions?: Apollo.MutationHookOptions<MarkAllNotificationsReadMutation, MarkAllNotificationsReadMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<MarkAllNotificationsReadMutation, MarkAllNotificationsReadMutationVariables>(MarkAllNotificationsReadDocument, options);
      }
export type MarkAllNotificationsReadMutationHookResult = ReturnType<typeof useMarkAllNotificationsReadMutation>;
export type MarkAllNotificationsReadMutationResult = Apollo.MutationResult<MarkAllNotificationsReadMutation>;
export type MarkAllNotificationsReadMutationOptions = Apollo.BaseMutationOptions<MarkAllNotificationsReadMutation, MarkAllNotificationsReadMutationVariables>;
export const RegisterUserDocument = gql`
    mutation RegisterUser($input: CredentialsInput!) {
  registerCredentials(input: $input) {
    user_id
  }
}
    `;
export type RegisterUserMutationFn = Apollo.MutationFunction<RegisterUserMutation, RegisterUserMutationVariables>;

/**
 * __useRegisterUserMutation__
 *
 * To run a mutation, you first call `useRegisterUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerUserMutation, { data, loading, error }] = useRegisterUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRegisterUserMutation(baseOptions?: Apollo.MutationHookOptions<RegisterUserMutation, RegisterUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterUserMutation, RegisterUserMutationVariables>(RegisterUserDocument, options);
      }
export type RegisterUserMutationHookResult = ReturnType<typeof useRegisterUserMutation>;
export type RegisterUserMutationResult = Apollo.MutationResult<RegisterUserMutation>;
export type RegisterUserMutationOptions = Apollo.BaseMutationOptions<RegisterUserMutation, RegisterUserMutationVariables>;

      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {}
};
      export default result;
    
export const GqlOps = {
  Query: {
    GroupActivity: 'GroupActivity',
    ChatMessages: 'ChatMessages',
    ListGroups: 'ListGroups',
    GroupDetails: 'GroupDetails',
    GroupJoinRequests: 'GroupJoinRequests',
    GroupJoinTokens: 'GroupJoinTokens',
    GroupPostList: 'GroupPostList',
    ActivityList: 'ActivityList',
    SearchCounts: 'SearchCounts',
    ThingList: 'ThingList',
    ThingDetails: 'ThingDetails',
    UserList: 'UserList',
    UserPrivateDetails: 'UserPrivateDetails'
  },
  Mutation: {
    CreateChatGroup: 'CreateChatGroup',
    CreateChatMessage: 'CreateChatMessage',
    CreateGroup: 'CreateGroup',
    UpdateGroup: 'UpdateGroup',
    DeleteGroup: 'DeleteGroup',
    CreateGroupPost: 'CreateGroupPost',
    UpdateGroupPost: 'UpdateGroupPost',
    CreateGroupPostComment: 'CreateGroupPostComment',
    LeaveGroup: 'LeaveGroup',
    JoinGroup: 'JoinGroup',
    JoinGroupWithToken: 'JoinGroupWithToken',
    RequestJoinGroup: 'RequestJoinGroup',
    CancelJoinRequest: 'CancelJoinRequest',
    HandleJoinRequest: 'HandleJoinRequest',
    CreateJoinToken: 'CreateJoinToken',
    DeleteJoinToken: 'DeleteJoinToken',
    UpdateJoinToken: 'UpdateJoinToken',
    CreateThing: 'CreateThing',
    UpdateThing: 'UpdateThing',
    DeleteThing: 'DeleteThing',
    InsertFileUpload: 'InsertFileUpload',
    MarkNotificationRead: 'MarkNotificationRead',
    MarkAllNotificationsRead: 'MarkAllNotificationsRead',
    RegisterUser: 'RegisterUser'
  },
  Subscription: {
    ChatGroups: 'ChatGroups',
    ChatMessagesFeed: 'ChatMessagesFeed',
    Notifications: 'Notifications'
  },
  Fragment: {
    DetailedActivity: 'DetailedActivity',
    ActivityCard: 'ActivityCard',
    NotificationCard: 'NotificationCard',
    GroupRef: 'GroupRef',
    ThingRef: 'ThingRef',
    EntityCard: 'EntityCard',
    DetailedEntity: 'DetailedEntity',
    ChatMessageCard: 'ChatMessageCard',
    ChatGroupCard: 'ChatGroupCard',
    CommentCard: 'CommentCard',
    GroupMemberCard: 'GroupMemberCard',
    GroupMemberWithGroupCard: 'GroupMemberWithGroupCard',
    GroupCard: 'GroupCard',
    GroupDetails: 'GroupDetails',
    GroupJoinRequestCard: 'GroupJoinRequestCard',
    GroupJoinTokenCard: 'GroupJoinTokenCard',
    GroupPost: 'GroupPost',
    ThingCard: 'ThingCard',
    ThingImageCard: 'ThingImageCard',
    ThingDetails: 'ThingDetails',
    FileUploadCard: 'FileUploadCard',
    UserCard: 'UserCard',
    UserDetail: 'UserDetail',
    UserJoinRequests: 'UserJoinRequests',
    UserPrivateDetail: 'UserPrivateDetail'
  }
}