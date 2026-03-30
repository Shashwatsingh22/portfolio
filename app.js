function downloadResume() {
  window.print();
}

const resumeData = {"name":"Shashwat Singh","email":"shashwatsingh71@gmail.com","phone":"+91 9795528516","links":[{"label":"LinkedIn","url":"https://linkedin.com/in/shashwatsing"},{"label":"GitHub","url":"https://github.com/Shashwatsingh22"},{"label":"Medium","url":"https://shashwatsingh71.medium.com"}],"summary":"Software Development Engineer with 3+ years of experience building scalable backend systems, automation tools, and cloud-native solutions. Passionate about writing clean, efficient code and continuously learning new technologies to solve complex problems.","experience":[{"company":"Vittaka","note":"formerly tech division of Equirus Wealth","location":"Noida, Uttar Pradesh","role":"Software Development Engineer II","duration":"Sep 2025 - Present","points":["Built a <strong>revenue management system</strong> with real-time sales tracking and automated split calculations, significantly reducing revenue generation efforts for the MIS team by replacing Excel-based workflows with interactive dashboards."],"subSection":{"heading":"Led complete architecture and delivery of backend platform:","points":["Built end-to-end <strong>RTA feed processing pipeline</strong> for CAMS and KFintech — handling investor creation, folio mapping, duplicate detection, and scheme-merging.","Architected a <strong>Revenue Calculation Engine</strong> processing <strong>1M+ mutual fund transactions</strong>, reducing computation time from <strong>3 days to 1 hour</strong>.","Drove <strong>MIS Revenue Reconciliation</strong> with projected-vs-confirmed brokerage comparison.","Designed an <strong>async job framework</strong> powering 6+ modules with built-in retry logic and failure tracking.","Migrated email ingestion from legacy IMAP/POP3 to <strong>Microsoft Graph API</strong>."]},"extraPoints":["<strong>Mentored interns</strong> through hands-on technical guidance, regular code reviews, and structured onboarding, enabling them to contribute independently to production features while maintaining project delivery timelines."]},{"company":"Equirus Wealth","location":"Noida, Uttar Pradesh","role":"Software Development Engineer I","duration":"May 2023 - Sep 2025","points":["Automated the generation of client RM <strong>PowerPoint presentations using Apache POI</strong>. Reduced report creation time from <strong>a full day to under 1 minute</strong> by integrating real-time data, significantly improving client servicing efficiency.","Engineered backend systems that smoothly processed <strong>28K+ transactions worth INR 32 crore</strong> with <strong>14K+ active SIPs</strong>, ensuring reliable and seamless order placement.","Designed and implemented a complete <strong>onboarding system</strong> for clients and RMs, automating signup, KYC, and investment account creation. Reduced processing time by <strong>~80%</strong> (from ~5 minutes to ~1 minute) by eliminating manual steps.","Resolved batch processing interruptions due to server failures by implementing robust rescheduling logic. Ensured <strong>100% data integrity</strong> with seamless handoff between servers.","Integrated <strong>OpenSearch</strong> for enhanced search capabilities and optimized dashboard APIs. Reduced dashboard load time from <strong>1–2 seconds to ~200ms</strong> by implementing real-time cache updates and efficient data synchronization.","Built an <strong>email tracking and suppression system</strong> using <strong>AWS SES and Lambda</strong> with condition-based rules to monitor delivery statuses. Controlled bounce rate by automatically suppressing failed recipients, reducing bounce incidents by <strong>75%</strong> and enabling end-to-end tracking of every outgoing email."]},{"company":"Equirus Wealth","location":"Noida, Uttar Pradesh","role":"Software Engineer Intern","duration":"Oct 2022 - May 2023","points":["Designed a <strong>Producer-Consumer based system</strong> to parse CSV, DBF, and Excel files with <strong>100% accuracy</strong>, ensuring zero data loss and centralized processing.","Enhanced batch reliability by preventing duplicate picks and enabling <strong>failover and reconciliation</strong> support. Achieved 100% duplication-free executions.","Built an optimized sync job to consolidate <strong>mutual fund data from multiple vendors</strong>, ensuring seamless integration and zero data loss during high-volume operations.","Integrated <strong>Penny Drop API</strong> for real-time bank account validation, achieving 100% validation accuracy and improving onboarding verification efficiency.","Integrated <strong>Account Aggregator API</strong> to streamline financial data retrieval, enhancing transaction analytics and dashboard insights with real-time visibility."]},{"company":"TGH Tech","location":"Remote","role":"DevOps Engineer Intern","duration":"May 2021 – Sep 2021","points":["Managed AWS cloud services, implemented <strong>Infrastructure as Code (IaC)</strong> using <strong>Terraform</strong>, and handled configuration management using <strong>Ansible</strong>.","Designed and implemented <strong>CI/CD pipelines</strong> using <strong>Jenkins</strong> to streamline application deployment and delivery workflows.","Deployed and maintained over <strong>20 applications</strong> (Bot APIs), ensuring high availability and operational efficiency."]}],"education":[{"institution":"Lovely Professional University","location":"Phagwara, India","degree":"B.Tech in Computer Science | CGPA: 7.8","duration":"Apr 2019 – Jun 2023"}],"achievements":[{"title":"Recognition for Seamless Onboarding","description":"Recognized for streamlining client onboarding, effectively training interns, resolving queries, and delivering tasks with precision and reliability. (Nov 2024)"},{"title":"1st Rank – Hackathon (Open Innovation Theme)","description":"Won 1st place for project Master Cluster at a hackathon organized by Developer Student Club. (2021)"}],"skills":{"Programming Languages":"Kotlin (Currently Using), Java 25, Python 3","Frameworks":"Spring Boot, Mockito, JUnit, MyBatis","Databases":"PostgreSQL, MySQL, Redis, OpenSearch","DevOps":"Docker, Bitbucket Pipeline, AWS (EC2, S3, Lambda, SES, SQS, Elastic Beanstalk), Git","Tools":"SonarQube, Sentry, IntelliJ, Kiro"}};

document.getElementById('resume').innerHTML = buildResume(resumeData);

function buildResume(d) {
  return `
    <button class="download-btn no-print" onclick="downloadResume()">⬇ Download PDF</button>
    ${buildHeader(d)}
    ${buildSection('Summary', `<p class="summary">${d.summary}</p>`)}
    ${buildSection('Experience', d.experience.map(buildExp).join(''))}
    ${buildSection('Education', d.education.map(buildEdu).join(''))}
    ${buildSection('Achievements', d.achievements.map(buildAchievement).join(''))}
    ${buildSection('Skills', buildSkills(d.skills))}
  `;
}

function buildHeader(d) {
  const links = d.links.map(l => `<a href="${l.url}">${l.label}</a>`).join('<span class="sep">·</span>');
  return `
    <div class="header">
      <h1>${d.name}</h1>
      <div class="contact">
        <a href="mailto:${d.email}">${d.email}</a>
        <span class="sep">·</span>${d.phone}
        <span class="sep">·</span>${links}
      </div>
    </div>`;
}

function buildSection(title, content) {
  return `<div class="section"><div class="section-title">${title}</div>${content}</div>`;
}

function buildExp(exp) {
  const note = exp.note ? ` <span class="note">(${exp.note})</span>` : '';
  const points = exp.points ? `<ul class="points">${exp.points.map(p => `<li>${p}</li>`).join('')}</ul>` : '';

  let subHtml = '';
  if (exp.subSection) {
    const subPts = exp.subSection.points.map(p => `<li>${p}</li>`).join('');
    subHtml = `
      <div class="sub-section">
        <div class="sub-heading">${exp.subSection.heading}</div>
        <ul class="sub-points">${subPts}</ul>
      </div>`;
  }

  const extra = exp.extraPoints ? `<ul class="points">${exp.extraPoints.map(p => `<li>${p}</li>`).join('')}</ul>` : '';

  return `
    <div class="exp-item">
      <div class="exp-header">
        <span class="exp-company">${exp.company}${note}</span>
        <span class="exp-duration">${exp.duration}</span>
      </div>
      <div class="exp-meta">
        <span class="exp-role">${exp.role}</span>
        <span class="exp-location">${exp.location}</span>
      </div>
      ${points}${subHtml}${extra}
    </div>`;
}

function buildEdu(edu) {
  return `
    <div class="edu-item">
      <div class="edu-header">
        <span class="edu-name">${edu.institution}</span>
        <span class="edu-duration">${edu.duration}</span>
      </div>
      <div class="edu-meta">
        <span class="edu-degree">${edu.degree}</span>
        <span class="edu-location">${edu.location}</span>
      </div>
    </div>`;
}

function buildAchievement(a) {
  return `<div class="achievement"><strong>${a.title}:</strong> ${a.description}</div>`;
}

function buildSkills(skills) {
  return `<div class="skills-grid">${
    Object.entries(skills).map(([k, v]) => `<div class="skill-row"><strong>${k}:</strong> ${v}</div>`).join('')
  }</div>`;
}
