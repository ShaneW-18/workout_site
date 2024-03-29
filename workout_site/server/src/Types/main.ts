import { Scheduler } from "timers/promises";
import { v4 as uuidv4 } from "uuid";

export type User = {
  username: String;
  password: String;
  userId: String;
  email: String;
  description?: String;
  following?: [User];
  image?: String;
  activeTracks?: [Track];
};
export type UserDB = {
  userId: uuidv4;
  username: String;
  email: String;
  description: String;
  password: String;
  image: String;
};
export type Schedule = {
  scheduleId: uuidv4;
  name: String;
  description?: String;
  image?: String;
  userId: uuidv4;
  user: User;
  tracks?: [Track];
};

export type ScheduleDB = {
  scheduleId: String;
  name: String;
  description?: String;
  image?: String;
  userId: uuidv4;
};
export type Track = {
  name: String;
  trackId: uuidv4;
  description?: String;
  user: User;
  workouts?: [Workout];
};
export type TrackDB = {
  name: String;
  description?: String;
  trackId: uuidv4;
  userId: uuidv4;
};
export type WorkoutDB = {
  workoutId: String;
  description?: String;
  isRestDay: Boolean;
  name: String;
  userId: uuidv4;
};
export type Workout = {
  workoutId: String;
  description?: String;
  isRestDay: Boolean;
  name: String;
  user: User;
  exercises?: [Exercise];
};
export type ExerciseDB = {
  name: String;
  description?: String;
  exerciseId: String;
};
export type Exercise = {
  name: String;
  description?: String;
  exerciseId: String;
  reps?: Number;
  sets?: Number;
};
export type trackSceduleDB = {
  trackScheduleId: uuidv4;
  trackId: uuidv4;
  scheduleId: uuidv4;
  start: Date;
  end?: Date;
};
export type workoutTrackDB = {
  workoutTrackId: uuidv4;
  workoutId: uuidv4;
  trackId: uuidv4;
  order: Number;
};
export type exerciseWorkoutDB = {
  exerciseWorkoutId: uuidv4;
  workoutId: uuidv4;
  exerciseId: uuidv4;
  sets: Number;
  reps: Number;
  time: Number;
  order: Number;
};
export type follow = {
  followingUserId: uuidv4;
  followedUserId: uuidv4;
  createdAt: Date;
};
export type activeTrackDB = {
  userTrackId: uuidv4;
  trackId: uuidv4;
  userId: uuidv4;
}
export type conversation = {
  conversationId: String
  name: String
  created: String
  modified: String
  messages: [message]
  users: [User]
  offset?: Number
}
export type message = {
  messageId: String
  message: String
  sender: User
  conversation: conversation
  timeSent: String
}
export type messageDB = {
  messageId: String
  userIdFrom: String
  conversationId: String
  message: String
  timeSent: Date
}
export type conversationDB = {
  conversationId: String
  name: String
  created: Date
  modified: Date
}
export type conversationUserDB = {
  userId: String
  conversationId: String
  dateJoined: Date
}