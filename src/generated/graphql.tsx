import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  bigint: any;
  bytea: any;
  citext: any;
  date: any;
  jsonb: any;
  smallint: any;
  timestamptz: string;
  uuid: string;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

export type CreateChatGroupInput = {
  message: Scalars['String'];
  receiverIds: Array<Scalars['uuid']>;
  thing_id?: InputMaybe<Scalars['uuid']>;
};

export type CreateChatGroupResult = {
  __typename?: 'CreateChatGroupResult';
  chat_group?: Maybe<Chat_Groups>;
  chat_group_id: Scalars['uuid'];
};

export type CreateChatMessageInput = {
  chat_group_id: Scalars['uuid'];
  message: Scalars['String'];
};

export type CreateChatMessageResult = {
  __typename?: 'CreateChatMessageResult';
  chat_message?: Maybe<Chat_Messages>;
  chat_messages_id: Scalars['uuid'];
};

export type CreateGroupInput = {
  description: Scalars['String'];
  name: Scalars['String'];
  public?: InputMaybe<Scalars['Boolean']>;
};

export type CreateGroupResult = {
  __typename?: 'CreateGroupResult';
  group?: Maybe<Groups>;
  group_id: Scalars['uuid'];
};

export type CreateJoinTokenInput = {
  group_id: Scalars['uuid'];
};

export type CreateJoinTokenResult = {
  __typename?: 'CreateJoinTokenResult';
  group?: Maybe<Groups>;
  group_id: Scalars['uuid'];
  join_token?: Maybe<Group_Join_Tokens>;
  join_token_id: Scalars['uuid'];
};

export type CredentialsInput = {
  email?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  password: Scalars['String'];
};

export type HandleJoinRequestInput = {
  accepted: Scalars['Boolean'];
  join_request_id: Scalars['uuid'];
  response?: InputMaybe<Scalars['String']>;
};

export type HandleJoinRequestResult = {
  __typename?: 'HandleJoinRequestResult';
  join_request?: Maybe<Group_Join_Requests>;
  join_request_id: Scalars['uuid'];
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

export type JoinGroupInput = {
  group_id: Scalars['uuid'];
  join_token?: InputMaybe<Scalars['String']>;
};

export type JoinGroupResult = {
  __typename?: 'JoinGroupResult';
  group?: Maybe<Groups>;
  group_id: Scalars['uuid'];
  user?: Maybe<Users>;
  user_id: Scalars['uuid'];
};

export type RegistrationResult = {
  __typename?: 'RegistrationResult';
  user?: Maybe<Users>;
  user_id: Scalars['uuid'];
};

export type RequestJoinGroupInput = {
  group_id: Scalars['uuid'];
  message?: InputMaybe<Scalars['String']>;
};

export type RequestJoinGroupResult = {
  __typename?: 'RequestJoinGroupResult';
  group?: Maybe<Groups>;
  group_id: Scalars['uuid'];
  user?: Maybe<Users>;
  user_id: Scalars['uuid'];
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
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
  category?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  expiry?: InputMaybe<Scalars['timestamptz']>;
  groups?: InputMaybe<Array<UpdateGroupThing>>;
  id?: InputMaybe<Scalars['uuid']>;
  images?: InputMaybe<Array<UpdateThingImage>>;
  name?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

export type UpdateThingResult = {
  __typename?: 'UpdateThingResult';
  thing?: Maybe<Things>;
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
  distinct_on?: InputMaybe<Array<Notifications_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Notifications_Order_By>>;
  where?: InputMaybe<Notifications_Bool_Exp>;
};


/** columns and relationships of "activities" */
export type ActivitiesNotifications_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Notifications_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Notifications_Order_By>>;
  where?: InputMaybe<Notifications_Bool_Exp>;
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
  columns?: InputMaybe<Array<Activities_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "activities" */
export type Activities_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Activities_Max_Order_By>;
  min?: InputMaybe<Activities_Min_Order_By>;
};

/** input type for inserting array relation for remote table "activities" */
export type Activities_Arr_Rel_Insert_Input = {
  data: Array<Activities_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Activities_On_Conflict>;
};

/** Boolean expression to filter rows from the table "activities". All fields are combined with a logical 'AND'. */
export type Activities_Bool_Exp = {
  _and?: InputMaybe<Array<Activities_Bool_Exp>>;
  _not?: InputMaybe<Activities_Bool_Exp>;
  _or?: InputMaybe<Array<Activities_Bool_Exp>>;
  actor?: InputMaybe<Users_Bool_Exp>;
  actor_id?: InputMaybe<Uuid_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  entity?: InputMaybe<Entities_Bool_Exp>;
  entity_id?: InputMaybe<Uuid_Comparison_Exp>;
  group?: InputMaybe<Groups_Bool_Exp>;
  group_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  notifications?: InputMaybe<Notifications_Bool_Exp>;
  secondary_entity?: InputMaybe<Entities_Bool_Exp>;
  secondary_entity_id?: InputMaybe<Uuid_Comparison_Exp>;
  verb?: InputMaybe<Activity_Verb_Enum_Comparison_Exp>;
};

/** unique or primary key constraints on table "activities" */
export enum Activities_Constraint {
  /** unique or primary key constraint on columns "id" */
  ActivitiesPkey = 'activities_pkey'
}

/** input type for inserting data into table "activities" */
export type Activities_Insert_Input = {
  actor?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  actor_id?: InputMaybe<Scalars['uuid']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  entity?: InputMaybe<Entities_Obj_Rel_Insert_Input>;
  entity_id?: InputMaybe<Scalars['uuid']>;
  group?: InputMaybe<Groups_Obj_Rel_Insert_Input>;
  group_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  notifications?: InputMaybe<Notifications_Arr_Rel_Insert_Input>;
  secondary_entity?: InputMaybe<Entities_Obj_Rel_Insert_Input>;
  secondary_entity_id?: InputMaybe<Scalars['uuid']>;
  verb?: InputMaybe<Activity_Verb_Enum>;
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
  actor_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  entity_id?: InputMaybe<Order_By>;
  group_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  secondary_entity_id?: InputMaybe<Order_By>;
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
  actor_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  entity_id?: InputMaybe<Order_By>;
  group_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  secondary_entity_id?: InputMaybe<Order_By>;
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
  /** upsert condition */
  on_conflict?: InputMaybe<Activities_On_Conflict>;
};

/** on_conflict condition type for table "activities" */
export type Activities_On_Conflict = {
  constraint: Activities_Constraint;
  update_columns?: Array<Activities_Update_Column>;
  where?: InputMaybe<Activities_Bool_Exp>;
};

/** Ordering options when selecting data from "activities". */
export type Activities_Order_By = {
  actor?: InputMaybe<Users_Order_By>;
  actor_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  entity?: InputMaybe<Entities_Order_By>;
  entity_id?: InputMaybe<Order_By>;
  group?: InputMaybe<Groups_Order_By>;
  group_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  notifications_aggregate?: InputMaybe<Notifications_Aggregate_Order_By>;
  secondary_entity?: InputMaybe<Entities_Order_By>;
  secondary_entity_id?: InputMaybe<Order_By>;
  verb?: InputMaybe<Order_By>;
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
  actor_id?: InputMaybe<Scalars['uuid']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  entity_id?: InputMaybe<Scalars['uuid']>;
  group_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  secondary_entity_id?: InputMaybe<Scalars['uuid']>;
  verb?: InputMaybe<Activity_Verb_Enum>;
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

export type Activities_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Activities_Set_Input>;
  where: Activities_Bool_Exp;
};

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
  columns?: InputMaybe<Array<Activity_Verb_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "activity_verb". All fields are combined with a logical 'AND'. */
export type Activity_Verb_Bool_Exp = {
  _and?: InputMaybe<Array<Activity_Verb_Bool_Exp>>;
  _not?: InputMaybe<Activity_Verb_Bool_Exp>;
  _or?: InputMaybe<Array<Activity_Verb_Bool_Exp>>;
  comment?: InputMaybe<String_Comparison_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "activity_verb" */
export enum Activity_Verb_Constraint {
  /** unique or primary key constraint on columns "value" */
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
  _eq?: InputMaybe<Activity_Verb_Enum>;
  _in?: InputMaybe<Array<Activity_Verb_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Activity_Verb_Enum>;
  _nin?: InputMaybe<Array<Activity_Verb_Enum>>;
};

/** input type for inserting data into table "activity_verb" */
export type Activity_Verb_Insert_Input = {
  comment?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
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

/** on_conflict condition type for table "activity_verb" */
export type Activity_Verb_On_Conflict = {
  constraint: Activity_Verb_Constraint;
  update_columns?: Array<Activity_Verb_Update_Column>;
  where?: InputMaybe<Activity_Verb_Bool_Exp>;
};

/** Ordering options when selecting data from "activity_verb". */
export type Activity_Verb_Order_By = {
  comment?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
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
  comment?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** update columns of table "activity_verb" */
export enum Activity_Verb_Update_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

export type Activity_Verb_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Activity_Verb_Set_Input>;
  where: Activity_Verb_Bool_Exp;
};

/** Oauth requests, inserted before redirecting to the provider's site. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthProviderRequests = {
  __typename?: 'authProviderRequests';
  id: Scalars['uuid'];
  options?: Maybe<Scalars['jsonb']>;
};


/** Oauth requests, inserted before redirecting to the provider's site. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthProviderRequestsOptionsArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "auth.provider_requests" */
export type AuthProviderRequests_Aggregate = {
  __typename?: 'authProviderRequests_aggregate';
  aggregate?: Maybe<AuthProviderRequests_Aggregate_Fields>;
  nodes: Array<AuthProviderRequests>;
};

/** aggregate fields of "auth.provider_requests" */
export type AuthProviderRequests_Aggregate_Fields = {
  __typename?: 'authProviderRequests_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<AuthProviderRequests_Max_Fields>;
  min?: Maybe<AuthProviderRequests_Min_Fields>;
};


/** aggregate fields of "auth.provider_requests" */
export type AuthProviderRequests_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthProviderRequests_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type AuthProviderRequests_Append_Input = {
  options?: InputMaybe<Scalars['jsonb']>;
};

/** Boolean expression to filter rows from the table "auth.provider_requests". All fields are combined with a logical 'AND'. */
export type AuthProviderRequests_Bool_Exp = {
  _and?: InputMaybe<Array<AuthProviderRequests_Bool_Exp>>;
  _not?: InputMaybe<AuthProviderRequests_Bool_Exp>;
  _or?: InputMaybe<Array<AuthProviderRequests_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  options?: InputMaybe<Jsonb_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.provider_requests" */
export enum AuthProviderRequests_Constraint {
  /** unique or primary key constraint on columns "id" */
  ProviderRequestsPkey = 'provider_requests_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type AuthProviderRequests_Delete_At_Path_Input = {
  options?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type AuthProviderRequests_Delete_Elem_Input = {
  options?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type AuthProviderRequests_Delete_Key_Input = {
  options?: InputMaybe<Scalars['String']>;
};

/** input type for inserting data into table "auth.provider_requests" */
export type AuthProviderRequests_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  options?: InputMaybe<Scalars['jsonb']>;
};

/** aggregate max on columns */
export type AuthProviderRequests_Max_Fields = {
  __typename?: 'authProviderRequests_max_fields';
  id?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type AuthProviderRequests_Min_Fields = {
  __typename?: 'authProviderRequests_min_fields';
  id?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "auth.provider_requests" */
export type AuthProviderRequests_Mutation_Response = {
  __typename?: 'authProviderRequests_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthProviderRequests>;
};

/** on_conflict condition type for table "auth.provider_requests" */
export type AuthProviderRequests_On_Conflict = {
  constraint: AuthProviderRequests_Constraint;
  update_columns?: Array<AuthProviderRequests_Update_Column>;
  where?: InputMaybe<AuthProviderRequests_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.provider_requests". */
export type AuthProviderRequests_Order_By = {
  id?: InputMaybe<Order_By>;
  options?: InputMaybe<Order_By>;
};

/** primary key columns input for table: authProviderRequests */
export type AuthProviderRequests_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type AuthProviderRequests_Prepend_Input = {
  options?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "auth.provider_requests" */
export enum AuthProviderRequests_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Options = 'options'
}

/** input type for updating data in table "auth.provider_requests" */
export type AuthProviderRequests_Set_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  options?: InputMaybe<Scalars['jsonb']>;
};

/** update columns of table "auth.provider_requests" */
export enum AuthProviderRequests_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Options = 'options'
}

export type AuthProviderRequests_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<AuthProviderRequests_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<AuthProviderRequests_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<AuthProviderRequests_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<AuthProviderRequests_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<AuthProviderRequests_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthProviderRequests_Set_Input>;
  where: AuthProviderRequests_Bool_Exp;
};

/** List of available Oauth providers. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthProviders = {
  __typename?: 'authProviders';
  id: Scalars['String'];
  /** An array relationship */
  userProviders: Array<AuthUserProviders>;
  /** An aggregate relationship */
  userProviders_aggregate: AuthUserProviders_Aggregate;
};


/** List of available Oauth providers. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthProvidersUserProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


/** List of available Oauth providers. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthProvidersUserProviders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};

/** aggregated selection of "auth.providers" */
export type AuthProviders_Aggregate = {
  __typename?: 'authProviders_aggregate';
  aggregate?: Maybe<AuthProviders_Aggregate_Fields>;
  nodes: Array<AuthProviders>;
};

/** aggregate fields of "auth.providers" */
export type AuthProviders_Aggregate_Fields = {
  __typename?: 'authProviders_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<AuthProviders_Max_Fields>;
  min?: Maybe<AuthProviders_Min_Fields>;
};


/** aggregate fields of "auth.providers" */
export type AuthProviders_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthProviders_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "auth.providers". All fields are combined with a logical 'AND'. */
export type AuthProviders_Bool_Exp = {
  _and?: InputMaybe<Array<AuthProviders_Bool_Exp>>;
  _not?: InputMaybe<AuthProviders_Bool_Exp>;
  _or?: InputMaybe<Array<AuthProviders_Bool_Exp>>;
  id?: InputMaybe<String_Comparison_Exp>;
  userProviders?: InputMaybe<AuthUserProviders_Bool_Exp>;
};

/** unique or primary key constraints on table "auth.providers" */
export enum AuthProviders_Constraint {
  /** unique or primary key constraint on columns "id" */
  ProvidersPkey = 'providers_pkey'
}

/** input type for inserting data into table "auth.providers" */
export type AuthProviders_Insert_Input = {
  id?: InputMaybe<Scalars['String']>;
  userProviders?: InputMaybe<AuthUserProviders_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type AuthProviders_Max_Fields = {
  __typename?: 'authProviders_max_fields';
  id?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type AuthProviders_Min_Fields = {
  __typename?: 'authProviders_min_fields';
  id?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "auth.providers" */
export type AuthProviders_Mutation_Response = {
  __typename?: 'authProviders_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthProviders>;
};

/** input type for inserting object relation for remote table "auth.providers" */
export type AuthProviders_Obj_Rel_Insert_Input = {
  data: AuthProviders_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<AuthProviders_On_Conflict>;
};

/** on_conflict condition type for table "auth.providers" */
export type AuthProviders_On_Conflict = {
  constraint: AuthProviders_Constraint;
  update_columns?: Array<AuthProviders_Update_Column>;
  where?: InputMaybe<AuthProviders_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.providers". */
export type AuthProviders_Order_By = {
  id?: InputMaybe<Order_By>;
  userProviders_aggregate?: InputMaybe<AuthUserProviders_Aggregate_Order_By>;
};

/** primary key columns input for table: authProviders */
export type AuthProviders_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "auth.providers" */
export enum AuthProviders_Select_Column {
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "auth.providers" */
export type AuthProviders_Set_Input = {
  id?: InputMaybe<Scalars['String']>;
};

/** update columns of table "auth.providers" */
export enum AuthProviders_Update_Column {
  /** column name */
  Id = 'id'
}

export type AuthProviders_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthProviders_Set_Input>;
  where: AuthProviders_Bool_Exp;
};

/** User refresh tokens. Hasura auth uses them to rotate new access tokens as long as the refresh token is not expired. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRefreshTokens = {
  __typename?: 'authRefreshTokens';
  createdAt: Scalars['timestamptz'];
  expiresAt: Scalars['timestamptz'];
  refreshToken: Scalars['uuid'];
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid'];
};

/** aggregated selection of "auth.refresh_tokens" */
export type AuthRefreshTokens_Aggregate = {
  __typename?: 'authRefreshTokens_aggregate';
  aggregate?: Maybe<AuthRefreshTokens_Aggregate_Fields>;
  nodes: Array<AuthRefreshTokens>;
};

/** aggregate fields of "auth.refresh_tokens" */
export type AuthRefreshTokens_Aggregate_Fields = {
  __typename?: 'authRefreshTokens_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<AuthRefreshTokens_Max_Fields>;
  min?: Maybe<AuthRefreshTokens_Min_Fields>;
};


/** aggregate fields of "auth.refresh_tokens" */
export type AuthRefreshTokens_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auth.refresh_tokens" */
export type AuthRefreshTokens_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<AuthRefreshTokens_Max_Order_By>;
  min?: InputMaybe<AuthRefreshTokens_Min_Order_By>;
};

/** input type for inserting array relation for remote table "auth.refresh_tokens" */
export type AuthRefreshTokens_Arr_Rel_Insert_Input = {
  data: Array<AuthRefreshTokens_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<AuthRefreshTokens_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auth.refresh_tokens". All fields are combined with a logical 'AND'. */
export type AuthRefreshTokens_Bool_Exp = {
  _and?: InputMaybe<Array<AuthRefreshTokens_Bool_Exp>>;
  _not?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
  _or?: InputMaybe<Array<AuthRefreshTokens_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  expiresAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  refreshToken?: InputMaybe<Uuid_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.refresh_tokens" */
export enum AuthRefreshTokens_Constraint {
  /** unique or primary key constraint on columns "refresh_token" */
  RefreshTokensPkey = 'refresh_tokens_pkey'
}

/** input type for inserting data into table "auth.refresh_tokens" */
export type AuthRefreshTokens_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  expiresAt?: InputMaybe<Scalars['timestamptz']>;
  refreshToken?: InputMaybe<Scalars['uuid']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type AuthRefreshTokens_Max_Fields = {
  __typename?: 'authRefreshTokens_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  expiresAt?: Maybe<Scalars['timestamptz']>;
  refreshToken?: Maybe<Scalars['uuid']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "auth.refresh_tokens" */
export type AuthRefreshTokens_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  expiresAt?: InputMaybe<Order_By>;
  refreshToken?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type AuthRefreshTokens_Min_Fields = {
  __typename?: 'authRefreshTokens_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  expiresAt?: Maybe<Scalars['timestamptz']>;
  refreshToken?: Maybe<Scalars['uuid']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "auth.refresh_tokens" */
export type AuthRefreshTokens_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  expiresAt?: InputMaybe<Order_By>;
  refreshToken?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "auth.refresh_tokens" */
export type AuthRefreshTokens_Mutation_Response = {
  __typename?: 'authRefreshTokens_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthRefreshTokens>;
};

/** on_conflict condition type for table "auth.refresh_tokens" */
export type AuthRefreshTokens_On_Conflict = {
  constraint: AuthRefreshTokens_Constraint;
  update_columns?: Array<AuthRefreshTokens_Update_Column>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.refresh_tokens". */
export type AuthRefreshTokens_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  expiresAt?: InputMaybe<Order_By>;
  refreshToken?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: authRefreshTokens */
export type AuthRefreshTokens_Pk_Columns_Input = {
  refreshToken: Scalars['uuid'];
};

/** select columns of table "auth.refresh_tokens" */
export enum AuthRefreshTokens_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  ExpiresAt = 'expiresAt',
  /** column name */
  RefreshToken = 'refreshToken',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "auth.refresh_tokens" */
export type AuthRefreshTokens_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  expiresAt?: InputMaybe<Scalars['timestamptz']>;
  refreshToken?: InputMaybe<Scalars['uuid']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "auth.refresh_tokens" */
export enum AuthRefreshTokens_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  ExpiresAt = 'expiresAt',
  /** column name */
  RefreshToken = 'refreshToken',
  /** column name */
  UserId = 'userId'
}

export type AuthRefreshTokens_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthRefreshTokens_Set_Input>;
  where: AuthRefreshTokens_Bool_Exp;
};

/** Persistent Hasura roles for users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRoles = {
  __typename?: 'authRoles';
  role: Scalars['String'];
  /** An array relationship */
  userRoles: Array<AuthUserRoles>;
  /** An aggregate relationship */
  userRoles_aggregate: AuthUserRoles_Aggregate;
  /** An array relationship */
  usersByDefaultRole: Array<Users>;
  /** An aggregate relationship */
  usersByDefaultRole_aggregate: Users_Aggregate;
};


/** Persistent Hasura roles for users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRolesUserRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


/** Persistent Hasura roles for users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRolesUserRoles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


/** Persistent Hasura roles for users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRolesUsersByDefaultRoleArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


/** Persistent Hasura roles for users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRolesUsersByDefaultRole_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** aggregated selection of "auth.roles" */
export type AuthRoles_Aggregate = {
  __typename?: 'authRoles_aggregate';
  aggregate?: Maybe<AuthRoles_Aggregate_Fields>;
  nodes: Array<AuthRoles>;
};

/** aggregate fields of "auth.roles" */
export type AuthRoles_Aggregate_Fields = {
  __typename?: 'authRoles_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<AuthRoles_Max_Fields>;
  min?: Maybe<AuthRoles_Min_Fields>;
};


/** aggregate fields of "auth.roles" */
export type AuthRoles_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthRoles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "auth.roles". All fields are combined with a logical 'AND'. */
export type AuthRoles_Bool_Exp = {
  _and?: InputMaybe<Array<AuthRoles_Bool_Exp>>;
  _not?: InputMaybe<AuthRoles_Bool_Exp>;
  _or?: InputMaybe<Array<AuthRoles_Bool_Exp>>;
  role?: InputMaybe<String_Comparison_Exp>;
  userRoles?: InputMaybe<AuthUserRoles_Bool_Exp>;
  usersByDefaultRole?: InputMaybe<Users_Bool_Exp>;
};

/** unique or primary key constraints on table "auth.roles" */
export enum AuthRoles_Constraint {
  /** unique or primary key constraint on columns "role" */
  RolesPkey = 'roles_pkey'
}

/** input type for inserting data into table "auth.roles" */
export type AuthRoles_Insert_Input = {
  role?: InputMaybe<Scalars['String']>;
  userRoles?: InputMaybe<AuthUserRoles_Arr_Rel_Insert_Input>;
  usersByDefaultRole?: InputMaybe<Users_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type AuthRoles_Max_Fields = {
  __typename?: 'authRoles_max_fields';
  role?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type AuthRoles_Min_Fields = {
  __typename?: 'authRoles_min_fields';
  role?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "auth.roles" */
export type AuthRoles_Mutation_Response = {
  __typename?: 'authRoles_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthRoles>;
};

/** input type for inserting object relation for remote table "auth.roles" */
export type AuthRoles_Obj_Rel_Insert_Input = {
  data: AuthRoles_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<AuthRoles_On_Conflict>;
};

/** on_conflict condition type for table "auth.roles" */
export type AuthRoles_On_Conflict = {
  constraint: AuthRoles_Constraint;
  update_columns?: Array<AuthRoles_Update_Column>;
  where?: InputMaybe<AuthRoles_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.roles". */
export type AuthRoles_Order_By = {
  role?: InputMaybe<Order_By>;
  userRoles_aggregate?: InputMaybe<AuthUserRoles_Aggregate_Order_By>;
  usersByDefaultRole_aggregate?: InputMaybe<Users_Aggregate_Order_By>;
};

/** primary key columns input for table: authRoles */
export type AuthRoles_Pk_Columns_Input = {
  role: Scalars['String'];
};

/** select columns of table "auth.roles" */
export enum AuthRoles_Select_Column {
  /** column name */
  Role = 'role'
}

/** input type for updating data in table "auth.roles" */
export type AuthRoles_Set_Input = {
  role?: InputMaybe<Scalars['String']>;
};

/** update columns of table "auth.roles" */
export enum AuthRoles_Update_Column {
  /** column name */
  Role = 'role'
}

export type AuthRoles_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthRoles_Set_Input>;
  where: AuthRoles_Bool_Exp;
};

/** User webauthn authenticators. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthUserAuthenticators = {
  __typename?: 'authUserAuthenticators';
  counter: Scalars['bigint'];
  credentialId: Scalars['String'];
  credentialPublicKey?: Maybe<Scalars['bytea']>;
  id: Scalars['uuid'];
  nickname?: Maybe<Scalars['String']>;
  transports: Scalars['String'];
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid'];
};

/** aggregated selection of "auth.user_authenticators" */
export type AuthUserAuthenticators_Aggregate = {
  __typename?: 'authUserAuthenticators_aggregate';
  aggregate?: Maybe<AuthUserAuthenticators_Aggregate_Fields>;
  nodes: Array<AuthUserAuthenticators>;
};

/** aggregate fields of "auth.user_authenticators" */
export type AuthUserAuthenticators_Aggregate_Fields = {
  __typename?: 'authUserAuthenticators_aggregate_fields';
  avg?: Maybe<AuthUserAuthenticators_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<AuthUserAuthenticators_Max_Fields>;
  min?: Maybe<AuthUserAuthenticators_Min_Fields>;
  stddev?: Maybe<AuthUserAuthenticators_Stddev_Fields>;
  stddev_pop?: Maybe<AuthUserAuthenticators_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<AuthUserAuthenticators_Stddev_Samp_Fields>;
  sum?: Maybe<AuthUserAuthenticators_Sum_Fields>;
  var_pop?: Maybe<AuthUserAuthenticators_Var_Pop_Fields>;
  var_samp?: Maybe<AuthUserAuthenticators_Var_Samp_Fields>;
  variance?: Maybe<AuthUserAuthenticators_Variance_Fields>;
};


/** aggregate fields of "auth.user_authenticators" */
export type AuthUserAuthenticators_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthUserAuthenticators_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auth.user_authenticators" */
export type AuthUserAuthenticators_Aggregate_Order_By = {
  avg?: InputMaybe<AuthUserAuthenticators_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<AuthUserAuthenticators_Max_Order_By>;
  min?: InputMaybe<AuthUserAuthenticators_Min_Order_By>;
  stddev?: InputMaybe<AuthUserAuthenticators_Stddev_Order_By>;
  stddev_pop?: InputMaybe<AuthUserAuthenticators_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<AuthUserAuthenticators_Stddev_Samp_Order_By>;
  sum?: InputMaybe<AuthUserAuthenticators_Sum_Order_By>;
  var_pop?: InputMaybe<AuthUserAuthenticators_Var_Pop_Order_By>;
  var_samp?: InputMaybe<AuthUserAuthenticators_Var_Samp_Order_By>;
  variance?: InputMaybe<AuthUserAuthenticators_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "auth.user_authenticators" */
export type AuthUserAuthenticators_Arr_Rel_Insert_Input = {
  data: Array<AuthUserAuthenticators_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<AuthUserAuthenticators_On_Conflict>;
};

/** aggregate avg on columns */
export type AuthUserAuthenticators_Avg_Fields = {
  __typename?: 'authUserAuthenticators_avg_fields';
  counter?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "auth.user_authenticators" */
export type AuthUserAuthenticators_Avg_Order_By = {
  counter?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "auth.user_authenticators". All fields are combined with a logical 'AND'. */
export type AuthUserAuthenticators_Bool_Exp = {
  _and?: InputMaybe<Array<AuthUserAuthenticators_Bool_Exp>>;
  _not?: InputMaybe<AuthUserAuthenticators_Bool_Exp>;
  _or?: InputMaybe<Array<AuthUserAuthenticators_Bool_Exp>>;
  counter?: InputMaybe<Bigint_Comparison_Exp>;
  credentialId?: InputMaybe<String_Comparison_Exp>;
  credentialPublicKey?: InputMaybe<Bytea_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  nickname?: InputMaybe<String_Comparison_Exp>;
  transports?: InputMaybe<String_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.user_authenticators" */
export enum AuthUserAuthenticators_Constraint {
  /** unique or primary key constraint on columns "credential_id" */
  UserAuthenticatorsCredentialIdKey = 'user_authenticators_credential_id_key',
  /** unique or primary key constraint on columns "id" */
  UserAuthenticatorsPkey = 'user_authenticators_pkey'
}

/** input type for incrementing numeric columns in table "auth.user_authenticators" */
export type AuthUserAuthenticators_Inc_Input = {
  counter?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "auth.user_authenticators" */
export type AuthUserAuthenticators_Insert_Input = {
  counter?: InputMaybe<Scalars['bigint']>;
  credentialId?: InputMaybe<Scalars['String']>;
  credentialPublicKey?: InputMaybe<Scalars['bytea']>;
  id?: InputMaybe<Scalars['uuid']>;
  nickname?: InputMaybe<Scalars['String']>;
  transports?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type AuthUserAuthenticators_Max_Fields = {
  __typename?: 'authUserAuthenticators_max_fields';
  counter?: Maybe<Scalars['bigint']>;
  credentialId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  nickname?: Maybe<Scalars['String']>;
  transports?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "auth.user_authenticators" */
export type AuthUserAuthenticators_Max_Order_By = {
  counter?: InputMaybe<Order_By>;
  credentialId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  nickname?: InputMaybe<Order_By>;
  transports?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type AuthUserAuthenticators_Min_Fields = {
  __typename?: 'authUserAuthenticators_min_fields';
  counter?: Maybe<Scalars['bigint']>;
  credentialId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  nickname?: Maybe<Scalars['String']>;
  transports?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "auth.user_authenticators" */
export type AuthUserAuthenticators_Min_Order_By = {
  counter?: InputMaybe<Order_By>;
  credentialId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  nickname?: InputMaybe<Order_By>;
  transports?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "auth.user_authenticators" */
export type AuthUserAuthenticators_Mutation_Response = {
  __typename?: 'authUserAuthenticators_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthUserAuthenticators>;
};

/** on_conflict condition type for table "auth.user_authenticators" */
export type AuthUserAuthenticators_On_Conflict = {
  constraint: AuthUserAuthenticators_Constraint;
  update_columns?: Array<AuthUserAuthenticators_Update_Column>;
  where?: InputMaybe<AuthUserAuthenticators_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.user_authenticators". */
export type AuthUserAuthenticators_Order_By = {
  counter?: InputMaybe<Order_By>;
  credentialId?: InputMaybe<Order_By>;
  credentialPublicKey?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  nickname?: InputMaybe<Order_By>;
  transports?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: authUserAuthenticators */
export type AuthUserAuthenticators_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "auth.user_authenticators" */
export enum AuthUserAuthenticators_Select_Column {
  /** column name */
  Counter = 'counter',
  /** column name */
  CredentialId = 'credentialId',
  /** column name */
  CredentialPublicKey = 'credentialPublicKey',
  /** column name */
  Id = 'id',
  /** column name */
  Nickname = 'nickname',
  /** column name */
  Transports = 'transports',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "auth.user_authenticators" */
export type AuthUserAuthenticators_Set_Input = {
  counter?: InputMaybe<Scalars['bigint']>;
  credentialId?: InputMaybe<Scalars['String']>;
  credentialPublicKey?: InputMaybe<Scalars['bytea']>;
  id?: InputMaybe<Scalars['uuid']>;
  nickname?: InputMaybe<Scalars['String']>;
  transports?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type AuthUserAuthenticators_Stddev_Fields = {
  __typename?: 'authUserAuthenticators_stddev_fields';
  counter?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "auth.user_authenticators" */
export type AuthUserAuthenticators_Stddev_Order_By = {
  counter?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type AuthUserAuthenticators_Stddev_Pop_Fields = {
  __typename?: 'authUserAuthenticators_stddev_pop_fields';
  counter?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "auth.user_authenticators" */
export type AuthUserAuthenticators_Stddev_Pop_Order_By = {
  counter?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type AuthUserAuthenticators_Stddev_Samp_Fields = {
  __typename?: 'authUserAuthenticators_stddev_samp_fields';
  counter?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "auth.user_authenticators" */
export type AuthUserAuthenticators_Stddev_Samp_Order_By = {
  counter?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type AuthUserAuthenticators_Sum_Fields = {
  __typename?: 'authUserAuthenticators_sum_fields';
  counter?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "auth.user_authenticators" */
export type AuthUserAuthenticators_Sum_Order_By = {
  counter?: InputMaybe<Order_By>;
};

/** update columns of table "auth.user_authenticators" */
export enum AuthUserAuthenticators_Update_Column {
  /** column name */
  Counter = 'counter',
  /** column name */
  CredentialId = 'credentialId',
  /** column name */
  CredentialPublicKey = 'credentialPublicKey',
  /** column name */
  Id = 'id',
  /** column name */
  Nickname = 'nickname',
  /** column name */
  Transports = 'transports',
  /** column name */
  UserId = 'userId'
}

export type AuthUserAuthenticators_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<AuthUserAuthenticators_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthUserAuthenticators_Set_Input>;
  where: AuthUserAuthenticators_Bool_Exp;
};

/** aggregate var_pop on columns */
export type AuthUserAuthenticators_Var_Pop_Fields = {
  __typename?: 'authUserAuthenticators_var_pop_fields';
  counter?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "auth.user_authenticators" */
export type AuthUserAuthenticators_Var_Pop_Order_By = {
  counter?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type AuthUserAuthenticators_Var_Samp_Fields = {
  __typename?: 'authUserAuthenticators_var_samp_fields';
  counter?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "auth.user_authenticators" */
export type AuthUserAuthenticators_Var_Samp_Order_By = {
  counter?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type AuthUserAuthenticators_Variance_Fields = {
  __typename?: 'authUserAuthenticators_variance_fields';
  counter?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "auth.user_authenticators" */
export type AuthUserAuthenticators_Variance_Order_By = {
  counter?: InputMaybe<Order_By>;
};

/** Active providers for a given user. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthUserProviders = {
  __typename?: 'authUserProviders';
  accessToken: Scalars['String'];
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  /** An object relationship */
  provider: AuthProviders;
  providerId: Scalars['String'];
  providerUserId: Scalars['String'];
  refreshToken?: Maybe<Scalars['String']>;
  updatedAt: Scalars['timestamptz'];
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid'];
};

/** aggregated selection of "auth.user_providers" */
export type AuthUserProviders_Aggregate = {
  __typename?: 'authUserProviders_aggregate';
  aggregate?: Maybe<AuthUserProviders_Aggregate_Fields>;
  nodes: Array<AuthUserProviders>;
};

/** aggregate fields of "auth.user_providers" */
export type AuthUserProviders_Aggregate_Fields = {
  __typename?: 'authUserProviders_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<AuthUserProviders_Max_Fields>;
  min?: Maybe<AuthUserProviders_Min_Fields>;
};


/** aggregate fields of "auth.user_providers" */
export type AuthUserProviders_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auth.user_providers" */
export type AuthUserProviders_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<AuthUserProviders_Max_Order_By>;
  min?: InputMaybe<AuthUserProviders_Min_Order_By>;
};

/** input type for inserting array relation for remote table "auth.user_providers" */
export type AuthUserProviders_Arr_Rel_Insert_Input = {
  data: Array<AuthUserProviders_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<AuthUserProviders_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auth.user_providers". All fields are combined with a logical 'AND'. */
export type AuthUserProviders_Bool_Exp = {
  _and?: InputMaybe<Array<AuthUserProviders_Bool_Exp>>;
  _not?: InputMaybe<AuthUserProviders_Bool_Exp>;
  _or?: InputMaybe<Array<AuthUserProviders_Bool_Exp>>;
  accessToken?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  provider?: InputMaybe<AuthProviders_Bool_Exp>;
  providerId?: InputMaybe<String_Comparison_Exp>;
  providerUserId?: InputMaybe<String_Comparison_Exp>;
  refreshToken?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.user_providers" */
export enum AuthUserProviders_Constraint {
  /** unique or primary key constraint on columns "id" */
  UserProvidersPkey = 'user_providers_pkey',
  /** unique or primary key constraint on columns "provider_id", "provider_user_id" */
  UserProvidersProviderIdProviderUserIdKey = 'user_providers_provider_id_provider_user_id_key',
  /** unique or primary key constraint on columns "provider_id", "user_id" */
  UserProvidersUserIdProviderIdKey = 'user_providers_user_id_provider_id_key'
}

/** input type for inserting data into table "auth.user_providers" */
export type AuthUserProviders_Insert_Input = {
  accessToken?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  provider?: InputMaybe<AuthProviders_Obj_Rel_Insert_Input>;
  providerId?: InputMaybe<Scalars['String']>;
  providerUserId?: InputMaybe<Scalars['String']>;
  refreshToken?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type AuthUserProviders_Max_Fields = {
  __typename?: 'authUserProviders_max_fields';
  accessToken?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  providerId?: Maybe<Scalars['String']>;
  providerUserId?: Maybe<Scalars['String']>;
  refreshToken?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "auth.user_providers" */
export type AuthUserProviders_Max_Order_By = {
  accessToken?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  providerId?: InputMaybe<Order_By>;
  providerUserId?: InputMaybe<Order_By>;
  refreshToken?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type AuthUserProviders_Min_Fields = {
  __typename?: 'authUserProviders_min_fields';
  accessToken?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  providerId?: Maybe<Scalars['String']>;
  providerUserId?: Maybe<Scalars['String']>;
  refreshToken?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "auth.user_providers" */
export type AuthUserProviders_Min_Order_By = {
  accessToken?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  providerId?: InputMaybe<Order_By>;
  providerUserId?: InputMaybe<Order_By>;
  refreshToken?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "auth.user_providers" */
export type AuthUserProviders_Mutation_Response = {
  __typename?: 'authUserProviders_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthUserProviders>;
};

/** on_conflict condition type for table "auth.user_providers" */
export type AuthUserProviders_On_Conflict = {
  constraint: AuthUserProviders_Constraint;
  update_columns?: Array<AuthUserProviders_Update_Column>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.user_providers". */
export type AuthUserProviders_Order_By = {
  accessToken?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  provider?: InputMaybe<AuthProviders_Order_By>;
  providerId?: InputMaybe<Order_By>;
  providerUserId?: InputMaybe<Order_By>;
  refreshToken?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: authUserProviders */
export type AuthUserProviders_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "auth.user_providers" */
export enum AuthUserProviders_Select_Column {
  /** column name */
  AccessToken = 'accessToken',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  ProviderId = 'providerId',
  /** column name */
  ProviderUserId = 'providerUserId',
  /** column name */
  RefreshToken = 'refreshToken',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "auth.user_providers" */
export type AuthUserProviders_Set_Input = {
  accessToken?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  providerId?: InputMaybe<Scalars['String']>;
  providerUserId?: InputMaybe<Scalars['String']>;
  refreshToken?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "auth.user_providers" */
export enum AuthUserProviders_Update_Column {
  /** column name */
  AccessToken = 'accessToken',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  ProviderId = 'providerId',
  /** column name */
  ProviderUserId = 'providerUserId',
  /** column name */
  RefreshToken = 'refreshToken',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

export type AuthUserProviders_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthUserProviders_Set_Input>;
  where: AuthUserProviders_Bool_Exp;
};

/** Roles of users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthUserRoles = {
  __typename?: 'authUserRoles';
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  role: Scalars['String'];
  /** An object relationship */
  roleByRole: AuthRoles;
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid'];
};

/** aggregated selection of "auth.user_roles" */
export type AuthUserRoles_Aggregate = {
  __typename?: 'authUserRoles_aggregate';
  aggregate?: Maybe<AuthUserRoles_Aggregate_Fields>;
  nodes: Array<AuthUserRoles>;
};

/** aggregate fields of "auth.user_roles" */
export type AuthUserRoles_Aggregate_Fields = {
  __typename?: 'authUserRoles_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<AuthUserRoles_Max_Fields>;
  min?: Maybe<AuthUserRoles_Min_Fields>;
};


/** aggregate fields of "auth.user_roles" */
export type AuthUserRoles_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auth.user_roles" */
export type AuthUserRoles_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<AuthUserRoles_Max_Order_By>;
  min?: InputMaybe<AuthUserRoles_Min_Order_By>;
};

/** input type for inserting array relation for remote table "auth.user_roles" */
export type AuthUserRoles_Arr_Rel_Insert_Input = {
  data: Array<AuthUserRoles_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<AuthUserRoles_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auth.user_roles". All fields are combined with a logical 'AND'. */
export type AuthUserRoles_Bool_Exp = {
  _and?: InputMaybe<Array<AuthUserRoles_Bool_Exp>>;
  _not?: InputMaybe<AuthUserRoles_Bool_Exp>;
  _or?: InputMaybe<Array<AuthUserRoles_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  role?: InputMaybe<String_Comparison_Exp>;
  roleByRole?: InputMaybe<AuthRoles_Bool_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.user_roles" */
export enum AuthUserRoles_Constraint {
  /** unique or primary key constraint on columns "id" */
  UserRolesPkey = 'user_roles_pkey',
  /** unique or primary key constraint on columns "user_id", "role" */
  UserRolesUserIdRoleKey = 'user_roles_user_id_role_key'
}

/** input type for inserting data into table "auth.user_roles" */
export type AuthUserRoles_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  role?: InputMaybe<Scalars['String']>;
  roleByRole?: InputMaybe<AuthRoles_Obj_Rel_Insert_Input>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type AuthUserRoles_Max_Fields = {
  __typename?: 'authUserRoles_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  role?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "auth.user_roles" */
export type AuthUserRoles_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type AuthUserRoles_Min_Fields = {
  __typename?: 'authUserRoles_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  role?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "auth.user_roles" */
export type AuthUserRoles_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "auth.user_roles" */
export type AuthUserRoles_Mutation_Response = {
  __typename?: 'authUserRoles_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthUserRoles>;
};

/** on_conflict condition type for table "auth.user_roles" */
export type AuthUserRoles_On_Conflict = {
  constraint: AuthUserRoles_Constraint;
  update_columns?: Array<AuthUserRoles_Update_Column>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.user_roles". */
export type AuthUserRoles_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  roleByRole?: InputMaybe<AuthRoles_Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: authUserRoles */
export type AuthUserRoles_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "auth.user_roles" */
export enum AuthUserRoles_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Role = 'role',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "auth.user_roles" */
export type AuthUserRoles_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  role?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "auth.user_roles" */
export enum AuthUserRoles_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Role = 'role',
  /** column name */
  UserId = 'userId'
}

export type AuthUserRoles_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthUserRoles_Set_Input>;
  where: AuthUserRoles_Bool_Exp;
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bigint']>;
  _gt?: InputMaybe<Scalars['bigint']>;
  _gte?: InputMaybe<Scalars['bigint']>;
  _in?: InputMaybe<Array<Scalars['bigint']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['bigint']>;
  _lte?: InputMaybe<Scalars['bigint']>;
  _neq?: InputMaybe<Scalars['bigint']>;
  _nin?: InputMaybe<Array<Scalars['bigint']>>;
};

/** columns and relationships of "storage.buckets" */
export type Buckets = {
  __typename?: 'buckets';
  cacheControl?: Maybe<Scalars['String']>;
  createdAt: Scalars['timestamptz'];
  downloadExpiration: Scalars['Int'];
  /** An array relationship */
  files: Array<Files>;
  /** An aggregate relationship */
  files_aggregate: Files_Aggregate;
  id: Scalars['String'];
  maxUploadFileSize: Scalars['Int'];
  minUploadFileSize: Scalars['Int'];
  presignedUrlsEnabled: Scalars['Boolean'];
  updatedAt: Scalars['timestamptz'];
};


/** columns and relationships of "storage.buckets" */
export type BucketsFilesArgs = {
  distinct_on?: InputMaybe<Array<Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Order_By>>;
  where?: InputMaybe<Files_Bool_Exp>;
};


/** columns and relationships of "storage.buckets" */
export type BucketsFiles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Order_By>>;
  where?: InputMaybe<Files_Bool_Exp>;
};

/** aggregated selection of "storage.buckets" */
export type Buckets_Aggregate = {
  __typename?: 'buckets_aggregate';
  aggregate?: Maybe<Buckets_Aggregate_Fields>;
  nodes: Array<Buckets>;
};

/** aggregate fields of "storage.buckets" */
export type Buckets_Aggregate_Fields = {
  __typename?: 'buckets_aggregate_fields';
  avg?: Maybe<Buckets_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Buckets_Max_Fields>;
  min?: Maybe<Buckets_Min_Fields>;
  stddev?: Maybe<Buckets_Stddev_Fields>;
  stddev_pop?: Maybe<Buckets_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Buckets_Stddev_Samp_Fields>;
  sum?: Maybe<Buckets_Sum_Fields>;
  var_pop?: Maybe<Buckets_Var_Pop_Fields>;
  var_samp?: Maybe<Buckets_Var_Samp_Fields>;
  variance?: Maybe<Buckets_Variance_Fields>;
};


/** aggregate fields of "storage.buckets" */
export type Buckets_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Buckets_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Buckets_Avg_Fields = {
  __typename?: 'buckets_avg_fields';
  downloadExpiration?: Maybe<Scalars['Float']>;
  maxUploadFileSize?: Maybe<Scalars['Float']>;
  minUploadFileSize?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "storage.buckets". All fields are combined with a logical 'AND'. */
export type Buckets_Bool_Exp = {
  _and?: InputMaybe<Array<Buckets_Bool_Exp>>;
  _not?: InputMaybe<Buckets_Bool_Exp>;
  _or?: InputMaybe<Array<Buckets_Bool_Exp>>;
  cacheControl?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  downloadExpiration?: InputMaybe<Int_Comparison_Exp>;
  files?: InputMaybe<Files_Bool_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  maxUploadFileSize?: InputMaybe<Int_Comparison_Exp>;
  minUploadFileSize?: InputMaybe<Int_Comparison_Exp>;
  presignedUrlsEnabled?: InputMaybe<Boolean_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "storage.buckets" */
export enum Buckets_Constraint {
  /** unique or primary key constraint on columns "id" */
  BucketsPkey = 'buckets_pkey'
}

/** input type for incrementing numeric columns in table "storage.buckets" */
export type Buckets_Inc_Input = {
  downloadExpiration?: InputMaybe<Scalars['Int']>;
  maxUploadFileSize?: InputMaybe<Scalars['Int']>;
  minUploadFileSize?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "storage.buckets" */
export type Buckets_Insert_Input = {
  cacheControl?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  downloadExpiration?: InputMaybe<Scalars['Int']>;
  files?: InputMaybe<Files_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['String']>;
  maxUploadFileSize?: InputMaybe<Scalars['Int']>;
  minUploadFileSize?: InputMaybe<Scalars['Int']>;
  presignedUrlsEnabled?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Buckets_Max_Fields = {
  __typename?: 'buckets_max_fields';
  cacheControl?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  downloadExpiration?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  maxUploadFileSize?: Maybe<Scalars['Int']>;
  minUploadFileSize?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Buckets_Min_Fields = {
  __typename?: 'buckets_min_fields';
  cacheControl?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  downloadExpiration?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  maxUploadFileSize?: Maybe<Scalars['Int']>;
  minUploadFileSize?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "storage.buckets" */
export type Buckets_Mutation_Response = {
  __typename?: 'buckets_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Buckets>;
};

/** input type for inserting object relation for remote table "storage.buckets" */
export type Buckets_Obj_Rel_Insert_Input = {
  data: Buckets_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Buckets_On_Conflict>;
};

/** on_conflict condition type for table "storage.buckets" */
export type Buckets_On_Conflict = {
  constraint: Buckets_Constraint;
  update_columns?: Array<Buckets_Update_Column>;
  where?: InputMaybe<Buckets_Bool_Exp>;
};

/** Ordering options when selecting data from "storage.buckets". */
export type Buckets_Order_By = {
  cacheControl?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  downloadExpiration?: InputMaybe<Order_By>;
  files_aggregate?: InputMaybe<Files_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  maxUploadFileSize?: InputMaybe<Order_By>;
  minUploadFileSize?: InputMaybe<Order_By>;
  presignedUrlsEnabled?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: buckets */
export type Buckets_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "storage.buckets" */
export enum Buckets_Select_Column {
  /** column name */
  CacheControl = 'cacheControl',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DownloadExpiration = 'downloadExpiration',
  /** column name */
  Id = 'id',
  /** column name */
  MaxUploadFileSize = 'maxUploadFileSize',
  /** column name */
  MinUploadFileSize = 'minUploadFileSize',
  /** column name */
  PresignedUrlsEnabled = 'presignedUrlsEnabled',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "storage.buckets" */
export type Buckets_Set_Input = {
  cacheControl?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  downloadExpiration?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['String']>;
  maxUploadFileSize?: InputMaybe<Scalars['Int']>;
  minUploadFileSize?: InputMaybe<Scalars['Int']>;
  presignedUrlsEnabled?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Buckets_Stddev_Fields = {
  __typename?: 'buckets_stddev_fields';
  downloadExpiration?: Maybe<Scalars['Float']>;
  maxUploadFileSize?: Maybe<Scalars['Float']>;
  minUploadFileSize?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Buckets_Stddev_Pop_Fields = {
  __typename?: 'buckets_stddev_pop_fields';
  downloadExpiration?: Maybe<Scalars['Float']>;
  maxUploadFileSize?: Maybe<Scalars['Float']>;
  minUploadFileSize?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Buckets_Stddev_Samp_Fields = {
  __typename?: 'buckets_stddev_samp_fields';
  downloadExpiration?: Maybe<Scalars['Float']>;
  maxUploadFileSize?: Maybe<Scalars['Float']>;
  minUploadFileSize?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Buckets_Sum_Fields = {
  __typename?: 'buckets_sum_fields';
  downloadExpiration?: Maybe<Scalars['Int']>;
  maxUploadFileSize?: Maybe<Scalars['Int']>;
  minUploadFileSize?: Maybe<Scalars['Int']>;
};

/** update columns of table "storage.buckets" */
export enum Buckets_Update_Column {
  /** column name */
  CacheControl = 'cacheControl',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DownloadExpiration = 'downloadExpiration',
  /** column name */
  Id = 'id',
  /** column name */
  MaxUploadFileSize = 'maxUploadFileSize',
  /** column name */
  MinUploadFileSize = 'minUploadFileSize',
  /** column name */
  PresignedUrlsEnabled = 'presignedUrlsEnabled',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type Buckets_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Buckets_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Buckets_Set_Input>;
  where: Buckets_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Buckets_Var_Pop_Fields = {
  __typename?: 'buckets_var_pop_fields';
  downloadExpiration?: Maybe<Scalars['Float']>;
  maxUploadFileSize?: Maybe<Scalars['Float']>;
  minUploadFileSize?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Buckets_Var_Samp_Fields = {
  __typename?: 'buckets_var_samp_fields';
  downloadExpiration?: Maybe<Scalars['Float']>;
  maxUploadFileSize?: Maybe<Scalars['Float']>;
  minUploadFileSize?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Buckets_Variance_Fields = {
  __typename?: 'buckets_variance_fields';
  downloadExpiration?: Maybe<Scalars['Float']>;
  maxUploadFileSize?: Maybe<Scalars['Float']>;
  minUploadFileSize?: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "bytea". All fields are combined with logical 'AND'. */
export type Bytea_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bytea']>;
  _gt?: InputMaybe<Scalars['bytea']>;
  _gte?: InputMaybe<Scalars['bytea']>;
  _in?: InputMaybe<Array<Scalars['bytea']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['bytea']>;
  _lte?: InputMaybe<Scalars['bytea']>;
  _neq?: InputMaybe<Scalars['bytea']>;
  _nin?: InputMaybe<Array<Scalars['bytea']>>;
};

/** columns and relationships of "chat_group_member_info" */
export type Chat_Group_Member_Info = {
  __typename?: 'chat_group_member_info';
  /** An object relationship */
  chat_group?: Maybe<Chat_Groups>;
  chat_group_id?: Maybe<Scalars['uuid']>;
  /** An object relationship */
  chat_group_member?: Maybe<Chat_Group_Members>;
  has_unread?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['uuid']>;
  last_message_at?: Maybe<Scalars['timestamptz']>;
  last_read?: Maybe<Scalars['timestamptz']>;
  /** An object relationship */
  user?: Maybe<Users>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** aggregated selection of "chat_group_member_info" */
export type Chat_Group_Member_Info_Aggregate = {
  __typename?: 'chat_group_member_info_aggregate';
  aggregate?: Maybe<Chat_Group_Member_Info_Aggregate_Fields>;
  nodes: Array<Chat_Group_Member_Info>;
};

/** aggregate fields of "chat_group_member_info" */
export type Chat_Group_Member_Info_Aggregate_Fields = {
  __typename?: 'chat_group_member_info_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Chat_Group_Member_Info_Max_Fields>;
  min?: Maybe<Chat_Group_Member_Info_Min_Fields>;
};


/** aggregate fields of "chat_group_member_info" */
export type Chat_Group_Member_Info_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Chat_Group_Member_Info_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "chat_group_member_info". All fields are combined with a logical 'AND'. */
export type Chat_Group_Member_Info_Bool_Exp = {
  _and?: InputMaybe<Array<Chat_Group_Member_Info_Bool_Exp>>;
  _not?: InputMaybe<Chat_Group_Member_Info_Bool_Exp>;
  _or?: InputMaybe<Array<Chat_Group_Member_Info_Bool_Exp>>;
  chat_group?: InputMaybe<Chat_Groups_Bool_Exp>;
  chat_group_id?: InputMaybe<Uuid_Comparison_Exp>;
  chat_group_member?: InputMaybe<Chat_Group_Members_Bool_Exp>;
  has_unread?: InputMaybe<Boolean_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  last_message_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  last_read?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** input type for inserting data into table "chat_group_member_info" */
export type Chat_Group_Member_Info_Insert_Input = {
  chat_group?: InputMaybe<Chat_Groups_Obj_Rel_Insert_Input>;
  chat_group_id?: InputMaybe<Scalars['uuid']>;
  chat_group_member?: InputMaybe<Chat_Group_Members_Obj_Rel_Insert_Input>;
  has_unread?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['uuid']>;
  last_message_at?: InputMaybe<Scalars['timestamptz']>;
  last_read?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Chat_Group_Member_Info_Max_Fields = {
  __typename?: 'chat_group_member_info_max_fields';
  chat_group_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  last_message_at?: Maybe<Scalars['timestamptz']>;
  last_read?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type Chat_Group_Member_Info_Min_Fields = {
  __typename?: 'chat_group_member_info_min_fields';
  chat_group_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  last_message_at?: Maybe<Scalars['timestamptz']>;
  last_read?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** input type for inserting object relation for remote table "chat_group_member_info" */
export type Chat_Group_Member_Info_Obj_Rel_Insert_Input = {
  data: Chat_Group_Member_Info_Insert_Input;
};

/** Ordering options when selecting data from "chat_group_member_info". */
export type Chat_Group_Member_Info_Order_By = {
  chat_group?: InputMaybe<Chat_Groups_Order_By>;
  chat_group_id?: InputMaybe<Order_By>;
  chat_group_member?: InputMaybe<Chat_Group_Members_Order_By>;
  has_unread?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_message_at?: InputMaybe<Order_By>;
  last_read?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** select columns of table "chat_group_member_info" */
export enum Chat_Group_Member_Info_Select_Column {
  /** column name */
  ChatGroupId = 'chat_group_id',
  /** column name */
  HasUnread = 'has_unread',
  /** column name */
  Id = 'id',
  /** column name */
  LastMessageAt = 'last_message_at',
  /** column name */
  LastRead = 'last_read',
  /** column name */
  UserId = 'user_id'
}

/** columns and relationships of "chat_group_members" */
export type Chat_Group_Members = {
  __typename?: 'chat_group_members';
  /** An object relationship */
  chat_group: Chat_Groups;
  chat_group_id: Scalars['uuid'];
  id: Scalars['uuid'];
  /** An object relationship */
  info?: Maybe<Chat_Group_Member_Info>;
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
  columns?: InputMaybe<Array<Chat_Group_Members_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "chat_group_members" */
export type Chat_Group_Members_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Chat_Group_Members_Max_Order_By>;
  min?: InputMaybe<Chat_Group_Members_Min_Order_By>;
};

/** input type for inserting array relation for remote table "chat_group_members" */
export type Chat_Group_Members_Arr_Rel_Insert_Input = {
  data: Array<Chat_Group_Members_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Chat_Group_Members_On_Conflict>;
};

/** Boolean expression to filter rows from the table "chat_group_members". All fields are combined with a logical 'AND'. */
export type Chat_Group_Members_Bool_Exp = {
  _and?: InputMaybe<Array<Chat_Group_Members_Bool_Exp>>;
  _not?: InputMaybe<Chat_Group_Members_Bool_Exp>;
  _or?: InputMaybe<Array<Chat_Group_Members_Bool_Exp>>;
  chat_group?: InputMaybe<Chat_Groups_Bool_Exp>;
  chat_group_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  info?: InputMaybe<Chat_Group_Member_Info_Bool_Exp>;
  last_read?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "chat_group_members" */
export enum Chat_Group_Members_Constraint {
  /** unique or primary key constraint on columns "id" */
  ChatGroupMembersPkey = 'chat_group_members_pkey'
}

/** input type for inserting data into table "chat_group_members" */
export type Chat_Group_Members_Insert_Input = {
  chat_group?: InputMaybe<Chat_Groups_Obj_Rel_Insert_Input>;
  chat_group_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  info?: InputMaybe<Chat_Group_Member_Info_Obj_Rel_Insert_Input>;
  last_read?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']>;
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
  chat_group_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_read?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
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
  chat_group_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_read?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "chat_group_members" */
export type Chat_Group_Members_Mutation_Response = {
  __typename?: 'chat_group_members_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Chat_Group_Members>;
};

/** input type for inserting object relation for remote table "chat_group_members" */
export type Chat_Group_Members_Obj_Rel_Insert_Input = {
  data: Chat_Group_Members_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Chat_Group_Members_On_Conflict>;
};

/** on_conflict condition type for table "chat_group_members" */
export type Chat_Group_Members_On_Conflict = {
  constraint: Chat_Group_Members_Constraint;
  update_columns?: Array<Chat_Group_Members_Update_Column>;
  where?: InputMaybe<Chat_Group_Members_Bool_Exp>;
};

/** Ordering options when selecting data from "chat_group_members". */
export type Chat_Group_Members_Order_By = {
  chat_group?: InputMaybe<Chat_Groups_Order_By>;
  chat_group_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  info?: InputMaybe<Chat_Group_Member_Info_Order_By>;
  last_read?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
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
  chat_group_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  last_read?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['uuid']>;
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

export type Chat_Group_Members_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Chat_Group_Members_Set_Input>;
  where: Chat_Group_Members_Bool_Exp;
};

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
  distinct_on?: InputMaybe<Array<Chat_Group_Members_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Chat_Group_Members_Order_By>>;
  where?: InputMaybe<Chat_Group_Members_Bool_Exp>;
};


/** columns and relationships of "chat_groups" */
export type Chat_GroupsMembers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Chat_Group_Members_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Chat_Group_Members_Order_By>>;
  where?: InputMaybe<Chat_Group_Members_Bool_Exp>;
};


/** columns and relationships of "chat_groups" */
export type Chat_GroupsMessagesArgs = {
  distinct_on?: InputMaybe<Array<Chat_Messages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Chat_Messages_Order_By>>;
  where?: InputMaybe<Chat_Messages_Bool_Exp>;
};


/** columns and relationships of "chat_groups" */
export type Chat_GroupsMessages_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Chat_Messages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Chat_Messages_Order_By>>;
  where?: InputMaybe<Chat_Messages_Bool_Exp>;
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
  columns?: InputMaybe<Array<Chat_Groups_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "chat_groups". All fields are combined with a logical 'AND'. */
export type Chat_Groups_Bool_Exp = {
  _and?: InputMaybe<Array<Chat_Groups_Bool_Exp>>;
  _not?: InputMaybe<Chat_Groups_Bool_Exp>;
  _or?: InputMaybe<Array<Chat_Groups_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  members?: InputMaybe<Chat_Group_Members_Bool_Exp>;
  messages?: InputMaybe<Chat_Messages_Bool_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "chat_groups" */
export enum Chat_Groups_Constraint {
  /** unique or primary key constraint on columns "id" */
  ChatGroupsPkey = 'chat_groups_pkey'
}

/** input type for inserting data into table "chat_groups" */
export type Chat_Groups_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  members?: InputMaybe<Chat_Group_Members_Arr_Rel_Insert_Input>;
  messages?: InputMaybe<Chat_Messages_Arr_Rel_Insert_Input>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
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
  /** upsert condition */
  on_conflict?: InputMaybe<Chat_Groups_On_Conflict>;
};

/** on_conflict condition type for table "chat_groups" */
export type Chat_Groups_On_Conflict = {
  constraint: Chat_Groups_Constraint;
  update_columns?: Array<Chat_Groups_Update_Column>;
  where?: InputMaybe<Chat_Groups_Bool_Exp>;
};

/** Ordering options when selecting data from "chat_groups". */
export type Chat_Groups_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  members_aggregate?: InputMaybe<Chat_Group_Members_Aggregate_Order_By>;
  messages_aggregate?: InputMaybe<Chat_Messages_Aggregate_Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
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
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
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

export type Chat_Groups_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Chat_Groups_Set_Input>;
  where: Chat_Groups_Bool_Exp;
};

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
  columns?: InputMaybe<Array<Chat_Messages_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "chat_messages" */
export type Chat_Messages_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Chat_Messages_Max_Order_By>;
  min?: InputMaybe<Chat_Messages_Min_Order_By>;
};

/** input type for inserting array relation for remote table "chat_messages" */
export type Chat_Messages_Arr_Rel_Insert_Input = {
  data: Array<Chat_Messages_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Chat_Messages_On_Conflict>;
};

/** Boolean expression to filter rows from the table "chat_messages". All fields are combined with a logical 'AND'. */
export type Chat_Messages_Bool_Exp = {
  _and?: InputMaybe<Array<Chat_Messages_Bool_Exp>>;
  _not?: InputMaybe<Chat_Messages_Bool_Exp>;
  _or?: InputMaybe<Array<Chat_Messages_Bool_Exp>>;
  chat_group?: InputMaybe<Chat_Groups_Bool_Exp>;
  chat_group_id?: InputMaybe<Uuid_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  entity?: InputMaybe<Entities_Bool_Exp>;
  entity_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  message?: InputMaybe<String_Comparison_Exp>;
  sender?: InputMaybe<Users_Bool_Exp>;
  sender_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "chat_messages" */
export enum Chat_Messages_Constraint {
  /** unique or primary key constraint on columns "id" */
  MessagesPkey = 'messages_pkey'
}

/** input type for inserting data into table "chat_messages" */
export type Chat_Messages_Insert_Input = {
  chat_group?: InputMaybe<Chat_Groups_Obj_Rel_Insert_Input>;
  chat_group_id?: InputMaybe<Scalars['uuid']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  entity?: InputMaybe<Entities_Obj_Rel_Insert_Input>;
  entity_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  message?: InputMaybe<Scalars['String']>;
  sender?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  sender_id?: InputMaybe<Scalars['uuid']>;
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
  chat_group_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  entity_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  message?: InputMaybe<Order_By>;
  sender_id?: InputMaybe<Order_By>;
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
  chat_group_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  entity_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  message?: InputMaybe<Order_By>;
  sender_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "chat_messages" */
export type Chat_Messages_Mutation_Response = {
  __typename?: 'chat_messages_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Chat_Messages>;
};

/** on_conflict condition type for table "chat_messages" */
export type Chat_Messages_On_Conflict = {
  constraint: Chat_Messages_Constraint;
  update_columns?: Array<Chat_Messages_Update_Column>;
  where?: InputMaybe<Chat_Messages_Bool_Exp>;
};

/** Ordering options when selecting data from "chat_messages". */
export type Chat_Messages_Order_By = {
  chat_group?: InputMaybe<Chat_Groups_Order_By>;
  chat_group_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  entity?: InputMaybe<Entities_Order_By>;
  entity_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  message?: InputMaybe<Order_By>;
  sender?: InputMaybe<Users_Order_By>;
  sender_id?: InputMaybe<Order_By>;
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
  chat_group_id?: InputMaybe<Scalars['uuid']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  entity_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  message?: InputMaybe<Scalars['String']>;
  sender_id?: InputMaybe<Scalars['uuid']>;
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

export type Chat_Messages_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Chat_Messages_Set_Input>;
  where: Chat_Messages_Bool_Exp;
};

/** Boolean expression to compare columns of type "citext". All fields are combined with logical 'AND'. */
export type Citext_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['citext']>;
  _gt?: InputMaybe<Scalars['citext']>;
  _gte?: InputMaybe<Scalars['citext']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['citext']>;
  _in?: InputMaybe<Array<Scalars['citext']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['citext']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['citext']>;
  _lt?: InputMaybe<Scalars['citext']>;
  _lte?: InputMaybe<Scalars['citext']>;
  _neq?: InputMaybe<Scalars['citext']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['citext']>;
  _nin?: InputMaybe<Array<Scalars['citext']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['citext']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['citext']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['citext']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['citext']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['citext']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['citext']>;
};

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
  distinct_on?: InputMaybe<Array<Group_Post_Comment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Group_Post_Comment_Order_By>>;
  where?: InputMaybe<Group_Post_Comment_Bool_Exp>;
};


/** columns and relationships of "comments" */
export type CommentsGroup_Post_Relations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Group_Post_Comment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Group_Post_Comment_Order_By>>;
  where?: InputMaybe<Group_Post_Comment_Bool_Exp>;
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
  columns?: InputMaybe<Array<Comments_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "comments" */
export type Comments_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Comments_Max_Order_By>;
  min?: InputMaybe<Comments_Min_Order_By>;
};

/** input type for inserting array relation for remote table "comments" */
export type Comments_Arr_Rel_Insert_Input = {
  data: Array<Comments_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Comments_On_Conflict>;
};

/** Boolean expression to filter rows from the table "comments". All fields are combined with a logical 'AND'. */
export type Comments_Bool_Exp = {
  _and?: InputMaybe<Array<Comments_Bool_Exp>>;
  _not?: InputMaybe<Comments_Bool_Exp>;
  _or?: InputMaybe<Array<Comments_Bool_Exp>>;
  author?: InputMaybe<Users_Bool_Exp>;
  author_id?: InputMaybe<Uuid_Comparison_Exp>;
  content?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  group_post_relations?: InputMaybe<Group_Post_Comment_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "comments" */
export enum Comments_Constraint {
  /** unique or primary key constraint on columns "id" */
  CommentPkey = 'comment_pkey'
}

/** input type for inserting data into table "comments" */
export type Comments_Insert_Input = {
  author?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  author_id?: InputMaybe<Scalars['uuid']>;
  content?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  group_post_relations?: InputMaybe<Group_Post_Comment_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
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
  author_id?: InputMaybe<Order_By>;
  content?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
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
  author_id?: InputMaybe<Order_By>;
  content?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
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
  /** upsert condition */
  on_conflict?: InputMaybe<Comments_On_Conflict>;
};

/** on_conflict condition type for table "comments" */
export type Comments_On_Conflict = {
  constraint: Comments_Constraint;
  update_columns?: Array<Comments_Update_Column>;
  where?: InputMaybe<Comments_Bool_Exp>;
};

/** Ordering options when selecting data from "comments". */
export type Comments_Order_By = {
  author?: InputMaybe<Users_Order_By>;
  author_id?: InputMaybe<Order_By>;
  content?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  group_post_relations_aggregate?: InputMaybe<Group_Post_Comment_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
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
  author_id?: InputMaybe<Scalars['uuid']>;
  content?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
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

export type Comments_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Comments_Set_Input>;
  where: Comments_Bool_Exp;
};

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['date']>;
  _gt?: InputMaybe<Scalars['date']>;
  _gte?: InputMaybe<Scalars['date']>;
  _in?: InputMaybe<Array<Scalars['date']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['date']>;
  _lte?: InputMaybe<Scalars['date']>;
  _neq?: InputMaybe<Scalars['date']>;
  _nin?: InputMaybe<Array<Scalars['date']>>;
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
  /** Determines whether the entity points to any single existing object */
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
  columns?: InputMaybe<Array<Entities_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Entities_Avg_Fields = {
  __typename?: 'entities_avg_fields';
  dummy?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "entities". All fields are combined with a logical 'AND'. */
export type Entities_Bool_Exp = {
  _and?: InputMaybe<Array<Entities_Bool_Exp>>;
  _not?: InputMaybe<Entities_Bool_Exp>;
  _or?: InputMaybe<Array<Entities_Bool_Exp>>;
  dummy?: InputMaybe<Smallint_Comparison_Exp>;
  group?: InputMaybe<Groups_Bool_Exp>;
  group_id?: InputMaybe<Uuid_Comparison_Exp>;
  group_join_request?: InputMaybe<Group_Join_Requests_Bool_Exp>;
  group_member?: InputMaybe<Group_Members_Bool_Exp>;
  group_member_id?: InputMaybe<Uuid_Comparison_Exp>;
  group_post?: InputMaybe<Group_Posts_Bool_Exp>;
  group_post_comment?: InputMaybe<Group_Post_Comment_Bool_Exp>;
  group_post_comment_id?: InputMaybe<Uuid_Comparison_Exp>;
  group_post_id?: InputMaybe<Uuid_Comparison_Exp>;
  group_thing?: InputMaybe<Group_Thing_Bool_Exp>;
  group_thing_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  is_valid?: InputMaybe<Boolean_Comparison_Exp>;
  join_request_id?: InputMaybe<Uuid_Comparison_Exp>;
  thing?: InputMaybe<Things_Bool_Exp>;
  thing_id?: InputMaybe<Uuid_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "entities" */
export enum Entities_Constraint {
  /** unique or primary key constraint on columns "group_id" */
  EntitiesGroupIdKey = 'entities_group_id_key',
  /** unique or primary key constraint on columns "group_member_id" */
  EntitiesGroupMemberIdKey = 'entities_group_member_id_key',
  /** unique or primary key constraint on columns "group_post_comment_id" */
  EntitiesGroupPostCommentIdKey = 'entities_group_post_comment_id_key',
  /** unique or primary key constraint on columns "group_post_id" */
  EntitiesGroupPostIdKey = 'entities_group_post_id_key',
  /** unique or primary key constraint on columns "group_thing_id" */
  EntitiesGroupThingIdKey = 'entities_group_thing_id_key',
  /** unique or primary key constraint on columns "join_request_id" */
  EntitiesJoinRequestIdKey = 'entities_join_request_id_key',
  /** unique or primary key constraint on columns "id" */
  EntitiesPkey = 'entities_pkey',
  /** unique or primary key constraint on columns "thing_id" */
  EntitiesThingIdKey = 'entities_thing_id_key',
  /** unique or primary key constraint on columns "user_id" */
  EntitiesUserIdKey = 'entities_user_id_key'
}

/** input type for incrementing numeric columns in table "entities" */
export type Entities_Inc_Input = {
  dummy?: InputMaybe<Scalars['smallint']>;
};

/** input type for inserting data into table "entities" */
export type Entities_Insert_Input = {
  dummy?: InputMaybe<Scalars['smallint']>;
  group?: InputMaybe<Groups_Obj_Rel_Insert_Input>;
  group_id?: InputMaybe<Scalars['uuid']>;
  group_join_request?: InputMaybe<Group_Join_Requests_Obj_Rel_Insert_Input>;
  group_member?: InputMaybe<Group_Members_Obj_Rel_Insert_Input>;
  group_member_id?: InputMaybe<Scalars['uuid']>;
  group_post?: InputMaybe<Group_Posts_Obj_Rel_Insert_Input>;
  group_post_comment?: InputMaybe<Group_Post_Comment_Obj_Rel_Insert_Input>;
  group_post_comment_id?: InputMaybe<Scalars['uuid']>;
  group_post_id?: InputMaybe<Scalars['uuid']>;
  group_thing?: InputMaybe<Group_Thing_Obj_Rel_Insert_Input>;
  group_thing_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  join_request_id?: InputMaybe<Scalars['uuid']>;
  thing?: InputMaybe<Things_Obj_Rel_Insert_Input>;
  thing_id?: InputMaybe<Scalars['uuid']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']>;
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
  /** upsert condition */
  on_conflict?: InputMaybe<Entities_On_Conflict>;
};

/** on_conflict condition type for table "entities" */
export type Entities_On_Conflict = {
  constraint: Entities_Constraint;
  update_columns?: Array<Entities_Update_Column>;
  where?: InputMaybe<Entities_Bool_Exp>;
};

/** Ordering options when selecting data from "entities". */
export type Entities_Order_By = {
  dummy?: InputMaybe<Order_By>;
  group?: InputMaybe<Groups_Order_By>;
  group_id?: InputMaybe<Order_By>;
  group_join_request?: InputMaybe<Group_Join_Requests_Order_By>;
  group_member?: InputMaybe<Group_Members_Order_By>;
  group_member_id?: InputMaybe<Order_By>;
  group_post?: InputMaybe<Group_Posts_Order_By>;
  group_post_comment?: InputMaybe<Group_Post_Comment_Order_By>;
  group_post_comment_id?: InputMaybe<Order_By>;
  group_post_id?: InputMaybe<Order_By>;
  group_thing?: InputMaybe<Group_Thing_Order_By>;
  group_thing_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_valid?: InputMaybe<Order_By>;
  join_request_id?: InputMaybe<Order_By>;
  thing?: InputMaybe<Things_Order_By>;
  thing_id?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
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
  dummy?: InputMaybe<Scalars['smallint']>;
  group_id?: InputMaybe<Scalars['uuid']>;
  group_member_id?: InputMaybe<Scalars['uuid']>;
  group_post_comment_id?: InputMaybe<Scalars['uuid']>;
  group_post_id?: InputMaybe<Scalars['uuid']>;
  group_thing_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  join_request_id?: InputMaybe<Scalars['uuid']>;
  thing_id?: InputMaybe<Scalars['uuid']>;
  user_id?: InputMaybe<Scalars['uuid']>;
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

export type Entities_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Entities_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Entities_Set_Input>;
  where: Entities_Bool_Exp;
};

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
  columns?: InputMaybe<Array<File_Uploads_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "file_uploads" */
export type File_Uploads_Aggregate_Order_By = {
  avg?: InputMaybe<File_Uploads_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<File_Uploads_Max_Order_By>;
  min?: InputMaybe<File_Uploads_Min_Order_By>;
  stddev?: InputMaybe<File_Uploads_Stddev_Order_By>;
  stddev_pop?: InputMaybe<File_Uploads_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<File_Uploads_Stddev_Samp_Order_By>;
  sum?: InputMaybe<File_Uploads_Sum_Order_By>;
  var_pop?: InputMaybe<File_Uploads_Var_Pop_Order_By>;
  var_samp?: InputMaybe<File_Uploads_Var_Samp_Order_By>;
  variance?: InputMaybe<File_Uploads_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "file_uploads" */
export type File_Uploads_Arr_Rel_Insert_Input = {
  data: Array<File_Uploads_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<File_Uploads_On_Conflict>;
};

/** aggregate avg on columns */
export type File_Uploads_Avg_Fields = {
  __typename?: 'file_uploads_avg_fields';
  size?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "file_uploads" */
export type File_Uploads_Avg_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "file_uploads". All fields are combined with a logical 'AND'. */
export type File_Uploads_Bool_Exp = {
  _and?: InputMaybe<Array<File_Uploads_Bool_Exp>>;
  _not?: InputMaybe<File_Uploads_Bool_Exp>;
  _or?: InputMaybe<Array<File_Uploads_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  mime_type?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  owner?: InputMaybe<Users_Bool_Exp>;
  owner_id?: InputMaybe<Uuid_Comparison_Exp>;
  size?: InputMaybe<Int_Comparison_Exp>;
  thing_image?: InputMaybe<Thing_Images_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  url?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "file_uploads" */
export enum File_Uploads_Constraint {
  /** unique or primary key constraint on columns "id" */
  FileUploadsPkey = 'file_uploads_pkey',
  /** unique or primary key constraint on columns "url" */
  FileUploadsUrlKey = 'file_uploads_url_key'
}

/** input type for incrementing numeric columns in table "file_uploads" */
export type File_Uploads_Inc_Input = {
  size?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "file_uploads" */
export type File_Uploads_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  mime_type?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  owner?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  owner_id?: InputMaybe<Scalars['uuid']>;
  size?: InputMaybe<Scalars['Int']>;
  thing_image?: InputMaybe<Thing_Images_Obj_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  url?: InputMaybe<Scalars['String']>;
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

/** order by max() on columns of table "file_uploads" */
export type File_Uploads_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  mime_type?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  owner_id?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  url?: InputMaybe<Order_By>;
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

/** order by min() on columns of table "file_uploads" */
export type File_Uploads_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  mime_type?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  owner_id?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  url?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "file_uploads" */
export type File_Uploads_Mutation_Response = {
  __typename?: 'file_uploads_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<File_Uploads>;
};

/** on_conflict condition type for table "file_uploads" */
export type File_Uploads_On_Conflict = {
  constraint: File_Uploads_Constraint;
  update_columns?: Array<File_Uploads_Update_Column>;
  where?: InputMaybe<File_Uploads_Bool_Exp>;
};

/** Ordering options when selecting data from "file_uploads". */
export type File_Uploads_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  mime_type?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  owner?: InputMaybe<Users_Order_By>;
  owner_id?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
  thing_image?: InputMaybe<Thing_Images_Order_By>;
  updated_at?: InputMaybe<Order_By>;
  url?: InputMaybe<Order_By>;
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
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  mime_type?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  owner_id?: InputMaybe<Scalars['uuid']>;
  size?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  url?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type File_Uploads_Stddev_Fields = {
  __typename?: 'file_uploads_stddev_fields';
  size?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "file_uploads" */
export type File_Uploads_Stddev_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type File_Uploads_Stddev_Pop_Fields = {
  __typename?: 'file_uploads_stddev_pop_fields';
  size?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "file_uploads" */
export type File_Uploads_Stddev_Pop_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type File_Uploads_Stddev_Samp_Fields = {
  __typename?: 'file_uploads_stddev_samp_fields';
  size?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "file_uploads" */
export type File_Uploads_Stddev_Samp_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type File_Uploads_Sum_Fields = {
  __typename?: 'file_uploads_sum_fields';
  size?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "file_uploads" */
export type File_Uploads_Sum_Order_By = {
  size?: InputMaybe<Order_By>;
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

export type File_Uploads_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<File_Uploads_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<File_Uploads_Set_Input>;
  where: File_Uploads_Bool_Exp;
};

/** aggregate var_pop on columns */
export type File_Uploads_Var_Pop_Fields = {
  __typename?: 'file_uploads_var_pop_fields';
  size?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "file_uploads" */
export type File_Uploads_Var_Pop_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type File_Uploads_Var_Samp_Fields = {
  __typename?: 'file_uploads_var_samp_fields';
  size?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "file_uploads" */
export type File_Uploads_Var_Samp_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type File_Uploads_Variance_Fields = {
  __typename?: 'file_uploads_variance_fields';
  size?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "file_uploads" */
export type File_Uploads_Variance_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** columns and relationships of "storage.files" */
export type Files = {
  __typename?: 'files';
  /** An object relationship */
  bucket: Buckets;
  bucketId: Scalars['String'];
  createdAt: Scalars['timestamptz'];
  etag?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  isUploaded?: Maybe<Scalars['Boolean']>;
  mimeType?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  updatedAt: Scalars['timestamptz'];
  uploadedByUserId?: Maybe<Scalars['uuid']>;
  /** An object relationship */
  uploaded_by?: Maybe<Users>;
};

/** aggregated selection of "storage.files" */
export type Files_Aggregate = {
  __typename?: 'files_aggregate';
  aggregate?: Maybe<Files_Aggregate_Fields>;
  nodes: Array<Files>;
};

/** aggregate fields of "storage.files" */
export type Files_Aggregate_Fields = {
  __typename?: 'files_aggregate_fields';
  avg?: Maybe<Files_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Files_Max_Fields>;
  min?: Maybe<Files_Min_Fields>;
  stddev?: Maybe<Files_Stddev_Fields>;
  stddev_pop?: Maybe<Files_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Files_Stddev_Samp_Fields>;
  sum?: Maybe<Files_Sum_Fields>;
  var_pop?: Maybe<Files_Var_Pop_Fields>;
  var_samp?: Maybe<Files_Var_Samp_Fields>;
  variance?: Maybe<Files_Variance_Fields>;
};


/** aggregate fields of "storage.files" */
export type Files_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Files_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "storage.files" */
export type Files_Aggregate_Order_By = {
  avg?: InputMaybe<Files_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Files_Max_Order_By>;
  min?: InputMaybe<Files_Min_Order_By>;
  stddev?: InputMaybe<Files_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Files_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Files_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Files_Sum_Order_By>;
  var_pop?: InputMaybe<Files_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Files_Var_Samp_Order_By>;
  variance?: InputMaybe<Files_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "storage.files" */
export type Files_Arr_Rel_Insert_Input = {
  data: Array<Files_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Files_On_Conflict>;
};

/** aggregate avg on columns */
export type Files_Avg_Fields = {
  __typename?: 'files_avg_fields';
  size?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "storage.files" */
export type Files_Avg_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "storage.files". All fields are combined with a logical 'AND'. */
export type Files_Bool_Exp = {
  _and?: InputMaybe<Array<Files_Bool_Exp>>;
  _not?: InputMaybe<Files_Bool_Exp>;
  _or?: InputMaybe<Array<Files_Bool_Exp>>;
  bucket?: InputMaybe<Buckets_Bool_Exp>;
  bucketId?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  etag?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  isUploaded?: InputMaybe<Boolean_Comparison_Exp>;
  mimeType?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  size?: InputMaybe<Int_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  uploadedByUserId?: InputMaybe<Uuid_Comparison_Exp>;
  uploaded_by?: InputMaybe<Users_Bool_Exp>;
};

/** unique or primary key constraints on table "storage.files" */
export enum Files_Constraint {
  /** unique or primary key constraint on columns "id" */
  FilesPkey = 'files_pkey'
}

/** input type for incrementing numeric columns in table "storage.files" */
export type Files_Inc_Input = {
  size?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "storage.files" */
export type Files_Insert_Input = {
  bucket?: InputMaybe<Buckets_Obj_Rel_Insert_Input>;
  bucketId?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  etag?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  isUploaded?: InputMaybe<Scalars['Boolean']>;
  mimeType?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  uploadedByUserId?: InputMaybe<Scalars['uuid']>;
  uploaded_by?: InputMaybe<Users_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Files_Max_Fields = {
  __typename?: 'files_max_fields';
  bucketId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  etag?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  mimeType?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  uploadedByUserId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "storage.files" */
export type Files_Max_Order_By = {
  bucketId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  etag?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  mimeType?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  uploadedByUserId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Files_Min_Fields = {
  __typename?: 'files_min_fields';
  bucketId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  etag?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  mimeType?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  uploadedByUserId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "storage.files" */
export type Files_Min_Order_By = {
  bucketId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  etag?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  mimeType?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  uploadedByUserId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "storage.files" */
export type Files_Mutation_Response = {
  __typename?: 'files_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Files>;
};

/** input type for inserting object relation for remote table "storage.files" */
export type Files_Obj_Rel_Insert_Input = {
  data: Files_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Files_On_Conflict>;
};

/** on_conflict condition type for table "storage.files" */
export type Files_On_Conflict = {
  constraint: Files_Constraint;
  update_columns?: Array<Files_Update_Column>;
  where?: InputMaybe<Files_Bool_Exp>;
};

/** Ordering options when selecting data from "storage.files". */
export type Files_Order_By = {
  bucket?: InputMaybe<Buckets_Order_By>;
  bucketId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  etag?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isUploaded?: InputMaybe<Order_By>;
  mimeType?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  uploadedByUserId?: InputMaybe<Order_By>;
  uploaded_by?: InputMaybe<Users_Order_By>;
};

/** primary key columns input for table: files */
export type Files_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "storage.files" */
export enum Files_Select_Column {
  /** column name */
  BucketId = 'bucketId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Etag = 'etag',
  /** column name */
  Id = 'id',
  /** column name */
  IsUploaded = 'isUploaded',
  /** column name */
  MimeType = 'mimeType',
  /** column name */
  Name = 'name',
  /** column name */
  Size = 'size',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UploadedByUserId = 'uploadedByUserId'
}

/** input type for updating data in table "storage.files" */
export type Files_Set_Input = {
  bucketId?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  etag?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  isUploaded?: InputMaybe<Scalars['Boolean']>;
  mimeType?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  uploadedByUserId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Files_Stddev_Fields = {
  __typename?: 'files_stddev_fields';
  size?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "storage.files" */
export type Files_Stddev_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Files_Stddev_Pop_Fields = {
  __typename?: 'files_stddev_pop_fields';
  size?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "storage.files" */
export type Files_Stddev_Pop_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Files_Stddev_Samp_Fields = {
  __typename?: 'files_stddev_samp_fields';
  size?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "storage.files" */
export type Files_Stddev_Samp_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Files_Sum_Fields = {
  __typename?: 'files_sum_fields';
  size?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "storage.files" */
export type Files_Sum_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** update columns of table "storage.files" */
export enum Files_Update_Column {
  /** column name */
  BucketId = 'bucketId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Etag = 'etag',
  /** column name */
  Id = 'id',
  /** column name */
  IsUploaded = 'isUploaded',
  /** column name */
  MimeType = 'mimeType',
  /** column name */
  Name = 'name',
  /** column name */
  Size = 'size',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UploadedByUserId = 'uploadedByUserId'
}

export type Files_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Files_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Files_Set_Input>;
  where: Files_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Files_Var_Pop_Fields = {
  __typename?: 'files_var_pop_fields';
  size?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "storage.files" */
export type Files_Var_Pop_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Files_Var_Samp_Fields = {
  __typename?: 'files_var_samp_fields';
  size?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "storage.files" */
export type Files_Var_Samp_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Files_Variance_Fields = {
  __typename?: 'files_variance_fields';
  size?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "storage.files" */
export type Files_Variance_Order_By = {
  size?: InputMaybe<Order_By>;
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
  columns?: InputMaybe<Array<Group_Join_Request_Status_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "group_join_request_status". All fields are combined with a logical 'AND'. */
export type Group_Join_Request_Status_Bool_Exp = {
  _and?: InputMaybe<Array<Group_Join_Request_Status_Bool_Exp>>;
  _not?: InputMaybe<Group_Join_Request_Status_Bool_Exp>;
  _or?: InputMaybe<Array<Group_Join_Request_Status_Bool_Exp>>;
  comment?: InputMaybe<String_Comparison_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "group_join_request_status" */
export enum Group_Join_Request_Status_Constraint {
  /** unique or primary key constraint on columns "value" */
  GroupJoinRequestStatusPkey = 'group_join_request_status_pkey'
}

export enum Group_Join_Request_Status_Enum {
  /** accepted status */
  Accepted = 'accepted',
  /** cancelled status */
  Cancelled = 'cancelled',
  /** pending status */
  Pending = 'pending',
  /** rejected status */
  Rejected = 'rejected'
}

/** Boolean expression to compare columns of type "group_join_request_status_enum". All fields are combined with logical 'AND'. */
export type Group_Join_Request_Status_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Group_Join_Request_Status_Enum>;
  _in?: InputMaybe<Array<Group_Join_Request_Status_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Group_Join_Request_Status_Enum>;
  _nin?: InputMaybe<Array<Group_Join_Request_Status_Enum>>;
};

/** input type for inserting data into table "group_join_request_status" */
export type Group_Join_Request_Status_Insert_Input = {
  comment?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
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

/** on_conflict condition type for table "group_join_request_status" */
export type Group_Join_Request_Status_On_Conflict = {
  constraint: Group_Join_Request_Status_Constraint;
  update_columns?: Array<Group_Join_Request_Status_Update_Column>;
  where?: InputMaybe<Group_Join_Request_Status_Bool_Exp>;
};

/** Ordering options when selecting data from "group_join_request_status". */
export type Group_Join_Request_Status_Order_By = {
  comment?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
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
  comment?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** update columns of table "group_join_request_status" */
export enum Group_Join_Request_Status_Update_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

export type Group_Join_Request_Status_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Group_Join_Request_Status_Set_Input>;
  where: Group_Join_Request_Status_Bool_Exp;
};

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
  columns?: InputMaybe<Array<Group_Join_Requests_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "group_join_requests" */
export type Group_Join_Requests_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Group_Join_Requests_Max_Order_By>;
  min?: InputMaybe<Group_Join_Requests_Min_Order_By>;
};

/** input type for inserting array relation for remote table "group_join_requests" */
export type Group_Join_Requests_Arr_Rel_Insert_Input = {
  data: Array<Group_Join_Requests_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Group_Join_Requests_On_Conflict>;
};

/** Boolean expression to filter rows from the table "group_join_requests". All fields are combined with a logical 'AND'. */
export type Group_Join_Requests_Bool_Exp = {
  _and?: InputMaybe<Array<Group_Join_Requests_Bool_Exp>>;
  _not?: InputMaybe<Group_Join_Requests_Bool_Exp>;
  _or?: InputMaybe<Array<Group_Join_Requests_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  group?: InputMaybe<Groups_Bool_Exp>;
  group_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  message?: InputMaybe<String_Comparison_Exp>;
  responder_id?: InputMaybe<Uuid_Comparison_Exp>;
  response?: InputMaybe<String_Comparison_Exp>;
  status?: InputMaybe<Group_Join_Request_Status_Enum_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "group_join_requests" */
export enum Group_Join_Requests_Constraint {
  /** unique or primary key constraint on columns "id" */
  GroupJoinRequestsPkey = 'group_join_requests_pkey'
}

/** input type for inserting data into table "group_join_requests" */
export type Group_Join_Requests_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  group?: InputMaybe<Groups_Obj_Rel_Insert_Input>;
  group_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  message?: InputMaybe<Scalars['String']>;
  responder_id?: InputMaybe<Scalars['uuid']>;
  response?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Group_Join_Request_Status_Enum>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']>;
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
  created_at?: InputMaybe<Order_By>;
  group_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  message?: InputMaybe<Order_By>;
  responder_id?: InputMaybe<Order_By>;
  response?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
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
  created_at?: InputMaybe<Order_By>;
  group_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  message?: InputMaybe<Order_By>;
  responder_id?: InputMaybe<Order_By>;
  response?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
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
  /** upsert condition */
  on_conflict?: InputMaybe<Group_Join_Requests_On_Conflict>;
};

/** on_conflict condition type for table "group_join_requests" */
export type Group_Join_Requests_On_Conflict = {
  constraint: Group_Join_Requests_Constraint;
  update_columns?: Array<Group_Join_Requests_Update_Column>;
  where?: InputMaybe<Group_Join_Requests_Bool_Exp>;
};

/** Ordering options when selecting data from "group_join_requests". */
export type Group_Join_Requests_Order_By = {
  created_at?: InputMaybe<Order_By>;
  group?: InputMaybe<Groups_Order_By>;
  group_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  message?: InputMaybe<Order_By>;
  responder_id?: InputMaybe<Order_By>;
  response?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
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
  created_at?: InputMaybe<Scalars['timestamptz']>;
  group_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  message?: InputMaybe<Scalars['String']>;
  responder_id?: InputMaybe<Scalars['uuid']>;
  response?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Group_Join_Request_Status_Enum>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['uuid']>;
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

export type Group_Join_Requests_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Group_Join_Requests_Set_Input>;
  where: Group_Join_Requests_Bool_Exp;
};

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
  columns?: InputMaybe<Array<Group_Join_Tokens_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "group_join_tokens" */
export type Group_Join_Tokens_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Group_Join_Tokens_Max_Order_By>;
  min?: InputMaybe<Group_Join_Tokens_Min_Order_By>;
};

/** input type for inserting array relation for remote table "group_join_tokens" */
export type Group_Join_Tokens_Arr_Rel_Insert_Input = {
  data: Array<Group_Join_Tokens_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Group_Join_Tokens_On_Conflict>;
};

/** Boolean expression to filter rows from the table "group_join_tokens". All fields are combined with a logical 'AND'. */
export type Group_Join_Tokens_Bool_Exp = {
  _and?: InputMaybe<Array<Group_Join_Tokens_Bool_Exp>>;
  _not?: InputMaybe<Group_Join_Tokens_Bool_Exp>;
  _or?: InputMaybe<Array<Group_Join_Tokens_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  disabled?: InputMaybe<Boolean_Comparison_Exp>;
  group?: InputMaybe<Groups_Bool_Exp>;
  group_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  note?: InputMaybe<String_Comparison_Exp>;
  token?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "group_join_tokens" */
export enum Group_Join_Tokens_Constraint {
  /** unique or primary key constraint on columns "id" */
  GroupJoinTokenPkey = 'group_join_token_pkey'
}

/** input type for inserting data into table "group_join_tokens" */
export type Group_Join_Tokens_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  disabled?: InputMaybe<Scalars['Boolean']>;
  group?: InputMaybe<Groups_Obj_Rel_Insert_Input>;
  group_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  note?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
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
  created_at?: InputMaybe<Order_By>;
  group_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  note?: InputMaybe<Order_By>;
  token?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
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
  created_at?: InputMaybe<Order_By>;
  group_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  note?: InputMaybe<Order_By>;
  token?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "group_join_tokens" */
export type Group_Join_Tokens_Mutation_Response = {
  __typename?: 'group_join_tokens_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Group_Join_Tokens>;
};

/** on_conflict condition type for table "group_join_tokens" */
export type Group_Join_Tokens_On_Conflict = {
  constraint: Group_Join_Tokens_Constraint;
  update_columns?: Array<Group_Join_Tokens_Update_Column>;
  where?: InputMaybe<Group_Join_Tokens_Bool_Exp>;
};

/** Ordering options when selecting data from "group_join_tokens". */
export type Group_Join_Tokens_Order_By = {
  created_at?: InputMaybe<Order_By>;
  disabled?: InputMaybe<Order_By>;
  group?: InputMaybe<Groups_Order_By>;
  group_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  note?: InputMaybe<Order_By>;
  token?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
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
  created_at?: InputMaybe<Scalars['timestamptz']>;
  disabled?: InputMaybe<Scalars['Boolean']>;
  group_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  note?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
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

export type Group_Join_Tokens_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Group_Join_Tokens_Set_Input>;
  where: Group_Join_Tokens_Bool_Exp;
};

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
  columns?: InputMaybe<Array<Group_Members_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "group_members" */
export type Group_Members_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Group_Members_Max_Order_By>;
  min?: InputMaybe<Group_Members_Min_Order_By>;
};

/** input type for inserting array relation for remote table "group_members" */
export type Group_Members_Arr_Rel_Insert_Input = {
  data: Array<Group_Members_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Group_Members_On_Conflict>;
};

/** Boolean expression to filter rows from the table "group_members". All fields are combined with a logical 'AND'. */
export type Group_Members_Bool_Exp = {
  _and?: InputMaybe<Array<Group_Members_Bool_Exp>>;
  _not?: InputMaybe<Group_Members_Bool_Exp>;
  _or?: InputMaybe<Array<Group_Members_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  group?: InputMaybe<Groups_Bool_Exp>;
  group_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  role?: InputMaybe<Group_Role_Enum_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "group_members" */
export enum Group_Members_Constraint {
  /** unique or primary key constraint on columns "id" */
  GroupMembersPkey = 'group_members_pkey'
}

/** input type for inserting data into table "group_members" */
export type Group_Members_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  group?: InputMaybe<Groups_Obj_Rel_Insert_Input>;
  group_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  role?: InputMaybe<Group_Role_Enum>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']>;
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
  created_at?: InputMaybe<Order_By>;
  group_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
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
  created_at?: InputMaybe<Order_By>;
  group_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
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
  /** upsert condition */
  on_conflict?: InputMaybe<Group_Members_On_Conflict>;
};

/** on_conflict condition type for table "group_members" */
export type Group_Members_On_Conflict = {
  constraint: Group_Members_Constraint;
  update_columns?: Array<Group_Members_Update_Column>;
  where?: InputMaybe<Group_Members_Bool_Exp>;
};

/** Ordering options when selecting data from "group_members". */
export type Group_Members_Order_By = {
  created_at?: InputMaybe<Order_By>;
  group?: InputMaybe<Groups_Order_By>;
  group_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
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
  created_at?: InputMaybe<Scalars['timestamptz']>;
  group_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  role?: InputMaybe<Group_Role_Enum>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['uuid']>;
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

export type Group_Members_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Group_Members_Set_Input>;
  where: Group_Members_Bool_Exp;
};

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
  columns?: InputMaybe<Array<Group_Post_Comment_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "group_post_comment" */
export type Group_Post_Comment_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Group_Post_Comment_Max_Order_By>;
  min?: InputMaybe<Group_Post_Comment_Min_Order_By>;
};

/** input type for inserting array relation for remote table "group_post_comment" */
export type Group_Post_Comment_Arr_Rel_Insert_Input = {
  data: Array<Group_Post_Comment_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Group_Post_Comment_On_Conflict>;
};

/** Boolean expression to filter rows from the table "group_post_comment". All fields are combined with a logical 'AND'. */
export type Group_Post_Comment_Bool_Exp = {
  _and?: InputMaybe<Array<Group_Post_Comment_Bool_Exp>>;
  _not?: InputMaybe<Group_Post_Comment_Bool_Exp>;
  _or?: InputMaybe<Array<Group_Post_Comment_Bool_Exp>>;
  comment?: InputMaybe<Comments_Bool_Exp>;
  comment_id?: InputMaybe<Uuid_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  group_post_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  post?: InputMaybe<Group_Posts_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "group_post_comment" */
export enum Group_Post_Comment_Constraint {
  /** unique or primary key constraint on columns "id" */
  GroupPostCommentPkey = 'group_post_comment_pkey'
}

/** input type for inserting data into table "group_post_comment" */
export type Group_Post_Comment_Insert_Input = {
  comment?: InputMaybe<Comments_Obj_Rel_Insert_Input>;
  comment_id?: InputMaybe<Scalars['uuid']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  group_post_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  post?: InputMaybe<Group_Posts_Obj_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
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
  comment_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  group_post_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
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
  comment_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  group_post_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
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
  /** upsert condition */
  on_conflict?: InputMaybe<Group_Post_Comment_On_Conflict>;
};

/** on_conflict condition type for table "group_post_comment" */
export type Group_Post_Comment_On_Conflict = {
  constraint: Group_Post_Comment_Constraint;
  update_columns?: Array<Group_Post_Comment_Update_Column>;
  where?: InputMaybe<Group_Post_Comment_Bool_Exp>;
};

/** Ordering options when selecting data from "group_post_comment". */
export type Group_Post_Comment_Order_By = {
  comment?: InputMaybe<Comments_Order_By>;
  comment_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  group_post_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  post?: InputMaybe<Group_Posts_Order_By>;
  updated_at?: InputMaybe<Order_By>;
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
  comment_id?: InputMaybe<Scalars['uuid']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  group_post_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
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

export type Group_Post_Comment_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Group_Post_Comment_Set_Input>;
  where: Group_Post_Comment_Bool_Exp;
};

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
  columns?: InputMaybe<Array<Group_Post_Type_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "group_post_type". All fields are combined with a logical 'AND'. */
export type Group_Post_Type_Bool_Exp = {
  _and?: InputMaybe<Array<Group_Post_Type_Bool_Exp>>;
  _not?: InputMaybe<Group_Post_Type_Bool_Exp>;
  _or?: InputMaybe<Array<Group_Post_Type_Bool_Exp>>;
  comment?: InputMaybe<String_Comparison_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "group_post_type" */
export enum Group_Post_Type_Constraint {
  /** unique or primary key constraint on columns "value" */
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
  _eq?: InputMaybe<Group_Post_Type_Enum>;
  _in?: InputMaybe<Array<Group_Post_Type_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Group_Post_Type_Enum>;
  _nin?: InputMaybe<Array<Group_Post_Type_Enum>>;
};

/** input type for inserting data into table "group_post_type" */
export type Group_Post_Type_Insert_Input = {
  comment?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
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

/** on_conflict condition type for table "group_post_type" */
export type Group_Post_Type_On_Conflict = {
  constraint: Group_Post_Type_Constraint;
  update_columns?: Array<Group_Post_Type_Update_Column>;
  where?: InputMaybe<Group_Post_Type_Bool_Exp>;
};

/** Ordering options when selecting data from "group_post_type". */
export type Group_Post_Type_Order_By = {
  comment?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
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
  comment?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** update columns of table "group_post_type" */
export enum Group_Post_Type_Update_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

export type Group_Post_Type_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Group_Post_Type_Set_Input>;
  where: Group_Post_Type_Bool_Exp;
};

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
  distinct_on?: InputMaybe<Array<Group_Post_Comment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Group_Post_Comment_Order_By>>;
  where?: InputMaybe<Group_Post_Comment_Bool_Exp>;
};


/** columns and relationships of "group_posts" */
export type Group_PostsComments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Group_Post_Comment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Group_Post_Comment_Order_By>>;
  where?: InputMaybe<Group_Post_Comment_Bool_Exp>;
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
  columns?: InputMaybe<Array<Group_Posts_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "group_posts" */
export type Group_Posts_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Group_Posts_Max_Order_By>;
  min?: InputMaybe<Group_Posts_Min_Order_By>;
};

/** input type for inserting array relation for remote table "group_posts" */
export type Group_Posts_Arr_Rel_Insert_Input = {
  data: Array<Group_Posts_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Group_Posts_On_Conflict>;
};

/** Boolean expression to filter rows from the table "group_posts". All fields are combined with a logical 'AND'. */
export type Group_Posts_Bool_Exp = {
  _and?: InputMaybe<Array<Group_Posts_Bool_Exp>>;
  _not?: InputMaybe<Group_Posts_Bool_Exp>;
  _or?: InputMaybe<Array<Group_Posts_Bool_Exp>>;
  author?: InputMaybe<Users_Bool_Exp>;
  author_id?: InputMaybe<Uuid_Comparison_Exp>;
  comments?: InputMaybe<Group_Post_Comment_Bool_Exp>;
  content?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  group?: InputMaybe<Groups_Bool_Exp>;
  group_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  resolved?: InputMaybe<Boolean_Comparison_Exp>;
  type?: InputMaybe<Group_Post_Type_Enum_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "group_posts" */
export enum Group_Posts_Constraint {
  /** unique or primary key constraint on columns "id" */
  GroupPostPkey = 'group_post_pkey'
}

/** input type for inserting data into table "group_posts" */
export type Group_Posts_Insert_Input = {
  author?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  author_id?: InputMaybe<Scalars['uuid']>;
  comments?: InputMaybe<Group_Post_Comment_Arr_Rel_Insert_Input>;
  content?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  group?: InputMaybe<Groups_Obj_Rel_Insert_Input>;
  group_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  resolved?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<Group_Post_Type_Enum>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
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
  author_id?: InputMaybe<Order_By>;
  content?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  group_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
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
  author_id?: InputMaybe<Order_By>;
  content?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  group_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
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
  /** upsert condition */
  on_conflict?: InputMaybe<Group_Posts_On_Conflict>;
};

/** on_conflict condition type for table "group_posts" */
export type Group_Posts_On_Conflict = {
  constraint: Group_Posts_Constraint;
  update_columns?: Array<Group_Posts_Update_Column>;
  where?: InputMaybe<Group_Posts_Bool_Exp>;
};

/** Ordering options when selecting data from "group_posts". */
export type Group_Posts_Order_By = {
  author?: InputMaybe<Users_Order_By>;
  author_id?: InputMaybe<Order_By>;
  comments_aggregate?: InputMaybe<Group_Post_Comment_Aggregate_Order_By>;
  content?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  group?: InputMaybe<Groups_Order_By>;
  group_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  resolved?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
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
  author_id?: InputMaybe<Scalars['uuid']>;
  content?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  group_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  resolved?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<Group_Post_Type_Enum>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
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

export type Group_Posts_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Group_Posts_Set_Input>;
  where: Group_Posts_Bool_Exp;
};

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
  columns?: InputMaybe<Array<Group_Role_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "group_role". All fields are combined with a logical 'AND'. */
export type Group_Role_Bool_Exp = {
  _and?: InputMaybe<Array<Group_Role_Bool_Exp>>;
  _not?: InputMaybe<Group_Role_Bool_Exp>;
  _or?: InputMaybe<Array<Group_Role_Bool_Exp>>;
  comment?: InputMaybe<String_Comparison_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "group_role" */
export enum Group_Role_Constraint {
  /** unique or primary key constraint on columns "value" */
  GroupRolePkey = 'group_role_pkey'
}

export enum Group_Role_Enum {
  /** group administrator role */
  Admin = 'admin',
  /** owner of the group */
  Owner = 'owner',
  /** regular member */
  User = 'user'
}

/** Boolean expression to compare columns of type "group_role_enum". All fields are combined with logical 'AND'. */
export type Group_Role_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Group_Role_Enum>;
  _in?: InputMaybe<Array<Group_Role_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Group_Role_Enum>;
  _nin?: InputMaybe<Array<Group_Role_Enum>>;
};

/** input type for inserting data into table "group_role" */
export type Group_Role_Insert_Input = {
  comment?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
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

/** on_conflict condition type for table "group_role" */
export type Group_Role_On_Conflict = {
  constraint: Group_Role_Constraint;
  update_columns?: Array<Group_Role_Update_Column>;
  where?: InputMaybe<Group_Role_Bool_Exp>;
};

/** Ordering options when selecting data from "group_role". */
export type Group_Role_Order_By = {
  comment?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
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
  comment?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** update columns of table "group_role" */
export enum Group_Role_Update_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

export type Group_Role_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Group_Role_Set_Input>;
  where: Group_Role_Bool_Exp;
};

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
  columns?: InputMaybe<Array<Group_Thing_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "group_thing" */
export type Group_Thing_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Group_Thing_Max_Order_By>;
  min?: InputMaybe<Group_Thing_Min_Order_By>;
};

/** input type for inserting array relation for remote table "group_thing" */
export type Group_Thing_Arr_Rel_Insert_Input = {
  data: Array<Group_Thing_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Group_Thing_On_Conflict>;
};

/** Boolean expression to filter rows from the table "group_thing". All fields are combined with a logical 'AND'. */
export type Group_Thing_Bool_Exp = {
  _and?: InputMaybe<Array<Group_Thing_Bool_Exp>>;
  _not?: InputMaybe<Group_Thing_Bool_Exp>;
  _or?: InputMaybe<Array<Group_Thing_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  group?: InputMaybe<Groups_Bool_Exp>;
  group_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  thing?: InputMaybe<Things_Bool_Exp>;
  thing_id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "group_thing" */
export enum Group_Thing_Constraint {
  /** unique or primary key constraint on columns "thing_id", "group_id" */
  GroupThingGroupIdThingIdKey = 'group_thing_group_id_thing_id_key',
  /** unique or primary key constraint on columns "id" */
  GroupThingPkey = 'group_thing_pkey'
}

/** input type for inserting data into table "group_thing" */
export type Group_Thing_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  group?: InputMaybe<Groups_Obj_Rel_Insert_Input>;
  group_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  thing?: InputMaybe<Things_Obj_Rel_Insert_Input>;
  thing_id?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
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
  created_at?: InputMaybe<Order_By>;
  group_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  thing_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
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
  created_at?: InputMaybe<Order_By>;
  group_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  thing_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
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
  /** upsert condition */
  on_conflict?: InputMaybe<Group_Thing_On_Conflict>;
};

/** on_conflict condition type for table "group_thing" */
export type Group_Thing_On_Conflict = {
  constraint: Group_Thing_Constraint;
  update_columns?: Array<Group_Thing_Update_Column>;
  where?: InputMaybe<Group_Thing_Bool_Exp>;
};

/** Ordering options when selecting data from "group_thing". */
export type Group_Thing_Order_By = {
  created_at?: InputMaybe<Order_By>;
  group?: InputMaybe<Groups_Order_By>;
  group_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  thing?: InputMaybe<Things_Order_By>;
  thing_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
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
  created_at?: InputMaybe<Scalars['timestamptz']>;
  group_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  thing_id?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
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

export type Group_Thing_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Group_Thing_Set_Input>;
  where: Group_Thing_Bool_Exp;
};

/** columns and relationships of "groups" */
export type Groups = {
  __typename?: 'groups';
  /** An array relationship */
  activities: Array<Activities>;
  /** An aggregate relationship */
  activities_aggregate: Activities_Aggregate;
  /** An object relationship */
  banner_file?: Maybe<Files>;
  banner_file_id?: Maybe<Scalars['uuid']>;
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
  distinct_on?: InputMaybe<Array<Activities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Activities_Order_By>>;
  where?: InputMaybe<Activities_Bool_Exp>;
};


/** columns and relationships of "groups" */
export type GroupsActivities_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Activities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Activities_Order_By>>;
  where?: InputMaybe<Activities_Bool_Exp>;
};


/** columns and relationships of "groups" */
export type GroupsJoin_RequestsArgs = {
  distinct_on?: InputMaybe<Array<Group_Join_Requests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Group_Join_Requests_Order_By>>;
  where?: InputMaybe<Group_Join_Requests_Bool_Exp>;
};


/** columns and relationships of "groups" */
export type GroupsJoin_Requests_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Group_Join_Requests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Group_Join_Requests_Order_By>>;
  where?: InputMaybe<Group_Join_Requests_Bool_Exp>;
};


/** columns and relationships of "groups" */
export type GroupsJoin_TokensArgs = {
  distinct_on?: InputMaybe<Array<Group_Join_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Group_Join_Tokens_Order_By>>;
  where?: InputMaybe<Group_Join_Tokens_Bool_Exp>;
};


/** columns and relationships of "groups" */
export type GroupsJoin_Tokens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Group_Join_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Group_Join_Tokens_Order_By>>;
  where?: InputMaybe<Group_Join_Tokens_Bool_Exp>;
};


/** columns and relationships of "groups" */
export type GroupsMembershipsArgs = {
  distinct_on?: InputMaybe<Array<Group_Members_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Group_Members_Order_By>>;
  where?: InputMaybe<Group_Members_Bool_Exp>;
};


/** columns and relationships of "groups" */
export type GroupsMemberships_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Group_Members_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Group_Members_Order_By>>;
  where?: InputMaybe<Group_Members_Bool_Exp>;
};


/** columns and relationships of "groups" */
export type GroupsThing_RelationsArgs = {
  distinct_on?: InputMaybe<Array<Group_Thing_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Group_Thing_Order_By>>;
  where?: InputMaybe<Group_Thing_Bool_Exp>;
};


/** columns and relationships of "groups" */
export type GroupsThing_Relations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Group_Thing_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Group_Thing_Order_By>>;
  where?: InputMaybe<Group_Thing_Bool_Exp>;
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
  columns?: InputMaybe<Array<Groups_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "groups". All fields are combined with a logical 'AND'. */
export type Groups_Bool_Exp = {
  _and?: InputMaybe<Array<Groups_Bool_Exp>>;
  _not?: InputMaybe<Groups_Bool_Exp>;
  _or?: InputMaybe<Array<Groups_Bool_Exp>>;
  activities?: InputMaybe<Activities_Bool_Exp>;
  banner_file?: InputMaybe<Files_Bool_Exp>;
  banner_file_id?: InputMaybe<Uuid_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  join_requests?: InputMaybe<Group_Join_Requests_Bool_Exp>;
  join_tokens?: InputMaybe<Group_Join_Tokens_Bool_Exp>;
  memberships?: InputMaybe<Group_Members_Bool_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  public?: InputMaybe<Boolean_Comparison_Exp>;
  short_id?: InputMaybe<String_Comparison_Exp>;
  thing_relations?: InputMaybe<Group_Thing_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "groups" */
export enum Groups_Constraint {
  /** unique or primary key constraint on columns "name" */
  GroupsNameKey = 'groups_name_key',
  /** unique or primary key constraint on columns "id" */
  GroupsPkey = 'groups_pkey',
  /** unique or primary key constraint on columns "short_id" */
  GroupsShortIdKey = 'groups_short_id_key'
}

/** input type for inserting data into table "groups" */
export type Groups_Insert_Input = {
  activities?: InputMaybe<Activities_Arr_Rel_Insert_Input>;
  banner_file?: InputMaybe<Files_Obj_Rel_Insert_Input>;
  banner_file_id?: InputMaybe<Scalars['uuid']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  join_requests?: InputMaybe<Group_Join_Requests_Arr_Rel_Insert_Input>;
  join_tokens?: InputMaybe<Group_Join_Tokens_Arr_Rel_Insert_Input>;
  memberships?: InputMaybe<Group_Members_Arr_Rel_Insert_Input>;
  name?: InputMaybe<Scalars['String']>;
  public?: InputMaybe<Scalars['Boolean']>;
  short_id?: InputMaybe<Scalars['String']>;
  thing_relations?: InputMaybe<Group_Thing_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Groups_Max_Fields = {
  __typename?: 'groups_max_fields';
  banner_file_id?: Maybe<Scalars['uuid']>;
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
  banner_file_id?: Maybe<Scalars['uuid']>;
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
  /** upsert condition */
  on_conflict?: InputMaybe<Groups_On_Conflict>;
};

/** on_conflict condition type for table "groups" */
export type Groups_On_Conflict = {
  constraint: Groups_Constraint;
  update_columns?: Array<Groups_Update_Column>;
  where?: InputMaybe<Groups_Bool_Exp>;
};

/** Ordering options when selecting data from "groups". */
export type Groups_Order_By = {
  activities_aggregate?: InputMaybe<Activities_Aggregate_Order_By>;
  banner_file?: InputMaybe<Files_Order_By>;
  banner_file_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  join_requests_aggregate?: InputMaybe<Group_Join_Requests_Aggregate_Order_By>;
  join_tokens_aggregate?: InputMaybe<Group_Join_Tokens_Aggregate_Order_By>;
  memberships_aggregate?: InputMaybe<Group_Members_Aggregate_Order_By>;
  name?: InputMaybe<Order_By>;
  public?: InputMaybe<Order_By>;
  short_id?: InputMaybe<Order_By>;
  thing_relations_aggregate?: InputMaybe<Group_Thing_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: groups */
export type Groups_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "groups" */
export enum Groups_Select_Column {
  /** column name */
  BannerFileId = 'banner_file_id',
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
  banner_file_id?: InputMaybe<Scalars['uuid']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  public?: InputMaybe<Scalars['Boolean']>;
  short_id?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "groups" */
export enum Groups_Update_Column {
  /** column name */
  BannerFileId = 'banner_file_id',
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

export type Groups_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Groups_Set_Input>;
  where: Groups_Bool_Exp;
};

export type Jsonb_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  _cast?: InputMaybe<Jsonb_Cast_Exp>;
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars['jsonb']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']>;
  _eq?: InputMaybe<Scalars['jsonb']>;
  _gt?: InputMaybe<Scalars['jsonb']>;
  _gte?: InputMaybe<Scalars['jsonb']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars['String']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars['String']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars['String']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['jsonb']>;
  _lte?: InputMaybe<Scalars['jsonb']>;
  _neq?: InputMaybe<Scalars['jsonb']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  createChatGroup?: Maybe<CreateChatGroupResult>;
  /** write new message in a chat group */
  createChatMessage: CreateChatMessageResult;
  createGroup: CreateGroupResult;
  createJoinToken?: Maybe<CreateJoinTokenResult>;
  /** delete single row from the table: "auth.providers" */
  deleteAuthProvider?: Maybe<AuthProviders>;
  /** delete single row from the table: "auth.provider_requests" */
  deleteAuthProviderRequest?: Maybe<AuthProviderRequests>;
  /** delete data from the table: "auth.provider_requests" */
  deleteAuthProviderRequests?: Maybe<AuthProviderRequests_Mutation_Response>;
  /** delete data from the table: "auth.providers" */
  deleteAuthProviders?: Maybe<AuthProviders_Mutation_Response>;
  /** delete single row from the table: "auth.refresh_tokens" */
  deleteAuthRefreshToken?: Maybe<AuthRefreshTokens>;
  /** delete data from the table: "auth.refresh_tokens" */
  deleteAuthRefreshTokens?: Maybe<AuthRefreshTokens_Mutation_Response>;
  /** delete single row from the table: "auth.roles" */
  deleteAuthRole?: Maybe<AuthRoles>;
  /** delete data from the table: "auth.roles" */
  deleteAuthRoles?: Maybe<AuthRoles_Mutation_Response>;
  /** delete single row from the table: "auth.user_authenticators" */
  deleteAuthUserAuthenticator?: Maybe<AuthUserAuthenticators>;
  /** delete data from the table: "auth.user_authenticators" */
  deleteAuthUserAuthenticators?: Maybe<AuthUserAuthenticators_Mutation_Response>;
  /** delete single row from the table: "auth.user_providers" */
  deleteAuthUserProvider?: Maybe<AuthUserProviders>;
  /** delete data from the table: "auth.user_providers" */
  deleteAuthUserProviders?: Maybe<AuthUserProviders_Mutation_Response>;
  /** delete single row from the table: "auth.user_roles" */
  deleteAuthUserRole?: Maybe<AuthUserRoles>;
  /** delete data from the table: "auth.user_roles" */
  deleteAuthUserRoles?: Maybe<AuthUserRoles_Mutation_Response>;
  /** delete single row from the table: "storage.buckets" */
  deleteBucket?: Maybe<Buckets>;
  /** delete data from the table: "storage.buckets" */
  deleteBuckets?: Maybe<Buckets_Mutation_Response>;
  /** delete single row from the table: "storage.files" */
  deleteFile?: Maybe<Files>;
  /** delete data from the table: "storage.files" */
  deleteFiles?: Maybe<Files_Mutation_Response>;
  /** delete single row from the table: "auth.users" */
  deleteUser?: Maybe<Users>;
  /** delete data from the table: "auth.users" */
  deleteUsers?: Maybe<Users_Mutation_Response>;
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
  /** delete data from the table: "user_profile" */
  delete_user_profile?: Maybe<User_Profile_Mutation_Response>;
  /** delete single row from the table: "user_profile" */
  delete_user_profile_by_pk?: Maybe<User_Profile>;
  /** delete data from the table: "user_settings" */
  delete_user_settings?: Maybe<User_Settings_Mutation_Response>;
  /** delete single row from the table: "user_settings" */
  delete_user_settings_by_pk?: Maybe<User_Settings>;
  handleJoinRequest: HandleJoinRequestResult;
  /** insert a single row into the table: "auth.providers" */
  insertAuthProvider?: Maybe<AuthProviders>;
  /** insert a single row into the table: "auth.provider_requests" */
  insertAuthProviderRequest?: Maybe<AuthProviderRequests>;
  /** insert data into the table: "auth.provider_requests" */
  insertAuthProviderRequests?: Maybe<AuthProviderRequests_Mutation_Response>;
  /** insert data into the table: "auth.providers" */
  insertAuthProviders?: Maybe<AuthProviders_Mutation_Response>;
  /** insert a single row into the table: "auth.refresh_tokens" */
  insertAuthRefreshToken?: Maybe<AuthRefreshTokens>;
  /** insert data into the table: "auth.refresh_tokens" */
  insertAuthRefreshTokens?: Maybe<AuthRefreshTokens_Mutation_Response>;
  /** insert a single row into the table: "auth.roles" */
  insertAuthRole?: Maybe<AuthRoles>;
  /** insert data into the table: "auth.roles" */
  insertAuthRoles?: Maybe<AuthRoles_Mutation_Response>;
  /** insert a single row into the table: "auth.user_authenticators" */
  insertAuthUserAuthenticator?: Maybe<AuthUserAuthenticators>;
  /** insert data into the table: "auth.user_authenticators" */
  insertAuthUserAuthenticators?: Maybe<AuthUserAuthenticators_Mutation_Response>;
  /** insert a single row into the table: "auth.user_providers" */
  insertAuthUserProvider?: Maybe<AuthUserProviders>;
  /** insert data into the table: "auth.user_providers" */
  insertAuthUserProviders?: Maybe<AuthUserProviders_Mutation_Response>;
  /** insert a single row into the table: "auth.user_roles" */
  insertAuthUserRole?: Maybe<AuthUserRoles>;
  /** insert data into the table: "auth.user_roles" */
  insertAuthUserRoles?: Maybe<AuthUserRoles_Mutation_Response>;
  /** insert a single row into the table: "storage.buckets" */
  insertBucket?: Maybe<Buckets>;
  /** insert data into the table: "storage.buckets" */
  insertBuckets?: Maybe<Buckets_Mutation_Response>;
  /** insert a single row into the table: "storage.files" */
  insertFile?: Maybe<Files>;
  /** insert data into the table: "storage.files" */
  insertFiles?: Maybe<Files_Mutation_Response>;
  /** insert a single row into the table: "auth.users" */
  insertUser?: Maybe<Users>;
  /** insert data into the table: "auth.users" */
  insertUsers?: Maybe<Users_Mutation_Response>;
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
  /** insert data into the table: "user_profile" */
  insert_user_profile?: Maybe<User_Profile_Mutation_Response>;
  /** insert a single row into the table: "user_profile" */
  insert_user_profile_one?: Maybe<User_Profile>;
  /** insert data into the table: "user_settings" */
  insert_user_settings?: Maybe<User_Settings_Mutation_Response>;
  /** insert a single row into the table: "user_settings" */
  insert_user_settings_one?: Maybe<User_Settings>;
  joinGroup?: Maybe<JoinGroupResult>;
  registerCredentials?: Maybe<RegistrationResult>;
  requestJoinGroup?: Maybe<RequestJoinGroupResult>;
  /** update single row of the table: "auth.providers" */
  updateAuthProvider?: Maybe<AuthProviders>;
  /** update single row of the table: "auth.provider_requests" */
  updateAuthProviderRequest?: Maybe<AuthProviderRequests>;
  /** update data of the table: "auth.provider_requests" */
  updateAuthProviderRequests?: Maybe<AuthProviderRequests_Mutation_Response>;
  /** update data of the table: "auth.providers" */
  updateAuthProviders?: Maybe<AuthProviders_Mutation_Response>;
  /** update single row of the table: "auth.refresh_tokens" */
  updateAuthRefreshToken?: Maybe<AuthRefreshTokens>;
  /** update data of the table: "auth.refresh_tokens" */
  updateAuthRefreshTokens?: Maybe<AuthRefreshTokens_Mutation_Response>;
  /** update single row of the table: "auth.roles" */
  updateAuthRole?: Maybe<AuthRoles>;
  /** update data of the table: "auth.roles" */
  updateAuthRoles?: Maybe<AuthRoles_Mutation_Response>;
  /** update single row of the table: "auth.user_authenticators" */
  updateAuthUserAuthenticator?: Maybe<AuthUserAuthenticators>;
  /** update data of the table: "auth.user_authenticators" */
  updateAuthUserAuthenticators?: Maybe<AuthUserAuthenticators_Mutation_Response>;
  /** update single row of the table: "auth.user_providers" */
  updateAuthUserProvider?: Maybe<AuthUserProviders>;
  /** update data of the table: "auth.user_providers" */
  updateAuthUserProviders?: Maybe<AuthUserProviders_Mutation_Response>;
  /** update single row of the table: "auth.user_roles" */
  updateAuthUserRole?: Maybe<AuthUserRoles>;
  /** update data of the table: "auth.user_roles" */
  updateAuthUserRoles?: Maybe<AuthUserRoles_Mutation_Response>;
  /** update single row of the table: "storage.buckets" */
  updateBucket?: Maybe<Buckets>;
  /** update data of the table: "storage.buckets" */
  updateBuckets?: Maybe<Buckets_Mutation_Response>;
  /** update single row of the table: "storage.files" */
  updateFile?: Maybe<Files>;
  /** update data of the table: "storage.files" */
  updateFiles?: Maybe<Files_Mutation_Response>;
  updateThing?: Maybe<UpdateThingResult>;
  /** update single row of the table: "auth.users" */
  updateUser?: Maybe<Users>;
  /** update data of the table: "auth.users" */
  updateUsers?: Maybe<Users_Mutation_Response>;
  /** update data of the table: "activities" */
  update_activities?: Maybe<Activities_Mutation_Response>;
  /** update single row of the table: "activities" */
  update_activities_by_pk?: Maybe<Activities>;
  /** update multiples rows of table: "activities" */
  update_activities_many?: Maybe<Array<Maybe<Activities_Mutation_Response>>>;
  /** update data of the table: "activity_verb" */
  update_activity_verb?: Maybe<Activity_Verb_Mutation_Response>;
  /** update single row of the table: "activity_verb" */
  update_activity_verb_by_pk?: Maybe<Activity_Verb>;
  /** update multiples rows of table: "activity_verb" */
  update_activity_verb_many?: Maybe<Array<Maybe<Activity_Verb_Mutation_Response>>>;
  /** update multiples rows of table: "auth.provider_requests" */
  update_authProviderRequests_many?: Maybe<Array<Maybe<AuthProviderRequests_Mutation_Response>>>;
  /** update multiples rows of table: "auth.providers" */
  update_authProviders_many?: Maybe<Array<Maybe<AuthProviders_Mutation_Response>>>;
  /** update multiples rows of table: "auth.refresh_tokens" */
  update_authRefreshTokens_many?: Maybe<Array<Maybe<AuthRefreshTokens_Mutation_Response>>>;
  /** update multiples rows of table: "auth.roles" */
  update_authRoles_many?: Maybe<Array<Maybe<AuthRoles_Mutation_Response>>>;
  /** update multiples rows of table: "auth.user_authenticators" */
  update_authUserAuthenticators_many?: Maybe<Array<Maybe<AuthUserAuthenticators_Mutation_Response>>>;
  /** update multiples rows of table: "auth.user_providers" */
  update_authUserProviders_many?: Maybe<Array<Maybe<AuthUserProviders_Mutation_Response>>>;
  /** update multiples rows of table: "auth.user_roles" */
  update_authUserRoles_many?: Maybe<Array<Maybe<AuthUserRoles_Mutation_Response>>>;
  /** update multiples rows of table: "storage.buckets" */
  update_buckets_many?: Maybe<Array<Maybe<Buckets_Mutation_Response>>>;
  /** update data of the table: "chat_group_members" */
  update_chat_group_members?: Maybe<Chat_Group_Members_Mutation_Response>;
  /** update single row of the table: "chat_group_members" */
  update_chat_group_members_by_pk?: Maybe<Chat_Group_Members>;
  /** update multiples rows of table: "chat_group_members" */
  update_chat_group_members_many?: Maybe<Array<Maybe<Chat_Group_Members_Mutation_Response>>>;
  /** update data of the table: "chat_groups" */
  update_chat_groups?: Maybe<Chat_Groups_Mutation_Response>;
  /** update single row of the table: "chat_groups" */
  update_chat_groups_by_pk?: Maybe<Chat_Groups>;
  /** update multiples rows of table: "chat_groups" */
  update_chat_groups_many?: Maybe<Array<Maybe<Chat_Groups_Mutation_Response>>>;
  /** update data of the table: "chat_messages" */
  update_chat_messages?: Maybe<Chat_Messages_Mutation_Response>;
  /** update single row of the table: "chat_messages" */
  update_chat_messages_by_pk?: Maybe<Chat_Messages>;
  /** update multiples rows of table: "chat_messages" */
  update_chat_messages_many?: Maybe<Array<Maybe<Chat_Messages_Mutation_Response>>>;
  /** update data of the table: "comments" */
  update_comments?: Maybe<Comments_Mutation_Response>;
  /** update single row of the table: "comments" */
  update_comments_by_pk?: Maybe<Comments>;
  /** update multiples rows of table: "comments" */
  update_comments_many?: Maybe<Array<Maybe<Comments_Mutation_Response>>>;
  /** update data of the table: "entities" */
  update_entities?: Maybe<Entities_Mutation_Response>;
  /** update single row of the table: "entities" */
  update_entities_by_pk?: Maybe<Entities>;
  /** update multiples rows of table: "entities" */
  update_entities_many?: Maybe<Array<Maybe<Entities_Mutation_Response>>>;
  /** update data of the table: "file_uploads" */
  update_file_uploads?: Maybe<File_Uploads_Mutation_Response>;
  /** update single row of the table: "file_uploads" */
  update_file_uploads_by_pk?: Maybe<File_Uploads>;
  /** update multiples rows of table: "file_uploads" */
  update_file_uploads_many?: Maybe<Array<Maybe<File_Uploads_Mutation_Response>>>;
  /** update multiples rows of table: "storage.files" */
  update_files_many?: Maybe<Array<Maybe<Files_Mutation_Response>>>;
  /** update data of the table: "group_join_request_status" */
  update_group_join_request_status?: Maybe<Group_Join_Request_Status_Mutation_Response>;
  /** update single row of the table: "group_join_request_status" */
  update_group_join_request_status_by_pk?: Maybe<Group_Join_Request_Status>;
  /** update multiples rows of table: "group_join_request_status" */
  update_group_join_request_status_many?: Maybe<Array<Maybe<Group_Join_Request_Status_Mutation_Response>>>;
  /** update data of the table: "group_join_requests" */
  update_group_join_requests?: Maybe<Group_Join_Requests_Mutation_Response>;
  /** update single row of the table: "group_join_requests" */
  update_group_join_requests_by_pk?: Maybe<Group_Join_Requests>;
  /** update multiples rows of table: "group_join_requests" */
  update_group_join_requests_many?: Maybe<Array<Maybe<Group_Join_Requests_Mutation_Response>>>;
  /** update data of the table: "group_join_tokens" */
  update_group_join_tokens?: Maybe<Group_Join_Tokens_Mutation_Response>;
  /** update single row of the table: "group_join_tokens" */
  update_group_join_tokens_by_pk?: Maybe<Group_Join_Tokens>;
  /** update multiples rows of table: "group_join_tokens" */
  update_group_join_tokens_many?: Maybe<Array<Maybe<Group_Join_Tokens_Mutation_Response>>>;
  /** update data of the table: "group_members" */
  update_group_members?: Maybe<Group_Members_Mutation_Response>;
  /** update single row of the table: "group_members" */
  update_group_members_by_pk?: Maybe<Group_Members>;
  /** update multiples rows of table: "group_members" */
  update_group_members_many?: Maybe<Array<Maybe<Group_Members_Mutation_Response>>>;
  /** update data of the table: "group_post_comment" */
  update_group_post_comment?: Maybe<Group_Post_Comment_Mutation_Response>;
  /** update single row of the table: "group_post_comment" */
  update_group_post_comment_by_pk?: Maybe<Group_Post_Comment>;
  /** update multiples rows of table: "group_post_comment" */
  update_group_post_comment_many?: Maybe<Array<Maybe<Group_Post_Comment_Mutation_Response>>>;
  /** update data of the table: "group_post_type" */
  update_group_post_type?: Maybe<Group_Post_Type_Mutation_Response>;
  /** update single row of the table: "group_post_type" */
  update_group_post_type_by_pk?: Maybe<Group_Post_Type>;
  /** update multiples rows of table: "group_post_type" */
  update_group_post_type_many?: Maybe<Array<Maybe<Group_Post_Type_Mutation_Response>>>;
  /** update data of the table: "group_posts" */
  update_group_posts?: Maybe<Group_Posts_Mutation_Response>;
  /** update single row of the table: "group_posts" */
  update_group_posts_by_pk?: Maybe<Group_Posts>;
  /** update multiples rows of table: "group_posts" */
  update_group_posts_many?: Maybe<Array<Maybe<Group_Posts_Mutation_Response>>>;
  /** update data of the table: "group_role" */
  update_group_role?: Maybe<Group_Role_Mutation_Response>;
  /** update single row of the table: "group_role" */
  update_group_role_by_pk?: Maybe<Group_Role>;
  /** update multiples rows of table: "group_role" */
  update_group_role_many?: Maybe<Array<Maybe<Group_Role_Mutation_Response>>>;
  /** update data of the table: "group_thing" */
  update_group_thing?: Maybe<Group_Thing_Mutation_Response>;
  /** update single row of the table: "group_thing" */
  update_group_thing_by_pk?: Maybe<Group_Thing>;
  /** update multiples rows of table: "group_thing" */
  update_group_thing_many?: Maybe<Array<Maybe<Group_Thing_Mutation_Response>>>;
  /** update data of the table: "groups" */
  update_groups?: Maybe<Groups_Mutation_Response>;
  /** update single row of the table: "groups" */
  update_groups_by_pk?: Maybe<Groups>;
  /** update multiples rows of table: "groups" */
  update_groups_many?: Maybe<Array<Maybe<Groups_Mutation_Response>>>;
  /** update data of the table: "notifications" */
  update_notifications?: Maybe<Notifications_Mutation_Response>;
  /** update single row of the table: "notifications" */
  update_notifications_by_pk?: Maybe<Notifications>;
  /** update multiples rows of table: "notifications" */
  update_notifications_many?: Maybe<Array<Maybe<Notifications_Mutation_Response>>>;
  /** update data of the table: "thing_images" */
  update_thing_images?: Maybe<Thing_Images_Mutation_Response>;
  /** update single row of the table: "thing_images" */
  update_thing_images_by_pk?: Maybe<Thing_Images>;
  /** update multiples rows of table: "thing_images" */
  update_thing_images_many?: Maybe<Array<Maybe<Thing_Images_Mutation_Response>>>;
  /** update data of the table: "thing_type" */
  update_thing_type?: Maybe<Thing_Type_Mutation_Response>;
  /** update single row of the table: "thing_type" */
  update_thing_type_by_pk?: Maybe<Thing_Type>;
  /** update multiples rows of table: "thing_type" */
  update_thing_type_many?: Maybe<Array<Maybe<Thing_Type_Mutation_Response>>>;
  /** update data of the table: "things" */
  update_things?: Maybe<Things_Mutation_Response>;
  /** update single row of the table: "things" */
  update_things_by_pk?: Maybe<Things>;
  /** update multiples rows of table: "things" */
  update_things_many?: Maybe<Array<Maybe<Things_Mutation_Response>>>;
  /** update data of the table: "user_profile" */
  update_user_profile?: Maybe<User_Profile_Mutation_Response>;
  /** update single row of the table: "user_profile" */
  update_user_profile_by_pk?: Maybe<User_Profile>;
  /** update multiples rows of table: "user_profile" */
  update_user_profile_many?: Maybe<Array<Maybe<User_Profile_Mutation_Response>>>;
  /** update data of the table: "user_settings" */
  update_user_settings?: Maybe<User_Settings_Mutation_Response>;
  /** update single row of the table: "user_settings" */
  update_user_settings_by_pk?: Maybe<User_Settings>;
  /** update multiples rows of table: "user_settings" */
  update_user_settings_many?: Maybe<Array<Maybe<User_Settings_Mutation_Response>>>;
  /** update multiples rows of table: "auth.users" */
  update_users_many?: Maybe<Array<Maybe<Users_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootCreateChatGroupArgs = {
  input: CreateChatGroupInput;
};


/** mutation root */
export type Mutation_RootCreateChatMessageArgs = {
  input?: InputMaybe<CreateChatMessageInput>;
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
export type Mutation_RootDeleteAuthProviderArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDeleteAuthProviderRequestArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteAuthProviderRequestsArgs = {
  where: AuthProviderRequests_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteAuthProvidersArgs = {
  where: AuthProviders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteAuthRefreshTokenArgs = {
  refreshToken: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteAuthRefreshTokensArgs = {
  where: AuthRefreshTokens_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteAuthRoleArgs = {
  role: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDeleteAuthRolesArgs = {
  where: AuthRoles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteAuthUserAuthenticatorArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteAuthUserAuthenticatorsArgs = {
  where: AuthUserAuthenticators_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteAuthUserProviderArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteAuthUserProvidersArgs = {
  where: AuthUserProviders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteAuthUserRoleArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteAuthUserRolesArgs = {
  where: AuthUserRoles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteBucketArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDeleteBucketsArgs = {
  where: Buckets_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteFileArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteFilesArgs = {
  where: Files_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteUserArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteUsersArgs = {
  where: Users_Bool_Exp;
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
export type Mutation_RootDelete_User_ProfileArgs = {
  where: User_Profile_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_Profile_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_User_SettingsArgs = {
  where: User_Settings_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_Settings_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootHandleJoinRequestArgs = {
  input: HandleJoinRequestInput;
};


/** mutation root */
export type Mutation_RootInsertAuthProviderArgs = {
  object: AuthProviders_Insert_Input;
  on_conflict?: InputMaybe<AuthProviders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthProviderRequestArgs = {
  object: AuthProviderRequests_Insert_Input;
  on_conflict?: InputMaybe<AuthProviderRequests_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthProviderRequestsArgs = {
  objects: Array<AuthProviderRequests_Insert_Input>;
  on_conflict?: InputMaybe<AuthProviderRequests_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthProvidersArgs = {
  objects: Array<AuthProviders_Insert_Input>;
  on_conflict?: InputMaybe<AuthProviders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthRefreshTokenArgs = {
  object: AuthRefreshTokens_Insert_Input;
  on_conflict?: InputMaybe<AuthRefreshTokens_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthRefreshTokensArgs = {
  objects: Array<AuthRefreshTokens_Insert_Input>;
  on_conflict?: InputMaybe<AuthRefreshTokens_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthRoleArgs = {
  object: AuthRoles_Insert_Input;
  on_conflict?: InputMaybe<AuthRoles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthRolesArgs = {
  objects: Array<AuthRoles_Insert_Input>;
  on_conflict?: InputMaybe<AuthRoles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthUserAuthenticatorArgs = {
  object: AuthUserAuthenticators_Insert_Input;
  on_conflict?: InputMaybe<AuthUserAuthenticators_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthUserAuthenticatorsArgs = {
  objects: Array<AuthUserAuthenticators_Insert_Input>;
  on_conflict?: InputMaybe<AuthUserAuthenticators_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthUserProviderArgs = {
  object: AuthUserProviders_Insert_Input;
  on_conflict?: InputMaybe<AuthUserProviders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthUserProvidersArgs = {
  objects: Array<AuthUserProviders_Insert_Input>;
  on_conflict?: InputMaybe<AuthUserProviders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthUserRoleArgs = {
  object: AuthUserRoles_Insert_Input;
  on_conflict?: InputMaybe<AuthUserRoles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthUserRolesArgs = {
  objects: Array<AuthUserRoles_Insert_Input>;
  on_conflict?: InputMaybe<AuthUserRoles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertBucketArgs = {
  object: Buckets_Insert_Input;
  on_conflict?: InputMaybe<Buckets_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertBucketsArgs = {
  objects: Array<Buckets_Insert_Input>;
  on_conflict?: InputMaybe<Buckets_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertFileArgs = {
  object: Files_Insert_Input;
  on_conflict?: InputMaybe<Files_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertFilesArgs = {
  objects: Array<Files_Insert_Input>;
  on_conflict?: InputMaybe<Files_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertUserArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertUsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ActivitiesArgs = {
  objects: Array<Activities_Insert_Input>;
  on_conflict?: InputMaybe<Activities_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Activities_OneArgs = {
  object: Activities_Insert_Input;
  on_conflict?: InputMaybe<Activities_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Activity_VerbArgs = {
  objects: Array<Activity_Verb_Insert_Input>;
  on_conflict?: InputMaybe<Activity_Verb_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Activity_Verb_OneArgs = {
  object: Activity_Verb_Insert_Input;
  on_conflict?: InputMaybe<Activity_Verb_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Chat_Group_MembersArgs = {
  objects: Array<Chat_Group_Members_Insert_Input>;
  on_conflict?: InputMaybe<Chat_Group_Members_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Chat_Group_Members_OneArgs = {
  object: Chat_Group_Members_Insert_Input;
  on_conflict?: InputMaybe<Chat_Group_Members_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Chat_GroupsArgs = {
  objects: Array<Chat_Groups_Insert_Input>;
  on_conflict?: InputMaybe<Chat_Groups_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Chat_Groups_OneArgs = {
  object: Chat_Groups_Insert_Input;
  on_conflict?: InputMaybe<Chat_Groups_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Chat_MessagesArgs = {
  objects: Array<Chat_Messages_Insert_Input>;
  on_conflict?: InputMaybe<Chat_Messages_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Chat_Messages_OneArgs = {
  object: Chat_Messages_Insert_Input;
  on_conflict?: InputMaybe<Chat_Messages_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CommentsArgs = {
  objects: Array<Comments_Insert_Input>;
  on_conflict?: InputMaybe<Comments_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Comments_OneArgs = {
  object: Comments_Insert_Input;
  on_conflict?: InputMaybe<Comments_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_EntitiesArgs = {
  objects: Array<Entities_Insert_Input>;
  on_conflict?: InputMaybe<Entities_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Entities_OneArgs = {
  object: Entities_Insert_Input;
  on_conflict?: InputMaybe<Entities_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_File_UploadsArgs = {
  objects: Array<File_Uploads_Insert_Input>;
  on_conflict?: InputMaybe<File_Uploads_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_File_Uploads_OneArgs = {
  object: File_Uploads_Insert_Input;
  on_conflict?: InputMaybe<File_Uploads_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Group_Join_Request_StatusArgs = {
  objects: Array<Group_Join_Request_Status_Insert_Input>;
  on_conflict?: InputMaybe<Group_Join_Request_Status_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Group_Join_Request_Status_OneArgs = {
  object: Group_Join_Request_Status_Insert_Input;
  on_conflict?: InputMaybe<Group_Join_Request_Status_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Group_Join_RequestsArgs = {
  objects: Array<Group_Join_Requests_Insert_Input>;
  on_conflict?: InputMaybe<Group_Join_Requests_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Group_Join_Requests_OneArgs = {
  object: Group_Join_Requests_Insert_Input;
  on_conflict?: InputMaybe<Group_Join_Requests_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Group_Join_TokensArgs = {
  objects: Array<Group_Join_Tokens_Insert_Input>;
  on_conflict?: InputMaybe<Group_Join_Tokens_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Group_Join_Tokens_OneArgs = {
  object: Group_Join_Tokens_Insert_Input;
  on_conflict?: InputMaybe<Group_Join_Tokens_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Group_MembersArgs = {
  objects: Array<Group_Members_Insert_Input>;
  on_conflict?: InputMaybe<Group_Members_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Group_Members_OneArgs = {
  object: Group_Members_Insert_Input;
  on_conflict?: InputMaybe<Group_Members_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Group_Post_CommentArgs = {
  objects: Array<Group_Post_Comment_Insert_Input>;
  on_conflict?: InputMaybe<Group_Post_Comment_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Group_Post_Comment_OneArgs = {
  object: Group_Post_Comment_Insert_Input;
  on_conflict?: InputMaybe<Group_Post_Comment_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Group_Post_TypeArgs = {
  objects: Array<Group_Post_Type_Insert_Input>;
  on_conflict?: InputMaybe<Group_Post_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Group_Post_Type_OneArgs = {
  object: Group_Post_Type_Insert_Input;
  on_conflict?: InputMaybe<Group_Post_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Group_PostsArgs = {
  objects: Array<Group_Posts_Insert_Input>;
  on_conflict?: InputMaybe<Group_Posts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Group_Posts_OneArgs = {
  object: Group_Posts_Insert_Input;
  on_conflict?: InputMaybe<Group_Posts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Group_RoleArgs = {
  objects: Array<Group_Role_Insert_Input>;
  on_conflict?: InputMaybe<Group_Role_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Group_Role_OneArgs = {
  object: Group_Role_Insert_Input;
  on_conflict?: InputMaybe<Group_Role_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Group_ThingArgs = {
  objects: Array<Group_Thing_Insert_Input>;
  on_conflict?: InputMaybe<Group_Thing_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Group_Thing_OneArgs = {
  object: Group_Thing_Insert_Input;
  on_conflict?: InputMaybe<Group_Thing_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_GroupsArgs = {
  objects: Array<Groups_Insert_Input>;
  on_conflict?: InputMaybe<Groups_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Groups_OneArgs = {
  object: Groups_Insert_Input;
  on_conflict?: InputMaybe<Groups_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_NotificationsArgs = {
  objects: Array<Notifications_Insert_Input>;
  on_conflict?: InputMaybe<Notifications_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Notifications_OneArgs = {
  object: Notifications_Insert_Input;
  on_conflict?: InputMaybe<Notifications_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Thing_ImagesArgs = {
  objects: Array<Thing_Images_Insert_Input>;
  on_conflict?: InputMaybe<Thing_Images_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Thing_Images_OneArgs = {
  object: Thing_Images_Insert_Input;
  on_conflict?: InputMaybe<Thing_Images_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Thing_TypeArgs = {
  objects: Array<Thing_Type_Insert_Input>;
  on_conflict?: InputMaybe<Thing_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Thing_Type_OneArgs = {
  object: Thing_Type_Insert_Input;
  on_conflict?: InputMaybe<Thing_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ThingsArgs = {
  objects: Array<Things_Insert_Input>;
  on_conflict?: InputMaybe<Things_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Things_OneArgs = {
  object: Things_Insert_Input;
  on_conflict?: InputMaybe<Things_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_ProfileArgs = {
  objects: Array<User_Profile_Insert_Input>;
  on_conflict?: InputMaybe<User_Profile_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Profile_OneArgs = {
  object: User_Profile_Insert_Input;
  on_conflict?: InputMaybe<User_Profile_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_SettingsArgs = {
  objects: Array<User_Settings_Insert_Input>;
  on_conflict?: InputMaybe<User_Settings_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Settings_OneArgs = {
  object: User_Settings_Insert_Input;
  on_conflict?: InputMaybe<User_Settings_On_Conflict>;
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
export type Mutation_RootUpdateAuthProviderArgs = {
  _set?: InputMaybe<AuthProviders_Set_Input>;
  pk_columns: AuthProviders_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthProviderRequestArgs = {
  _append?: InputMaybe<AuthProviderRequests_Append_Input>;
  _delete_at_path?: InputMaybe<AuthProviderRequests_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<AuthProviderRequests_Delete_Elem_Input>;
  _delete_key?: InputMaybe<AuthProviderRequests_Delete_Key_Input>;
  _prepend?: InputMaybe<AuthProviderRequests_Prepend_Input>;
  _set?: InputMaybe<AuthProviderRequests_Set_Input>;
  pk_columns: AuthProviderRequests_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthProviderRequestsArgs = {
  _append?: InputMaybe<AuthProviderRequests_Append_Input>;
  _delete_at_path?: InputMaybe<AuthProviderRequests_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<AuthProviderRequests_Delete_Elem_Input>;
  _delete_key?: InputMaybe<AuthProviderRequests_Delete_Key_Input>;
  _prepend?: InputMaybe<AuthProviderRequests_Prepend_Input>;
  _set?: InputMaybe<AuthProviderRequests_Set_Input>;
  where: AuthProviderRequests_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateAuthProvidersArgs = {
  _set?: InputMaybe<AuthProviders_Set_Input>;
  where: AuthProviders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateAuthRefreshTokenArgs = {
  _set?: InputMaybe<AuthRefreshTokens_Set_Input>;
  pk_columns: AuthRefreshTokens_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthRefreshTokensArgs = {
  _set?: InputMaybe<AuthRefreshTokens_Set_Input>;
  where: AuthRefreshTokens_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateAuthRoleArgs = {
  _set?: InputMaybe<AuthRoles_Set_Input>;
  pk_columns: AuthRoles_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthRolesArgs = {
  _set?: InputMaybe<AuthRoles_Set_Input>;
  where: AuthRoles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateAuthUserAuthenticatorArgs = {
  _inc?: InputMaybe<AuthUserAuthenticators_Inc_Input>;
  _set?: InputMaybe<AuthUserAuthenticators_Set_Input>;
  pk_columns: AuthUserAuthenticators_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthUserAuthenticatorsArgs = {
  _inc?: InputMaybe<AuthUserAuthenticators_Inc_Input>;
  _set?: InputMaybe<AuthUserAuthenticators_Set_Input>;
  where: AuthUserAuthenticators_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateAuthUserProviderArgs = {
  _set?: InputMaybe<AuthUserProviders_Set_Input>;
  pk_columns: AuthUserProviders_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthUserProvidersArgs = {
  _set?: InputMaybe<AuthUserProviders_Set_Input>;
  where: AuthUserProviders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateAuthUserRoleArgs = {
  _set?: InputMaybe<AuthUserRoles_Set_Input>;
  pk_columns: AuthUserRoles_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthUserRolesArgs = {
  _set?: InputMaybe<AuthUserRoles_Set_Input>;
  where: AuthUserRoles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateBucketArgs = {
  _inc?: InputMaybe<Buckets_Inc_Input>;
  _set?: InputMaybe<Buckets_Set_Input>;
  pk_columns: Buckets_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateBucketsArgs = {
  _inc?: InputMaybe<Buckets_Inc_Input>;
  _set?: InputMaybe<Buckets_Set_Input>;
  where: Buckets_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateFileArgs = {
  _inc?: InputMaybe<Files_Inc_Input>;
  _set?: InputMaybe<Files_Set_Input>;
  pk_columns: Files_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateFilesArgs = {
  _inc?: InputMaybe<Files_Inc_Input>;
  _set?: InputMaybe<Files_Set_Input>;
  where: Files_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateThingArgs = {
  input: UpdateThingInput;
};


/** mutation root */
export type Mutation_RootUpdateUserArgs = {
  _append?: InputMaybe<Users_Append_Input>;
  _delete_at_path?: InputMaybe<Users_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Users_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Users_Delete_Key_Input>;
  _prepend?: InputMaybe<Users_Prepend_Input>;
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateUsersArgs = {
  _append?: InputMaybe<Users_Append_Input>;
  _delete_at_path?: InputMaybe<Users_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Users_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Users_Delete_Key_Input>;
  _prepend?: InputMaybe<Users_Prepend_Input>;
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_ActivitiesArgs = {
  _set?: InputMaybe<Activities_Set_Input>;
  where: Activities_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Activities_By_PkArgs = {
  _set?: InputMaybe<Activities_Set_Input>;
  pk_columns: Activities_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Activities_ManyArgs = {
  updates: Array<Activities_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Activity_VerbArgs = {
  _set?: InputMaybe<Activity_Verb_Set_Input>;
  where: Activity_Verb_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Activity_Verb_By_PkArgs = {
  _set?: InputMaybe<Activity_Verb_Set_Input>;
  pk_columns: Activity_Verb_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Activity_Verb_ManyArgs = {
  updates: Array<Activity_Verb_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_AuthProviderRequests_ManyArgs = {
  updates: Array<AuthProviderRequests_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_AuthProviders_ManyArgs = {
  updates: Array<AuthProviders_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_AuthRefreshTokens_ManyArgs = {
  updates: Array<AuthRefreshTokens_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_AuthRoles_ManyArgs = {
  updates: Array<AuthRoles_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_AuthUserAuthenticators_ManyArgs = {
  updates: Array<AuthUserAuthenticators_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_AuthUserProviders_ManyArgs = {
  updates: Array<AuthUserProviders_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_AuthUserRoles_ManyArgs = {
  updates: Array<AuthUserRoles_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Buckets_ManyArgs = {
  updates: Array<Buckets_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Chat_Group_MembersArgs = {
  _set?: InputMaybe<Chat_Group_Members_Set_Input>;
  where: Chat_Group_Members_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Chat_Group_Members_By_PkArgs = {
  _set?: InputMaybe<Chat_Group_Members_Set_Input>;
  pk_columns: Chat_Group_Members_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Chat_Group_Members_ManyArgs = {
  updates: Array<Chat_Group_Members_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Chat_GroupsArgs = {
  _set?: InputMaybe<Chat_Groups_Set_Input>;
  where: Chat_Groups_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Chat_Groups_By_PkArgs = {
  _set?: InputMaybe<Chat_Groups_Set_Input>;
  pk_columns: Chat_Groups_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Chat_Groups_ManyArgs = {
  updates: Array<Chat_Groups_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Chat_MessagesArgs = {
  _set?: InputMaybe<Chat_Messages_Set_Input>;
  where: Chat_Messages_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Chat_Messages_By_PkArgs = {
  _set?: InputMaybe<Chat_Messages_Set_Input>;
  pk_columns: Chat_Messages_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Chat_Messages_ManyArgs = {
  updates: Array<Chat_Messages_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_CommentsArgs = {
  _set?: InputMaybe<Comments_Set_Input>;
  where: Comments_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Comments_By_PkArgs = {
  _set?: InputMaybe<Comments_Set_Input>;
  pk_columns: Comments_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Comments_ManyArgs = {
  updates: Array<Comments_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_EntitiesArgs = {
  _inc?: InputMaybe<Entities_Inc_Input>;
  _set?: InputMaybe<Entities_Set_Input>;
  where: Entities_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Entities_By_PkArgs = {
  _inc?: InputMaybe<Entities_Inc_Input>;
  _set?: InputMaybe<Entities_Set_Input>;
  pk_columns: Entities_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Entities_ManyArgs = {
  updates: Array<Entities_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_File_UploadsArgs = {
  _inc?: InputMaybe<File_Uploads_Inc_Input>;
  _set?: InputMaybe<File_Uploads_Set_Input>;
  where: File_Uploads_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_File_Uploads_By_PkArgs = {
  _inc?: InputMaybe<File_Uploads_Inc_Input>;
  _set?: InputMaybe<File_Uploads_Set_Input>;
  pk_columns: File_Uploads_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_File_Uploads_ManyArgs = {
  updates: Array<File_Uploads_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Files_ManyArgs = {
  updates: Array<Files_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Group_Join_Request_StatusArgs = {
  _set?: InputMaybe<Group_Join_Request_Status_Set_Input>;
  where: Group_Join_Request_Status_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Group_Join_Request_Status_By_PkArgs = {
  _set?: InputMaybe<Group_Join_Request_Status_Set_Input>;
  pk_columns: Group_Join_Request_Status_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Group_Join_Request_Status_ManyArgs = {
  updates: Array<Group_Join_Request_Status_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Group_Join_RequestsArgs = {
  _set?: InputMaybe<Group_Join_Requests_Set_Input>;
  where: Group_Join_Requests_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Group_Join_Requests_By_PkArgs = {
  _set?: InputMaybe<Group_Join_Requests_Set_Input>;
  pk_columns: Group_Join_Requests_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Group_Join_Requests_ManyArgs = {
  updates: Array<Group_Join_Requests_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Group_Join_TokensArgs = {
  _set?: InputMaybe<Group_Join_Tokens_Set_Input>;
  where: Group_Join_Tokens_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Group_Join_Tokens_By_PkArgs = {
  _set?: InputMaybe<Group_Join_Tokens_Set_Input>;
  pk_columns: Group_Join_Tokens_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Group_Join_Tokens_ManyArgs = {
  updates: Array<Group_Join_Tokens_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Group_MembersArgs = {
  _set?: InputMaybe<Group_Members_Set_Input>;
  where: Group_Members_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Group_Members_By_PkArgs = {
  _set?: InputMaybe<Group_Members_Set_Input>;
  pk_columns: Group_Members_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Group_Members_ManyArgs = {
  updates: Array<Group_Members_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Group_Post_CommentArgs = {
  _set?: InputMaybe<Group_Post_Comment_Set_Input>;
  where: Group_Post_Comment_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Group_Post_Comment_By_PkArgs = {
  _set?: InputMaybe<Group_Post_Comment_Set_Input>;
  pk_columns: Group_Post_Comment_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Group_Post_Comment_ManyArgs = {
  updates: Array<Group_Post_Comment_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Group_Post_TypeArgs = {
  _set?: InputMaybe<Group_Post_Type_Set_Input>;
  where: Group_Post_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Group_Post_Type_By_PkArgs = {
  _set?: InputMaybe<Group_Post_Type_Set_Input>;
  pk_columns: Group_Post_Type_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Group_Post_Type_ManyArgs = {
  updates: Array<Group_Post_Type_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Group_PostsArgs = {
  _set?: InputMaybe<Group_Posts_Set_Input>;
  where: Group_Posts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Group_Posts_By_PkArgs = {
  _set?: InputMaybe<Group_Posts_Set_Input>;
  pk_columns: Group_Posts_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Group_Posts_ManyArgs = {
  updates: Array<Group_Posts_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Group_RoleArgs = {
  _set?: InputMaybe<Group_Role_Set_Input>;
  where: Group_Role_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Group_Role_By_PkArgs = {
  _set?: InputMaybe<Group_Role_Set_Input>;
  pk_columns: Group_Role_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Group_Role_ManyArgs = {
  updates: Array<Group_Role_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Group_ThingArgs = {
  _set?: InputMaybe<Group_Thing_Set_Input>;
  where: Group_Thing_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Group_Thing_By_PkArgs = {
  _set?: InputMaybe<Group_Thing_Set_Input>;
  pk_columns: Group_Thing_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Group_Thing_ManyArgs = {
  updates: Array<Group_Thing_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_GroupsArgs = {
  _set?: InputMaybe<Groups_Set_Input>;
  where: Groups_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Groups_By_PkArgs = {
  _set?: InputMaybe<Groups_Set_Input>;
  pk_columns: Groups_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Groups_ManyArgs = {
  updates: Array<Groups_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_NotificationsArgs = {
  _set?: InputMaybe<Notifications_Set_Input>;
  where: Notifications_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Notifications_By_PkArgs = {
  _set?: InputMaybe<Notifications_Set_Input>;
  pk_columns: Notifications_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Notifications_ManyArgs = {
  updates: Array<Notifications_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Thing_ImagesArgs = {
  _inc?: InputMaybe<Thing_Images_Inc_Input>;
  _set?: InputMaybe<Thing_Images_Set_Input>;
  where: Thing_Images_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Thing_Images_By_PkArgs = {
  _inc?: InputMaybe<Thing_Images_Inc_Input>;
  _set?: InputMaybe<Thing_Images_Set_Input>;
  pk_columns: Thing_Images_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Thing_Images_ManyArgs = {
  updates: Array<Thing_Images_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Thing_TypeArgs = {
  _set?: InputMaybe<Thing_Type_Set_Input>;
  where: Thing_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Thing_Type_By_PkArgs = {
  _set?: InputMaybe<Thing_Type_Set_Input>;
  pk_columns: Thing_Type_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Thing_Type_ManyArgs = {
  updates: Array<Thing_Type_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_ThingsArgs = {
  _set?: InputMaybe<Things_Set_Input>;
  where: Things_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Things_By_PkArgs = {
  _set?: InputMaybe<Things_Set_Input>;
  pk_columns: Things_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Things_ManyArgs = {
  updates: Array<Things_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_User_ProfileArgs = {
  _set?: InputMaybe<User_Profile_Set_Input>;
  where: User_Profile_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Profile_By_PkArgs = {
  _set?: InputMaybe<User_Profile_Set_Input>;
  pk_columns: User_Profile_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_Profile_ManyArgs = {
  updates: Array<User_Profile_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_User_SettingsArgs = {
  _set?: InputMaybe<User_Settings_Set_Input>;
  where: User_Settings_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Settings_By_PkArgs = {
  _set?: InputMaybe<User_Settings_Set_Input>;
  pk_columns: User_Settings_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_Settings_ManyArgs = {
  updates: Array<User_Settings_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Users_ManyArgs = {
  updates: Array<Users_Updates>;
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
  columns?: InputMaybe<Array<Notifications_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "notifications" */
export type Notifications_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Notifications_Max_Order_By>;
  min?: InputMaybe<Notifications_Min_Order_By>;
};

/** input type for inserting array relation for remote table "notifications" */
export type Notifications_Arr_Rel_Insert_Input = {
  data: Array<Notifications_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Notifications_On_Conflict>;
};

/** Boolean expression to filter rows from the table "notifications". All fields are combined with a logical 'AND'. */
export type Notifications_Bool_Exp = {
  _and?: InputMaybe<Array<Notifications_Bool_Exp>>;
  _not?: InputMaybe<Notifications_Bool_Exp>;
  _or?: InputMaybe<Array<Notifications_Bool_Exp>>;
  activity?: InputMaybe<Activities_Bool_Exp>;
  activity_id?: InputMaybe<Uuid_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  read_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "notifications" */
export enum Notifications_Constraint {
  /** unique or primary key constraint on columns "id" */
  NotificationsPkey = 'notifications_pkey'
}

/** input type for inserting data into table "notifications" */
export type Notifications_Insert_Input = {
  activity?: InputMaybe<Activities_Obj_Rel_Insert_Input>;
  activity_id?: InputMaybe<Scalars['uuid']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  read_at?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']>;
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
  activity_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  read_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
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
  activity_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  read_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "notifications" */
export type Notifications_Mutation_Response = {
  __typename?: 'notifications_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Notifications>;
};

/** on_conflict condition type for table "notifications" */
export type Notifications_On_Conflict = {
  constraint: Notifications_Constraint;
  update_columns?: Array<Notifications_Update_Column>;
  where?: InputMaybe<Notifications_Bool_Exp>;
};

/** Ordering options when selecting data from "notifications". */
export type Notifications_Order_By = {
  activity?: InputMaybe<Activities_Order_By>;
  activity_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  read_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
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
  activity_id?: InputMaybe<Scalars['uuid']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  read_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['uuid']>;
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

export type Notifications_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Notifications_Set_Input>;
  where: Notifications_Bool_Exp;
};

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
  /** fetch data from the table: "auth.providers" using primary key columns */
  authProvider?: Maybe<AuthProviders>;
  /** fetch data from the table: "auth.provider_requests" using primary key columns */
  authProviderRequest?: Maybe<AuthProviderRequests>;
  /** fetch data from the table: "auth.provider_requests" */
  authProviderRequests: Array<AuthProviderRequests>;
  /** fetch aggregated fields from the table: "auth.provider_requests" */
  authProviderRequestsAggregate: AuthProviderRequests_Aggregate;
  /** fetch data from the table: "auth.providers" */
  authProviders: Array<AuthProviders>;
  /** fetch aggregated fields from the table: "auth.providers" */
  authProvidersAggregate: AuthProviders_Aggregate;
  /** fetch data from the table: "auth.refresh_tokens" using primary key columns */
  authRefreshToken?: Maybe<AuthRefreshTokens>;
  /** fetch data from the table: "auth.refresh_tokens" */
  authRefreshTokens: Array<AuthRefreshTokens>;
  /** fetch aggregated fields from the table: "auth.refresh_tokens" */
  authRefreshTokensAggregate: AuthRefreshTokens_Aggregate;
  /** fetch data from the table: "auth.roles" using primary key columns */
  authRole?: Maybe<AuthRoles>;
  /** fetch data from the table: "auth.roles" */
  authRoles: Array<AuthRoles>;
  /** fetch aggregated fields from the table: "auth.roles" */
  authRolesAggregate: AuthRoles_Aggregate;
  /** fetch data from the table: "auth.user_authenticators" using primary key columns */
  authUserAuthenticator?: Maybe<AuthUserAuthenticators>;
  /** fetch data from the table: "auth.user_authenticators" */
  authUserAuthenticators: Array<AuthUserAuthenticators>;
  /** fetch aggregated fields from the table: "auth.user_authenticators" */
  authUserAuthenticatorsAggregate: AuthUserAuthenticators_Aggregate;
  /** fetch data from the table: "auth.user_providers" using primary key columns */
  authUserProvider?: Maybe<AuthUserProviders>;
  /** fetch data from the table: "auth.user_providers" */
  authUserProviders: Array<AuthUserProviders>;
  /** fetch aggregated fields from the table: "auth.user_providers" */
  authUserProvidersAggregate: AuthUserProviders_Aggregate;
  /** fetch data from the table: "auth.user_roles" using primary key columns */
  authUserRole?: Maybe<AuthUserRoles>;
  /** fetch data from the table: "auth.user_roles" */
  authUserRoles: Array<AuthUserRoles>;
  /** fetch aggregated fields from the table: "auth.user_roles" */
  authUserRolesAggregate: AuthUserRoles_Aggregate;
  /** fetch data from the table: "storage.buckets" using primary key columns */
  bucket?: Maybe<Buckets>;
  /** fetch data from the table: "storage.buckets" */
  buckets: Array<Buckets>;
  /** fetch aggregated fields from the table: "storage.buckets" */
  bucketsAggregate: Buckets_Aggregate;
  /** fetch data from the table: "chat_group_member_info" */
  chat_group_member_info: Array<Chat_Group_Member_Info>;
  /** fetch aggregated fields from the table: "chat_group_member_info" */
  chat_group_member_info_aggregate: Chat_Group_Member_Info_Aggregate;
  /** An array relationship */
  chat_group_members: Array<Chat_Group_Members>;
  /** An aggregate relationship */
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
  /** fetch data from the table: "storage.files" using primary key columns */
  file?: Maybe<Files>;
  /** An array relationship */
  file_uploads: Array<File_Uploads>;
  /** An aggregate relationship */
  file_uploads_aggregate: File_Uploads_Aggregate;
  /** fetch data from the table: "file_uploads" using primary key columns */
  file_uploads_by_pk?: Maybe<File_Uploads>;
  /** An array relationship */
  files: Array<Files>;
  /** fetch aggregated fields from the table: "storage.files" */
  filesAggregate: Files_Aggregate;
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
  /** fetch data from the table: "auth.users" using primary key columns */
  user?: Maybe<Users>;
  /** fetch data from the table: "user_profile" */
  user_profile: Array<User_Profile>;
  /** fetch aggregated fields from the table: "user_profile" */
  user_profile_aggregate: User_Profile_Aggregate;
  /** fetch data from the table: "user_profile" using primary key columns */
  user_profile_by_pk?: Maybe<User_Profile>;
  /** fetch data from the table: "user_settings" */
  user_settings: Array<User_Settings>;
  /** fetch aggregated fields from the table: "user_settings" */
  user_settings_aggregate: User_Settings_Aggregate;
  /** fetch data from the table: "user_settings" using primary key columns */
  user_settings_by_pk?: Maybe<User_Settings>;
  /** fetch data from the table: "auth.users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "auth.users" */
  usersAggregate: Users_Aggregate;
};


export type Query_RootActivitiesArgs = {
  distinct_on?: InputMaybe<Array<Activities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Activities_Order_By>>;
  where?: InputMaybe<Activities_Bool_Exp>;
};


export type Query_RootActivities_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Activities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Activities_Order_By>>;
  where?: InputMaybe<Activities_Bool_Exp>;
};


export type Query_RootActivities_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootActivity_VerbArgs = {
  distinct_on?: InputMaybe<Array<Activity_Verb_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Activity_Verb_Order_By>>;
  where?: InputMaybe<Activity_Verb_Bool_Exp>;
};


export type Query_RootActivity_Verb_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Activity_Verb_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Activity_Verb_Order_By>>;
  where?: InputMaybe<Activity_Verb_Bool_Exp>;
};


export type Query_RootActivity_Verb_By_PkArgs = {
  value: Scalars['String'];
};


export type Query_RootAuthProviderArgs = {
  id: Scalars['String'];
};


export type Query_RootAuthProviderRequestArgs = {
  id: Scalars['uuid'];
};


export type Query_RootAuthProviderRequestsArgs = {
  distinct_on?: InputMaybe<Array<AuthProviderRequests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthProviderRequests_Order_By>>;
  where?: InputMaybe<AuthProviderRequests_Bool_Exp>;
};


export type Query_RootAuthProviderRequestsAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthProviderRequests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthProviderRequests_Order_By>>;
  where?: InputMaybe<AuthProviderRequests_Bool_Exp>;
};


export type Query_RootAuthProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthProviders_Order_By>>;
  where?: InputMaybe<AuthProviders_Bool_Exp>;
};


export type Query_RootAuthProvidersAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthProviders_Order_By>>;
  where?: InputMaybe<AuthProviders_Bool_Exp>;
};


export type Query_RootAuthRefreshTokenArgs = {
  refreshToken: Scalars['uuid'];
};


export type Query_RootAuthRefreshTokensArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


export type Query_RootAuthRefreshTokensAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


export type Query_RootAuthRoleArgs = {
  role: Scalars['String'];
};


export type Query_RootAuthRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRoles_Order_By>>;
  where?: InputMaybe<AuthRoles_Bool_Exp>;
};


export type Query_RootAuthRolesAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRoles_Order_By>>;
  where?: InputMaybe<AuthRoles_Bool_Exp>;
};


export type Query_RootAuthUserAuthenticatorArgs = {
  id: Scalars['uuid'];
};


export type Query_RootAuthUserAuthenticatorsArgs = {
  distinct_on?: InputMaybe<Array<AuthUserAuthenticators_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserAuthenticators_Order_By>>;
  where?: InputMaybe<AuthUserAuthenticators_Bool_Exp>;
};


export type Query_RootAuthUserAuthenticatorsAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserAuthenticators_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserAuthenticators_Order_By>>;
  where?: InputMaybe<AuthUserAuthenticators_Bool_Exp>;
};


export type Query_RootAuthUserProviderArgs = {
  id: Scalars['uuid'];
};


export type Query_RootAuthUserProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


export type Query_RootAuthUserProvidersAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


export type Query_RootAuthUserRoleArgs = {
  id: Scalars['uuid'];
};


export type Query_RootAuthUserRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


export type Query_RootAuthUserRolesAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


export type Query_RootBucketArgs = {
  id: Scalars['String'];
};


export type Query_RootBucketsArgs = {
  distinct_on?: InputMaybe<Array<Buckets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Buckets_Order_By>>;
  where?: InputMaybe<Buckets_Bool_Exp>;
};


export type Query_RootBucketsAggregateArgs = {
  distinct_on?: InputMaybe<Array<Buckets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Buckets_Order_By>>;
  where?: InputMaybe<Buckets_Bool_Exp>;
};


export type Query_RootChat_Group_Member_InfoArgs = {
  distinct_on?: InputMaybe<Array<Chat_Group_Member_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Chat_Group_Member_Info_Order_By>>;
  where?: InputMaybe<Chat_Group_Member_Info_Bool_Exp>;
};


export type Query_RootChat_Group_Member_Info_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Chat_Group_Member_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Chat_Group_Member_Info_Order_By>>;
  where?: InputMaybe<Chat_Group_Member_Info_Bool_Exp>;
};


export type Query_RootChat_Group_MembersArgs = {
  distinct_on?: InputMaybe<Array<Chat_Group_Members_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Chat_Group_Members_Order_By>>;
  where?: InputMaybe<Chat_Group_Members_Bool_Exp>;
};


export type Query_RootChat_Group_Members_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Chat_Group_Members_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Chat_Group_Members_Order_By>>;
  where?: InputMaybe<Chat_Group_Members_Bool_Exp>;
};


export type Query_RootChat_Group_Members_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootChat_GroupsArgs = {
  distinct_on?: InputMaybe<Array<Chat_Groups_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Chat_Groups_Order_By>>;
  where?: InputMaybe<Chat_Groups_Bool_Exp>;
};


export type Query_RootChat_Groups_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Chat_Groups_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Chat_Groups_Order_By>>;
  where?: InputMaybe<Chat_Groups_Bool_Exp>;
};


export type Query_RootChat_Groups_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootChat_MessagesArgs = {
  distinct_on?: InputMaybe<Array<Chat_Messages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Chat_Messages_Order_By>>;
  where?: InputMaybe<Chat_Messages_Bool_Exp>;
};


export type Query_RootChat_Messages_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Chat_Messages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Chat_Messages_Order_By>>;
  where?: InputMaybe<Chat_Messages_Bool_Exp>;
};


export type Query_RootChat_Messages_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootCommentsArgs = {
  distinct_on?: InputMaybe<Array<Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Comments_Order_By>>;
  where?: InputMaybe<Comments_Bool_Exp>;
};


export type Query_RootComments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Comments_Order_By>>;
  where?: InputMaybe<Comments_Bool_Exp>;
};


export type Query_RootComments_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootEntitiesArgs = {
  distinct_on?: InputMaybe<Array<Entities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Entities_Order_By>>;
  where?: InputMaybe<Entities_Bool_Exp>;
};


export type Query_RootEntities_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Entities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Entities_Order_By>>;
  where?: InputMaybe<Entities_Bool_Exp>;
};


export type Query_RootEntities_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootFileArgs = {
  id: Scalars['uuid'];
};


export type Query_RootFile_UploadsArgs = {
  distinct_on?: InputMaybe<Array<File_Uploads_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<File_Uploads_Order_By>>;
  where?: InputMaybe<File_Uploads_Bool_Exp>;
};


export type Query_RootFile_Uploads_AggregateArgs = {
  distinct_on?: InputMaybe<Array<File_Uploads_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<File_Uploads_Order_By>>;
  where?: InputMaybe<File_Uploads_Bool_Exp>;
};


export type Query_RootFile_Uploads_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootFilesArgs = {
  distinct_on?: InputMaybe<Array<Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Order_By>>;
  where?: InputMaybe<Files_Bool_Exp>;
};


export type Query_RootFilesAggregateArgs = {
  distinct_on?: InputMaybe<Array<Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Order_By>>;
  where?: InputMaybe<Files_Bool_Exp>;
};


export type Query_RootGroup_Join_Request_StatusArgs = {
  distinct_on?: InputMaybe<Array<Group_Join_Request_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Group_Join_Request_Status_Order_By>>;
  where?: InputMaybe<Group_Join_Request_Status_Bool_Exp>;
};


export type Query_RootGroup_Join_Request_Status_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Group_Join_Request_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Group_Join_Request_Status_Order_By>>;
  where?: InputMaybe<Group_Join_Request_Status_Bool_Exp>;
};


export type Query_RootGroup_Join_Request_Status_By_PkArgs = {
  value: Scalars['String'];
};


export type Query_RootGroup_Join_RequestsArgs = {
  distinct_on?: InputMaybe<Array<Group_Join_Requests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Group_Join_Requests_Order_By>>;
  where?: InputMaybe<Group_Join_Requests_Bool_Exp>;
};


export type Query_RootGroup_Join_Requests_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Group_Join_Requests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Group_Join_Requests_Order_By>>;
  where?: InputMaybe<Group_Join_Requests_Bool_Exp>;
};


export type Query_RootGroup_Join_Requests_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootGroup_Join_TokensArgs = {
  distinct_on?: InputMaybe<Array<Group_Join_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Group_Join_Tokens_Order_By>>;
  where?: InputMaybe<Group_Join_Tokens_Bool_Exp>;
};


export type Query_RootGroup_Join_Tokens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Group_Join_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Group_Join_Tokens_Order_By>>;
  where?: InputMaybe<Group_Join_Tokens_Bool_Exp>;
};


export type Query_RootGroup_Join_Tokens_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootGroup_MembersArgs = {
  distinct_on?: InputMaybe<Array<Group_Members_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Group_Members_Order_By>>;
  where?: InputMaybe<Group_Members_Bool_Exp>;
};


export type Query_RootGroup_Members_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Group_Members_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Group_Members_Order_By>>;
  where?: InputMaybe<Group_Members_Bool_Exp>;
};


export type Query_RootGroup_Members_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootGroup_Post_CommentArgs = {
  distinct_on?: InputMaybe<Array<Group_Post_Comment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Group_Post_Comment_Order_By>>;
  where?: InputMaybe<Group_Post_Comment_Bool_Exp>;
};


export type Query_RootGroup_Post_Comment_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Group_Post_Comment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Group_Post_Comment_Order_By>>;
  where?: InputMaybe<Group_Post_Comment_Bool_Exp>;
};


export type Query_RootGroup_Post_Comment_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootGroup_Post_TypeArgs = {
  distinct_on?: InputMaybe<Array<Group_Post_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Group_Post_Type_Order_By>>;
  where?: InputMaybe<Group_Post_Type_Bool_Exp>;
};


export type Query_RootGroup_Post_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Group_Post_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Group_Post_Type_Order_By>>;
  where?: InputMaybe<Group_Post_Type_Bool_Exp>;
};


export type Query_RootGroup_Post_Type_By_PkArgs = {
  value: Scalars['String'];
};


export type Query_RootGroup_PostsArgs = {
  distinct_on?: InputMaybe<Array<Group_Posts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Group_Posts_Order_By>>;
  where?: InputMaybe<Group_Posts_Bool_Exp>;
};


export type Query_RootGroup_Posts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Group_Posts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Group_Posts_Order_By>>;
  where?: InputMaybe<Group_Posts_Bool_Exp>;
};


export type Query_RootGroup_Posts_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootGroup_RoleArgs = {
  distinct_on?: InputMaybe<Array<Group_Role_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Group_Role_Order_By>>;
  where?: InputMaybe<Group_Role_Bool_Exp>;
};


export type Query_RootGroup_Role_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Group_Role_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Group_Role_Order_By>>;
  where?: InputMaybe<Group_Role_Bool_Exp>;
};


export type Query_RootGroup_Role_By_PkArgs = {
  value: Scalars['String'];
};


export type Query_RootGroup_ThingArgs = {
  distinct_on?: InputMaybe<Array<Group_Thing_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Group_Thing_Order_By>>;
  where?: InputMaybe<Group_Thing_Bool_Exp>;
};


export type Query_RootGroup_Thing_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Group_Thing_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Group_Thing_Order_By>>;
  where?: InputMaybe<Group_Thing_Bool_Exp>;
};


export type Query_RootGroup_Thing_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootGroupsArgs = {
  distinct_on?: InputMaybe<Array<Groups_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Groups_Order_By>>;
  where?: InputMaybe<Groups_Bool_Exp>;
};


export type Query_RootGroups_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Groups_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Groups_Order_By>>;
  where?: InputMaybe<Groups_Bool_Exp>;
};


export type Query_RootGroups_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootNotificationsArgs = {
  distinct_on?: InputMaybe<Array<Notifications_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Notifications_Order_By>>;
  where?: InputMaybe<Notifications_Bool_Exp>;
};


export type Query_RootNotifications_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Notifications_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Notifications_Order_By>>;
  where?: InputMaybe<Notifications_Bool_Exp>;
};


export type Query_RootNotifications_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootThing_ImagesArgs = {
  distinct_on?: InputMaybe<Array<Thing_Images_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Thing_Images_Order_By>>;
  where?: InputMaybe<Thing_Images_Bool_Exp>;
};


export type Query_RootThing_Images_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Thing_Images_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Thing_Images_Order_By>>;
  where?: InputMaybe<Thing_Images_Bool_Exp>;
};


export type Query_RootThing_Images_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootThing_TypeArgs = {
  distinct_on?: InputMaybe<Array<Thing_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Thing_Type_Order_By>>;
  where?: InputMaybe<Thing_Type_Bool_Exp>;
};


export type Query_RootThing_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Thing_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Thing_Type_Order_By>>;
  where?: InputMaybe<Thing_Type_Bool_Exp>;
};


export type Query_RootThing_Type_By_PkArgs = {
  value: Scalars['String'];
};


export type Query_RootThingsArgs = {
  distinct_on?: InputMaybe<Array<Things_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Things_Order_By>>;
  where?: InputMaybe<Things_Bool_Exp>;
};


export type Query_RootThings_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Things_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Things_Order_By>>;
  where?: InputMaybe<Things_Bool_Exp>;
};


export type Query_RootThings_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootUserArgs = {
  id: Scalars['uuid'];
};


export type Query_RootUser_ProfileArgs = {
  distinct_on?: InputMaybe<Array<User_Profile_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Profile_Order_By>>;
  where?: InputMaybe<User_Profile_Bool_Exp>;
};


export type Query_RootUser_Profile_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Profile_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Profile_Order_By>>;
  where?: InputMaybe<User_Profile_Bool_Exp>;
};


export type Query_RootUser_Profile_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootUser_SettingsArgs = {
  distinct_on?: InputMaybe<Array<User_Settings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Settings_Order_By>>;
  where?: InputMaybe<User_Settings_Bool_Exp>;
};


export type Query_RootUser_Settings_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Settings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Settings_Order_By>>;
  where?: InputMaybe<User_Settings_Bool_Exp>;
};


export type Query_RootUser_Settings_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsersAggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Boolean expression to compare columns of type "smallint". All fields are combined with logical 'AND'. */
export type Smallint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['smallint']>;
  _gt?: InputMaybe<Scalars['smallint']>;
  _gte?: InputMaybe<Scalars['smallint']>;
  _in?: InputMaybe<Array<Scalars['smallint']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['smallint']>;
  _lte?: InputMaybe<Scalars['smallint']>;
  _neq?: InputMaybe<Scalars['smallint']>;
  _nin?: InputMaybe<Array<Scalars['smallint']>>;
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
  /** fetch data from the table: "auth.providers" using primary key columns */
  authProvider?: Maybe<AuthProviders>;
  /** fetch data from the table: "auth.provider_requests" using primary key columns */
  authProviderRequest?: Maybe<AuthProviderRequests>;
  /** fetch data from the table: "auth.provider_requests" */
  authProviderRequests: Array<AuthProviderRequests>;
  /** fetch aggregated fields from the table: "auth.provider_requests" */
  authProviderRequestsAggregate: AuthProviderRequests_Aggregate;
  /** fetch data from the table: "auth.providers" */
  authProviders: Array<AuthProviders>;
  /** fetch aggregated fields from the table: "auth.providers" */
  authProvidersAggregate: AuthProviders_Aggregate;
  /** fetch data from the table: "auth.refresh_tokens" using primary key columns */
  authRefreshToken?: Maybe<AuthRefreshTokens>;
  /** fetch data from the table: "auth.refresh_tokens" */
  authRefreshTokens: Array<AuthRefreshTokens>;
  /** fetch aggregated fields from the table: "auth.refresh_tokens" */
  authRefreshTokensAggregate: AuthRefreshTokens_Aggregate;
  /** fetch data from the table: "auth.roles" using primary key columns */
  authRole?: Maybe<AuthRoles>;
  /** fetch data from the table: "auth.roles" */
  authRoles: Array<AuthRoles>;
  /** fetch aggregated fields from the table: "auth.roles" */
  authRolesAggregate: AuthRoles_Aggregate;
  /** fetch data from the table: "auth.user_authenticators" using primary key columns */
  authUserAuthenticator?: Maybe<AuthUserAuthenticators>;
  /** fetch data from the table: "auth.user_authenticators" */
  authUserAuthenticators: Array<AuthUserAuthenticators>;
  /** fetch aggregated fields from the table: "auth.user_authenticators" */
  authUserAuthenticatorsAggregate: AuthUserAuthenticators_Aggregate;
  /** fetch data from the table: "auth.user_providers" using primary key columns */
  authUserProvider?: Maybe<AuthUserProviders>;
  /** fetch data from the table: "auth.user_providers" */
  authUserProviders: Array<AuthUserProviders>;
  /** fetch aggregated fields from the table: "auth.user_providers" */
  authUserProvidersAggregate: AuthUserProviders_Aggregate;
  /** fetch data from the table: "auth.user_roles" using primary key columns */
  authUserRole?: Maybe<AuthUserRoles>;
  /** fetch data from the table: "auth.user_roles" */
  authUserRoles: Array<AuthUserRoles>;
  /** fetch aggregated fields from the table: "auth.user_roles" */
  authUserRolesAggregate: AuthUserRoles_Aggregate;
  /** fetch data from the table: "storage.buckets" using primary key columns */
  bucket?: Maybe<Buckets>;
  /** fetch data from the table: "storage.buckets" */
  buckets: Array<Buckets>;
  /** fetch aggregated fields from the table: "storage.buckets" */
  bucketsAggregate: Buckets_Aggregate;
  /** fetch data from the table: "chat_group_member_info" */
  chat_group_member_info: Array<Chat_Group_Member_Info>;
  /** fetch aggregated fields from the table: "chat_group_member_info" */
  chat_group_member_info_aggregate: Chat_Group_Member_Info_Aggregate;
  /** An array relationship */
  chat_group_members: Array<Chat_Group_Members>;
  /** An aggregate relationship */
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
  /** fetch data from the table: "storage.files" using primary key columns */
  file?: Maybe<Files>;
  /** An array relationship */
  file_uploads: Array<File_Uploads>;
  /** An aggregate relationship */
  file_uploads_aggregate: File_Uploads_Aggregate;
  /** fetch data from the table: "file_uploads" using primary key columns */
  file_uploads_by_pk?: Maybe<File_Uploads>;
  /** An array relationship */
  files: Array<Files>;
  /** fetch aggregated fields from the table: "storage.files" */
  filesAggregate: Files_Aggregate;
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
  /** fetch data from the table: "auth.users" using primary key columns */
  user?: Maybe<Users>;
  /** fetch data from the table: "user_profile" */
  user_profile: Array<User_Profile>;
  /** fetch aggregated fields from the table: "user_profile" */
  user_profile_aggregate: User_Profile_Aggregate;
  /** fetch data from the table: "user_profile" using primary key columns */
  user_profile_by_pk?: Maybe<User_Profile>;
  /** fetch data from the table: "user_settings" */
  user_settings: Array<User_Settings>;
  /** fetch aggregated fields from the table: "user_settings" */
  user_settings_aggregate: User_Settings_Aggregate;
  /** fetch data from the table: "user_settings" using primary key columns */
  user_settings_by_pk?: Maybe<User_Settings>;
  /** fetch data from the table: "auth.users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "auth.users" */
  usersAggregate: Users_Aggregate;
};


export type Subscription_RootActivitiesArgs = {
  distinct_on?: InputMaybe<Array<Activities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Activities_Order_By>>;
  where?: InputMaybe<Activities_Bool_Exp>;
};


export type Subscription_RootActivities_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Activities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Activities_Order_By>>;
  where?: InputMaybe<Activities_Bool_Exp>;
};


export type Subscription_RootActivities_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootActivity_VerbArgs = {
  distinct_on?: InputMaybe<Array<Activity_Verb_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Activity_Verb_Order_By>>;
  where?: InputMaybe<Activity_Verb_Bool_Exp>;
};


export type Subscription_RootActivity_Verb_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Activity_Verb_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Activity_Verb_Order_By>>;
  where?: InputMaybe<Activity_Verb_Bool_Exp>;
};


export type Subscription_RootActivity_Verb_By_PkArgs = {
  value: Scalars['String'];
};


export type Subscription_RootAuthProviderArgs = {
  id: Scalars['String'];
};


export type Subscription_RootAuthProviderRequestArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootAuthProviderRequestsArgs = {
  distinct_on?: InputMaybe<Array<AuthProviderRequests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthProviderRequests_Order_By>>;
  where?: InputMaybe<AuthProviderRequests_Bool_Exp>;
};


export type Subscription_RootAuthProviderRequestsAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthProviderRequests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthProviderRequests_Order_By>>;
  where?: InputMaybe<AuthProviderRequests_Bool_Exp>;
};


export type Subscription_RootAuthProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthProviders_Order_By>>;
  where?: InputMaybe<AuthProviders_Bool_Exp>;
};


export type Subscription_RootAuthProvidersAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthProviders_Order_By>>;
  where?: InputMaybe<AuthProviders_Bool_Exp>;
};


export type Subscription_RootAuthRefreshTokenArgs = {
  refreshToken: Scalars['uuid'];
};


export type Subscription_RootAuthRefreshTokensArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


export type Subscription_RootAuthRefreshTokensAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


export type Subscription_RootAuthRoleArgs = {
  role: Scalars['String'];
};


export type Subscription_RootAuthRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRoles_Order_By>>;
  where?: InputMaybe<AuthRoles_Bool_Exp>;
};


export type Subscription_RootAuthRolesAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRoles_Order_By>>;
  where?: InputMaybe<AuthRoles_Bool_Exp>;
};


export type Subscription_RootAuthUserAuthenticatorArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootAuthUserAuthenticatorsArgs = {
  distinct_on?: InputMaybe<Array<AuthUserAuthenticators_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserAuthenticators_Order_By>>;
  where?: InputMaybe<AuthUserAuthenticators_Bool_Exp>;
};


export type Subscription_RootAuthUserAuthenticatorsAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserAuthenticators_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserAuthenticators_Order_By>>;
  where?: InputMaybe<AuthUserAuthenticators_Bool_Exp>;
};


export type Subscription_RootAuthUserProviderArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootAuthUserProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


export type Subscription_RootAuthUserProvidersAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


export type Subscription_RootAuthUserRoleArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootAuthUserRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


export type Subscription_RootAuthUserRolesAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


export type Subscription_RootBucketArgs = {
  id: Scalars['String'];
};


export type Subscription_RootBucketsArgs = {
  distinct_on?: InputMaybe<Array<Buckets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Buckets_Order_By>>;
  where?: InputMaybe<Buckets_Bool_Exp>;
};


export type Subscription_RootBucketsAggregateArgs = {
  distinct_on?: InputMaybe<Array<Buckets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Buckets_Order_By>>;
  where?: InputMaybe<Buckets_Bool_Exp>;
};


export type Subscription_RootChat_Group_Member_InfoArgs = {
  distinct_on?: InputMaybe<Array<Chat_Group_Member_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Chat_Group_Member_Info_Order_By>>;
  where?: InputMaybe<Chat_Group_Member_Info_Bool_Exp>;
};


export type Subscription_RootChat_Group_Member_Info_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Chat_Group_Member_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Chat_Group_Member_Info_Order_By>>;
  where?: InputMaybe<Chat_Group_Member_Info_Bool_Exp>;
};


export type Subscription_RootChat_Group_MembersArgs = {
  distinct_on?: InputMaybe<Array<Chat_Group_Members_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Chat_Group_Members_Order_By>>;
  where?: InputMaybe<Chat_Group_Members_Bool_Exp>;
};


export type Subscription_RootChat_Group_Members_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Chat_Group_Members_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Chat_Group_Members_Order_By>>;
  where?: InputMaybe<Chat_Group_Members_Bool_Exp>;
};


export type Subscription_RootChat_Group_Members_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootChat_GroupsArgs = {
  distinct_on?: InputMaybe<Array<Chat_Groups_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Chat_Groups_Order_By>>;
  where?: InputMaybe<Chat_Groups_Bool_Exp>;
};


export type Subscription_RootChat_Groups_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Chat_Groups_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Chat_Groups_Order_By>>;
  where?: InputMaybe<Chat_Groups_Bool_Exp>;
};


export type Subscription_RootChat_Groups_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootChat_MessagesArgs = {
  distinct_on?: InputMaybe<Array<Chat_Messages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Chat_Messages_Order_By>>;
  where?: InputMaybe<Chat_Messages_Bool_Exp>;
};


export type Subscription_RootChat_Messages_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Chat_Messages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Chat_Messages_Order_By>>;
  where?: InputMaybe<Chat_Messages_Bool_Exp>;
};


export type Subscription_RootChat_Messages_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootCommentsArgs = {
  distinct_on?: InputMaybe<Array<Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Comments_Order_By>>;
  where?: InputMaybe<Comments_Bool_Exp>;
};


export type Subscription_RootComments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Comments_Order_By>>;
  where?: InputMaybe<Comments_Bool_Exp>;
};


export type Subscription_RootComments_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootEntitiesArgs = {
  distinct_on?: InputMaybe<Array<Entities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Entities_Order_By>>;
  where?: InputMaybe<Entities_Bool_Exp>;
};


export type Subscription_RootEntities_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Entities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Entities_Order_By>>;
  where?: InputMaybe<Entities_Bool_Exp>;
};


export type Subscription_RootEntities_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootFileArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootFile_UploadsArgs = {
  distinct_on?: InputMaybe<Array<File_Uploads_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<File_Uploads_Order_By>>;
  where?: InputMaybe<File_Uploads_Bool_Exp>;
};


export type Subscription_RootFile_Uploads_AggregateArgs = {
  distinct_on?: InputMaybe<Array<File_Uploads_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<File_Uploads_Order_By>>;
  where?: InputMaybe<File_Uploads_Bool_Exp>;
};


export type Subscription_RootFile_Uploads_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootFilesArgs = {
  distinct_on?: InputMaybe<Array<Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Order_By>>;
  where?: InputMaybe<Files_Bool_Exp>;
};


export type Subscription_RootFilesAggregateArgs = {
  distinct_on?: InputMaybe<Array<Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Order_By>>;
  where?: InputMaybe<Files_Bool_Exp>;
};


export type Subscription_RootGroup_Join_Request_StatusArgs = {
  distinct_on?: InputMaybe<Array<Group_Join_Request_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Group_Join_Request_Status_Order_By>>;
  where?: InputMaybe<Group_Join_Request_Status_Bool_Exp>;
};


export type Subscription_RootGroup_Join_Request_Status_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Group_Join_Request_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Group_Join_Request_Status_Order_By>>;
  where?: InputMaybe<Group_Join_Request_Status_Bool_Exp>;
};


export type Subscription_RootGroup_Join_Request_Status_By_PkArgs = {
  value: Scalars['String'];
};


export type Subscription_RootGroup_Join_RequestsArgs = {
  distinct_on?: InputMaybe<Array<Group_Join_Requests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Group_Join_Requests_Order_By>>;
  where?: InputMaybe<Group_Join_Requests_Bool_Exp>;
};


export type Subscription_RootGroup_Join_Requests_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Group_Join_Requests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Group_Join_Requests_Order_By>>;
  where?: InputMaybe<Group_Join_Requests_Bool_Exp>;
};


export type Subscription_RootGroup_Join_Requests_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootGroup_Join_TokensArgs = {
  distinct_on?: InputMaybe<Array<Group_Join_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Group_Join_Tokens_Order_By>>;
  where?: InputMaybe<Group_Join_Tokens_Bool_Exp>;
};


export type Subscription_RootGroup_Join_Tokens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Group_Join_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Group_Join_Tokens_Order_By>>;
  where?: InputMaybe<Group_Join_Tokens_Bool_Exp>;
};


export type Subscription_RootGroup_Join_Tokens_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootGroup_MembersArgs = {
  distinct_on?: InputMaybe<Array<Group_Members_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Group_Members_Order_By>>;
  where?: InputMaybe<Group_Members_Bool_Exp>;
};


export type Subscription_RootGroup_Members_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Group_Members_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Group_Members_Order_By>>;
  where?: InputMaybe<Group_Members_Bool_Exp>;
};


export type Subscription_RootGroup_Members_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootGroup_Post_CommentArgs = {
  distinct_on?: InputMaybe<Array<Group_Post_Comment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Group_Post_Comment_Order_By>>;
  where?: InputMaybe<Group_Post_Comment_Bool_Exp>;
};


export type Subscription_RootGroup_Post_Comment_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Group_Post_Comment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Group_Post_Comment_Order_By>>;
  where?: InputMaybe<Group_Post_Comment_Bool_Exp>;
};


export type Subscription_RootGroup_Post_Comment_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootGroup_Post_TypeArgs = {
  distinct_on?: InputMaybe<Array<Group_Post_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Group_Post_Type_Order_By>>;
  where?: InputMaybe<Group_Post_Type_Bool_Exp>;
};


export type Subscription_RootGroup_Post_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Group_Post_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Group_Post_Type_Order_By>>;
  where?: InputMaybe<Group_Post_Type_Bool_Exp>;
};


export type Subscription_RootGroup_Post_Type_By_PkArgs = {
  value: Scalars['String'];
};


export type Subscription_RootGroup_PostsArgs = {
  distinct_on?: InputMaybe<Array<Group_Posts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Group_Posts_Order_By>>;
  where?: InputMaybe<Group_Posts_Bool_Exp>;
};


export type Subscription_RootGroup_Posts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Group_Posts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Group_Posts_Order_By>>;
  where?: InputMaybe<Group_Posts_Bool_Exp>;
};


export type Subscription_RootGroup_Posts_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootGroup_RoleArgs = {
  distinct_on?: InputMaybe<Array<Group_Role_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Group_Role_Order_By>>;
  where?: InputMaybe<Group_Role_Bool_Exp>;
};


export type Subscription_RootGroup_Role_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Group_Role_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Group_Role_Order_By>>;
  where?: InputMaybe<Group_Role_Bool_Exp>;
};


export type Subscription_RootGroup_Role_By_PkArgs = {
  value: Scalars['String'];
};


export type Subscription_RootGroup_ThingArgs = {
  distinct_on?: InputMaybe<Array<Group_Thing_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Group_Thing_Order_By>>;
  where?: InputMaybe<Group_Thing_Bool_Exp>;
};


export type Subscription_RootGroup_Thing_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Group_Thing_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Group_Thing_Order_By>>;
  where?: InputMaybe<Group_Thing_Bool_Exp>;
};


export type Subscription_RootGroup_Thing_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootGroupsArgs = {
  distinct_on?: InputMaybe<Array<Groups_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Groups_Order_By>>;
  where?: InputMaybe<Groups_Bool_Exp>;
};


export type Subscription_RootGroups_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Groups_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Groups_Order_By>>;
  where?: InputMaybe<Groups_Bool_Exp>;
};


export type Subscription_RootGroups_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootNotificationsArgs = {
  distinct_on?: InputMaybe<Array<Notifications_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Notifications_Order_By>>;
  where?: InputMaybe<Notifications_Bool_Exp>;
};


export type Subscription_RootNotifications_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Notifications_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Notifications_Order_By>>;
  where?: InputMaybe<Notifications_Bool_Exp>;
};


export type Subscription_RootNotifications_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootThing_ImagesArgs = {
  distinct_on?: InputMaybe<Array<Thing_Images_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Thing_Images_Order_By>>;
  where?: InputMaybe<Thing_Images_Bool_Exp>;
};


export type Subscription_RootThing_Images_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Thing_Images_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Thing_Images_Order_By>>;
  where?: InputMaybe<Thing_Images_Bool_Exp>;
};


export type Subscription_RootThing_Images_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootThing_TypeArgs = {
  distinct_on?: InputMaybe<Array<Thing_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Thing_Type_Order_By>>;
  where?: InputMaybe<Thing_Type_Bool_Exp>;
};


export type Subscription_RootThing_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Thing_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Thing_Type_Order_By>>;
  where?: InputMaybe<Thing_Type_Bool_Exp>;
};


export type Subscription_RootThing_Type_By_PkArgs = {
  value: Scalars['String'];
};


export type Subscription_RootThingsArgs = {
  distinct_on?: InputMaybe<Array<Things_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Things_Order_By>>;
  where?: InputMaybe<Things_Bool_Exp>;
};


export type Subscription_RootThings_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Things_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Things_Order_By>>;
  where?: InputMaybe<Things_Bool_Exp>;
};


export type Subscription_RootThings_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootUserArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootUser_ProfileArgs = {
  distinct_on?: InputMaybe<Array<User_Profile_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Profile_Order_By>>;
  where?: InputMaybe<User_Profile_Bool_Exp>;
};


export type Subscription_RootUser_Profile_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Profile_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Profile_Order_By>>;
  where?: InputMaybe<User_Profile_Bool_Exp>;
};


export type Subscription_RootUser_Profile_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootUser_SettingsArgs = {
  distinct_on?: InputMaybe<Array<User_Settings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Settings_Order_By>>;
  where?: InputMaybe<User_Settings_Bool_Exp>;
};


export type Subscription_RootUser_Settings_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Settings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Settings_Order_By>>;
  where?: InputMaybe<User_Settings_Bool_Exp>;
};


export type Subscription_RootUser_Settings_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsersAggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** columns and relationships of "thing_images" */
export type Thing_Images = {
  __typename?: 'thing_images';
  created_at: Scalars['timestamptz'];
  description: Scalars['String'];
  /** An object relationship */
  file: Files;
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
  columns?: InputMaybe<Array<Thing_Images_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "thing_images" */
export type Thing_Images_Aggregate_Order_By = {
  avg?: InputMaybe<Thing_Images_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Thing_Images_Max_Order_By>;
  min?: InputMaybe<Thing_Images_Min_Order_By>;
  stddev?: InputMaybe<Thing_Images_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Thing_Images_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Thing_Images_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Thing_Images_Sum_Order_By>;
  var_pop?: InputMaybe<Thing_Images_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Thing_Images_Var_Samp_Order_By>;
  variance?: InputMaybe<Thing_Images_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "thing_images" */
export type Thing_Images_Arr_Rel_Insert_Input = {
  data: Array<Thing_Images_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Thing_Images_On_Conflict>;
};

/** aggregate avg on columns */
export type Thing_Images_Avg_Fields = {
  __typename?: 'thing_images_avg_fields';
  order?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "thing_images" */
export type Thing_Images_Avg_Order_By = {
  order?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "thing_images". All fields are combined with a logical 'AND'. */
export type Thing_Images_Bool_Exp = {
  _and?: InputMaybe<Array<Thing_Images_Bool_Exp>>;
  _not?: InputMaybe<Thing_Images_Bool_Exp>;
  _or?: InputMaybe<Array<Thing_Images_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  file?: InputMaybe<Files_Bool_Exp>;
  file_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  order?: InputMaybe<Int_Comparison_Exp>;
  thing?: InputMaybe<Things_Bool_Exp>;
  thing_id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "thing_images" */
export enum Thing_Images_Constraint {
  /** unique or primary key constraint on columns "file_id" */
  ThingImagesFileIdKey = 'thing_images_file_id_key',
  /** unique or primary key constraint on columns "id" */
  ThingImagesPkey = 'thing_images_pkey'
}

/** input type for incrementing numeric columns in table "thing_images" */
export type Thing_Images_Inc_Input = {
  order?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "thing_images" */
export type Thing_Images_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  file?: InputMaybe<Files_Obj_Rel_Insert_Input>;
  file_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  order?: InputMaybe<Scalars['Int']>;
  thing?: InputMaybe<Things_Obj_Rel_Insert_Input>;
  thing_id?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
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
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  file_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  thing_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
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
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  file_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  thing_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
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
  /** upsert condition */
  on_conflict?: InputMaybe<Thing_Images_On_Conflict>;
};

/** on_conflict condition type for table "thing_images" */
export type Thing_Images_On_Conflict = {
  constraint: Thing_Images_Constraint;
  update_columns?: Array<Thing_Images_Update_Column>;
  where?: InputMaybe<Thing_Images_Bool_Exp>;
};

/** Ordering options when selecting data from "thing_images". */
export type Thing_Images_Order_By = {
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  file?: InputMaybe<Files_Order_By>;
  file_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  thing?: InputMaybe<Things_Order_By>;
  thing_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
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
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  file_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  order?: InputMaybe<Scalars['Int']>;
  thing_id?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Thing_Images_Stddev_Fields = {
  __typename?: 'thing_images_stddev_fields';
  order?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "thing_images" */
export type Thing_Images_Stddev_Order_By = {
  order?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Thing_Images_Stddev_Pop_Fields = {
  __typename?: 'thing_images_stddev_pop_fields';
  order?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "thing_images" */
export type Thing_Images_Stddev_Pop_Order_By = {
  order?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Thing_Images_Stddev_Samp_Fields = {
  __typename?: 'thing_images_stddev_samp_fields';
  order?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "thing_images" */
export type Thing_Images_Stddev_Samp_Order_By = {
  order?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Thing_Images_Sum_Fields = {
  __typename?: 'thing_images_sum_fields';
  order?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "thing_images" */
export type Thing_Images_Sum_Order_By = {
  order?: InputMaybe<Order_By>;
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

export type Thing_Images_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Thing_Images_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Thing_Images_Set_Input>;
  where: Thing_Images_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Thing_Images_Var_Pop_Fields = {
  __typename?: 'thing_images_var_pop_fields';
  order?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "thing_images" */
export type Thing_Images_Var_Pop_Order_By = {
  order?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Thing_Images_Var_Samp_Fields = {
  __typename?: 'thing_images_var_samp_fields';
  order?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "thing_images" */
export type Thing_Images_Var_Samp_Order_By = {
  order?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Thing_Images_Variance_Fields = {
  __typename?: 'thing_images_variance_fields';
  order?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "thing_images" */
export type Thing_Images_Variance_Order_By = {
  order?: InputMaybe<Order_By>;
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
  columns?: InputMaybe<Array<Thing_Type_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "thing_type". All fields are combined with a logical 'AND'. */
export type Thing_Type_Bool_Exp = {
  _and?: InputMaybe<Array<Thing_Type_Bool_Exp>>;
  _not?: InputMaybe<Thing_Type_Bool_Exp>;
  _or?: InputMaybe<Array<Thing_Type_Bool_Exp>>;
  comment?: InputMaybe<String_Comparison_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "thing_type" */
export enum Thing_Type_Constraint {
  /** unique or primary key constraint on columns "value" */
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
  _eq?: InputMaybe<Thing_Type_Enum>;
  _in?: InputMaybe<Array<Thing_Type_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Thing_Type_Enum>;
  _nin?: InputMaybe<Array<Thing_Type_Enum>>;
};

/** input type for inserting data into table "thing_type" */
export type Thing_Type_Insert_Input = {
  comment?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
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

/** on_conflict condition type for table "thing_type" */
export type Thing_Type_On_Conflict = {
  constraint: Thing_Type_Constraint;
  update_columns?: Array<Thing_Type_Update_Column>;
  where?: InputMaybe<Thing_Type_Bool_Exp>;
};

/** Ordering options when selecting data from "thing_type". */
export type Thing_Type_Order_By = {
  comment?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
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
  comment?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** update columns of table "thing_type" */
export enum Thing_Type_Update_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

export type Thing_Type_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Thing_Type_Set_Input>;
  where: Thing_Type_Bool_Exp;
};

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
  distinct_on?: InputMaybe<Array<Group_Thing_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Group_Thing_Order_By>>;
  where?: InputMaybe<Group_Thing_Bool_Exp>;
};


/** columns and relationships of "things" */
export type ThingsGroup_Relations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Group_Thing_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Group_Thing_Order_By>>;
  where?: InputMaybe<Group_Thing_Bool_Exp>;
};


/** columns and relationships of "things" */
export type ThingsImagesArgs = {
  distinct_on?: InputMaybe<Array<Thing_Images_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Thing_Images_Order_By>>;
  where?: InputMaybe<Thing_Images_Bool_Exp>;
};


/** columns and relationships of "things" */
export type ThingsImages_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Thing_Images_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Thing_Images_Order_By>>;
  where?: InputMaybe<Thing_Images_Bool_Exp>;
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
  columns?: InputMaybe<Array<Things_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "things" */
export type Things_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Things_Max_Order_By>;
  min?: InputMaybe<Things_Min_Order_By>;
};

/** input type for inserting array relation for remote table "things" */
export type Things_Arr_Rel_Insert_Input = {
  data: Array<Things_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Things_On_Conflict>;
};

/** Boolean expression to filter rows from the table "things". All fields are combined with a logical 'AND'. */
export type Things_Bool_Exp = {
  _and?: InputMaybe<Array<Things_Bool_Exp>>;
  _not?: InputMaybe<Things_Bool_Exp>;
  _or?: InputMaybe<Array<Things_Bool_Exp>>;
  category?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  enabled?: InputMaybe<Boolean_Comparison_Exp>;
  expiry?: InputMaybe<Date_Comparison_Exp>;
  group_relations?: InputMaybe<Group_Thing_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  images?: InputMaybe<Thing_Images_Bool_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  owner?: InputMaybe<Users_Bool_Exp>;
  owner_id?: InputMaybe<Uuid_Comparison_Exp>;
  short_id?: InputMaybe<String_Comparison_Exp>;
  type?: InputMaybe<Thing_Type_Enum_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "things" */
export enum Things_Constraint {
  /** unique or primary key constraint on columns "id" */
  ThingsPkey = 'things_pkey',
  /** unique or primary key constraint on columns "short_id" */
  ThingsShortIdKey = 'things_short_id_key'
}

/** input type for inserting data into table "things" */
export type Things_Insert_Input = {
  category?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  expiry?: InputMaybe<Scalars['date']>;
  group_relations?: InputMaybe<Group_Thing_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']>;
  images?: InputMaybe<Thing_Images_Arr_Rel_Insert_Input>;
  name?: InputMaybe<Scalars['String']>;
  owner?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  owner_id?: InputMaybe<Scalars['uuid']>;
  short_id?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Thing_Type_Enum>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
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
  category?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  expiry?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  owner_id?: InputMaybe<Order_By>;
  short_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
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
  category?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  expiry?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  owner_id?: InputMaybe<Order_By>;
  short_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
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
  /** upsert condition */
  on_conflict?: InputMaybe<Things_On_Conflict>;
};

/** on_conflict condition type for table "things" */
export type Things_On_Conflict = {
  constraint: Things_Constraint;
  update_columns?: Array<Things_Update_Column>;
  where?: InputMaybe<Things_Bool_Exp>;
};

/** Ordering options when selecting data from "things". */
export type Things_Order_By = {
  category?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  enabled?: InputMaybe<Order_By>;
  expiry?: InputMaybe<Order_By>;
  group_relations_aggregate?: InputMaybe<Group_Thing_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  images_aggregate?: InputMaybe<Thing_Images_Aggregate_Order_By>;
  name?: InputMaybe<Order_By>;
  owner?: InputMaybe<Users_Order_By>;
  owner_id?: InputMaybe<Order_By>;
  short_id?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
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
  category?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  expiry?: InputMaybe<Scalars['date']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  owner_id?: InputMaybe<Scalars['uuid']>;
  short_id?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Thing_Type_Enum>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
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

export type Things_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Things_Set_Input>;
  where: Things_Bool_Exp;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** Public profile data for a user */
export type User_Profile = {
  __typename?: 'user_profile';
  /** An object relationship */
  avatar: Files;
  avatar_id: Scalars['uuid'];
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid'];
};

/** aggregated selection of "user_profile" */
export type User_Profile_Aggregate = {
  __typename?: 'user_profile_aggregate';
  aggregate?: Maybe<User_Profile_Aggregate_Fields>;
  nodes: Array<User_Profile>;
};

/** aggregate fields of "user_profile" */
export type User_Profile_Aggregate_Fields = {
  __typename?: 'user_profile_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<User_Profile_Max_Fields>;
  min?: Maybe<User_Profile_Min_Fields>;
};


/** aggregate fields of "user_profile" */
export type User_Profile_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Profile_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "user_profile". All fields are combined with a logical 'AND'. */
export type User_Profile_Bool_Exp = {
  _and?: InputMaybe<Array<User_Profile_Bool_Exp>>;
  _not?: InputMaybe<User_Profile_Bool_Exp>;
  _or?: InputMaybe<Array<User_Profile_Bool_Exp>>;
  avatar?: InputMaybe<Files_Bool_Exp>;
  avatar_id?: InputMaybe<Uuid_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_profile" */
export enum User_Profile_Constraint {
  /** unique or primary key constraint on columns "id" */
  UserProfilePkey = 'user_profile_pkey',
  /** unique or primary key constraint on columns "user_id" */
  UserProfileUserIdKey = 'user_profile_user_id_key'
}

/** input type for inserting data into table "user_profile" */
export type User_Profile_Insert_Input = {
  avatar?: InputMaybe<Files_Obj_Rel_Insert_Input>;
  avatar_id?: InputMaybe<Scalars['uuid']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type User_Profile_Max_Fields = {
  __typename?: 'user_profile_max_fields';
  avatar_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type User_Profile_Min_Fields = {
  __typename?: 'user_profile_min_fields';
  avatar_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "user_profile" */
export type User_Profile_Mutation_Response = {
  __typename?: 'user_profile_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Profile>;
};

/** on_conflict condition type for table "user_profile" */
export type User_Profile_On_Conflict = {
  constraint: User_Profile_Constraint;
  update_columns?: Array<User_Profile_Update_Column>;
  where?: InputMaybe<User_Profile_Bool_Exp>;
};

/** Ordering options when selecting data from "user_profile". */
export type User_Profile_Order_By = {
  avatar?: InputMaybe<Files_Order_By>;
  avatar_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: user_profile */
export type User_Profile_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "user_profile" */
export enum User_Profile_Select_Column {
  /** column name */
  AvatarId = 'avatar_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "user_profile" */
export type User_Profile_Set_Input = {
  avatar_id?: InputMaybe<Scalars['uuid']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "user_profile" */
export enum User_Profile_Update_Column {
  /** column name */
  AvatarId = 'avatar_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

export type User_Profile_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_Profile_Set_Input>;
  where: User_Profile_Bool_Exp;
};

/** Private settings for a user */
export type User_Settings = {
  __typename?: 'user_settings';
  /** An object relationship */
  avatar?: Maybe<Files>;
  avatar_file_id?: Maybe<Scalars['uuid']>;
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid'];
};

/** aggregated selection of "user_settings" */
export type User_Settings_Aggregate = {
  __typename?: 'user_settings_aggregate';
  aggregate?: Maybe<User_Settings_Aggregate_Fields>;
  nodes: Array<User_Settings>;
};

/** aggregate fields of "user_settings" */
export type User_Settings_Aggregate_Fields = {
  __typename?: 'user_settings_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<User_Settings_Max_Fields>;
  min?: Maybe<User_Settings_Min_Fields>;
};


/** aggregate fields of "user_settings" */
export type User_Settings_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Settings_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "user_settings". All fields are combined with a logical 'AND'. */
export type User_Settings_Bool_Exp = {
  _and?: InputMaybe<Array<User_Settings_Bool_Exp>>;
  _not?: InputMaybe<User_Settings_Bool_Exp>;
  _or?: InputMaybe<Array<User_Settings_Bool_Exp>>;
  avatar?: InputMaybe<Files_Bool_Exp>;
  avatar_file_id?: InputMaybe<Uuid_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_settings" */
export enum User_Settings_Constraint {
  /** unique or primary key constraint on columns "id" */
  UserSettingsPkey = 'user_settings_pkey',
  /** unique or primary key constraint on columns "user_id" */
  UserSettingsUserIdFk = 'user_settings_user_id_fk',
  /** unique or primary key constraint on columns "user_id" */
  UserSettingsUserIdKey = 'user_settings_user_id_key'
}

/** input type for inserting data into table "user_settings" */
export type User_Settings_Insert_Input = {
  avatar?: InputMaybe<Files_Obj_Rel_Insert_Input>;
  avatar_file_id?: InputMaybe<Scalars['uuid']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type User_Settings_Max_Fields = {
  __typename?: 'user_settings_max_fields';
  avatar_file_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type User_Settings_Min_Fields = {
  __typename?: 'user_settings_min_fields';
  avatar_file_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "user_settings" */
export type User_Settings_Mutation_Response = {
  __typename?: 'user_settings_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Settings>;
};

/** on_conflict condition type for table "user_settings" */
export type User_Settings_On_Conflict = {
  constraint: User_Settings_Constraint;
  update_columns?: Array<User_Settings_Update_Column>;
  where?: InputMaybe<User_Settings_Bool_Exp>;
};

/** Ordering options when selecting data from "user_settings". */
export type User_Settings_Order_By = {
  avatar?: InputMaybe<Files_Order_By>;
  avatar_file_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: user_settings */
export type User_Settings_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "user_settings" */
export enum User_Settings_Select_Column {
  /** column name */
  AvatarFileId = 'avatar_file_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "user_settings" */
export type User_Settings_Set_Input = {
  avatar_file_id?: InputMaybe<Scalars['uuid']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "user_settings" */
export enum User_Settings_Update_Column {
  /** column name */
  AvatarFileId = 'avatar_file_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

export type User_Settings_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_Settings_Set_Input>;
  where: User_Settings_Bool_Exp;
};

/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type Users = {
  __typename?: 'users';
  activeMfaType?: Maybe<Scalars['String']>;
  /** An array relationship */
  activities: Array<Activities>;
  /** An aggregate relationship */
  activities_aggregate: Activities_Aggregate;
  /** An array relationship */
  authenticators: Array<AuthUserAuthenticators>;
  /** An aggregate relationship */
  authenticators_aggregate: AuthUserAuthenticators_Aggregate;
  avatarUrl: Scalars['String'];
  /** An array relationship */
  chat_group_members: Array<Chat_Group_Members>;
  /** An aggregate relationship */
  chat_group_members_aggregate: Chat_Group_Members_Aggregate;
  /** An array relationship */
  chat_messages: Array<Chat_Messages>;
  /** An aggregate relationship */
  chat_messages_aggregate: Chat_Messages_Aggregate;
  /** An array relationship */
  comments: Array<Comments>;
  /** An aggregate relationship */
  comments_aggregate: Comments_Aggregate;
  createdAt: Scalars['timestamptz'];
  currentChallenge?: Maybe<Scalars['String']>;
  defaultRole: Scalars['String'];
  /** An object relationship */
  defaultRoleByRole: AuthRoles;
  disabled: Scalars['Boolean'];
  displayName: Scalars['String'];
  email?: Maybe<Scalars['citext']>;
  emailVerified: Scalars['Boolean'];
  /** An array relationship */
  file_uploads: Array<File_Uploads>;
  /** An aggregate relationship */
  file_uploads_aggregate: File_Uploads_Aggregate;
  /** An array relationship */
  group_join_requests: Array<Group_Join_Requests>;
  /** An aggregate relationship */
  group_join_requests_aggregate: Group_Join_Requests_Aggregate;
  /** An array relationship */
  group_posts: Array<Group_Posts>;
  /** An aggregate relationship */
  group_posts_aggregate: Group_Posts_Aggregate;
  id: Scalars['uuid'];
  isAnonymous: Scalars['Boolean'];
  lastSeen?: Maybe<Scalars['timestamptz']>;
  locale: Scalars['String'];
  /** An array relationship */
  memberships: Array<Group_Members>;
  /** An aggregate relationship */
  memberships_aggregate: Group_Members_Aggregate;
  metadata?: Maybe<Scalars['jsonb']>;
  newEmail?: Maybe<Scalars['citext']>;
  /** An array relationship */
  notifications: Array<Notifications>;
  /** An aggregate relationship */
  notifications_aggregate: Notifications_Aggregate;
  otpHash?: Maybe<Scalars['String']>;
  otpHashExpiresAt: Scalars['timestamptz'];
  otpMethodLastUsed?: Maybe<Scalars['String']>;
  passwordHash?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  phoneNumberVerified: Scalars['Boolean'];
  /** An array relationship */
  refreshTokens: Array<AuthRefreshTokens>;
  /** An aggregate relationship */
  refreshTokens_aggregate: AuthRefreshTokens_Aggregate;
  /** An array relationship */
  roles: Array<AuthUserRoles>;
  /** An aggregate relationship */
  roles_aggregate: AuthUserRoles_Aggregate;
  /** An array relationship */
  things: Array<Things>;
  /** An aggregate relationship */
  things_aggregate: Things_Aggregate;
  ticket?: Maybe<Scalars['String']>;
  ticketExpiresAt: Scalars['timestamptz'];
  totpSecret?: Maybe<Scalars['String']>;
  updatedAt: Scalars['timestamptz'];
  /** An array relationship */
  userProviders: Array<AuthUserProviders>;
  /** An aggregate relationship */
  userProviders_aggregate: AuthUserProviders_Aggregate;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersActivitiesArgs = {
  distinct_on?: InputMaybe<Array<Activities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Activities_Order_By>>;
  where?: InputMaybe<Activities_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersActivities_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Activities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Activities_Order_By>>;
  where?: InputMaybe<Activities_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersAuthenticatorsArgs = {
  distinct_on?: InputMaybe<Array<AuthUserAuthenticators_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserAuthenticators_Order_By>>;
  where?: InputMaybe<AuthUserAuthenticators_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersAuthenticators_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserAuthenticators_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserAuthenticators_Order_By>>;
  where?: InputMaybe<AuthUserAuthenticators_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersChat_Group_MembersArgs = {
  distinct_on?: InputMaybe<Array<Chat_Group_Members_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Chat_Group_Members_Order_By>>;
  where?: InputMaybe<Chat_Group_Members_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersChat_Group_Members_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Chat_Group_Members_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Chat_Group_Members_Order_By>>;
  where?: InputMaybe<Chat_Group_Members_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersChat_MessagesArgs = {
  distinct_on?: InputMaybe<Array<Chat_Messages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Chat_Messages_Order_By>>;
  where?: InputMaybe<Chat_Messages_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersChat_Messages_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Chat_Messages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Chat_Messages_Order_By>>;
  where?: InputMaybe<Chat_Messages_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersCommentsArgs = {
  distinct_on?: InputMaybe<Array<Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Comments_Order_By>>;
  where?: InputMaybe<Comments_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersComments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Comments_Order_By>>;
  where?: InputMaybe<Comments_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersFile_UploadsArgs = {
  distinct_on?: InputMaybe<Array<File_Uploads_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<File_Uploads_Order_By>>;
  where?: InputMaybe<File_Uploads_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersFile_Uploads_AggregateArgs = {
  distinct_on?: InputMaybe<Array<File_Uploads_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<File_Uploads_Order_By>>;
  where?: InputMaybe<File_Uploads_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersGroup_Join_RequestsArgs = {
  distinct_on?: InputMaybe<Array<Group_Join_Requests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Group_Join_Requests_Order_By>>;
  where?: InputMaybe<Group_Join_Requests_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersGroup_Join_Requests_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Group_Join_Requests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Group_Join_Requests_Order_By>>;
  where?: InputMaybe<Group_Join_Requests_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersGroup_PostsArgs = {
  distinct_on?: InputMaybe<Array<Group_Posts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Group_Posts_Order_By>>;
  where?: InputMaybe<Group_Posts_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersGroup_Posts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Group_Posts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Group_Posts_Order_By>>;
  where?: InputMaybe<Group_Posts_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersMembershipsArgs = {
  distinct_on?: InputMaybe<Array<Group_Members_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Group_Members_Order_By>>;
  where?: InputMaybe<Group_Members_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersMemberships_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Group_Members_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Group_Members_Order_By>>;
  where?: InputMaybe<Group_Members_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersMetadataArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersNotificationsArgs = {
  distinct_on?: InputMaybe<Array<Notifications_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Notifications_Order_By>>;
  where?: InputMaybe<Notifications_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersNotifications_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Notifications_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Notifications_Order_By>>;
  where?: InputMaybe<Notifications_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersRefreshTokensArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersRefreshTokens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersRoles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersThingsArgs = {
  distinct_on?: InputMaybe<Array<Things_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Things_Order_By>>;
  where?: InputMaybe<Things_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersThings_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Things_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Things_Order_By>>;
  where?: InputMaybe<Things_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersUserProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersUserProviders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};

/** aggregated selection of "auth.users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "auth.users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};


/** aggregate fields of "auth.users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auth.users" */
export type Users_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Users_Max_Order_By>;
  min?: InputMaybe<Users_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Users_Append_Input = {
  metadata?: InputMaybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "auth.users" */
export type Users_Arr_Rel_Insert_Input = {
  data: Array<Users_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auth.users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  activeMfaType?: InputMaybe<String_Comparison_Exp>;
  activities?: InputMaybe<Activities_Bool_Exp>;
  authenticators?: InputMaybe<AuthUserAuthenticators_Bool_Exp>;
  avatarUrl?: InputMaybe<String_Comparison_Exp>;
  chat_group_members?: InputMaybe<Chat_Group_Members_Bool_Exp>;
  chat_messages?: InputMaybe<Chat_Messages_Bool_Exp>;
  comments?: InputMaybe<Comments_Bool_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  currentChallenge?: InputMaybe<String_Comparison_Exp>;
  defaultRole?: InputMaybe<String_Comparison_Exp>;
  defaultRoleByRole?: InputMaybe<AuthRoles_Bool_Exp>;
  disabled?: InputMaybe<Boolean_Comparison_Exp>;
  displayName?: InputMaybe<String_Comparison_Exp>;
  email?: InputMaybe<Citext_Comparison_Exp>;
  emailVerified?: InputMaybe<Boolean_Comparison_Exp>;
  file_uploads?: InputMaybe<File_Uploads_Bool_Exp>;
  group_join_requests?: InputMaybe<Group_Join_Requests_Bool_Exp>;
  group_posts?: InputMaybe<Group_Posts_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  isAnonymous?: InputMaybe<Boolean_Comparison_Exp>;
  lastSeen?: InputMaybe<Timestamptz_Comparison_Exp>;
  locale?: InputMaybe<String_Comparison_Exp>;
  memberships?: InputMaybe<Group_Members_Bool_Exp>;
  metadata?: InputMaybe<Jsonb_Comparison_Exp>;
  newEmail?: InputMaybe<Citext_Comparison_Exp>;
  notifications?: InputMaybe<Notifications_Bool_Exp>;
  otpHash?: InputMaybe<String_Comparison_Exp>;
  otpHashExpiresAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  otpMethodLastUsed?: InputMaybe<String_Comparison_Exp>;
  passwordHash?: InputMaybe<String_Comparison_Exp>;
  phoneNumber?: InputMaybe<String_Comparison_Exp>;
  phoneNumberVerified?: InputMaybe<Boolean_Comparison_Exp>;
  refreshTokens?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
  roles?: InputMaybe<AuthUserRoles_Bool_Exp>;
  things?: InputMaybe<Things_Bool_Exp>;
  ticket?: InputMaybe<String_Comparison_Exp>;
  ticketExpiresAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  totpSecret?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  userProviders?: InputMaybe<AuthUserProviders_Bool_Exp>;
};

/** unique or primary key constraints on table "auth.users" */
export enum Users_Constraint {
  /** unique or primary key constraint on columns "email" */
  UsersEmailKey = 'users_email_key',
  /** unique or primary key constraint on columns "phone_number" */
  UsersPhoneNumberKey = 'users_phone_number_key',
  /** unique or primary key constraint on columns "id" */
  UsersPkey = 'users_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Users_Delete_At_Path_Input = {
  metadata?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Users_Delete_Elem_Input = {
  metadata?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Users_Delete_Key_Input = {
  metadata?: InputMaybe<Scalars['String']>;
};

/** input type for inserting data into table "auth.users" */
export type Users_Insert_Input = {
  activeMfaType?: InputMaybe<Scalars['String']>;
  activities?: InputMaybe<Activities_Arr_Rel_Insert_Input>;
  authenticators?: InputMaybe<AuthUserAuthenticators_Arr_Rel_Insert_Input>;
  avatarUrl?: InputMaybe<Scalars['String']>;
  chat_group_members?: InputMaybe<Chat_Group_Members_Arr_Rel_Insert_Input>;
  chat_messages?: InputMaybe<Chat_Messages_Arr_Rel_Insert_Input>;
  comments?: InputMaybe<Comments_Arr_Rel_Insert_Input>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  currentChallenge?: InputMaybe<Scalars['String']>;
  defaultRole?: InputMaybe<Scalars['String']>;
  defaultRoleByRole?: InputMaybe<AuthRoles_Obj_Rel_Insert_Input>;
  disabled?: InputMaybe<Scalars['Boolean']>;
  displayName?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['citext']>;
  emailVerified?: InputMaybe<Scalars['Boolean']>;
  file_uploads?: InputMaybe<File_Uploads_Arr_Rel_Insert_Input>;
  group_join_requests?: InputMaybe<Group_Join_Requests_Arr_Rel_Insert_Input>;
  group_posts?: InputMaybe<Group_Posts_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']>;
  isAnonymous?: InputMaybe<Scalars['Boolean']>;
  lastSeen?: InputMaybe<Scalars['timestamptz']>;
  locale?: InputMaybe<Scalars['String']>;
  memberships?: InputMaybe<Group_Members_Arr_Rel_Insert_Input>;
  metadata?: InputMaybe<Scalars['jsonb']>;
  newEmail?: InputMaybe<Scalars['citext']>;
  notifications?: InputMaybe<Notifications_Arr_Rel_Insert_Input>;
  otpHash?: InputMaybe<Scalars['String']>;
  otpHashExpiresAt?: InputMaybe<Scalars['timestamptz']>;
  otpMethodLastUsed?: InputMaybe<Scalars['String']>;
  passwordHash?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  phoneNumberVerified?: InputMaybe<Scalars['Boolean']>;
  refreshTokens?: InputMaybe<AuthRefreshTokens_Arr_Rel_Insert_Input>;
  roles?: InputMaybe<AuthUserRoles_Arr_Rel_Insert_Input>;
  things?: InputMaybe<Things_Arr_Rel_Insert_Input>;
  ticket?: InputMaybe<Scalars['String']>;
  ticketExpiresAt?: InputMaybe<Scalars['timestamptz']>;
  totpSecret?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userProviders?: InputMaybe<AuthUserProviders_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  activeMfaType?: Maybe<Scalars['String']>;
  avatarUrl?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  currentChallenge?: Maybe<Scalars['String']>;
  defaultRole?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['citext']>;
  id?: Maybe<Scalars['uuid']>;
  lastSeen?: Maybe<Scalars['timestamptz']>;
  locale?: Maybe<Scalars['String']>;
  newEmail?: Maybe<Scalars['citext']>;
  otpHash?: Maybe<Scalars['String']>;
  otpHashExpiresAt?: Maybe<Scalars['timestamptz']>;
  otpMethodLastUsed?: Maybe<Scalars['String']>;
  passwordHash?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  ticket?: Maybe<Scalars['String']>;
  ticketExpiresAt?: Maybe<Scalars['timestamptz']>;
  totpSecret?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "auth.users" */
export type Users_Max_Order_By = {
  activeMfaType?: InputMaybe<Order_By>;
  avatarUrl?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  currentChallenge?: InputMaybe<Order_By>;
  defaultRole?: InputMaybe<Order_By>;
  displayName?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lastSeen?: InputMaybe<Order_By>;
  locale?: InputMaybe<Order_By>;
  newEmail?: InputMaybe<Order_By>;
  otpHash?: InputMaybe<Order_By>;
  otpHashExpiresAt?: InputMaybe<Order_By>;
  otpMethodLastUsed?: InputMaybe<Order_By>;
  passwordHash?: InputMaybe<Order_By>;
  phoneNumber?: InputMaybe<Order_By>;
  ticket?: InputMaybe<Order_By>;
  ticketExpiresAt?: InputMaybe<Order_By>;
  totpSecret?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  activeMfaType?: Maybe<Scalars['String']>;
  avatarUrl?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  currentChallenge?: Maybe<Scalars['String']>;
  defaultRole?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['citext']>;
  id?: Maybe<Scalars['uuid']>;
  lastSeen?: Maybe<Scalars['timestamptz']>;
  locale?: Maybe<Scalars['String']>;
  newEmail?: Maybe<Scalars['citext']>;
  otpHash?: Maybe<Scalars['String']>;
  otpHashExpiresAt?: Maybe<Scalars['timestamptz']>;
  otpMethodLastUsed?: Maybe<Scalars['String']>;
  passwordHash?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  ticket?: Maybe<Scalars['String']>;
  ticketExpiresAt?: Maybe<Scalars['timestamptz']>;
  totpSecret?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "auth.users" */
export type Users_Min_Order_By = {
  activeMfaType?: InputMaybe<Order_By>;
  avatarUrl?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  currentChallenge?: InputMaybe<Order_By>;
  defaultRole?: InputMaybe<Order_By>;
  displayName?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lastSeen?: InputMaybe<Order_By>;
  locale?: InputMaybe<Order_By>;
  newEmail?: InputMaybe<Order_By>;
  otpHash?: InputMaybe<Order_By>;
  otpHashExpiresAt?: InputMaybe<Order_By>;
  otpMethodLastUsed?: InputMaybe<Order_By>;
  passwordHash?: InputMaybe<Order_By>;
  phoneNumber?: InputMaybe<Order_By>;
  ticket?: InputMaybe<Order_By>;
  ticketExpiresAt?: InputMaybe<Order_By>;
  totpSecret?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "auth.users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "auth.users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** on_conflict condition type for table "auth.users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.users". */
export type Users_Order_By = {
  activeMfaType?: InputMaybe<Order_By>;
  activities_aggregate?: InputMaybe<Activities_Aggregate_Order_By>;
  authenticators_aggregate?: InputMaybe<AuthUserAuthenticators_Aggregate_Order_By>;
  avatarUrl?: InputMaybe<Order_By>;
  chat_group_members_aggregate?: InputMaybe<Chat_Group_Members_Aggregate_Order_By>;
  chat_messages_aggregate?: InputMaybe<Chat_Messages_Aggregate_Order_By>;
  comments_aggregate?: InputMaybe<Comments_Aggregate_Order_By>;
  createdAt?: InputMaybe<Order_By>;
  currentChallenge?: InputMaybe<Order_By>;
  defaultRole?: InputMaybe<Order_By>;
  defaultRoleByRole?: InputMaybe<AuthRoles_Order_By>;
  disabled?: InputMaybe<Order_By>;
  displayName?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  emailVerified?: InputMaybe<Order_By>;
  file_uploads_aggregate?: InputMaybe<File_Uploads_Aggregate_Order_By>;
  group_join_requests_aggregate?: InputMaybe<Group_Join_Requests_Aggregate_Order_By>;
  group_posts_aggregate?: InputMaybe<Group_Posts_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  isAnonymous?: InputMaybe<Order_By>;
  lastSeen?: InputMaybe<Order_By>;
  locale?: InputMaybe<Order_By>;
  memberships_aggregate?: InputMaybe<Group_Members_Aggregate_Order_By>;
  metadata?: InputMaybe<Order_By>;
  newEmail?: InputMaybe<Order_By>;
  notifications_aggregate?: InputMaybe<Notifications_Aggregate_Order_By>;
  otpHash?: InputMaybe<Order_By>;
  otpHashExpiresAt?: InputMaybe<Order_By>;
  otpMethodLastUsed?: InputMaybe<Order_By>;
  passwordHash?: InputMaybe<Order_By>;
  phoneNumber?: InputMaybe<Order_By>;
  phoneNumberVerified?: InputMaybe<Order_By>;
  refreshTokens_aggregate?: InputMaybe<AuthRefreshTokens_Aggregate_Order_By>;
  roles_aggregate?: InputMaybe<AuthUserRoles_Aggregate_Order_By>;
  things_aggregate?: InputMaybe<Things_Aggregate_Order_By>;
  ticket?: InputMaybe<Order_By>;
  ticketExpiresAt?: InputMaybe<Order_By>;
  totpSecret?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userProviders_aggregate?: InputMaybe<AuthUserProviders_Aggregate_Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Users_Prepend_Input = {
  metadata?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "auth.users" */
export enum Users_Select_Column {
  /** column name */
  ActiveMfaType = 'activeMfaType',
  /** column name */
  AvatarUrl = 'avatarUrl',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CurrentChallenge = 'currentChallenge',
  /** column name */
  DefaultRole = 'defaultRole',
  /** column name */
  Disabled = 'disabled',
  /** column name */
  DisplayName = 'displayName',
  /** column name */
  Email = 'email',
  /** column name */
  EmailVerified = 'emailVerified',
  /** column name */
  Id = 'id',
  /** column name */
  IsAnonymous = 'isAnonymous',
  /** column name */
  LastSeen = 'lastSeen',
  /** column name */
  Locale = 'locale',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  NewEmail = 'newEmail',
  /** column name */
  OtpHash = 'otpHash',
  /** column name */
  OtpHashExpiresAt = 'otpHashExpiresAt',
  /** column name */
  OtpMethodLastUsed = 'otpMethodLastUsed',
  /** column name */
  PasswordHash = 'passwordHash',
  /** column name */
  PhoneNumber = 'phoneNumber',
  /** column name */
  PhoneNumberVerified = 'phoneNumberVerified',
  /** column name */
  Ticket = 'ticket',
  /** column name */
  TicketExpiresAt = 'ticketExpiresAt',
  /** column name */
  TotpSecret = 'totpSecret',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "auth.users" */
export type Users_Set_Input = {
  activeMfaType?: InputMaybe<Scalars['String']>;
  avatarUrl?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  currentChallenge?: InputMaybe<Scalars['String']>;
  defaultRole?: InputMaybe<Scalars['String']>;
  disabled?: InputMaybe<Scalars['Boolean']>;
  displayName?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['citext']>;
  emailVerified?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['uuid']>;
  isAnonymous?: InputMaybe<Scalars['Boolean']>;
  lastSeen?: InputMaybe<Scalars['timestamptz']>;
  locale?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Scalars['jsonb']>;
  newEmail?: InputMaybe<Scalars['citext']>;
  otpHash?: InputMaybe<Scalars['String']>;
  otpHashExpiresAt?: InputMaybe<Scalars['timestamptz']>;
  otpMethodLastUsed?: InputMaybe<Scalars['String']>;
  passwordHash?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  phoneNumberVerified?: InputMaybe<Scalars['Boolean']>;
  ticket?: InputMaybe<Scalars['String']>;
  ticketExpiresAt?: InputMaybe<Scalars['timestamptz']>;
  totpSecret?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "auth.users" */
export enum Users_Update_Column {
  /** column name */
  ActiveMfaType = 'activeMfaType',
  /** column name */
  AvatarUrl = 'avatarUrl',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CurrentChallenge = 'currentChallenge',
  /** column name */
  DefaultRole = 'defaultRole',
  /** column name */
  Disabled = 'disabled',
  /** column name */
  DisplayName = 'displayName',
  /** column name */
  Email = 'email',
  /** column name */
  EmailVerified = 'emailVerified',
  /** column name */
  Id = 'id',
  /** column name */
  IsAnonymous = 'isAnonymous',
  /** column name */
  LastSeen = 'lastSeen',
  /** column name */
  Locale = 'locale',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  NewEmail = 'newEmail',
  /** column name */
  OtpHash = 'otpHash',
  /** column name */
  OtpHashExpiresAt = 'otpHashExpiresAt',
  /** column name */
  OtpMethodLastUsed = 'otpMethodLastUsed',
  /** column name */
  PasswordHash = 'passwordHash',
  /** column name */
  PhoneNumber = 'phoneNumber',
  /** column name */
  PhoneNumberVerified = 'phoneNumberVerified',
  /** column name */
  Ticket = 'ticket',
  /** column name */
  TicketExpiresAt = 'ticketExpiresAt',
  /** column name */
  TotpSecret = 'totpSecret',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type Users_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Users_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Users_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Users_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Users_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Users_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

export type DetailedActivityFragment = { __typename?: 'activities', id: string, created_at: string, verb: Activity_Verb_Enum, actor?: { __typename?: 'users', id: string, displayName: string, avatarUrl: string } | null, entity: { __typename?: 'entities', id: string, group?: { __typename?: 'groups', id: string, short_id: string, name: string, created_at: string, description?: string | null, public: boolean, banner_file?: { __typename?: 'files', id: string, name?: string | null, mimeType?: string | null } | null, memberships_aggregate: { __typename?: 'group_members_aggregate', aggregate?: { __typename?: 'group_members_aggregate_fields', count: number } | null }, thing_relations_aggregate: { __typename?: 'group_thing_aggregate', aggregate?: { __typename?: 'group_thing_aggregate_fields', count: number } | null } } | null, user?: { __typename?: 'users', id: string, displayName: string, avatarUrl: string } | null, group_post?: { __typename?: 'group_posts', id: string, created_at: string, updated_at: string, type: Group_Post_Type_Enum, resolved: boolean, content: string, comments: Array<{ __typename?: 'group_post_comment', id: string, comment: { __typename?: 'comments', id: string, content: string, created_at: string, author: { __typename?: 'users', id: string, displayName: string, avatarUrl: string } } }>, group: { __typename?: 'groups', id: string, short_id: string, name: string, created_at: string, description?: string | null, public: boolean, banner_file?: { __typename?: 'files', id: string, name?: string | null, mimeType?: string | null } | null, memberships_aggregate: { __typename?: 'group_members_aggregate', aggregate?: { __typename?: 'group_members_aggregate_fields', count: number } | null }, thing_relations_aggregate: { __typename?: 'group_thing_aggregate', aggregate?: { __typename?: 'group_thing_aggregate_fields', count: number } | null } }, author: { __typename?: 'users', id: string, displayName: string, avatarUrl: string } } | null, group_thing?: { __typename?: 'group_thing', id: string, thing: { __typename?: 'things', id: string, name: string, description: string, category?: string | null, type: Thing_Type_Enum, expiry?: any | null, short_id: string, images: Array<{ __typename?: 'thing_images', id: string, description: string, order: number, file: { __typename?: 'files', id: string, name?: string | null, mimeType?: string | null } }>, owner: { __typename?: 'users', id: string, displayName: string, avatarUrl: string } } } | null, group_member?: { __typename?: 'group_members', id: string, role: Group_Role_Enum, created_at: string, group: { __typename?: 'groups', id: string, short_id: string, name: string }, user: { __typename?: 'users', id: string, displayName: string, avatarUrl: string } } | null } };

export type ActivityCardFragment = { __typename?: 'activities', id: string, created_at: string, verb: Activity_Verb_Enum, entity: { __typename?: 'entities', id: string, group?: { __typename?: 'groups', id: string, short_id: string, name: string } | null, thing?: { __typename?: 'things', id: string, short_id: string, name: string, images: Array<{ __typename?: 'thing_images', file: { __typename?: 'files', id: string, name?: string | null, mimeType?: string | null } }> } | null, user?: { __typename?: 'users', id: string, displayName: string, avatarUrl: string } | null, group_join_request?: { __typename?: 'group_join_requests', id: string, response?: string | null, group: { __typename?: 'groups', id: string, short_id: string, name: string } } | null, group_post_comment?: { __typename?: 'group_post_comment', id: string, post: { __typename?: 'group_posts', id: string, author_id: string, group: { __typename?: 'groups', id: string, short_id: string, name: string } }, comment: { __typename?: 'comments', id: string, content: string, created_at: string, author: { __typename?: 'users', id: string, displayName: string, avatarUrl: string } } } | null, group_post?: { __typename?: 'group_posts', id: string, group: { __typename?: 'groups', id: string, short_id: string, name: string } } | null, group_thing?: { __typename?: 'group_thing', id: string, thing: { __typename?: 'things', id: string, short_id: string, name: string, images: Array<{ __typename?: 'thing_images', file: { __typename?: 'files', id: string, name?: string | null, mimeType?: string | null } }> }, group: { __typename?: 'groups', id: string, short_id: string, name: string } } | null, group_member?: { __typename?: 'group_members', user: { __typename?: 'users', id: string, displayName: string, avatarUrl: string }, group: { __typename?: 'groups', id: string, short_id: string, name: string } } | null }, secondary_entity?: { __typename?: 'entities', id: string, group?: { __typename?: 'groups', id: string, short_id: string, name: string } | null, thing?: { __typename?: 'things', id: string, short_id: string, name: string, images: Array<{ __typename?: 'thing_images', file: { __typename?: 'files', id: string, name?: string | null, mimeType?: string | null } }> } | null, user?: { __typename?: 'users', id: string, displayName: string, avatarUrl: string } | null, group_join_request?: { __typename?: 'group_join_requests', id: string, response?: string | null, group: { __typename?: 'groups', id: string, short_id: string, name: string } } | null, group_post_comment?: { __typename?: 'group_post_comment', id: string, post: { __typename?: 'group_posts', id: string, author_id: string, group: { __typename?: 'groups', id: string, short_id: string, name: string } }, comment: { __typename?: 'comments', id: string, content: string, created_at: string, author: { __typename?: 'users', id: string, displayName: string, avatarUrl: string } } } | null, group_post?: { __typename?: 'group_posts', id: string, group: { __typename?: 'groups', id: string, short_id: string, name: string } } | null, group_thing?: { __typename?: 'group_thing', id: string, thing: { __typename?: 'things', id: string, short_id: string, name: string, images: Array<{ __typename?: 'thing_images', file: { __typename?: 'files', id: string, name?: string | null, mimeType?: string | null } }> }, group: { __typename?: 'groups', id: string, short_id: string, name: string } } | null, group_member?: { __typename?: 'group_members', user: { __typename?: 'users', id: string, displayName: string, avatarUrl: string }, group: { __typename?: 'groups', id: string, short_id: string, name: string } } | null } | null, actor?: { __typename?: 'users', id: string, displayName: string, avatarUrl: string } | null };

export type NotificationCardFragment = { __typename?: 'notifications', id: string, read_at?: string | null, created_at: string, activity: { __typename?: 'activities', id: string, created_at: string, verb: Activity_Verb_Enum, entity: { __typename?: 'entities', id: string, group?: { __typename?: 'groups', id: string, short_id: string, name: string } | null, thing?: { __typename?: 'things', id: string, short_id: string, name: string, images: Array<{ __typename?: 'thing_images', file: { __typename?: 'files', id: string, name?: string | null, mimeType?: string | null } }> } | null, user?: { __typename?: 'users', id: string, displayName: string, avatarUrl: string } | null, group_join_request?: { __typename?: 'group_join_requests', id: string, response?: string | null, group: { __typename?: 'groups', id: string, short_id: string, name: string } } | null, group_post_comment?: { __typename?: 'group_post_comment', id: string, post: { __typename?: 'group_posts', id: string, author_id: string, group: { __typename?: 'groups', id: string, short_id: string, name: string } }, comment: { __typename?: 'comments', id: string, content: string, created_at: string, author: { __typename?: 'users', id: string, displayName: string, avatarUrl: string } } } | null, group_post?: { __typename?: 'group_posts', id: string, group: { __typename?: 'groups', id: string, short_id: string, name: string } } | null, group_thing?: { __typename?: 'group_thing', id: string, thing: { __typename?: 'things', id: string, short_id: string, name: string, images: Array<{ __typename?: 'thing_images', file: { __typename?: 'files', id: string, name?: string | null, mimeType?: string | null } }> }, group: { __typename?: 'groups', id: string, short_id: string, name: string } } | null, group_member?: { __typename?: 'group_members', user: { __typename?: 'users', id: string, displayName: string, avatarUrl: string }, group: { __typename?: 'groups', id: string, short_id: string, name: string } } | null }, secondary_entity?: { __typename?: 'entities', id: string, group?: { __typename?: 'groups', id: string, short_id: string, name: string } | null, thing?: { __typename?: 'things', id: string, short_id: string, name: string, images: Array<{ __typename?: 'thing_images', file: { __typename?: 'files', id: string, name?: string | null, mimeType?: string | null } }> } | null, user?: { __typename?: 'users', id: string, displayName: string, avatarUrl: string } | null, group_join_request?: { __typename?: 'group_join_requests', id: string, response?: string | null, group: { __typename?: 'groups', id: string, short_id: string, name: string } } | null, group_post_comment?: { __typename?: 'group_post_comment', id: string, post: { __typename?: 'group_posts', id: string, author_id: string, group: { __typename?: 'groups', id: string, short_id: string, name: string } }, comment: { __typename?: 'comments', id: string, content: string, created_at: string, author: { __typename?: 'users', id: string, displayName: string, avatarUrl: string } } } | null, group_post?: { __typename?: 'group_posts', id: string, group: { __typename?: 'groups', id: string, short_id: string, name: string } } | null, group_thing?: { __typename?: 'group_thing', id: string, thing: { __typename?: 'things', id: string, short_id: string, name: string, images: Array<{ __typename?: 'thing_images', file: { __typename?: 'files', id: string, name?: string | null, mimeType?: string | null } }> }, group: { __typename?: 'groups', id: string, short_id: string, name: string } } | null, group_member?: { __typename?: 'group_members', user: { __typename?: 'users', id: string, displayName: string, avatarUrl: string }, group: { __typename?: 'groups', id: string, short_id: string, name: string } } | null } | null, actor?: { __typename?: 'users', id: string, displayName: string, avatarUrl: string } | null } };

export type GroupRefFragment = { __typename?: 'groups', id: string, short_id: string, name: string };

export type ThingRefFragment = { __typename?: 'things', id: string, short_id: string, name: string, images: Array<{ __typename?: 'thing_images', file: { __typename?: 'files', id: string, name?: string | null, mimeType?: string | null } }> };

export type EntityCardFragment = { __typename?: 'entities', id: string, group?: { __typename?: 'groups', id: string, short_id: string, name: string } | null, thing?: { __typename?: 'things', id: string, short_id: string, name: string, images: Array<{ __typename?: 'thing_images', file: { __typename?: 'files', id: string, name?: string | null, mimeType?: string | null } }> } | null, user?: { __typename?: 'users', id: string, displayName: string, avatarUrl: string } | null, group_join_request?: { __typename?: 'group_join_requests', id: string, response?: string | null, group: { __typename?: 'groups', id: string, short_id: string, name: string } } | null, group_post_comment?: { __typename?: 'group_post_comment', id: string, post: { __typename?: 'group_posts', id: string, author_id: string, group: { __typename?: 'groups', id: string, short_id: string, name: string } }, comment: { __typename?: 'comments', id: string, content: string, created_at: string, author: { __typename?: 'users', id: string, displayName: string, avatarUrl: string } } } | null, group_post?: { __typename?: 'group_posts', id: string, group: { __typename?: 'groups', id: string, short_id: string, name: string } } | null, group_thing?: { __typename?: 'group_thing', id: string, thing: { __typename?: 'things', id: string, short_id: string, name: string, images: Array<{ __typename?: 'thing_images', file: { __typename?: 'files', id: string, name?: string | null, mimeType?: string | null } }> }, group: { __typename?: 'groups', id: string, short_id: string, name: string } } | null, group_member?: { __typename?: 'group_members', user: { __typename?: 'users', id: string, displayName: string, avatarUrl: string }, group: { __typename?: 'groups', id: string, short_id: string, name: string } } | null };

export type DetailedEntityFragment = { __typename?: 'entities', id: string, group?: { __typename?: 'groups', id: string, short_id: string, name: string, created_at: string, description?: string | null, public: boolean, banner_file?: { __typename?: 'files', id: string, name?: string | null, mimeType?: string | null } | null, memberships_aggregate: { __typename?: 'group_members_aggregate', aggregate?: { __typename?: 'group_members_aggregate_fields', count: number } | null }, thing_relations_aggregate: { __typename?: 'group_thing_aggregate', aggregate?: { __typename?: 'group_thing_aggregate_fields', count: number } | null } } | null, user?: { __typename?: 'users', id: string, displayName: string, avatarUrl: string } | null, group_post?: { __typename?: 'group_posts', id: string, created_at: string, updated_at: string, type: Group_Post_Type_Enum, resolved: boolean, content: string, comments: Array<{ __typename?: 'group_post_comment', id: string, comment: { __typename?: 'comments', id: string, content: string, created_at: string, author: { __typename?: 'users', id: string, displayName: string, avatarUrl: string } } }>, group: { __typename?: 'groups', id: string, short_id: string, name: string, created_at: string, description?: string | null, public: boolean, banner_file?: { __typename?: 'files', id: string, name?: string | null, mimeType?: string | null } | null, memberships_aggregate: { __typename?: 'group_members_aggregate', aggregate?: { __typename?: 'group_members_aggregate_fields', count: number } | null }, thing_relations_aggregate: { __typename?: 'group_thing_aggregate', aggregate?: { __typename?: 'group_thing_aggregate_fields', count: number } | null } }, author: { __typename?: 'users', id: string, displayName: string, avatarUrl: string } } | null, group_thing?: { __typename?: 'group_thing', id: string, thing: { __typename?: 'things', id: string, name: string, description: string, category?: string | null, type: Thing_Type_Enum, expiry?: any | null, short_id: string, images: Array<{ __typename?: 'thing_images', id: string, description: string, order: number, file: { __typename?: 'files', id: string, name?: string | null, mimeType?: string | null } }>, owner: { __typename?: 'users', id: string, displayName: string, avatarUrl: string } } } | null, group_member?: { __typename?: 'group_members', id: string, role: Group_Role_Enum, created_at: string, group: { __typename?: 'groups', id: string, short_id: string, name: string }, user: { __typename?: 'users', id: string, displayName: string, avatarUrl: string } } | null };

export type GroupActivityQueryVariables = Exact<{
  shortId: Scalars['String'];
  limit: Scalars['Int'];
  offset: Scalars['Int'];
}>;


export type GroupActivityQuery = { __typename?: 'query_root', groups: Array<{ __typename?: 'groups', activities: Array<{ __typename?: 'activities', id: string, created_at: string, verb: Activity_Verb_Enum, actor?: { __typename?: 'users', id: string, displayName: string, avatarUrl: string } | null, entity: { __typename?: 'entities', id: string, group?: { __typename?: 'groups', id: string, short_id: string, name: string, created_at: string, description?: string | null, public: boolean, banner_file?: { __typename?: 'files', id: string, name?: string | null, mimeType?: string | null } | null, memberships_aggregate: { __typename?: 'group_members_aggregate', aggregate?: { __typename?: 'group_members_aggregate_fields', count: number } | null }, thing_relations_aggregate: { __typename?: 'group_thing_aggregate', aggregate?: { __typename?: 'group_thing_aggregate_fields', count: number } | null } } | null, user?: { __typename?: 'users', id: string, displayName: string, avatarUrl: string } | null, group_post?: { __typename?: 'group_posts', id: string, created_at: string, updated_at: string, type: Group_Post_Type_Enum, resolved: boolean, content: string, comments: Array<{ __typename?: 'group_post_comment', id: string, comment: { __typename?: 'comments', id: string, content: string, created_at: string, author: { __typename?: 'users', id: string, displayName: string, avatarUrl: string } } }>, group: { __typename?: 'groups', id: string, short_id: string, name: string, created_at: string, description?: string | null, public: boolean, banner_file?: { __typename?: 'files', id: string, name?: string | null, mimeType?: string | null } | null, memberships_aggregate: { __typename?: 'group_members_aggregate', aggregate?: { __typename?: 'group_members_aggregate_fields', count: number } | null }, thing_relations_aggregate: { __typename?: 'group_thing_aggregate', aggregate?: { __typename?: 'group_thing_aggregate_fields', count: number } | null } }, author: { __typename?: 'users', id: string, displayName: string, avatarUrl: string } } | null, group_thing?: { __typename?: 'group_thing', id: string, thing: { __typename?: 'things', id: string, name: string, description: string, category?: string | null, type: Thing_Type_Enum, expiry?: any | null, short_id: string, images: Array<{ __typename?: 'thing_images', id: string, description: string, order: number, file: { __typename?: 'files', id: string, name?: string | null, mimeType?: string | null } }>, owner: { __typename?: 'users', id: string, displayName: string, avatarUrl: string } } } | null, group_member?: { __typename?: 'group_members', id: string, role: Group_Role_Enum, created_at: string, group: { __typename?: 'groups', id: string, short_id: string, name: string }, user: { __typename?: 'users', id: string, displayName: string, avatarUrl: string } } | null } }> }> };

export type ChatMessageCardFragment = { __typename?: 'chat_messages', id: string, sender_id: string, message: string, created_at: string, entity?: { __typename?: 'entities', id: string, group?: { __typename?: 'groups', id: string, short_id: string, name: string } | null, thing?: { __typename?: 'things', id: string, short_id: string, name: string, images: Array<{ __typename?: 'thing_images', file: { __typename?: 'files', id: string, name?: string | null, mimeType?: string | null } }> } | null, user?: { __typename?: 'users', id: string, displayName: string, avatarUrl: string } | null, group_join_request?: { __typename?: 'group_join_requests', id: string, response?: string | null, group: { __typename?: 'groups', id: string, short_id: string, name: string } } | null, group_post_comment?: { __typename?: 'group_post_comment', id: string, post: { __typename?: 'group_posts', id: string, author_id: string, group: { __typename?: 'groups', id: string, short_id: string, name: string } }, comment: { __typename?: 'comments', id: string, content: string, created_at: string, author: { __typename?: 'users', id: string, displayName: string, avatarUrl: string } } } | null, group_post?: { __typename?: 'group_posts', id: string, group: { __typename?: 'groups', id: string, short_id: string, name: string } } | null, group_thing?: { __typename?: 'group_thing', id: string, thing: { __typename?: 'things', id: string, short_id: string, name: string, images: Array<{ __typename?: 'thing_images', file: { __typename?: 'files', id: string, name?: string | null, mimeType?: string | null } }> }, group: { __typename?: 'groups', id: string, short_id: string, name: string } } | null, group_member?: { __typename?: 'group_members', user: { __typename?: 'users', id: string, displayName: string, avatarUrl: string }, group: { __typename?: 'groups', id: string, short_id: string, name: string } } | null } | null };

export type ChatGroupMemberCardFragment = { __typename?: 'chat_group_members', id: string, last_read?: string | null, info?: { __typename?: 'chat_group_member_info', has_unread?: boolean | null } | null, user: { __typename?: 'users', id: string, displayName: string, avatarUrl: string } };

export type ChatGroupCardFragment = { __typename?: 'chat_groups', id: string, name: string, members: Array<{ __typename?: 'chat_group_members', id: string, last_read?: string | null, info?: { __typename?: 'chat_group_member_info', has_unread?: boolean | null } | null, user: { __typename?: 'users', id: string, displayName: string, avatarUrl: string } }>, messages: Array<{ __typename?: 'chat_messages', created_at: string, message: string, sender: { __typename?: 'users', id: string, displayName: string, avatarUrl: string } }> };

export type ChatMessagesQueryVariables = Exact<{
  where: Chat_Messages_Bool_Exp;
  limit: Scalars['Int'];
}>;


export type ChatMessagesQuery = { __typename?: 'query_root', chat_messages: Array<{ __typename?: 'chat_messages', id: string, sender_id: string, message: string, created_at: string, entity?: { __typename?: 'entities', id: string, group?: { __typename?: 'groups', id: string, short_id: string, name: string } | null, thing?: { __typename?: 'things', id: string, short_id: string, name: string, images: Array<{ __typename?: 'thing_images', file: { __typename?: 'files', id: string, name?: string | null, mimeType?: string | null } }> } | null, user?: { __typename?: 'users', id: string, displayName: string, avatarUrl: string } | null, group_join_request?: { __typename?: 'group_join_requests', id: string, response?: string | null, group: { __typename?: 'groups', id: string, short_id: string, name: string } } | null, group_post_comment?: { __typename?: 'group_post_comment', id: string, post: { __typename?: 'group_posts', id: string, author_id: string, group: { __typename?: 'groups', id: string, short_id: string, name: string } }, comment: { __typename?: 'comments', id: string, content: string, created_at: string, author: { __typename?: 'users', id: string, displayName: string, avatarUrl: string } } } | null, group_post?: { __typename?: 'group_posts', id: string, group: { __typename?: 'groups', id: string, short_id: string, name: string } } | null, group_thing?: { __typename?: 'group_thing', id: string, thing: { __typename?: 'things', id: string, short_id: string, name: string, images: Array<{ __typename?: 'thing_images', file: { __typename?: 'files', id: string, name?: string | null, mimeType?: string | null } }> }, group: { __typename?: 'groups', id: string, short_id: string, name: string } } | null, group_member?: { __typename?: 'group_members', user: { __typename?: 'users', id: string, displayName: string, avatarUrl: string }, group: { __typename?: 'groups', id: string, short_id: string, name: string } } | null } | null }> };

export type ChatGroupsSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type ChatGroupsSubscription = { __typename?: 'subscription_root', chat_groups: Array<{ __typename?: 'chat_groups', id: string, name: string, members: Array<{ __typename?: 'chat_group_members', id: string, last_read?: string | null, info?: { __typename?: 'chat_group_member_info', has_unread?: boolean | null } | null, user: { __typename?: 'users', id: string, displayName: string, avatarUrl: string } }>, messages: Array<{ __typename?: 'chat_messages', created_at: string, message: string, sender: { __typename?: 'users', id: string, displayName: string, avatarUrl: string } }> }> };

export type ChatMessagesFeedSubscriptionVariables = Exact<{
  where: Chat_Messages_Bool_Exp;
}>;


export type ChatMessagesFeedSubscription = { __typename?: 'subscription_root', chat_messages: Array<{ __typename?: 'chat_messages', id: string, sender_id: string, message: string, created_at: string, entity?: { __typename?: 'entities', id: string, group?: { __typename?: 'groups', id: string, short_id: string, name: string } | null, thing?: { __typename?: 'things', id: string, short_id: string, name: string, images: Array<{ __typename?: 'thing_images', file: { __typename?: 'files', id: string, name?: string | null, mimeType?: string | null } }> } | null, user?: { __typename?: 'users', id: string, displayName: string, avatarUrl: string } | null, group_join_request?: { __typename?: 'group_join_requests', id: string, response?: string | null, group: { __typename?: 'groups', id: string, short_id: string, name: string } } | null, group_post_comment?: { __typename?: 'group_post_comment', id: string, post: { __typename?: 'group_posts', id: string, author_id: string, group: { __typename?: 'groups', id: string, short_id: string, name: string } }, comment: { __typename?: 'comments', id: string, content: string, created_at: string, author: { __typename?: 'users', id: string, displayName: string, avatarUrl: string } } } | null, group_post?: { __typename?: 'group_posts', id: string, group: { __typename?: 'groups', id: string, short_id: string, name: string } } | null, group_thing?: { __typename?: 'group_thing', id: string, thing: { __typename?: 'things', id: string, short_id: string, name: string, images: Array<{ __typename?: 'thing_images', file: { __typename?: 'files', id: string, name?: string | null, mimeType?: string | null } }> }, group: { __typename?: 'groups', id: string, short_id: string, name: string } } | null, group_member?: { __typename?: 'group_members', user: { __typename?: 'users', id: string, displayName: string, avatarUrl: string }, group: { __typename?: 'groups', id: string, short_id: string, name: string } } | null } | null }> };

export type CreateChatGroupMutationVariables = Exact<{
  input: CreateChatGroupInput;
}>;


export type CreateChatGroupMutation = { __typename?: 'mutation_root', createChatGroup?: { __typename?: 'CreateChatGroupResult', chat_group?: { __typename?: 'chat_groups', id: string, name: string, members: Array<{ __typename?: 'chat_group_members', id: string, last_read?: string | null, info?: { __typename?: 'chat_group_member_info', has_unread?: boolean | null } | null, user: { __typename?: 'users', id: string, displayName: string, avatarUrl: string } }>, messages: Array<{ __typename?: 'chat_messages', created_at: string, message: string, sender: { __typename?: 'users', id: string, displayName: string, avatarUrl: string } }> } | null } | null };

export type UpdateChatGroupMutationVariables = Exact<{
  id: Scalars['uuid'];
  input: Chat_Groups_Set_Input;
}>;


export type UpdateChatGroupMutation = { __typename?: 'mutation_root', update_chat_groups_by_pk?: { __typename?: 'chat_groups', id: string, name: string, members: Array<{ __typename?: 'chat_group_members', id: string, last_read?: string | null, info?: { __typename?: 'chat_group_member_info', has_unread?: boolean | null } | null, user: { __typename?: 'users', id: string, displayName: string, avatarUrl: string } }>, messages: Array<{ __typename?: 'chat_messages', created_at: string, message: string, sender: { __typename?: 'users', id: string, displayName: string, avatarUrl: string } }> } | null };

export type CreateChatMessageMutationVariables = Exact<{
  input: CreateChatMessageInput;
}>;


export type CreateChatMessageMutation = { __typename?: 'mutation_root', createChatMessage: { __typename?: 'CreateChatMessageResult', chat_message?: { __typename?: 'chat_messages', id: string, sender_id: string, message: string, created_at: string, entity?: { __typename?: 'entities', id: string, group?: { __typename?: 'groups', id: string, short_id: string, name: string } | null, thing?: { __typename?: 'things', id: string, short_id: string, name: string, images: Array<{ __typename?: 'thing_images', file: { __typename?: 'files', id: string, name?: string | null, mimeType?: string | null } }> } | null, user?: { __typename?: 'users', id: string, displayName: string, avatarUrl: string } | null, group_join_request?: { __typename?: 'group_join_requests', id: string, response?: string | null, group: { __typename?: 'groups', id: string, short_id: string, name: string } } | null, group_post_comment?: { __typename?: 'group_post_comment', id: string, post: { __typename?: 'group_posts', id: string, author_id: string, group: { __typename?: 'groups', id: string, short_id: string, name: string } }, comment: { __typename?: 'comments', id: string, content: string, created_at: string, author: { __typename?: 'users', id: string, displayName: string, avatarUrl: string } } } | null, group_post?: { __typename?: 'group_posts', id: string, group: { __typename?: 'groups', id: string, short_id: string, name: string } } | null, group_thing?: { __typename?: 'group_thing', id: string, thing: { __typename?: 'things', id: string, short_id: string, name: string, images: Array<{ __typename?: 'thing_images', file: { __typename?: 'files', id: string, name?: string | null, mimeType?: string | null } }> }, group: { __typename?: 'groups', id: string, short_id: string, name: string } } | null, group_member?: { __typename?: 'group_members', user: { __typename?: 'users', id: string, displayName: string, avatarUrl: string }, group: { __typename?: 'groups', id: string, short_id: string, name: string } } | null } | null } | null } };

export type UpdateChatGroupMemberMutationVariables = Exact<{
  id: Scalars['uuid'];
  input: Chat_Group_Members_Set_Input;
}>;


export type UpdateChatGroupMemberMutation = { __typename?: 'mutation_root', update_chat_group_members_by_pk?: { __typename?: 'chat_group_members', id: string, last_read?: string | null, info?: { __typename?: 'chat_group_member_info', has_unread?: boolean | null } | null, user: { __typename?: 'users', id: string, displayName: string, avatarUrl: string } } | null };

export type CommentCardFragment = { __typename?: 'comments', id: string, content: string, created_at: string, author: { __typename?: 'users', id: string, displayName: string, avatarUrl: string } };

export type GroupMemberCardFragment = { __typename?: 'group_members', id: string, role: Group_Role_Enum, created_at: string, user: { __typename?: 'users', id: string, displayName: string, avatarUrl: string } };

export type GroupMemberWithGroupCardFragment = { __typename?: 'group_members', id: string, role: Group_Role_Enum, created_at: string, group: { __typename?: 'groups', id: string, short_id: string, name: string }, user: { __typename?: 'users', id: string, displayName: string, avatarUrl: string } };

export type GroupCardFragment = { __typename?: 'groups', id: string, short_id: string, name: string, created_at: string, description?: string | null, public: boolean, banner_file?: { __typename?: 'files', id: string, name?: string | null, mimeType?: string | null } | null, memberships_aggregate: { __typename?: 'group_members_aggregate', aggregate?: { __typename?: 'group_members_aggregate_fields', count: number } | null }, thing_relations_aggregate: { __typename?: 'group_thing_aggregate', aggregate?: { __typename?: 'group_thing_aggregate_fields', count: number } | null } };

export type GroupDetailsFragment = { __typename?: 'groups', id: string, short_id: string, name: string, created_at: string, description?: string | null, public: boolean, memberships: Array<{ __typename?: 'group_members', id: string, role: Group_Role_Enum, created_at: string, user: { __typename?: 'users', id: string, displayName: string, avatarUrl: string } }>, banner_file?: { __typename?: 'files', id: string, name?: string | null, mimeType?: string | null } | null, memberships_aggregate: { __typename?: 'group_members_aggregate', aggregate?: { __typename?: 'group_members_aggregate_fields', count: number } | null }, thing_relations_aggregate: { __typename?: 'group_thing_aggregate', aggregate?: { __typename?: 'group_thing_aggregate_fields', count: number } | null } };

export type GroupJoinRequestCardFragment = { __typename?: 'group_join_requests', id: string, created_at: string, updated_at: string, status?: Group_Join_Request_Status_Enum | null, group_id: string, message: string, user: { __typename?: 'users', id: string, displayName: string, avatarUrl: string } };

export type GroupJoinTokenCardFragment = { __typename?: 'group_join_tokens', id: string, created_at: string, updated_at: string, token: string, disabled: boolean, note?: string | null };

export type GroupPostFragment = { __typename?: 'group_posts', id: string, created_at: string, updated_at: string, type: Group_Post_Type_Enum, resolved: boolean, content: string, comments: Array<{ __typename?: 'group_post_comment', id: string, comment: { __typename?: 'comments', id: string, content: string, created_at: string, author: { __typename?: 'users', id: string, displayName: string, avatarUrl: string } } }>, group: { __typename?: 'groups', id: string, short_id: string, name: string, created_at: string, description?: string | null, public: boolean, banner_file?: { __typename?: 'files', id: string, name?: string | null, mimeType?: string | null } | null, memberships_aggregate: { __typename?: 'group_members_aggregate', aggregate?: { __typename?: 'group_members_aggregate_fields', count: number } | null }, thing_relations_aggregate: { __typename?: 'group_thing_aggregate', aggregate?: { __typename?: 'group_thing_aggregate_fields', count: number } | null } }, author: { __typename?: 'users', id: string, displayName: string, avatarUrl: string } };

export type ListGroupsQueryVariables = Exact<{
  limit: Scalars['Int'];
  offset: Scalars['Int'];
  orderBy: Groups_Order_By;
  where?: InputMaybe<Groups_Bool_Exp>;
}>;


export type ListGroupsQuery = { __typename?: 'query_root', groups_aggregate: { __typename?: 'groups_aggregate', aggregate?: { __typename?: 'groups_aggregate_fields', count: number } | null }, groups: Array<{ __typename?: 'groups', id: string, short_id: string, name: string, created_at: string, description?: string | null, public: boolean, banner_file?: { __typename?: 'files', id: string, name?: string | null, mimeType?: string | null } | null, memberships_aggregate: { __typename?: 'group_members_aggregate', aggregate?: { __typename?: 'group_members_aggregate_fields', count: number } | null }, thing_relations_aggregate: { __typename?: 'group_thing_aggregate', aggregate?: { __typename?: 'group_thing_aggregate_fields', count: number } | null } }> };

export type GroupDetailsQueryVariables = Exact<{
  shortId: Scalars['String'];
}>;


export type GroupDetailsQuery = { __typename?: 'query_root', groups: Array<{ __typename?: 'groups', id: string, short_id: string, name: string, created_at: string, description?: string | null, public: boolean, memberships: Array<{ __typename?: 'group_members', id: string, role: Group_Role_Enum, created_at: string, user: { __typename?: 'users', id: string, displayName: string, avatarUrl: string } }>, banner_file?: { __typename?: 'files', id: string, name?: string | null, mimeType?: string | null } | null, memberships_aggregate: { __typename?: 'group_members_aggregate', aggregate?: { __typename?: 'group_members_aggregate_fields', count: number } | null }, thing_relations_aggregate: { __typename?: 'group_thing_aggregate', aggregate?: { __typename?: 'group_thing_aggregate_fields', count: number } | null } }> };

export type GroupJoinRequestsQueryVariables = Exact<{
  where: Group_Join_Requests_Bool_Exp;
}>;


export type GroupJoinRequestsQuery = { __typename?: 'query_root', group_join_requests: Array<{ __typename?: 'group_join_requests', id: string, created_at: string, updated_at: string, status?: Group_Join_Request_Status_Enum | null, group_id: string, message: string, user: { __typename?: 'users', id: string, displayName: string, avatarUrl: string } }> };

export type GroupJoinTokensQueryVariables = Exact<{
  where: Group_Join_Tokens_Bool_Exp;
}>;


export type GroupJoinTokensQuery = { __typename?: 'query_root', group_join_tokens: Array<{ __typename?: 'group_join_tokens', id: string, created_at: string, updated_at: string, token: string, disabled: boolean, note?: string | null }> };

export type GroupPostListQueryVariables = Exact<{
  where: Group_Posts_Bool_Exp;
  limit: Scalars['Int'];
  offset: Scalars['Int'];
  orderBy?: InputMaybe<Array<Group_Posts_Order_By> | Group_Posts_Order_By>;
}>;


export type GroupPostListQuery = { __typename?: 'query_root', group_posts: Array<{ __typename?: 'group_posts', id: string, created_at: string, updated_at: string, type: Group_Post_Type_Enum, resolved: boolean, content: string, comments: Array<{ __typename?: 'group_post_comment', id: string, comment: { __typename?: 'comments', id: string, content: string, created_at: string, author: { __typename?: 'users', id: string, displayName: string, avatarUrl: string } } }>, group: { __typename?: 'groups', id: string, short_id: string, name: string, created_at: string, description?: string | null, public: boolean, banner_file?: { __typename?: 'files', id: string, name?: string | null, mimeType?: string | null } | null, memberships_aggregate: { __typename?: 'group_members_aggregate', aggregate?: { __typename?: 'group_members_aggregate_fields', count: number } | null }, thing_relations_aggregate: { __typename?: 'group_thing_aggregate', aggregate?: { __typename?: 'group_thing_aggregate_fields', count: number } | null } }, author: { __typename?: 'users', id: string, displayName: string, avatarUrl: string } }>, group_posts_aggregate: { __typename?: 'group_posts_aggregate', aggregate?: { __typename?: 'group_posts_aggregate_fields', count: number } | null } };

export type ActivityListQueryVariables = Exact<{
  offset?: InputMaybe<Scalars['Int']>;
}>;


export type ActivityListQuery = { __typename?: 'query_root', activities: Array<{ __typename?: 'activities', id: string, created_at: string, verb: Activity_Verb_Enum, entity: { __typename?: 'entities', id: string, group?: { __typename?: 'groups', id: string, short_id: string, name: string } | null, thing?: { __typename?: 'things', id: string, short_id: string, name: string, images: Array<{ __typename?: 'thing_images', file: { __typename?: 'files', id: string, name?: string | null, mimeType?: string | null } }> } | null, user?: { __typename?: 'users', id: string, displayName: string, avatarUrl: string } | null, group_join_request?: { __typename?: 'group_join_requests', id: string, response?: string | null, group: { __typename?: 'groups', id: string, short_id: string, name: string } } | null, group_post_comment?: { __typename?: 'group_post_comment', id: string, post: { __typename?: 'group_posts', id: string, author_id: string, group: { __typename?: 'groups', id: string, short_id: string, name: string } }, comment: { __typename?: 'comments', id: string, content: string, created_at: string, author: { __typename?: 'users', id: string, displayName: string, avatarUrl: string } } } | null, group_post?: { __typename?: 'group_posts', id: string, group: { __typename?: 'groups', id: string, short_id: string, name: string } } | null, group_thing?: { __typename?: 'group_thing', id: string, thing: { __typename?: 'things', id: string, short_id: string, name: string, images: Array<{ __typename?: 'thing_images', file: { __typename?: 'files', id: string, name?: string | null, mimeType?: string | null } }> }, group: { __typename?: 'groups', id: string, short_id: string, name: string } } | null, group_member?: { __typename?: 'group_members', user: { __typename?: 'users', id: string, displayName: string, avatarUrl: string }, group: { __typename?: 'groups', id: string, short_id: string, name: string } } | null }, secondary_entity?: { __typename?: 'entities', id: string, group?: { __typename?: 'groups', id: string, short_id: string, name: string } | null, thing?: { __typename?: 'things', id: string, short_id: string, name: string, images: Array<{ __typename?: 'thing_images', file: { __typename?: 'files', id: string, name?: string | null, mimeType?: string | null } }> } | null, user?: { __typename?: 'users', id: string, displayName: string, avatarUrl: string } | null, group_join_request?: { __typename?: 'group_join_requests', id: string, response?: string | null, group: { __typename?: 'groups', id: string, short_id: string, name: string } } | null, group_post_comment?: { __typename?: 'group_post_comment', id: string, post: { __typename?: 'group_posts', id: string, author_id: string, group: { __typename?: 'groups', id: string, short_id: string, name: string } }, comment: { __typename?: 'comments', id: string, content: string, created_at: string, author: { __typename?: 'users', id: string, displayName: string, avatarUrl: string } } } | null, group_post?: { __typename?: 'group_posts', id: string, group: { __typename?: 'groups', id: string, short_id: string, name: string } } | null, group_thing?: { __typename?: 'group_thing', id: string, thing: { __typename?: 'things', id: string, short_id: string, name: string, images: Array<{ __typename?: 'thing_images', file: { __typename?: 'files', id: string, name?: string | null, mimeType?: string | null } }> }, group: { __typename?: 'groups', id: string, short_id: string, name: string } } | null, group_member?: { __typename?: 'group_members', user: { __typename?: 'users', id: string, displayName: string, avatarUrl: string }, group: { __typename?: 'groups', id: string, short_id: string, name: string } } | null } | null, actor?: { __typename?: 'users', id: string, displayName: string, avatarUrl: string } | null }> };

export type CreateGroupMutationVariables = Exact<{
  input: CreateGroupInput;
}>;


export type CreateGroupMutation = { __typename?: 'mutation_root', createGroup: { __typename?: 'CreateGroupResult', group?: { __typename?: 'groups', id: string, short_id: string, name: string, created_at: string, description?: string | null, public: boolean, banner_file?: { __typename?: 'files', id: string, name?: string | null, mimeType?: string | null } | null, memberships_aggregate: { __typename?: 'group_members_aggregate', aggregate?: { __typename?: 'group_members_aggregate_fields', count: number } | null }, thing_relations_aggregate: { __typename?: 'group_thing_aggregate', aggregate?: { __typename?: 'group_thing_aggregate_fields', count: number } | null } } | null } };

export type UpdateGroupMutationVariables = Exact<{
  id: Scalars['uuid'];
  input: Groups_Set_Input;
}>;


export type UpdateGroupMutation = { __typename?: 'mutation_root', update_groups_by_pk?: { __typename?: 'groups', id: string, short_id: string, name: string, created_at: string, description?: string | null, public: boolean, memberships: Array<{ __typename?: 'group_members', id: string, role: Group_Role_Enum, created_at: string, user: { __typename?: 'users', id: string, displayName: string, avatarUrl: string } }>, banner_file?: { __typename?: 'files', id: string, name?: string | null, mimeType?: string | null } | null, memberships_aggregate: { __typename?: 'group_members_aggregate', aggregate?: { __typename?: 'group_members_aggregate_fields', count: number } | null }, thing_relations_aggregate: { __typename?: 'group_thing_aggregate', aggregate?: { __typename?: 'group_thing_aggregate_fields', count: number } | null } } | null };

export type DeleteGroupMutationVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type DeleteGroupMutation = { __typename?: 'mutation_root', delete_groups_by_pk?: { __typename?: 'groups', id: string, short_id: string, name: string, created_at: string, description?: string | null, public: boolean, banner_file?: { __typename?: 'files', id: string, name?: string | null, mimeType?: string | null } | null, memberships_aggregate: { __typename?: 'group_members_aggregate', aggregate?: { __typename?: 'group_members_aggregate_fields', count: number } | null }, thing_relations_aggregate: { __typename?: 'group_thing_aggregate', aggregate?: { __typename?: 'group_thing_aggregate_fields', count: number } | null } } | null };

export type CreateGroupPostMutationVariables = Exact<{
  input: Group_Posts_Insert_Input;
}>;


export type CreateGroupPostMutation = { __typename?: 'mutation_root', insert_group_posts_one?: { __typename?: 'group_posts', id: string, created_at: string, updated_at: string, type: Group_Post_Type_Enum, resolved: boolean, content: string, comments: Array<{ __typename?: 'group_post_comment', id: string, comment: { __typename?: 'comments', id: string, content: string, created_at: string, author: { __typename?: 'users', id: string, displayName: string, avatarUrl: string } } }>, group: { __typename?: 'groups', id: string, short_id: string, name: string, created_at: string, description?: string | null, public: boolean, banner_file?: { __typename?: 'files', id: string, name?: string | null, mimeType?: string | null } | null, memberships_aggregate: { __typename?: 'group_members_aggregate', aggregate?: { __typename?: 'group_members_aggregate_fields', count: number } | null }, thing_relations_aggregate: { __typename?: 'group_thing_aggregate', aggregate?: { __typename?: 'group_thing_aggregate_fields', count: number } | null } }, author: { __typename?: 'users', id: string, displayName: string, avatarUrl: string } } | null };

export type UpdateGroupPostMutationVariables = Exact<{
  id: Scalars['uuid'];
  input: Group_Posts_Set_Input;
}>;


export type UpdateGroupPostMutation = { __typename?: 'mutation_root', update_group_posts_by_pk?: { __typename?: 'group_posts', id: string, created_at: string, updated_at: string, type: Group_Post_Type_Enum, resolved: boolean, content: string, comments: Array<{ __typename?: 'group_post_comment', id: string, comment: { __typename?: 'comments', id: string, content: string, created_at: string, author: { __typename?: 'users', id: string, displayName: string, avatarUrl: string } } }>, group: { __typename?: 'groups', id: string, short_id: string, name: string, created_at: string, description?: string | null, public: boolean, banner_file?: { __typename?: 'files', id: string, name?: string | null, mimeType?: string | null } | null, memberships_aggregate: { __typename?: 'group_members_aggregate', aggregate?: { __typename?: 'group_members_aggregate_fields', count: number } | null }, thing_relations_aggregate: { __typename?: 'group_thing_aggregate', aggregate?: { __typename?: 'group_thing_aggregate_fields', count: number } | null } }, author: { __typename?: 'users', id: string, displayName: string, avatarUrl: string } } | null };

export type CreateGroupPostCommentMutationVariables = Exact<{
  groupPostId: Scalars['uuid'];
  input: Comments_Insert_Input;
}>;


export type CreateGroupPostCommentMutation = { __typename?: 'mutation_root', insert_group_post_comment_one?: { __typename?: 'group_post_comment', comment: { __typename?: 'comments', id: string, content: string, created_at: string, author: { __typename?: 'users', id: string, displayName: string, avatarUrl: string } }, post: { __typename?: 'group_posts', id: string, created_at: string, updated_at: string, type: Group_Post_Type_Enum, resolved: boolean, content: string, comments: Array<{ __typename?: 'group_post_comment', id: string, comment: { __typename?: 'comments', id: string, content: string, created_at: string, author: { __typename?: 'users', id: string, displayName: string, avatarUrl: string } } }>, group: { __typename?: 'groups', id: string, short_id: string, name: string, created_at: string, description?: string | null, public: boolean, banner_file?: { __typename?: 'files', id: string, name?: string | null, mimeType?: string | null } | null, memberships_aggregate: { __typename?: 'group_members_aggregate', aggregate?: { __typename?: 'group_members_aggregate_fields', count: number } | null }, thing_relations_aggregate: { __typename?: 'group_thing_aggregate', aggregate?: { __typename?: 'group_thing_aggregate_fields', count: number } | null } }, author: { __typename?: 'users', id: string, displayName: string, avatarUrl: string } } } | null };

export type LeaveGroupMutationVariables = Exact<{
  groupId: Scalars['uuid'];
  userId: Scalars['uuid'];
}>;


export type LeaveGroupMutation = { __typename?: 'mutation_root', delete_group_members?: { __typename?: 'group_members_mutation_response', affected_rows: number } | null };

export type JoinGroupMutationVariables = Exact<{
  groupId: Scalars['uuid'];
}>;


export type JoinGroupMutation = { __typename?: 'mutation_root', insert_group_members_one?: { __typename?: 'group_members', id: string, role: Group_Role_Enum, created_at: string, user: { __typename?: 'users', id: string, displayName: string, avatarUrl: string, createdAt: string, memberships: Array<{ __typename?: 'group_members', id: string, role: Group_Role_Enum, group: { __typename?: 'groups', id: string, short_id: string, name: string, created_at: string, description?: string | null, public: boolean, banner_file?: { __typename?: 'files', id: string, name?: string | null, mimeType?: string | null } | null, memberships_aggregate: { __typename?: 'group_members_aggregate', aggregate?: { __typename?: 'group_members_aggregate_fields', count: number } | null }, thing_relations_aggregate: { __typename?: 'group_thing_aggregate', aggregate?: { __typename?: 'group_thing_aggregate_fields', count: number } | null } } }>, group_join_requests: Array<{ __typename?: 'group_join_requests', id: string, created_at: string, updated_at: string, status?: Group_Join_Request_Status_Enum | null, group_id: string, message: string, user: { __typename?: 'users', id: string, displayName: string, avatarUrl: string } }> } } | null };

export type JoinGroupWithTokenMutationVariables = Exact<{
  input: JoinGroupInput;
}>;


export type JoinGroupWithTokenMutation = { __typename?: 'mutation_root', joinGroup?: { __typename?: 'JoinGroupResult', group?: { __typename?: 'groups', id: string } | null, user?: { __typename?: 'users', createdAt: string, id: string, displayName: string, avatarUrl: string, memberships: Array<{ __typename?: 'group_members', id: string, role: Group_Role_Enum, group: { __typename?: 'groups', id: string, short_id: string, name: string, created_at: string, description?: string | null, public: boolean, banner_file?: { __typename?: 'files', id: string, name?: string | null, mimeType?: string | null } | null, memberships_aggregate: { __typename?: 'group_members_aggregate', aggregate?: { __typename?: 'group_members_aggregate_fields', count: number } | null }, thing_relations_aggregate: { __typename?: 'group_thing_aggregate', aggregate?: { __typename?: 'group_thing_aggregate_fields', count: number } | null } } }>, group_join_requests: Array<{ __typename?: 'group_join_requests', id: string, created_at: string, updated_at: string, status?: Group_Join_Request_Status_Enum | null, group_id: string, message: string, user: { __typename?: 'users', id: string, displayName: string, avatarUrl: string } }> } | null } | null };

export type RequestJoinGroupMutationVariables = Exact<{
  input: RequestJoinGroupInput;
}>;


export type RequestJoinGroupMutation = { __typename?: 'mutation_root', requestJoinGroup?: { __typename?: 'RequestJoinGroupResult', group?: { __typename?: 'groups', id: string, short_id: string, name: string, created_at: string, description?: string | null, public: boolean, banner_file?: { __typename?: 'files', id: string, name?: string | null, mimeType?: string | null } | null, memberships_aggregate: { __typename?: 'group_members_aggregate', aggregate?: { __typename?: 'group_members_aggregate_fields', count: number } | null }, thing_relations_aggregate: { __typename?: 'group_thing_aggregate', aggregate?: { __typename?: 'group_thing_aggregate_fields', count: number } | null } } | null, user?: { __typename?: 'users', id: string, group_join_requests: Array<{ __typename?: 'group_join_requests', id: string, created_at: string, updated_at: string, status?: Group_Join_Request_Status_Enum | null, group_id: string, message: string, user: { __typename?: 'users', id: string, displayName: string, avatarUrl: string } }> } | null } | null };

export type CancelJoinRequestMutationVariables = Exact<{
  requestId: Scalars['uuid'];
}>;


export type CancelJoinRequestMutation = { __typename?: 'mutation_root', delete_group_join_requests?: { __typename?: 'group_join_requests_mutation_response', returning: Array<{ __typename?: 'group_join_requests', user: { __typename?: 'users', id: string, group_join_requests: Array<{ __typename?: 'group_join_requests', id: string, created_at: string, updated_at: string, status?: Group_Join_Request_Status_Enum | null, group_id: string, message: string, user: { __typename?: 'users', id: string, displayName: string, avatarUrl: string } }> } }> } | null };

export type HandleJoinRequestMutationVariables = Exact<{
  input: HandleJoinRequestInput;
}>;


export type HandleJoinRequestMutation = { __typename?: 'mutation_root', handleJoinRequest: { __typename?: 'HandleJoinRequestResult', join_request?: { __typename?: 'group_join_requests', id: string, created_at: string, updated_at: string, status?: Group_Join_Request_Status_Enum | null, group_id: string, message: string, user: { __typename?: 'users', id: string, displayName: string, avatarUrl: string } } | null } };

export type CreateJoinTokenMutationVariables = Exact<{
  input: Group_Join_Tokens_Insert_Input;
}>;


export type CreateJoinTokenMutation = { __typename?: 'mutation_root', insert_group_join_tokens_one?: { __typename?: 'group_join_tokens', id: string, created_at: string, updated_at: string, token: string, disabled: boolean, note?: string | null } | null };

export type DeleteJoinTokenMutationVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type DeleteJoinTokenMutation = { __typename?: 'mutation_root', delete_group_join_tokens_by_pk?: { __typename?: 'group_join_tokens', id: string, created_at: string, updated_at: string, token: string, disabled: boolean, note?: string | null } | null };

export type UpdateJoinTokenMutationVariables = Exact<{
  id: Scalars['uuid'];
  input: Group_Join_Tokens_Set_Input;
}>;


export type UpdateJoinTokenMutation = { __typename?: 'mutation_root', update_group_join_tokens_by_pk?: { __typename?: 'group_join_tokens', id: string, created_at: string, updated_at: string, token: string, disabled: boolean, note?: string | null } | null };

export type SearchCountsQueryVariables = Exact<{
  thingWhere: Things_Bool_Exp;
  groupWhere: Groups_Bool_Exp;
  userWhere: Users_Bool_Exp;
}>;


export type SearchCountsQuery = { __typename?: 'query_root', usersAggregate: { __typename?: 'users_aggregate', aggregate?: { __typename?: 'users_aggregate_fields', count: number } | null }, groups_aggregate: { __typename?: 'groups_aggregate', aggregate?: { __typename?: 'groups_aggregate_fields', count: number } | null }, things_aggregate: { __typename?: 'things_aggregate', aggregate?: { __typename?: 'things_aggregate_fields', count: number } | null } };

export type ThingCardFragment = { __typename?: 'things', id: string, name: string, description: string, category?: string | null, type: Thing_Type_Enum, expiry?: any | null, short_id: string, images: Array<{ __typename?: 'thing_images', id: string, description: string, order: number, file: { __typename?: 'files', id: string, name?: string | null, mimeType?: string | null } }>, owner: { __typename?: 'users', id: string, displayName: string, avatarUrl: string } };

export type ThingImageCardFragment = { __typename?: 'thing_images', id: string, description: string, order: number, file: { __typename?: 'files', id: string, name?: string | null, mimeType?: string | null } };

export type ThingDetailsFragment = { __typename?: 'things', enabled: boolean, id: string, name: string, description: string, category?: string | null, type: Thing_Type_Enum, expiry?: any | null, short_id: string, group_relations: Array<{ __typename?: 'group_thing', id: string, group: { __typename?: 'groups', id: string, short_id: string, name: string, created_at: string, description?: string | null, public: boolean, banner_file?: { __typename?: 'files', id: string, name?: string | null, mimeType?: string | null } | null, memberships_aggregate: { __typename?: 'group_members_aggregate', aggregate?: { __typename?: 'group_members_aggregate_fields', count: number } | null }, thing_relations_aggregate: { __typename?: 'group_thing_aggregate', aggregate?: { __typename?: 'group_thing_aggregate_fields', count: number } | null } } }>, images: Array<{ __typename?: 'thing_images', id: string, description: string, order: number, file: { __typename?: 'files', id: string, name?: string | null, mimeType?: string | null } }>, owner: { __typename?: 'users', id: string, displayName: string, avatarUrl: string } };

export type ThingListQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<Things_Order_By> | Things_Order_By>;
  where: Things_Bool_Exp;
}>;


export type ThingListQuery = { __typename?: 'query_root', things: Array<{ __typename?: 'things', id: string, name: string, description: string, category?: string | null, type: Thing_Type_Enum, expiry?: any | null, short_id: string, images: Array<{ __typename?: 'thing_images', id: string, description: string, order: number, file: { __typename?: 'files', id: string, name?: string | null, mimeType?: string | null } }>, owner: { __typename?: 'users', id: string, displayName: string, avatarUrl: string } }>, things_aggregate: { __typename?: 'things_aggregate', aggregate?: { __typename?: 'things_aggregate_fields', count: number } | null } };

export type ThingDetailsQueryVariables = Exact<{
  shortId: Scalars['String'];
}>;


export type ThingDetailsQuery = { __typename?: 'query_root', things: Array<{ __typename?: 'things', enabled: boolean, id: string, name: string, description: string, category?: string | null, type: Thing_Type_Enum, expiry?: any | null, short_id: string, group_relations: Array<{ __typename?: 'group_thing', id: string, group: { __typename?: 'groups', id: string, short_id: string, name: string, created_at: string, description?: string | null, public: boolean, banner_file?: { __typename?: 'files', id: string, name?: string | null, mimeType?: string | null } | null, memberships_aggregate: { __typename?: 'group_members_aggregate', aggregate?: { __typename?: 'group_members_aggregate_fields', count: number } | null }, thing_relations_aggregate: { __typename?: 'group_thing_aggregate', aggregate?: { __typename?: 'group_thing_aggregate_fields', count: number } | null } } }>, images: Array<{ __typename?: 'thing_images', id: string, description: string, order: number, file: { __typename?: 'files', id: string, name?: string | null, mimeType?: string | null } }>, owner: { __typename?: 'users', id: string, displayName: string, avatarUrl: string } }> };

export type CreateThingMutationVariables = Exact<{
  input: Things_Insert_Input;
}>;


export type CreateThingMutation = { __typename?: 'mutation_root', insert_things_one?: { __typename?: 'things', enabled: boolean, id: string, name: string, description: string, category?: string | null, type: Thing_Type_Enum, expiry?: any | null, short_id: string, group_relations: Array<{ __typename?: 'group_thing', id: string, group: { __typename?: 'groups', id: string, short_id: string, name: string, created_at: string, description?: string | null, public: boolean, banner_file?: { __typename?: 'files', id: string, name?: string | null, mimeType?: string | null } | null, memberships_aggregate: { __typename?: 'group_members_aggregate', aggregate?: { __typename?: 'group_members_aggregate_fields', count: number } | null }, thing_relations_aggregate: { __typename?: 'group_thing_aggregate', aggregate?: { __typename?: 'group_thing_aggregate_fields', count: number } | null } } }>, images: Array<{ __typename?: 'thing_images', id: string, description: string, order: number, file: { __typename?: 'files', id: string, name?: string | null, mimeType?: string | null } }>, owner: { __typename?: 'users', id: string, displayName: string, avatarUrl: string } } | null };

export type UpdateThingMutationVariables = Exact<{
  input: UpdateThingInput;
}>;


export type UpdateThingMutation = { __typename?: 'mutation_root', updateThing?: { __typename?: 'UpdateThingResult', thing?: { __typename?: 'things', enabled: boolean, id: string, name: string, description: string, category?: string | null, type: Thing_Type_Enum, expiry?: any | null, short_id: string, group_relations: Array<{ __typename?: 'group_thing', id: string, group: { __typename?: 'groups', id: string, short_id: string, name: string, created_at: string, description?: string | null, public: boolean, banner_file?: { __typename?: 'files', id: string, name?: string | null, mimeType?: string | null } | null, memberships_aggregate: { __typename?: 'group_members_aggregate', aggregate?: { __typename?: 'group_members_aggregate_fields', count: number } | null }, thing_relations_aggregate: { __typename?: 'group_thing_aggregate', aggregate?: { __typename?: 'group_thing_aggregate_fields', count: number } | null } } }>, images: Array<{ __typename?: 'thing_images', id: string, description: string, order: number, file: { __typename?: 'files', id: string, name?: string | null, mimeType?: string | null } }>, owner: { __typename?: 'users', id: string, displayName: string, avatarUrl: string } } | null } | null };

export type DeleteThingMutationVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type DeleteThingMutation = { __typename?: 'mutation_root', delete_things_by_pk?: { __typename?: 'things', enabled: boolean, id: string, name: string, description: string, category?: string | null, type: Thing_Type_Enum, expiry?: any | null, short_id: string, group_relations: Array<{ __typename?: 'group_thing', id: string, group: { __typename?: 'groups', id: string, short_id: string, name: string, created_at: string, description?: string | null, public: boolean, banner_file?: { __typename?: 'files', id: string, name?: string | null, mimeType?: string | null } | null, memberships_aggregate: { __typename?: 'group_members_aggregate', aggregate?: { __typename?: 'group_members_aggregate_fields', count: number } | null }, thing_relations_aggregate: { __typename?: 'group_thing_aggregate', aggregate?: { __typename?: 'group_thing_aggregate_fields', count: number } | null } } }>, images: Array<{ __typename?: 'thing_images', id: string, description: string, order: number, file: { __typename?: 'files', id: string, name?: string | null, mimeType?: string | null } }>, owner: { __typename?: 'users', id: string, displayName: string, avatarUrl: string } } | null };

export type FileUploadCardFragment = { __typename?: 'files', id: string, name?: string | null, mimeType?: string | null };

export type UserCardFragment = { __typename?: 'users', id: string, displayName: string, avatarUrl: string };

export type UserDetailFragment = { __typename?: 'users', createdAt: string, id: string, displayName: string, avatarUrl: string };

export type UserJoinRequestsFragment = { __typename?: 'users', id: string, group_join_requests: Array<{ __typename?: 'group_join_requests', id: string, created_at: string, updated_at: string, status?: Group_Join_Request_Status_Enum | null, group_id: string, message: string, user: { __typename?: 'users', id: string, displayName: string, avatarUrl: string } }> };

export type UserPrivateDetailFragment = { __typename?: 'users', createdAt: string, id: string, displayName: string, avatarUrl: string, memberships: Array<{ __typename?: 'group_members', id: string, role: Group_Role_Enum, group: { __typename?: 'groups', id: string, short_id: string, name: string, created_at: string, description?: string | null, public: boolean, banner_file?: { __typename?: 'files', id: string, name?: string | null, mimeType?: string | null } | null, memberships_aggregate: { __typename?: 'group_members_aggregate', aggregate?: { __typename?: 'group_members_aggregate_fields', count: number } | null }, thing_relations_aggregate: { __typename?: 'group_thing_aggregate', aggregate?: { __typename?: 'group_thing_aggregate_fields', count: number } | null } } }>, group_join_requests: Array<{ __typename?: 'group_join_requests', id: string, created_at: string, updated_at: string, status?: Group_Join_Request_Status_Enum | null, group_id: string, message: string, user: { __typename?: 'users', id: string, displayName: string, avatarUrl: string } }> };

export type UserListQueryVariables = Exact<{
  where?: InputMaybe<Users_Bool_Exp>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
}>;


export type UserListQuery = { __typename?: 'query_root', users: Array<{ __typename?: 'users', id: string, displayName: string, avatarUrl: string }>, usersAggregate: { __typename?: 'users_aggregate', aggregate?: { __typename?: 'users_aggregate_fields', count: number } | null } };

export type UserPrivateDetailsQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type UserPrivateDetailsQuery = { __typename?: 'query_root', user?: { __typename?: 'users', createdAt: string, id: string, displayName: string, avatarUrl: string, memberships: Array<{ __typename?: 'group_members', id: string, role: Group_Role_Enum, group: { __typename?: 'groups', id: string, short_id: string, name: string, created_at: string, description?: string | null, public: boolean, banner_file?: { __typename?: 'files', id: string, name?: string | null, mimeType?: string | null } | null, memberships_aggregate: { __typename?: 'group_members_aggregate', aggregate?: { __typename?: 'group_members_aggregate_fields', count: number } | null }, thing_relations_aggregate: { __typename?: 'group_thing_aggregate', aggregate?: { __typename?: 'group_thing_aggregate_fields', count: number } | null } } }>, group_join_requests: Array<{ __typename?: 'group_join_requests', id: string, created_at: string, updated_at: string, status?: Group_Join_Request_Status_Enum | null, group_id: string, message: string, user: { __typename?: 'users', id: string, displayName: string, avatarUrl: string } }> } | null };

export type NotificationsSubscriptionVariables = Exact<{
  userId: Scalars['uuid'];
}>;


export type NotificationsSubscription = { __typename?: 'subscription_root', notifications: Array<{ __typename?: 'notifications', id: string, read_at?: string | null, created_at: string, activity: { __typename?: 'activities', id: string, created_at: string, verb: Activity_Verb_Enum, entity: { __typename?: 'entities', id: string, group?: { __typename?: 'groups', id: string, short_id: string, name: string } | null, thing?: { __typename?: 'things', id: string, short_id: string, name: string, images: Array<{ __typename?: 'thing_images', file: { __typename?: 'files', id: string, name?: string | null, mimeType?: string | null } }> } | null, user?: { __typename?: 'users', id: string, displayName: string, avatarUrl: string } | null, group_join_request?: { __typename?: 'group_join_requests', id: string, response?: string | null, group: { __typename?: 'groups', id: string, short_id: string, name: string } } | null, group_post_comment?: { __typename?: 'group_post_comment', id: string, post: { __typename?: 'group_posts', id: string, author_id: string, group: { __typename?: 'groups', id: string, short_id: string, name: string } }, comment: { __typename?: 'comments', id: string, content: string, created_at: string, author: { __typename?: 'users', id: string, displayName: string, avatarUrl: string } } } | null, group_post?: { __typename?: 'group_posts', id: string, group: { __typename?: 'groups', id: string, short_id: string, name: string } } | null, group_thing?: { __typename?: 'group_thing', id: string, thing: { __typename?: 'things', id: string, short_id: string, name: string, images: Array<{ __typename?: 'thing_images', file: { __typename?: 'files', id: string, name?: string | null, mimeType?: string | null } }> }, group: { __typename?: 'groups', id: string, short_id: string, name: string } } | null, group_member?: { __typename?: 'group_members', user: { __typename?: 'users', id: string, displayName: string, avatarUrl: string }, group: { __typename?: 'groups', id: string, short_id: string, name: string } } | null }, secondary_entity?: { __typename?: 'entities', id: string, group?: { __typename?: 'groups', id: string, short_id: string, name: string } | null, thing?: { __typename?: 'things', id: string, short_id: string, name: string, images: Array<{ __typename?: 'thing_images', file: { __typename?: 'files', id: string, name?: string | null, mimeType?: string | null } }> } | null, user?: { __typename?: 'users', id: string, displayName: string, avatarUrl: string } | null, group_join_request?: { __typename?: 'group_join_requests', id: string, response?: string | null, group: { __typename?: 'groups', id: string, short_id: string, name: string } } | null, group_post_comment?: { __typename?: 'group_post_comment', id: string, post: { __typename?: 'group_posts', id: string, author_id: string, group: { __typename?: 'groups', id: string, short_id: string, name: string } }, comment: { __typename?: 'comments', id: string, content: string, created_at: string, author: { __typename?: 'users', id: string, displayName: string, avatarUrl: string } } } | null, group_post?: { __typename?: 'group_posts', id: string, group: { __typename?: 'groups', id: string, short_id: string, name: string } } | null, group_thing?: { __typename?: 'group_thing', id: string, thing: { __typename?: 'things', id: string, short_id: string, name: string, images: Array<{ __typename?: 'thing_images', file: { __typename?: 'files', id: string, name?: string | null, mimeType?: string | null } }> }, group: { __typename?: 'groups', id: string, short_id: string, name: string } } | null, group_member?: { __typename?: 'group_members', user: { __typename?: 'users', id: string, displayName: string, avatarUrl: string }, group: { __typename?: 'groups', id: string, short_id: string, name: string } } | null } | null, actor?: { __typename?: 'users', id: string, displayName: string, avatarUrl: string } | null } }> };

export type MarkNotificationReadMutationVariables = Exact<{
  id: Scalars['uuid'];
  readAt: Scalars['timestamptz'];
}>;


export type MarkNotificationReadMutation = { __typename?: 'mutation_root', update_notifications_by_pk?: { __typename?: 'notifications', id: string, read_at?: string | null, created_at: string, activity: { __typename?: 'activities', id: string, created_at: string, verb: Activity_Verb_Enum, entity: { __typename?: 'entities', id: string, group?: { __typename?: 'groups', id: string, short_id: string, name: string } | null, thing?: { __typename?: 'things', id: string, short_id: string, name: string, images: Array<{ __typename?: 'thing_images', file: { __typename?: 'files', id: string, name?: string | null, mimeType?: string | null } }> } | null, user?: { __typename?: 'users', id: string, displayName: string, avatarUrl: string } | null, group_join_request?: { __typename?: 'group_join_requests', id: string, response?: string | null, group: { __typename?: 'groups', id: string, short_id: string, name: string } } | null, group_post_comment?: { __typename?: 'group_post_comment', id: string, post: { __typename?: 'group_posts', id: string, author_id: string, group: { __typename?: 'groups', id: string, short_id: string, name: string } }, comment: { __typename?: 'comments', id: string, content: string, created_at: string, author: { __typename?: 'users', id: string, displayName: string, avatarUrl: string } } } | null, group_post?: { __typename?: 'group_posts', id: string, group: { __typename?: 'groups', id: string, short_id: string, name: string } } | null, group_thing?: { __typename?: 'group_thing', id: string, thing: { __typename?: 'things', id: string, short_id: string, name: string, images: Array<{ __typename?: 'thing_images', file: { __typename?: 'files', id: string, name?: string | null, mimeType?: string | null } }> }, group: { __typename?: 'groups', id: string, short_id: string, name: string } } | null, group_member?: { __typename?: 'group_members', user: { __typename?: 'users', id: string, displayName: string, avatarUrl: string }, group: { __typename?: 'groups', id: string, short_id: string, name: string } } | null }, secondary_entity?: { __typename?: 'entities', id: string, group?: { __typename?: 'groups', id: string, short_id: string, name: string } | null, thing?: { __typename?: 'things', id: string, short_id: string, name: string, images: Array<{ __typename?: 'thing_images', file: { __typename?: 'files', id: string, name?: string | null, mimeType?: string | null } }> } | null, user?: { __typename?: 'users', id: string, displayName: string, avatarUrl: string } | null, group_join_request?: { __typename?: 'group_join_requests', id: string, response?: string | null, group: { __typename?: 'groups', id: string, short_id: string, name: string } } | null, group_post_comment?: { __typename?: 'group_post_comment', id: string, post: { __typename?: 'group_posts', id: string, author_id: string, group: { __typename?: 'groups', id: string, short_id: string, name: string } }, comment: { __typename?: 'comments', id: string, content: string, created_at: string, author: { __typename?: 'users', id: string, displayName: string, avatarUrl: string } } } | null, group_post?: { __typename?: 'group_posts', id: string, group: { __typename?: 'groups', id: string, short_id: string, name: string } } | null, group_thing?: { __typename?: 'group_thing', id: string, thing: { __typename?: 'things', id: string, short_id: string, name: string, images: Array<{ __typename?: 'thing_images', file: { __typename?: 'files', id: string, name?: string | null, mimeType?: string | null } }> }, group: { __typename?: 'groups', id: string, short_id: string, name: string } } | null, group_member?: { __typename?: 'group_members', user: { __typename?: 'users', id: string, displayName: string, avatarUrl: string }, group: { __typename?: 'groups', id: string, short_id: string, name: string } } | null } | null, actor?: { __typename?: 'users', id: string, displayName: string, avatarUrl: string } | null } } | null };

export type MarkAllNotificationsReadMutationVariables = Exact<{
  userId: Scalars['uuid'];
  readAt: Scalars['timestamptz'];
}>;


export type MarkAllNotificationsReadMutation = { __typename?: 'mutation_root', update_notifications?: { __typename?: 'notifications_mutation_response', affected_rows: number, returning: Array<{ __typename?: 'notifications', id: string, read_at?: string | null, created_at: string, activity: { __typename?: 'activities', id: string, created_at: string, verb: Activity_Verb_Enum, entity: { __typename?: 'entities', id: string, group?: { __typename?: 'groups', id: string, short_id: string, name: string } | null, thing?: { __typename?: 'things', id: string, short_id: string, name: string, images: Array<{ __typename?: 'thing_images', file: { __typename?: 'files', id: string, name?: string | null, mimeType?: string | null } }> } | null, user?: { __typename?: 'users', id: string, displayName: string, avatarUrl: string } | null, group_join_request?: { __typename?: 'group_join_requests', id: string, response?: string | null, group: { __typename?: 'groups', id: string, short_id: string, name: string } } | null, group_post_comment?: { __typename?: 'group_post_comment', id: string, post: { __typename?: 'group_posts', id: string, author_id: string, group: { __typename?: 'groups', id: string, short_id: string, name: string } }, comment: { __typename?: 'comments', id: string, content: string, created_at: string, author: { __typename?: 'users', id: string, displayName: string, avatarUrl: string } } } | null, group_post?: { __typename?: 'group_posts', id: string, group: { __typename?: 'groups', id: string, short_id: string, name: string } } | null, group_thing?: { __typename?: 'group_thing', id: string, thing: { __typename?: 'things', id: string, short_id: string, name: string, images: Array<{ __typename?: 'thing_images', file: { __typename?: 'files', id: string, name?: string | null, mimeType?: string | null } }> }, group: { __typename?: 'groups', id: string, short_id: string, name: string } } | null, group_member?: { __typename?: 'group_members', user: { __typename?: 'users', id: string, displayName: string, avatarUrl: string }, group: { __typename?: 'groups', id: string, short_id: string, name: string } } | null }, secondary_entity?: { __typename?: 'entities', id: string, group?: { __typename?: 'groups', id: string, short_id: string, name: string } | null, thing?: { __typename?: 'things', id: string, short_id: string, name: string, images: Array<{ __typename?: 'thing_images', file: { __typename?: 'files', id: string, name?: string | null, mimeType?: string | null } }> } | null, user?: { __typename?: 'users', id: string, displayName: string, avatarUrl: string } | null, group_join_request?: { __typename?: 'group_join_requests', id: string, response?: string | null, group: { __typename?: 'groups', id: string, short_id: string, name: string } } | null, group_post_comment?: { __typename?: 'group_post_comment', id: string, post: { __typename?: 'group_posts', id: string, author_id: string, group: { __typename?: 'groups', id: string, short_id: string, name: string } }, comment: { __typename?: 'comments', id: string, content: string, created_at: string, author: { __typename?: 'users', id: string, displayName: string, avatarUrl: string } } } | null, group_post?: { __typename?: 'group_posts', id: string, group: { __typename?: 'groups', id: string, short_id: string, name: string } } | null, group_thing?: { __typename?: 'group_thing', id: string, thing: { __typename?: 'things', id: string, short_id: string, name: string, images: Array<{ __typename?: 'thing_images', file: { __typename?: 'files', id: string, name?: string | null, mimeType?: string | null } }> }, group: { __typename?: 'groups', id: string, short_id: string, name: string } } | null, group_member?: { __typename?: 'group_members', user: { __typename?: 'users', id: string, displayName: string, avatarUrl: string }, group: { __typename?: 'groups', id: string, short_id: string, name: string } } | null } | null, actor?: { __typename?: 'users', id: string, displayName: string, avatarUrl: string } | null } }> } | null };

export type RegisterUserMutationVariables = Exact<{
  input: CredentialsInput;
}>;


export type RegisterUserMutation = { __typename?: 'mutation_root', registerCredentials?: { __typename?: 'RegistrationResult', user_id: string } | null };

export const UserCardFragmentDoc = gql`
    fragment UserCard on users {
  id
  displayName
  avatarUrl
}
    `;
export const FileUploadCardFragmentDoc = gql`
    fragment FileUploadCard on files {
  id
  name
  mimeType
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
  banner_file {
    ...FileUploadCard
  }
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
    ${FileUploadCardFragmentDoc}`;
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
      ...FileUploadCard
    }
  }
}
    ${FileUploadCardFragmentDoc}`;
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
export const ChatGroupMemberCardFragmentDoc = gql`
    fragment ChatGroupMemberCard on chat_group_members {
  id
  last_read
  info {
    has_unread
  }
  user {
    ...UserCard
  }
}
    ${UserCardFragmentDoc}`;
export const ChatGroupCardFragmentDoc = gql`
    fragment ChatGroupCard on chat_groups {
  id
  name
  members {
    ...ChatGroupMemberCard
  }
  messages(limit: 1, order_by: [{created_at: desc}]) {
    created_at
    sender {
      ...UserCard
    }
    message
  }
}
    ${ChatGroupMemberCardFragmentDoc}
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
  createdAt
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
export function refetchGroupActivityQuery(variables: GroupActivityQueryVariables) {
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
export function refetchChatMessagesQuery(variables: ChatMessagesQueryVariables) {
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
export const UpdateChatGroupDocument = gql`
    mutation UpdateChatGroup($id: uuid!, $input: chat_groups_set_input!) {
  update_chat_groups_by_pk(pk_columns: {id: $id}, _set: $input) {
    ...ChatGroupCard
  }
}
    ${ChatGroupCardFragmentDoc}`;
export type UpdateChatGroupMutationFn = Apollo.MutationFunction<UpdateChatGroupMutation, UpdateChatGroupMutationVariables>;

/**
 * __useUpdateChatGroupMutation__
 *
 * To run a mutation, you first call `useUpdateChatGroupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateChatGroupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateChatGroupMutation, { data, loading, error }] = useUpdateChatGroupMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateChatGroupMutation(baseOptions?: Apollo.MutationHookOptions<UpdateChatGroupMutation, UpdateChatGroupMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateChatGroupMutation, UpdateChatGroupMutationVariables>(UpdateChatGroupDocument, options);
      }
export type UpdateChatGroupMutationHookResult = ReturnType<typeof useUpdateChatGroupMutation>;
export type UpdateChatGroupMutationResult = Apollo.MutationResult<UpdateChatGroupMutation>;
export type UpdateChatGroupMutationOptions = Apollo.BaseMutationOptions<UpdateChatGroupMutation, UpdateChatGroupMutationVariables>;
export const CreateChatMessageDocument = gql`
    mutation CreateChatMessage($input: CreateChatMessageInput!) {
  createChatMessage(input: $input) {
    chat_message {
      ...ChatMessageCard
    }
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
export const UpdateChatGroupMemberDocument = gql`
    mutation UpdateChatGroupMember($id: uuid!, $input: chat_group_members_set_input!) {
  update_chat_group_members_by_pk(pk_columns: {id: $id}, _set: $input) {
    ...ChatGroupMemberCard
  }
}
    ${ChatGroupMemberCardFragmentDoc}`;
export type UpdateChatGroupMemberMutationFn = Apollo.MutationFunction<UpdateChatGroupMemberMutation, UpdateChatGroupMemberMutationVariables>;

/**
 * __useUpdateChatGroupMemberMutation__
 *
 * To run a mutation, you first call `useUpdateChatGroupMemberMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateChatGroupMemberMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateChatGroupMemberMutation, { data, loading, error }] = useUpdateChatGroupMemberMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateChatGroupMemberMutation(baseOptions?: Apollo.MutationHookOptions<UpdateChatGroupMemberMutation, UpdateChatGroupMemberMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateChatGroupMemberMutation, UpdateChatGroupMemberMutationVariables>(UpdateChatGroupMemberDocument, options);
      }
export type UpdateChatGroupMemberMutationHookResult = ReturnType<typeof useUpdateChatGroupMemberMutation>;
export type UpdateChatGroupMemberMutationResult = Apollo.MutationResult<UpdateChatGroupMemberMutation>;
export type UpdateChatGroupMemberMutationOptions = Apollo.BaseMutationOptions<UpdateChatGroupMemberMutation, UpdateChatGroupMemberMutationVariables>;
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
export function refetchListGroupsQuery(variables: ListGroupsQueryVariables) {
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
export function refetchGroupDetailsQuery(variables: GroupDetailsQueryVariables) {
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
export function refetchGroupJoinRequestsQuery(variables: GroupJoinRequestsQueryVariables) {
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
export function refetchGroupJoinTokensQuery(variables: GroupJoinTokensQueryVariables) {
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
export function refetchGroupPostListQuery(variables: GroupPostListQueryVariables) {
      return { query: GroupPostListDocument, variables: variables }
    }
export const ActivityListDocument = gql`
    query ActivityList($offset: Int = 0) {
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
  usersAggregate(where: $userWhere, limit: 10) {
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
export function refetchSearchCountsQuery(variables: SearchCountsQueryVariables) {
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
export function refetchThingListQuery(variables: ThingListQueryVariables) {
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
export function refetchThingDetailsQuery(variables: ThingDetailsQueryVariables) {
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
export const UserListDocument = gql`
    query UserList($where: users_bool_exp, $limit: Int, $offset: Int) {
  users(where: $where, limit: $limit, offset: $offset) {
    ...UserCard
  }
  usersAggregate(where: $where, limit: 10) {
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
  user(id: $id) {
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
export function refetchUserPrivateDetailsQuery(variables: UserPrivateDetailsQueryVariables) {
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
    UpdateChatGroup: 'UpdateChatGroup',
    CreateChatMessage: 'CreateChatMessage',
    UpdateChatGroupMember: 'UpdateChatGroupMember',
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
    ChatGroupMemberCard: 'ChatGroupMemberCard',
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