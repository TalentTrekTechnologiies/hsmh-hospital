// src/pages/user/Departments.jsx
import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../commoncomponents/Header'
import Footer from '../../commoncomponents/Footer'
import PageHero from '../../commoncomponents/PageHero'
import herodept from '../../assets/herodept.jpg'

// IMPORT THE SAME SPECIALIST IMAGES FROM DOCTORS PAGE
import specialist1 from '../../assets/Dr.Ganesh.png'
import specialist2 from '../../assets/Dr.Lakshmi.png'
import specialist3 from '../../assets/Dr.Nagendra.png'
import specialist4 from '../../assets/Dr.Revathi.png'
import specialist5 from '../../assets/Dr.Samita.png'

// Import video files - using only the available video
import video1 from '../../assets/video1.mp4'
// Comment out missing videos and use video1 as fallback
const video2 = video1;
const video3 = video1;

import cardiologyImg from '../../assets/cardiologyImg.jpg'
import orthopedicsImg from '../../assets/orthopedicsImg.jpg'
import neurologyImg from '../../assets/neurologyImg.jpg'
import generalMedicineImg from '../../assets/generalMedicineImg.jpg'
import dermatologyImg from '../../assets/dermatologyImg.jpg'

// Create fallback images for departments that don't have specific images
const emergencyImg = cardiologyImg;
const anesthesiaImg = neurologyImg;
const infertilityImg = dermatologyImg;
const obstetricsImg = orthopedicsImg;
const pediatricsImg = generalMedicineImg;
const urologyImg = neurologyImg;
const dentistryImg = dermatologyImg;
const oncologyImg = cardiologyImg;

export default function Departments() {
  const videoRefs = useRef([])
  const [hoveredVideo, setHoveredVideo] = useState(null)
  const [muted, setMuted] = useState(true)

  const departments = [
    { name: 'Cardiology', image: cardiologyImg },
    { name: 'Orthopedics and Trauma Care', image: orthopedicsImg },
    { name: 'General Medicine', image: generalMedicineImg },
    { name: 'General Surgery', image: orthopedicsImg },
    { name: 'Urology and Nephrology', image: urologyImg },
    { name: 'Neurology and Neurosurgery', image: neurologyImg },
    { name: 'Dentistry and Oro Maxillofacial Surgery', image: dentistryImg },
    { name: 'Surgical Oncology', image: oncologyImg },
    { name: 'Emergency and Critical Care', image: emergencyImg },
    { name: 'Anesthesia and Pain Medicine', image: anesthesiaImg },
    { name: 'Infertility and Reproductive Medicine', image: infertilityImg },
    { name: 'Obstetrics and Gynecology', image: obstetricsImg },
    { name: 'Pediatrics and Neonatology', image: pediatricsImg }
  ]

  const [selectedDept, setSelectedDept] = useState('Cardiology')

  // Videos data with local video files
  const departmentVideos = {
    Cardiology: [
      {
        id: 1,
        title: "Understanding Heart Health",
        description: "Learn about heart health and preventive measures",
        videoFile: video1,
        duration: "4:32",
        views: "15K views",
        date: "2 months ago",
        category: "Cardiology"
      },
      {
        id: 2,
        title: "Latest Advancements in Cardiac Surgery",
        description: "Modern surgical techniques for better outcomes",
        videoFile: video1,
        duration: "8:15",
        views: "8.2K views",
        date: "1 month ago",
        category: "Cardiology"
      },
      {
        id: 3,
        title: "Patient Success Story: Heart Bypass",
        description: "Real patient journey and recovery story",
        videoFile: video1,
        duration: "6:47",
        views: "22K views",
        date: "3 months ago",
        category: "Cardiology"
      }
    ],
    'Orthopedics and Trauma Care': [
      {
        id: 1,
        title: "Total Knee Replacement Explained",
        description: "Complete guide to knee replacement surgery",
        videoFile: video1,
        duration: "5:20",
        views: "12K views",
        date: "2 weeks ago",
        category: "Orthopedics"
      },
      {
        id: 2,
        title: "Recovery After Hip Surgery",
        description: "Tips for faster recovery after hip surgery",
        videoFile: video1,
        duration: "7:45",
        views: "6.5K views",
        date: "1 month ago",
        category: "Orthopedics"
      },
      {
        id: 3,
        title: "Sports Injury Prevention Tips",
        description: "Expert advice to prevent common sports injuries",
        videoFile: video1,
        duration: "9:10",
        views: "18K views",
        date: "3 weeks ago",
        category: "Orthopedics"
      }
    ],
    'General Medicine': [
      {
        id: 1,
        title: "Annual Health Checkup Guide",
        description: "Essential tests for your annual checkup",
        videoFile: video1,
        duration: "5:40",
        views: "11K views",
        date: "2 weeks ago",
        category: "General Medicine"
      },
      {
        id: 2,
        title: "Managing Diabetes Effectively",
        description: "Tips for better diabetes management",
        videoFile: video1,
        duration: "10:25",
        views: "31K views",
        date: "1 month ago",
        category: "General Medicine"
      },
      {
        id: 3,
        title: "Hypertension Control Tips",
        description: "Natural ways to control blood pressure",
        videoFile: video1,
        duration: "6:50",
        views: "16K views",
        date: "3 weeks ago",
        category: "General Medicine"
      }
    ],
    'General Surgery': [
      {
        id: 1,
        title: "Understanding Laparoscopic Surgery",
        description: "Benefits of minimally invasive surgery",
        videoFile: video1,
        duration: "6:30",
        views: "25K views",
        date: "1 week ago",
        category: "General Surgery"
      },
      {
        id: 2,
        title: "Hernia Repair Recovery Tips",
        description: "What to expect after hernia surgery",
        videoFile: video1,
        duration: "8:55",
        views: "9.8K views",
        date: "2 months ago",
        category: "General Surgery"
      },
      {
        id: 3,
        title: "Gallbladder Removal: What to Know",
        description: "Guide to cholecystectomy procedure",
        videoFile: video1,
        duration: "7:15",
        views: "14K views",
        date: "3 weeks ago",
        category: "General Surgery"
      }
    ],
    'Urology and Nephrology': [
      {
        id: 1,
        title: "Kidney Stone Prevention Tips",
        description: "How to prevent painful kidney stones",
        videoFile: video1,
        duration: "5:40",
        views: "11K views",
        date: "2 weeks ago",
        category: "Urology"
      },
      {
        id: 2,
        title: "Understanding Dialysis Treatment",
        description: "What to expect during dialysis",
        videoFile: video1,
        duration: "10:25",
        views: "31K views",
        date: "1 month ago",
        category: "Nephrology"
      },
      {
        id: 3,
        title: "Prostate Health Awareness",
        description: "Important screening and prevention",
        videoFile: video1,
        duration: "6:50",
        views: "16K views",
        date: "3 weeks ago",
        category: "Urology"
      }
    ],
    'Neurology and Neurosurgery': [
      {
        id: 1,
        title: "Stroke Warning Signs & Prevention",
        description: "Early detection and prevention of stroke",
        videoFile: video1,
        duration: "6:30",
        views: "25K views",
        date: "1 week ago",
        category: "Neurology"
      },
      {
        id: 2,
        title: "Understanding Epilepsy Management",
        description: "Managing epilepsy for better quality of life",
        videoFile: video1,
        duration: "8:55",
        views: "9.8K views",
        date: "2 months ago",
        category: "Neurology"
      },
      {
        id: 3,
        title: "Brain Tumor Treatment Options",
        description: "Latest advancements in neurosurgery",
        videoFile: video1,
        duration: "7:15",
        views: "14K views",
        date: "3 weeks ago",
        category: "Neurosurgery"
      }
    ],
    'Dentistry and Oro Maxillofacial Surgery': [
      {
        id: 1,
        title: "Dental Implant Procedure Explained",
        description: "Restore your smile with implants",
        videoFile: video1,
        duration: "7:30",
        views: "42K views",
        date: "1 week ago",
        category: "Dentistry"
      },
      {
        id: 2,
        title: "Wisdom Teeth Extraction Recovery",
        description: "Tips for comfortable recovery",
        videoFile: video1,
        duration: "5:55",
        views: "23K views",
        date: "2 weeks ago",
        category: "Oral Surgery"
      },
      {
        id: 3,
        title: "Cosmetic Dentistry Options",
        description: "Transform your smile",
        videoFile: video1,
        duration: "8:20",
        views: "19K views",
        date: "1 month ago",
        category: "Dentistry"
      }
    ],
    'Surgical Oncology': [
      {
        id: 1,
        title: "Understanding Cancer Surgery",
        description: "Role of surgery in cancer treatment",
        videoFile: video1,
        duration: "7:30",
        views: "42K views",
        date: "1 week ago",
        category: "Oncology"
      },
      {
        id: 2,
        title: "Breast Cancer Surgery Options",
        description: "Lumpectomy vs mastectomy",
        videoFile: video1,
        duration: "5:55",
        views: "23K views",
        date: "2 weeks ago",
        category: "Oncology"
      },
      {
        id: 3,
        title: "Minimally Invasive Tumor Removal",
        description: "Advanced techniques in cancer surgery",
        videoFile: video1,
        duration: "8:20",
        views: "19K views",
        date: "1 month ago",
        category: "Oncology"
      }
    ],
    'Emergency and Critical Care': [
      {
        id: 1,
        title: "Recognizing Heart Attack Symptoms",
        description: "Warning signs you shouldn't ignore",
        videoFile: video1,
        duration: "4:30",
        views: "45K views",
        date: "1 week ago",
        category: "Emergency"
      },
      {
        id: 2,
        title: "Stroke Emergency Response",
        description: "BE FAST: Act quickly",
        videoFile: video1,
        duration: "6:15",
        views: "32K views",
        date: "2 weeks ago",
        category: "Emergency"
      },
      {
        id: 3,
        title: "CPR Basics Everyone Should Know",
        description: "Life-saving techniques",
        videoFile: video1,
        duration: "8:45",
        views: "78K views",
        date: "1 month ago",
        category: "Emergency"
      }
    ],
    'Anesthesia and Pain Medicine': [
      {
        id: 1,
        title: "What to Expect During Anesthesia",
        description: "Understanding the process",
        videoFile: video1,
        duration: "5:20",
        views: "18K views",
        date: "3 weeks ago",
        category: "Anesthesia"
      },
      {
        id: 2,
        title: "Managing Chronic Pain Without Medication",
        description: "Alternative pain management techniques",
        videoFile: video1,
        duration: "7:40",
        views: "24K views",
        date: "2 weeks ago",
        category: "Pain Medicine"
      },
      {
        id: 3,
        title: "Nerve Block Procedures Explained",
        description: "Targeted pain relief",
        videoFile: video1,
        duration: "6:50",
        views: "12K views",
        date: "1 month ago",
        category: "Pain Medicine"
      }
    ],
    'Infertility and Reproductive Medicine': [
      {
        id: 1,
        title: "Understanding IVF Process",
        description: "Step-by-step guide to IVF",
        videoFile: video1,
        duration: "9:15",
        views: "56K views",
        date: "1 week ago",
        category: "Fertility"
      },
      {
        id: 2,
        title: "PCOS and Fertility Options",
        description: "Managing PCOS for conception",
        videoFile: video1,
        duration: "7:30",
        views: "34K views",
        date: "2 weeks ago",
        category: "Fertility"
      },
      {
        id: 3,
        title: "Male Factor Infertility Treatments",
        description: "Options for male infertility",
        videoFile: video1,
        duration: "6:45",
        views: "21K views",
        date: "3 weeks ago",
        category: "Fertility"
      }
    ],
    'Obstetrics and Gynecology': [
      {
        id: 1,
        title: "Pregnancy Week by Week Guide",
        description: "Fetal development and maternal changes",
        videoFile: video1,
        duration: "8:20",
        views: "67K views",
        date: "1 week ago",
        category: "Obstetrics"
      },
      {
        id: 2,
        title: "Natural vs Cesarean Birth",
        description: "Understanding your delivery options",
        videoFile: video1,
        duration: "6:40",
        views: "43K views",
        date: "2 weeks ago",
        category: "Obstetrics"
      },
      {
        id: 3,
        title: "Managing Endometriosis",
        description: "Symptoms and treatment options",
        videoFile: video1,
        duration: "7:15",
        views: "29K views",
        date: "3 weeks ago",
        category: "Gynecology"
      }
    ],
    'Pediatrics and Neonatology': [
      {
        id: 1,
        title: "Newborn Care Basics",
        description: "Essential tips for new parents",
        videoFile: video1,
        duration: "7:50",
        views: "89K views",
        date: "1 week ago",
        category: "Pediatrics"
      },
      {
        id: 2,
        title: "Childhood Vaccination Schedule",
        description: "Protecting your child's health",
        videoFile: video1,
        duration: "5:30",
        views: "52K views",
        date: "2 weeks ago",
        category: "Pediatrics"
      },
      {
        id: 3,
        title: "NICU Journey: What Parents Should Know",
        description: "Support for families in NICU",
        videoFile: video1,
        duration: "9:20",
        views: "37K views",
        date: "1 month ago",
        category: "Neonatology"
      }
    ]
  }

  const departmentDetails = {
    Cardiology: {
      title: 'Cardiology',
      subtitle: 'Advanced Heart & Vascular Institute',
      description: 'Our Cardiology Institute delivers comprehensive heart care supported by advanced diagnostics, minimally invasive procedures, and 24/7 emergency cardiac response.',
      highlights: ['25+ Years of Excellence', '50,000+ Successful Procedures', 'NABH Accredited Unit'],
      services: [
        'Interventional Cardiology',
        'Angioplasty & Stent Placement',
        'Heart Failure Management',
        'Preventive Cardiology Programs'
      ],
      technology: [
        'Digital Cath Lab',
        'Cardiac ICU',
        '3D Echocardiography',
        '24/7 Emergency Cardiac Response'
      ],
      doctors: [
        { name: 'Dr. Sai Ganesh', specialty: 'Orthopedician', qualifications: 'MBBS, M.S, FIJR', experience: '18+ Years', image: specialist1 },
        { name: 'Dr. Sri Lakshmi', specialty: 'Dental Surgeon', qualifications: 'BDS', experience: '10+ Years', image: specialist2 },
        { name: 'Dr. Vijaya Nagendra', specialty: 'Interventional Pain Physician', qualifications: 'MBBS, MD, IDCCM, FIPM, LLB', experience: '15+ Years', image: specialist3 },
        { name: 'Dr. Revathi Reddy', specialty: 'Pediatrician', qualifications: 'MBBS, DCH, PALS', experience: '12+ Years', image: specialist4 },
        { name: 'Dr. Samita Padhi', specialty: 'Gynecologist & Fertility Specialist', qualifications: 'M.S (OBG), Fellow IVF', experience: '14+ Years', image: specialist5 }
      ]
    },
    'Orthopedics and Trauma Care': {
      title: 'Orthopedics and Trauma Care',
      subtitle: 'Comprehensive Musculoskeletal & Trauma Center',
      description: 'Our Orthopedics and Trauma Care department delivers expert diagnosis, treatment, and rehabilitation for musculoskeletal conditions and injuries. From joint replacements, sports injuries, spine disorders, and arthritis management to complex fractures, pelvic/acetabular trauma, and post-traumatic reconstructions, our fellowship-trained orthopedic surgeons and trauma specialists provide advanced surgical and non-surgical care. Supported by physical therapy, pain management, and rapid-response teams, we offer 24/7 emergency trauma services, minimally invasive techniques, and personalized recovery plans to restore mobility, function, and quality of life.',
      highlights: ['24/7 Trauma Care', 'Fellowship-Trained Surgeons', 'Advanced Rehabilitation'],
      services: [
        'Joint Replacements (Hip, Knee, Shoulder)',
        'Sports Injury Management',
        'Spine Disorders Treatment',
        'Arthritis Management',
        'Complex Fracture Surgery',
        'Pelvic/Acetabular Trauma',
        'Post-Traumatic Reconstructions',
        'Minimally Invasive Orthopedic Surgery'
      ],
      technology: [
        'Advanced Digital X-Ray',
        '3D CT Imaging',
        'Computer-Navigated Surgery',
        'Arthroscopy Suite',
        'Physical Therapy & Rehabilitation Center',
        'Pain Management Unit'
      ],
      doctors: [
        { name: 'Dr. Sai Ganesh', specialty: 'Orthopedician', qualifications: 'MBBS, M.S, FIJR', experience: '18+ Years', image: specialist1 },
        { name: 'Dr. Vijaya Nagendra', specialty: 'Interventional Pain Physician', qualifications: 'MBBS, MD, IDCCM, FIPM, LLB', experience: '15+ Years', image: specialist3 },
        { name: 'Dr. Revathi Reddy', specialty: 'Pediatrician', qualifications: 'MBBS, DCH, PALS', experience: '12+ Years', image: specialist4 },
        { name: 'Dr. Samita Padhi', specialty: 'Gynecologist & Fertility Specialist', qualifications: 'M.S (OBG), Fellow IVF', experience: '14+ Years', image: specialist5 },
        { name: 'Dr. Sri Lakshmi', specialty: 'Dental Surgeon', qualifications: 'BDS', experience: '10+ Years', image: specialist2 }
      ]
    },
    'General Medicine': {
      title: 'General Medicine',
      subtitle: 'Comprehensive Primary & Internal Medicine',
      description: 'The General Medicine department (also known as Internal Medicine) serves as the cornerstone of adult healthcare, focusing on the prevention, diagnosis, and non-surgical management of a wide range of acute and chronic illnesses. Our experienced internists and hospitalists handle complex conditions such as diabetes, hypertension, respiratory diseases, infections, gastrointestinal issues, and multisystem disorders. We provide comprehensive outpatient primary care, inpatient hospital management, preventive screenings, and coordinated care for patients with multiple health concerns, emphasizing holistic wellness, patient education, and seamless transitions between hospital and community care.',
      highlights: ['24/7 Physician Support', 'Preventive Health Programs', 'Chronic Disease Management'],
      services: [
        'Diabetes Management',
        'Hypertension Treatment',
        'Respiratory Disease Care',
        'Infectious Disease Management',
        'Gastrointestinal Disorder Treatment',
        'Multisystem Disorder Care',
        'Preventive Health Screenings',
        'Outpatient Primary Care'
      ],
      technology: [
        'Integrated Diagnostic Labs',
        'Digital Health Records',
        'Telemedicine Services',
        '24/7 Patient Monitoring',
        'Preventive Screening Suite'
      ],
      doctors: [
        { name: 'Dr. Revathi Reddy', specialty: 'Pediatrician', qualifications: 'MBBS, DCH, PALS', experience: '12+ Years', image: specialist4 },
        { name: 'Dr. Samita Padhi', specialty: 'Gynecologist & Fertility Specialist', qualifications: 'M.S (OBG), Fellow IVF', experience: '14+ Years', image: specialist5 },
        { name: 'Dr. Sri Lakshmi', specialty: 'Dental Surgeon', qualifications: 'BDS', experience: '10+ Years', image: specialist2 },
        { name: 'Dr. Sai Ganesh', specialty: 'Orthopedician', qualifications: 'MBBS, M.S, FIJR', experience: '18+ Years', image: specialist1 },
        { name: 'Dr. Vijaya Nagendra', specialty: 'Interventional Pain Physician', qualifications: 'MBBS, MD, IDCCM, FIPM, LLB', experience: '15+ Years', image: specialist3 }
      ]
    },
    'General Surgery': {
      title: 'General Surgery',
      subtitle: 'Advanced Surgical Care & Minimally Invasive Procedures',
      description: 'Our General Surgery department offers a broad spectrum of surgical expertise for conditions affecting the abdomen, gastrointestinal tract, breast, skin, soft tissues, and more. Led by skilled surgeons, we perform elective and emergency procedures including hernia repairs, appendectomies, gallbladder removals, colorectal surgeries, thyroid operations, and minimally invasive (laparoscopic) techniques. With a focus on safety, precision, and rapid recovery, our multidisciplinary team collaborates with anesthesiologists, nurses, and specialists to deliver personalized surgical care, advanced wound management, and comprehensive pre- and post-operative support.',
      highlights: ['Minimally Invasive Surgery', 'Emergency Surgical Care', 'Rapid Recovery Protocols'],
      services: [
        'Hernia Repairs',
        'Appendectomies',
        'Gallbladder Removal',
        'Colorectal Surgeries',
        'Thyroid Operations',
        'Laparoscopic Surgery',
        'Advanced Wound Management',
        'Pre & Post-Operative Support'
      ],
      technology: [
        'Laparoscopic Surgery Suite',
        'Advanced Surgical Navigation',
        'Digital Operation Theatre',
        'Robotic-Assisted Surgery',
        'Integrated Anesthesia Monitoring'
      ],
      doctors: [
        { name: 'Dr. Sai Ganesh', specialty: 'Orthopedician', qualifications: 'MBBS, M.S, FIJR', experience: '18+ Years', image: specialist1 },
        { name: 'Dr. Vijaya Nagendra', specialty: 'Interventional Pain Physician', qualifications: 'MBBS, MD, IDCCM, FIPM, LLB', experience: '15+ Years', image: specialist3 },
        { name: 'Dr. Revathi Reddy', specialty: 'Pediatrician', qualifications: 'MBBS, DCH, PALS', experience: '12+ Years', image: specialist4 },
        { name: 'Dr. Samita Padhi', specialty: 'Gynecologist & Fertility Specialist', qualifications: 'M.S (OBG), Fellow IVF', experience: '14+ Years', image: specialist5 },
        { name: 'Dr. Sri Lakshmi', specialty: 'Dental Surgeon', qualifications: 'BDS', experience: '10+ Years', image: specialist2 }
      ]
    },
    'Urology and Nephrology': {
      title: 'Urology and Nephrology',
      subtitle: 'Integrated Kidney & Urinary Tract Care',
      description: 'The Urology and Nephrology department provides integrated care for the urinary tract, kidneys, bladder, prostate, and male reproductive system. Urologists treat conditions like kidney stones, urinary incontinence, prostate disorders (including cancer), erectile dysfunction, and urologic cancers through advanced procedures such as endoscopy, laser therapy, robotic surgery, and reconstructive techniques. Nephrologists manage kidney diseases, chronic kidney failure, hypertension, dialysis, and pre/post-transplant care. Together, we offer diagnostic testing, medical management, dialysis support, and collaborative care to improve kidney health and urologic function.',
      highlights: ['Integrated Urology-Nephrology Care', 'Dialysis Center', 'Robotic Urologic Surgery'],
      services: [
        'Kidney Stone Treatment',
        'Urinary Incontinence Management',
        'Prostate Disorder Care',
        'Erectile Dysfunction Treatment',
        'Urologic Cancer Surgery',
        'Chronic Kidney Disease Management',
        'Dialysis Services',
        'Pre/Post-Transplant Care'
      ],
      technology: [
        'Endoscopy Suite',
        'Laser Therapy Unit',
        'Robotic Surgery System',
        'Dialysis Center',
        'Advanced Urologic Imaging'
      ],
      doctors: [
        { name: 'Dr. Vijaya Nagendra', specialty: 'Interventional Pain Physician', qualifications: 'MBBS, MD, IDCCM, FIPM, LLB', experience: '15+ Years', image: specialist3 },
        { name: 'Dr. Revathi Reddy', specialty: 'Pediatrician', qualifications: 'MBBS, DCH, PALS', experience: '12+ Years', image: specialist4 },
        { name: 'Dr. Samita Padhi', specialty: 'Gynecologist & Fertility Specialist', qualifications: 'M.S (OBG), Fellow IVF', experience: '14+ Years', image: specialist5 },
        { name: 'Dr. Sri Lakshmi', specialty: 'Dental Surgeon', qualifications: 'BDS', experience: '10+ Years', image: specialist2 },
        { name: 'Dr. Sai Ganesh', specialty: 'Orthopedician', qualifications: 'MBBS, M.S, FIJR', experience: '18+ Years', image: specialist1 }
      ]
    },
    'Neurology and Neurosurgery': {
      title: 'Neurology and Neurosurgery',
      subtitle: 'Comprehensive Brain, Spine & Nerve Care',
      description: 'Our Neurology and Neurosurgery department specializes in disorders of the brain, spine, nerves, and nervous system. Neurologists diagnose and treat conditions like stroke, epilepsy, migraines, multiple sclerosis, Parkinson\'s disease, Alzheimer\'s, and neuromuscular disorders using advanced imaging, EEG, and medical therapies. Neurosurgeons perform precise interventions for brain tumors, aneurysms, spinal disorders, traumatic injuries, and minimally invasive spine surgeries. With a dedicated stroke center, neurocritical care, and rehabilitation support, our team delivers rapid, multidisciplinary care to protect neurological function and enhance recovery.',
      highlights: ['Dedicated Stroke Center', 'Neurocritical Care Unit', 'Minimally Invasive Spine Surgery'],
      services: [
        'Stroke Management',
        'Epilepsy Treatment',
        'Migraine & Headache Care',
        'Multiple Sclerosis Management',
        'Parkinson\'s Disease Treatment',
        'Alzheimer\'s Care',
        'Brain Tumor Surgery',
        'Spine Disorder Surgery',
        'Traumatic Brain Injury Care'
      ],
      technology: [
        'Advanced Brain Imaging (MRI, CT)',
        'EEG & EMG Labs',
        'Neuro ICU',
        'Image-Guided Neurosurgery',
        'Intraoperative Monitoring'
      ],
      doctors: [
        { name: 'Dr. Vijaya Nagendra', specialty: 'Interventional Pain Physician', qualifications: 'MBBS, MD, IDCCM, FIPM, LLB', experience: '15+ Years', image: specialist3 },
        { name: 'Dr. Revathi Reddy', specialty: 'Pediatrician', qualifications: 'MBBS, DCH, PALS', experience: '12+ Years', image: specialist4 },
        { name: 'Dr. Samita Padhi', specialty: 'Gynecologist & Fertility Specialist', qualifications: 'M.S (OBG), Fellow IVF', experience: '14+ Years', image: specialist5 },
        { name: 'Dr. Sri Lakshmi', specialty: 'Dental Surgeon', qualifications: 'BDS', experience: '10+ Years', image: specialist2 },
        { name: 'Dr. Sai Ganesh', specialty: 'Orthopedician', qualifications: 'MBBS, M.S, FIJR', experience: '18+ Years', image: specialist1 }
      ]
    },
    'Dentistry and Oro Maxillofacial Surgery': {
      title: 'Dentistry and Oro Maxillofacial Surgery',
      subtitle: 'Comprehensive Oral Health & Facial Surgery',
      description: 'The Dentistry and Oro Maxillofacial Surgery department offers comprehensive oral health services, from routine dental care to complex surgical interventions. Our dentists provide preventive check-ups, cleanings, fillings, root canals, crowns, and cosmetic dentistry. Oral and maxillofacial surgeons handle impacted wisdom teeth extraction, jaw reconstruction, facial trauma repair, dental implants, corrective jaw surgery (orthognathic), TMJ disorders, and treatment of oral cancers or cysts. We emphasize patient comfort, advanced imaging, sedation options, and coordinated care for both functional restoration and aesthetic outcomes.',
      highlights: ['Cosmetic Dentistry', 'Facial Trauma Repair', 'Dental Implant Center'],
      services: [
        'Preventive Dental Care',
        'Root Canal Treatment',
        'Crowns & Bridges',
        'Cosmetic Dentistry',
        'Wisdom Teeth Extraction',
        'Dental Implants',
        'Jaw Reconstruction',
        'Facial Trauma Repair',
        'TMJ Disorder Treatment',
        'Oral Cancer Treatment'
      ],
      technology: [
        'Digital Dental X-Rays',
        '3D Cone Beam CT',
        'Intraoral Scanners',
        'Laser Dentistry',
        'Sedation Dentistry Suite',
        'CAD/CAM Technology'
      ],
      doctors: [
        { name: 'Dr. Samita Padhi', specialty: 'Gynecologist & Fertility Specialist', qualifications: 'M.S (OBG), Fellow IVF', experience: '14+ Years', image: specialist5 },
        { name: 'Dr. Sri Lakshmi', specialty: 'Dental Surgeon', qualifications: 'BDS', experience: '10+ Years', image: specialist2 },
        { name: 'Dr. Sai Ganesh', specialty: 'Orthopedician', qualifications: 'MBBS, M.S, FIJR', experience: '18+ Years', image: specialist1 },
        { name: 'Dr. Vijaya Nagendra', specialty: 'Interventional Pain Physician', qualifications: 'MBBS, MD, IDCCM, FIPM, LLB', experience: '15+ Years', image: specialist3 },
        { name: 'Dr. Revathi Reddy', specialty: 'Pediatrician', qualifications: 'MBBS, DCH, PALS', experience: '12+ Years', image: specialist4 }
      ]
    },
    'Surgical Oncology': {
      title: 'Surgical Oncology',
      subtitle: 'Advanced Cancer Surgery & Multidisciplinary Care',
      description: 'Our Surgical Oncology department focuses on the surgical treatment of cancers, working closely with medical and radiation oncologists for comprehensive cancer care. Specialized surgeons perform precise tumor removals, biopsies, lymph node dissections, and reconstructive procedures for cancers of the breast, gastrointestinal tract, liver, pancreas, skin (melanoma), head/neck, gynecologic, urologic, and soft tissues. Using minimally invasive, robotic, and organ-preserving techniques, we aim to achieve optimal cancer control while minimizing impact on quality of life, supported by multidisciplinary tumor boards, genetic counseling, and post-surgical rehabilitation.',
      highlights: ['Multidisciplinary Tumor Board', 'Robotic Cancer Surgery', 'Organ-Preserving Techniques'],
      services: [
        'Breast Cancer Surgery',
        'Gastrointestinal Cancer Surgery',
        'Liver & Pancreatic Cancer Surgery',
        'Melanoma & Skin Cancer Surgery',
        'Head & Neck Cancer Surgery',
        'Gynecologic Cancer Surgery',
        'Urologic Cancer Surgery',
        'Soft Tissue Sarcoma Surgery',
        'Lymph Node Dissection',
        'Reconstructive Surgery'
      ],
      technology: [
        'Robotic Surgery System',
        'Minimally Invasive Surgical Suite',
        'Image-Guided Biopsy',
        'Intraoperative Radiation Therapy',
        'Genetic Counseling Services',
        'Multidisciplinary Tumor Board'
      ],
      doctors: [
        { name: 'Dr. Samita Padhi', specialty: 'Gynecologist & Fertility Specialist', qualifications: 'M.S (OBG), Fellow IVF', experience: '14+ Years', image: specialist5 },
        { name: 'Dr. Sai Ganesh', specialty: 'Orthopedician', qualifications: 'MBBS, M.S, FIJR', experience: '18+ Years', image: specialist1 },
        { name: 'Dr. Vijaya Nagendra', specialty: 'Interventional Pain Physician', qualifications: 'MBBS, MD, IDCCM, FIPM, LLB', experience: '15+ Years', image: specialist3 },
        { name: 'Dr. Revathi Reddy', specialty: 'Pediatrician', qualifications: 'MBBS, DCH, PALS', experience: '12+ Years', image: specialist4 },
        { name: 'Dr. Sri Lakshmi', specialty: 'Dental Surgeon', qualifications: 'BDS', experience: '10+ Years', image: specialist2 }
      ]
    },
    'Emergency and Critical Care': {
      title: 'Emergency and Critical Care',
      subtitle: '24/7 Life-Saving Emergency Services',
      description: 'Our Emergency and Critical Care department provides immediate, life-saving treatment for patients facing acute illnesses, severe injuries, or life-threatening conditions. Staffed 24/7 by experienced emergency physicians, critical care specialists, nurses, and support teams, we deliver rapid assessment, stabilization, and advanced interventions. From trauma and cardiac emergencies to strokes, sepsis, and respiratory failure, our team bridges emergency response with intensive monitoring to optimize outcomes. We prioritize fast triage, multidisciplinary collaboration, and seamless transitions to specialized units like ICUs for the best possible recovery.',
      highlights: ['24/7 Emergency Services', 'Level 1 Trauma Center', 'Dedicated Critical Care Units'],
      services: [
        'Trauma Care',
        'Cardiac Emergencies',
        'Stroke Management',
        'Sepsis Treatment',
        'Respiratory Failure Care',
        'Acute Illness Management',
        'Emergency Surgery',
        'Critical Care Monitoring'
      ],
      technology: [
        'Advanced Life Support Equipment',
        'Digital Triage System',
        'Point-of-Care Diagnostics',
        'Ventilator Support',
        'Telemetry Monitoring',
        'Rapid Response System'
      ],
      doctors: [
        { name: 'Dr. Sai Ganesh', specialty: 'Orthopedician', qualifications: 'MBBS, M.S, FIJR', experience: '18+ Years', image: specialist1 },
        { name: 'Dr. Vijaya Nagendra', specialty: 'Interventional Pain Physician', qualifications: 'MBBS, MD, IDCCM, FIPM, LLB', experience: '15+ Years', image: specialist3 },
        { name: 'Dr. Revathi Reddy', specialty: 'Pediatrician', qualifications: 'MBBS, DCH, PALS', experience: '12+ Years', image: specialist4 },
        { name: 'Dr. Samita Padhi', specialty: 'Gynecologist & Fertility Specialist', qualifications: 'M.S (OBG), Fellow IVF', experience: '14+ Years', image: specialist5 },
        { name: 'Dr. Sri Lakshmi', specialty: 'Dental Surgeon', qualifications: 'BDS', experience: '10+ Years', image: specialist2 }
      ]
    },
    'Anesthesia and Pain Medicine': {
      title: 'Anesthesia and Pain Medicine',
      subtitle: 'Comprehensive Perioperative & Pain Management Care',
      description: 'The Anesthesia and Pain Medicine department ensures safe, comfortable, and personalized care during surgical procedures, diagnostic tests, and chronic pain management. Our board-certified anesthesiologists and pain specialists administer various types of anesthesia (general, regional, local, sedation) tailored to each patient\'s needs. We also offer comprehensive pain management services, including acute post-operative pain control, chronic pain therapies (interventional procedures, nerve blocks, medication management), and palliative support. Our focus is on minimizing discomfort, enhancing safety, and improving quality of life through advanced techniques and individualized plans.',
      highlights: ['Board-Certified Anesthesiologists', 'Comprehensive Pain Management', 'Palliative Support'],
      services: [
        'General Anesthesia',
        'Regional Anesthesia',
        'Local Anesthesia',
        'Sedation Services',
        'Post-Operative Pain Control',
        'Chronic Pain Therapies',
        'Interventional Pain Procedures',
        'Nerve Blocks',
        'Palliative Care Support'
      ],
      technology: [
        'Advanced Anesthesia Monitoring',
        'Ultrasound-Guided Nerve Blocks',
        'Patient-Controlled Analgesia',
        'Pain Management Suites',
        'Thermal Imaging'
      ],
      doctors: [
        { name: 'Dr. Vijaya Nagendra', specialty: 'Interventional Pain Physician', qualifications: 'MBBS, MD, IDCCM, FIPM, LLB', experience: '15+ Years', image: specialist3 },
        { name: 'Dr. Revathi Reddy', specialty: 'Pediatrician', qualifications: 'MBBS, DCH, PALS', experience: '12+ Years', image: specialist4 },
        { name: 'Dr. Samita Padhi', specialty: 'Gynecologist & Fertility Specialist', qualifications: 'M.S (OBG), Fellow IVF', experience: '14+ Years', image: specialist5 },
        { name: 'Dr. Sai Ganesh', specialty: 'Orthopedician', qualifications: 'MBBS, M.S, FIJR', experience: '18+ Years', image: specialist1 },
        { name: 'Dr. Sri Lakshmi', specialty: 'Dental Surgeon', qualifications: 'BDS', experience: '10+ Years', image: specialist2 }
      ]
    },
    'Infertility and Reproductive Medicine': {
      title: 'Infertility and Reproductive Medicine',
      subtitle: 'Advanced Fertility & Reproductive Health Care',
      description: 'Our Infertility and Reproductive Medicine department (also known as Reproductive Endocrinology and Infertility) supports individuals and couples facing challenges in building their families. Led by fertility specialists, we provide thorough evaluations, diagnostic testing, and advanced treatments including ovulation induction, intrauterine insemination (IUI), in vitro fertilization (IVF), egg/sperm donation, preimplantation genetic testing, and fertility preservation (egg freezing). We address conditions like PCOS, endometriosis, male factor infertility, and recurrent pregnancy loss with compassionate, evidence-based care. Our goal is to offer hope, personalized pathways, and high-success options in a supportive environment.',
      highlights: ['High Success IVF Rates', 'Fertility Preservation', 'Genetic Testing Services'],
      services: [
        'Ovulation Induction',
        'Intrauterine Insemination (IUI)',
        'In Vitro Fertilization (IVF)',
        'Egg/Sperm Donation',
        'Preimplantation Genetic Testing',
        'Fertility Preservation (Egg Freezing)',
        'PCOS Management',
        'Endometriosis Treatment',
        'Male Factor Infertility',
        'Recurrent Pregnancy Loss Care'
      ],
      technology: [
        'Advanced Fertility Lab',
        'EmbryoScope Time-Lapse Imaging',
        'Genetic Testing Lab',
        'Cryopreservation Unit',
        'Hysteroscopy Suite'
      ],
      doctors: [
        { name: 'Dr. Samita Padhi', specialty: 'Gynecologist & Fertility Specialist', qualifications: 'M.S (OBG), Fellow IVF', experience: '14+ Years', image: specialist5 },
        { name: 'Dr. Revathi Reddy', specialty: 'Pediatrician', qualifications: 'MBBS, DCH, PALS', experience: '12+ Years', image: specialist4 },
        { name: 'Dr. Vijaya Nagendra', specialty: 'Interventional Pain Physician', qualifications: 'MBBS, MD, IDCCM, FIPM, LLB', experience: '15+ Years', image: specialist3 },
        { name: 'Dr. Sri Lakshmi', specialty: 'Dental Surgeon', qualifications: 'BDS', experience: '10+ Years', image: specialist2 },
        { name: 'Dr. Sai Ganesh', specialty: 'Orthopedician', qualifications: 'MBBS, M.S, FIJR', experience: '18+ Years', image: specialist1 }
      ]
    },
    'Obstetrics and Gynecology': {
      title: 'Obstetrics and Gynecology',
      subtitle: 'Comprehensive Women\'s Health Across All Life Stages',
      description: 'The Obstetrics and Gynecology department (often called OB/GYN) delivers comprehensive women\'s health care across all life stages—from adolescence through menopause and beyond. Our expert obstetricians and gynecologists provide prenatal care, high-risk pregnancy management, labor and delivery services (including normal and cesarean births), and postpartum support. In gynecology, we offer routine check-ups, family planning, menstrual disorder treatment, minimally invasive surgeries (laparoscopy, hysteroscopy), management of conditions like fibroids, endometriosis, pelvic floor disorders, and gynecologic oncology screening/treatment. We emphasize preventive care, patient education, and personalized plans for reproductive and overall wellness.',
      highlights: ['High-Risk Pregnancy Care', 'Minimally Invasive Gynecology', 'Family Planning Services'],
      services: [
        'Prenatal Care',
        'High-Risk Pregnancy Management',
        'Labor & Delivery Services',
        'Cesarean Births',
        'Postpartum Support',
        'Routine Gynecological Check-ups',
        'Family Planning',
        'Menstrual Disorder Treatment',
        'Minimally Invasive Surgery',
        'Fibroid & Endometriosis Treatment',
        'Pelvic Floor Disorder Care',
        'Gynecologic Oncology Screening'
      ],
      technology: [
        'Advanced Fetal Monitoring',
        '3D/4D Ultrasound',
        'Laparoscopic Surgery Suite',
        'Hysteroscopy System',
        'Colposcopy Unit',
        'Women\'s Health Imaging'
      ],
      doctors: [
        { name: 'Dr. Samita Padhi', specialty: 'Gynecologist & Fertility Specialist', qualifications: 'M.S (OBG), Fellow IVF', experience: '14+ Years', image: specialist5 },
        { name: 'Dr. Revathi Reddy', specialty: 'Pediatrician', qualifications: 'MBBS, DCH, PALS', experience: '12+ Years', image: specialist4 },
        { name: 'Dr. Vijaya Nagendra', specialty: 'Interventional Pain Physician', qualifications: 'MBBS, MD, IDCCM, FIPM, LLB', experience: '15+ Years', image: specialist3 },
        { name: 'Dr. Sri Lakshmi', specialty: 'Dental Surgeon', qualifications: 'BDS', experience: '10+ Years', image: specialist2 },
        { name: 'Dr. Sai Ganesh', specialty: 'Orthopedician', qualifications: 'MBBS, M.S, FIJR', experience: '18+ Years', image: specialist1 }
      ]
    },
    'Pediatrics and Neonatology': {
      title: 'Pediatrics and Neonatology',
      subtitle: 'Dedicated Care for Infants, Children & Adolescents',
      description: 'Our Pediatrics and Neonatology department is dedicated to the health and development of infants, children, and adolescents. The Pediatrics team offers preventive care (well-child visits, vaccinations), diagnosis and treatment of childhood illnesses, growth monitoring, and specialized care for chronic conditions. Neonatology focuses on newborns, especially premature babies or those with medical complexities, through our state-of-the-art Neonatal Intensive Care Unit (NICU). Board-certified neonatologists, pediatric specialists, and nurses provide advanced respiratory support, nutritional care, developmental follow-up, and family-centered support to give every newborn the strongest possible start in life.',
      highlights: ['Level III NICU', 'Pediatric Specialists', 'Developmental Follow-up'],
      services: [
        'Well-Child Visits',
        'Vaccination Programs',
        'Childhood Illness Treatment',
        'Growth & Development Monitoring',
        'Chronic Condition Management',
        'Newborn Care',
        'Premature Baby Care',
        'NICU Services',
        'Respiratory Support for Newborns',
        'Developmental Follow-up'
      ],
      technology: [
        'Neonatal Intensive Care Unit (NICU)',
        'Pediatric Ventilators',
        'Infant Warmers',
        'Phototherapy Units',
        'Pediatric Imaging',
        'Developmental Assessment Tools'
      ],
      doctors: [
        { name: 'Dr. Revathi Reddy', specialty: 'Pediatrician', qualifications: 'MBBS, DCH, PALS', experience: '12+ Years', image: specialist4 },
        { name: 'Dr. Samita Padhi', specialty: 'Gynecologist & Fertility Specialist', qualifications: 'M.S (OBG), Fellow IVF', experience: '14+ Years', image: specialist5 },
        { name: 'Dr. Vijaya Nagendra', specialty: 'Interventional Pain Physician', qualifications: 'MBBS, MD, IDCCM, FIPM, LLB', experience: '15+ Years', image: specialist3 },
        { name: 'Dr. Sri Lakshmi', specialty: 'Dental Surgeon', qualifications: 'BDS', experience: '10+ Years', image: specialist2 },
        { name: 'Dr. Sai Ganesh', specialty: 'Orthopedician', qualifications: 'MBBS, M.S, FIJR', experience: '18+ Years', image: specialist1 }
      ]
    }
  }

  // Handle video hover
  const handleVideoHover = (index, isHovering) => {
    if (isHovering) {
      setHoveredVideo(index)
      videoRefs.current[index]?.play()
    } else {
      setHoveredVideo(null)
      if (videoRefs.current[index]) {
        videoRefs.current[index].pause()
        videoRefs.current[index].currentTime = 0
      }
    }
  }

  const currentDept = departmentDetails[selectedDept]
  const currentVideos = departmentVideos[selectedDept]

  return (
    <div className='min-h-screen flex flex-col' style={{ backgroundColor: '#FAF3E0' }}>
      <Header />

      <main className='flex-grow pt-12 w-full'>

        <PageHero
          title='Our Medical Specialties'
          subtitle='Comprehensive, evidence-based care delivered by experienced specialists across all major disciplines.'
          image={herodept}
        />

        <div className='w-full px-4 sm:px-6 lg:px-8 py-16'>
          <div className='max-w-[1920px] mx-auto'>

            {/* Department Tabs */}
            <div className='flex flex-wrap gap-3 justify-center mb-16'>
              {departments.map((dept) => (
                <button
                  key={dept.name}
                  onClick={() => setSelectedDept(dept.name)}
                  className={`px-4 py-2 md:px-6 md:py-3 rounded-full text-xs md:text-sm font-semibold transition 
                  ${selectedDept === dept.name
                      ? 'bg-teal-700 text-white shadow-md'
                      : 'bg-white border border-gray-300 text-gray-700 hover:bg-teal-50'
                    }`}
                >
                  {dept.name}
                </button>
              ))}
            </div>

            {/* Department Content - Edge to Edge White Container */}
            <div className='relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mb-16 lg:mb-20'>
              <div className='bg-white py-16 lg:py-20 shadow-sm'>
                <div className='max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8'>
                  {currentDept && (
                    <>
                      {/* Top Section */}
                      <div className='grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 lg:mb-20'>
                        <div>
                          <h1 className='text-3xl md:text-4xl font-bold text-gray-900 mb-3'>
                            {currentDept.title}
                          </h1>
                          <p className='text-lg text-teal-700 font-semibold mb-4'>
                            {currentDept.subtitle}
                          </p>
                          <p className='text-gray-600 leading-relaxed mb-6'>
                            {currentDept.description}
                          </p>
                          {/* Highlights */}
                          <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
                            {currentDept.highlights.map((item, index) => (
                              <div key={index} className='bg-teal-50 p-4 rounded-lg text-center'>
                                <p className='text-sm font-semibold text-teal-800'>{item}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <img
                            src={departments.find(d => d.name === selectedDept)?.image}
                            alt={selectedDept}
                            className='w-full rounded-2xl object-cover shadow-md h-[300px] md:h-[400px]'
                          />
                        </div>
                      </div>

                      {/* Core Services */}
                      <div className='mb-16 lg:mb-20'>
                        <div className='grid lg:grid-cols-2 gap-6 lg:gap-8'>
                          {/* Treatments Card */}
                          <div className='bg-white rounded-2xl shadow-sm p-6 md:p-8 lg:p-10 border border-gray-100'>
                            <h2 className='text-2xl font-bold text-teal-700 mb-6'>Treatments & Services</h2>
                            <ul className='space-y-4'>
                              {currentDept.services.map((service, index) => (
                                <li key={index} className='flex items-start gap-3'>
                                  <span className='text-teal-700 text-lg mt-0.5'>✓</span>
                                  <span className='text-gray-800 text-base'>{service}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Technology Card */}
                          <div className='bg-white rounded-2xl shadow-sm p-6 md:p-8 lg:p-10 border border-gray-100'>
                            <h2 className='text-2xl font-bold text-teal-700 mb-6'>Technology & Infrastructure</h2>
                            <ul className='space-y-4'>
                              {currentDept.technology.map((item, index) => (
                                <li key={index} className='flex items-start gap-3'>
                                  <span className='text-pink-500 text-lg mt-0.5'>▣</span>
                                  <span className='text-gray-800 text-base'>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* MEET OUR SPECIALISTS - Edge to Edge */}
            <div className='relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mb-16 lg:mb-20'>
              <div className='bg-[#FAF3E0] py-16 lg:py-20'>
                <div className='max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8'>

                  {/* Section Header - Centered */}
                  <div className='text-center mb-12'>
                    <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4'>
                      Meet Our Specialists
                    </h2>
                    <p className='text-gray-600 text-lg max-w-2xl mx-auto'>
                      World-class experts dedicated to providing exceptional care in {currentDept?.title}
                    </p>
                  </div>

                  {/* Horizontal Scroll Container */}
                  <div className='flex gap-6 overflow-x-auto whitespace-nowrap scroll-smooth pb-4 no-scrollbar'>
                    {currentDept?.doctors.map((doctor, index) => (
                      <div
                        key={index}
                        className='inline-block min-w-[280px] md:min-w-[320px] bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300 border border-gray-200'
                      >
                        {/* Doctor Image */}
                        <div className='h-72 md:h-80 overflow-hidden'>
                          <img
                            src={doctor.image}
                            alt={doctor.name}
                            className='w-full h-full object-cover hover:scale-110 transition duration-500'
                          />
                        </div>

                        {/* Doctor Info */}
                        <div className='p-5 md:p-6'>
                          <h3 className='text-lg md:text-xl font-bold text-emerald-800 mb-1'>
                            {doctor.name}
                          </h3>
                          <p className='text-emerald-600 font-medium text-sm mb-2'>
                            {doctor.specialty}
                          </p>
                          <div className='space-y-1 mb-2'>
                            {doctor.qualifications.split(',').map((qual, i) => (
                              <p key={i} className='text-gray-600 text-sm'>
                                {qual.trim()}
                              </p>
                            ))}
                          </div>
                          <p className='text-gray-700 font-medium text-sm mt-2'>
                            Experience: {doctor.experience}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* View All Button */}
                  <div className='text-center mt-12'>
                    <Link
                      to={`/doctors?department=${selectedDept}`}
                      className='inline-block px-8 py-3 bg-teal-700 text-white font-semibold rounded-lg hover:bg-teal-800 transition duration-300'
                    >
                      View All Specialists
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Videos Section */}
            <div className='relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mb-16 lg:mb-20'>
              <div className='bg-white py-16 lg:py-20 shadow-sm'>
                <div className='max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8'>
                  <div className='flex justify-between items-center mb-8'>
                    <div>
                      <span className='inline-block px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-semibold mb-3'>
                        Video Library
                      </span>
                      <h2 className='text-2xl md:text-3xl font-bold text-gray-900'>
                        Educational Videos
                      </h2>
                      <p className='text-gray-600 mt-1'>
                        Watch informative videos about {currentDept?.title} treatments and patient stories
                      </p>
                    </div>
                    <Link
                      to={`/videos?department=${selectedDept}`}
                      className='text-teal-700 font-semibold hover:underline'
                    >
                      View All Videos →
                    </Link>
                  </div>

                  {/* Video Grid */}
                  <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto'>
                    {currentVideos?.map((video, index) => (
                      <div
                        key={video.id}
                        className='group cursor-pointer'
                        onMouseEnter={() => handleVideoHover(index, true)}
                        onMouseLeave={() => handleVideoHover(index, false)}
                      >
                        <div className='relative rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition-all duration-300 h-full flex flex-col'>
                          
                          {/* Video Container */}
                          <div className='relative w-full bg-black' style={{ height: '250px' }}>
                            <video
                              ref={(el) => (videoRefs.current[index] = el)}
                              className='absolute inset-0 w-full h-full'
                              style={{ 
                                objectFit: 'cover',
                                objectPosition: 'center'
                              }}
                              muted={muted}
                              loop
                              playsInline
                              preload='metadata'
                            >
                              <source src={video.videoFile} type='video/mp4' />
                            </video>

                            {/* Gradient Overlay */}
                            <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />

                            {/* Category Badge */}
                            <div className='absolute top-3 left-3'>
                              <span className='px-2.5 py-1 bg-teal-500/90 backdrop-blur-sm text-white text-xs font-semibold rounded-full'>
                                {video.category || selectedDept}
                              </span>
                            </div>

                            {/* Duration Badge */}
                            <div className='absolute top-3 right-3'>
                              <span className='px-2.5 py-1 bg-black/60 backdrop-blur-sm text-white text-xs rounded-lg'>
                                {video.duration}
                              </span>
                            </div>

                            {/* Play Button Overlay */}
                            <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300'>
                              <div className='bg-teal-600 rounded-full p-4 transform hover:scale-110 transition-transform shadow-lg'>
                                <svg className='w-6 h-6 text-white' fill='currentColor' viewBox='0 0 24 24'>
                                  <path d='M8 5v14l11-7z' />
                                </svg>
                              </div>
                            </div>

                            {/* Volume Control */}
                            {hoveredVideo === index && (
                              <button
                                onClick={(e) => {
                                  e.stopPropagation()
                                  setMuted(!muted)
                                  if (videoRefs.current[index]) {
                                    videoRefs.current[index].muted = !muted
                                  }
                                }}
                                className='absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm p-2 rounded-full hover:bg-black/80 transition-colors z-10'
                              >
                                {muted ? (
                                  <svg className='w-4 h-4 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z' />
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2' />
                                  </svg>
                                ) : (
                                  <svg className='w-4 h-4 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z' />
                                  </svg>
                                )}
                              </button>
                            )}
                          </div>

                          {/* Video Info */}
                          <div className='p-4 bg-white text-left flex-grow'>
                            <h3 className='font-semibold text-gray-900 text-base mb-1 line-clamp-1'>
                              {video.title}
                            </h3>
                            <p className='text-sm text-gray-600 line-clamp-2 mb-2'>
                              {video.description}
                            </p>
                            <div className='flex items-center gap-2 text-xs text-gray-500'>
                              <span>{video.views}</span>
                              <span>•</span>
                              <span>{video.date}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency Section */}
            <div className='relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mt-20 lg:mt-24'>
              <div className='bg-gray-100 py-16 lg:py-20'>
                <div className='max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 text-center'>
                  <h2 className="text-3xl md:text-4xl font-bold text-teal-800 mb-6">
                    24/7 Emergency & Critical Care
                  </h2>
                  <p className="text-gray-600 max-w-3xl mx-auto mb-6 leading-relaxed">
                    Immediate medical assistance available round the clock with rapid response teams
                    and fully equipped emergency facilities designed to handle critical situations
                    efficiently and safely.
                  </p>
                  <p className="text-teal-700 font-medium mb-8">
                    ISO Certified &nbsp; | &nbsp; NABH Accredited &nbsp; | &nbsp; Advanced Trauma Care Unit
                  </p>
                  <div className="flex justify-center gap-6 flex-wrap">
                    <a
                      href="tel:+91789654123"
                      className="px-8 py-3 border-2 border-red-500 text-red-600 font-semibold rounded-lg hover:bg-red-50 transition"
                    >
                      Call Emergency: +91 9640540475
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />

      {/* Hide scrollbar styles */}
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  )
}