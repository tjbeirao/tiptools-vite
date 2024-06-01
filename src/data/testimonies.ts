interface Testimony {
    id: number;
    name: string;
    profession: string;
    testimony: string;
}

export const testimonies: Testimony[] = [
    {
        id: 1,
        name: "John Doe",
        profession: "Student",
        testimony: "Mr. Brown excels at creating a positive, focused learning environment. As a math teacher, he simplifies complex concepts for all skill levels. His patience, approachability, and humor make the classroom enjoyable. He sets high expectations, supporting students to meet them, making him a highly recommended educator."
    },
    {
        id: 2,
        name: "Jane Doe",
        profession: "Student",
        testimony: "Ms. Johnson, an English teacher, passionately helps students thrive, promoting critical thinking, creativity, and communication. She provides insightful feedback, improving students' writing. Her warm, inclusive classroom values every voice, and her empathy encourages open sharing, greatly impacting students' educational journeys."
    },
    {
        id: 3,
        name: "John Smith",
        profession: "Student",
        testimony: "I had the privilege of studying in Mrs. Mariana's inspiring class. She ensures student engagement, uses varied teaching methods like group discussions and hands-on activities. Her enthusiasm for history is contagious, and she genuinely supports students' success, making her highly recommended for eager learners."
    }
];

export const getRandomTestimony = (testimonyCopy: Testimony[]): Testimony => {
    const index = Math.floor(Math.random() * testimonyCopy.length);
    const element = testimonyCopy[index];
    testimonyCopy.splice(index, 1);
    return element;
}