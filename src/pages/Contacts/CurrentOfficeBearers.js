import React from "react";
import ContactCard from "../../components/ContactCard";
import contactsData from "../../data/contactsData.js";
import Styles from "../../styles/pages/contacts.module.css";
export default function CurrentOffceBearers() {
  const President = contactsData.data.find(
    (contact) => contact.Post === "President"
  );
  const VicePresident = contactsData.data.find(
    (contact) => contact.Post === "Vice-President"
  );
  const generalSecretaries = contactsData.data.filter(
    (element) => element.Category === "General Secretary"
  );
  const nominatedPost = contactsData.data.filter(
    (element) => element.Category === "Nominated Posts"
  );
  return (
    <>
      <div className={Styles.contactsContainer} data-aos="zoom-in-up">
        <div>
          <h2 className={Styles.postHeading}>President</h2>
          <ContactCard
            name={President.Name}
            designation={President.Post}
            email={President.Email}
            imgSrc={`/media/images/contacts/${President.img}`}
          />
        </div>
        <div>
          <h2 className={Styles.postHeading}>Vice-President</h2>
          <ContactCard
            name={VicePresident.Name}
            designation={VicePresident.Post}
            email={VicePresident.Email}
            imgSrc={`/media/images/contacts/${VicePresident.img}`}
          />
        </div>
        <div>
          <h2 className={Styles.postHeading}>General Secretaries</h2>
          <div className={Styles.multipleCards}>
            {generalSecretaries.map((member, index) => {
              return (
                <ContactCard
                  name={member.Name}
                  designation={member.Post}
                  email={member.Email}
                  imgSrc={`/media/images/contacts/${member.img}`}
                />
              );
            })}
          </div>
        </div>
        <div>
          <h2 className={Styles.postHeading}>Nominated Posts</h2>
          <div className={Styles.multipleCards}>
            {nominatedPost.map((member, index) => {
              return (
                <ContactCard
                  name={member.Name}
                  designation={member.Post}
                  email={member.Email}
                  imgSrc={`/media/images/contacts/${member.img}`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
