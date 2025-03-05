import React from 'react';
import { useParams } from 'react-router-dom';

const CourseDetail = () => {
  const { courseTitle } = useParams(); // Access the course title from the URL

  // Normalize the course title (e.g., replace hyphens with spaces and capitalize first letters)
  const normalizedTitle = courseTitle
    .replace(/-/g, ' ') // Replace hyphens with spaces
    .replace(/\b\w/g, (char) => char.toUpperCase()) // Capitalize the first letter of each word
    .replace(/ And /g, '/') // Replace " And " with "/"
    .replace(/Ui/g, 'UI') // Replace "Ui" with "UI"
    .replace(/Ux/g, 'UX'); // Replace "Ux" with "UX"

  // Course details based on the course title
  const courses = {
    "Web Development Basics": {
      hours: 45,
      videos: 20,
      students: 1900,
      description: "This course provides a comprehensive introduction to web development, covering the essential technologies and tools needed to build modern websites. You will learn the basics of HTML for structuring content, CSS for styling, and JavaScript for adding interactivity. The course also introduces you to responsive design principles, ensuring your websites look great on all devices. By the end of the course, you will have built several projects, including a personal portfolio and a dynamic web application. Whether you're a beginner or looking to refresh your skills, this course will give you a solid foundation in web development.",
      videoUrl: "https://www.youtube.com/watch?v=8sXRyHI3bLw"
    },
    "Digital Marketing 101": {
      hours: 62,
      videos: 32,
      students: 930,
      description: "Digital Marketing 101 is designed to equip you with the knowledge and skills needed to succeed in the digital marketing landscape. The course covers key topics such as search engine optimization (SEO), social media marketing, email marketing, and content marketing. You will learn how to create effective marketing strategies, analyze campaign performance, and optimize your efforts for better results. The course also includes practical exercises and case studies to help you apply what you've learned in real-world scenarios. By the end of the course, you will have a clear understanding of how to leverage digital channels to grow your business or career.",
      videoUrl: "https://www.youtube.com/watch?v=BZLUEKnMfIY"
    },
    "Data Science Fundamentals": {
      hours: 62,
      videos: 32,
      students: 930,
      description: "Digital Marketing 101 is designed to equip you with the knowledge and skills needed to succeed in the digital marketing landscape. The course covers key topics such as search engine optimization (SEO), social media marketing, email marketing, and content marketing. You will learn how to create effective marketing strategies, analyze campaign performance, and optimize your efforts for better results. The course also includes practical exercises and case studies to help you apply what you've learned in real-world scenarios. By the end of the course, you will have a clear understanding of how to leverage digital channels to grow your business or career.",
      videoUrl: "https://www.youtube.com/watch?v=bQZk18rke2o"
    },
    "Funda Of Public Speaking": {
      hours: 2.6,
      videos: 13,
      students: 900,
      description: "This course offers an introduction to the learn about te basic concepts and theories of public speaking. You will learn the basics of data analysis, including how to collect, clean, and visualize data. The course also covers fundamental concepts in machine learning, such as supervised and unsupervised learning. Through hands-on projects, you will gain experience using popular data science tools and libraries like Python, Pandas, and Scikit-learn. By the end of the course, you will have a solid understanding of the data science workflow and be able to apply your skills to real-world problems. Whether you're looking to start a career in data science or simply want to understand the basics, this course is a great starting point.",
      videoUrl: "https://www.youtube.com/watch?v=hwHwtbDbbf0"
    },
    "Basic Networking": {
      hours: 62,
      videos: 32,
      students: 930,
      description: "This course provides an introduction to the fundamentals of computer networking. You will learn about the different types of networks, network topologies, and the protocols that govern data transmission. The course also covers essential networking concepts such as IP addressing, subnetting, and routing. Through hands-on labs, you will gain practical experience configuring and troubleshooting network devices. By the end of the course, you will have a solid understanding of how networks operate and be able to set up and manage basic network infrastructures. Whether you're preparing for a career in IT or simply want to understand how networks work, this course is a great starting point.",
      videoUrl: "https://www.youtube.com/watch?v=fErDcUtd8fA"
    },
    "Beginner UI or UX": {
      hours: 8,
      videos: 46,
      students: 1043,
      description: "This course is designed to help beginners improve their UI or UX design skills. It covers essential grammar rules, vocabulary, and pronunciation techniques. You will also learn how to construct sentences, ask questions, and engage in basic conversations. The course includes interactive exercises and quizzes to reinforce your learning. By the end of the course, you will have a better understanding of English grammar and be able to communicate more effectively in everyday situations. Whether you're learning English for work, travel, or personal growth, this course will provide you with the tools you need to succeed.",
      videoUrl: "https://www.youtube.com/watch?v=CE2Kac4ln9E"
    },
    "Basic English": {
      hours: 45,
      videos: 20,
      students: 1900,
      description: "This course is designed to help beginners improve their English language skills. It covers essential grammar rules, vocabulary, and pronunciation techniques. You will also learn how to construct sentences, ask questions, and engage in basic conversations. The course includes interactive exercises and quizzes to reinforce your learning. By the end of the course, you will have a better understanding of English grammar and be able to communicate more effectively in everyday situations. Whether you're learning English for work, travel, or personal growth, this course will provide you with the tools you need to succeed.",
      videoUrl: "https://www.youtube.com/watch?v=CE2Kac4ln9E"
    },
    "Crop Suitablity Technology": {
      hours: 45,
      videos: 20,
      students: 1900,
      description: "This course is designed to help beginners Proven planting techniques with the assistance of technologgy. It covers essential grammar rules, vocabulary, and pronunciation techniques. You will also learn how to construct sentences, ask questions, and engage in basic conversations. The course includes interactive exercises and quizzes to reinforce your learning. By the end of the course, you will have a better understanding of English grammar and be able to communicate more effectively in everyday situations. Whether you're learning English for work, travel, or personal growth, this course will provide you with the tools you need to succeed.",
      videoUrl: "https://www.youtube.com/watch?v=pdr5campyTo"
    },
    "Machine Learning": {
      hours: 7,
      videos: 17,
      students: 200,
      description: "This course is designed to help beginners to understand the foundational concept of Machine learning. It covers essential grammar rules, vocabulary, and pronunciation techniques. You will also learn how to construct sentences, ask questions, and engage in basic conversations. The course includes interactive exercises and quizzes to reinforce your learning. By the end of the course, you will have a better understanding of English grammar and be able to communicate more effectively in everyday situations. Whether you're learning English for work, travel, or personal growth, this course will provide you with the tools you need to succeed.",
      videoUrl: "https://www.youtube.com/watch?v=ukzFI9rgwfU"
    },
  };

  // Look up the course using the normalized title
  const course = courses[normalizedTitle] || {
    hours: 0,
    videos: 0,
    students: 0,
    description: "Course details not available.",
    videoUrl: ""
  };

  // Function to extract video ID from YouTube URL
  const getVideoId = (url) => {
    const match = url.match(/v=([^&]+)/);
    return match ? match[1] : null;
  };

  // Get video ID
  const videoId = getVideoId(course.videoUrl);

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-4">Course Detail: {normalizedTitle}</h1>

      {/* Video Section */}
      {videoId && (
        <div className="w-full max-w-2xl mb-8">
          <h2 className="text-xl font-bold mb-2">Course Video</h2>
          <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-lg">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={`https://www.youtube.com/embed/${videoId}`}
              title={`${normalizedTitle} Course Video`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      {/* Course Details Section */}
      <div className="mt-4 text-center">
        <h2 className="text-xl font-bold">About the Course</h2>
        <p className="text-gray-600">{course.description}</p>
        <div className="mt-4">
          <p><strong>Hours:</strong> {course.hours}</p>
          <p><strong>Videos:</strong> {course.videos}</p>
          <p><strong>Students:</strong> {course.students}</p>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;