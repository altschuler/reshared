import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  json: any;
  timestamptz: any;
  uuid: any;
};

/** expression to compare columns of type Boolean. All fields are combined with logical 'AND'. */
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

export type CreateGroupInput = {
  description: Scalars['String'];
  name: Scalars['String'];
  public?: Maybe<Scalars['Boolean']>;
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
  email?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  password: Scalars['String'];
};

export type HandleJoinRequestInput = {
  accepted: Scalars['Boolean'];
  join_request_id: Scalars['uuid'];
  response?: Maybe<Scalars['String']>;
};

export type HandleJoinRequestOutput = {
  __typename?: 'HandleJoinRequestOutput';
  join_request_id: Scalars['uuid'];
};

export type HandleJoinRequestResult = {
  __typename?: 'HandleJoinRequestResult';
  join_request?: Maybe<Group_Join_Requests>;
  join_request_id: Scalars['uuid'];
};

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
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
  message?: Maybe<Scalars['String']>;
};

export type RequestJoinGroupResult = {
  __typename?: 'RequestJoinGroupResult';
  group?: Maybe<Groups>;
  group_id: Scalars['uuid'];
  user?: Maybe<Users>;
  user_id: Scalars['uuid'];
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
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
  groups?: Maybe<Array<UpdateGroupThing>>;
  id?: Maybe<Scalars['uuid']>;
  images?: Maybe<Array<UpdateThingImage>>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
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
  id: Scalars['uuid'];
  /** An array relationship */
  notifications: Array<Notifications>;
  /** An aggregated array relationship */
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
  count?: Maybe<Scalars['Int']>;
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
  on_conflict?: Maybe<Activities_On_Conflict>;
};

/** Boolean expression to filter rows from the table "activities". All fields are combined with a logical 'AND'. */
export type Activities_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Activities_Bool_Exp>>>;
  _not?: Maybe<Activities_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Activities_Bool_Exp>>>;
  actor?: Maybe<Users_Bool_Exp>;
  actor_id?: Maybe<Uuid_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  entity?: Maybe<Entities_Bool_Exp>;
  entity_id?: Maybe<Uuid_Comparison_Exp>;
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
  id?: Maybe<Scalars['uuid']>;
  secondary_entity_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "activities" */
export type Activities_Max_Order_By = {
  actor_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  entity_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  secondary_entity_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Activities_Min_Fields = {
  __typename?: 'activities_min_fields';
  actor_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  entity_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  secondary_entity_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "activities" */
export type Activities_Min_Order_By = {
  actor_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  entity_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  secondary_entity_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "activities" */
export type Activities_Mutation_Response = {
  __typename?: 'activities_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Activities>;
};

/** input type for inserting object relation for remote table "activities" */
export type Activities_Obj_Rel_Insert_Input = {
  data: Activities_Insert_Input;
  on_conflict?: Maybe<Activities_On_Conflict>;
};

/** on conflict condition type for table "activities" */
export type Activities_On_Conflict = {
  constraint: Activities_Constraint;
  update_columns: Array<Activities_Update_Column>;
  where?: Maybe<Activities_Bool_Exp>;
};

/** ordering options when selecting data from "activities" */
export type Activities_Order_By = {
  actor?: Maybe<Users_Order_By>;
  actor_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  entity?: Maybe<Entities_Order_By>;
  entity_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  notifications_aggregate?: Maybe<Notifications_Aggregate_Order_By>;
  secondary_entity?: Maybe<Entities_Order_By>;
  secondary_entity_id?: Maybe<Order_By>;
  verb?: Maybe<Order_By>;
};

/** primary key columns input for table: "activities" */
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
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Activity_Verb_Max_Fields>;
  min?: Maybe<Activity_Verb_Min_Fields>;
};


/** aggregate fields of "activity_verb" */
export type Activity_Verb_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Activity_Verb_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "activity_verb" */
export type Activity_Verb_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Activity_Verb_Max_Order_By>;
  min?: Maybe<Activity_Verb_Min_Order_By>;
};

/** input type for inserting array relation for remote table "activity_verb" */
export type Activity_Verb_Arr_Rel_Insert_Input = {
  data: Array<Activity_Verb_Insert_Input>;
  on_conflict?: Maybe<Activity_Verb_On_Conflict>;
};

/** Boolean expression to filter rows from the table "activity_verb". All fields are combined with a logical 'AND'. */
export type Activity_Verb_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Activity_Verb_Bool_Exp>>>;
  _not?: Maybe<Activity_Verb_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Activity_Verb_Bool_Exp>>>;
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

/** expression to compare columns of type activity_verb_enum. All fields are combined with logical 'AND'. */
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

/** order by max() on columns of table "activity_verb" */
export type Activity_Verb_Max_Order_By = {
  comment?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Activity_Verb_Min_Fields = {
  __typename?: 'activity_verb_min_fields';
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "activity_verb" */
export type Activity_Verb_Min_Order_By = {
  comment?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** response of any mutation on the table "activity_verb" */
export type Activity_Verb_Mutation_Response = {
  __typename?: 'activity_verb_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Activity_Verb>;
};

/** input type for inserting object relation for remote table "activity_verb" */
export type Activity_Verb_Obj_Rel_Insert_Input = {
  data: Activity_Verb_Insert_Input;
  on_conflict?: Maybe<Activity_Verb_On_Conflict>;
};

/** on conflict condition type for table "activity_verb" */
export type Activity_Verb_On_Conflict = {
  constraint: Activity_Verb_Constraint;
  update_columns: Array<Activity_Verb_Update_Column>;
  where?: Maybe<Activity_Verb_Bool_Exp>;
};

/** ordering options when selecting data from "activity_verb" */
export type Activity_Verb_Order_By = {
  comment?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** primary key columns input for table: "activity_verb" */
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

export type Create_Group_Input = {
  description: Scalars['String'];
  name: Scalars['String'];
  public?: Maybe<Scalars['Boolean']>;
};

export type Create_Group_Result = {
  __typename?: 'create_group_result';
  group_id: Scalars['uuid'];
};

/** columns and relationships of "entities" */
export type Entities = {
  __typename?: 'entities';
  /** An object relationship */
  group?: Maybe<Groups>;
  group_id?: Maybe<Scalars['uuid']>;
  /** An object relationship */
  group_join_request?: Maybe<Group_Join_Requests>;
  id: Scalars['uuid'];
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
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Entities_Max_Fields>;
  min?: Maybe<Entities_Min_Fields>;
};


/** aggregate fields of "entities" */
export type Entities_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Entities_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "entities" */
export type Entities_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Entities_Max_Order_By>;
  min?: Maybe<Entities_Min_Order_By>;
};

/** input type for inserting array relation for remote table "entities" */
export type Entities_Arr_Rel_Insert_Input = {
  data: Array<Entities_Insert_Input>;
  on_conflict?: Maybe<Entities_On_Conflict>;
};

/** Boolean expression to filter rows from the table "entities". All fields are combined with a logical 'AND'. */
export type Entities_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Entities_Bool_Exp>>>;
  _not?: Maybe<Entities_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Entities_Bool_Exp>>>;
  group?: Maybe<Groups_Bool_Exp>;
  group_id?: Maybe<Uuid_Comparison_Exp>;
  group_join_request?: Maybe<Group_Join_Requests_Bool_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
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
  EntitiesJoinRequestIdKey = 'entities_join_request_id_key',
  /** unique or primary key constraint */
  EntitiesPkey = 'entities_pkey',
  /** unique or primary key constraint */
  EntitiesThingIdKey = 'entities_thing_id_key',
  /** unique or primary key constraint */
  EntitiesUserIdKey = 'entities_user_id_key'
}

/** input type for inserting data into table "entities" */
export type Entities_Insert_Input = {
  group?: Maybe<Groups_Obj_Rel_Insert_Input>;
  group_id?: Maybe<Scalars['uuid']>;
  group_join_request?: Maybe<Group_Join_Requests_Obj_Rel_Insert_Input>;
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
  group_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  join_request_id?: Maybe<Scalars['uuid']>;
  thing_id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "entities" */
export type Entities_Max_Order_By = {
  group_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  join_request_id?: Maybe<Order_By>;
  thing_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Entities_Min_Fields = {
  __typename?: 'entities_min_fields';
  group_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  join_request_id?: Maybe<Scalars['uuid']>;
  thing_id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "entities" */
export type Entities_Min_Order_By = {
  group_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  join_request_id?: Maybe<Order_By>;
  thing_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "entities" */
export type Entities_Mutation_Response = {
  __typename?: 'entities_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Entities>;
};

/** input type for inserting object relation for remote table "entities" */
export type Entities_Obj_Rel_Insert_Input = {
  data: Entities_Insert_Input;
  on_conflict?: Maybe<Entities_On_Conflict>;
};

/** on conflict condition type for table "entities" */
export type Entities_On_Conflict = {
  constraint: Entities_Constraint;
  update_columns: Array<Entities_Update_Column>;
  where?: Maybe<Entities_Bool_Exp>;
};

/** ordering options when selecting data from "entities" */
export type Entities_Order_By = {
  group?: Maybe<Groups_Order_By>;
  group_id?: Maybe<Order_By>;
  group_join_request?: Maybe<Group_Join_Requests_Order_By>;
  id?: Maybe<Order_By>;
  join_request_id?: Maybe<Order_By>;
  thing?: Maybe<Things_Order_By>;
  thing_id?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "entities" */
export type Entities_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "entities" */
export enum Entities_Select_Column {
  /** column name */
  GroupId = 'group_id',
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
  group_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  join_request_id?: Maybe<Scalars['uuid']>;
  thing_id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** update columns of table "entities" */
export enum Entities_Update_Column {
  /** column name */
  GroupId = 'group_id',
  /** column name */
  Id = 'id',
  /** column name */
  JoinRequestId = 'join_request_id',
  /** column name */
  ThingId = 'thing_id',
  /** column name */
  UserId = 'user_id'
}

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
  count?: Maybe<Scalars['Int']>;
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

/** order by aggregate values of table "file_uploads" */
export type File_Uploads_Aggregate_Order_By = {
  avg?: Maybe<File_Uploads_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<File_Uploads_Max_Order_By>;
  min?: Maybe<File_Uploads_Min_Order_By>;
  stddev?: Maybe<File_Uploads_Stddev_Order_By>;
  stddev_pop?: Maybe<File_Uploads_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<File_Uploads_Stddev_Samp_Order_By>;
  sum?: Maybe<File_Uploads_Sum_Order_By>;
  var_pop?: Maybe<File_Uploads_Var_Pop_Order_By>;
  var_samp?: Maybe<File_Uploads_Var_Samp_Order_By>;
  variance?: Maybe<File_Uploads_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "file_uploads" */
export type File_Uploads_Arr_Rel_Insert_Input = {
  data: Array<File_Uploads_Insert_Input>;
  on_conflict?: Maybe<File_Uploads_On_Conflict>;
};

/** aggregate avg on columns */
export type File_Uploads_Avg_Fields = {
  __typename?: 'file_uploads_avg_fields';
  size?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "file_uploads" */
export type File_Uploads_Avg_Order_By = {
  size?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "file_uploads". All fields are combined with a logical 'AND'. */
export type File_Uploads_Bool_Exp = {
  _and?: Maybe<Array<Maybe<File_Uploads_Bool_Exp>>>;
  _not?: Maybe<File_Uploads_Bool_Exp>;
  _or?: Maybe<Array<Maybe<File_Uploads_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  mime_type?: Maybe<String_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  owner?: Maybe<Users_Bool_Exp>;
  owner_id?: Maybe<Uuid_Comparison_Exp>;
  size?: Maybe<Int_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  url?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "file_uploads" */
export enum File_Uploads_Constraint {
  /** unique or primary key constraint */
  FileUploadsPkey = 'file_uploads_pkey',
  /** unique or primary key constraint */
  FileUploadsUrlKey = 'file_uploads_url_key'
}

/** input type for incrementing integer column in table "file_uploads" */
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
  updated_at?: Maybe<Scalars['timestamptz']>;
  url?: Maybe<Scalars['String']>;
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
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  mime_type?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  owner_id?: Maybe<Order_By>;
  size?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  url?: Maybe<Order_By>;
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
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  mime_type?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  owner_id?: Maybe<Order_By>;
  size?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  url?: Maybe<Order_By>;
};

/** response of any mutation on the table "file_uploads" */
export type File_Uploads_Mutation_Response = {
  __typename?: 'file_uploads_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<File_Uploads>;
};

/** input type for inserting object relation for remote table "file_uploads" */
export type File_Uploads_Obj_Rel_Insert_Input = {
  data: File_Uploads_Insert_Input;
  on_conflict?: Maybe<File_Uploads_On_Conflict>;
};

/** on conflict condition type for table "file_uploads" */
export type File_Uploads_On_Conflict = {
  constraint: File_Uploads_Constraint;
  update_columns: Array<File_Uploads_Update_Column>;
  where?: Maybe<File_Uploads_Bool_Exp>;
};

/** ordering options when selecting data from "file_uploads" */
export type File_Uploads_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  mime_type?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  owner?: Maybe<Users_Order_By>;
  owner_id?: Maybe<Order_By>;
  size?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  url?: Maybe<Order_By>;
};

/** primary key columns input for table: "file_uploads" */
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

/** order by stddev() on columns of table "file_uploads" */
export type File_Uploads_Stddev_Order_By = {
  size?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type File_Uploads_Stddev_Pop_Fields = {
  __typename?: 'file_uploads_stddev_pop_fields';
  size?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "file_uploads" */
export type File_Uploads_Stddev_Pop_Order_By = {
  size?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type File_Uploads_Stddev_Samp_Fields = {
  __typename?: 'file_uploads_stddev_samp_fields';
  size?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "file_uploads" */
export type File_Uploads_Stddev_Samp_Order_By = {
  size?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type File_Uploads_Sum_Fields = {
  __typename?: 'file_uploads_sum_fields';
  size?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "file_uploads" */
export type File_Uploads_Sum_Order_By = {
  size?: Maybe<Order_By>;
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

/** order by var_pop() on columns of table "file_uploads" */
export type File_Uploads_Var_Pop_Order_By = {
  size?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type File_Uploads_Var_Samp_Fields = {
  __typename?: 'file_uploads_var_samp_fields';
  size?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "file_uploads" */
export type File_Uploads_Var_Samp_Order_By = {
  size?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type File_Uploads_Variance_Fields = {
  __typename?: 'file_uploads_variance_fields';
  size?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "file_uploads" */
export type File_Uploads_Variance_Order_By = {
  size?: Maybe<Order_By>;
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
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Group_Join_Request_Status_Max_Fields>;
  min?: Maybe<Group_Join_Request_Status_Min_Fields>;
};


/** aggregate fields of "group_join_request_status" */
export type Group_Join_Request_Status_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Group_Join_Request_Status_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "group_join_request_status" */
export type Group_Join_Request_Status_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Group_Join_Request_Status_Max_Order_By>;
  min?: Maybe<Group_Join_Request_Status_Min_Order_By>;
};

/** input type for inserting array relation for remote table "group_join_request_status" */
export type Group_Join_Request_Status_Arr_Rel_Insert_Input = {
  data: Array<Group_Join_Request_Status_Insert_Input>;
  on_conflict?: Maybe<Group_Join_Request_Status_On_Conflict>;
};

/** Boolean expression to filter rows from the table "group_join_request_status". All fields are combined with a logical 'AND'. */
export type Group_Join_Request_Status_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Group_Join_Request_Status_Bool_Exp>>>;
  _not?: Maybe<Group_Join_Request_Status_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Group_Join_Request_Status_Bool_Exp>>>;
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

/** expression to compare columns of type group_join_request_status_enum. All fields are combined with logical 'AND'. */
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

/** order by max() on columns of table "group_join_request_status" */
export type Group_Join_Request_Status_Max_Order_By = {
  comment?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Group_Join_Request_Status_Min_Fields = {
  __typename?: 'group_join_request_status_min_fields';
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "group_join_request_status" */
export type Group_Join_Request_Status_Min_Order_By = {
  comment?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** response of any mutation on the table "group_join_request_status" */
export type Group_Join_Request_Status_Mutation_Response = {
  __typename?: 'group_join_request_status_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Group_Join_Request_Status>;
};

/** input type for inserting object relation for remote table "group_join_request_status" */
export type Group_Join_Request_Status_Obj_Rel_Insert_Input = {
  data: Group_Join_Request_Status_Insert_Input;
  on_conflict?: Maybe<Group_Join_Request_Status_On_Conflict>;
};

/** on conflict condition type for table "group_join_request_status" */
export type Group_Join_Request_Status_On_Conflict = {
  constraint: Group_Join_Request_Status_Constraint;
  update_columns: Array<Group_Join_Request_Status_Update_Column>;
  where?: Maybe<Group_Join_Request_Status_Bool_Exp>;
};

/** ordering options when selecting data from "group_join_request_status" */
export type Group_Join_Request_Status_Order_By = {
  comment?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** primary key columns input for table: "group_join_request_status" */
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
  count?: Maybe<Scalars['Int']>;
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
  on_conflict?: Maybe<Group_Join_Requests_On_Conflict>;
};

/** Boolean expression to filter rows from the table "group_join_requests". All fields are combined with a logical 'AND'. */
export type Group_Join_Requests_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Group_Join_Requests_Bool_Exp>>>;
  _not?: Maybe<Group_Join_Requests_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Group_Join_Requests_Bool_Exp>>>;
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
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Group_Join_Requests>;
};

/** input type for inserting object relation for remote table "group_join_requests" */
export type Group_Join_Requests_Obj_Rel_Insert_Input = {
  data: Group_Join_Requests_Insert_Input;
  on_conflict?: Maybe<Group_Join_Requests_On_Conflict>;
};

/** on conflict condition type for table "group_join_requests" */
export type Group_Join_Requests_On_Conflict = {
  constraint: Group_Join_Requests_Constraint;
  update_columns: Array<Group_Join_Requests_Update_Column>;
  where?: Maybe<Group_Join_Requests_Bool_Exp>;
};

/** ordering options when selecting data from "group_join_requests" */
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

/** primary key columns input for table: "group_join_requests" */
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
  count?: Maybe<Scalars['Int']>;
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
  on_conflict?: Maybe<Group_Join_Tokens_On_Conflict>;
};

/** Boolean expression to filter rows from the table "group_join_tokens". All fields are combined with a logical 'AND'. */
export type Group_Join_Tokens_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Group_Join_Tokens_Bool_Exp>>>;
  _not?: Maybe<Group_Join_Tokens_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Group_Join_Tokens_Bool_Exp>>>;
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
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Group_Join_Tokens>;
};

/** input type for inserting object relation for remote table "group_join_tokens" */
export type Group_Join_Tokens_Obj_Rel_Insert_Input = {
  data: Group_Join_Tokens_Insert_Input;
  on_conflict?: Maybe<Group_Join_Tokens_On_Conflict>;
};

/** on conflict condition type for table "group_join_tokens" */
export type Group_Join_Tokens_On_Conflict = {
  constraint: Group_Join_Tokens_Constraint;
  update_columns: Array<Group_Join_Tokens_Update_Column>;
  where?: Maybe<Group_Join_Tokens_Bool_Exp>;
};

/** ordering options when selecting data from "group_join_tokens" */
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

/** primary key columns input for table: "group_join_tokens" */
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
  count?: Maybe<Scalars['Int']>;
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
  on_conflict?: Maybe<Group_Members_On_Conflict>;
};

/** Boolean expression to filter rows from the table "group_members". All fields are combined with a logical 'AND'. */
export type Group_Members_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Group_Members_Bool_Exp>>>;
  _not?: Maybe<Group_Members_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Group_Members_Bool_Exp>>>;
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
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Group_Members>;
};

/** input type for inserting object relation for remote table "group_members" */
export type Group_Members_Obj_Rel_Insert_Input = {
  data: Group_Members_Insert_Input;
  on_conflict?: Maybe<Group_Members_On_Conflict>;
};

/** on conflict condition type for table "group_members" */
export type Group_Members_On_Conflict = {
  constraint: Group_Members_Constraint;
  update_columns: Array<Group_Members_Update_Column>;
  where?: Maybe<Group_Members_Bool_Exp>;
};

/** ordering options when selecting data from "group_members" */
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

/** primary key columns input for table: "group_members" */
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
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Group_Role_Max_Fields>;
  min?: Maybe<Group_Role_Min_Fields>;
};


/** aggregate fields of "group_role" */
export type Group_Role_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Group_Role_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "group_role" */
export type Group_Role_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Group_Role_Max_Order_By>;
  min?: Maybe<Group_Role_Min_Order_By>;
};

/** input type for inserting array relation for remote table "group_role" */
export type Group_Role_Arr_Rel_Insert_Input = {
  data: Array<Group_Role_Insert_Input>;
  on_conflict?: Maybe<Group_Role_On_Conflict>;
};

/** Boolean expression to filter rows from the table "group_role". All fields are combined with a logical 'AND'. */
export type Group_Role_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Group_Role_Bool_Exp>>>;
  _not?: Maybe<Group_Role_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Group_Role_Bool_Exp>>>;
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

/** expression to compare columns of type group_role_enum. All fields are combined with logical 'AND'. */
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

/** order by max() on columns of table "group_role" */
export type Group_Role_Max_Order_By = {
  comment?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Group_Role_Min_Fields = {
  __typename?: 'group_role_min_fields';
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "group_role" */
export type Group_Role_Min_Order_By = {
  comment?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** response of any mutation on the table "group_role" */
export type Group_Role_Mutation_Response = {
  __typename?: 'group_role_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Group_Role>;
};

/** input type for inserting object relation for remote table "group_role" */
export type Group_Role_Obj_Rel_Insert_Input = {
  data: Group_Role_Insert_Input;
  on_conflict?: Maybe<Group_Role_On_Conflict>;
};

/** on conflict condition type for table "group_role" */
export type Group_Role_On_Conflict = {
  constraint: Group_Role_Constraint;
  update_columns: Array<Group_Role_Update_Column>;
  where?: Maybe<Group_Role_Bool_Exp>;
};

/** ordering options when selecting data from "group_role" */
export type Group_Role_Order_By = {
  comment?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** primary key columns input for table: "group_role" */
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
  count?: Maybe<Scalars['Int']>;
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
  on_conflict?: Maybe<Group_Thing_On_Conflict>;
};

/** Boolean expression to filter rows from the table "group_thing". All fields are combined with a logical 'AND'. */
export type Group_Thing_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Group_Thing_Bool_Exp>>>;
  _not?: Maybe<Group_Thing_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Group_Thing_Bool_Exp>>>;
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
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Group_Thing>;
};

/** input type for inserting object relation for remote table "group_thing" */
export type Group_Thing_Obj_Rel_Insert_Input = {
  data: Group_Thing_Insert_Input;
  on_conflict?: Maybe<Group_Thing_On_Conflict>;
};

/** on conflict condition type for table "group_thing" */
export type Group_Thing_On_Conflict = {
  constraint: Group_Thing_Constraint;
  update_columns: Array<Group_Thing_Update_Column>;
  where?: Maybe<Group_Thing_Bool_Exp>;
};

/** ordering options when selecting data from "group_thing" */
export type Group_Thing_Order_By = {
  created_at?: Maybe<Order_By>;
  group?: Maybe<Groups_Order_By>;
  group_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  thing?: Maybe<Things_Order_By>;
  thing_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: "group_thing" */
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
  created_at: Scalars['timestamptz'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  /** An array relationship */
  join_requests: Array<Group_Join_Requests>;
  /** An aggregated array relationship */
  join_requests_aggregate: Group_Join_Requests_Aggregate;
  /** An array relationship */
  join_tokens: Array<Group_Join_Tokens>;
  /** An aggregated array relationship */
  join_tokens_aggregate: Group_Join_Tokens_Aggregate;
  /** An array relationship */
  memberships: Array<Group_Members>;
  /** An aggregated array relationship */
  memberships_aggregate: Group_Members_Aggregate;
  name: Scalars['String'];
  public: Scalars['Boolean'];
  slug?: Maybe<Scalars['String']>;
  /** An array relationship */
  thing_relations: Array<Group_Thing>;
  /** An aggregated array relationship */
  thing_relations_aggregate: Group_Thing_Aggregate;
  updated_at: Scalars['timestamptz'];
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
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Groups_Max_Fields>;
  min?: Maybe<Groups_Min_Fields>;
};


/** aggregate fields of "groups" */
export type Groups_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Groups_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "groups" */
export type Groups_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Groups_Max_Order_By>;
  min?: Maybe<Groups_Min_Order_By>;
};

/** input type for inserting array relation for remote table "groups" */
export type Groups_Arr_Rel_Insert_Input = {
  data: Array<Groups_Insert_Input>;
  on_conflict?: Maybe<Groups_On_Conflict>;
};

/** Boolean expression to filter rows from the table "groups". All fields are combined with a logical 'AND'. */
export type Groups_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Groups_Bool_Exp>>>;
  _not?: Maybe<Groups_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Groups_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  join_requests?: Maybe<Group_Join_Requests_Bool_Exp>;
  join_tokens?: Maybe<Group_Join_Tokens_Bool_Exp>;
  memberships?: Maybe<Group_Members_Bool_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  public?: Maybe<Boolean_Comparison_Exp>;
  slug?: Maybe<String_Comparison_Exp>;
  thing_relations?: Maybe<Group_Thing_Bool_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "groups" */
export enum Groups_Constraint {
  /** unique or primary key constraint */
  GroupsNameKey = 'groups_name_key',
  /** unique or primary key constraint */
  GroupsPkey = 'groups_pkey'
}

/** input type for inserting data into table "groups" */
export type Groups_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  join_requests?: Maybe<Group_Join_Requests_Arr_Rel_Insert_Input>;
  join_tokens?: Maybe<Group_Join_Tokens_Arr_Rel_Insert_Input>;
  memberships?: Maybe<Group_Members_Arr_Rel_Insert_Input>;
  name?: Maybe<Scalars['String']>;
  public?: Maybe<Scalars['Boolean']>;
  slug?: Maybe<Scalars['String']>;
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
  slug?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "groups" */
export type Groups_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  slug?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Groups_Min_Fields = {
  __typename?: 'groups_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "groups" */
export type Groups_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  slug?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "groups" */
export type Groups_Mutation_Response = {
  __typename?: 'groups_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Groups>;
};

/** input type for inserting object relation for remote table "groups" */
export type Groups_Obj_Rel_Insert_Input = {
  data: Groups_Insert_Input;
  on_conflict?: Maybe<Groups_On_Conflict>;
};

/** on conflict condition type for table "groups" */
export type Groups_On_Conflict = {
  constraint: Groups_Constraint;
  update_columns: Array<Groups_Update_Column>;
  where?: Maybe<Groups_Bool_Exp>;
};

/** ordering options when selecting data from "groups" */
export type Groups_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  join_requests_aggregate?: Maybe<Group_Join_Requests_Aggregate_Order_By>;
  join_tokens_aggregate?: Maybe<Group_Join_Tokens_Aggregate_Order_By>;
  memberships_aggregate?: Maybe<Group_Members_Aggregate_Order_By>;
  name?: Maybe<Order_By>;
  public?: Maybe<Order_By>;
  slug?: Maybe<Order_By>;
  thing_relations_aggregate?: Maybe<Group_Thing_Aggregate_Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: "groups" */
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
  Slug = 'slug',
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
  slug?: Maybe<Scalars['String']>;
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
  Slug = 'slug',
  /** column name */
  UpdatedAt = 'updated_at'
}


/** columns and relationships of "messages" */
export type Messages = {
  __typename?: 'messages';
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  receiver_id: Scalars['uuid'];
  sender_id: Scalars['uuid'];
};

/** aggregated selection of "messages" */
export type Messages_Aggregate = {
  __typename?: 'messages_aggregate';
  aggregate?: Maybe<Messages_Aggregate_Fields>;
  nodes: Array<Messages>;
};

/** aggregate fields of "messages" */
export type Messages_Aggregate_Fields = {
  __typename?: 'messages_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Messages_Max_Fields>;
  min?: Maybe<Messages_Min_Fields>;
};


/** aggregate fields of "messages" */
export type Messages_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Messages_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "messages" */
export type Messages_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Messages_Max_Order_By>;
  min?: Maybe<Messages_Min_Order_By>;
};

/** input type for inserting array relation for remote table "messages" */
export type Messages_Arr_Rel_Insert_Input = {
  data: Array<Messages_Insert_Input>;
  on_conflict?: Maybe<Messages_On_Conflict>;
};

/** Boolean expression to filter rows from the table "messages". All fields are combined with a logical 'AND'. */
export type Messages_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Messages_Bool_Exp>>>;
  _not?: Maybe<Messages_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Messages_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  receiver_id?: Maybe<Uuid_Comparison_Exp>;
  sender_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "messages" */
export enum Messages_Constraint {
  /** unique or primary key constraint */
  MessagesPkey = 'messages_pkey'
}

/** input type for inserting data into table "messages" */
export type Messages_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  receiver_id?: Maybe<Scalars['uuid']>;
  sender_id?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Messages_Max_Fields = {
  __typename?: 'messages_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  receiver_id?: Maybe<Scalars['uuid']>;
  sender_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "messages" */
export type Messages_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  receiver_id?: Maybe<Order_By>;
  sender_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Messages_Min_Fields = {
  __typename?: 'messages_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  receiver_id?: Maybe<Scalars['uuid']>;
  sender_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "messages" */
export type Messages_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  receiver_id?: Maybe<Order_By>;
  sender_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "messages" */
export type Messages_Mutation_Response = {
  __typename?: 'messages_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Messages>;
};

/** input type for inserting object relation for remote table "messages" */
export type Messages_Obj_Rel_Insert_Input = {
  data: Messages_Insert_Input;
  on_conflict?: Maybe<Messages_On_Conflict>;
};

/** on conflict condition type for table "messages" */
export type Messages_On_Conflict = {
  constraint: Messages_Constraint;
  update_columns: Array<Messages_Update_Column>;
  where?: Maybe<Messages_Bool_Exp>;
};

/** ordering options when selecting data from "messages" */
export type Messages_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  receiver_id?: Maybe<Order_By>;
  sender_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "messages" */
export type Messages_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "messages" */
export enum Messages_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ReceiverId = 'receiver_id',
  /** column name */
  SenderId = 'sender_id'
}

/** input type for updating data in table "messages" */
export type Messages_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  receiver_id?: Maybe<Scalars['uuid']>;
  sender_id?: Maybe<Scalars['uuid']>;
};

/** update columns of table "messages" */
export enum Messages_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ReceiverId = 'receiver_id',
  /** column name */
  SenderId = 'sender_id'
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** perform the action: "createGroup" */
  createGroup: CreateGroupResult;
  /** perform the action: "createJoinToken" */
  createJoinToken?: Maybe<CreateJoinTokenResult>;
  /** delete data from the table: "activities" */
  delete_activities?: Maybe<Activities_Mutation_Response>;
  /** delete single row from the table: "activities" */
  delete_activities_by_pk?: Maybe<Activities>;
  /** delete data from the table: "activity_verb" */
  delete_activity_verb?: Maybe<Activity_Verb_Mutation_Response>;
  /** delete single row from the table: "activity_verb" */
  delete_activity_verb_by_pk?: Maybe<Activity_Verb>;
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
  /** delete data from the table: "messages" */
  delete_messages?: Maybe<Messages_Mutation_Response>;
  /** delete single row from the table: "messages" */
  delete_messages_by_pk?: Maybe<Messages>;
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
  /** perform the action: "handleJoinRequest" */
  handleJoinRequest: HandleJoinRequestResult;
  /** insert data into the table: "activities" */
  insert_activities?: Maybe<Activities_Mutation_Response>;
  /** insert a single row into the table: "activities" */
  insert_activities_one?: Maybe<Activities>;
  /** insert data into the table: "activity_verb" */
  insert_activity_verb?: Maybe<Activity_Verb_Mutation_Response>;
  /** insert a single row into the table: "activity_verb" */
  insert_activity_verb_one?: Maybe<Activity_Verb>;
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
  /** insert data into the table: "messages" */
  insert_messages?: Maybe<Messages_Mutation_Response>;
  /** insert a single row into the table: "messages" */
  insert_messages_one?: Maybe<Messages>;
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
  /** perform the action: "joinGroup" */
  joinGroup?: Maybe<JoinGroupResult>;
  /** perform the action: "registerCredentials" */
  registerCredentials?: Maybe<RegistrationResult>;
  /** perform the action: "requestJoinGroup" */
  requestJoinGroup?: Maybe<RequestJoinGroupResult>;
  /** perform the action: "updateThing" */
  updateThing?: Maybe<UpdateThingResult>;
  /** update data of the table: "activities" */
  update_activities?: Maybe<Activities_Mutation_Response>;
  /** update single row of the table: "activities" */
  update_activities_by_pk?: Maybe<Activities>;
  /** update data of the table: "activity_verb" */
  update_activity_verb?: Maybe<Activity_Verb_Mutation_Response>;
  /** update single row of the table: "activity_verb" */
  update_activity_verb_by_pk?: Maybe<Activity_Verb>;
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
  /** update data of the table: "messages" */
  update_messages?: Maybe<Messages_Mutation_Response>;
  /** update single row of the table: "messages" */
  update_messages_by_pk?: Maybe<Messages>;
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
export type Mutation_RootCreateGroupArgs = {
  input: CreateGroupInput;
};


/** mutation root */
export type Mutation_RootCreateJoinTokenArgs = {
  input: CreateJoinTokenInput;
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
export type Mutation_RootDelete_MessagesArgs = {
  where: Messages_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Messages_By_PkArgs = {
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
export type Mutation_RootInsert_MessagesArgs = {
  objects: Array<Messages_Insert_Input>;
  on_conflict?: Maybe<Messages_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Messages_OneArgs = {
  object: Messages_Insert_Input;
  on_conflict?: Maybe<Messages_On_Conflict>;
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
export type Mutation_RootUpdate_EntitiesArgs = {
  _set?: Maybe<Entities_Set_Input>;
  where: Entities_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Entities_By_PkArgs = {
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
export type Mutation_RootUpdate_MessagesArgs = {
  _set?: Maybe<Messages_Set_Input>;
  where: Messages_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Messages_By_PkArgs = {
  _set?: Maybe<Messages_Set_Input>;
  pk_columns: Messages_Pk_Columns_Input;
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
  count?: Maybe<Scalars['Int']>;
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
  on_conflict?: Maybe<Notifications_On_Conflict>;
};

/** Boolean expression to filter rows from the table "notifications". All fields are combined with a logical 'AND'. */
export type Notifications_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Notifications_Bool_Exp>>>;
  _not?: Maybe<Notifications_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Notifications_Bool_Exp>>>;
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
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Notifications>;
};

/** input type for inserting object relation for remote table "notifications" */
export type Notifications_Obj_Rel_Insert_Input = {
  data: Notifications_Insert_Input;
  on_conflict?: Maybe<Notifications_On_Conflict>;
};

/** on conflict condition type for table "notifications" */
export type Notifications_On_Conflict = {
  constraint: Notifications_Constraint;
  update_columns: Array<Notifications_Update_Column>;
  where?: Maybe<Notifications_Bool_Exp>;
};

/** ordering options when selecting data from "notifications" */
export type Notifications_Order_By = {
  activity?: Maybe<Activities_Order_By>;
  activity_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  read_at?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "notifications" */
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
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** query root */
export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "activities" */
  activities: Array<Activities>;
  /** fetch aggregated fields from the table: "activities" */
  activities_aggregate: Activities_Aggregate;
  /** fetch data from the table: "activities" using primary key columns */
  activities_by_pk?: Maybe<Activities>;
  /** fetch data from the table: "activity_verb" */
  activity_verb: Array<Activity_Verb>;
  /** fetch aggregated fields from the table: "activity_verb" */
  activity_verb_aggregate: Activity_Verb_Aggregate;
  /** fetch data from the table: "activity_verb" using primary key columns */
  activity_verb_by_pk?: Maybe<Activity_Verb>;
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
  /** fetch data from the table: "group_join_requests" */
  group_join_requests: Array<Group_Join_Requests>;
  /** fetch aggregated fields from the table: "group_join_requests" */
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
  /** fetch data from the table: "messages" */
  messages: Array<Messages>;
  /** fetch aggregated fields from the table: "messages" */
  messages_aggregate: Messages_Aggregate;
  /** fetch data from the table: "messages" using primary key columns */
  messages_by_pk?: Maybe<Messages>;
  /** fetch data from the table: "notifications" */
  notifications: Array<Notifications>;
  /** fetch aggregated fields from the table: "notifications" */
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
  /** fetch data from the table: "things" */
  things: Array<Things>;
  /** fetch aggregated fields from the table: "things" */
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


/** query root */
export type Query_RootActivitiesArgs = {
  distinct_on?: Maybe<Array<Activities_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Activities_Order_By>>;
  where?: Maybe<Activities_Bool_Exp>;
};


/** query root */
export type Query_RootActivities_AggregateArgs = {
  distinct_on?: Maybe<Array<Activities_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Activities_Order_By>>;
  where?: Maybe<Activities_Bool_Exp>;
};


/** query root */
export type Query_RootActivities_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootActivity_VerbArgs = {
  distinct_on?: Maybe<Array<Activity_Verb_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Activity_Verb_Order_By>>;
  where?: Maybe<Activity_Verb_Bool_Exp>;
};


/** query root */
export type Query_RootActivity_Verb_AggregateArgs = {
  distinct_on?: Maybe<Array<Activity_Verb_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Activity_Verb_Order_By>>;
  where?: Maybe<Activity_Verb_Bool_Exp>;
};


/** query root */
export type Query_RootActivity_Verb_By_PkArgs = {
  value: Scalars['String'];
};


/** query root */
export type Query_RootEntitiesArgs = {
  distinct_on?: Maybe<Array<Entities_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Entities_Order_By>>;
  where?: Maybe<Entities_Bool_Exp>;
};


/** query root */
export type Query_RootEntities_AggregateArgs = {
  distinct_on?: Maybe<Array<Entities_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Entities_Order_By>>;
  where?: Maybe<Entities_Bool_Exp>;
};


/** query root */
export type Query_RootEntities_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootFile_UploadsArgs = {
  distinct_on?: Maybe<Array<File_Uploads_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<File_Uploads_Order_By>>;
  where?: Maybe<File_Uploads_Bool_Exp>;
};


/** query root */
export type Query_RootFile_Uploads_AggregateArgs = {
  distinct_on?: Maybe<Array<File_Uploads_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<File_Uploads_Order_By>>;
  where?: Maybe<File_Uploads_Bool_Exp>;
};


/** query root */
export type Query_RootFile_Uploads_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootGroup_Join_Request_StatusArgs = {
  distinct_on?: Maybe<Array<Group_Join_Request_Status_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Join_Request_Status_Order_By>>;
  where?: Maybe<Group_Join_Request_Status_Bool_Exp>;
};


/** query root */
export type Query_RootGroup_Join_Request_Status_AggregateArgs = {
  distinct_on?: Maybe<Array<Group_Join_Request_Status_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Join_Request_Status_Order_By>>;
  where?: Maybe<Group_Join_Request_Status_Bool_Exp>;
};


/** query root */
export type Query_RootGroup_Join_Request_Status_By_PkArgs = {
  value: Scalars['String'];
};


/** query root */
export type Query_RootGroup_Join_RequestsArgs = {
  distinct_on?: Maybe<Array<Group_Join_Requests_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Join_Requests_Order_By>>;
  where?: Maybe<Group_Join_Requests_Bool_Exp>;
};


/** query root */
export type Query_RootGroup_Join_Requests_AggregateArgs = {
  distinct_on?: Maybe<Array<Group_Join_Requests_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Join_Requests_Order_By>>;
  where?: Maybe<Group_Join_Requests_Bool_Exp>;
};


/** query root */
export type Query_RootGroup_Join_Requests_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootGroup_Join_TokensArgs = {
  distinct_on?: Maybe<Array<Group_Join_Tokens_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Join_Tokens_Order_By>>;
  where?: Maybe<Group_Join_Tokens_Bool_Exp>;
};


/** query root */
export type Query_RootGroup_Join_Tokens_AggregateArgs = {
  distinct_on?: Maybe<Array<Group_Join_Tokens_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Join_Tokens_Order_By>>;
  where?: Maybe<Group_Join_Tokens_Bool_Exp>;
};


/** query root */
export type Query_RootGroup_Join_Tokens_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootGroup_MembersArgs = {
  distinct_on?: Maybe<Array<Group_Members_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Members_Order_By>>;
  where?: Maybe<Group_Members_Bool_Exp>;
};


/** query root */
export type Query_RootGroup_Members_AggregateArgs = {
  distinct_on?: Maybe<Array<Group_Members_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Members_Order_By>>;
  where?: Maybe<Group_Members_Bool_Exp>;
};


/** query root */
export type Query_RootGroup_Members_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootGroup_RoleArgs = {
  distinct_on?: Maybe<Array<Group_Role_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Role_Order_By>>;
  where?: Maybe<Group_Role_Bool_Exp>;
};


/** query root */
export type Query_RootGroup_Role_AggregateArgs = {
  distinct_on?: Maybe<Array<Group_Role_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Role_Order_By>>;
  where?: Maybe<Group_Role_Bool_Exp>;
};


/** query root */
export type Query_RootGroup_Role_By_PkArgs = {
  value: Scalars['String'];
};


/** query root */
export type Query_RootGroup_ThingArgs = {
  distinct_on?: Maybe<Array<Group_Thing_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Thing_Order_By>>;
  where?: Maybe<Group_Thing_Bool_Exp>;
};


/** query root */
export type Query_RootGroup_Thing_AggregateArgs = {
  distinct_on?: Maybe<Array<Group_Thing_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Thing_Order_By>>;
  where?: Maybe<Group_Thing_Bool_Exp>;
};


/** query root */
export type Query_RootGroup_Thing_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootGroupsArgs = {
  distinct_on?: Maybe<Array<Groups_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Groups_Order_By>>;
  where?: Maybe<Groups_Bool_Exp>;
};


/** query root */
export type Query_RootGroups_AggregateArgs = {
  distinct_on?: Maybe<Array<Groups_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Groups_Order_By>>;
  where?: Maybe<Groups_Bool_Exp>;
};


/** query root */
export type Query_RootGroups_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootMessagesArgs = {
  distinct_on?: Maybe<Array<Messages_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Messages_Order_By>>;
  where?: Maybe<Messages_Bool_Exp>;
};


/** query root */
export type Query_RootMessages_AggregateArgs = {
  distinct_on?: Maybe<Array<Messages_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Messages_Order_By>>;
  where?: Maybe<Messages_Bool_Exp>;
};


/** query root */
export type Query_RootMessages_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootNotificationsArgs = {
  distinct_on?: Maybe<Array<Notifications_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Notifications_Order_By>>;
  where?: Maybe<Notifications_Bool_Exp>;
};


/** query root */
export type Query_RootNotifications_AggregateArgs = {
  distinct_on?: Maybe<Array<Notifications_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Notifications_Order_By>>;
  where?: Maybe<Notifications_Bool_Exp>;
};


/** query root */
export type Query_RootNotifications_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootThing_ImagesArgs = {
  distinct_on?: Maybe<Array<Thing_Images_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Thing_Images_Order_By>>;
  where?: Maybe<Thing_Images_Bool_Exp>;
};


/** query root */
export type Query_RootThing_Images_AggregateArgs = {
  distinct_on?: Maybe<Array<Thing_Images_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Thing_Images_Order_By>>;
  where?: Maybe<Thing_Images_Bool_Exp>;
};


/** query root */
export type Query_RootThing_Images_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootThing_TypeArgs = {
  distinct_on?: Maybe<Array<Thing_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Thing_Type_Order_By>>;
  where?: Maybe<Thing_Type_Bool_Exp>;
};


/** query root */
export type Query_RootThing_Type_AggregateArgs = {
  distinct_on?: Maybe<Array<Thing_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Thing_Type_Order_By>>;
  where?: Maybe<Thing_Type_Bool_Exp>;
};


/** query root */
export type Query_RootThing_Type_By_PkArgs = {
  value: Scalars['String'];
};


/** query root */
export type Query_RootThingsArgs = {
  distinct_on?: Maybe<Array<Things_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Things_Order_By>>;
  where?: Maybe<Things_Bool_Exp>;
};


/** query root */
export type Query_RootThings_AggregateArgs = {
  distinct_on?: Maybe<Array<Things_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Things_Order_By>>;
  where?: Maybe<Things_Bool_Exp>;
};


/** query root */
export type Query_RootThings_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootUser_PrivateArgs = {
  distinct_on?: Maybe<Array<User_Private_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Private_Order_By>>;
  where?: Maybe<User_Private_Bool_Exp>;
};


/** query root */
export type Query_RootUser_Private_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Private_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Private_Order_By>>;
  where?: Maybe<User_Private_Bool_Exp>;
};


/** query root */
export type Query_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** query root */
export type Query_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** query root */
export type Query_RootUsers_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootVerification_RequestsArgs = {
  distinct_on?: Maybe<Array<Verification_Requests_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Verification_Requests_Order_By>>;
  where?: Maybe<Verification_Requests_Bool_Exp>;
};


/** query root */
export type Query_RootVerification_Requests_AggregateArgs = {
  distinct_on?: Maybe<Array<Verification_Requests_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Verification_Requests_Order_By>>;
  where?: Maybe<Verification_Requests_Bool_Exp>;
};


/** query root */
export type Query_RootVerification_Requests_By_PkArgs = {
  id: Scalars['Int'];
};

/** subscription root */
export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "activities" */
  activities: Array<Activities>;
  /** fetch aggregated fields from the table: "activities" */
  activities_aggregate: Activities_Aggregate;
  /** fetch data from the table: "activities" using primary key columns */
  activities_by_pk?: Maybe<Activities>;
  /** fetch data from the table: "activity_verb" */
  activity_verb: Array<Activity_Verb>;
  /** fetch aggregated fields from the table: "activity_verb" */
  activity_verb_aggregate: Activity_Verb_Aggregate;
  /** fetch data from the table: "activity_verb" using primary key columns */
  activity_verb_by_pk?: Maybe<Activity_Verb>;
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
  /** fetch data from the table: "group_join_requests" */
  group_join_requests: Array<Group_Join_Requests>;
  /** fetch aggregated fields from the table: "group_join_requests" */
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
  /** fetch data from the table: "messages" */
  messages: Array<Messages>;
  /** fetch aggregated fields from the table: "messages" */
  messages_aggregate: Messages_Aggregate;
  /** fetch data from the table: "messages" using primary key columns */
  messages_by_pk?: Maybe<Messages>;
  /** fetch data from the table: "notifications" */
  notifications: Array<Notifications>;
  /** fetch aggregated fields from the table: "notifications" */
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
  /** fetch data from the table: "things" */
  things: Array<Things>;
  /** fetch aggregated fields from the table: "things" */
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


/** subscription root */
export type Subscription_RootActivitiesArgs = {
  distinct_on?: Maybe<Array<Activities_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Activities_Order_By>>;
  where?: Maybe<Activities_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootActivities_AggregateArgs = {
  distinct_on?: Maybe<Array<Activities_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Activities_Order_By>>;
  where?: Maybe<Activities_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootActivities_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootActivity_VerbArgs = {
  distinct_on?: Maybe<Array<Activity_Verb_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Activity_Verb_Order_By>>;
  where?: Maybe<Activity_Verb_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootActivity_Verb_AggregateArgs = {
  distinct_on?: Maybe<Array<Activity_Verb_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Activity_Verb_Order_By>>;
  where?: Maybe<Activity_Verb_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootActivity_Verb_By_PkArgs = {
  value: Scalars['String'];
};


/** subscription root */
export type Subscription_RootEntitiesArgs = {
  distinct_on?: Maybe<Array<Entities_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Entities_Order_By>>;
  where?: Maybe<Entities_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootEntities_AggregateArgs = {
  distinct_on?: Maybe<Array<Entities_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Entities_Order_By>>;
  where?: Maybe<Entities_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootEntities_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootFile_UploadsArgs = {
  distinct_on?: Maybe<Array<File_Uploads_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<File_Uploads_Order_By>>;
  where?: Maybe<File_Uploads_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootFile_Uploads_AggregateArgs = {
  distinct_on?: Maybe<Array<File_Uploads_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<File_Uploads_Order_By>>;
  where?: Maybe<File_Uploads_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootFile_Uploads_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootGroup_Join_Request_StatusArgs = {
  distinct_on?: Maybe<Array<Group_Join_Request_Status_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Join_Request_Status_Order_By>>;
  where?: Maybe<Group_Join_Request_Status_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootGroup_Join_Request_Status_AggregateArgs = {
  distinct_on?: Maybe<Array<Group_Join_Request_Status_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Join_Request_Status_Order_By>>;
  where?: Maybe<Group_Join_Request_Status_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootGroup_Join_Request_Status_By_PkArgs = {
  value: Scalars['String'];
};


/** subscription root */
export type Subscription_RootGroup_Join_RequestsArgs = {
  distinct_on?: Maybe<Array<Group_Join_Requests_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Join_Requests_Order_By>>;
  where?: Maybe<Group_Join_Requests_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootGroup_Join_Requests_AggregateArgs = {
  distinct_on?: Maybe<Array<Group_Join_Requests_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Join_Requests_Order_By>>;
  where?: Maybe<Group_Join_Requests_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootGroup_Join_Requests_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootGroup_Join_TokensArgs = {
  distinct_on?: Maybe<Array<Group_Join_Tokens_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Join_Tokens_Order_By>>;
  where?: Maybe<Group_Join_Tokens_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootGroup_Join_Tokens_AggregateArgs = {
  distinct_on?: Maybe<Array<Group_Join_Tokens_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Join_Tokens_Order_By>>;
  where?: Maybe<Group_Join_Tokens_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootGroup_Join_Tokens_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootGroup_MembersArgs = {
  distinct_on?: Maybe<Array<Group_Members_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Members_Order_By>>;
  where?: Maybe<Group_Members_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootGroup_Members_AggregateArgs = {
  distinct_on?: Maybe<Array<Group_Members_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Members_Order_By>>;
  where?: Maybe<Group_Members_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootGroup_Members_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootGroup_RoleArgs = {
  distinct_on?: Maybe<Array<Group_Role_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Role_Order_By>>;
  where?: Maybe<Group_Role_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootGroup_Role_AggregateArgs = {
  distinct_on?: Maybe<Array<Group_Role_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Role_Order_By>>;
  where?: Maybe<Group_Role_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootGroup_Role_By_PkArgs = {
  value: Scalars['String'];
};


/** subscription root */
export type Subscription_RootGroup_ThingArgs = {
  distinct_on?: Maybe<Array<Group_Thing_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Thing_Order_By>>;
  where?: Maybe<Group_Thing_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootGroup_Thing_AggregateArgs = {
  distinct_on?: Maybe<Array<Group_Thing_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Thing_Order_By>>;
  where?: Maybe<Group_Thing_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootGroup_Thing_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootGroupsArgs = {
  distinct_on?: Maybe<Array<Groups_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Groups_Order_By>>;
  where?: Maybe<Groups_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootGroups_AggregateArgs = {
  distinct_on?: Maybe<Array<Groups_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Groups_Order_By>>;
  where?: Maybe<Groups_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootGroups_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootMessagesArgs = {
  distinct_on?: Maybe<Array<Messages_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Messages_Order_By>>;
  where?: Maybe<Messages_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootMessages_AggregateArgs = {
  distinct_on?: Maybe<Array<Messages_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Messages_Order_By>>;
  where?: Maybe<Messages_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootMessages_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootNotificationsArgs = {
  distinct_on?: Maybe<Array<Notifications_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Notifications_Order_By>>;
  where?: Maybe<Notifications_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootNotifications_AggregateArgs = {
  distinct_on?: Maybe<Array<Notifications_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Notifications_Order_By>>;
  where?: Maybe<Notifications_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootNotifications_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootThing_ImagesArgs = {
  distinct_on?: Maybe<Array<Thing_Images_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Thing_Images_Order_By>>;
  where?: Maybe<Thing_Images_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootThing_Images_AggregateArgs = {
  distinct_on?: Maybe<Array<Thing_Images_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Thing_Images_Order_By>>;
  where?: Maybe<Thing_Images_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootThing_Images_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootThing_TypeArgs = {
  distinct_on?: Maybe<Array<Thing_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Thing_Type_Order_By>>;
  where?: Maybe<Thing_Type_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootThing_Type_AggregateArgs = {
  distinct_on?: Maybe<Array<Thing_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Thing_Type_Order_By>>;
  where?: Maybe<Thing_Type_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootThing_Type_By_PkArgs = {
  value: Scalars['String'];
};


/** subscription root */
export type Subscription_RootThingsArgs = {
  distinct_on?: Maybe<Array<Things_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Things_Order_By>>;
  where?: Maybe<Things_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootThings_AggregateArgs = {
  distinct_on?: Maybe<Array<Things_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Things_Order_By>>;
  where?: Maybe<Things_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootThings_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootUser_PrivateArgs = {
  distinct_on?: Maybe<Array<User_Private_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Private_Order_By>>;
  where?: Maybe<User_Private_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUser_Private_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Private_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Private_Order_By>>;
  where?: Maybe<User_Private_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootVerification_RequestsArgs = {
  distinct_on?: Maybe<Array<Verification_Requests_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Verification_Requests_Order_By>>;
  where?: Maybe<Verification_Requests_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootVerification_Requests_AggregateArgs = {
  distinct_on?: Maybe<Array<Verification_Requests_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Verification_Requests_Order_By>>;
  where?: Maybe<Verification_Requests_Bool_Exp>;
};


/** subscription root */
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
  count?: Maybe<Scalars['Int']>;
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
  _and?: Maybe<Array<Maybe<Thing_Images_Bool_Exp>>>;
  _not?: Maybe<Thing_Images_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Thing_Images_Bool_Exp>>>;
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

/** input type for incrementing integer column in table "thing_images" */
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
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Thing_Images>;
};

/** input type for inserting object relation for remote table "thing_images" */
export type Thing_Images_Obj_Rel_Insert_Input = {
  data: Thing_Images_Insert_Input;
  on_conflict?: Maybe<Thing_Images_On_Conflict>;
};

/** on conflict condition type for table "thing_images" */
export type Thing_Images_On_Conflict = {
  constraint: Thing_Images_Constraint;
  update_columns: Array<Thing_Images_Update_Column>;
  where?: Maybe<Thing_Images_Bool_Exp>;
};

/** ordering options when selecting data from "thing_images" */
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

/** primary key columns input for table: "thing_images" */
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
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Thing_Type_Max_Fields>;
  min?: Maybe<Thing_Type_Min_Fields>;
};


/** aggregate fields of "thing_type" */
export type Thing_Type_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Thing_Type_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "thing_type" */
export type Thing_Type_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Thing_Type_Max_Order_By>;
  min?: Maybe<Thing_Type_Min_Order_By>;
};

/** input type for inserting array relation for remote table "thing_type" */
export type Thing_Type_Arr_Rel_Insert_Input = {
  data: Array<Thing_Type_Insert_Input>;
  on_conflict?: Maybe<Thing_Type_On_Conflict>;
};

/** Boolean expression to filter rows from the table "thing_type". All fields are combined with a logical 'AND'. */
export type Thing_Type_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Thing_Type_Bool_Exp>>>;
  _not?: Maybe<Thing_Type_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Thing_Type_Bool_Exp>>>;
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

/** expression to compare columns of type thing_type_enum. All fields are combined with logical 'AND'. */
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

/** order by max() on columns of table "thing_type" */
export type Thing_Type_Max_Order_By = {
  comment?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Thing_Type_Min_Fields = {
  __typename?: 'thing_type_min_fields';
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "thing_type" */
export type Thing_Type_Min_Order_By = {
  comment?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** response of any mutation on the table "thing_type" */
export type Thing_Type_Mutation_Response = {
  __typename?: 'thing_type_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Thing_Type>;
};

/** input type for inserting object relation for remote table "thing_type" */
export type Thing_Type_Obj_Rel_Insert_Input = {
  data: Thing_Type_Insert_Input;
  on_conflict?: Maybe<Thing_Type_On_Conflict>;
};

/** on conflict condition type for table "thing_type" */
export type Thing_Type_On_Conflict = {
  constraint: Thing_Type_Constraint;
  update_columns: Array<Thing_Type_Update_Column>;
  where?: Maybe<Thing_Type_Bool_Exp>;
};

/** ordering options when selecting data from "thing_type" */
export type Thing_Type_Order_By = {
  comment?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** primary key columns input for table: "thing_type" */
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
  /** An array relationship */
  group_relations: Array<Group_Thing>;
  /** An aggregated array relationship */
  group_relations_aggregate: Group_Thing_Aggregate;
  id: Scalars['uuid'];
  /** An array relationship */
  images: Array<Thing_Images>;
  /** An aggregated array relationship */
  images_aggregate: Thing_Images_Aggregate;
  name: Scalars['String'];
  /** An object relationship */
  owner: Users;
  owner_id: Scalars['uuid'];
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
  count?: Maybe<Scalars['Int']>;
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
  on_conflict?: Maybe<Things_On_Conflict>;
};

/** Boolean expression to filter rows from the table "things". All fields are combined with a logical 'AND'. */
export type Things_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Things_Bool_Exp>>>;
  _not?: Maybe<Things_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Things_Bool_Exp>>>;
  category?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  group_relations?: Maybe<Group_Thing_Bool_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  images?: Maybe<Thing_Images_Bool_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  owner?: Maybe<Users_Bool_Exp>;
  owner_id?: Maybe<Uuid_Comparison_Exp>;
  type?: Maybe<Thing_Type_Enum_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "things" */
export enum Things_Constraint {
  /** unique or primary key constraint */
  ThingsPkey = 'things_pkey'
}

/** input type for inserting data into table "things" */
export type Things_Insert_Input = {
  category?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  group_relations?: Maybe<Group_Thing_Arr_Rel_Insert_Input>;
  id?: Maybe<Scalars['uuid']>;
  images?: Maybe<Thing_Images_Arr_Rel_Insert_Input>;
  name?: Maybe<Scalars['String']>;
  owner?: Maybe<Users_Obj_Rel_Insert_Input>;
  owner_id?: Maybe<Scalars['uuid']>;
  type?: Maybe<Thing_Type_Enum>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Things_Max_Fields = {
  __typename?: 'things_max_fields';
  category?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  owner_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "things" */
export type Things_Max_Order_By = {
  category?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  owner_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Things_Min_Fields = {
  __typename?: 'things_min_fields';
  category?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  owner_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "things" */
export type Things_Min_Order_By = {
  category?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  owner_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "things" */
export type Things_Mutation_Response = {
  __typename?: 'things_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Things>;
};

/** input type for inserting object relation for remote table "things" */
export type Things_Obj_Rel_Insert_Input = {
  data: Things_Insert_Input;
  on_conflict?: Maybe<Things_On_Conflict>;
};

/** on conflict condition type for table "things" */
export type Things_On_Conflict = {
  constraint: Things_Constraint;
  update_columns: Array<Things_Update_Column>;
  where?: Maybe<Things_Bool_Exp>;
};

/** ordering options when selecting data from "things" */
export type Things_Order_By = {
  category?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  group_relations_aggregate?: Maybe<Group_Thing_Aggregate_Order_By>;
  id?: Maybe<Order_By>;
  images_aggregate?: Maybe<Thing_Images_Aggregate_Order_By>;
  name?: Maybe<Order_By>;
  owner?: Maybe<Users_Order_By>;
  owner_id?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: "things" */
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
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  OwnerId = 'owner_id',
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
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  owner_id?: Maybe<Scalars['uuid']>;
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
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  OwnerId = 'owner_id',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at'
}


/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
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
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<User_Private_Max_Fields>;
  min?: Maybe<User_Private_Min_Fields>;
};


/** aggregate fields of "user_private" */
export type User_Private_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<User_Private_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "user_private" */
export type User_Private_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<User_Private_Max_Order_By>;
  min?: Maybe<User_Private_Min_Order_By>;
};

/** input type for inserting array relation for remote table "user_private" */
export type User_Private_Arr_Rel_Insert_Input = {
  data: Array<User_Private_Insert_Input>;
};

/** Boolean expression to filter rows from the table "user_private". All fields are combined with a logical 'AND'. */
export type User_Private_Bool_Exp = {
  _and?: Maybe<Array<Maybe<User_Private_Bool_Exp>>>;
  _not?: Maybe<User_Private_Bool_Exp>;
  _or?: Maybe<Array<Maybe<User_Private_Bool_Exp>>>;
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

/** order by max() on columns of table "user_private" */
export type User_Private_Max_Order_By = {
  email?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type User_Private_Min_Fields = {
  __typename?: 'user_private_min_fields';
  email?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "user_private" */
export type User_Private_Min_Order_By = {
  email?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "user_private" */
export type User_Private_Mutation_Response = {
  __typename?: 'user_private_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<User_Private>;
};

/** input type for inserting object relation for remote table "user_private" */
export type User_Private_Obj_Rel_Insert_Input = {
  data: User_Private_Insert_Input;
};

/** ordering options when selecting data from "user_private" */
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
  created_at: Scalars['timestamptz'];
  email?: Maybe<Scalars['String']>;
  email_verified?: Maybe<Scalars['timestamptz']>;
  /** An array relationship */
  group_join_requests: Array<Group_Join_Requests>;
  /** An aggregated array relationship */
  group_join_requests_aggregate: Group_Join_Requests_Aggregate;
  id: Scalars['uuid'];
  image?: Maybe<Scalars['String']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  /** An array relationship */
  memberships: Array<Group_Members>;
  /** An aggregated array relationship */
  memberships_aggregate: Group_Members_Aggregate;
  name: Scalars['String'];
  password_hash?: Maybe<Scalars['String']>;
  /** An object relationship */
  private_info?: Maybe<User_Private>;
  /** An array relationship */
  things: Array<Things>;
  /** An aggregated array relationship */
  things_aggregate: Things_Aggregate;
  updated_at: Scalars['timestamptz'];
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
  count?: Maybe<Scalars['Int']>;
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
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Users_Bool_Exp>>>;
  _not?: Maybe<Users_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Users_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  email?: Maybe<String_Comparison_Exp>;
  email_verified?: Maybe<Timestamptz_Comparison_Exp>;
  group_join_requests?: Maybe<Group_Join_Requests_Bool_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  image?: Maybe<String_Comparison_Exp>;
  last_seen?: Maybe<Timestamptz_Comparison_Exp>;
  memberships?: Maybe<Group_Members_Bool_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  password_hash?: Maybe<String_Comparison_Exp>;
  private_info?: Maybe<User_Private_Bool_Exp>;
  things?: Maybe<Things_Bool_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint */
  Email = 'email',
  /** unique or primary key constraint */
  UsersEmailKey = 'users_email_key',
  /** unique or primary key constraint */
  UsersPkey = 'users_pkey'
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  email_verified?: Maybe<Scalars['timestamptz']>;
  group_join_requests?: Maybe<Group_Join_Requests_Arr_Rel_Insert_Input>;
  id?: Maybe<Scalars['uuid']>;
  image?: Maybe<Scalars['String']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  memberships?: Maybe<Group_Members_Arr_Rel_Insert_Input>;
  name?: Maybe<Scalars['String']>;
  password_hash?: Maybe<Scalars['String']>;
  private_info?: Maybe<User_Private_Obj_Rel_Insert_Input>;
  things?: Maybe<Things_Arr_Rel_Insert_Input>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  email_verified?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  image?: Maybe<Scalars['String']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  password_hash?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "users" */
export type Users_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  email_verified?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  image?: Maybe<Order_By>;
  last_seen?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  password_hash?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  email_verified?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  image?: Maybe<Scalars['String']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  password_hash?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "users" */
export type Users_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  email_verified?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  image?: Maybe<Order_By>;
  last_seen?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  password_hash?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** on conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns: Array<Users_Update_Column>;
  where?: Maybe<Users_Bool_Exp>;
};

/** ordering options when selecting data from "users" */
export type Users_Order_By = {
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  email_verified?: Maybe<Order_By>;
  group_join_requests_aggregate?: Maybe<Group_Join_Requests_Aggregate_Order_By>;
  id?: Maybe<Order_By>;
  image?: Maybe<Order_By>;
  last_seen?: Maybe<Order_By>;
  memberships_aggregate?: Maybe<Group_Members_Aggregate_Order_By>;
  name?: Maybe<Order_By>;
  password_hash?: Maybe<Order_By>;
  private_info?: Maybe<User_Private_Order_By>;
  things_aggregate?: Maybe<Things_Aggregate_Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: "users" */
export type Users_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
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
  LastSeen = 'last_seen',
  /** column name */
  Name = 'name',
  /** column name */
  PasswordHash = 'password_hash',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  email_verified?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  image?: Maybe<Scalars['String']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  password_hash?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
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
  LastSeen = 'last_seen',
  /** column name */
  Name = 'name',
  /** column name */
  PasswordHash = 'password_hash',
  /** column name */
  UpdatedAt = 'updated_at'
}


/** expression to compare columns of type uuid. All fields are combined with logical 'AND'. */
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
  count?: Maybe<Scalars['Int']>;
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

/** order by aggregate values of table "verification_requests" */
export type Verification_Requests_Aggregate_Order_By = {
  avg?: Maybe<Verification_Requests_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Verification_Requests_Max_Order_By>;
  min?: Maybe<Verification_Requests_Min_Order_By>;
  stddev?: Maybe<Verification_Requests_Stddev_Order_By>;
  stddev_pop?: Maybe<Verification_Requests_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Verification_Requests_Stddev_Samp_Order_By>;
  sum?: Maybe<Verification_Requests_Sum_Order_By>;
  var_pop?: Maybe<Verification_Requests_Var_Pop_Order_By>;
  var_samp?: Maybe<Verification_Requests_Var_Samp_Order_By>;
  variance?: Maybe<Verification_Requests_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "verification_requests" */
export type Verification_Requests_Arr_Rel_Insert_Input = {
  data: Array<Verification_Requests_Insert_Input>;
  on_conflict?: Maybe<Verification_Requests_On_Conflict>;
};

/** aggregate avg on columns */
export type Verification_Requests_Avg_Fields = {
  __typename?: 'verification_requests_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "verification_requests" */
export type Verification_Requests_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "verification_requests". All fields are combined with a logical 'AND'. */
export type Verification_Requests_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Verification_Requests_Bool_Exp>>>;
  _not?: Maybe<Verification_Requests_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Verification_Requests_Bool_Exp>>>;
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

/** input type for incrementing integer column in table "verification_requests" */
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

/** order by max() on columns of table "verification_requests" */
export type Verification_Requests_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  expires?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  identifier?: Maybe<Order_By>;
  token?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
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

/** order by min() on columns of table "verification_requests" */
export type Verification_Requests_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  expires?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  identifier?: Maybe<Order_By>;
  token?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "verification_requests" */
export type Verification_Requests_Mutation_Response = {
  __typename?: 'verification_requests_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Verification_Requests>;
};

/** input type for inserting object relation for remote table "verification_requests" */
export type Verification_Requests_Obj_Rel_Insert_Input = {
  data: Verification_Requests_Insert_Input;
  on_conflict?: Maybe<Verification_Requests_On_Conflict>;
};

/** on conflict condition type for table "verification_requests" */
export type Verification_Requests_On_Conflict = {
  constraint: Verification_Requests_Constraint;
  update_columns: Array<Verification_Requests_Update_Column>;
  where?: Maybe<Verification_Requests_Bool_Exp>;
};

/** ordering options when selecting data from "verification_requests" */
export type Verification_Requests_Order_By = {
  created_at?: Maybe<Order_By>;
  expires?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  identifier?: Maybe<Order_By>;
  token?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: "verification_requests" */
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

/** order by stddev() on columns of table "verification_requests" */
export type Verification_Requests_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Verification_Requests_Stddev_Pop_Fields = {
  __typename?: 'verification_requests_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "verification_requests" */
export type Verification_Requests_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Verification_Requests_Stddev_Samp_Fields = {
  __typename?: 'verification_requests_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "verification_requests" */
export type Verification_Requests_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Verification_Requests_Sum_Fields = {
  __typename?: 'verification_requests_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "verification_requests" */
export type Verification_Requests_Sum_Order_By = {
  id?: Maybe<Order_By>;
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

/** order by var_pop() on columns of table "verification_requests" */
export type Verification_Requests_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Verification_Requests_Var_Samp_Fields = {
  __typename?: 'verification_requests_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "verification_requests" */
export type Verification_Requests_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Verification_Requests_Variance_Fields = {
  __typename?: 'verification_requests_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "verification_requests" */
export type Verification_Requests_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

export type ServerInsertActivitiesMutationVariables = Exact<{
  input: Array<Activities_Insert_Input>;
}>;


export type ServerInsertActivitiesMutation = (
  { __typename?: 'mutation_root' }
  & { insert_activities?: Maybe<(
    { __typename?: 'activities_mutation_response' }
    & { returning: Array<(
      { __typename?: 'activities' }
      & Pick<Activities, 'id'>
    )> }
  )> }
);

export type ServerFindGroupQueryVariables = Exact<{
  where?: Maybe<Groups_Bool_Exp>;
}>;


export type ServerFindGroupQuery = (
  { __typename?: 'query_root' }
  & { groups: Array<(
    { __typename?: 'groups' }
    & Pick<Groups, 'id' | 'name'>
  )> }
);

export type ServerFindGroupJoinRequestQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type ServerFindGroupJoinRequestQuery = (
  { __typename?: 'query_root' }
  & { group_join_requests_by_pk?: Maybe<(
    { __typename?: 'group_join_requests' }
    & Pick<Group_Join_Requests, 'id' | 'group_id' | 'user_id'>
  )> }
);

export type ServerFindJoinTokenQueryVariables = Exact<{
  where: Group_Join_Tokens_Bool_Exp;
}>;


export type ServerFindJoinTokenQuery = (
  { __typename?: 'query_root' }
  & { group_join_tokens: Array<(
    { __typename?: 'group_join_tokens' }
    & Pick<Group_Join_Tokens, 'id' | 'token'>
  )> }
);

export type ServerFindGroupMembersQueryVariables = Exact<{
  groupId: Scalars['uuid'];
  where?: Maybe<Group_Members_Bool_Exp>;
}>;


export type ServerFindGroupMembersQuery = (
  { __typename?: 'query_root' }
  & { groups_by_pk?: Maybe<(
    { __typename?: 'groups' }
    & { memberships: Array<(
      { __typename?: 'group_members' }
      & { user: (
        { __typename?: 'users' }
        & Pick<Users, 'id'>
      ) }
    )> }
  )> }
);

export type ServerInsertGroupJoinTokenMutationVariables = Exact<{
  input: Group_Join_Tokens_Insert_Input;
}>;


export type ServerInsertGroupJoinTokenMutation = (
  { __typename?: 'mutation_root' }
  & { insert_group_join_tokens_one?: Maybe<(
    { __typename?: 'group_join_tokens' }
    & Pick<Group_Join_Tokens, 'id' | 'group_id'>
  )> }
);

export type ServerInsertGroupMutationVariables = Exact<{
  input: Groups_Insert_Input;
}>;


export type ServerInsertGroupMutation = (
  { __typename?: 'mutation_root' }
  & { insert_groups_one?: Maybe<(
    { __typename?: 'groups' }
    & Pick<Groups, 'id'>
  )> }
);

export type ServerInsertGroupJoinRequestMutationVariables = Exact<{
  input: Group_Join_Requests_Insert_Input;
}>;


export type ServerInsertGroupJoinRequestMutation = (
  { __typename?: 'mutation_root' }
  & { insert_group_join_requests_one?: Maybe<(
    { __typename?: 'group_join_requests' }
    & Pick<Group_Join_Requests, 'group_id' | 'status'>
  )> }
);

export type ServerInsertGroupMemberMutationVariables = Exact<{
  input: Group_Members_Insert_Input;
}>;


export type ServerInsertGroupMemberMutation = (
  { __typename?: 'mutation_root' }
  & { insert_group_members_one?: Maybe<(
    { __typename?: 'group_members' }
    & Pick<Group_Members, 'id'>
  )> }
);

export type ServerUpdateGroupJoinRequestMutationVariables = Exact<{
  id: Scalars['uuid'];
  input: Group_Join_Requests_Set_Input;
}>;


export type ServerUpdateGroupJoinRequestMutation = (
  { __typename?: 'mutation_root' }
  & { update_group_join_requests_by_pk?: Maybe<(
    { __typename?: 'group_join_requests' }
    & Pick<Group_Join_Requests, 'id' | 'group_id'>
  )> }
);

export type ServerFetchThingDetailsQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type ServerFetchThingDetailsQuery = (
  { __typename?: 'query_root' }
  & { things_by_pk?: Maybe<(
    { __typename?: 'things' }
    & Pick<Things, 'id' | 'created_at'>
    & { owner: (
      { __typename?: 'users' }
      & Pick<Users, 'id' | 'name'>
    ), group_relations: Array<(
      { __typename?: 'group_thing' }
      & Pick<Group_Thing, 'id'>
      & { group: (
        { __typename?: 'groups' }
        & Pick<Groups, 'id' | 'public' | 'name'>
        & { memberships: Array<(
          { __typename?: 'group_members' }
          & Pick<Group_Members, 'role'>
          & { user: (
            { __typename?: 'users' }
            & Pick<Users, 'id'>
          ) }
        )> }
      ) }
    )>, images: Array<(
      { __typename?: 'thing_images' }
      & Pick<Thing_Images, 'id' | 'file_id' | 'order' | 'description'>
    )> }
  )> }
);

export type ServerUpdateThingMutationVariables = Exact<{
  id: Scalars['uuid'];
  input: Things_Insert_Input;
  deletedFileIds: Array<Scalars['uuid']>;
  deletedGroupIds: Array<Scalars['uuid']>;
}>;


export type ServerUpdateThingMutation = (
  { __typename?: 'mutation_root' }
  & { insert_things_one?: Maybe<(
    { __typename?: 'things' }
    & Pick<Things, 'id'>
  )>, delete_thing_images?: Maybe<(
    { __typename?: 'thing_images_mutation_response' }
    & Pick<Thing_Images_Mutation_Response, 'affected_rows'>
  )>, delete_group_thing?: Maybe<(
    { __typename?: 'group_thing_mutation_response' }
    & Pick<Group_Thing_Mutation_Response, 'affected_rows'>
  )> }
);

export type ServerUserCredentialsQueryVariables = Exact<{
  email: Scalars['String'];
}>;


export type ServerUserCredentialsQuery = (
  { __typename?: 'query_root' }
  & { users: Array<(
    { __typename?: 'users' }
    & Pick<Users, 'id' | 'password_hash'>
  )> }
);

export type ServerFindUserQueryVariables = Exact<{
  email?: Maybe<Scalars['String']>;
}>;


export type ServerFindUserQuery = (
  { __typename?: 'query_root' }
  & { users: Array<(
    { __typename?: 'users' }
    & Pick<Users, 'id' | 'email'>
  )> }
);

export type ServerInsertUserMutationVariables = Exact<{
  input: Users_Insert_Input;
}>;


export type ServerInsertUserMutation = (
  { __typename?: 'mutation_root' }
  & { insert_users_one?: Maybe<(
    { __typename?: 'users' }
    & Pick<Users, 'id'>
  )> }
);



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

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
  CreateGroupInput: CreateGroupInput;
  String: ResolverTypeWrapper<Scalars['String']>;
  CreateGroupResult: ResolverTypeWrapper<CreateGroupResult>;
  CreateJoinTokenInput: CreateJoinTokenInput;
  CreateJoinTokenResult: ResolverTypeWrapper<CreateJoinTokenResult>;
  CredentialsInput: CredentialsInput;
  HandleJoinRequestInput: HandleJoinRequestInput;
  HandleJoinRequestOutput: ResolverTypeWrapper<HandleJoinRequestOutput>;
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
  activity_verb_aggregate_order_by: Activity_Verb_Aggregate_Order_By;
  activity_verb_arr_rel_insert_input: Activity_Verb_Arr_Rel_Insert_Input;
  activity_verb_bool_exp: Activity_Verb_Bool_Exp;
  activity_verb_constraint: Activity_Verb_Constraint;
  activity_verb_enum: Activity_Verb_Enum;
  activity_verb_enum_comparison_exp: Activity_Verb_Enum_Comparison_Exp;
  activity_verb_insert_input: Activity_Verb_Insert_Input;
  activity_verb_max_fields: ResolverTypeWrapper<Activity_Verb_Max_Fields>;
  activity_verb_max_order_by: Activity_Verb_Max_Order_By;
  activity_verb_min_fields: ResolverTypeWrapper<Activity_Verb_Min_Fields>;
  activity_verb_min_order_by: Activity_Verb_Min_Order_By;
  activity_verb_mutation_response: ResolverTypeWrapper<Activity_Verb_Mutation_Response>;
  activity_verb_obj_rel_insert_input: Activity_Verb_Obj_Rel_Insert_Input;
  activity_verb_on_conflict: Activity_Verb_On_Conflict;
  activity_verb_order_by: Activity_Verb_Order_By;
  activity_verb_pk_columns_input: Activity_Verb_Pk_Columns_Input;
  activity_verb_select_column: Activity_Verb_Select_Column;
  activity_verb_set_input: Activity_Verb_Set_Input;
  activity_verb_update_column: Activity_Verb_Update_Column;
  create_group_input: Create_Group_Input;
  create_group_result: ResolverTypeWrapper<Create_Group_Result>;
  entities: ResolverTypeWrapper<Entities>;
  entities_aggregate: ResolverTypeWrapper<Entities_Aggregate>;
  entities_aggregate_fields: ResolverTypeWrapper<Entities_Aggregate_Fields>;
  entities_aggregate_order_by: Entities_Aggregate_Order_By;
  entities_arr_rel_insert_input: Entities_Arr_Rel_Insert_Input;
  entities_bool_exp: Entities_Bool_Exp;
  entities_constraint: Entities_Constraint;
  entities_insert_input: Entities_Insert_Input;
  entities_max_fields: ResolverTypeWrapper<Entities_Max_Fields>;
  entities_max_order_by: Entities_Max_Order_By;
  entities_min_fields: ResolverTypeWrapper<Entities_Min_Fields>;
  entities_min_order_by: Entities_Min_Order_By;
  entities_mutation_response: ResolverTypeWrapper<Entities_Mutation_Response>;
  entities_obj_rel_insert_input: Entities_Obj_Rel_Insert_Input;
  entities_on_conflict: Entities_On_Conflict;
  entities_order_by: Entities_Order_By;
  entities_pk_columns_input: Entities_Pk_Columns_Input;
  entities_select_column: Entities_Select_Column;
  entities_set_input: Entities_Set_Input;
  entities_update_column: Entities_Update_Column;
  file_uploads: ResolverTypeWrapper<File_Uploads>;
  file_uploads_aggregate: ResolverTypeWrapper<File_Uploads_Aggregate>;
  file_uploads_aggregate_fields: ResolverTypeWrapper<File_Uploads_Aggregate_Fields>;
  file_uploads_aggregate_order_by: File_Uploads_Aggregate_Order_By;
  file_uploads_arr_rel_insert_input: File_Uploads_Arr_Rel_Insert_Input;
  file_uploads_avg_fields: ResolverTypeWrapper<File_Uploads_Avg_Fields>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  file_uploads_avg_order_by: File_Uploads_Avg_Order_By;
  file_uploads_bool_exp: File_Uploads_Bool_Exp;
  file_uploads_constraint: File_Uploads_Constraint;
  file_uploads_inc_input: File_Uploads_Inc_Input;
  file_uploads_insert_input: File_Uploads_Insert_Input;
  file_uploads_max_fields: ResolverTypeWrapper<File_Uploads_Max_Fields>;
  file_uploads_max_order_by: File_Uploads_Max_Order_By;
  file_uploads_min_fields: ResolverTypeWrapper<File_Uploads_Min_Fields>;
  file_uploads_min_order_by: File_Uploads_Min_Order_By;
  file_uploads_mutation_response: ResolverTypeWrapper<File_Uploads_Mutation_Response>;
  file_uploads_obj_rel_insert_input: File_Uploads_Obj_Rel_Insert_Input;
  file_uploads_on_conflict: File_Uploads_On_Conflict;
  file_uploads_order_by: File_Uploads_Order_By;
  file_uploads_pk_columns_input: File_Uploads_Pk_Columns_Input;
  file_uploads_select_column: File_Uploads_Select_Column;
  file_uploads_set_input: File_Uploads_Set_Input;
  file_uploads_stddev_fields: ResolverTypeWrapper<File_Uploads_Stddev_Fields>;
  file_uploads_stddev_order_by: File_Uploads_Stddev_Order_By;
  file_uploads_stddev_pop_fields: ResolverTypeWrapper<File_Uploads_Stddev_Pop_Fields>;
  file_uploads_stddev_pop_order_by: File_Uploads_Stddev_Pop_Order_By;
  file_uploads_stddev_samp_fields: ResolverTypeWrapper<File_Uploads_Stddev_Samp_Fields>;
  file_uploads_stddev_samp_order_by: File_Uploads_Stddev_Samp_Order_By;
  file_uploads_sum_fields: ResolverTypeWrapper<File_Uploads_Sum_Fields>;
  file_uploads_sum_order_by: File_Uploads_Sum_Order_By;
  file_uploads_update_column: File_Uploads_Update_Column;
  file_uploads_var_pop_fields: ResolverTypeWrapper<File_Uploads_Var_Pop_Fields>;
  file_uploads_var_pop_order_by: File_Uploads_Var_Pop_Order_By;
  file_uploads_var_samp_fields: ResolverTypeWrapper<File_Uploads_Var_Samp_Fields>;
  file_uploads_var_samp_order_by: File_Uploads_Var_Samp_Order_By;
  file_uploads_variance_fields: ResolverTypeWrapper<File_Uploads_Variance_Fields>;
  file_uploads_variance_order_by: File_Uploads_Variance_Order_By;
  group_join_request_status: ResolverTypeWrapper<Group_Join_Request_Status>;
  group_join_request_status_aggregate: ResolverTypeWrapper<Group_Join_Request_Status_Aggregate>;
  group_join_request_status_aggregate_fields: ResolverTypeWrapper<Group_Join_Request_Status_Aggregate_Fields>;
  group_join_request_status_aggregate_order_by: Group_Join_Request_Status_Aggregate_Order_By;
  group_join_request_status_arr_rel_insert_input: Group_Join_Request_Status_Arr_Rel_Insert_Input;
  group_join_request_status_bool_exp: Group_Join_Request_Status_Bool_Exp;
  group_join_request_status_constraint: Group_Join_Request_Status_Constraint;
  group_join_request_status_enum: Group_Join_Request_Status_Enum;
  group_join_request_status_enum_comparison_exp: Group_Join_Request_Status_Enum_Comparison_Exp;
  group_join_request_status_insert_input: Group_Join_Request_Status_Insert_Input;
  group_join_request_status_max_fields: ResolverTypeWrapper<Group_Join_Request_Status_Max_Fields>;
  group_join_request_status_max_order_by: Group_Join_Request_Status_Max_Order_By;
  group_join_request_status_min_fields: ResolverTypeWrapper<Group_Join_Request_Status_Min_Fields>;
  group_join_request_status_min_order_by: Group_Join_Request_Status_Min_Order_By;
  group_join_request_status_mutation_response: ResolverTypeWrapper<Group_Join_Request_Status_Mutation_Response>;
  group_join_request_status_obj_rel_insert_input: Group_Join_Request_Status_Obj_Rel_Insert_Input;
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
  group_join_tokens_obj_rel_insert_input: Group_Join_Tokens_Obj_Rel_Insert_Input;
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
  group_role: ResolverTypeWrapper<Group_Role>;
  group_role_aggregate: ResolverTypeWrapper<Group_Role_Aggregate>;
  group_role_aggregate_fields: ResolverTypeWrapper<Group_Role_Aggregate_Fields>;
  group_role_aggregate_order_by: Group_Role_Aggregate_Order_By;
  group_role_arr_rel_insert_input: Group_Role_Arr_Rel_Insert_Input;
  group_role_bool_exp: Group_Role_Bool_Exp;
  group_role_constraint: Group_Role_Constraint;
  group_role_enum: Group_Role_Enum;
  group_role_enum_comparison_exp: Group_Role_Enum_Comparison_Exp;
  group_role_insert_input: Group_Role_Insert_Input;
  group_role_max_fields: ResolverTypeWrapper<Group_Role_Max_Fields>;
  group_role_max_order_by: Group_Role_Max_Order_By;
  group_role_min_fields: ResolverTypeWrapper<Group_Role_Min_Fields>;
  group_role_min_order_by: Group_Role_Min_Order_By;
  group_role_mutation_response: ResolverTypeWrapper<Group_Role_Mutation_Response>;
  group_role_obj_rel_insert_input: Group_Role_Obj_Rel_Insert_Input;
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
  groups_aggregate_order_by: Groups_Aggregate_Order_By;
  groups_arr_rel_insert_input: Groups_Arr_Rel_Insert_Input;
  groups_bool_exp: Groups_Bool_Exp;
  groups_constraint: Groups_Constraint;
  groups_insert_input: Groups_Insert_Input;
  groups_max_fields: ResolverTypeWrapper<Groups_Max_Fields>;
  groups_max_order_by: Groups_Max_Order_By;
  groups_min_fields: ResolverTypeWrapper<Groups_Min_Fields>;
  groups_min_order_by: Groups_Min_Order_By;
  groups_mutation_response: ResolverTypeWrapper<Groups_Mutation_Response>;
  groups_obj_rel_insert_input: Groups_Obj_Rel_Insert_Input;
  groups_on_conflict: Groups_On_Conflict;
  groups_order_by: Groups_Order_By;
  groups_pk_columns_input: Groups_Pk_Columns_Input;
  groups_select_column: Groups_Select_Column;
  groups_set_input: Groups_Set_Input;
  groups_update_column: Groups_Update_Column;
  json: ResolverTypeWrapper<Scalars['json']>;
  messages: ResolverTypeWrapper<Messages>;
  messages_aggregate: ResolverTypeWrapper<Messages_Aggregate>;
  messages_aggregate_fields: ResolverTypeWrapper<Messages_Aggregate_Fields>;
  messages_aggregate_order_by: Messages_Aggregate_Order_By;
  messages_arr_rel_insert_input: Messages_Arr_Rel_Insert_Input;
  messages_bool_exp: Messages_Bool_Exp;
  messages_constraint: Messages_Constraint;
  messages_insert_input: Messages_Insert_Input;
  messages_max_fields: ResolverTypeWrapper<Messages_Max_Fields>;
  messages_max_order_by: Messages_Max_Order_By;
  messages_min_fields: ResolverTypeWrapper<Messages_Min_Fields>;
  messages_min_order_by: Messages_Min_Order_By;
  messages_mutation_response: ResolverTypeWrapper<Messages_Mutation_Response>;
  messages_obj_rel_insert_input: Messages_Obj_Rel_Insert_Input;
  messages_on_conflict: Messages_On_Conflict;
  messages_order_by: Messages_Order_By;
  messages_pk_columns_input: Messages_Pk_Columns_Input;
  messages_select_column: Messages_Select_Column;
  messages_set_input: Messages_Set_Input;
  messages_update_column: Messages_Update_Column;
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
  notifications_obj_rel_insert_input: Notifications_Obj_Rel_Insert_Input;
  notifications_on_conflict: Notifications_On_Conflict;
  notifications_order_by: Notifications_Order_By;
  notifications_pk_columns_input: Notifications_Pk_Columns_Input;
  notifications_select_column: Notifications_Select_Column;
  notifications_set_input: Notifications_Set_Input;
  notifications_update_column: Notifications_Update_Column;
  order_by: Order_By;
  query_root: ResolverTypeWrapper<{}>;
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
  thing_type_aggregate_order_by: Thing_Type_Aggregate_Order_By;
  thing_type_arr_rel_insert_input: Thing_Type_Arr_Rel_Insert_Input;
  thing_type_bool_exp: Thing_Type_Bool_Exp;
  thing_type_constraint: Thing_Type_Constraint;
  thing_type_enum: Thing_Type_Enum;
  thing_type_enum_comparison_exp: Thing_Type_Enum_Comparison_Exp;
  thing_type_insert_input: Thing_Type_Insert_Input;
  thing_type_max_fields: ResolverTypeWrapper<Thing_Type_Max_Fields>;
  thing_type_max_order_by: Thing_Type_Max_Order_By;
  thing_type_min_fields: ResolverTypeWrapper<Thing_Type_Min_Fields>;
  thing_type_min_order_by: Thing_Type_Min_Order_By;
  thing_type_mutation_response: ResolverTypeWrapper<Thing_Type_Mutation_Response>;
  thing_type_obj_rel_insert_input: Thing_Type_Obj_Rel_Insert_Input;
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
  user_private_aggregate_order_by: User_Private_Aggregate_Order_By;
  user_private_arr_rel_insert_input: User_Private_Arr_Rel_Insert_Input;
  user_private_bool_exp: User_Private_Bool_Exp;
  user_private_insert_input: User_Private_Insert_Input;
  user_private_max_fields: ResolverTypeWrapper<User_Private_Max_Fields>;
  user_private_max_order_by: User_Private_Max_Order_By;
  user_private_min_fields: ResolverTypeWrapper<User_Private_Min_Fields>;
  user_private_min_order_by: User_Private_Min_Order_By;
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
  verification_requests_aggregate_order_by: Verification_Requests_Aggregate_Order_By;
  verification_requests_arr_rel_insert_input: Verification_Requests_Arr_Rel_Insert_Input;
  verification_requests_avg_fields: ResolverTypeWrapper<Verification_Requests_Avg_Fields>;
  verification_requests_avg_order_by: Verification_Requests_Avg_Order_By;
  verification_requests_bool_exp: Verification_Requests_Bool_Exp;
  verification_requests_constraint: Verification_Requests_Constraint;
  verification_requests_inc_input: Verification_Requests_Inc_Input;
  verification_requests_insert_input: Verification_Requests_Insert_Input;
  verification_requests_max_fields: ResolverTypeWrapper<Verification_Requests_Max_Fields>;
  verification_requests_max_order_by: Verification_Requests_Max_Order_By;
  verification_requests_min_fields: ResolverTypeWrapper<Verification_Requests_Min_Fields>;
  verification_requests_min_order_by: Verification_Requests_Min_Order_By;
  verification_requests_mutation_response: ResolverTypeWrapper<Verification_Requests_Mutation_Response>;
  verification_requests_obj_rel_insert_input: Verification_Requests_Obj_Rel_Insert_Input;
  verification_requests_on_conflict: Verification_Requests_On_Conflict;
  verification_requests_order_by: Verification_Requests_Order_By;
  verification_requests_pk_columns_input: Verification_Requests_Pk_Columns_Input;
  verification_requests_select_column: Verification_Requests_Select_Column;
  verification_requests_set_input: Verification_Requests_Set_Input;
  verification_requests_stddev_fields: ResolverTypeWrapper<Verification_Requests_Stddev_Fields>;
  verification_requests_stddev_order_by: Verification_Requests_Stddev_Order_By;
  verification_requests_stddev_pop_fields: ResolverTypeWrapper<Verification_Requests_Stddev_Pop_Fields>;
  verification_requests_stddev_pop_order_by: Verification_Requests_Stddev_Pop_Order_By;
  verification_requests_stddev_samp_fields: ResolverTypeWrapper<Verification_Requests_Stddev_Samp_Fields>;
  verification_requests_stddev_samp_order_by: Verification_Requests_Stddev_Samp_Order_By;
  verification_requests_sum_fields: ResolverTypeWrapper<Verification_Requests_Sum_Fields>;
  verification_requests_sum_order_by: Verification_Requests_Sum_Order_By;
  verification_requests_update_column: Verification_Requests_Update_Column;
  verification_requests_var_pop_fields: ResolverTypeWrapper<Verification_Requests_Var_Pop_Fields>;
  verification_requests_var_pop_order_by: Verification_Requests_Var_Pop_Order_By;
  verification_requests_var_samp_fields: ResolverTypeWrapper<Verification_Requests_Var_Samp_Fields>;
  verification_requests_var_samp_order_by: Verification_Requests_Var_Samp_Order_By;
  verification_requests_variance_fields: ResolverTypeWrapper<Verification_Requests_Variance_Fields>;
  verification_requests_variance_order_by: Verification_Requests_Variance_Order_By;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean_comparison_exp: Boolean_Comparison_Exp;
  Boolean: Scalars['Boolean'];
  CreateGroupInput: CreateGroupInput;
  String: Scalars['String'];
  CreateGroupResult: CreateGroupResult;
  CreateJoinTokenInput: CreateJoinTokenInput;
  CreateJoinTokenResult: CreateJoinTokenResult;
  CredentialsInput: CredentialsInput;
  HandleJoinRequestInput: HandleJoinRequestInput;
  HandleJoinRequestOutput: HandleJoinRequestOutput;
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
  activity_verb_aggregate_order_by: Activity_Verb_Aggregate_Order_By;
  activity_verb_arr_rel_insert_input: Activity_Verb_Arr_Rel_Insert_Input;
  activity_verb_bool_exp: Activity_Verb_Bool_Exp;
  activity_verb_enum_comparison_exp: Activity_Verb_Enum_Comparison_Exp;
  activity_verb_insert_input: Activity_Verb_Insert_Input;
  activity_verb_max_fields: Activity_Verb_Max_Fields;
  activity_verb_max_order_by: Activity_Verb_Max_Order_By;
  activity_verb_min_fields: Activity_Verb_Min_Fields;
  activity_verb_min_order_by: Activity_Verb_Min_Order_By;
  activity_verb_mutation_response: Activity_Verb_Mutation_Response;
  activity_verb_obj_rel_insert_input: Activity_Verb_Obj_Rel_Insert_Input;
  activity_verb_on_conflict: Activity_Verb_On_Conflict;
  activity_verb_order_by: Activity_Verb_Order_By;
  activity_verb_pk_columns_input: Activity_Verb_Pk_Columns_Input;
  activity_verb_set_input: Activity_Verb_Set_Input;
  create_group_input: Create_Group_Input;
  create_group_result: Create_Group_Result;
  entities: Entities;
  entities_aggregate: Entities_Aggregate;
  entities_aggregate_fields: Entities_Aggregate_Fields;
  entities_aggregate_order_by: Entities_Aggregate_Order_By;
  entities_arr_rel_insert_input: Entities_Arr_Rel_Insert_Input;
  entities_bool_exp: Entities_Bool_Exp;
  entities_insert_input: Entities_Insert_Input;
  entities_max_fields: Entities_Max_Fields;
  entities_max_order_by: Entities_Max_Order_By;
  entities_min_fields: Entities_Min_Fields;
  entities_min_order_by: Entities_Min_Order_By;
  entities_mutation_response: Entities_Mutation_Response;
  entities_obj_rel_insert_input: Entities_Obj_Rel_Insert_Input;
  entities_on_conflict: Entities_On_Conflict;
  entities_order_by: Entities_Order_By;
  entities_pk_columns_input: Entities_Pk_Columns_Input;
  entities_set_input: Entities_Set_Input;
  file_uploads: File_Uploads;
  file_uploads_aggregate: File_Uploads_Aggregate;
  file_uploads_aggregate_fields: File_Uploads_Aggregate_Fields;
  file_uploads_aggregate_order_by: File_Uploads_Aggregate_Order_By;
  file_uploads_arr_rel_insert_input: File_Uploads_Arr_Rel_Insert_Input;
  file_uploads_avg_fields: File_Uploads_Avg_Fields;
  Float: Scalars['Float'];
  file_uploads_avg_order_by: File_Uploads_Avg_Order_By;
  file_uploads_bool_exp: File_Uploads_Bool_Exp;
  file_uploads_inc_input: File_Uploads_Inc_Input;
  file_uploads_insert_input: File_Uploads_Insert_Input;
  file_uploads_max_fields: File_Uploads_Max_Fields;
  file_uploads_max_order_by: File_Uploads_Max_Order_By;
  file_uploads_min_fields: File_Uploads_Min_Fields;
  file_uploads_min_order_by: File_Uploads_Min_Order_By;
  file_uploads_mutation_response: File_Uploads_Mutation_Response;
  file_uploads_obj_rel_insert_input: File_Uploads_Obj_Rel_Insert_Input;
  file_uploads_on_conflict: File_Uploads_On_Conflict;
  file_uploads_order_by: File_Uploads_Order_By;
  file_uploads_pk_columns_input: File_Uploads_Pk_Columns_Input;
  file_uploads_set_input: File_Uploads_Set_Input;
  file_uploads_stddev_fields: File_Uploads_Stddev_Fields;
  file_uploads_stddev_order_by: File_Uploads_Stddev_Order_By;
  file_uploads_stddev_pop_fields: File_Uploads_Stddev_Pop_Fields;
  file_uploads_stddev_pop_order_by: File_Uploads_Stddev_Pop_Order_By;
  file_uploads_stddev_samp_fields: File_Uploads_Stddev_Samp_Fields;
  file_uploads_stddev_samp_order_by: File_Uploads_Stddev_Samp_Order_By;
  file_uploads_sum_fields: File_Uploads_Sum_Fields;
  file_uploads_sum_order_by: File_Uploads_Sum_Order_By;
  file_uploads_var_pop_fields: File_Uploads_Var_Pop_Fields;
  file_uploads_var_pop_order_by: File_Uploads_Var_Pop_Order_By;
  file_uploads_var_samp_fields: File_Uploads_Var_Samp_Fields;
  file_uploads_var_samp_order_by: File_Uploads_Var_Samp_Order_By;
  file_uploads_variance_fields: File_Uploads_Variance_Fields;
  file_uploads_variance_order_by: File_Uploads_Variance_Order_By;
  group_join_request_status: Group_Join_Request_Status;
  group_join_request_status_aggregate: Group_Join_Request_Status_Aggregate;
  group_join_request_status_aggregate_fields: Group_Join_Request_Status_Aggregate_Fields;
  group_join_request_status_aggregate_order_by: Group_Join_Request_Status_Aggregate_Order_By;
  group_join_request_status_arr_rel_insert_input: Group_Join_Request_Status_Arr_Rel_Insert_Input;
  group_join_request_status_bool_exp: Group_Join_Request_Status_Bool_Exp;
  group_join_request_status_enum_comparison_exp: Group_Join_Request_Status_Enum_Comparison_Exp;
  group_join_request_status_insert_input: Group_Join_Request_Status_Insert_Input;
  group_join_request_status_max_fields: Group_Join_Request_Status_Max_Fields;
  group_join_request_status_max_order_by: Group_Join_Request_Status_Max_Order_By;
  group_join_request_status_min_fields: Group_Join_Request_Status_Min_Fields;
  group_join_request_status_min_order_by: Group_Join_Request_Status_Min_Order_By;
  group_join_request_status_mutation_response: Group_Join_Request_Status_Mutation_Response;
  group_join_request_status_obj_rel_insert_input: Group_Join_Request_Status_Obj_Rel_Insert_Input;
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
  group_join_tokens_obj_rel_insert_input: Group_Join_Tokens_Obj_Rel_Insert_Input;
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
  group_role: Group_Role;
  group_role_aggregate: Group_Role_Aggregate;
  group_role_aggregate_fields: Group_Role_Aggregate_Fields;
  group_role_aggregate_order_by: Group_Role_Aggregate_Order_By;
  group_role_arr_rel_insert_input: Group_Role_Arr_Rel_Insert_Input;
  group_role_bool_exp: Group_Role_Bool_Exp;
  group_role_enum_comparison_exp: Group_Role_Enum_Comparison_Exp;
  group_role_insert_input: Group_Role_Insert_Input;
  group_role_max_fields: Group_Role_Max_Fields;
  group_role_max_order_by: Group_Role_Max_Order_By;
  group_role_min_fields: Group_Role_Min_Fields;
  group_role_min_order_by: Group_Role_Min_Order_By;
  group_role_mutation_response: Group_Role_Mutation_Response;
  group_role_obj_rel_insert_input: Group_Role_Obj_Rel_Insert_Input;
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
  groups_aggregate_order_by: Groups_Aggregate_Order_By;
  groups_arr_rel_insert_input: Groups_Arr_Rel_Insert_Input;
  groups_bool_exp: Groups_Bool_Exp;
  groups_insert_input: Groups_Insert_Input;
  groups_max_fields: Groups_Max_Fields;
  groups_max_order_by: Groups_Max_Order_By;
  groups_min_fields: Groups_Min_Fields;
  groups_min_order_by: Groups_Min_Order_By;
  groups_mutation_response: Groups_Mutation_Response;
  groups_obj_rel_insert_input: Groups_Obj_Rel_Insert_Input;
  groups_on_conflict: Groups_On_Conflict;
  groups_order_by: Groups_Order_By;
  groups_pk_columns_input: Groups_Pk_Columns_Input;
  groups_set_input: Groups_Set_Input;
  json: Scalars['json'];
  messages: Messages;
  messages_aggregate: Messages_Aggregate;
  messages_aggregate_fields: Messages_Aggregate_Fields;
  messages_aggregate_order_by: Messages_Aggregate_Order_By;
  messages_arr_rel_insert_input: Messages_Arr_Rel_Insert_Input;
  messages_bool_exp: Messages_Bool_Exp;
  messages_insert_input: Messages_Insert_Input;
  messages_max_fields: Messages_Max_Fields;
  messages_max_order_by: Messages_Max_Order_By;
  messages_min_fields: Messages_Min_Fields;
  messages_min_order_by: Messages_Min_Order_By;
  messages_mutation_response: Messages_Mutation_Response;
  messages_obj_rel_insert_input: Messages_Obj_Rel_Insert_Input;
  messages_on_conflict: Messages_On_Conflict;
  messages_order_by: Messages_Order_By;
  messages_pk_columns_input: Messages_Pk_Columns_Input;
  messages_set_input: Messages_Set_Input;
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
  notifications_obj_rel_insert_input: Notifications_Obj_Rel_Insert_Input;
  notifications_on_conflict: Notifications_On_Conflict;
  notifications_order_by: Notifications_Order_By;
  notifications_pk_columns_input: Notifications_Pk_Columns_Input;
  notifications_set_input: Notifications_Set_Input;
  query_root: {};
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
  thing_type_aggregate_order_by: Thing_Type_Aggregate_Order_By;
  thing_type_arr_rel_insert_input: Thing_Type_Arr_Rel_Insert_Input;
  thing_type_bool_exp: Thing_Type_Bool_Exp;
  thing_type_enum_comparison_exp: Thing_Type_Enum_Comparison_Exp;
  thing_type_insert_input: Thing_Type_Insert_Input;
  thing_type_max_fields: Thing_Type_Max_Fields;
  thing_type_max_order_by: Thing_Type_Max_Order_By;
  thing_type_min_fields: Thing_Type_Min_Fields;
  thing_type_min_order_by: Thing_Type_Min_Order_By;
  thing_type_mutation_response: Thing_Type_Mutation_Response;
  thing_type_obj_rel_insert_input: Thing_Type_Obj_Rel_Insert_Input;
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
  user_private_aggregate_order_by: User_Private_Aggregate_Order_By;
  user_private_arr_rel_insert_input: User_Private_Arr_Rel_Insert_Input;
  user_private_bool_exp: User_Private_Bool_Exp;
  user_private_insert_input: User_Private_Insert_Input;
  user_private_max_fields: User_Private_Max_Fields;
  user_private_max_order_by: User_Private_Max_Order_By;
  user_private_min_fields: User_Private_Min_Fields;
  user_private_min_order_by: User_Private_Min_Order_By;
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
  verification_requests_aggregate_order_by: Verification_Requests_Aggregate_Order_By;
  verification_requests_arr_rel_insert_input: Verification_Requests_Arr_Rel_Insert_Input;
  verification_requests_avg_fields: Verification_Requests_Avg_Fields;
  verification_requests_avg_order_by: Verification_Requests_Avg_Order_By;
  verification_requests_bool_exp: Verification_Requests_Bool_Exp;
  verification_requests_inc_input: Verification_Requests_Inc_Input;
  verification_requests_insert_input: Verification_Requests_Insert_Input;
  verification_requests_max_fields: Verification_Requests_Max_Fields;
  verification_requests_max_order_by: Verification_Requests_Max_Order_By;
  verification_requests_min_fields: Verification_Requests_Min_Fields;
  verification_requests_min_order_by: Verification_Requests_Min_Order_By;
  verification_requests_mutation_response: Verification_Requests_Mutation_Response;
  verification_requests_obj_rel_insert_input: Verification_Requests_Obj_Rel_Insert_Input;
  verification_requests_on_conflict: Verification_Requests_On_Conflict;
  verification_requests_order_by: Verification_Requests_Order_By;
  verification_requests_pk_columns_input: Verification_Requests_Pk_Columns_Input;
  verification_requests_set_input: Verification_Requests_Set_Input;
  verification_requests_stddev_fields: Verification_Requests_Stddev_Fields;
  verification_requests_stddev_order_by: Verification_Requests_Stddev_Order_By;
  verification_requests_stddev_pop_fields: Verification_Requests_Stddev_Pop_Fields;
  verification_requests_stddev_pop_order_by: Verification_Requests_Stddev_Pop_Order_By;
  verification_requests_stddev_samp_fields: Verification_Requests_Stddev_Samp_Fields;
  verification_requests_stddev_samp_order_by: Verification_Requests_Stddev_Samp_Order_By;
  verification_requests_sum_fields: Verification_Requests_Sum_Fields;
  verification_requests_sum_order_by: Verification_Requests_Sum_Order_By;
  verification_requests_var_pop_fields: Verification_Requests_Var_Pop_Fields;
  verification_requests_var_pop_order_by: Verification_Requests_Var_Pop_Order_By;
  verification_requests_var_samp_fields: Verification_Requests_Var_Samp_Fields;
  verification_requests_var_samp_order_by: Verification_Requests_Var_Samp_Order_By;
  verification_requests_variance_fields: Verification_Requests_Variance_Fields;
  verification_requests_variance_order_by: Verification_Requests_Variance_Order_By;
};

export type CreateGroupResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateGroupResult'] = ResolversParentTypes['CreateGroupResult']> = {
  group?: Resolver<Maybe<ResolversTypes['groups']>, ParentType, ContextType>;
  group_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateJoinTokenResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateJoinTokenResult'] = ResolversParentTypes['CreateJoinTokenResult']> = {
  group?: Resolver<Maybe<ResolversTypes['groups']>, ParentType, ContextType>;
  group_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  join_token?: Resolver<Maybe<ResolversTypes['group_join_tokens']>, ParentType, ContextType>;
  join_token_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HandleJoinRequestOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['HandleJoinRequestOutput'] = ResolversParentTypes['HandleJoinRequestOutput']> = {
  join_request_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HandleJoinRequestResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['HandleJoinRequestResult'] = ResolversParentTypes['HandleJoinRequestResult']> = {
  join_request?: Resolver<Maybe<ResolversTypes['group_join_requests']>, ParentType, ContextType>;
  join_request_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type JoinGroupResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['JoinGroupResult'] = ResolversParentTypes['JoinGroupResult']> = {
  group?: Resolver<Maybe<ResolversTypes['groups']>, ParentType, ContextType>;
  group_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['users']>, ParentType, ContextType>;
  user_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RegistrationResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['RegistrationResult'] = ResolversParentTypes['RegistrationResult']> = {
  user?: Resolver<Maybe<ResolversTypes['users']>, ParentType, ContextType>;
  user_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RequestJoinGroupResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['RequestJoinGroupResult'] = ResolversParentTypes['RequestJoinGroupResult']> = {
  group?: Resolver<Maybe<ResolversTypes['groups']>, ParentType, ContextType>;
  group_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['users']>, ParentType, ContextType>;
  user_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateThingResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateThingResult'] = ResolversParentTypes['UpdateThingResult']> = {
  thing?: Resolver<Maybe<ResolversTypes['things']>, ParentType, ContextType>;
  thing_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ActivitiesResolvers<ContextType = any, ParentType extends ResolversParentTypes['activities'] = ResolversParentTypes['activities']> = {
  actor?: Resolver<Maybe<ResolversTypes['users']>, ParentType, ContextType>;
  actor_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  entity?: Resolver<ResolversTypes['entities'], ParentType, ContextType>;
  entity_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
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
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<Activities_Aggregate_FieldsCountArgs, never>>;
  max?: Resolver<Maybe<ResolversTypes['activities_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['activities_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Activities_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['activities_max_fields'] = ResolversParentTypes['activities_max_fields']> = {
  actor_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  entity_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  secondary_entity_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Activities_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['activities_min_fields'] = ResolversParentTypes['activities_min_fields']> = {
  actor_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  entity_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
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
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<Activity_Verb_Aggregate_FieldsCountArgs, never>>;
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

export type Create_Group_ResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['create_group_result'] = ResolversParentTypes['create_group_result']> = {
  group_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntitiesResolvers<ContextType = any, ParentType extends ResolversParentTypes['entities'] = ResolversParentTypes['entities']> = {
  group?: Resolver<Maybe<ResolversTypes['groups']>, ParentType, ContextType>;
  group_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  group_join_request?: Resolver<Maybe<ResolversTypes['group_join_requests']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
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
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<Entities_Aggregate_FieldsCountArgs, never>>;
  max?: Resolver<Maybe<ResolversTypes['entities_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['entities_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Entities_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['entities_max_fields'] = ResolversParentTypes['entities_max_fields']> = {
  group_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  join_request_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  thing_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Entities_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['entities_min_fields'] = ResolversParentTypes['entities_min_fields']> = {
  group_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
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

export type File_UploadsResolvers<ContextType = any, ParentType extends ResolversParentTypes['file_uploads'] = ResolversParentTypes['file_uploads']> = {
  created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  mime_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  owner?: Resolver<Maybe<ResolversTypes['users']>, ParentType, ContextType>;
  owner_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  size?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type File_Uploads_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['file_uploads_aggregate'] = ResolversParentTypes['file_uploads_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['file_uploads_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['file_uploads']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type File_Uploads_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['file_uploads_aggregate_fields'] = ResolversParentTypes['file_uploads_aggregate_fields']> = {
  avg?: Resolver<Maybe<ResolversTypes['file_uploads_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<File_Uploads_Aggregate_FieldsCountArgs, never>>;
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
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<Group_Join_Request_Status_Aggregate_FieldsCountArgs, never>>;
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
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<Group_Join_Requests_Aggregate_FieldsCountArgs, never>>;
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
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<Group_Join_Tokens_Aggregate_FieldsCountArgs, never>>;
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
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<Group_Members_Aggregate_FieldsCountArgs, never>>;
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
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<Group_Role_Aggregate_FieldsCountArgs, never>>;
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
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<Group_Thing_Aggregate_FieldsCountArgs, never>>;
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
  slug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
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
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<Groups_Aggregate_FieldsCountArgs, never>>;
  max?: Resolver<Maybe<ResolversTypes['groups_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['groups_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Groups_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['groups_max_fields'] = ResolversParentTypes['groups_max_fields']> = {
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  slug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Groups_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['groups_min_fields'] = ResolversParentTypes['groups_min_fields']> = {
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  slug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Groups_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['groups_mutation_response'] = ResolversParentTypes['groups_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['groups']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['json'], any> {
  name: 'json';
}

export type MessagesResolvers<ContextType = any, ParentType extends ResolversParentTypes['messages'] = ResolversParentTypes['messages']> = {
  created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  receiver_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  sender_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Messages_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['messages_aggregate'] = ResolversParentTypes['messages_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['messages_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['messages']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Messages_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['messages_aggregate_fields'] = ResolversParentTypes['messages_aggregate_fields']> = {
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<Messages_Aggregate_FieldsCountArgs, never>>;
  max?: Resolver<Maybe<ResolversTypes['messages_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['messages_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Messages_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['messages_max_fields'] = ResolversParentTypes['messages_max_fields']> = {
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  receiver_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  sender_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Messages_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['messages_min_fields'] = ResolversParentTypes['messages_min_fields']> = {
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  receiver_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  sender_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Messages_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['messages_mutation_response'] = ResolversParentTypes['messages_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['messages']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Mutation_RootResolvers<ContextType = any, ParentType extends ResolversParentTypes['mutation_root'] = ResolversParentTypes['mutation_root']> = {
  createGroup?: Resolver<ResolversTypes['CreateGroupResult'], ParentType, ContextType, RequireFields<Mutation_RootCreateGroupArgs, 'input'>>;
  createJoinToken?: Resolver<Maybe<ResolversTypes['CreateJoinTokenResult']>, ParentType, ContextType, RequireFields<Mutation_RootCreateJoinTokenArgs, 'input'>>;
  delete_activities?: Resolver<Maybe<ResolversTypes['activities_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_ActivitiesArgs, 'where'>>;
  delete_activities_by_pk?: Resolver<Maybe<ResolversTypes['activities']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Activities_By_PkArgs, 'id'>>;
  delete_activity_verb?: Resolver<Maybe<ResolversTypes['activity_verb_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Activity_VerbArgs, 'where'>>;
  delete_activity_verb_by_pk?: Resolver<Maybe<ResolversTypes['activity_verb']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Activity_Verb_By_PkArgs, 'value'>>;
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
  delete_group_role?: Resolver<Maybe<ResolversTypes['group_role_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Group_RoleArgs, 'where'>>;
  delete_group_role_by_pk?: Resolver<Maybe<ResolversTypes['group_role']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Group_Role_By_PkArgs, 'value'>>;
  delete_group_thing?: Resolver<Maybe<ResolversTypes['group_thing_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Group_ThingArgs, 'where'>>;
  delete_group_thing_by_pk?: Resolver<Maybe<ResolversTypes['group_thing']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Group_Thing_By_PkArgs, 'id'>>;
  delete_groups?: Resolver<Maybe<ResolversTypes['groups_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_GroupsArgs, 'where'>>;
  delete_groups_by_pk?: Resolver<Maybe<ResolversTypes['groups']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Groups_By_PkArgs, 'id'>>;
  delete_messages?: Resolver<Maybe<ResolversTypes['messages_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_MessagesArgs, 'where'>>;
  delete_messages_by_pk?: Resolver<Maybe<ResolversTypes['messages']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Messages_By_PkArgs, 'id'>>;
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
  insert_group_role?: Resolver<Maybe<ResolversTypes['group_role_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Group_RoleArgs, 'objects'>>;
  insert_group_role_one?: Resolver<Maybe<ResolversTypes['group_role']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Group_Role_OneArgs, 'object'>>;
  insert_group_thing?: Resolver<Maybe<ResolversTypes['group_thing_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Group_ThingArgs, 'objects'>>;
  insert_group_thing_one?: Resolver<Maybe<ResolversTypes['group_thing']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Group_Thing_OneArgs, 'object'>>;
  insert_groups?: Resolver<Maybe<ResolversTypes['groups_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_GroupsArgs, 'objects'>>;
  insert_groups_one?: Resolver<Maybe<ResolversTypes['groups']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Groups_OneArgs, 'object'>>;
  insert_messages?: Resolver<Maybe<ResolversTypes['messages_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_MessagesArgs, 'objects'>>;
  insert_messages_one?: Resolver<Maybe<ResolversTypes['messages']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Messages_OneArgs, 'object'>>;
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
  update_group_role?: Resolver<Maybe<ResolversTypes['group_role_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Group_RoleArgs, 'where'>>;
  update_group_role_by_pk?: Resolver<Maybe<ResolversTypes['group_role']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Group_Role_By_PkArgs, 'pk_columns'>>;
  update_group_thing?: Resolver<Maybe<ResolversTypes['group_thing_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Group_ThingArgs, 'where'>>;
  update_group_thing_by_pk?: Resolver<Maybe<ResolversTypes['group_thing']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Group_Thing_By_PkArgs, 'pk_columns'>>;
  update_groups?: Resolver<Maybe<ResolversTypes['groups_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_GroupsArgs, 'where'>>;
  update_groups_by_pk?: Resolver<Maybe<ResolversTypes['groups']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Groups_By_PkArgs, 'pk_columns'>>;
  update_messages?: Resolver<Maybe<ResolversTypes['messages_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_MessagesArgs, 'where'>>;
  update_messages_by_pk?: Resolver<Maybe<ResolversTypes['messages']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Messages_By_PkArgs, 'pk_columns'>>;
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
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<Notifications_Aggregate_FieldsCountArgs, never>>;
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
  group_role?: Resolver<Array<ResolversTypes['group_role']>, ParentType, ContextType, RequireFields<Query_RootGroup_RoleArgs, never>>;
  group_role_aggregate?: Resolver<ResolversTypes['group_role_aggregate'], ParentType, ContextType, RequireFields<Query_RootGroup_Role_AggregateArgs, never>>;
  group_role_by_pk?: Resolver<Maybe<ResolversTypes['group_role']>, ParentType, ContextType, RequireFields<Query_RootGroup_Role_By_PkArgs, 'value'>>;
  group_thing?: Resolver<Array<ResolversTypes['group_thing']>, ParentType, ContextType, RequireFields<Query_RootGroup_ThingArgs, never>>;
  group_thing_aggregate?: Resolver<ResolversTypes['group_thing_aggregate'], ParentType, ContextType, RequireFields<Query_RootGroup_Thing_AggregateArgs, never>>;
  group_thing_by_pk?: Resolver<Maybe<ResolversTypes['group_thing']>, ParentType, ContextType, RequireFields<Query_RootGroup_Thing_By_PkArgs, 'id'>>;
  groups?: Resolver<Array<ResolversTypes['groups']>, ParentType, ContextType, RequireFields<Query_RootGroupsArgs, never>>;
  groups_aggregate?: Resolver<ResolversTypes['groups_aggregate'], ParentType, ContextType, RequireFields<Query_RootGroups_AggregateArgs, never>>;
  groups_by_pk?: Resolver<Maybe<ResolversTypes['groups']>, ParentType, ContextType, RequireFields<Query_RootGroups_By_PkArgs, 'id'>>;
  messages?: Resolver<Array<ResolversTypes['messages']>, ParentType, ContextType, RequireFields<Query_RootMessagesArgs, never>>;
  messages_aggregate?: Resolver<ResolversTypes['messages_aggregate'], ParentType, ContextType, RequireFields<Query_RootMessages_AggregateArgs, never>>;
  messages_by_pk?: Resolver<Maybe<ResolversTypes['messages']>, ParentType, ContextType, RequireFields<Query_RootMessages_By_PkArgs, 'id'>>;
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

export type Subscription_RootResolvers<ContextType = any, ParentType extends ResolversParentTypes['subscription_root'] = ResolversParentTypes['subscription_root']> = {
  activities?: SubscriptionResolver<Array<ResolversTypes['activities']>, "activities", ParentType, ContextType, RequireFields<Subscription_RootActivitiesArgs, never>>;
  activities_aggregate?: SubscriptionResolver<ResolversTypes['activities_aggregate'], "activities_aggregate", ParentType, ContextType, RequireFields<Subscription_RootActivities_AggregateArgs, never>>;
  activities_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['activities']>, "activities_by_pk", ParentType, ContextType, RequireFields<Subscription_RootActivities_By_PkArgs, 'id'>>;
  activity_verb?: SubscriptionResolver<Array<ResolversTypes['activity_verb']>, "activity_verb", ParentType, ContextType, RequireFields<Subscription_RootActivity_VerbArgs, never>>;
  activity_verb_aggregate?: SubscriptionResolver<ResolversTypes['activity_verb_aggregate'], "activity_verb_aggregate", ParentType, ContextType, RequireFields<Subscription_RootActivity_Verb_AggregateArgs, never>>;
  activity_verb_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['activity_verb']>, "activity_verb_by_pk", ParentType, ContextType, RequireFields<Subscription_RootActivity_Verb_By_PkArgs, 'value'>>;
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
  group_role?: SubscriptionResolver<Array<ResolversTypes['group_role']>, "group_role", ParentType, ContextType, RequireFields<Subscription_RootGroup_RoleArgs, never>>;
  group_role_aggregate?: SubscriptionResolver<ResolversTypes['group_role_aggregate'], "group_role_aggregate", ParentType, ContextType, RequireFields<Subscription_RootGroup_Role_AggregateArgs, never>>;
  group_role_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['group_role']>, "group_role_by_pk", ParentType, ContextType, RequireFields<Subscription_RootGroup_Role_By_PkArgs, 'value'>>;
  group_thing?: SubscriptionResolver<Array<ResolversTypes['group_thing']>, "group_thing", ParentType, ContextType, RequireFields<Subscription_RootGroup_ThingArgs, never>>;
  group_thing_aggregate?: SubscriptionResolver<ResolversTypes['group_thing_aggregate'], "group_thing_aggregate", ParentType, ContextType, RequireFields<Subscription_RootGroup_Thing_AggregateArgs, never>>;
  group_thing_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['group_thing']>, "group_thing_by_pk", ParentType, ContextType, RequireFields<Subscription_RootGroup_Thing_By_PkArgs, 'id'>>;
  groups?: SubscriptionResolver<Array<ResolversTypes['groups']>, "groups", ParentType, ContextType, RequireFields<Subscription_RootGroupsArgs, never>>;
  groups_aggregate?: SubscriptionResolver<ResolversTypes['groups_aggregate'], "groups_aggregate", ParentType, ContextType, RequireFields<Subscription_RootGroups_AggregateArgs, never>>;
  groups_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['groups']>, "groups_by_pk", ParentType, ContextType, RequireFields<Subscription_RootGroups_By_PkArgs, 'id'>>;
  messages?: SubscriptionResolver<Array<ResolversTypes['messages']>, "messages", ParentType, ContextType, RequireFields<Subscription_RootMessagesArgs, never>>;
  messages_aggregate?: SubscriptionResolver<ResolversTypes['messages_aggregate'], "messages_aggregate", ParentType, ContextType, RequireFields<Subscription_RootMessages_AggregateArgs, never>>;
  messages_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['messages']>, "messages_by_pk", ParentType, ContextType, RequireFields<Subscription_RootMessages_By_PkArgs, 'id'>>;
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
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<Thing_Images_Aggregate_FieldsCountArgs, never>>;
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
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<Thing_Type_Aggregate_FieldsCountArgs, never>>;
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
  group_relations?: Resolver<Array<ResolversTypes['group_thing']>, ParentType, ContextType, RequireFields<ThingsGroup_RelationsArgs, never>>;
  group_relations_aggregate?: Resolver<ResolversTypes['group_thing_aggregate'], ParentType, ContextType, RequireFields<ThingsGroup_Relations_AggregateArgs, never>>;
  id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  images?: Resolver<Array<ResolversTypes['thing_images']>, ParentType, ContextType, RequireFields<ThingsImagesArgs, never>>;
  images_aggregate?: Resolver<ResolversTypes['thing_images_aggregate'], ParentType, ContextType, RequireFields<ThingsImages_AggregateArgs, never>>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['users'], ParentType, ContextType>;
  owner_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
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
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<Things_Aggregate_FieldsCountArgs, never>>;
  max?: Resolver<Maybe<ResolversTypes['things_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['things_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Things_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['things_max_fields'] = ResolversParentTypes['things_max_fields']> = {
  category?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  owner_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Things_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['things_min_fields'] = ResolversParentTypes['things_min_fields']> = {
  category?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  owner_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
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
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<User_Private_Aggregate_FieldsCountArgs, never>>;
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
  created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email_verified?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  group_join_requests?: Resolver<Array<ResolversTypes['group_join_requests']>, ParentType, ContextType, RequireFields<UsersGroup_Join_RequestsArgs, never>>;
  group_join_requests_aggregate?: Resolver<ResolversTypes['group_join_requests_aggregate'], ParentType, ContextType, RequireFields<UsersGroup_Join_Requests_AggregateArgs, never>>;
  id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  last_seen?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  memberships?: Resolver<Array<ResolversTypes['group_members']>, ParentType, ContextType, RequireFields<UsersMembershipsArgs, never>>;
  memberships_aggregate?: Resolver<ResolversTypes['group_members_aggregate'], ParentType, ContextType, RequireFields<UsersMemberships_AggregateArgs, never>>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  password_hash?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  private_info?: Resolver<Maybe<ResolversTypes['user_private']>, ParentType, ContextType>;
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
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<Users_Aggregate_FieldsCountArgs, never>>;
  max?: Resolver<Maybe<ResolversTypes['users_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['users_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Users_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['users_max_fields'] = ResolversParentTypes['users_max_fields']> = {
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email_verified?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  last_seen?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  password_hash?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Users_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['users_min_fields'] = ResolversParentTypes['users_min_fields']> = {
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email_verified?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  last_seen?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  password_hash?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
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
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<Verification_Requests_Aggregate_FieldsCountArgs, never>>;
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
  CreateGroupResult?: CreateGroupResultResolvers<ContextType>;
  CreateJoinTokenResult?: CreateJoinTokenResultResolvers<ContextType>;
  HandleJoinRequestOutput?: HandleJoinRequestOutputResolvers<ContextType>;
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
  create_group_result?: Create_Group_ResultResolvers<ContextType>;
  entities?: EntitiesResolvers<ContextType>;
  entities_aggregate?: Entities_AggregateResolvers<ContextType>;
  entities_aggregate_fields?: Entities_Aggregate_FieldsResolvers<ContextType>;
  entities_max_fields?: Entities_Max_FieldsResolvers<ContextType>;
  entities_min_fields?: Entities_Min_FieldsResolvers<ContextType>;
  entities_mutation_response?: Entities_Mutation_ResponseResolvers<ContextType>;
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
  json?: GraphQLScalarType;
  messages?: MessagesResolvers<ContextType>;
  messages_aggregate?: Messages_AggregateResolvers<ContextType>;
  messages_aggregate_fields?: Messages_Aggregate_FieldsResolvers<ContextType>;
  messages_max_fields?: Messages_Max_FieldsResolvers<ContextType>;
  messages_min_fields?: Messages_Min_FieldsResolvers<ContextType>;
  messages_mutation_response?: Messages_Mutation_ResponseResolvers<ContextType>;
  mutation_root?: Mutation_RootResolvers<ContextType>;
  notifications?: NotificationsResolvers<ContextType>;
  notifications_aggregate?: Notifications_AggregateResolvers<ContextType>;
  notifications_aggregate_fields?: Notifications_Aggregate_FieldsResolvers<ContextType>;
  notifications_max_fields?: Notifications_Max_FieldsResolvers<ContextType>;
  notifications_min_fields?: Notifications_Min_FieldsResolvers<ContextType>;
  notifications_mutation_response?: Notifications_Mutation_ResponseResolvers<ContextType>;
  query_root?: Query_RootResolvers<ContextType>;
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


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;


export const ServerInsertActivitiesDocument: DocumentNode<ServerInsertActivitiesMutation, ServerInsertActivitiesMutationVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ServerInsertActivities"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"activities_insert_input"}}}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_activities"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"objects"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"returning"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]}]}}]}}]}}]};
export const ServerFindGroupDocument: DocumentNode<ServerFindGroupQuery, ServerFindGroupQueryVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ServerFindGroup"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"groups_bool_exp"}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"groups"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]}]}}]}}]};
export const ServerFindGroupJoinRequestDocument: DocumentNode<ServerFindGroupJoinRequestQuery, ServerFindGroupJoinRequestQueryVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ServerFindGroupJoinRequest"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"group_join_requests_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"group_id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"user_id"},"arguments":[],"directives":[]}]}}]}}]};
export const ServerFindJoinTokenDocument: DocumentNode<ServerFindJoinTokenQuery, ServerFindJoinTokenQueryVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ServerFindJoinToken"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"group_join_tokens_bool_exp"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"group_join_tokens"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"token"},"arguments":[],"directives":[]}]}}]}}]};
export const ServerFindGroupMembersDocument: DocumentNode<ServerFindGroupMembersQuery, ServerFindGroupMembersQueryVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ServerFindGroupMembers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"groupId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"group_members_bool_exp"}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"groups_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"groupId"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"memberships"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]}]}}]}}]}}]}}]};
export const ServerInsertGroupJoinTokenDocument: DocumentNode<ServerInsertGroupJoinTokenMutation, ServerInsertGroupJoinTokenMutationVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ServerInsertGroupJoinToken"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"group_join_tokens_insert_input"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_group_join_tokens_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"group_id"},"arguments":[],"directives":[]}]}}]}}]};
export const ServerInsertGroupDocument: DocumentNode<ServerInsertGroupMutation, ServerInsertGroupMutationVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ServerInsertGroup"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"groups_insert_input"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_groups_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]}]}}]}}]};
export const ServerInsertGroupJoinRequestDocument: DocumentNode<ServerInsertGroupJoinRequestMutation, ServerInsertGroupJoinRequestMutationVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ServerInsertGroupJoinRequest"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"group_join_requests_insert_input"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_group_join_requests_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"group_id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"status"},"arguments":[],"directives":[]}]}}]}}]};
export const ServerInsertGroupMemberDocument: DocumentNode<ServerInsertGroupMemberMutation, ServerInsertGroupMemberMutationVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ServerInsertGroupMember"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"group_members_insert_input"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_group_members_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]}]}}]}}]};
export const ServerUpdateGroupJoinRequestDocument: DocumentNode<ServerUpdateGroupJoinRequestMutation, ServerUpdateGroupJoinRequestMutationVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ServerUpdateGroupJoinRequest"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"group_join_requests_set_input"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_group_join_requests_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"group_id"},"arguments":[],"directives":[]}]}}]}}]};
export const ServerFetchThingDetailsDocument: DocumentNode<ServerFetchThingDetailsQuery, ServerFetchThingDetailsQueryVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ServerFetchThingDetails"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"things_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"created_at"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"owner"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"group_relations"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"group"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"public"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"memberships"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"role"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"user"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"images"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"file_id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"order"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"description"},"arguments":[],"directives":[]}]}}]}}]}}]};
export const ServerUpdateThingDocument: DocumentNode<ServerUpdateThingMutation, ServerUpdateThingMutationVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ServerUpdateThing"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"things_insert_input"}}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deletedFileIds"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deletedGroupIds"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_things_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}},{"kind":"Argument","name":{"kind":"Name","value":"on_conflict"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"constraint"},"value":{"kind":"EnumValue","value":"things_pkey"}},{"kind":"ObjectField","name":{"kind":"Name","value":"update_columns"},"value":{"kind":"ListValue","values":[{"kind":"EnumValue","value":"name"},{"kind":"EnumValue","value":"description"},{"kind":"EnumValue","value":"type"},{"kind":"EnumValue","value":"category"}]}}]}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"delete_thing_images"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"thing_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"file_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_in"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deletedFileIds"}}}]}}]}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected_rows"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"delete_group_thing"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"thing_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"group_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_in"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deletedGroupIds"}}}]}}]}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected_rows"},"arguments":[],"directives":[]}]}}]}}]};
export const ServerUserCredentialsDocument: DocumentNode<ServerUserCredentialsQuery, ServerUserCredentialsQueryVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ServerUserCredentials"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}}]}}]}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"password_hash"},"arguments":[],"directives":[]}]}}]}}]};
export const ServerFindUserDocument: DocumentNode<ServerFindUserQuery, ServerFindUserQueryVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ServerFindUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}}]}}]}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"email"},"arguments":[],"directives":[]}]}}]}}]};
export const ServerInsertUserDocument: DocumentNode<ServerInsertUserMutation, ServerInsertUserMutationVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ServerInsertUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"users_insert_input"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_users_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]}]}}]}}]};

      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {}
};
      export default result;
    