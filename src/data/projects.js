import database from "../assets/database.png";
import ceh from "/iqos.png";
// import teamnepal from "/teamnepal.png";
// import hrms from "/hrms.png";
const projects = [
    {
      id: 1,
      title: "Internship and Placement Management Database Project",
      description:
        "Developed a relational database system to efficiently manage internships and placements, applying 3NF normalization to minimize data redundancy. \nDesigned and implemented schema with primary/foreign keys, constraints, and role-based access control for Students, Companies, and Admins.\nCreated and tested SQL queries using joins, aggregate functions, and subqueries to analyze placement performance and student-company interactions.\n ",
      image: database,
      techStack: ["Database Design", "3NF Normalization", "Database Testing"],
      // link: "https://www.hiketohighadventures.com/",
    },
    {
      id: 2,
      title: "CTF Cybersecurity Challenge",
      description:
        "Engaged in the hands-on simulation of a Capture The Flag (CTF) competition, solving real-world cybersecurity problems involving system exploitation, vulnerability scanning, and digital forensics. \n Conducted OSINT investigations, cryptographic analysis, and steganography challenges to extract hidden data and uncover system vulnerabilities using professional-grade security tools.  \nPerformed system exploitation using Nmap, Metasploit, and Meterpreter, including password hash extraction, privilege escalation, and process migration to successfully capture flags across multiple challenge scenarios.",
      image: ceh,
      techStack: ["UI/UX Testing", "Function-testing", "Unit-testing", "Integration-testing"],
      link: "https://demo.bidheepos.com/",
    },
    // {
    //   id: 3,
    //   title: "Team Nepal Engineering",
    //   description:
    //     "Conducted comprehensive testing of the Team Nepal Engineering project, ensuring the platform's functionality, performance, and reliability. \nCollaborated with the development team to identify and resolve critical issues, significantly enhancing the project's stability and user experience. \nImplemented feedback-driven improvements and iterative testing cycles, contributing to the project's successful deployment and ongoing reliability.",
    //   image: teamnepal,
    //   techStack: ["UI/UX Testing", "Responsiveness", "Functional Testing", "Performance Testing", "Regression Testing"] ,
    //   link: "https://teamnepal.com.np/",
    // },
    // {
    //   id: 4,
    //   title: "HRMS",
    //   description:
    //     "Played a key role in the development and testing of a comprehensive Human Resource Management System HRMS, ensuring the integration of essential HR functionalities. \nConducted rigorous testing to ensure data integrity and security within the HRMS, protecting sensitive employee information and complying with data protection regulations. \nWorked closely with HR professionals to gather requirements and feedback, contributing to a user-friendly interface and enhanced user experience for HRMS users.",
    //   image: hrms,
    //   techStack: ["UI/UX Testing", "Responsiveness", "Functional Testing", "Exploratory Testing","Integration Testing", "Regression Testing", "Usability Testing"],
    //   link: "https://dev.bidheehrms.com/",
    // },
  ];
  
  export default projects;
  
