
(function(){
  const DEMO_PROFILES = {
    "BLACK-ALDEN": {
      clientName: "Alden Executive Office",
      subtitle: "Corporate principal / confidential movement",
      lead: "Marcus Vale · Protection Lead",
      scope: ["Executive protection", "Residential coordination", "Secure transportation", "Advance planning"],
      welcomeTitle: "Welcome, Ms. Attila.",
      welcomeText: "This private briefing environment has been provisioned for an executive protection demonstration centered on discreet corporate movement, office arrival windows, and low-signature travel support.",
      status: "Active coverage review",
      privacy: "Executive restricted",
      movementTitle: "Next movement · Monday 08:10",
      movementSummary: "Jacksonville residence to private office with staggered arrival, covered transfer, and alternate routing prepared.",
      docSummary: "4 briefing documents staged for executive review.",
      delegateSummary: "2 approved delegates attached to the office of the principal.",
      schedules: [
        {title:"Office arrival window", tag:"Monday", copy:"Primary movement window with controlled ingress, alternate motor court entry, and layered arrival timing.", chips:["08:10–08:45", "Primary office", "Advance complete"]},
        {title:"Board dinner movement", tag:"Wednesday", copy:"Venue approach calibrated for low-visibility arrival and immediate interior transition on contact.", chips:["19:20 arrival", "Private venue", "Driver staged"]},
        {title:"Airfield transfer", tag:"Friday", copy:"Private terminal pickup with contingency routing, luggage handling support, and discreet offload.", chips:["TBD departure", "FBO", "Contingency route"]}
      ],
      documents: [
        {title:"Principal briefing memo", tag:"Briefing", copy:"High-level summary of posture, household considerations, preferred communication routes, and friction points.", chips:["PDF", "Current", "Internal"]},
        {title:"Residential access notes", tag:"Secure file", copy:"Entry preferences, service access windows, and driveway exposure considerations for staff awareness.", chips:["PDF", "Restricted", "Household"]},
        {title:"Movement outline", tag:"Coordination", copy:"Upcoming transfer windows, expected timing, and exposure-reduction notes for driver and protection lead.", chips:["DOC", "Active", "Transport"]},
        {title:"Consultation NDA", tag:"Agreement", copy:"Executed intake document retained in portal for review and confirmation.", chips:["Signed", "Archive", "Legal"]}
      ],
      requests: [
        {title:"Adjust visible footprint", tag:"Client note", copy:"Principal preference remains unchanged: presence should feel calm, polished, and minimally conspicuous.", chips:["Priority", "Client stated"]},
        {title:"Delegate communication", tag:"Office request", copy:"Chief of staff requests one point of contact for all movement approvals and same-day schedule changes.", chips:["Delegate", "Comms"]},
        {title:"Arrival privacy", tag:"Exposure", copy:"Avoid curbside dwell wherever possible. Favor covered arrival and direct interior handoff.", chips:["Low visibility", "Arrival"]}
      ],
      contacts: [
        {title:"Marcus Vale", tag:"Protection lead", copy:"Assigned BLKVI point for movement approvals, executive schedule coordination, and engagement continuity.", chips:["Direct line", "Primary"]},
        {title:"Eleanor Shaw", tag:"Chief of staff", copy:"Approved delegate with visibility into movement windows, file room, and consultation records.", chips:["Delegate", "Scoped access"]}
      ]
    },
    "HOUSE-SABLE": {
      clientName: "House Sable Family Office",
      subtitle: "Family office / household support / estate-facing profile",
      lead: "Adrian Cross · Client Operations",
      scope: ["Family office coordination", "Household access control", "Travel support", "Event movement"],
      welcomeTitle: "Welcome, House Sable delegate.",
      welcomeText: "This environment has been prepared for a private family office demonstration focused on household continuity, delegate access, travel coordination, and discreet protective support.",
      status: "Prepared engagement",
      privacy: "Family office restricted",
      movementTitle: "Next movement · Estate arrival",
      movementSummary: "Weekend estate activity with guest arrival management, service entrance screening rhythm, and family movement support.",
      docSummary: "5 household and travel documents prepared for delegate review.",
      delegateSummary: "3 delegates approved across household and family office roles.",
      schedules: [
        {title:"Estate guest arrival", tag:"Saturday", copy:"Guest list coordination, vehicle sequencing, and low-friction front approach management.", chips:["15:00–18:00", "Estate", "Guest screened"]},
        {title:"Family airport return", tag:"Sunday", copy:"Private terminal pickup with child-focused transition support and secondary weather route prepared.", chips:["17:20 wheels down", "FBO", "Weather contingency"]},
        {title:"Household staffing window", tag:"Recurring", copy:"Morning staffing and vendor entry sequence adjusted to reduce driveway congestion and visual exposure.", chips:["06:30–09:00", "Household", "Vendor control"]}
      ],
      documents: [
        {title:"Household preference profile", tag:"Secure file", copy:"Communication preferences, visibility sensitivities, staff routing expectations, and family-specific notes.", chips:["PDF", "Current", "Household"]},
        {title:"Delegate access matrix", tag:"Authorization", copy:"Defines which assistants, managers, and estate staff can view schedules, request support, or retrieve files.", chips:["Matrix", "Scoped", "Current"]},
        {title:"Weekend event brief", tag:"Briefing", copy:"Arrival plan, parking management, staff positioning, and private family retreat routing notes.", chips:["DOC", "Event", "Prepared"]},
        {title:"Traveler packet", tag:"Travel", copy:"Travel support notes, hotel handoff instructions, and private transfer references for delegate use.", chips:["PDF", "Travel", "Active"]},
        {title:"Service vendor protocol", tag:"Operations", copy:"Approved vendor windows, service access expectations, and communications discipline for estate-facing staff.", chips:["Protocol", "Estate", "Internal"]}
      ],
      requests: [
        {title:"Children remain out of sight lines", tag:"Household note", copy:"Household preference is for all visible staging to remain away from children’s common exterior areas.", chips:["Priority", "Household"]},
        {title:"Discreet staff posture", tag:"Family office", copy:"Support should read polished and capable without appearing theatrical in front of guests.", chips:["Brand posture", "Client stated"]},
        {title:"Vendor cadence", tag:"Estate ops", copy:"Consolidate vendor arrivals into clear windows to avoid repeated traffic and avoidable attention.", chips:["Logistics", "Recurring"]}
      ],
      contacts: [
        {title:"Adrian Cross", tag:"Client operations", copy:"Lead for family office scheduling, travel alignment, and communication with approved delegates.", chips:["Primary", "Operations"]},
        {title:"Naomi Reid", tag:"Estate manager", copy:"Approved delegate for household movement windows, vendor access, and estate-level brief coordination.", chips:["Delegate", "Estate"]},
        {title:"Private aviation desk", tag:"External partner", copy:"Included here as a demonstration of how third-party transport coordination can appear inside the portal.", chips:["Partner", "Scoped note"]}
      ]
    },
    "VI-ATLAS": {
      clientName: "Atlas Talent Management",
      subtitle: "Talent-facing profile / press and event movement",
      lead: "Soren Pike · Travel & Protection",
      scope: ["Talent protection", "Set and event movement", "Press visibility management", "Travel continuity"],
      welcomeTitle: "Welcome, Atlas management.",
      welcomeText: "This portal view demonstrates a talent-facing environment built around controlled event movement, green-room access, press visibility, and selective delegate access for management teams.",
      status: "Event week active",
      privacy: "Talent restricted",
      movementTitle: "Next movement · Red carpet rehearsal",
      movementSummary: "Event-week posture emphasizes clean arrivals, green-room continuity, press timing control, and immediate protected transitions.",
      docSummary: "4 event and travel documents staged for management review.",
      delegateSummary: "2 management delegates and 1 stylist access profile attached.",
      schedules: [
        {title:"Studio arrival", tag:"Tuesday", copy:"Low-visibility back-lot arrival, controlled interior transfer, and departure hold pending press volume.", chips:["10:40", "Studio gate", "Back-lot"]},
        {title:"Premiere walk-through", tag:"Thursday", copy:"Venue rehearsal including credential checks, green-room movement, and vehicle stack timing.", chips:["16:30", "Venue", "Credentialed"]},
        {title:"Premiere arrival", tag:"Friday", copy:"Talent arrival sequence aligned with management, styling, and photo-line timing to reduce unnecessary exposure.", chips:["19:05", "Event", "Management aligned"]}
      ],
      documents: [
        {title:"Event route brief", tag:"Briefing", copy:"Arrival and departure notes, transition path, hold points, and fallback routing for management review.", chips:["PDF", "Event", "Prepared"]},
        {title:"Credential packet", tag:"Access", copy:"Press, backstage, and green-room credentials retained in portal as a sample document bundle.", chips:["Packet", "Access", "Demo"]},
        {title:"Travel coordination sheet", tag:"Travel", copy:"Sample airport transfer references, hotel arrival notes, and management handoff expectations.", chips:["DOC", "Travel", "Active"]},
        {title:"Client preference memo", tag:"Private note", copy:"Visibility preferences, press sensitivities, and red-carpet pacing notes for the assigned team.", chips:["Internal", "Preference", "Restricted"]}
      ],
      requests: [
        {title:"No fan-side dwell", tag:"Exposure", copy:"Management requests immediate movement from vehicle to interior unless pre-cleared photo stop is required.", chips:["High priority", "Movement"]},
        {title:"Styling timeline sync", tag:"Management note", copy:"Vehicle call time must remain aligned with styling and glam completion to avoid visible idle time.", chips:["Timing", "Delegate"]},
        {title:"Green-room privacy", tag:"Client note", copy:"Only approved names should receive green-room location details within the talent-facing workflow.", chips:["Restricted", "Access control"]}
      ],
      contacts: [
        {title:"Soren Pike", tag:"Travel & protection", copy:"Lead coordination point for all event-week movement, hotel transitions, and venue access timing.", chips:["Primary", "Event week"]},
        {title:"Mina Vale", tag:"Talent manager", copy:"Approved delegate with access to event briefings, timing notes, and visible movement windows.", chips:["Delegate", "Management"]},
        {title:"Ari Sol", tag:"Stylist", copy:"Limited demonstration profile showing how creative support personnel could receive scoped schedule visibility only.", chips:["Limited", "Scoped"]}
      ]
    }
  };

  const gateFeedback = document.getElementById('gateFeedback');
  const sessionState = document.getElementById('sessionState');
  const portalApp = document.getElementById('portalApp');
  const helperButtons = document.querySelectorAll('.helper-btn');
  const resetSessionBtn = document.getElementById('resetSessionBtn');
  const printBriefBtn = document.getElementById('printBriefBtn');
  const profileSwitches = document.getElementById('profileSwitches');

  const fields = {
    sidebarClient: document.getElementById('sidebarClient'),
    sidebarSubtitle: document.getElementById('sidebarSubtitle'),
    assignedLead: document.getElementById('assignedLead'),
    scopeList: document.getElementById('scopeList'),
    welcomeTitle: document.getElementById('welcomeTitle'),
    welcomeText: document.getElementById('welcomeText'),
    engagementStatus: document.getElementById('engagementStatus'),
    privacyLevel: document.getElementById('privacyLevel'),
    upcomingWindow: document.getElementById('upcomingWindow'),
    movementSummary: document.getElementById('movementSummary'),
    docCount: document.getElementById('docCount'),
    docSummary: document.getElementById('docSummary'),
    delegateCount: document.getElementById('delegateCount'),
    delegateSummary: document.getElementById('delegateSummary'),
    scheduleList: document.getElementById('scheduleList'),
    documentList: document.getElementById('documentList'),
    requestList: document.getElementById('requestList'),
    contactList: document.getElementById('contactList')
  };

  function normalize(code){
    return (code || '').trim().toUpperCase();
  }

  function renderList(target, items){
    target.innerHTML = '';
    items.forEach((item)=>{
      const wrapper = document.createElement('div');
      wrapper.className = 'stack-item';
      wrapper.innerHTML = `
        <div class="stack-top">
          <div class="stack-title">${item.title}</div>
          <div class="stack-tag">${item.tag}</div>
        </div>
        <p class="stack-copy">${item.copy}</p>
        <div class="stack-meta">${(item.chips || []).map(chip => `<span class="meta-chip">${chip}</span>`).join('')}</div>
      `;
      target.appendChild(wrapper);
    });
  }

  function renderScope(items){
    fields.scopeList.innerHTML = '';
    items.forEach((item)=>{
      const li = document.createElement('li');
      li.textContent = item;
      fields.scopeList.appendChild(li);
    });
  }

  function setSessionState(active, label){
    sessionState.textContent = label || (active ? 'Active session' : 'No active session');
  }

  function loadProfile(code, announce){
    const profile = DEMO_PROFILES[code];
    if(!profile){
      gateFeedback.textContent = 'Demo profile not recognized in this package.';
      setSessionState(false, 'Unavailable');
      return false;
    }

    sessionStorage.setItem('blkvi_demo_code', code);
    renderScope(profile.scope);
    fields.sidebarClient.textContent = profile.clientName;
    fields.sidebarSubtitle.textContent = profile.subtitle;
    fields.assignedLead.textContent = profile.lead;
    fields.welcomeTitle.textContent = profile.welcomeTitle;
    fields.welcomeText.textContent = profile.welcomeText;
    fields.engagementStatus.textContent = profile.status;
    fields.privacyLevel.textContent = profile.privacy;
    fields.upcomingWindow.textContent = profile.movementTitle;
    fields.movementSummary.textContent = profile.movementSummary;
    fields.docCount.textContent = `${profile.documents.length} documents`;
    fields.docSummary.textContent = profile.docSummary;
    fields.delegateCount.textContent = `${profile.contacts.length} contacts`;
    fields.delegateSummary.textContent = profile.delegateSummary;
    renderList(fields.scheduleList, profile.schedules);
    renderList(fields.documentList, profile.documents);
    renderList(fields.requestList, profile.requests);
    renderList(fields.contactList, profile.contacts);
    portalApp.classList.remove('hidden');
    setSessionState(true, `Session active · ${profile.clientName}`);
    gateFeedback.textContent = announce || `${profile.clientName} environment provisioned for this browser session.`;
    return true;
  }

  function clearSession(){
    sessionStorage.removeItem('blkvi_demo_code');
    loadProfile('BLACK-ALDEN', 'Session reset to the default executive demonstration profile.');
  }

  function buildSwitches(){
    Object.keys(DEMO_PROFILES).forEach((code)=>{
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'btn btn-secondary helper-btn';
      btn.textContent = `${code} · ${DEMO_PROFILES[code].clientName}`;
      btn.addEventListener('click', ()=>loadProfile(code, `Switched to ${DEMO_PROFILES[code].clientName}.`));
      profileSwitches.appendChild(btn);
    });
  }

  helperButtons.forEach((button)=>{
    button.addEventListener('click', ()=>{
      const code = normalize(button.getAttribute('data-code'));
      loadProfile(code, `Switched to ${DEMO_PROFILES[code].clientName}.`);
    });
  });

  if(resetSessionBtn){
    resetSessionBtn.addEventListener('click', clearSession);
  }

  if(printBriefBtn){
    printBriefBtn.addEventListener('click', ()=>window.print());
  }

  buildSwitches();

  const existing = normalize(sessionStorage.getItem('blkvi_demo_code'));
  if(existing && DEMO_PROFILES[existing]){
    loadProfile(existing, `${DEMO_PROFILES[existing].clientName} restored for the current browser session.`);
  } else {
    loadProfile('BLACK-ALDEN', 'Default executive demonstration profile loaded automatically.');
  }
})();
