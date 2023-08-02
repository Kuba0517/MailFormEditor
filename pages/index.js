import { useState } from 'react';
import socialMediaTemplate from '../templates/socialMediaTemplate';
import websiteTemplate from '../templates/websiteTemplate';
import socialWebsiteTemplate from '../templates/socialWebsiteTemplate';
import styles from '../styles/index.module.scss';

export default function CustomForm() {
    const [variant, setVariant] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [firstParagraph, setFirstParagraph] = useState("");
    const [senderName, setSenderName] = useState("");

    const generateEmail = () => {
        let template;
        switch (variant) {
            case 'socialMedia':
                template = socialMediaTemplate;
                break;
            case 'website':
                template = websiteTemplate;
                break;
            case 'socialWebsiteTemplate':
                template = socialWebsiteTemplate;
                break;
            default:
                return;
        }

        const emailHtml = template({ companyName, firstParagraph, senderName });
        navigator.clipboard.writeText(emailHtml);
    };
    return (
        <div className={styles.app}>
            <div className={styles.container}>
                <h1 className={styles.title}>SWAYAGENCY INSIDE TECH S.A</h1>

                <select className={styles.select} value={variant} onChange={(e) => setVariant(e.target.value)}>
                    <option value="">-- wybierz wariant --</option>
                    <option value="socialMedia">Social Media</option>
                    <option value="socialWebsite">Social Media + Website</option>
                    <option value="website">Website</option>
                </select>

                <input className={styles.input} type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)} placeholder="Nazwa firmy" />
                <textarea className={styles.textarea} value={firstParagraph} onChange={(e) => setFirstParagraph(e.target.value)} placeholder="Pierwszy paragraf" />

                <select className={styles.select} value={senderName} onChange={(e) => setSenderName(e.target.value)}>
                    <option value="">-- wybierz wysyłającego --</option>
                    <option value="Jakub">Jakub</option>
                    <option value="Kacper">Kacper</option>
                </select>

                <button className={styles.button} onClick={generateEmail}>Kopiuj HTML</button>
            </div>
        </div>
    );
}
