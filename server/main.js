import "/imports/api/rooms";
import { RoomCollection } from "../imports/api/rooms";

Meteor.publish("rooms", function() {
  return RoomCollection.find({});
});
Meteor.publish("room", function({ _id }) {
  return RoomCollection.find({ _id });
});

console.log('test-close-321')
console.log('test-close-321')
console.log('test-close-321')
console.log('test-close-321')
console.log('test-close-321')
console.log('test-close-321')
console.log('test-close-321')
console.log('test-close-321')
console.log('test-close-321')
console.log('test-close-321')
console.log('test-close-321')
