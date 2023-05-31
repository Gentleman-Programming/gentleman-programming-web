export interface FaqData {
  id: string;
  question: string;
  answer: string;
}

export const FAQ: FaqData[] = [
  {
    id: '1',
    question: 'What is the difference between a single and a double room?',
    answer:
      'A single room is a room for one person. A double room is a room for two persons. A double room can be booked for single use, but it will be more expensive than a single room.',
  },
  {
    id: '2',
    question: 'What is the difference between a twin and a double room?',
    answer:
      'A twin room is a room for two persons with two single beds. A double room is a room for two persons with one big bed.',
  },
  {
    id: '3',
    question: 'What is the difference between a double room and a deluxe room?',
    answer: 'A deluxe room is a room with a better view or better amenities.',
  },
  {
    id: '4',
    question: 'What is the difference between a double room and a suite?',
    answer: 'A suite is a room with a separate living room.',
  },
  {
    id: '5',
    question: 'What is the difference between a suite and a deluxe room?',
    answer: 'A deluxe room is a room with a better view or better amenities.',
  },
  {
    id: '6',
    question: 'What is the difference between a suite and a junior suite?',
    answer: 'A junior suite is a room with a small living room.',
  },
];
