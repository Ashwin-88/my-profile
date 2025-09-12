
const EducationDetails = () => {
  const educationData = [
    {
      institution: '𝐈𝐧𝐬𝐭𝐢𝐭𝐮𝐭𝐞 𝐨𝐟 𝐌𝐚𝐧𝐚𝐠𝐞𝐦𝐞𝐧𝐭 𝐚𝐧𝐝 𝐈𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧 𝐓𝐞𝐜𝐡𝐧𝐨𝐥𝐨𝐠𝐲',
      degree: '𝐌𝐚𝐬𝐭𝐞𝐫 𝐢𝐧 𝐓𝐞𝐜𝐡𝐧𝐨𝐥𝐨𝐠𝐲 (𝐂𝐨𝐦𝐩. 𝐒𝐜 & 𝐄𝐧𝐠𝐠.)',
      duration: '𝟎𝟖/𝟐𝟎𝟏𝟗 - 𝟎𝟓/𝟐𝟎𝟐𝟏',
      location: '𝐂𝐮𝐭𝐭𝐚𝐜𝐤, 𝐈𝐧𝐝𝐢𝐚'
    },
    {
      institution: '𝐈𝐧𝐬𝐭𝐢𝐭𝐮𝐭𝐞 𝐨𝐟 𝐌𝐚𝐧𝐚𝐠𝐞𝐦𝐞𝐧𝐭 𝐚𝐧𝐝 𝐈𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧 𝐓𝐞𝐜𝐡𝐧𝐨𝐥𝐨𝐠𝐲',
      degree: '𝐌𝐚𝐬𝐭𝐞𝐫 𝐢𝐧 𝐂𝐨𝐦𝐩𝐮𝐭𝐞𝐫 𝐀𝐩𝐩𝐥𝐢𝐜𝐚𝐭𝐢𝐨𝐧',
      duration: '𝟎𝟖/𝟐𝟎𝟏𝟎 - 𝟎𝟓/𝟐𝟎𝟏𝟑',
      location: '𝐂𝐮𝐭𝐭𝐚𝐜𝐤, 𝐈𝐧𝐝𝐢𝐚'
    },
    {
      institution: '𝐊𝐚𝐦𝐚𝐤𝐡𝐲𝐚 𝐍𝐚𝐠𝐚𝐫 𝐂𝐨𝐥𝐥𝐞𝐠𝐞',
      degree: '𝐁.𝐒𝐜. 𝐌𝐚𝐭𝐡𝐞𝐦𝐚𝐭𝐢𝐜𝐬 𝐇𝐨𝐧𝐨𝐫𝐬',
      duration: '𝟎𝟔/𝟐𝟎𝟎𝟓 - 𝟎𝟓/𝟐𝟎𝟎𝟗',
      location: '𝐃𝐡𝐞𝐧𝐤𝐚𝐧𝐚𝐥, 𝐈𝐧𝐝𝐢𝐚'
    },
    {
      institution: '𝐉𝐢𝐫𝐚𝐥 𝐂𝐨𝐥𝐥𝐞𝐠𝐞',
      degree: '𝐇𝐢𝐠𝐡𝐞𝐫 𝐒𝐞𝐜𝐨𝐧𝐝𝐚𝐫𝐲 𝐂𝐞𝐫𝐭𝐢𝐟𝐢𝐜𝐚𝐭𝐞',
      duration: '𝟎𝟔/𝟐𝟎𝟎𝟑 - 𝟎𝟓/𝟐𝟎𝟎𝟓',
      location: '𝐃𝐡𝐞𝐧𝐤𝐚𝐧𝐚𝐥, 𝐈𝐧𝐝𝐢𝐚'
    },
    {
      institution: '𝐉𝐢𝐫𝐚𝐥 𝐇𝐢𝐠𝐡 𝐒𝐜𝐡𝐨𝐨𝐥',
      degree: '𝐒𝐞𝐜𝐨𝐧𝐝𝐚𝐫𝐲 𝐒𝐜𝐡𝐨𝐨𝐥 𝐂𝐞𝐫𝐭𝐢𝐟𝐢𝐜𝐚𝐭𝐞',
      duration: '𝟎𝟒/𝟐𝟎𝟎𝟐 - 𝟎𝟓/𝟐𝟎𝟎𝟑',
      location: '𝐃𝐡𝐞𝐧𝐤𝐚𝐧𝐚𝐥, 𝐈𝐧𝐝𝐢𝐚'
    }
  ];

  return (
    <div id="educationDetails">
      {educationData.map((edu, index) => (
        <div key={index} className="education-item">
          <h3>{edu.degree}</h3>
          <p>{edu.institution}</p>
          <p>{edu.duration} - {edu.location}</p>
        </div>
      ))}
    </div>
  );
};

export default EducationDetails;

