fetch('data.json')
  .then(res => res.json())
  .then(data => {
    document.getElementById('resume').innerHTML = buildResume(data);
  });

function buildResume(d) {
  return `
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
