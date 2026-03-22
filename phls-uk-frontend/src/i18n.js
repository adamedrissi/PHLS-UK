import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const enTranslation = {
  common: {
    language: "Language",
    theme: "Theme",
    light: "Light",
    dark: "Dark",
    home: "Home",
    settings: "Settings",
    login: "Login",
    register: "Register",
    patient: "Patient",
    provider: "Provider",
    logout: "Log Out",
    exitGuest: "Exit Guest",
    yes: "Yes",
    no: "No",
    quickActions: "Quick actions",
    manageBookings: "Manage Bookings",
    searchBookings: "Search Bookings",
    searchInsurance: "Search Insurance",
    manageProfile: "Manage Profile",
    patientFaqs: "Patient FAQs",
    providerFaqs: "Provider FAQs",
    backToTop: "↑ Back to top",
    scrollToBottom: "↓ Scroll to Bottom",
  },

  home: {
    title: "Welcome to PHLS-UK",
    subtitle:
      "Search, compare and access private healthcare services in one place. Designed to make booking and provider discovery simpler, faster and clearer.",
    role: "Role",
    authenticated: "Authenticated",
    language: "Language",
    theme: "Theme",
  },

  loginPage: {
    heroTitle: "Search and book private healthcare with confidence",
    heroSubtitle:
      "Compare services, discover providers, and manage appointments through a cleaner and more accessible healthcare platform.",
    welcomeBack: "Welcome back",
    createAccount: "Create your account",
    accessText: "Access PHLS-UK as a patient or provider",
    email: "Email",
    password: "Password",
    confirmPassword: "Confirm password",
    fullName: "Full name",
    phoneNumber: "Phone number",
    clinicId: "Clinic ID",
    enterEmail: "Enter your email",
    enterPassword: "Enter your password",
    enterClinicId: "Enter existing clinic ID",
    passwordsDoNotMatch: "Passwords do not match",
    loginFailed: "Login failed",
    registrationFailed: "Registration failed",
    loggingIn: "Logging in...",
    registering: "Registering...",
    enterAsGuest: "Enter as Guest",
  },

  footer: {
    copyright: "© 2025-2026 PHLS-UK. Private Healthcare Lookup Service.",
    contact: "Contact us at: contact.phlsuk@gmail.com",
  },

  languages: {
    en: "English",
    cy: "Welsh / Cymraeg",
    es: "Spanish / Español",
    pa: "Panjabi / Punjabi",
    pl: "Polish / Polski",
    pt: "Portuguese / Português",
    ro: "Romanian / Română",
    ur: "Urdu / اردو",
  },

  settings: {
    title: "Settings",
    subtitle:
      "Personalise your PHLS-UK experience with theme, language, and notification preferences.",
    themeDescription: "Choose how the platform looks across the main pages.",
    languageDescription: "Select your preferred language for the interface.",
    lightMode: "Light Mode",
    darkMode: "Dark Mode",
    currentPreferences: "Current preferences",
    notifications: {
      title: "Notifications",
      description:
        "Choose how you would like to receive booking and platform notifications.",
      none: "None",
      email: "Email",
      phone: "Phone",
      both: "Both",
    },
  },

  insurance: {
    title: "Medical Insurance Search",
    subtitle:
      "Browse and compare private medical insurance providers in a cleaner, simpler layout.",
    searchLabel: "Search insurance providers",
    searchPlaceholder: "Type provider name...",
    noResults: "No insurance providers found.",
    from: "From",
    getQuote: "Get a Quote ↗",
  },

  bookings: {
    title: "Search Bookings",
    subtitle:
      "Find and rank available appointments by city, specialty, date, time, and budget.",
    location: "Location",
    locationPlaceholder: "Enter UK town, city, postcode, or address",
    findLocation: "Find location",
    selected: "Selected",
    radius: "Radius",
    radius5: "5 miles",
    radius10: "10 miles",
    radius25: "25 miles",
    radius50: "50 miles",
    specialty: "Specialty",
    allSpecialties: "All specialties",
    maximumPrice: "Maximum price (£)",
    enterBudget: "Enter budget",
    minimumRating: "Minimum rating",
    anyRating: "Any rating",
    rating35: "3.5+",
    rating40: "4.0+",
    rating45: "4.5+",
    preferredDate: "Preferred date",
    preferredTime: "Preferred time",
    anyTime: "Any time",
    morning: "Morning",
    afternoon: "Afternoon",
    evening: "Evening",
    rankingModel: "Ranking model",
    baselineWeighted: "Baseline weighted",
    contentBasedSimilarity: "Content-based similarity",
    baselineWeightedRanking: "Baseline weighted ranking",
    resultsLimit: "Results limit",
    search: "Search",
    reset: "Reset",
    showing: "Showing",
    resultSingular: "ranked result",
    resultsPlural: "ranked results",
    using: "using",
    loadingRankedSlots: "Loading ranked slots...",
    noAvailableBookings: "No available bookings found.",
    somethingWentWrong: "Something went wrong",
    searchFailed: "Search failed",
    locationSearchFailed: "Location search failed",
    resetFailed: "Reset failed",
  },

  manageBookings: {
    accessRestricted: "Access restricted",
    onlyPatientsProviders: "Only patients and providers can manage bookings.",
    providerTitle: "Manage Bookings & Slots",
    patientTitle: "Manage Bookings",
    providerSubtitle:
      "View your appointment bookings and manage your availability slots.",
    patientSubtitle: "View and manage your booking records from your account.",
    loading: "Loading...",
    appointmentBookings: "Appointment Bookings",
    yourBookings: "Your Bookings",
    noBookingsFound: "No bookings found.",
    date: "Date",
    time: "Time",
    cancelBookingAsProvider: "Cancel Booking as Provider",
    cancelBooking: "Cancel Booking",
    manageAvailableSlots: "Manage Available Slots",
    startTime: "Start time",
    endTime: "End time",
    price: "Price (£)",
    addSlot: "Add Slot",
    noSlotsFound: "No slots found.",
    removeSlot: "Remove Slot",
    failedToLoadData: "Failed to load data",
    bookingCancelled: "Booking cancelled",
    failedToCancelBooking: "Failed to cancel booking",
    slotCreatedFor: "Slot created for",
    failedToCreateSlot: "Failed to create slot",
    slotDeleted: "Slot deleted",
    failedToDeleteSlot: "Failed to delete slot",
  },

  profile: {
    title: "Manage Profile",
    subtitle: "Review your account details and manage your password securely.",
    mustBeLoggedIn:
      "You need to be logged in as a patient or provider to view profile details.",
    accountDetails: "Account details",
    userId: "User ID",
    role: "Role",
    fullName: "Full name",
    emailAddress: "Email address",
    changePassword: "Change password",
    changePasswordDescription:
      "Update your password to keep your account secure.",
    currentPassword: "Current password",
    newPassword: "New password",
    confirmNewPassword: "Confirm new password",
    updatePassword: "Update Password",
    completeAllPasswordFields: "Please complete all password fields.",
    newPasswordsDoNotMatch: "New passwords do not match.",
    passwordMinLength: "New password must be at least 8 characters long.",
    passwordChangeReady: "Password change is ready to connect to the backend.",
    notAvailable: "Not available",
    guest: "Guest",
  },

  patientFaq: {
    title: "Patient FAQs",
    subtitle: "Common questions for patients using PHLS-UK.",
    q1: {
      question: "What is PHLS-UK?",
      answer:
        "PHLS-UK is a private healthcare search and booking platform that helps patients compare providers, review available appointments, and access services more easily.",
    },
    q2: {
      question: "Do I need an account to use PHLS-UK?",
      answer:
        "You can browse parts of the platform as a guest, but you need a patient account to book and manage appointments.",
    },
    q3: {
      question: "How do I search for appointments?",
      answer:
        "Go to Search Bookings, then filter by city, specialty, maximum price, or preferred date to view available appointment slots.",
    },
    q4: {
      question: "How do I book an appointment?",
      answer:
        "Once logged in as a patient, select an available slot and choose the booking option shown on the appointment card.",
    },
    q5: {
      question: "Can I cancel a booking?",
      answer:
        "Yes. Open Manage Bookings to view your current appointments and cancel eligible bookings.",
    },
    q6: {
      question: "Can I compare insurance providers?",
      answer:
        "Yes. The Search Insurance page lets you browse and compare available medical insurance providers.",
    },
    q7: {
      question: "Can I change the theme or language?",
      answer:
        "Yes. Visit the Settings page to switch between light and dark mode and choose your preferred language.",
    },
    q8: {
      question: "Who can I contact for support?",
      answer:
        "You can use the contact email shown in the footer for general support and platform enquiries.",
    },
  },

  providerFaq: {
    title: "Provider FAQs",
    subtitle: "Common questions for providers using PHLS-UK.",
    q1: {
      question: "What is PHLS-UK for providers?",
      answer:
        "PHLS-UK helps providers present healthcare services online so patients can search, compare, and access appointment availability more easily.",
    },
    q2: {
      question: "How do I register as a provider?",
      answer:
        "On the login and registration page, choose Register and then select the Provider option to create a provider account.",
    },
    q3: {
      question: "Why do I need a clinic ID when registering?",
      answer:
        "The clinic ID connects your provider account to an existing clinic record in the platform.",
    },
    q4: {
      question: "Can providers search the platform too?",
      answer:
        "Yes. Providers can still browse platform content, depending on the features available to their account role.",
    },
    q5: {
      question: "Can providers book appointments?",
      answer:
        "No. Booking actions are intended for patient accounts. Provider accounts are designed for service and availability management.",
    },
    q6: {
      question: "What should I do if my clinic information is incorrect?",
      answer:
        "If your linked clinic information is incorrect, you should contact platform support so the clinic data can be reviewed and updated.",
    },
    q7: {
      question: "Can I use PHLS-UK in dark mode?",
      answer:
        "Yes. Providers can change the platform appearance from the Settings page.",
    },
    q8: {
      question: "Where can I get help with provider access issues?",
      answer:
        "Use the support email shown in the footer for help with registration, access, or platform-related issues.",
    },
  },

  slotCard: {
    bookingConfirmed: "Booking confirmed",
    bookingFailed: "Booking failed",
    baseline: "Baseline",
    content: "Content",
    score: "Score",
    city: "City",
    postcode: "Postcode",
    rating: "Rating",
    specialties: "Specialties",
    notAvailable: "N/A",
    notListed: "Not listed",
    bookingInProgress: "Booking...",
    bookAppointment: "Book Appointment",
    loginAsPatient: "Log in as a patient to book this appointment.",
  },

  providerCard: {
    rating: "Rating",
    priceFrom: "Price from",
  },
};

const cyTranslation = {
  common: {
    language: "Iaith",
    theme: "Thema",
    light: "Golau",
    dark: "Tywyll",
    home: "Cartref",
    settings: "Gosodiadau",
    login: "Mewngofnodi",
    register: "Cofrestru",
    patient: "Claf",
    provider: "Darparwr",
    logout: "Allgofnodi",
    exitGuest: "Gadael fel Gwestai",
    yes: "Ie",
    no: "Na",
    quickActions: "Camau cyflym",
    manageBookings: "Rheoli Archebion",
    searchBookings: "Chwilio Archebion",
    searchInsurance: "Chwilio Yswiriant",
    manageProfile: "Rheoli Proffil",
    patientFaqs: "Cwestiynau Cyffredin Cleifion",
    providerFaqs: "Cwestiynau Cyffredin Darparwyr",
    backToTop: "↑ Yn ôl i'r brig",
    scrollToBottom: "↓ Sgroliwch i'r gwaelod",
  },

  home: {
    title: "Croeso i PHLS-UK",
    subtitle:
      "Chwiliwch, cymharwch a chael mynediad at wasanaethau gofal iechyd preifat mewn un lle. Wedi'i gynllunio i wneud archebu a dod o hyd i ddarparwyr yn symlach, yn gyflymach ac yn gliriach.",
    role: "Rôl",
    authenticated: "Wedi mewngofnodi",
    language: "Iaith",
    theme: "Thema",
  },

  loginPage: {
    heroTitle: "Chwiliwch ac archebwch ofal iechyd preifat yn hyderus",
    heroSubtitle:
      "Cymharwch wasanaethau, darganfyddwch ddarparwyr, a rheolwch apwyntiadau drwy blatfform gofal iechyd glanach a mwy hygyrch.",
    welcomeBack: "Croeso'n ôl",
    createAccount: "Crëwch eich cyfrif",
    accessText: "Mynediad at PHLS-UK fel claf neu ddarparwr",
    email: "E-bost",
    password: "Cyfrinair",
    confirmPassword: "Cadarnhau cyfrinair",
    fullName: "Enw llawn",
    phoneNumber: "Rhif ffôn",
    clinicId: "ID Clinig",
    enterEmail: "Rhowch eich e-bost",
    enterPassword: "Rhowch eich cyfrinair",
    enterClinicId: "Rhowch ID clinig sy'n bodoli",
    passwordsDoNotMatch: "Nid yw'r cyfrineiriau'n cyfateb",
    loginFailed: "Mewngofnodi wedi methu",
    registrationFailed: "Cofrestru wedi methu",
    loggingIn: "Wrthi'n mewngofnodi...",
    registering: "Wrthi'n cofrestru...",
    enterAsGuest: "Mynediad fel Gwestai",
  },

  footer: {
    copyright: "© 2025-2026 PHLS-UK. Private Healthcare Lookup Service.",
    contact: "Cysylltwch â ni ar: contact.phlsuk@gmail.com",
  },

  languages: {
    en: "Saesneg",
    cy: "Cymraeg",
    es: "Sbaeneg / Español",
    pa: "Panjabi / Punjabi",
    pl: "Pwyleg / Polski",
    pt: "Portiwgaleg / Português",
    ro: "Rwmaneg / Română",
    ur: "Wrdw / اردو",
  },

  settings: {
    title: "Gosodiadau",
    subtitle:
      "Personolwch eich profiad PHLS-UK gyda dewisiadau thema, iaith a hysbysiadau.",
    themeDescription: "Dewiswch sut mae'r platfform yn edrych ar draws y prif dudalennau.",
    languageDescription: "Dewiswch eich iaith ddewisol ar gyfer y rhyngwyneb.",
    lightMode: "Modd Golau",
    darkMode: "Modd Tywyll",
    currentPreferences: "Dewisiadau presennol",
    notifications: {
      title: "Hysbysiadau",
      description:
        "Dewiswch sut yr hoffech dderbyn hysbysiadau am archebion a'r platfform.",
      none: "Dim",
      email: "E-bost",
      phone: "Ffôn",
      both: "Y Ddau",
    },
  },

  insurance: {
    title: "Chwilio Yswiriant Meddygol",
    subtitle:
      "Pori a chymharu darparwyr yswiriant meddygol preifat mewn cynllun glanach a symlach.",
    searchLabel: "Chwilio darparwyr yswiriant",
    searchPlaceholder: "Teipiwch enw'r darparwr...",
    noResults: "Ni chanfuwyd darparwyr yswiriant.",
    from: "O",
    getQuote: "Cael Dyfynbris ↗",
  },

  bookings: {
    title: "Chwilio Archebion",
    subtitle:
      "Canfod a threfnu apwyntiadau sydd ar gael yn ôl dinas, arbenigedd, dyddiad, amser a chyllideb.",
    location: "Lleoliad",
    locationPlaceholder: "Rhowch dref, dinas, cod post neu gyfeiriad yn y DU",
    findLocation: "Canfod lleoliad",
    selected: "Wedi'i ddewis",
    radius: "Radiws",
    radius5: "5 milltir",
    radius10: "10 milltir",
    radius25: "25 milltir",
    radius50: "50 milltir",
    specialty: "Arbenigedd",
    allSpecialties: "Pob arbenigedd",
    maximumPrice: "Pris uchaf (£)",
    enterBudget: "Rhowch gyllideb",
    minimumRating: "Sgôr leiaf",
    anyRating: "Unrhyw sgôr",
    rating35: "3.5+",
    rating40: "4.0+",
    rating45: "4.5+",
    preferredDate: "Dyddiad dewisol",
    preferredTime: "Amser dewisol",
    anyTime: "Unrhyw amser",
    morning: "Bore",
    afternoon: "Prynhawn",
    evening: "Gyda'r nos",
    rankingModel: "Model trefnu",
    baselineWeighted: "Pwysoliad sylfaenol",
    contentBasedSimilarity: "Tebygrwydd yn seiliedig ar gynnwys",
    baselineWeightedRanking: "Trefnu pwysoliad sylfaenol",
    resultsLimit: "Terfyn canlyniadau",
    search: "Chwilio",
    reset: "Ailosod",
    showing: "Yn dangos",
    resultSingular: "canlyniad wedi'i drefnu",
    resultsPlural: "canlyniadau wedi'u trefnu",
    using: "gan ddefnyddio",
    loadingRankedSlots: "Wrthi'n llwytho slotiau wedi'u trefnu...",
    noAvailableBookings: "Ni chanfuwyd archebion ar gael.",
    somethingWentWrong: "Aeth rhywbeth o'i le",
    searchFailed: "Methodd y chwiliad",
    locationSearchFailed: "Methodd chwilio lleoliad",
    resetFailed: "Methodd ailosod",
  },

  manageBookings: {
    accessRestricted: "Mynediad cyfyngedig",
    onlyPatientsProviders: "Dim ond cleifion a darparwyr all reoli archebion.",
    providerTitle: "Rheoli Archebion a Slotiau",
    patientTitle: "Rheoli Archebion",
    providerSubtitle:
      "Gweld eich archebion apwyntiadau a rheoli eich slotiau argaeledd.",
    patientSubtitle: "Gweld a rheoli eich cofnodion archebu o'ch cyfrif.",
    loading: "Wrthi'n llwytho...",
    appointmentBookings: "Archebion Apwyntiadau",
    yourBookings: "Eich Archebion",
    noBookingsFound: "Ni chanfuwyd archebion.",
    date: "Dyddiad",
    time: "Amser",
    cancelBookingAsProvider: "Canslo Archeb fel Darparwr",
    cancelBooking: "Canslo Archeb",
    manageAvailableSlots: "Rheoli Slotiau Ar Gael",
    startTime: "Amser cychwyn",
    endTime: "Amser gorffen",
    price: "Pris (£)",
    addSlot: "Ychwanegu Slot",
    noSlotsFound: "Ni chanfuwyd slotiau.",
    removeSlot: "Tynnu Slot",
    failedToLoadData: "Methwyd llwytho data",
    bookingCancelled: "Archeb wedi'i chanslo",
    failedToCancelBooking: "Methwyd canslo'r archeb",
    slotCreatedFor: "Crëwyd slot ar gyfer",
    failedToCreateSlot: "Methwyd creu slot",
    slotDeleted: "Slot wedi'i ddileu",
    failedToDeleteSlot: "Methwyd dileu slot",
  },

  profile: {
    title: "Rheoli Proffil",
    subtitle: "Adolygwch fanylion eich cyfrif a rheolwch eich cyfrinair yn ddiogel.",
    mustBeLoggedIn:
      "Mae angen i chi fewngofnodi fel claf neu ddarparwr i weld manylion y proffil.",
    accountDetails: "Manylion cyfrif",
    userId: "ID Defnyddiwr",
    role: "Rôl",
    fullName: "Enw llawn",
    emailAddress: "Cyfeiriad e-bost",
    changePassword: "Newid cyfrinair",
    changePasswordDescription:
      "Diweddarwch eich cyfrinair i gadw eich cyfrif yn ddiogel.",
    currentPassword: "Cyfrinair presennol",
    newPassword: "Cyfrinair newydd",
    confirmNewPassword: "Cadarnhau cyfrinair newydd",
    updatePassword: "Diweddaru Cyfrinair",
    completeAllPasswordFields: "Cwblhewch bob maes cyfrinair.",
    newPasswordsDoNotMatch: "Nid yw'r cyfrineiriau newydd yn cyfateb.",
    passwordMinLength: "Rhaid i'r cyfrinair newydd fod o leiaf 8 nod o hyd.",
    passwordChangeReady: "Mae'r newid cyfrinair yn barod i'w gysylltu â'r backend.",
    notAvailable: "Ddim ar gael",
    guest: "Gwestai",
  },

  patientFaq: {
    title: "Cwestiynau Cyffredin Cleifion",
    subtitle: "Cwestiynau cyffredin i gleifion sy'n defnyddio PHLS-UK.",
    q1: {
      question: "Beth yw PHLS-UK?",
      answer:
        "Mae PHLS-UK yn blatfform chwilio ac archebu gofal iechyd preifat sy'n helpu cleifion i gymharu darparwyr, adolygu apwyntiadau sydd ar gael, a chael mynediad at wasanaethau yn haws.",
    },
    q2: {
      question: "Oes angen cyfrif arnaf i ddefnyddio PHLS-UK?",
      answer:
        "Gallwch bori rhai rhannau o'r platfform fel gwestai, ond mae angen cyfrif claf arnoch i archebu a rheoli apwyntiadau.",
    },
    q3: {
      question: "Sut mae chwilio am apwyntiadau?",
      answer:
        "Ewch i Chwilio Archebion, yna hidlwch yn ôl dinas, arbenigedd, pris uchaf neu ddyddiad dewisol i weld slotiau apwyntiad sydd ar gael.",
    },
    q4: {
      question: "Sut mae archebu apwyntiad?",
      answer:
        "Unwaith y byddwch wedi mewngofnodi fel claf, dewiswch slot sydd ar gael a dewiswch yr opsiwn archebu a ddangosir ar y cerdyn apwyntiad.",
    },
    q5: {
      question: "A allaf ganslo archeb?",
      answer:
        "Gallwch. Agorwch Rheoli Archebion i weld eich apwyntiadau presennol a chanslo archebion cymwys.",
    },
    q6: {
      question: "A allaf gymharu darparwyr yswiriant?",
      answer:
        "Gallwch. Mae'r dudalen Chwilio Yswiriant yn gadael i chi bori a chymharu darparwyr yswiriant meddygol sydd ar gael.",
    },
    q7: {
      question: "A allaf newid y thema neu'r iaith?",
      answer:
        "Gallwch. Ewch i'r dudalen Gosodiadau i newid rhwng modd golau a thywyll a dewis eich iaith ddewisol.",
    },
    q8: {
      question: "Pwy gallaf gysylltu ag ef am gymorth?",
      answer:
        "Gallwch ddefnyddio'r e-bost cyswllt a ddangosir yn y troedyn ar gyfer cymorth cyffredinol ac ymholiadau am y platfform.",
    },
  },

  providerFaq: {
    title: "Cwestiynau Cyffredin Darparwyr",
    subtitle: "Cwestiynau cyffredin i ddarparwyr sy'n defnyddio PHLS-UK.",
    q1: {
      question: "Beth yw PHLS-UK i ddarparwyr?",
      answer:
        "Mae PHLS-UK yn helpu darparwyr i gyflwyno gwasanaethau gofal iechyd ar-lein fel y gall cleifion chwilio, cymharu a chael mynediad at argaeledd apwyntiadau yn haws.",
    },
    q2: {
      question: "Sut mae cofrestru fel darparwr?",
      answer:
        "Ar y dudalen mewngofnodi a chofrestru, dewiswch Cofrestru ac yna dewiswch yr opsiwn Darparwr i greu cyfrif darparwr.",
    },
    q3: {
      question: "Pam mae angen ID clinig arnaf wrth gofrestru?",
      answer:
        "Mae ID y clinig yn cysylltu eich cyfrif darparwr â chofnod clinig sy'n bodoli eisoes yn y platfform.",
    },
    q4: {
      question: "A all darparwyr chwilio'r platfform hefyd?",
      answer:
        "Gallant. Gall darparwyr bori cynnwys y platfform o hyd, yn dibynnu ar y nodweddion sydd ar gael i rôl eu cyfrif.",
    },
    q5: {
      question: "A all darparwyr archebu apwyntiadau?",
      answer:
        "Na allant. Mae gweithredoedd archebu wedi'u bwriadu ar gyfer cyfrifon cleifion. Mae cyfrifon darparwyr wedi'u cynllunio ar gyfer rheoli gwasanaethau ac argaeledd.",
    },
    q6: {
      question: "Beth ddylwn i ei wneud os yw gwybodaeth fy nghlinig yn anghywir?",
      answer:
        "Os yw gwybodaeth eich clinig cysylltiedig yn anghywir, dylech gysylltu â chymorth y platfform fel y gellir adolygu a diweddaru data'r clinig.",
    },
    q7: {
      question: "A allaf ddefnyddio PHLS-UK yn y modd tywyll?",
      answer:
        "Gallwch. Gall darparwyr newid ymddangosiad y platfform o'r dudalen Gosodiadau.",
    },
    q8: {
      question: "Ble gallaf gael help gyda phroblemau mynediad darparwr?",
      answer:
        "Defnyddiwch yr e-bost cymorth a ddangosir yn y troedyn i gael help gyda chofrestru, mynediad neu faterion sy'n gysylltiedig â'r platfform.",
    },
  },

  slotCard: {
    bookingConfirmed: "Archeb wedi'i chadarnhau",
    bookingFailed: "Methodd yr archeb",
    baseline: "Sylfaenol",
    content: "Cynnwys",
    score: "Sgôr",
    city: "Dinas",
    postcode: "Cod post",
    rating: "Sgôr",
    specialties: "Arbenigeddau",
    notAvailable: "Ddim ar gael",
    notListed: "Heb ei restru",
    bookingInProgress: "Wrthi'n archebu...",
    bookAppointment: "Archebu Apwyntiad",
    loginAsPatient: "Mewngofnodwch fel claf i archebu'r apwyntiad hwn.",
  },

  providerCard: {
    rating: "Sgôr",
    priceFrom: "Pris o",
  },
};

const esTranslation = {
  common: {
    language: "Idioma",
    theme: "Tema",
    light: "Claro",
    dark: "Oscuro",
    home: "Inicio",
    settings: "Configuración",
    login: "Iniciar sesión",
    register: "Registrarse",
    patient: "Paciente",
    provider: "Proveedor",
    logout: "Cerrar sesión",
    exitGuest: "Salir como invitado",
    yes: "Sí",
    no: "No",
    quickActions: "Acciones rápidas",
    manageBookings: "Gestionar reservas",
    searchBookings: "Buscar reservas",
    searchInsurance: "Buscar seguros",
    manageProfile: "Gestionar perfil",
    patientFaqs: "Preguntas frecuentes para pacientes",
    providerFaqs: "Preguntas frecuentes para proveedores",
    backToTop: "↑ Volver arriba",
    scrollToBottom: "↓ Ir al final",
  },

  home: {
    title: "Bienvenido a PHLS-UK",
    subtitle:
      "Busca, compara y accede a servicios sanitarios privados en un solo lugar. Diseñado para que la reserva y la búsqueda de proveedores sean más simples, rápidas y claras.",
    role: "Rol",
    authenticated: "Autenticado",
    language: "Idioma",
    theme: "Tema",
  },

  loginPage: {
    heroTitle: "Busca y reserva atención sanitaria privada con confianza",
    heroSubtitle:
      "Compara servicios, descubre proveedores y gestiona citas a través de una plataforma sanitaria más limpia y accesible.",
    welcomeBack: "Bienvenido de nuevo",
    createAccount: "Crea tu cuenta",
    accessText: "Accede a PHLS-UK como paciente o proveedor",
    email: "Correo electrónico",
    password: "Contraseña",
    confirmPassword: "Confirmar contraseña",
    fullName: "Nombre completo",
    phoneNumber: "Número de teléfono",
    clinicId: "ID de la clínica",
    enterEmail: "Introduce tu correo electrónico",
    enterPassword: "Introduce tu contraseña",
    enterClinicId: "Introduce un ID de clínica existente",
    passwordsDoNotMatch: "Las contraseñas no coinciden",
    loginFailed: "Error al iniciar sesión",
    registrationFailed: "Error al registrarse",
    loggingIn: "Iniciando sesión...",
    registering: "Registrando...",
    enterAsGuest: "Entrar como invitado",
  },

  footer: {
    copyright: "© 2025-2026 PHLS-UK. Private Healthcare Lookup Service.",
    contact: "Contáctanos en: contact.phlsuk@gmail.com",
  },

  languages: {
    en: "Inglés",
    cy: "Galés / Cymraeg",
    es: "Español / Castellano",
    pa: "Panyabí / Punjabi",
    pl: "Polaco / Polski",
    pt: "Portugués / Português",
    ro: "Rumano / Română",
    ur: "Urdu / اردو",
  },

  settings: {
    title: "Configuración",
    subtitle:
      "Personaliza tu experiencia en PHLS-UK con preferencias de tema, idioma y notificaciones.",
    themeDescription: "Elige cómo se ve la plataforma en las páginas principales.",
    languageDescription: "Selecciona tu idioma preferido para la interfaz.",
    lightMode: "Modo claro",
    darkMode: "Modo oscuro",
    currentPreferences: "Preferencias actuales",
    notifications: {
      title: "Notificaciones",
      description:
        "Elige cómo deseas recibir notificaciones sobre reservas y la plataforma.",
      none: "Ninguna",
      email: "Correo electrónico",
      phone: "Teléfono",
      both: "Ambos",
    },
  },

  insurance: {
    title: "Búsqueda de seguros médicos",
    subtitle:
      "Explora y compara proveedores de seguros médicos privados en un diseño más limpio y sencillo.",
    searchLabel: "Buscar proveedores de seguros",
    searchPlaceholder: "Escribe el nombre del proveedor...",
    noResults: "No se encontraron proveedores de seguros.",
    from: "Desde",
    getQuote: "Obtener presupuesto ↗",
  },

  bookings: {
    title: "Buscar reservas",
    subtitle:
      "Encuentra y clasifica citas disponibles por ciudad, especialidad, fecha, hora y presupuesto.",
    location: "Ubicación",
    locationPlaceholder: "Introduce una ciudad, localidad, código postal o dirección del Reino Unido",
    findLocation: "Buscar ubicación",
    selected: "Seleccionado",
    radius: "Radio",
    radius5: "5 millas",
    radius10: "10 millas",
    radius25: "25 millas",
    radius50: "50 millas",
    specialty: "Especialidad",
    allSpecialties: "Todas las especialidades",
    maximumPrice: "Precio máximo (£)",
    enterBudget: "Introduce tu presupuesto",
    minimumRating: "Valoración mínima",
    anyRating: "Cualquier valoración",
    rating35: "3.5+",
    rating40: "4.0+",
    rating45: "4.5+",
    preferredDate: "Fecha preferida",
    preferredTime: "Hora preferida",
    anyTime: "Cualquier hora",
    morning: "Mañana",
    afternoon: "Tarde",
    evening: "Noche",
    rankingModel: "Modelo de clasificación",
    baselineWeighted: "Ponderación base",
    contentBasedSimilarity: "Similitud basada en contenido",
    baselineWeightedRanking: "Clasificación ponderada base",
    resultsLimit: "Límite de resultados",
    search: "Buscar",
    reset: "Restablecer",
    showing: "Mostrando",
    resultSingular: "resultado clasificado",
    resultsPlural: "resultados clasificados",
    using: "usando",
    loadingRankedSlots: "Cargando franjas clasificadas...",
    noAvailableBookings: "No se encontraron reservas disponibles.",
    somethingWentWrong: "Algo salió mal",
    searchFailed: "La búsqueda falló",
    locationSearchFailed: "La búsqueda de ubicación falló",
    resetFailed: "El restablecimiento falló",
  },

  manageBookings: {
    accessRestricted: "Acceso restringido",
    onlyPatientsProviders: "Solo los pacientes y proveedores pueden gestionar reservas.",
    providerTitle: "Gestionar reservas y franjas",
    patientTitle: "Gestionar reservas",
    providerSubtitle:
      "Consulta tus reservas de citas y gestiona tus franjas de disponibilidad.",
    patientSubtitle: "Consulta y gestiona tus registros de reservas desde tu cuenta.",
    loading: "Cargando...",
    appointmentBookings: "Reservas de citas",
    yourBookings: "Tus reservas",
    noBookingsFound: "No se encontraron reservas.",
    date: "Fecha",
    time: "Hora",
    cancelBookingAsProvider: "Cancelar reserva como proveedor",
    cancelBooking: "Cancelar reserva",
    manageAvailableSlots: "Gestionar franjas disponibles",
    startTime: "Hora de inicio",
    endTime: "Hora de finalización",
    price: "Precio (£)",
    addSlot: "Añadir franja",
    noSlotsFound: "No se encontraron franjas.",
    removeSlot: "Eliminar franja",
    failedToLoadData: "No se pudieron cargar los datos",
    bookingCancelled: "Reserva cancelada",
    failedToCancelBooking: "No se pudo cancelar la reserva",
    slotCreatedFor: "Franja creada para",
    failedToCreateSlot: "No se pudo crear la franja",
    slotDeleted: "Franja eliminada",
    failedToDeleteSlot: "No se pudo eliminar la franja",
  },

  profile: {
    title: "Gestionar perfil",
    subtitle: "Revisa los datos de tu cuenta y gestiona tu contraseña de forma segura.",
    mustBeLoggedIn:
      "Debes iniciar sesión como paciente o proveedor para ver los datos del perfil.",
    accountDetails: "Datos de la cuenta",
    userId: "ID de usuario",
    role: "Rol",
    fullName: "Nombre completo",
    emailAddress: "Dirección de correo electrónico",
    changePassword: "Cambiar contraseña",
    changePasswordDescription:
      "Actualiza tu contraseña para mantener tu cuenta segura.",
    currentPassword: "Contraseña actual",
    newPassword: "Nueva contraseña",
    confirmNewPassword: "Confirmar nueva contraseña",
    updatePassword: "Actualizar contraseña",
    completeAllPasswordFields: "Completa todos los campos de contraseña.",
    newPasswordsDoNotMatch: "Las nuevas contraseñas no coinciden.",
    passwordMinLength: "La nueva contraseña debe tener al menos 8 caracteres.",
    passwordChangeReady: "El cambio de contraseña está listo para conectarse al backend.",
    notAvailable: "No disponible",
    guest: "Invitado",
  },

  patientFaq: {
    title: "Preguntas frecuentes para pacientes",
    subtitle: "Preguntas comunes para pacientes que usan PHLS-UK.",
    q1: {
      question: "¿Qué es PHLS-UK?",
      answer:
        "PHLS-UK es una plataforma privada de búsqueda y reserva de atención sanitaria que ayuda a los pacientes a comparar proveedores, revisar citas disponibles y acceder a servicios con mayor facilidad.",
    },
    q2: {
      question: "¿Necesito una cuenta para usar PHLS-UK?",
      answer:
        "Puedes explorar partes de la plataforma como invitado, pero necesitas una cuenta de paciente para reservar y gestionar citas.",
    },
    q3: {
      question: "¿Cómo busco citas?",
      answer:
        "Ve a Buscar reservas y filtra por ciudad, especialidad, precio máximo o fecha preferida para ver las franjas de citas disponibles.",
    },
    q4: {
      question: "¿Cómo reservo una cita?",
      answer:
        "Una vez que hayas iniciado sesión como paciente, selecciona una franja disponible y elige la opción de reserva que aparece en la tarjeta de la cita.",
    },
    q5: {
      question: "¿Puedo cancelar una reserva?",
      answer:
        "Sí. Abre Gestionar reservas para ver tus citas actuales y cancelar las reservas que cumplan los requisitos.",
    },
    q6: {
      question: "¿Puedo comparar proveedores de seguros?",
      answer:
        "Sí. La página Buscar seguros te permite explorar y comparar proveedores de seguros médicos disponibles.",
    },
    q7: {
      question: "¿Puedo cambiar el tema o el idioma?",
      answer:
        "Sí. Visita la página Configuración para cambiar entre modo claro y oscuro y elegir tu idioma preferido.",
    },
    q8: {
      question: "¿Con quién puedo contactar para obtener ayuda?",
      answer:
        "Puedes usar el correo de contacto mostrado en el pie de página para ayuda general y consultas sobre la plataforma.",
    },
  },

  providerFaq: {
    title: "Preguntas frecuentes para proveedores",
    subtitle: "Preguntas comunes para proveedores que usan PHLS-UK.",
    q1: {
      question: "¿Qué es PHLS-UK para los proveedores?",
      answer:
        "PHLS-UK ayuda a los proveedores a presentar servicios sanitarios en línea para que los pacientes puedan buscar, comparar y acceder a la disponibilidad de citas con mayor facilidad.",
    },
    q2: {
      question: "¿Cómo me registro como proveedor?",
      answer:
        "En la página de inicio de sesión y registro, elige Registrarse y luego selecciona la opción Proveedor para crear una cuenta de proveedor.",
    },
    q3: {
      question: "¿Por qué necesito un ID de clínica al registrarme?",
      answer:
        "El ID de la clínica conecta tu cuenta de proveedor con un registro de clínica existente en la plataforma.",
    },
    q4: {
      question: "¿Los proveedores también pueden buscar en la plataforma?",
      answer:
        "Sí. Los proveedores aún pueden explorar el contenido de la plataforma, según las funciones disponibles para el rol de su cuenta.",
    },
    q5: {
      question: "¿Los proveedores pueden reservar citas?",
      answer:
        "No. Las acciones de reserva están pensadas para cuentas de pacientes. Las cuentas de proveedores están diseñadas para la gestión de servicios y disponibilidad.",
    },
    q6: {
      question: "¿Qué debo hacer si la información de mi clínica es incorrecta?",
      answer:
        "Si la información vinculada de tu clínica es incorrecta, debes contactar con el soporte de la plataforma para que los datos de la clínica puedan revisarse y actualizarse.",
    },
    q7: {
      question: "¿Puedo usar PHLS-UK en modo oscuro?",
      answer:
        "Sí. Los proveedores pueden cambiar la apariencia de la plataforma desde la página Configuración.",
    },
    q8: {
      question: "¿Dónde puedo obtener ayuda con problemas de acceso de proveedor?",
      answer:
        "Usa el correo de soporte mostrado en el pie de página para obtener ayuda con el registro, el acceso o problemas relacionados con la plataforma.",
    },
  },

  slotCard: {
    bookingConfirmed: "Reserva confirmada",
    bookingFailed: "La reserva falló",
    baseline: "Base",
    content: "Contenido",
    score: "Puntuación",
    city: "Ciudad",
    postcode: "Código postal",
    rating: "Valoración",
    specialties: "Especialidades",
    notAvailable: "N/D",
    notListed: "No indicado",
    bookingInProgress: "Reservando...",
    bookAppointment: "Reservar cita",
    loginAsPatient: "Inicia sesión como paciente para reservar esta cita.",
  },

  providerCard: {
    rating: "Valoración",
    priceFrom: "Precio desde",
  },
};

const paTranslation = {
  common: {
    language: "ਭਾਸ਼ਾ",
    theme: "ਥੀਮ",
    light: "ਹਲਕੀ",
    dark: "ਗੂੜ੍ਹੀ",
    home: "ਮੁੱਖ ਪੰਨਾ",
    settings: "ਸੈਟਿੰਗਾਂ",
    login: "ਲਾਗ ਇਨ",
    register: "ਰਜਿਸਟਰ ਕਰੋ",
    patient: "ਮਰੀਜ਼",
    provider: "ਸੇਵਾ ਪ੍ਰਦਾਤਾ",
    logout: "ਲਾਗ ਆਉਟ",
    exitGuest: "ਮਹਿਮਾਨ ਵਜੋਂ ਬਾਹਰ ਨਿਕਲੋ",
    yes: "ਹਾਂ",
    no: "ਨਹੀਂ",
    quickActions: "ਤੁਰੰਤ ਕਾਰਵਾਈਆਂ",
    manageBookings: "ਬੁਕਿੰਗਾਂ ਸੰਭਾਲੋ",
    searchBookings: "ਬੁਕਿੰਗਾਂ ਖੋਜੋ",
    searchInsurance: "ਬੀਮਾ ਖੋਜੋ",
    manageProfile: "ਪ੍ਰੋਫ਼ਾਈਲ ਸੰਭਾਲੋ",
    patientFaqs: "ਮਰੀਜ਼ਾਂ ਲਈ ਆਮ ਸਵਾਲ",
    providerFaqs: "ਸੇਵਾ ਪ੍ਰਦਾਤਾਵਾਂ ਲਈ ਆਮ ਸਵਾਲ",
    backToTop: "↑ ਉੱਪਰ ਵਾਪਸ ਜਾਓ",
    scrollToBottom: "↓ ਹੇਠਾਂ ਜਾਓ",
  },

  home: {
    title: "PHLS-UK ਵਿੱਚ ਤੁਹਾਡਾ ਸਵਾਗਤ ਹੈ",
    subtitle:
      "ਇੱਕੋ ਥਾਂ 'ਤੇ ਨਿੱਜੀ ਸਿਹਤ ਸੇਵਾਵਾਂ ਖੋਜੋ, ਤੁਲਨਾ ਕਰੋ ਅਤੇ ਪ੍ਰਾਪਤ ਕਰੋ। ਇਹ ਇਸ ਤਰ੍ਹਾਂ ਬਣਾਇਆ ਗਿਆ ਹੈ ਕਿ ਬੁਕਿੰਗ ਅਤੇ ਸੇਵਾ ਪ੍ਰਦਾਤਾਵਾਂ ਦੀ ਖੋਜ ਹੋਰ ਆਸਾਨ, ਤੇਜ਼ ਅਤੇ ਸਪਸ਼ਟ ਬਣੇ।",
    role: "ਭੂਮਿਕਾ",
    authenticated: "ਪ੍ਰਮਾਣਿਤ",
    language: "ਭਾਸ਼ਾ",
    theme: "ਥੀਮ",
  },

  loginPage: {
    heroTitle: "ਭਰੋਸੇ ਨਾਲ ਨਿੱਜੀ ਸਿਹਤ ਸੇਵਾ ਖੋਜੋ ਅਤੇ ਬੁੱਕ ਕਰੋ",
    heroSubtitle:
      "ਸੇਵਾਵਾਂ ਦੀ ਤੁਲਨਾ ਕਰੋ, ਸੇਵਾ ਪ੍ਰਦਾਤੇ ਲੱਭੋ ਅਤੇ ਇਕ ਹੋਰ ਸਾਫ਼ ਅਤੇ ਪਹੁੰਚਯੋਗ ਸਿਹਤ ਪਲੇਟਫਾਰਮ ਰਾਹੀਂ ਮੀਟਿੰਗਾਂ ਸੰਭਾਲੋ।",
    welcomeBack: "ਵਾਪਸੀ ਤੇ ਸਵਾਗਤ ਹੈ",
    createAccount: "ਆਪਣਾ ਖਾਤਾ ਬਣਾਓ",
    accessText: "PHLS-UK ਨੂੰ ਮਰੀਜ਼ ਜਾਂ ਸੇਵਾ ਪ੍ਰਦਾਤਾ ਵਜੋਂ ਵਰਤੋ",
    email: "ਈਮੇਲ",
    password: "ਪਾਸਵਰਡ",
    confirmPassword: "ਪਾਸਵਰਡ ਦੀ ਪੁਸ਼ਟੀ ਕਰੋ",
    fullName: "ਪੂਰਾ ਨਾਮ",
    phoneNumber: "ਫ਼ੋਨ ਨੰਬਰ",
    clinicId: "ਕਲਿਨਿਕ ID",
    enterEmail: "ਆਪਣਾ ਈਮੇਲ ਦਾਖਲ ਕਰੋ",
    enterPassword: "ਆਪਣਾ ਪਾਸਵਰਡ ਦਾਖਲ ਕਰੋ",
    enterClinicId: "ਮੌਜੂਦਾ ਕਲਿਨਿਕ ID ਦਾਖਲ ਕਰੋ",
    passwordsDoNotMatch: "ਪਾਸਵਰਡ ਮੇਲ ਨਹੀਂ ਖਾਂਦੇ",
    loginFailed: "ਲਾਗ ਇਨ ਅਸਫਲ ਰਹੀ",
    registrationFailed: "ਰਜਿਸਟ੍ਰੇਸ਼ਨ ਅਸਫਲ ਰਹੀ",
    loggingIn: "ਲਾਗ ਇਨ ਕੀਤਾ ਜਾ ਰਿਹਾ ਹੈ...",
    registering: "ਰਜਿਸਟਰ ਕੀਤਾ ਜਾ ਰਿਹਾ ਹੈ...",
    enterAsGuest: "ਮਹਿਮਾਨ ਵਜੋਂ ਪ੍ਰਵੇਸ਼ ਕਰੋ",
  },

  footer: {
    copyright: "© 2025-2026 PHLS-UK. Private Healthcare Lookup Service.",
    contact: "ਸਾਡੇ ਨਾਲ ਸੰਪਰਕ ਕਰੋ: contact.phlsuk@gmail.com",
  },

  languages: {
    en: "ਅੰਗਰੇਜ਼ੀ",
    cy: "ਵੈਲਸ਼ / Cymraeg",
    es: "ਸਪੇਨੀ / Español",
    pa: "ਪੰਜਾਬੀ",
    pl: "ਪੋਲਿਸ਼ / Polski",
    pt: "ਪੁਰਤਗਾਲੀ / Português",
    ro: "ਰੋਮਾਨੀਆਈ / Română",
    ur: "ਉਰਦੂ / اردو",
  },

  settings: {
    title: "ਸੈਟਿੰਗਾਂ",
    subtitle:
      "ਥੀਮ, ਭਾਸ਼ਾ ਅਤੇ ਨੋਟੀਫਿਕੇਸ਼ਨ ਪਸੰਦਾਂ ਨਾਲ ਆਪਣੇ PHLS-UK ਅਨੁਭਵ ਨੂੰ ਨਿੱਜੀ ਬਣਾਓ।",
    themeDescription: "ਚੁਣੋ ਕਿ ਪਲੇਟਫਾਰਮ ਮੁੱਖ ਪੰਨਿਆਂ 'ਤੇ ਕਿਵੇਂ ਦਿਖਾਈ ਦੇਵੇ।",
    languageDescription: "ਇੰਟਰਫੇਸ ਲਈ ਆਪਣੀ ਮਨਪਸੰਦ ਭਾਸ਼ਾ ਚੁਣੋ।",
    lightMode: "ਹਲਕੀ ਮੋਡ",
    darkMode: "ਗੂੜ੍ਹੀ ਮੋਡ",
    currentPreferences: "ਮੌਜੂਦਾ ਪਸੰਦਾਂ",
    notifications: {
      title: "ਨੋਟੀਫਿਕੇਸ਼ਨ",
      description:
        "ਚੁਣੋ ਕਿ ਤੁਸੀਂ ਬੁਕਿੰਗਾਂ ਅਤੇ ਪਲੇਟਫਾਰਮ ਸਬੰਧੀ ਨੋਟੀਫਿਕੇਸ਼ਨ ਕਿਵੇਂ ਲੈਣਾ ਚਾਹੁੰਦੇ ਹੋ।",
      none: "ਕੋਈ ਨਹੀਂ",
      email: "ਈਮੇਲ",
      phone: "ਫ਼ੋਨ",
      both: "ਦੋਵੇਂ",
    },
  },

  insurance: {
    title: "ਮੈਡੀਕਲ ਇਨਸ਼ੋਰੈਂਸ ਖੋਜ",
    subtitle:
      "ਇੱਕ ਹੋਰ ਸਾਫ਼ ਅਤੇ ਆਸਾਨ ਲੇਆਉਟ ਵਿੱਚ ਨਿੱਜੀ ਮੈਡੀਕਲ ਇਨਸ਼ੋਰੈਂਸ ਪ੍ਰਦਾਤਾਵਾਂ ਨੂੰ ਵੇਖੋ ਅਤੇ ਤੁਲਨਾ ਕਰੋ।",
    searchLabel: "ਇਨਸ਼ੋਰੈਂਸ ਪ੍ਰਦਾਤਾ ਖੋਜੋ",
    searchPlaceholder: "ਪ੍ਰਦਾਤਾ ਦਾ ਨਾਮ ਲਿਖੋ...",
    noResults: "ਕੋਈ ਇਨਸ਼ੋਰੈਂਸ ਪ੍ਰਦਾਤਾ ਨਹੀਂ ਮਿਲੇ।",
    from: "ਸ਼ੁਰੂ",
    getQuote: "ਕੋਟ ਪ੍ਰਾਪਤ ਕਰੋ ↗",
  },

  bookings: {
    title: "ਬੁਕਿੰਗਾਂ ਖੋਜੋ",
    subtitle:
      "ਸ਼ਹਿਰ, ਵਿਸ਼ੇਸ਼ਤਾ, ਮਿਤੀ, ਸਮਾਂ ਅਤੇ ਬਜਟ ਅਨੁਸਾਰ ਉਪਲਬਧ ਮੀਟਿੰਗਾਂ ਲੱਭੋ ਅਤੇ ਕ੍ਰਮਬੱਧ ਕਰੋ।",
    location: "ਸਥਾਨ",
    locationPlaceholder: "ਯੂਕੇ ਦਾ ਕਸਬਾ, ਸ਼ਹਿਰ, ਪੋਸਟਕੋਡ ਜਾਂ ਪਤਾ ਦਾਖਲ ਕਰੋ",
    findLocation: "ਸਥਾਨ ਲੱਭੋ",
    selected: "ਚੁਣਿਆ ਗਿਆ",
    radius: "ਘੇਰਾ",
    radius5: "5 ਮੀਲ",
    radius10: "10 ਮੀਲ",
    radius25: "25 ਮੀਲ",
    radius50: "50 ਮੀਲ",
    specialty: "ਵਿਸ਼ੇਸ਼ਤਾ",
    allSpecialties: "ਸਾਰੀਆਂ ਵਿਸ਼ੇਸ਼ਤਾਵਾਂ",
    maximumPrice: "ਅਧਿਕਤਮ ਕੀਮਤ (£)",
    enterBudget: "ਬਜਟ ਦਾਖਲ ਕਰੋ",
    minimumRating: "ਘੱਟੋ-ਘੱਟ ਰੇਟਿੰਗ",
    anyRating: "ਕੋਈ ਵੀ ਰੇਟਿੰਗ",
    rating35: "3.5+",
    rating40: "4.0+",
    rating45: "4.5+",
    preferredDate: "ਪਸੰਦੀਦਾ ਮਿਤੀ",
    preferredTime: "ਪਸੰਦੀਦਾ ਸਮਾਂ",
    anyTime: "ਕੋਈ ਵੀ ਸਮਾਂ",
    morning: "ਸਵੇਰ",
    afternoon: "ਦੁਪਹਿਰ",
    evening: "ਸ਼ਾਮ",
    rankingModel: "ਰੈਂਕਿੰਗ ਮਾਡਲ",
    baselineWeighted: "ਬੇਸਲਾਈਨ ਵੇਟਡ",
    contentBasedSimilarity: "ਸਮੱਗਰੀ ਅਧਾਰਿਤ ਮਿਲਾਪ",
    baselineWeightedRanking: "ਬੇਸਲਾਈਨ ਵੇਟਡ ਰੈਂਕਿੰਗ",
    resultsLimit: "ਨਤੀਜਿਆਂ ਦੀ ਸੀਮਾ",
    search: "ਖੋਜੋ",
    reset: "ਰੀਸੈਟ",
    showing: "ਦਿਖਾਏ ਜਾ ਰਹੇ ਹਨ",
    resultSingular: "ਰੈਂਕ ਕੀਤਾ ਨਤੀਜਾ",
    resultsPlural: "ਰੈਂਕ ਕੀਤੇ ਨਤੀਜੇ",
    using: "ਵਰਤਦੇ ਹੋਏ",
    loadingRankedSlots: "ਰੈਂਕ ਕੀਤੇ ਸਲਾਟ ਲੋਡ ਹੋ ਰਹੇ ਹਨ...",
    noAvailableBookings: "ਕੋਈ ਉਪਲਬਧ ਬੁਕਿੰਗ ਨਹੀਂ ਮਿਲੀ।",
    somethingWentWrong: "ਕੁਝ ਗਲਤ ਹੋ ਗਿਆ",
    searchFailed: "ਖੋਜ ਅਸਫਲ ਰਹੀ",
    locationSearchFailed: "ਸਥਾਨ ਖੋਜ ਅਸਫਲ ਰਹੀ",
    resetFailed: "ਰੀਸੈਟ ਅਸਫਲ ਰਹੀ",
  },

  manageBookings: {
    accessRestricted: "ਪਹੁੰਚ ਸੀਮਿਤ",
    onlyPatientsProviders: "ਸਿਰਫ਼ ਮਰੀਜ਼ ਅਤੇ ਸੇਵਾ ਪ੍ਰਦਾਤੇ ਹੀ ਬੁਕਿੰਗਾਂ ਸੰਭਾਲ ਸਕਦੇ ਹਨ।",
    providerTitle: "ਬੁਕਿੰਗਾਂ ਅਤੇ ਸਲਾਟ ਸੰਭਾਲੋ",
    patientTitle: "ਬੁਕਿੰਗਾਂ ਸੰਭਾਲੋ",
    providerSubtitle:
      "ਆਪਣੀਆਂ ਮੀਟਿੰਗ ਬੁਕਿੰਗਾਂ ਵੇਖੋ ਅਤੇ ਆਪਣੇ ਉਪਲਬਧ ਸਮਾਂ ਸਲਾਟ ਸੰਭਾਲੋ।",
    patientSubtitle: "ਆਪਣੇ ਖਾਤੇ ਤੋਂ ਬੁਕਿੰਗ ਰਿਕਾਰਡ ਵੇਖੋ ਅਤੇ ਸੰਭਾਲੋ।",
    loading: "ਲੋਡ ਹੋ ਰਿਹਾ ਹੈ...",
    appointmentBookings: "ਮੀਟਿੰਗ ਬੁਕਿੰਗਾਂ",
    yourBookings: "ਤੁਹਾਡੀਆਂ ਬੁਕਿੰਗਾਂ",
    noBookingsFound: "ਕੋਈ ਬੁਕਿੰਗ ਨਹੀਂ ਮਿਲੀ।",
    date: "ਮਿਤੀ",
    time: "ਸਮਾਂ",
    cancelBookingAsProvider: "ਸੇਵਾ ਪ੍ਰਦਾਤਾ ਵਜੋਂ ਬੁਕਿੰਗ ਰੱਦ ਕਰੋ",
    cancelBooking: "ਬੁਕਿੰਗ ਰੱਦ ਕਰੋ",
    manageAvailableSlots: "ਉਪਲਬਧ ਸਲਾਟ ਸੰਭਾਲੋ",
    startTime: "ਸ਼ੁਰੂਆਤੀ ਸਮਾਂ",
    endTime: "ਅੰਤ ਸਮਾਂ",
    price: "ਕੀਮਤ (£)",
    addSlot: "ਸਲਾਟ ਸ਼ਾਮਲ ਕਰੋ",
    noSlotsFound: "ਕੋਈ ਸਲਾਟ ਨਹੀਂ ਮਿਲੇ।",
    removeSlot: "ਸਲਾਟ ਹਟਾਓ",
    failedToLoadData: "ਡਾਟਾ ਲੋਡ ਕਰਨ ਵਿੱਚ ਅਸਫਲ",
    bookingCancelled: "ਬੁਕਿੰਗ ਰੱਦ ਹੋ ਗਈ",
    failedToCancelBooking: "ਬੁਕਿੰਗ ਰੱਦ ਕਰਨ ਵਿੱਚ ਅਸਫਲ",
    slotCreatedFor: "ਸਲਾਟ ਬਣਾਇਆ ਗਿਆ",
    failedToCreateSlot: "ਸਲਾਟ ਬਣਾਉਣ ਵਿੱਚ ਅਸਫਲ",
    slotDeleted: "ਸਲਾਟ ਮਿਟਾ ਦਿੱਤਾ ਗਿਆ",
    failedToDeleteSlot: "ਸਲਾਟ ਮਿਟਾਉਣ ਵਿੱਚ ਅਸਫਲ",
  },

  profile: {
    title: "ਪ੍ਰੋਫ਼ਾਈਲ ਸੰਭਾਲੋ",
    subtitle: "ਆਪਣੇ ਖਾਤੇ ਦੇ ਵੇਰਵੇ ਵੇਖੋ ਅਤੇ ਆਪਣਾ ਪਾਸਵਰਡ ਸੁਰੱਖਿਅਤ ਤਰੀਕੇ ਨਾਲ ਸੰਭਾਲੋ।",
    mustBeLoggedIn:
      "ਪ੍ਰੋਫ਼ਾਈਲ ਵੇਰਵੇ ਵੇਖਣ ਲਈ ਤੁਹਾਨੂੰ ਮਰੀਜ਼ ਜਾਂ ਸੇਵਾ ਪ੍ਰਦਾਤਾ ਵਜੋਂ ਲਾਗ ਇਨ ਹੋਣਾ ਲਾਜ਼ਮੀ ਹੈ।",
    accountDetails: "ਖਾਤੇ ਦੇ ਵੇਰਵੇ",
    userId: "ਯੂਜ਼ਰ ID",
    role: "ਭੂਮਿਕਾ",
    fullName: "ਪੂਰਾ ਨਾਮ",
    emailAddress: "ਈਮੇਲ ਪਤਾ",
    changePassword: "ਪਾਸਵਰਡ ਬਦਲੋ",
    changePasswordDescription:
      "ਆਪਣੇ ਖਾਤੇ ਨੂੰ ਸੁਰੱਖਿਅਤ ਰੱਖਣ ਲਈ ਪਾਸਵਰਡ ਅਪਡੇਟ ਕਰੋ।",
    currentPassword: "ਮੌਜੂਦਾ ਪਾਸਵਰਡ",
    newPassword: "ਨਵਾਂ ਪਾਸਵਰਡ",
    confirmNewPassword: "ਨਵੇਂ ਪਾਸਵਰਡ ਦੀ ਪੁਸ਼ਟੀ ਕਰੋ",
    updatePassword: "ਪਾਸਵਰਡ ਅਪਡੇਟ ਕਰੋ",
    completeAllPasswordFields: "ਸਾਰੇ ਪਾਸਵਰਡ ਖੇਤਰ ਪੂਰੇ ਕਰੋ।",
    newPasswordsDoNotMatch: "ਨਵੇਂ ਪਾਸਵਰਡ ਮੇਲ ਨਹੀਂ ਖਾਂਦੇ।",
    passwordMinLength: "ਨਵਾਂ ਪਾਸਵਰਡ ਘੱਟੋ-ਘੱਟ 8 ਅੱਖਰਾਂ ਦਾ ਹੋਣਾ ਚਾਹੀਦਾ ਹੈ।",
    passwordChangeReady: "ਪਾਸਵਰਡ ਬਦਲਾਅ backend ਨਾਲ ਜੋੜਨ ਲਈ ਤਿਆਰ ਹੈ।",
    notAvailable: "ਉਪਲਬਧ ਨਹੀਂ",
    guest: "ਮਹਿਮਾਨ",
  },

  patientFaq: {
    title: "ਮਰੀਜ਼ਾਂ ਲਈ ਆਮ ਸਵਾਲ",
    subtitle: "PHLS-UK ਵਰਤਣ ਵਾਲੇ ਮਰੀਜ਼ਾਂ ਲਈ ਆਮ ਸਵਾਲ।",
    q1: {
      question: "PHLS-UK ਕੀ ਹੈ?",
      answer:
        "PHLS-UK ਇੱਕ ਨਿੱਜੀ ਸਿਹਤ ਸੇਵਾ ਖੋਜ ਅਤੇ ਬੁਕਿੰਗ ਪਲੇਟਫਾਰਮ ਹੈ ਜੋ ਮਰੀਜ਼ਾਂ ਨੂੰ ਸੇਵਾ ਪ੍ਰਦਾਤਾਵਾਂ ਦੀ ਤੁਲਨਾ ਕਰਨ, ਉਪਲਬਧ ਮੀਟਿੰਗਾਂ ਵੇਖਣ ਅਤੇ ਸੇਵਾਵਾਂ ਤੱਕ ਹੋਰ ਆਸਾਨੀ ਨਾਲ ਪਹੁੰਚਣ ਵਿੱਚ ਮਦਦ ਕਰਦਾ ਹੈ।",
    },
    q2: {
      question: "ਕੀ PHLS-UK ਵਰਤਣ ਲਈ ਮੈਨੂੰ ਖਾਤੇ ਦੀ ਲੋੜ ਹੈ?",
      answer:
        "ਤੁਸੀਂ ਪਲੇਟਫਾਰਮ ਦੇ ਕੁਝ ਹਿੱਸੇ ਮਹਿਮਾਨ ਵਜੋਂ ਵੇਖ ਸਕਦੇ ਹੋ, ਪਰ ਮੀਟਿੰਗਾਂ ਬੁੱਕ ਕਰਨ ਅਤੇ ਸੰਭਾਲਣ ਲਈ ਤੁਹਾਨੂੰ ਮਰੀਜ਼ ਖਾਤੇ ਦੀ ਲੋੜ ਹੈ।",
    },
    q3: {
      question: "ਮੈਂ ਮੀਟਿੰਗਾਂ ਕਿਵੇਂ ਖੋਜਾਂ?",
      answer:
        "ਬੁਕਿੰਗਾਂ ਖੋਜੋ ਪੰਨੇ 'ਤੇ ਜਾਓ, ਫਿਰ ਸ਼ਹਿਰ, ਵਿਸ਼ੇਸ਼ਤਾ, ਅਧਿਕਤਮ ਕੀਮਤ ਜਾਂ ਪਸੰਦੀਦਾ ਮਿਤੀ ਅਨੁਸਾਰ ਫਿਲਟਰ ਕਰੋ ਅਤੇ ਉਪਲਬਧ ਸਲਾਟ ਵੇਖੋ।",
    },
    q4: {
      question: "ਮੈਂ ਮੀਟਿੰਗ ਕਿਵੇਂ ਬੁੱਕ ਕਰਾਂ?",
      answer:
        "ਮਰੀਜ਼ ਵਜੋਂ ਲਾਗ ਇਨ ਕਰਨ ਤੋਂ ਬਾਅਦ, ਇੱਕ ਉਪਲਬਧ ਸਲਾਟ ਚੁਣੋ ਅਤੇ ਮੀਟਿੰਗ ਕਾਰਡ 'ਤੇ ਦਿਖਾਈ ਬੁਕਿੰਗ ਵਿਕਲਪ ਨੂੰ ਚੁਣੋ।",
    },
    q5: {
      question: "ਕੀ ਮੈਂ ਬੁਕਿੰਗ ਰੱਦ ਕਰ ਸਕਦਾ/ਸਕਦੀ ਹਾਂ?",
      answer:
        "ਹਾਂ। ਆਪਣੀਆਂ ਮੌਜੂਦਾ ਮੀਟਿੰਗਾਂ ਵੇਖਣ ਅਤੇ ਯੋਗ ਬੁਕਿੰਗਾਂ ਰੱਦ ਕਰਨ ਲਈ ਬੁਕਿੰਗਾਂ ਸੰਭਾਲੋ ਖੋਲ੍ਹੋ।",
    },
    q6: {
      question: "ਕੀ ਮੈਂ ਇਨਸ਼ੋਰੈਂਸ ਪ੍ਰਦਾਤਾਵਾਂ ਦੀ ਤੁਲਨਾ ਕਰ ਸਕਦਾ/ਸਕਦੀ ਹਾਂ?",
      answer:
        "ਹਾਂ। ਬੀਮਾ ਖੋਜੋ ਪੰਨਾ ਤੁਹਾਨੂੰ ਉਪਲਬਧ ਮੈਡੀਕਲ ਇਨਸ਼ੋਰੈਂਸ ਪ੍ਰਦਾਤਾਵਾਂ ਨੂੰ ਵੇਖਣ ਅਤੇ ਤੁਲਨਾ ਕਰਨ ਦੀ ਆਗਿਆ ਦਿੰਦਾ ਹੈ।",
    },
    q7: {
      question: "ਕੀ ਮੈਂ ਥੀਮ ਜਾਂ ਭਾਸ਼ਾ ਬਦਲ ਸਕਦਾ/ਸਕਦੀ ਹਾਂ?",
      answer:
        "ਹਾਂ। ਹਲਕੀ ਅਤੇ ਗੂੜ੍ਹੀ ਮੋਡ ਵਿੱਚ ਬਦਲਾਅ ਕਰਨ ਅਤੇ ਆਪਣੀ ਮਨਪਸੰਦ ਭਾਸ਼ਾ ਚੁਣਨ ਲਈ ਸੈਟਿੰਗਾਂ ਪੰਨੇ 'ਤੇ ਜਾਓ।",
    },
    q8: {
      question: "ਮਦਦ ਲਈ ਮੈਂ ਕਿਸ ਨਾਲ ਸੰਪਰਕ ਕਰਾਂ?",
      answer:
        "ਆਮ ਸਹਾਇਤਾ ਅਤੇ ਪਲੇਟਫਾਰਮ ਸਬੰਧੀ ਪੁੱਛਗਿੱਛ ਲਈ ਤੁਸੀਂ ਫੁਟਰ ਵਿੱਚ ਦਿੱਤੇ ਸੰਪਰਕ ਈਮੇਲ ਦੀ ਵਰਤੋਂ ਕਰ ਸਕਦੇ ਹੋ।",
    },
  },

  providerFaq: {
    title: "ਸੇਵਾ ਪ੍ਰਦਾਤਾਵਾਂ ਲਈ ਆਮ ਸਵਾਲ",
    subtitle: "PHLS-UK ਵਰਤਣ ਵਾਲੇ ਸੇਵਾ ਪ੍ਰਦਾਤਾਵਾਂ ਲਈ ਆਮ ਸਵਾਲ।",
    q1: {
      question: "ਸੇਵਾ ਪ੍ਰਦਾਤਾਵਾਂ ਲਈ PHLS-UK ਕੀ ਹੈ?",
      answer:
        "PHLS-UK ਸੇਵਾ ਪ੍ਰਦਾਤਾਵਾਂ ਨੂੰ ਆਪਣੀਆਂ ਸਿਹਤ ਸੇਵਾਵਾਂ ਆਨਲਾਈਨ ਪੇਸ਼ ਕਰਨ ਵਿੱਚ ਮਦਦ ਕਰਦਾ ਹੈ ਤਾਂ ਜੋ ਮਰੀਜ਼ ਹੋਰ ਆਸਾਨੀ ਨਾਲ ਖੋਜ, ਤੁਲਨਾ ਅਤੇ ਮੀਟਿੰਗ ਉਪਲਬਧਤਾ ਤੱਕ ਪਹੁੰਚ ਕਰ ਸਕਣ।",
    },
    q2: {
      question: "ਮੈਂ ਸੇਵਾ ਪ੍ਰਦਾਤਾ ਵਜੋਂ ਰਜਿਸਟਰ ਕਿਵੇਂ ਕਰਾਂ?",
      answer:
        "ਲਾਗ ਇਨ ਅਤੇ ਰਜਿਸਟ੍ਰੇਸ਼ਨ ਪੰਨੇ 'ਤੇ ਰਜਿਸਟਰ ਕਰੋ ਚੁਣੋ ਅਤੇ ਫਿਰ ਸੇਵਾ ਪ੍ਰਦਾਤਾ ਵਿਕਲਪ ਚੁਣ ਕੇ ਖਾਤਾ ਬਣਾਓ।",
    },
    q3: {
      question: "ਰਜਿਸਟਰ ਕਰਦੇ ਸਮੇਂ ਮੈਨੂੰ ਕਲਿਨਿਕ ID ਦੀ ਲੋੜ ਕਿਉਂ ਹੈ?",
      answer:
        "ਕਲਿਨਿਕ ID ਤੁਹਾਡੇ ਸੇਵਾ ਪ੍ਰਦਾਤਾ ਖਾਤੇ ਨੂੰ ਪਲੇਟਫਾਰਮ ਵਿੱਚ ਮੌਜੂਦਾ ਕਲਿਨਿਕ ਰਿਕਾਰਡ ਨਾਲ ਜੋੜਦੀ ਹੈ।",
    },
    q4: {
      question: "ਕੀ ਸੇਵਾ ਪ੍ਰਦਾਤੇ ਵੀ ਪਲੇਟਫਾਰਮ ਖੋਜ ਸਕਦੇ ਹਨ?",
      answer:
        "ਹਾਂ। ਆਪਣੀ ਖਾਤਾ ਭੂਮਿਕਾ ਲਈ ਉਪਲਬਧ ਵਿਸ਼ੇਸ਼ਤਾਵਾਂ ਦੇ ਅਨੁਸਾਰ ਸੇਵਾ ਪ੍ਰਦਾਤੇ ਪਲੇਟਫਾਰਮ ਦੀ ਸਮੱਗਰੀ ਵੇਖ ਸਕਦੇ ਹਨ।",
    },
    q5: {
      question: "ਕੀ ਸੇਵਾ ਪ੍ਰਦਾਤੇ ਮੀਟਿੰਗਾਂ ਬੁੱਕ ਕਰ ਸਕਦੇ ਹਨ?",
      answer:
        "ਨਹੀਂ। ਬੁਕਿੰਗ ਕਾਰਵਾਈਆਂ ਮਰੀਜ਼ ਖਾਤਿਆਂ ਲਈ ਹਨ। ਸੇਵਾ ਪ੍ਰਦਾਤਾ ਖਾਤੇ ਸੇਵਾਵਾਂ ਅਤੇ ਉਪਲਬਧਤਾ ਸੰਭਾਲਣ ਲਈ ਬਣਾਏ ਗਏ ਹਨ।",
    },
    q6: {
      question: "ਜੇ ਮੇਰੇ ਕਲਿਨਿਕ ਦੀ ਜਾਣਕਾਰੀ ਗਲਤ ਹੋਵੇ ਤਾਂ ਮੈਂ ਕੀ ਕਰਾਂ?",
      answer:
        "ਜੇ ਤੁਹਾਡੇ ਨਾਲ ਜੁੜੀ ਕਲਿਨਿਕ ਜਾਣਕਾਰੀ ਗਲਤ ਹੈ, ਤਾਂ ਤੁਹਾਨੂੰ ਪਲੇਟਫਾਰਮ ਸਹਾਇਤਾ ਨਾਲ ਸੰਪਰਕ ਕਰਨਾ ਚਾਹੀਦਾ ਹੈ ਤਾਂ ਜੋ ਕਲਿਨਿਕ ਡਾਟਾ ਦੀ ਸਮੀਖਿਆ ਅਤੇ ਅਪਡੇਟ ਕੀਤੀ ਜਾ ਸਕੇ।",
    },
    q7: {
      question: "ਕੀ ਮੈਂ PHLS-UK ਨੂੰ ਗੂੜ੍ਹੀ ਮੋਡ ਵਿੱਚ ਵਰਤ ਸਕਦਾ/ਸਕਦੀ ਹਾਂ?",
      answer:
        "ਹਾਂ। ਸੇਵਾ ਪ੍ਰਦਾਤੇ ਸੈਟਿੰਗਾਂ ਪੰਨੇ ਤੋਂ ਪਲੇਟਫਾਰਮ ਦੀ ਦਿੱਖ ਬਦਲ ਸਕਦੇ ਹਨ।",
    },
    q8: {
      question: "ਸੇਵਾ ਪ੍ਰਦਾਤਾ ਪਹੁੰਚ ਸਬੰਧੀ ਸਮੱਸਿਆਵਾਂ ਲਈ ਮੈਨੂੰ ਕਿੱਥੇ ਮਦਦ ਮਿਲੇਗੀ?",
      answer:
        "ਰਜਿਸਟ੍ਰੇਸ਼ਨ, ਪਹੁੰਚ ਜਾਂ ਪਲੇਟਫਾਰਮ ਸਬੰਧੀ ਸਮੱਸਿਆਵਾਂ ਲਈ ਫੁਟਰ ਵਿੱਚ ਦਿੱਤਾ ਸਹਾਇਤਾ ਈਮੇਲ ਵਰਤੋ।",
    },
  },

  slotCard: {
    bookingConfirmed: "ਬੁਕਿੰਗ ਪੁਸ਼ਟੀ ਹੋ ਗਈ",
    bookingFailed: "ਬੁਕਿੰਗ ਅਸਫਲ ਰਹੀ",
    baseline: "ਬੇਸਲਾਈਨ",
    content: "ਸਮੱਗਰੀ",
    score: "ਸਕੋਰ",
    city: "ਸ਼ਹਿਰ",
    postcode: "ਪੋਸਟਕੋਡ",
    rating: "ਰੇਟਿੰਗ",
    specialties: "ਵਿਸ਼ੇਸ਼ਤਾਵਾਂ",
    notAvailable: "ਉਪਲਬਧ ਨਹੀਂ",
    notListed: "ਸੂਚੀਬੱਧ ਨਹੀਂ",
    bookingInProgress: "ਬੁਕਿੰਗ ਕੀਤੀ ਜਾ ਰਹੀ ਹੈ...",
    bookAppointment: "ਮੀਟਿੰਗ ਬੁੱਕ ਕਰੋ",
    loginAsPatient: "ਇਹ ਮੀਟਿੰਗ ਬੁੱਕ ਕਰਨ ਲਈ ਮਰੀਜ਼ ਵਜੋਂ ਲਾਗ ਇਨ ਕਰੋ।",
  },

  providerCard: {
    rating: "ਰੇਟਿੰਗ",
    priceFrom: "ਕੀਮਤ ਸ਼ੁਰੂ",
  },
};

const plTranslation = {
  common: {
    language: "Język",
    theme: "Motyw",
    light: "Jasny",
    dark: "Ciemny",
    home: "Strona główna",
    settings: "Ustawienia",
    login: "Zaloguj się",
    register: "Zarejestruj się",
    patient: "Pacjent",
    provider: "Usługodawca",
    logout: "Wyloguj się",
    exitGuest: "Wyjdź jako gość",
    yes: "Tak",
    no: "Nie",
    quickActions: "Szybkie akcje",
    manageBookings: "Zarządzaj rezerwacjami",
    searchBookings: "Wyszukaj rezerwacje",
    searchInsurance: "Wyszukaj ubezpieczenia",
    manageProfile: "Zarządzaj profilem",
    patientFaqs: "FAQ dla pacjentów",
    providerFaqs: "FAQ dla usługodawców",
    backToTop: "↑ Wróć na górę",
    scrollToBottom: "↓ Przejdź na dół",
  },

  home: {
    title: "Witamy w PHLS-UK",
    subtitle:
      "Wyszukuj, porównuj i uzyskuj dostęp do prywatnych usług opieki zdrowotnej w jednym miejscu. Zaprojektowano tak, aby rezerwacja i wyszukiwanie usługodawców były prostsze, szybsze i bardziej przejrzyste.",
    role: "Rola",
    authenticated: "Zalogowany",
    language: "Język",
    theme: "Motyw",
  },

  loginPage: {
    heroTitle: "Wyszukuj i rezerwuj prywatną opiekę zdrowotną z pewnością",
    heroSubtitle:
      "Porównuj usługi, odkrywaj usługodawców i zarządzaj wizytami za pomocą bardziej przejrzystej i dostępnej platformy opieki zdrowotnej.",
    welcomeBack: "Witamy ponownie",
    createAccount: "Utwórz konto",
    accessText: "Uzyskaj dostęp do PHLS-UK jako pacjent lub usługodawca",
    email: "Adres e-mail",
    password: "Hasło",
    confirmPassword: "Potwierdź hasło",
    fullName: "Imię i nazwisko",
    phoneNumber: "Numer telefonu",
    clinicId: "ID kliniki",
    enterEmail: "Wpisz adres e-mail",
    enterPassword: "Wpisz hasło",
    enterClinicId: "Wpisz istniejące ID kliniki",
    passwordsDoNotMatch: "Hasła nie są zgodne",
    loginFailed: "Logowanie nie powiodło się",
    registrationFailed: "Rejestracja nie powiodła się",
    loggingIn: "Trwa logowanie...",
    registering: "Trwa rejestracja...",
    enterAsGuest: "Wejdź jako gość",
  },

  footer: {
    copyright: "© 2025-2026 PHLS-UK. Private Healthcare Lookup Service.",
    contact: "Skontaktuj się z nami: contact.phlsuk@gmail.com",
  },

  languages: {
    en: "Angielski",
    cy: "Walijski / Cymraeg",
    es: "Hiszpański / Español",
    pa: "Pendżabski / Punjabi",
    pl: "Polski",
    pt: "Portugalski / Português",
    ro: "Rumuński / Română",
    ur: "Urdu / اردو",
  },

  settings: {
    title: "Ustawienia",
    subtitle:
      "Spersonalizuj korzystanie z PHLS-UK, wybierając motyw, język i preferencje powiadomień.",
    themeDescription: "Wybierz wygląd platformy na głównych stronach.",
    languageDescription: "Wybierz preferowany język interfejsu.",
    lightMode: "Tryb jasny",
    darkMode: "Tryb ciemny",
    currentPreferences: "Bieżące preferencje",
    notifications: {
      title: "Powiadomienia",
      description:
        "Wybierz, w jaki sposób chcesz otrzymywać powiadomienia o rezerwacjach i platformie.",
      none: "Brak",
      email: "E-mail",
      phone: "Telefon",
      both: "Oba",
    },
  },

  insurance: {
    title: "Wyszukiwanie ubezpieczeń medycznych",
    subtitle:
      "Przeglądaj i porównuj prywatnych dostawców ubezpieczeń medycznych w prostszym i bardziej przejrzystym układzie.",
    searchLabel: "Szukaj dostawców ubezpieczeń",
    searchPlaceholder: "Wpisz nazwę dostawcy...",
    noResults: "Nie znaleziono dostawców ubezpieczeń.",
    from: "Od",
    getQuote: "Uzyskaj wycenę ↗",
  },

  bookings: {
    title: "Wyszukaj rezerwacje",
    subtitle:
      "Znajdź i uporządkuj dostępne wizyty według miasta, specjalizacji, daty, godziny i budżetu.",
    location: "Lokalizacja",
    locationPlaceholder: "Wpisz miejscowość, miasto, kod pocztowy lub adres w Wielkiej Brytanii",
    findLocation: "Znajdź lokalizację",
    selected: "Wybrano",
    radius: "Promień",
    radius5: "5 mil",
    radius10: "10 mil",
    radius25: "25 mil",
    radius50: "50 mil",
    specialty: "Specjalizacja",
    allSpecialties: "Wszystkie specjalizacje",
    maximumPrice: "Maksymalna cena (£)",
    enterBudget: "Wpisz budżet",
    minimumRating: "Minimalna ocena",
    anyRating: "Dowolna ocena",
    rating35: "3.5+",
    rating40: "4.0+",
    rating45: "4.5+",
    preferredDate: "Preferowana data",
    preferredTime: "Preferowana godzina",
    anyTime: "Dowolna godzina",
    morning: "Rano",
    afternoon: "Popołudnie",
    evening: "Wieczór",
    rankingModel: "Model rankingu",
    baselineWeighted: "Ważenie bazowe",
    contentBasedSimilarity: "Podobieństwo oparte na treści",
    baselineWeightedRanking: "Ranking ważony bazowo",
    resultsLimit: "Limit wyników",
    search: "Szukaj",
    reset: "Resetuj",
    showing: "Wyświetlanie",
    resultSingular: "uszeregowany wynik",
    resultsPlural: "uszeregowane wyniki",
    using: "przy użyciu",
    loadingRankedSlots: "Ładowanie uszeregowanych terminów...",
    noAvailableBookings: "Nie znaleziono dostępnych rezerwacji.",
    somethingWentWrong: "Coś poszło nie tak",
    searchFailed: "Wyszukiwanie nie powiodło się",
    locationSearchFailed: "Wyszukiwanie lokalizacji nie powiodło się",
    resetFailed: "Resetowanie nie powiodło się",
  },

  manageBookings: {
    accessRestricted: "Dostęp ograniczony",
    onlyPatientsProviders: "Tylko pacjenci i usługodawcy mogą zarządzać rezerwacjami.",
    providerTitle: "Zarządzaj rezerwacjami i terminami",
    patientTitle: "Zarządzaj rezerwacjami",
    providerSubtitle:
      "Przeglądaj rezerwacje wizyt i zarządzaj swoimi dostępnymi terminami.",
    patientSubtitle: "Przeglądaj i zarządzaj swoimi rezerwacjami z poziomu konta.",
    loading: "Ładowanie...",
    appointmentBookings: "Rezerwacje wizyt",
    yourBookings: "Twoje rezerwacje",
    noBookingsFound: "Nie znaleziono rezerwacji.",
    date: "Data",
    time: "Godzina",
    cancelBookingAsProvider: "Anuluj rezerwację jako usługodawca",
    cancelBooking: "Anuluj rezerwację",
    manageAvailableSlots: "Zarządzaj dostępnymi terminami",
    startTime: "Godzina rozpoczęcia",
    endTime: "Godzina zakończenia",
    price: "Cena (£)",
    addSlot: "Dodaj termin",
    noSlotsFound: "Nie znaleziono terminów.",
    removeSlot: "Usuń termin",
    failedToLoadData: "Nie udało się załadować danych",
    bookingCancelled: "Rezerwacja anulowana",
    failedToCancelBooking: "Nie udało się anulować rezerwacji",
    slotCreatedFor: "Utworzono termin na",
    failedToCreateSlot: "Nie udało się utworzyć terminu",
    slotDeleted: "Termin usunięty",
    failedToDeleteSlot: "Nie udało się usunąć terminu",
  },

  profile: {
    title: "Zarządzaj profilem",
    subtitle: "Sprawdź dane swojego konta i bezpiecznie zarządzaj hasłem.",
    mustBeLoggedIn:
      "Musisz być zalogowany jako pacjent lub usługodawca, aby zobaczyć dane profilu.",
    accountDetails: "Dane konta",
    userId: "ID użytkownika",
    role: "Rola",
    fullName: "Imię i nazwisko",
    emailAddress: "Adres e-mail",
    changePassword: "Zmień hasło",
    changePasswordDescription:
      "Zaktualizuj hasło, aby zapewnić bezpieczeństwo swojego konta.",
    currentPassword: "Obecne hasło",
    newPassword: "Nowe hasło",
    confirmNewPassword: "Potwierdź nowe hasło",
    updatePassword: "Zaktualizuj hasło",
    completeAllPasswordFields: "Uzupełnij wszystkie pola hasła.",
    newPasswordsDoNotMatch: "Nowe hasła nie są zgodne.",
    passwordMinLength: "Nowe hasło musi mieć co najmniej 8 znaków.",
    passwordChangeReady: "Zmiana hasła jest gotowa do połączenia z backendem.",
    notAvailable: "Niedostępne",
    guest: "Gość",
  },

  patientFaq: {
    title: "FAQ dla pacjentów",
    subtitle: "Najczęstsze pytania pacjentów korzystających z PHLS-UK.",
    q1: {
      question: "Czym jest PHLS-UK?",
      answer:
        "PHLS-UK to prywatna platforma do wyszukiwania i rezerwacji opieki zdrowotnej, która pomaga pacjentom porównywać usługodawców, przeglądać dostępne wizyty i łatwiej uzyskiwać dostęp do usług.",
    },
    q2: {
      question: "Czy potrzebuję konta, aby korzystać z PHLS-UK?",
      answer:
        "Możesz przeglądać część platformy jako gość, ale aby rezerwować i zarządzać wizytami, potrzebujesz konta pacjenta.",
    },
    q3: {
      question: "Jak wyszukiwać wizyty?",
      answer:
        "Przejdź do Wyszukaj rezerwacje, a następnie filtruj według miasta, specjalizacji, maksymalnej ceny lub preferowanej daty, aby zobaczyć dostępne terminy wizyt.",
    },
    q4: {
      question: "Jak zarezerwować wizytę?",
      answer:
        "Po zalogowaniu jako pacjent wybierz dostępny termin i użyj opcji rezerwacji pokazanej na karcie wizyty.",
    },
    q5: {
      question: "Czy mogę anulować rezerwację?",
      answer:
        "Tak. Otwórz Zarządzaj rezerwacjami, aby zobaczyć aktualne wizyty i anulować kwalifikujące się rezerwacje.",
    },
    q6: {
      question: "Czy mogę porównywać dostawców ubezpieczeń?",
      answer:
        "Tak. Strona Wyszukaj ubezpieczenia umożliwia przeglądanie i porównywanie dostępnych dostawców ubezpieczeń medycznych.",
    },
    q7: {
      question: "Czy mogę zmienić motyw lub język?",
      answer:
        "Tak. Odwiedź stronę Ustawienia, aby przełączać się między trybem jasnym i ciemnym oraz wybrać preferowany język.",
    },
    q8: {
      question: "Z kim mogę się skontaktować, aby uzyskać pomoc?",
      answer:
        "Możesz skorzystać z adresu e-mail kontaktowego podanego w stopce, aby uzyskać ogólną pomoc i odpowiedzi na pytania dotyczące platformy.",
    },
  },

  providerFaq: {
    title: "FAQ dla usługodawców",
    subtitle: "Najczęstsze pytania usługodawców korzystających z PHLS-UK.",
    q1: {
      question: "Czym jest PHLS-UK dla usługodawców?",
      answer:
        "PHLS-UK pomaga usługodawcom prezentować usługi opieki zdrowotnej online, aby pacjenci mogli łatwiej wyszukiwać, porównywać i uzyskiwać dostęp do dostępnych terminów wizyt.",
    },
    q2: {
      question: "Jak zarejestrować się jako usługodawca?",
      answer:
        "Na stronie logowania i rejestracji wybierz Zarejestruj się, a następnie opcję Usługodawca, aby utworzyć konto usługodawcy.",
    },
    q3: {
      question: "Dlaczego podczas rejestracji potrzebuję ID kliniki?",
      answer:
        "ID kliniki łączy konto usługodawcy z istniejącym rekordem kliniki na platformie.",
    },
    q4: {
      question: "Czy usługodawcy też mogą przeszukiwać platformę?",
      answer:
        "Tak. Usługodawcy nadal mogą przeglądać treści platformy, w zależności od funkcji dostępnych dla roli ich konta.",
    },
    q5: {
      question: "Czy usługodawcy mogą rezerwować wizyty?",
      answer:
        "Nie. Rezerwacje są przeznaczone dla kont pacjentów. Konta usługodawców służą do zarządzania usługami i dostępnością.",
    },
    q6: {
      question: "Co powinienem zrobić, jeśli informacje o mojej klinice są nieprawidłowe?",
      answer:
        "Jeśli informacje o powiązanej klinice są nieprawidłowe, skontaktuj się ze wsparciem platformy, aby dane kliniki mogły zostać sprawdzone i zaktualizowane.",
    },
    q7: {
      question: "Czy mogę używać PHLS-UK w trybie ciemnym?",
      answer:
        "Tak. Usługodawcy mogą zmienić wygląd platformy na stronie Ustawienia.",
    },
    q8: {
      question: "Gdzie mogę uzyskać pomoc w problemach z dostępem usługodawcy?",
      answer:
        "Skorzystaj z adresu e-mail pomocy technicznej podanego w stopce, aby uzyskać pomoc w sprawach rejestracji, dostępu lub problemów związanych z platformą.",
    },
  },

  slotCard: {
    bookingConfirmed: "Rezerwacja potwierdzona",
    bookingFailed: "Rezerwacja nie powiodła się",
    baseline: "Bazowy",
    content: "Treść",
    score: "Wynik",
    city: "Miasto",
    postcode: "Kod pocztowy",
    rating: "Ocena",
    specialties: "Specjalizacje",
    notAvailable: "N/D",
    notListed: "Nie podano",
    bookingInProgress: "Trwa rezerwacja...",
    bookAppointment: "Zarezerwuj wizytę",
    loginAsPatient: "Zaloguj się jako pacjent, aby zarezerwować tę wizytę.",
  },

  providerCard: {
    rating: "Ocena",
    priceFrom: "Cena od",
  },
};

const ptTranslation = {
  common: {
    language: "Idioma",
    theme: "Tema",
    light: "Claro",
    dark: "Escuro",
    home: "Início",
    settings: "Definições",
    login: "Iniciar sessão",
    register: "Registar",
    patient: "Paciente",
    provider: "Prestador",
    logout: "Terminar sessão",
    exitGuest: "Sair como convidado",
    yes: "Sim",
    no: "Não",
    quickActions: "Ações rápidas",
    manageBookings: "Gerir reservas",
    searchBookings: "Pesquisar reservas",
    searchInsurance: "Pesquisar seguros",
    manageProfile: "Gerir perfil",
    patientFaqs: "Perguntas frequentes dos pacientes",
    providerFaqs: "Perguntas frequentes dos prestadores",
    backToTop: "↑ Voltar ao topo",
    scrollToBottom: "↓ Ir para o fundo",
  },

  home: {
    title: "Bem-vindo ao PHLS-UK",
    subtitle:
      "Pesquise, compare e aceda a serviços privados de cuidados de saúde num só lugar. Concebido para tornar a marcação e a descoberta de prestadores mais simples, rápidas e claras.",
    role: "Função",
    authenticated: "Autenticado",
    language: "Idioma",
    theme: "Tema",
  },

  loginPage: {
    heroTitle: "Pesquise e marque cuidados de saúde privados com confiança",
    heroSubtitle:
      "Compare serviços, descubra prestadores e gira consultas através de uma plataforma de cuidados de saúde mais limpa e acessível.",
    welcomeBack: "Bem-vindo de volta",
    createAccount: "Crie a sua conta",
    accessText: "Aceda ao PHLS-UK como paciente ou prestador",
    email: "Email",
    password: "Palavra-passe",
    confirmPassword: "Confirmar palavra-passe",
    fullName: "Nome completo",
    phoneNumber: "Número de telefone",
    clinicId: "ID da clínica",
    enterEmail: "Introduza o seu email",
    enterPassword: "Introduza a sua palavra-passe",
    enterClinicId: "Introduza um ID de clínica existente",
    passwordsDoNotMatch: "As palavras-passe não coincidem",
    loginFailed: "Falha ao iniciar sessão",
    registrationFailed: "Falha no registo",
    loggingIn: "A iniciar sessão...",
    registering: "A registar...",
    enterAsGuest: "Entrar como convidado",
  },

  footer: {
    copyright: "© 2025-2026 PHLS-UK. Private Healthcare Lookup Service.",
    contact: "Contacte-nos em: contact.phlsuk@gmail.com",
  },

  languages: {
    en: "Inglês",
    cy: "Galês / Cymraeg",
    es: "Espanhol / Español",
    pa: "Panjabi / Punjabi",
    pl: "Polaco / Polski",
    pt: "Português",
    ro: "Romeno / Română",
    ur: "Urdu / اردو",
  },

  settings: {
    title: "Definições",
    subtitle:
      "Personalize a sua experiência no PHLS-UK com preferências de tema, idioma e notificações.",
    themeDescription: "Escolha como a plataforma aparece nas páginas principais.",
    languageDescription: "Selecione o seu idioma preferido para a interface.",
    lightMode: "Modo claro",
    darkMode: "Modo escuro",
    currentPreferences: "Preferências atuais",
    notifications: {
      title: "Notificações",
      description:
        "Escolha como gostaria de receber notificações sobre reservas e a plataforma.",
      none: "Nenhuma",
      email: "Email",
      phone: "Telefone",
      both: "Ambos",
    },
  },

  insurance: {
    title: "Pesquisa de seguro de saúde",
    subtitle:
      "Explore e compare prestadores de seguro de saúde privado num layout mais limpo e simples.",
    searchLabel: "Pesquisar prestadores de seguro",
    searchPlaceholder: "Escreva o nome do prestador...",
    noResults: "Não foram encontrados prestadores de seguro.",
    from: "Desde",
    getQuote: "Obter cotação ↗",
  },

  bookings: {
    title: "Pesquisar reservas",
    subtitle:
      "Encontre e ordene consultas disponíveis por cidade, especialidade, data, hora e orçamento.",
    location: "Localização",
    locationPlaceholder: "Introduza localidade, cidade, código postal ou morada do Reino Unido",
    findLocation: "Encontrar localização",
    selected: "Selecionado",
    radius: "Raio",
    radius5: "5 milhas",
    radius10: "10 milhas",
    radius25: "25 milhas",
    radius50: "50 milhas",
    specialty: "Especialidade",
    allSpecialties: "Todas as especialidades",
    maximumPrice: "Preço máximo (£)",
    enterBudget: "Introduza o orçamento",
    minimumRating: "Classificação mínima",
    anyRating: "Qualquer classificação",
    rating35: "3.5+",
    rating40: "4.0+",
    rating45: "4.5+",
    preferredDate: "Data preferida",
    preferredTime: "Hora preferida",
    anyTime: "Qualquer hora",
    morning: "Manhã",
    afternoon: "Tarde",
    evening: "Noite",
    rankingModel: "Modelo de classificação",
    baselineWeighted: "Ponderação base",
    contentBasedSimilarity: "Semelhança baseada em conteúdo",
    baselineWeightedRanking: "Classificação com ponderação base",
    resultsLimit: "Limite de resultados",
    search: "Pesquisar",
    reset: "Repor",
    showing: "A mostrar",
    resultSingular: "resultado classificado",
    resultsPlural: "resultados classificados",
    using: "a usar",
    loadingRankedSlots: "A carregar horários classificados...",
    noAvailableBookings: "Não foram encontradas reservas disponíveis.",
    somethingWentWrong: "Algo correu mal",
    searchFailed: "A pesquisa falhou",
    locationSearchFailed: "A pesquisa de localização falhou",
    resetFailed: "A reposição falhou",
  },

  manageBookings: {
    accessRestricted: "Acesso restrito",
    onlyPatientsProviders: "Apenas pacientes e prestadores podem gerir reservas.",
    providerTitle: "Gerir reservas e horários",
    patientTitle: "Gerir reservas",
    providerSubtitle:
      "Veja as suas reservas de consultas e gira os seus horários disponíveis.",
    patientSubtitle: "Veja e gira os seus registos de reservas a partir da sua conta.",
    loading: "A carregar...",
    appointmentBookings: "Reservas de consultas",
    yourBookings: "As suas reservas",
    noBookingsFound: "Não foram encontradas reservas.",
    date: "Data",
    time: "Hora",
    cancelBookingAsProvider: "Cancelar reserva como prestador",
    cancelBooking: "Cancelar reserva",
    manageAvailableSlots: "Gerir horários disponíveis",
    startTime: "Hora de início",
    endTime: "Hora de fim",
    price: "Preço (£)",
    addSlot: "Adicionar horário",
    noSlotsFound: "Não foram encontrados horários.",
    removeSlot: "Remover horário",
    failedToLoadData: "Falha ao carregar os dados",
    bookingCancelled: "Reserva cancelada",
    failedToCancelBooking: "Falha ao cancelar a reserva",
    slotCreatedFor: "Horário criado para",
    failedToCreateSlot: "Falha ao criar o horário",
    slotDeleted: "Horário eliminado",
    failedToDeleteSlot: "Falha ao eliminar o horário",
  },

  profile: {
    title: "Gerir perfil",
    subtitle: "Reveja os dados da sua conta e gira a sua palavra-passe em segurança.",
    mustBeLoggedIn:
      "Tem de iniciar sessão como paciente ou prestador para ver os dados do perfil.",
    accountDetails: "Dados da conta",
    userId: "ID do utilizador",
    role: "Função",
    fullName: "Nome completo",
    emailAddress: "Endereço de email",
    changePassword: "Alterar palavra-passe",
    changePasswordDescription:
      "Atualize a sua palavra-passe para manter a sua conta segura.",
    currentPassword: "Palavra-passe atual",
    newPassword: "Nova palavra-passe",
    confirmNewPassword: "Confirmar nova palavra-passe",
    updatePassword: "Atualizar palavra-passe",
    completeAllPasswordFields: "Preencha todos os campos da palavra-passe.",
    newPasswordsDoNotMatch: "As novas palavras-passe não coincidem.",
    passwordMinLength: "A nova palavra-passe deve ter pelo menos 8 caracteres.",
    passwordChangeReady: "A alteração da palavra-passe está pronta para ser ligada ao backend.",
    notAvailable: "Não disponível",
    guest: "Convidado",
  },

  patientFaq: {
    title: "Perguntas frequentes dos pacientes",
    subtitle: "Perguntas comuns para pacientes que utilizam o PHLS-UK.",
    q1: {
      question: "O que é o PHLS-UK?",
      answer:
        "O PHLS-UK é uma plataforma privada de pesquisa e marcação de cuidados de saúde que ajuda os pacientes a comparar prestadores, rever consultas disponíveis e aceder a serviços com maior facilidade.",
    },
    q2: {
      question: "Preciso de uma conta para utilizar o PHLS-UK?",
      answer:
        "Pode navegar por partes da plataforma como convidado, mas precisa de uma conta de paciente para marcar e gerir consultas.",
    },
    q3: {
      question: "Como posso pesquisar consultas?",
      answer:
        "Vá a Pesquisar reservas e depois filtre por cidade, especialidade, preço máximo ou data preferida para ver horários disponíveis.",
    },
    q4: {
      question: "Como posso marcar uma consulta?",
      answer:
        "Depois de iniciar sessão como paciente, selecione um horário disponível e escolha a opção de marcação apresentada no cartão da consulta.",
    },
    q5: {
      question: "Posso cancelar uma reserva?",
      answer:
        "Sim. Abra Gerir reservas para ver as suas consultas atuais e cancelar reservas elegíveis.",
    },
    q6: {
      question: "Posso comparar prestadores de seguros?",
      answer:
        "Sim. A página Pesquisar seguros permite-lhe explorar e comparar prestadores de seguro de saúde disponíveis.",
    },
    q7: {
      question: "Posso mudar o tema ou o idioma?",
      answer:
        "Sim. Visite a página Definições para alternar entre o modo claro e escuro e escolher o seu idioma preferido.",
    },
    q8: {
      question: "Quem posso contactar para obter apoio?",
      answer:
        "Pode utilizar o email de contacto apresentado no rodapé para apoio geral e questões relacionadas com a plataforma.",
    },
  },

  providerFaq: {
    title: "Perguntas frequentes dos prestadores",
    subtitle: "Perguntas comuns para prestadores que utilizam o PHLS-UK.",
    q1: {
      question: "O que é o PHLS-UK para prestadores?",
      answer:
        "O PHLS-UK ajuda os prestadores a apresentar serviços de saúde online para que os pacientes possam pesquisar, comparar e aceder à disponibilidade de consultas com maior facilidade.",
    },
    q2: {
      question: "Como me registo como prestador?",
      answer:
        "Na página de início de sessão e registo, escolha Registar e depois selecione a opção Prestador para criar uma conta de prestador.",
    },
    q3: {
      question: "Porque preciso de um ID de clínica ao registar-me?",
      answer:
        "O ID da clínica liga a sua conta de prestador a um registo de clínica já existente na plataforma.",
    },
    q4: {
      question: "Os prestadores também podem pesquisar na plataforma?",
      answer:
        "Sim. Os prestadores ainda podem navegar no conteúdo da plataforma, dependendo das funcionalidades disponíveis para o papel da sua conta.",
    },
    q5: {
      question: "Os prestadores podem marcar consultas?",
      answer:
        "Não. As ações de marcação destinam-se a contas de pacientes. As contas de prestadores foram concebidas para gestão de serviços e disponibilidade.",
    },
    q6: {
      question: "O que devo fazer se a informação da minha clínica estiver incorreta?",
      answer:
        "Se a informação associada à sua clínica estiver incorreta, deve contactar o apoio da plataforma para que os dados da clínica possam ser revistos e atualizados.",
    },
    q7: {
      question: "Posso usar o PHLS-UK em modo escuro?",
      answer:
        "Sim. Os prestadores podem alterar a aparência da plataforma na página Definições.",
    },
    q8: {
      question: "Onde posso obter ajuda com problemas de acesso do prestador?",
      answer:
        "Utilize o email de apoio apresentado no rodapé para obter ajuda com registo, acesso ou problemas relacionados com a plataforma.",
    },
  },

  slotCard: {
    bookingConfirmed: "Reserva confirmada",
    bookingFailed: "A reserva falhou",
    baseline: "Base",
    content: "Conteúdo",
    score: "Pontuação",
    city: "Cidade",
    postcode: "Código postal",
    rating: "Classificação",
    specialties: "Especialidades",
    notAvailable: "N/D",
    notListed: "Não indicado",
    bookingInProgress: "A reservar...",
    bookAppointment: "Marcar consulta",
    loginAsPatient: "Inicie sessão como paciente para marcar esta consulta.",
  },

  providerCard: {
    rating: "Classificação",
    priceFrom: "Preço desde",
  },
};

const roTranslation = {
  common: {
    language: "Limbă",
    theme: "Temă",
    light: "Deschisă",
    dark: "Închisă",
    home: "Acasă",
    settings: "Setări",
    login: "Autentificare",
    register: "Înregistrare",
    patient: "Pacient",
    provider: "Furnizor",
    logout: "Deconectare",
    exitGuest: "Ieși ca vizitator",
    yes: "Da",
    no: "Nu",
    quickActions: "Acțiuni rapide",
    manageBookings: "Gestionează rezervările",
    searchBookings: "Caută rezervări",
    searchInsurance: "Caută asigurări",
    manageProfile: "Gestionează profilul",
    patientFaqs: "Întrebări frecvente pentru pacienți",
    providerFaqs: "Întrebări frecvente pentru furnizori",
    backToTop: "↑ Înapoi sus",
    scrollToBottom: "↓ Mergi în jos",
  },

  home: {
    title: "Bine ai venit la PHLS-UK",
    subtitle:
      "Caută, compară și accesează servicii private de sănătate într-un singur loc. Conceput pentru a face rezervarea și găsirea furnizorilor mai simple, mai rapide și mai clare.",
    role: "Rol",
    authenticated: "Autentificat",
    language: "Limbă",
    theme: "Temă",
  },

  loginPage: {
    heroTitle: "Caută și rezervă servicii private de sănătate cu încredere",
    heroSubtitle:
      "Compară servicii, descoperă furnizori și gestionează programări printr-o platformă medicală mai clară și mai accesibilă.",
    welcomeBack: "Bine ai revenit",
    createAccount: "Creează-ți contul",
    accessText: "Accesează PHLS-UK ca pacient sau furnizor",
    email: "Email",
    password: "Parolă",
    confirmPassword: "Confirmă parola",
    fullName: "Nume complet",
    phoneNumber: "Număr de telefon",
    clinicId: "ID clinică",
    enterEmail: "Introdu adresa ta de email",
    enterPassword: "Introdu parola ta",
    enterClinicId: "Introdu un ID de clinică existent",
    passwordsDoNotMatch: "Parolele nu se potrivesc",
    loginFailed: "Autentificarea a eșuat",
    registrationFailed: "Înregistrarea a eșuat",
    loggingIn: "Se autentifică...",
    registering: "Se înregistrează...",
    enterAsGuest: "Intră ca vizitator",
  },

  footer: {
    copyright: "© 2025-2026 PHLS-UK. Private Healthcare Lookup Service.",
    contact: "Contactează-ne la: contact.phlsuk@gmail.com",
  },

  languages: {
    en: "Engleză",
    cy: "Galeză / Cymraeg",
    es: "Spaniolă / Español",
    pa: "Punjabi / Punjabi",
    pl: "Poloneză / Polski",
    pt: "Portugheză / Português",
    ro: "Română",
    ur: "Urdu / اردو",
  },

  settings: {
    title: "Setări",
    subtitle:
      "Personalizează experiența ta PHLS-UK cu preferințe pentru temă, limbă și notificări.",
    themeDescription: "Alege cum arată platforma pe paginile principale.",
    languageDescription: "Selectează limba preferată pentru interfață.",
    lightMode: "Mod deschis",
    darkMode: "Mod închis",
    currentPreferences: "Preferințe curente",
    notifications: {
      title: "Notificări",
      description:
        "Alege cum dorești să primești notificări despre rezervări și platformă.",
      none: "Niciuna",
      email: "Email",
      phone: "Telefon",
      both: "Ambele",
    },
  },

  insurance: {
    title: "Căutare asigurare medicală",
    subtitle:
      "Răsfoiește și compară furnizori de asigurări medicale private într-un aspect mai curat și mai simplu.",
    searchLabel: "Caută furnizori de asigurări",
    searchPlaceholder: "Tastează numele furnizorului...",
    noResults: "Nu au fost găsiți furnizori de asigurări.",
    from: "De la",
    getQuote: "Obține o ofertă ↗",
  },

  bookings: {
    title: "Caută rezervări",
    subtitle:
      "Găsește și ordonează programările disponibile după oraș, specialitate, dată, oră și buget.",
    location: "Locație",
    locationPlaceholder: "Introdu localitate, oraș, cod poștal sau adresă din Regatul Unit",
    findLocation: "Găsește locația",
    selected: "Selectat",
    radius: "Rază",
    radius5: "5 mile",
    radius10: "10 mile",
    radius25: "25 mile",
    radius50: "50 mile",
    specialty: "Specialitate",
    allSpecialties: "Toate specialitățile",
    maximumPrice: "Preț maxim (£)",
    enterBudget: "Introdu bugetul",
    minimumRating: "Evaluare minimă",
    anyRating: "Orice evaluare",
    rating35: "3.5+",
    rating40: "4.0+",
    rating45: "4.5+",
    preferredDate: "Data preferată",
    preferredTime: "Ora preferată",
    anyTime: "Orice oră",
    morning: "Dimineață",
    afternoon: "După-amiază",
    evening: "Seară",
    rankingModel: "Model de clasificare",
    baselineWeighted: "Ponderare de bază",
    contentBasedSimilarity: "Similaritate bazată pe conținut",
    baselineWeightedRanking: "Clasificare cu ponderare de bază",
    resultsLimit: "Limită rezultate",
    search: "Caută",
    reset: "Resetează",
    showing: "Se afișează",
    resultSingular: "rezultat clasificat",
    resultsPlural: "rezultate clasificate",
    using: "folosind",
    loadingRankedSlots: "Se încarcă intervalele clasificate...",
    noAvailableBookings: "Nu au fost găsite rezervări disponibile.",
    somethingWentWrong: "Ceva nu a mers bine",
    searchFailed: "Căutarea a eșuat",
    locationSearchFailed: "Căutarea locației a eșuat",
    resetFailed: "Resetarea a eșuat",
  },

  manageBookings: {
    accessRestricted: "Acces restricționat",
    onlyPatientsProviders: "Doar pacienții și furnizorii pot gestiona rezervările.",
    providerTitle: "Gestionează rezervările și intervalele",
    patientTitle: "Gestionează rezervările",
    providerSubtitle:
      "Vezi rezervările pentru programări și gestionează intervalele tale disponibile.",
    patientSubtitle: "Vezi și gestionează înregistrările rezervărilor din contul tău.",
    loading: "Se încarcă...",
    appointmentBookings: "Rezervări pentru programări",
    yourBookings: "Rezervările tale",
    noBookingsFound: "Nu au fost găsite rezervări.",
    date: "Dată",
    time: "Oră",
    cancelBookingAsProvider: "Anulează rezervarea ca furnizor",
    cancelBooking: "Anulează rezervarea",
    manageAvailableSlots: "Gestionează intervalele disponibile",
    startTime: "Ora de început",
    endTime: "Ora de sfârșit",
    price: "Preț (£)",
    addSlot: "Adaugă interval",
    noSlotsFound: "Nu au fost găsite intervale.",
    removeSlot: "Elimină interval",
    failedToLoadData: "Încărcarea datelor a eșuat",
    bookingCancelled: "Rezervare anulată",
    failedToCancelBooking: "Anularea rezervării a eșuat",
    slotCreatedFor: "Interval creat pentru",
    failedToCreateSlot: "Crearea intervalului a eșuat",
    slotDeleted: "Interval șters",
    failedToDeleteSlot: "Ștergerea intervalului a eșuat",
  },

  profile: {
    title: "Gestionează profilul",
    subtitle: "Revizuiește datele contului tău și gestionează parola în siguranță.",
    mustBeLoggedIn:
      "Trebuie să fii autentificat ca pacient sau furnizor pentru a vedea detaliile profilului.",
    accountDetails: "Detalii cont",
    userId: "ID utilizator",
    role: "Rol",
    fullName: "Nume complet",
    emailAddress: "Adresă de email",
    changePassword: "Schimbă parola",
    changePasswordDescription:
      "Actualizează parola pentru a-ți păstra contul în siguranță.",
    currentPassword: "Parola curentă",
    newPassword: "Parolă nouă",
    confirmNewPassword: "Confirmă noua parolă",
    updatePassword: "Actualizează parola",
    completeAllPasswordFields: "Completează toate câmpurile pentru parolă.",
    newPasswordsDoNotMatch: "Noile parole nu se potrivesc.",
    passwordMinLength: "Noua parolă trebuie să aibă cel puțin 8 caractere.",
    passwordChangeReady: "Schimbarea parolei este pregătită pentru conectarea la backend.",
    notAvailable: "Indisponibil",
    guest: "Vizitator",
  },

  patientFaq: {
    title: "Întrebări frecvente pentru pacienți",
    subtitle: "Întrebări frecvente pentru pacienții care folosesc PHLS-UK.",
    q1: {
      question: "Ce este PHLS-UK?",
      answer:
        "PHLS-UK este o platformă privată de căutare și rezervare a serviciilor medicale, care ajută pacienții să compare furnizori, să revizuiască programările disponibile și să acceseze mai ușor serviciile.",
    },
    q2: {
      question: "Am nevoie de un cont pentru a folosi PHLS-UK?",
      answer:
        "Poți naviga prin anumite părți ale platformei ca vizitator, dar ai nevoie de un cont de pacient pentru a rezerva și gestiona programări.",
    },
    q3: {
      question: "Cum caut programări?",
      answer:
        "Accesează Caută rezervări, apoi filtrează după oraș, specialitate, preț maxim sau dată preferată pentru a vedea intervalele disponibile.",
    },
    q4: {
      question: "Cum rezerv o programare?",
      answer:
        "După ce te-ai autentificat ca pacient, selectează un interval disponibil și alege opțiunea de rezervare afișată pe cardul programării.",
    },
    q5: {
      question: "Pot anula o rezervare?",
      answer:
        "Da. Deschide Gestionează rezervările pentru a vedea programările curente și pentru a anula rezervările eligibile.",
    },
    q6: {
      question: "Pot compara furnizori de asigurări?",
      answer:
        "Da. Pagina Caută asigurări îți permite să răsfoiești și să compari furnizorii disponibili de asigurări medicale.",
    },
    q7: {
      question: "Pot schimba tema sau limba?",
      answer:
        "Da. Vizitează pagina Setări pentru a comuta între modul deschis și închis și pentru a alege limba preferată.",
    },
    q8: {
      question: "Pe cine pot contacta pentru ajutor?",
      answer:
        "Poți folosi adresa de email de contact afișată în subsol pentru suport general și întrebări despre platformă.",
    },
  },

  providerFaq: {
    title: "Întrebări frecvente pentru furnizori",
    subtitle: "Întrebări frecvente pentru furnizorii care folosesc PHLS-UK.",
    q1: {
      question: "Ce este PHLS-UK pentru furnizori?",
      answer:
        "PHLS-UK îi ajută pe furnizori să prezinte online servicii medicale, astfel încât pacienții să poată căuta, compara și accesa mai ușor disponibilitatea programărilor.",
    },
    q2: {
      question: "Cum mă înregistrez ca furnizor?",
      answer:
        "Pe pagina de autentificare și înregistrare, alege Înregistrare și apoi selectează opțiunea Furnizor pentru a crea un cont de furnizor.",
    },
    q3: {
      question: "De ce am nevoie de un ID de clinică la înregistrare?",
      answer:
        "ID-ul clinicii conectează contul tău de furnizor la o înregistrare existentă a clinicii pe platformă.",
    },
    q4: {
      question: "Pot furnizorii să caute și ei pe platformă?",
      answer:
        "Da. Furnizorii pot în continuare să răsfoiască conținutul platformei, în funcție de funcțiile disponibile pentru rolul contului lor.",
    },
    q5: {
      question: "Pot furnizorii să rezerve programări?",
      answer:
        "Nu. Acțiunile de rezervare sunt destinate conturilor de pacienți. Conturile de furnizor sunt concepute pentru gestionarea serviciilor și a disponibilității.",
    },
    q6: {
      question: "Ce ar trebui să fac dacă informațiile clinicii mele sunt incorecte?",
      answer:
        "Dacă informațiile asociate clinicii tale sunt incorecte, ar trebui să contactezi suportul platformei pentru ca datele clinicii să poată fi revizuite și actualizate.",
    },
    q7: {
      question: "Pot folosi PHLS-UK în modul închis?",
      answer:
        "Da. Furnizorii pot schimba aspectul platformei din pagina Setări.",
    },
    q8: {
      question: "Unde pot primi ajutor pentru probleme de acces ca furnizor?",
      answer:
        "Folosește adresa de email de suport afișată în subsol pentru ajutor privind înregistrarea, accesul sau alte probleme legate de platformă.",
    },
  },

  slotCard: {
    bookingConfirmed: "Rezervare confirmată",
    bookingFailed: "Rezervarea a eșuat",
    baseline: "De bază",
    content: "Conținut",
    score: "Scor",
    city: "Oraș",
    postcode: "Cod poștal",
    rating: "Evaluare",
    specialties: "Specialități",
    notAvailable: "N/D",
    notListed: "Nelistat",
    bookingInProgress: "Se rezervă...",
    bookAppointment: "Rezervă programarea",
    loginAsPatient: "Autentifică-te ca pacient pentru a rezerva această programare.",
  },

  providerCard: {
    rating: "Evaluare",
    priceFrom: "Preț de la",
  },
};

const urTranslation = {
  common: {
    language: "زبان",
    theme: "تھیم",
    light: "ہلکی",
    dark: "گہری",
    home: "ہوم",
    settings: "سیٹنگز",
    login: "لاگ اِن",
    register: "رجسٹر کریں",
    patient: "مریض",
    provider: "فراہم کنندہ",
    logout: "لاگ آؤٹ",
    exitGuest: "مہمان کے طور پر باہر نکلیں",
    yes: "جی ہاں",
    no: "نہیں",
    quickActions: "فوری کارروائیاں",
    manageBookings: "بکنگز منظم کریں",
    searchBookings: "بکنگز تلاش کریں",
    searchInsurance: "انشورنس تلاش کریں",
    manageProfile: "پروفائل منظم کریں",
    patientFaqs: "مریضوں کے عمومی سوالات",
    providerFaqs: "فراہم کنندگان کے عمومی سوالات",
    backToTop: "↑ اوپر واپس جائیں",
    scrollToBottom: "↓ نیچے جائیں",
  },

  home: {
    title: "PHLS-UK میں خوش آمدید",
    subtitle:
      "نجی صحت کی خدمات کو ایک ہی جگہ پر تلاش کریں، موازنہ کریں اور حاصل کریں۔ یہ اس طرح ڈیزائن کیا گیا ہے کہ بکنگ اور فراہم کنندگان کی تلاش زیادہ آسان، تیز اور واضح ہو۔",
    role: "کردار",
    authenticated: "مصدقہ",
    language: "زبان",
    theme: "تھیم",
  },

  loginPage: {
    heroTitle: "اعتماد کے ساتھ نجی صحت کی سہولت تلاش کریں اور بک کریں",
    heroSubtitle:
      "خدمات کا موازنہ کریں، فراہم کنندگان تلاش کریں، اور ایک زیادہ صاف اور قابلِ رسائی صحت پلیٹ فارم کے ذریعے ملاقاتیں منظم کریں۔",
    welcomeBack: "واپسی پر خوش آمدید",
    createAccount: "اپنا اکاؤنٹ بنائیں",
    accessText: "PHLS-UK کو مریض یا فراہم کنندہ کے طور پر استعمال کریں",
    email: "ای میل",
    password: "پاس ورڈ",
    confirmPassword: "پاس ورڈ کی تصدیق کریں",
    fullName: "پورا نام",
    phoneNumber: "فون نمبر",
    clinicId: "کلینک ID",
    enterEmail: "اپنا ای میل درج کریں",
    enterPassword: "اپنا پاس ورڈ درج کریں",
    enterClinicId: "موجودہ کلینک ID درج کریں",
    passwordsDoNotMatch: "پاس ورڈ آپس میں مماثل نہیں ہیں",
    loginFailed: "لاگ اِن ناکام ہوگئی",
    registrationFailed: "رجسٹریشن ناکام ہوگئی",
    loggingIn: "لاگ اِن کیا جا رہا ہے...",
    registering: "رجسٹر کیا جا رہا ہے...",
    enterAsGuest: "مہمان کے طور پر داخل ہوں",
  },

  footer: {
    copyright: "© 2025-2026 PHLS-UK. Private Healthcare Lookup Service.",
    contact: "ہم سے رابطہ کریں: contact.phlsuk@gmail.com",
  },

  languages: {
    en: "انگریزی",
    cy: "ویلش / Cymraeg",
    es: "ہسپانوی / Español",
    pa: "پنجابی / Punjabi",
    pl: "پولش / Polski",
    pt: "پرتگالی / Português",
    ro: "رومانیائی / Română",
    ur: "اردو",
  },

  settings: {
    title: "سیٹنگز",
    subtitle:
      "تھیم، زبان اور نوٹیفکیشن ترجیحات کے ذریعے اپنے PHLS-UK تجربے کو ذاتی بنائیں۔",
    themeDescription: "منتخب کریں کہ پلیٹ فارم مرکزی صفحات پر کیسا نظر آئے۔",
    languageDescription: "انٹرفیس کے لیے اپنی پسندیدہ زبان منتخب کریں۔",
    lightMode: "ہلکی موڈ",
    darkMode: "گہری موڈ",
    currentPreferences: "موجودہ ترجیحات",
    notifications: {
      title: "نوٹیفکیشنز",
      description:
        "منتخب کریں کہ آپ بکنگز اور پلیٹ فارم سے متعلق نوٹیفکیشنز کیسے وصول کرنا چاہتے ہیں۔",
      none: "کوئی نہیں",
      email: "ای میل",
      phone: "فون",
      both: "دونوں",
    },
  },

  insurance: {
    title: "طبی انشورنس تلاش",
    subtitle:
      "ایک زیادہ صاف اور سادہ لے آؤٹ میں نجی طبی انشورنس فراہم کنندگان کو دیکھیں اور ان کا موازنہ کریں۔",
    searchLabel: "انشورنس فراہم کنندگان تلاش کریں",
    searchPlaceholder: "فراہم کنندہ کا نام لکھیں...",
    noResults: "کوئی انشورنس فراہم کنندہ نہیں ملا۔",
    from: "سے",
    getQuote: "قیمت حاصل کریں ↗",
  },

  bookings: {
    title: "بکنگز تلاش کریں",
    subtitle:
      "شہر، تخصص، تاریخ، وقت اور بجٹ کے مطابق دستیاب ملاقاتیں تلاش کریں اور ترتیب دیں۔",
    location: "مقام",
    locationPlaceholder: "برطانیہ کا قصبہ، شہر، پوسٹ کوڈ یا پتہ درج کریں",
    findLocation: "مقام تلاش کریں",
    selected: "منتخب شدہ",
    radius: "حد",
    radius5: "5 میل",
    radius10: "10 میل",
    radius25: "25 میل",
    radius50: "50 میل",
    specialty: "تخصص",
    allSpecialties: "تمام تخصصات",
    maximumPrice: "زیادہ سے زیادہ قیمت (£)",
    enterBudget: "بجٹ درج کریں",
    minimumRating: "کم از کم ریٹنگ",
    anyRating: "کوئی بھی ریٹنگ",
    rating35: "3.5+",
    rating40: "4.0+",
    rating45: "4.5+",
    preferredDate: "پسندیدہ تاریخ",
    preferredTime: "پسندیدہ وقت",
    anyTime: "کوئی بھی وقت",
    morning: "صبح",
    afternoon: "دوپہر",
    evening: "شام",
    rankingModel: "رینکنگ ماڈل",
    baselineWeighted: "بنیادی وزن دار",
    contentBasedSimilarity: "مواد کی بنیاد پر مماثلت",
    baselineWeightedRanking: "بنیادی وزن دار درجہ بندی",
    resultsLimit: "نتائج کی حد",
    search: "تلاش کریں",
    reset: "ری سیٹ",
    showing: "دکھائے جا رہے ہیں",
    resultSingular: "درجہ بند نتیجہ",
    resultsPlural: "درجہ بند نتائج",
    using: "استعمال کرتے ہوئے",
    loadingRankedSlots: "درجہ بند سلاٹس لوڈ ہو رہے ہیں...",
    noAvailableBookings: "کوئی دستیاب بکنگ نہیں ملی۔",
    somethingWentWrong: "کچھ غلط ہو گیا",
    searchFailed: "تلاش ناکام ہوگئی",
    locationSearchFailed: "مقام کی تلاش ناکام ہوگئی",
    resetFailed: "ری سیٹ ناکام ہوگئی",
  },

  manageBookings: {
    accessRestricted: "رسائی محدود ہے",
    onlyPatientsProviders: "صرف مریض اور فراہم کنندگان ہی بکنگز منظم کر سکتے ہیں۔",
    providerTitle: "بکنگز اور سلاٹس منظم کریں",
    patientTitle: "بکنگز منظم کریں",
    providerSubtitle:
      "اپنی ملاقاتوں کی بکنگز دیکھیں اور اپنی دستیاب اوقات کے سلاٹس منظم کریں۔",
    patientSubtitle: "اپنے اکاؤنٹ سے اپنی بکنگ ریکارڈز دیکھیں اور منظم کریں۔",
    loading: "لوڈ ہو رہا ہے...",
    appointmentBookings: "ملاقاتوں کی بکنگز",
    yourBookings: "آپ کی بکنگز",
    noBookingsFound: "کوئی بکنگ نہیں ملی۔",
    date: "تاریخ",
    time: "وقت",
    cancelBookingAsProvider: "فراہم کنندہ کے طور پر بکنگ منسوخ کریں",
    cancelBooking: "بکنگ منسوخ کریں",
    manageAvailableSlots: "دستیاب سلاٹس منظم کریں",
    startTime: "شروع ہونے کا وقت",
    endTime: "اختتامی وقت",
    price: "قیمت (£)",
    addSlot: "سلاٹ شامل کریں",
    noSlotsFound: "کوئی سلاٹ نہیں ملا۔",
    removeSlot: "سلاٹ ہٹائیں",
    failedToLoadData: "ڈیٹا لوڈ کرنے میں ناکامی",
    bookingCancelled: "بکنگ منسوخ ہوگئی",
    failedToCancelBooking: "بکنگ منسوخ کرنے میں ناکامی",
    slotCreatedFor: "سلاٹ بنایا گیا برائے",
    failedToCreateSlot: "سلاٹ بنانے میں ناکامی",
    slotDeleted: "سلاٹ حذف کر دیا گیا",
    failedToDeleteSlot: "سلاٹ حذف کرنے میں ناکامی",
  },

  profile: {
    title: "پروفائل منظم کریں",
    subtitle: "اپنے اکاؤنٹ کی تفصیلات دیکھیں اور اپنا پاس ورڈ محفوظ طریقے سے منظم کریں۔",
    mustBeLoggedIn:
      "پروفائل کی تفصیلات دیکھنے کے لیے آپ کو مریض یا فراہم کنندہ کے طور پر لاگ اِن ہونا ضروری ہے۔",
    accountDetails: "اکاؤنٹ کی تفصیلات",
    userId: "یوزر ID",
    role: "کردار",
    fullName: "پورا نام",
    emailAddress: "ای میل پتہ",
    changePassword: "پاس ورڈ تبدیل کریں",
    changePasswordDescription:
      "اپنا اکاؤنٹ محفوظ رکھنے کے لیے اپنا پاس ورڈ اپڈیٹ کریں۔",
    currentPassword: "موجودہ پاس ورڈ",
    newPassword: "نیا پاس ورڈ",
    confirmNewPassword: "نئے پاس ورڈ کی تصدیق کریں",
    updatePassword: "پاس ورڈ اپڈیٹ کریں",
    completeAllPasswordFields: "تمام پاس ورڈ فیلڈز مکمل کریں۔",
    newPasswordsDoNotMatch: "نئے پاس ورڈ آپس میں مماثل نہیں ہیں۔",
    passwordMinLength: "نیا پاس ورڈ کم از کم 8 حروف پر مشتمل ہونا چاہیے۔",
    passwordChangeReady: "پاس ورڈ کی تبدیلی backend سے جوڑنے کے لیے تیار ہے۔",
    notAvailable: "دستیاب نہیں",
    guest: "مہمان",
  },

  patientFaq: {
    title: "مریضوں کے عمومی سوالات",
    subtitle: "PHLS-UK استعمال کرنے والے مریضوں کے عام سوالات۔",
    q1: {
      question: "PHLS-UK کیا ہے؟",
      answer:
        "PHLS-UK ایک نجی صحت کی خدمت تلاش اور بکنگ پلیٹ فارم ہے جو مریضوں کو فراہم کنندگان کا موازنہ کرنے، دستیاب ملاقاتیں دیکھنے اور خدمات تک زیادہ آسانی سے رسائی حاصل کرنے میں مدد دیتا ہے۔",
    },
    q2: {
      question: "کیا PHLS-UK استعمال کرنے کے لیے مجھے اکاؤنٹ کی ضرورت ہے؟",
      answer:
        "آپ پلیٹ فارم کے کچھ حصے مہمان کے طور پر دیکھ سکتے ہیں، لیکن ملاقاتیں بک کرنے اور منظم کرنے کے لیے آپ کو مریض اکاؤنٹ کی ضرورت ہے۔",
    },
    q3: {
      question: "میں ملاقاتیں کیسے تلاش کروں؟",
      answer:
        "بکنگز تلاش کریں صفحے پر جائیں، پھر شہر، تخصص، زیادہ سے زیادہ قیمت یا پسندیدہ تاریخ کے مطابق فلٹر کریں اور دستیاب سلاٹس دیکھیں۔",
    },
    q4: {
      question: "میں ملاقات کیسے بک کروں؟",
      answer:
        "مریض کے طور پر لاگ اِن کرنے کے بعد، دستیاب سلاٹ منتخب کریں اور ملاقات کے کارڈ پر دکھایا گیا بکنگ آپشن منتخب کریں۔",
    },
    q5: {
      question: "کیا میں بکنگ منسوخ کر سکتا/سکتی ہوں؟",
      answer:
        "جی ہاں۔ اپنی موجودہ ملاقاتیں دیکھنے اور اہل بکنگز منسوخ کرنے کے لیے بکنگز منظم کریں کھولیں۔",
    },
    q6: {
      question: "کیا میں انشورنس فراہم کنندگان کا موازنہ کر سکتا/سکتی ہوں؟",
      answer:
        "جی ہاں۔ انشورنس تلاش کریں صفحہ آپ کو دستیاب طبی انشورنس فراہم کنندگان کو دیکھنے اور ان کا موازنہ کرنے کی اجازت دیتا ہے۔",
    },
    q7: {
      question: "کیا میں تھیم یا زبان تبدیل کر سکتا/سکتی ہوں؟",
      answer:
        "جی ہاں۔ ہلکی اور گہری موڈ کے درمیان تبدیلی اور اپنی پسندیدہ زبان منتخب کرنے کے لیے سیٹنگز صفحے پر جائیں۔",
    },
    q8: {
      question: "مدد کے لیے میں کس سے رابطہ کروں؟",
      answer:
        "عمومی مدد اور پلیٹ فارم سے متعلق سوالات کے لیے آپ فٹر میں دیا گیا رابطہ ای میل استعمال کر سکتے ہیں۔",
    },
  },

  providerFaq: {
    title: "فراہم کنندگان کے عمومی سوالات",
    subtitle: "PHLS-UK استعمال کرنے والے فراہم کنندگان کے عام سوالات۔",
    q1: {
      question: "فراہم کنندگان کے لیے PHLS-UK کیا ہے؟",
      answer:
        "PHLS-UK فراہم کنندگان کو اپنی صحت کی خدمات آن لائن پیش کرنے میں مدد دیتا ہے تاکہ مریض زیادہ آسانی سے تلاش، موازنہ اور ملاقاتوں کی دستیابی تک رسائی حاصل کر سکیں۔",
    },
    q2: {
      question: "میں فراہم کنندہ کے طور پر رجسٹر کیسے کروں؟",
      answer:
        "لاگ اِن اور رجسٹریشن صفحے پر رجسٹر کریں منتخب کریں، پھر فراہم کنندہ آپشن منتخب کرکے اکاؤنٹ بنائیں۔",
    },
    q3: {
      question: "رجسٹر کرتے وقت مجھے کلینک ID کی ضرورت کیوں ہے؟",
      answer:
        "کلینک ID آپ کے فراہم کنندہ اکاؤنٹ کو پلیٹ فارم میں موجودہ کلینک ریکارڈ کے ساتھ جوڑتی ہے۔",
    },
    q4: {
      question: "کیا فراہم کنندگان بھی پلیٹ فارم تلاش کر سکتے ہیں؟",
      answer:
        "جی ہاں۔ اپنے اکاؤنٹ کے کردار کے لیے دستیاب خصوصیات کے مطابق فراہم کنندگان پلیٹ فارم کا مواد دیکھ سکتے ہیں۔",
    },
    q5: {
      question: "کیا فراہم کنندگان ملاقاتیں بک کر سکتے ہیں؟",
      answer:
        "نہیں۔ بکنگ کارروائیاں مریض اکاؤنٹس کے لیے ہیں۔ فراہم کنندہ اکاؤنٹس خدمات اور دستیابی منظم کرنے کے لیے بنائے گئے ہیں۔",
    },
    q6: {
      question: "اگر میرے کلینک کی معلومات غلط ہوں تو میں کیا کروں؟",
      answer:
        "اگر آپ کے منسلک کلینک کی معلومات غلط ہیں تو آپ کو پلیٹ فارم سپورٹ سے رابطہ کرنا چاہیے تاکہ کلینک کے ڈیٹا کا جائزہ لے کر اسے اپڈیٹ کیا جا سکے۔",
    },
    q7: {
      question: "کیا میں PHLS-UK کو گہری موڈ میں استعمال کر سکتا/سکتی ہوں؟",
      answer:
        "جی ہاں۔ فراہم کنندگان سیٹنگز صفحے سے پلیٹ فارم کی ظاہری شکل تبدیل کر سکتے ہیں۔",
    },
    q8: {
      question: "فراہم کنندہ رسائی کے مسائل کے لیے مجھے کہاں مدد ملے گی؟",
      answer:
        "رجسٹریشن، رسائی یا پلیٹ فارم سے متعلق مسائل کے لیے فٹر میں دیا گیا سپورٹ ای میل استعمال کریں۔",
    },
  },

  slotCard: {
    bookingConfirmed: "بکنگ کی تصدیق ہوگئی",
    bookingFailed: "بکنگ ناکام ہوگئی",
    baseline: "بنیادی",
    content: "مواد",
    score: "اسکور",
    city: "شہر",
    postcode: "پوسٹ کوڈ",
    rating: "ریٹنگ",
    specialties: "تخصصات",
    notAvailable: "دستیاب نہیں",
    notListed: "فہرست میں شامل نہیں",
    bookingInProgress: "بکنگ کی جا رہی ہے...",
    bookAppointment: "ملاقات بک کریں",
    loginAsPatient: "یہ ملاقات بک کرنے کے لیے مریض کے طور پر لاگ اِن کریں۔",
  },

  providerCard: {
    rating: "ریٹنگ",
    priceFrom: "قیمت شروع",
  },
};

const resources = {
  en: { //English
    translation: enTranslation,
  },
  cy: { //Welsh
    translation: cyTranslation,
  },
  es: { //Spanish
    translation: esTranslation,
  },
  pa: { //Panjabi
    translation: paTranslation,
  },
  pl: { //Polish
    translation: plTranslation,
  },
  pt: { //Portuguese
    translation: ptTranslation,
  },
  ro: { //Romanian
    translation: roTranslation,
  },
  ur: { //Urdu
    translation: urTranslation,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem("phlsLanguage") || "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;