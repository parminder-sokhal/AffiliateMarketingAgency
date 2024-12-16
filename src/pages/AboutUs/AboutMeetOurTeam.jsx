import React, { useState } from "react";
import "../../styles/AboutUs/AboutMeetOurTeam.scss";

const AboutMeetOurTeam = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const teamMembers = [
    {
      name: "Mark Thompson",
      role: "Lead Affiliate",
      image: "./images/demohai.jpg",
      description:
        "Mark leads the strategic direction of all affiliate marketing campaigns at LinkPro. With over a decade of experience in the field, he has a deep understanding of industry trends, consumer behavior, and digital marketing dynamics. Mark is also responsible for overseeing competitor analysis, market research, and campaign benchmarking, ensuring that our clients remain ahead of the competition. His expertise in leveraging advanced analytics helps him pinpoint high-performing affiliates and key marketing channels that deliver the best results. campaigns at LinkPro. With over a decade of experience in the field, he has a deep understanding of industry trends, consumer behavior, and digital marketing dynamics. Mark is also responsible for overseeing competitor analysis, market research, and campaign benchmarking, ensuring that our clients remain ahead of the competition. His expertise in leveraging advanced analytics helps him pinpoint high-performing affiliates and key marketing channels that deliver the best results.",
      socials: ["twitter", "facebook", "instagram"],
    },
    {
      name: "John Doe",
      role: "Marketing Specialist",
      image: "./images/meetourteam2.png",
      description:
        "John specializes in content marketing strategies and building high-conversion affiliate campaigns.",
      socials: ["twitter", "facebook", "instagram"],
    },
    {
      name: "Sarah Lee",
      role: "Affiliate Manager",
      image: "./images/meetourteam3.png",
      description:
        "Sarah works closely with affiliates to ensure they get the support they need to thrive.",
      socials: ["twitter", "facebook", "instagram"],
    },
    {
      name: "Emily Clark",
      role: "SEO Specialist",
      image: "./images/meetourteam40.png",
      description:
        "Emily is an SEO expert, helping optimize affiliate programs and campaigns for maximum reach.",
      socials: ["twitter", "facebook", "instagram"],
    },
    {
      name: "James Smith",
      role: "Account Manager",
      image: "./images/meetourteam4.png",
      description:
        "James is dedicated to providing personalized services to clients and affiliates.",
      socials: ["twitter", "facebook", "instagram"],
    },
    {
      name: "Rachel Adams",
      role: "Content Strategist",
      image: "./images/meetourteam5.png",
      description:
        "Rachel develops content strategies to help drive conversions for affiliate programs.",
      socials: ["twitter", "facebook", "instagram"],
    },
    {
      name: "David Johnson",
      role: "Sales Manager",
      image: "./images/meetourteam6.png",
      description:
        "David is an expert in affiliate sales, growing revenue through targeted affiliate partnerships.",
      socials: ["twitter", "facebook", "instagram"],
    },
    {
      name: "Olivia Brown",
      role: "Data Analyst",
      image: "./images/meetourteam7.png",
      description:
        "Olivia is responsible for analyzing affiliate performance and delivering actionable insights.",
      socials: ["twitter", "facebook", "instagram"],
    },
  ];

  const openModal = (member) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMember(null);
  };

  return (
    <div className="meet-our-team-container">
      <div className="team-header">
        <h2>Meet Our Team</h2>
        <p>
          our talented team brings a wealth of experience and expertise to
          ensure your affiliate marketing program thrives.
        </p>
      </div>

      {/* <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div
            className="team-member-box"
            key={index}
            onClick={() => openModal(member)}
          >
            <div
              className="circle-image"
              style={{ backgroundImage: `url(${member.image})` }}
            >
              <div className="arrow">➔</div>
            </div>
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>  */}
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div
            className="team-member-box"
            key={index}
            onClick={() => openModal(member)}
            style={{
              "--member-image": `url(${member.image})`, // Dynamically set the background image via CSS variable
            }}
          >
            <div className="circle-image">
              {/* The profile image will be here */}
            </div>
            <div className="arrow">➔</div>{" "}
            {/* Place the arrow outside of the .circle-image */}
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-left">
              <div
                className="modal-image"
                style={{ backgroundImage: `url(${selectedMember.image})` }}
              ></div>
              <div className="socials">
                {selectedMember.socials.map((social, idx) => (
                  <a
                    key={idx}
                    href={`https://${social}.com`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`social-icon ${social}`}
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
            <div className="modal-right">
              <h3>{selectedMember.name}</h3>
              <p>{selectedMember.role}</p>
              <div className="description">
                <p>{selectedMember.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutMeetOurTeam;
