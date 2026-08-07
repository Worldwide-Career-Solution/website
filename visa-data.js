/* ==========================================================================
   Worldwide Career Solution - Visa & Country Database (2026 Updated Rules)
   ========================================================================== */

const visaDatabase = [
    // ----------------------------------------------------------------------
    // North America & Oceania (Main Focus)
    // ----------------------------------------------------------------------
    {
        id: "usa",
        countryName: "আমেরিকা (USA)",
        category: "North America",
        flag: "🇺🇸",
        visasOffered: "Student (F-1), Visit (B1/B2), Business",
        processingTime: "60 - 90 Days",
        requirements: [
            "সর্বনিম্ন ৬ মাসের মেয়াদসহ মূল পাসপোর্ট",
            "DS-160 ফরম কনফার্মেশন বারকোড পেজ",
            "I-20 ফরম (স্টুডেন্ট ভিসার ক্ষেত্রে)",
            "ব্যাংক সলভেন্সি ও স্পন্সরশিপ ডকুমেন্টস (সর্বশেষ ৬ মাস)",
            "SEVIS ফি ও ইউএস এক্সেপ্টিয়ান্স লেটার",
            "পেশাগত বা শিক্ষাগত সকল সার্টিফিকেট ও ট্রান্সক্রিপ্ট"
        ]
    },
    {
        id: "canada",
        countryName: "কানাডা (Canada)",
        category: "North America",
        flag: "🇨🇦",
        visasOffered: "Student Study Permit, Visitor Visa",
        processingTime: "45 - 90 Days",
        requirements: [
            "মূল পাসপোর্ট ও পুরাতন পাসপোর্টসমূহ",
            "কানাডিয়ান ডেজিগনেটেড লার্নিং ইনস্টিটিউট (DLI) অফার লেটার",
            "স্টুডেন্ট জিআইসি (GIC) ফান্ডের প্রমাণপত্র",
            "আইইএলটিএস (IELTS) / পিটিই (PTE) স্কোরকার্ড",
            "ব্যাংক সলভেন্সি স্টেটমেন্ট ও সোর্স অফ ফান্ডিং",
            "পুলিশ ক্লিয়ারেন্স সার্টিফিকেট"
        ]
    },
    {
        id: "australia",
        countryName: "অস্ট্রেলিয়া (Australia)",
        category: "Australia",
        flag: "🇦🇺",
        visasOffered: "Student (Subclass 500), Tourist (Subclass 600)",
        processingTime: "30 - 60 Days",
        requirements: [
            "ভ্যালিড পাসপোর্ট ও স্ক্যান কপি",
            "অস্ট্রেলিয়ান ইউনিভার্সিটি থেকে eCoE (Confirmation of Enrolment)",
            "GTE / Genuine Student Requirement স্টেটমেন্ট",
            "ব্যাংক স্টেটমেন্ট ও স্পন্সরদের আইডি/ইনকাম প্রুফ",
            "মেডিকেল ফিটনেস টেস্ট রিপোর্ট",
            "IELTS / PTE / TOEFL স্কোরকার্ড"
        ]
    },

    // ----------------------------------------------------------------------
    // Europe (Schengen & UK)
    // ----------------------------------------------------------------------
    {
        id: "uk",
        countryName: "যুক্তরাজ্য (United Kingdom)",
        category: "Europe",
        flag: "🇬🇧",
        visasOffered: "Student (Student Route), Standard Visitor Visa",
        processingTime: "15 - 30 Days",
        requirements: [
            "পাসপোর্ট ও পূর্বের সকল ট্রাভেল হিস্ট্রি",
            "CAS (Confirmation of Acceptance for Studies) নম্বর",
            "ব্যাংক সলভেন্সি (২৮ দিনের মেচিউরড ফান্ড)",
            "TB (টিউবারকিউলোসিস) টেস্ট সার্টিফিকেট",
            "IELTS / MOI সার্টিফিকেট (প্রযোজ্য ক্ষেত্রে)",
            "একাডেমিক ডকুমেন্টস ও এক্সপেরিয়েন্স লেটার"
        ]
    },
    {
        id: "germany",
        countryName: "জার্মানি (Germany)",
        category: "Europe",
        flag: "🇩🇪",
        visasOffered: "Student Visa (Block Account), Schengen Visit Visa",
        processingTime: "60 - 90 Days",
        requirements: [
            "জার্মান ব্লকড অ্যাকাউন্ট (Blocked Account) কনফার্মেশন",
            "জার্মান ইউনিভার্সিটির অ্যাডমিশন লেটার",
            "IELTS বা জার্মান ল্যাঙ্গুয়েজ সার্টিফিকেট (B1/B2)",
            "হেলথ ইন্স্যুরেন্স কনফার্মেশন লেটার",
            "মোটিভেশন লেটার ও সিভি (Europass Format)",
            "সকল সার্টিফিকেট নোটারাইজড ও এটেস্টেড কপি"
        ]
    },
    {
        id: "france",
        countryName: "ফ্রান্স (France)",
        category: "Europe",
        flag: "🇫🇷",
        visasOffered: "Long Stay Student Visa, Schengen Tourism",
        processingTime: "30 - 45 Days",
        requirements: [
            "মেয়াদসহ পাসপোর্ট ও ছবি (35x45mm White background)",
            "Campus France ইভালুয়েশন ও এক্সেপ্টিয়ান্স লেটার",
            "হোটেল বুকিং ও এয়ার টিকেট রিজার্ভেশন",
            "ব্যাংক সলভেন্সি (গত ৬ মাসের)",
            "ট্রাভেল হেলথ ইন্স্যুরেন্স (৩০,০০০ ইউরো কাভারেজ)"
        ]
    },
    {
        id: "italy",
        countryName: "ইতালি (Italy)",
        category: "Europe",
        flag: "🇮🇹",
        visasOffered: "Student Visa, Visit & Business Visa",
        processingTime: "45 - 60 Days",
        requirements: [
            "Universitaly প্রি-এনরোলমেন্ট সামারি পেজ",
            "ইতালিয়ান ইউনিভার্সিটির অ্যাডমিশন লেটার",
            "পারিবারিক সোর্স অফ ফান্ডিং ও ব্যাংক স্টেটমেন্ট",
            "শিক্ষা মন্ত্রণালয়ের অ্যাটেস্টেড একাডেমিক পেপারস",
            "স্পন্সরদের ট্যাক্স রিটার্ন ডকুমেন্টস"
        ]
    },

    // ----------------------------------------------------------------------
    // Asia & Middle East
    // ----------------------------------------------------------------------
    {
        id: "japan",
        countryName: "জাপান (Japan)",
        category: "Asia",
        flag: "🇯🇵",
        visasOffered: "Student Visa (CoE), Short-term Visit",
        processingTime: "20 - 45 Days",
        requirements: [
            "CoE (Certificate of Eligibility) অরিজিনাল কপি",
            "পাসপোর্ট ও ছবি (2x2 inch)",
            "জাপানি ভাষা দক্ষতার সনদ (NAT / JLPT / J-Cert)",
            "স্পন্সরের ব্যাংক সলভেন্সি ও ইনকাম প্রুফ",
            "আবেদনকারীর শিক্ষাগত যোগ্যতার সনদপত্র"
        ]
    },
    {
        id: "malaysia",
        countryName: "মালয়েশিয়া (Malaysia)",
        category: "Asia",
        flag: "🇲🇾",
        visasOffered: "Student eVisa (VAL), Tourist eVisa",
        processingTime: "7 - 15 Days",
        requirements: [
            "EMGS অনুমোদনপত্র (Visa Approval Letter - VAL)",
            "পাসপোর্টের সকল পেজের স্ক্যান কপি",
            "সাদা ব্যাকগ্রাউন্ডের ডিজিটাল ছবি",
            "অফার লেটার ও এইচএসসি/ব্যাচেলর সনদ",
            "মেডিকেল এক্সামিনেশন রিপোর্ট"
        ]
    },
    {
        id: "uae",
        countryName: "ইউএই / দুবাই (UAE)",
        category: "Asia",
        flag: "🇦🇪",
        visasOffered: "Tourist Visa (30/60 Days), Student Residence",
        processingTime: "3 - 5 Days",
        requirements: [
            "পাসপোর্টের কালার স্ক্যান কপি (নূন্যতম ৬ মাস মেয়াদ)",
            "সম্প্রতি তোলা পাসপোর্ট সাইজ ছবি",
            "কনফার্মড রিটার্ন এয়ার টিকিট রিজার্ভেশন",
            "জাতীয় পরিচয়পত্র (NID) / জন্ম নিবন্ধন"
        ]
    }
];

// ----------------------------------------------------------------------
// Helper Functions for Data Access
// ----------------------------------------------------------------------
function getCountryById(id) {
    return visaDatabase.find(country => country.id === id);
}

function getCountriesByCategory(category) {
    if (category === 'All') return visaDatabase;
    return visaDatabase.filter(country => country.category === category);
}
