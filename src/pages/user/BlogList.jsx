import React, { useMemo, useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Helmet from "react-helmet";
import Header from "../../commoncomponents/Header";
import Footer from "../../commoncomponents/Footer";

import blogHero from "../../assets/Hospital blog cover.png";

// Import your blog images (use your actual image names)
import anaesthesiaImg from "../../assets/anesthesia blog.jpeg";
import paediatricsImg from "../../assets/pediatrics blog.jpeg";
import gynaecologyImg from "../../assets/gynaecology blog.jpeg";
import orthopaedicsImg from "../../assets/ortho.jpeg";
import generalMedicineImg from "../../assets/General medicine blog.jpeg";

// New blog images - you'll need to add these assets
import neurologyImg from "../../assets/Neurology Blog.jpeg";
import infertilityImg from "../../assets/infertility blog .jpeg";
import emergencyImg from "../../assets/Emergency Blog .jpeg";




/* ================= MODAL COMPONENT ================= */

const BlogModal = ({ isOpen, onClose, article }) => {
  if (!isOpen || !article) return null;

  // Function to format content with paragraphs
  const formatContent = (content) => {
    return content.split('\n\n').map((paragraph, index) => (
      <p key={index} className="mb-4 text-gray-700 leading-relaxed">
        {paragraph}
      </p>
    ));
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          {/* Close button */}
          <button
            onClick={onClose}
            className="sticky top-4 float-right z-10 mr-4 mt-4 w-10 h-10 rounded-full bg-white shadow-md hover:shadow-lg flex items-center justify-center text-2xl"
            aria-label="Close"
          >
            ×
          </button>
          
          {/* Content */}
          <div className="px-6 sm:px-8 pb-8 pt-16">
            {/* Category */}
            <div className="text-sm text-[#005c52] font-bold uppercase mb-2">
              {article.category}
            </div>
            
            {/* Featured Image */}
            <div className="mb-6">
              <img 
                src={article.featuredImage} 
                alt={article.articleTitle}
                className="w-full h-[300px] object-cover rounded-xl shadow-md"
              />
            </div>
            
            {/* Title */}
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              {article.articleTitle}
            </h2>
          
            {/* Author and Date */}
            <div className="text-sm text-gray-500 font-medium mb-6 pb-6 border-b border-gray-200">
              {article.authorName} | {article.publishDate}
            </div>
            
            {/* Full Content */}
            <div className="prose max-w-none">
              {formatContent(article.fullContent)}
            </div>
            
            {/* Disclaimer */}
            <div className="mt-8 p-4 bg-gray-50 rounded-lg text-sm text-gray-600 italic border-l-4 border-[#005c52]">
              This article is for informational purposes only. For medical advice, diagnosis, or treatment, 
              please consult a qualified healthcare professional from our {article.category} Department.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



/* ================= DATA ================= */

export const recentArticlesData = [
  {
    id: 1,
    category: "Anaesthesia and Pain Medicine",
    featuredImage: anaesthesiaImg, 
    articleTitle: "Safe Surgery and Comfortable Recovery – Understanding Anaesthesia and Pain Care",
    preview: "For many patients, the thought of surgery brings one major fear – 'Will I be awake?' or 'Will it hurt?' Understanding how anaesthesia works and how modern pain medicine ensures your comfort can help reduce that fear.",
    description: "Understanding anaesthesia and pain management for safe surgery and comfortable recovery.",
    authorName: "Dr. Meenu Walia",
    publishDate: "Mar 03, 2026",
    fullContent: `For many patients, the thought of surgery brings one major fear "Will I be awake?" or "Will it hurt?" It is completely natural to feel anxious about anaesthesia. In fact, many people worry more about anaesthesia than the surgery itself. Understanding how anaesthesia works and how modern pain medicine ensures your comfort can help reduce that fear and build confidence before any procedure.

Anaesthesia is a specialized branch of medicine focused on relieving pain and ensuring patient safety during surgical or medical procedures. An anaesthesiologist is a trained doctor who carefully monitors you before, during, and after surgery. Their role is not limited to "putting you to sleep." They are responsible for managing your breathing, heart rate, blood pressure, oxygen levels, and overall stability throughout the procedure.

There are different types of anaesthesia, and the choice depends on the type of surgery, your health condition, and your doctor's recommendation.

The first type is general anaesthesia. This is used for major surgeries. Under general anaesthesia, you are completely unconscious and do not feel pain during the procedure. Medications are given through an injection or through a mask to make you sleep. Throughout the surgery, the anaesthesiologist continuously monitors your vital signs to ensure everything remains stable.

The second type is regional anaesthesia, such as spinal or epidural anaesthesia. This is commonly used for procedures involving the lower half of the body, such as caesarean sections, orthopaedic surgeries, or certain abdominal operations. In this method, medication is injected near the spinal nerves to numb a specific part of the body. You may remain awake, but you will not feel pain in the surgical area.

The third type is local anaesthesia, which is used for minor procedures like stitching a wound or removing a small lump. Only a small area is numbed, and you remain fully awake.

Many patients worry about safety. It is important to know that modern anaesthesia is extremely safe. Before surgery, you will undergo a pre-anaesthesia check-up. During this consultation, the anaesthesiologist reviews your medical history, allergies, previous surgeries, ongoing medications, and existing conditions like diabetes, hypertension, asthma, or heart disease. This assessment helps plan the safest anaesthesia approach tailored specifically for you.

You may be advised to avoid eating or drinking for several hours before surgery. This is to prevent complications such as vomiting while under anaesthesia. Following these instructions carefully is very important for your safety.

After surgery, some patients may experience mild side effects such as nausea, sore throat, dizziness, or temporary confusion. These are usually short-lived and manageable. Serious complications are rare, especially when the procedure is conducted in a properly equipped hospital under expert supervision.

Apart from surgical anaesthesia, pain medicine is another vital part of this department.

Pain is not something that should simply be tolerated. Whether it is post-surgical pain, back pain, joint pain, nerve pain, or cancer-related pain, effective management improves quality of life significantly. Chronic pain can affect sleep, mood, appetite, and daily functioning. Addressing it properly allows patients to return to their normal routines faster.

Modern pain medicine offers various treatment options. These include medications, nerve blocks, physiotherapy guidance, epidural injections, and minimally invasive procedures. The goal is not just to mask pain temporarily but to identify its cause and treat it appropriately.

For example, patients suffering from chronic lower back pain due to slipped discs or arthritis may benefit from targeted injections that reduce inflammation around the affected nerves. Similarly, nerve blocks can help patients with severe nerve pain by interrupting pain signals.

Post-operative pain management is equally important. Today, hospitals use multimodal pain relief techniques. This means combining different types of medications and methods to control pain effectively while minimizing side effects. Good pain control helps patients move earlier, breathe better, and recover faster after surgery.

In recent years, patient comfort and safety have become the central focus of anaesthesia and pain care. Continuous monitoring systems, advanced medications, and trained specialists ensure high standards of care.

Communication is key. If you are scheduled for surgery, do not hesitate to ask questions. Inform your anaesthesiologist about any fears, previous reactions to anaesthesia, or medical conditions. Being open helps the medical team provide safer and more personalized care.

It is also important not to ignore persistent pain. Many people continue suffering silently, assuming pain is a normal part of ageing or consulting a doctor. Seeking consultation early can prevent pain from becoming chronic and difficult to treat.

Anaesthesia and pain medicine work quietly behind the scenes, but their role is crucial in modern healthcare. They make surgeries possible, reduce suffering, and ensure comfort during some of life's most challenging medical moments.

With proper evaluation, expert care, and open communication, patients can approach surgery and pain treatment with confidence rather than fear.`
  },
  {
    id: 2,
    category: "Paediatrics",
    featuredImage: paediatricsImg,
    articleTitle: "Growing Up Strong: A Guide to Your Child's Health in the Early Years",
    preview: "The first few years of a child's life are filled with wonder. Understanding nutrition, active play, vaccinations, and regular check-ups can help you make confident decisions during these important early years.",
    description: "Essential guide to nutrition, active play, vaccinations, and health check-ups for your child's early years.",
    authorName: "Dr. Anita Desai",
    publishDate: "Feb 28, 2026",
    fullContent: `The first few years of a child's life are filled with wonder. One day they are tiny and completely dependent on you, and before you know it, they are crawling across the floor, taking their first steps, and speaking their first words. Every smile feels special. Every small achievement feels like a celebration. As parents, nothing matters more than seeing our children healthy, active, and happy.

In our city, where families are closely connected and advice flows from every direction grandparents, neighbours, relatives raising a child becomes a shared experience. While traditional wisdom is valuable, understanding a few basic principles of child health can help you make confident decisions during these important early years.

The first and most important pillar of a child's health is nutrition.

For newborns and infants, mother's milk is truly the best start in life. Breast milk contains the perfect balance of nutrients, along with antibodies that protect babies from infections. Exclusive breastfeeding is recommended for the first six months of life, unless advised otherwise by a doctor. It not only supports physical growth but also strengthens emotional bonding between mother and baby.

After six months, babies gradually need additional nutrition along with breast milk. This stage, called complementary feeding, should begin with soft, easily digestible foods. You don't need expensive baby foods or fancy products. Simple, home-cooked meals work beautifully. Well-cooked and mashed dal rice, khichdi, mashed vegetables like carrot, pumpkin, and potato, soft fruits like banana or chikoo, and lightly mashed curd rice are excellent options.

Introduce one new food at a time and observe for any allergies or digestive issues. As your child grows, gradually include a variety of grains, pulses, vegetables, fruits, and proteins. Avoid adding too much salt or sugar. Packaged snacks, biscuits, chips, and sugary drinks should be limited as much as possible. These early food habits shape your child's preferences for life. A child who learns to enjoy simple, balanced meals is more likely to maintain healthy eating habits as an adult.

Hydration is also important. Offer clean, boiled, and cooled water once your baby starts solid foods. Ensure utensils and feeding bowls are properly cleaned to avoid infections.

The second pillar of healthy growth is active play.

In today's fast-moving world, it can be tempting to hand over a mobile phone or tablet to keep children quiet. While occasional screen time may be unavoidable, real-world play is essential for healthy development. Physical play helps build strong bones and muscles, improves balance and coordination, and supports overall growth.

Encourage your child to crawl, walk, run, climb, and explore safely. Simple games like hide-and-seek, playing with balls, stacking blocks, drawing with crayons, or riding a small bicycle are more beneficial than hours spent watching videos. Outdoor play in a safe park environment provides fresh air and sunlight, which is important for Vitamin D and bone health.

Play is not just physical it is also emotional and intellectual. When children play with other kids, they learn sharing, patience, communication, and problem-solving. Talking to your child, reading stories, singing rhymes, and answering their endless "why" questions helps develop language and thinking skills.

The third and most critical pillar of early childhood health is vaccination.

Many parents have questions or concerns about vaccines. It is completely natural to want the best and safest options for your child. Vaccines are carefully tested and have been used for decades worldwide to protect children from serious diseases like measles, polio, diphtheria, and whooping cough. These diseases can cause severe complications if not prevented.

Vaccination works by preparing your child's immune system to fight infections. Mild fever or swelling at the injection site may occur, but these are temporary and far less risky than the diseases themselves. Your paediatrician will provide a vaccination schedule tailored to your child's age. Keeping track of these dates through a small diary or phone reminder ensures no dose is missed.

Regular health check-ups are equally important. Even if your child appears healthy, periodic visits allow doctors to monitor growth, weight, height, and developmental milestones. Early detection of concerns whether related to nutrition, speech, or behaviour allows timely guidance and support.

Sleep also plays a vital role in growth. Babies and toddlers need adequate sleep for brain development and physical repair. Create a calm bedtime routine and limit screen exposure before sleep.

Finally, never underestimate the importance of love, patience, and emotional security. A child who feels safe and supported at home develops confidence and resilience.

The early years pass quickly. The tiny hands that once held your finger will soon hold school books. By focusing on balanced nutrition, encouraging active play, ensuring timely vaccinations, and attending regular check-ups, you are building a strong foundation for your child's future.

Healthy habits formed today create healthier adults tomorrow.`
  },
  {
    id: 3,
    category: "Obstetrics & Gynaecology",
    featuredImage: gynaecologyImg,
    articleTitle: "Your First Pregnancy: A Gentle Guide for the Journey Ahead",
    preview: "Finding out that you're pregnant is one of the most magical moments in life. Understanding nutrition, regular check-ups, and emotional well-being can help you embrace this journey with confidence.",
    description: "A comprehensive guide to nutrition, prenatal care, and emotional well-being during your first pregnancy.",
    authorName: "Dr. Kavita Rao",
    publishDate: "Feb 25, 2026",
    fullContent: `Finding out that you're pregnant is one of the most magical and emotional moments in life. The two lines on the test kit can bring tears of joy, excitement, nervousness, and sometimes even a little fear all at the same time. Suddenly, everything feels different. Along with happiness, a hundred questions begin to fill your mind. What should I eat? Is this discomfort normal? When should I see a doctor? Am I doing everything right?

If you are experiencing your first pregnancy, especially in a close-knit city where family support is strong, you may receive plenty of advice from mothers, grandmothers, aunts, and neighbours. While their love and experience are valuable, it is important to balance traditional wisdom with proper medical guidance. Pregnancy is a beautiful journey, and understanding what lies ahead can help you embrace it with confidence and calmness.

The very first step after a positive home pregnancy test is to visit a qualified gynaecologist. A urine test at home gives an early indication, but a clinical confirmation is essential. During your first appointment usually scheduled around 6 to 8 weeks your doctor may perform a scan to confirm the pregnancy, check the baby's heartbeat, and estimate your due date. This visit also allows you to discuss your medical history and begin necessary supplements such as folic acid, which is crucial for your baby's early development.

Once the news settles in, the most common question becomes: "What should I eat?"

The good news is that you don't need a complicated or expensive diet plan. The basic principle is simple eat fresh, balanced, and nutritious meals. Home cooked food is always the safest option. Include a mix of carbohydrates, proteins, healthy fats, vitamins, and minerals in your daily meals. Traditional meals like dal, roti, rice, vegetables, and curd provide excellent nutrition when prepared hygienically.

Protein plays a vital role in your baby's growth. Include foods such as lentils, chickpeas, paneer, milk, curd, nuts, seeds, and eggs (if you consume them). Green leafy vegetables provide iron and folic acid, which help prevent anaemia a common issue during pregnancy. Calcium is equally important for your baby's bone and teeth development, so make sure you drink milk or consume other dairy products daily.

At the same time, it is wise to avoid certain foods. Stay away from undercooked meat, unpasteurized dairy products, and street food that may not be hygienically prepared. Raw papaya and excessive pineapple are often advised against in early pregnancy. Limit caffeine intake and avoid packaged junk foods as much as possible.

During the first trimester (first three months), you may experience fatigue, nausea, vomiting, mood swings, and food aversions. Morning sickness, despite its name, can happen at any time of the day. This is completely normal and usually settles after the first trimester. Eating small, frequent meals instead of three heavy meals can help. Dry snacks like plain biscuits, toast, or a banana may reduce nausea. Stay hydrated by drinking water, coconut water, or fresh homemade juices.

As your pregnancy progresses into the second trimester, you may start feeling more energetic. This is often called the "golden period" of pregnancy. However, you may also notice body aches, mild swelling in the feet, back pain, or leg cramps. These changes happen because your body is adapting to support your growing baby. Gentle prenatal exercises, light walking, and proper posture can help reduce discomfort. Always consult your doctor before starting any exercise routine.

Emotional changes are also a part of pregnancy. Hormonal fluctuations can make you feel sensitive, anxious, or overwhelmed at times. Talk openly with your partner and family about how you feel. Emotional support plays a big role in ensuring a healthy pregnancy. If you ever feel persistent sadness or anxiety, discuss it with your doctor without hesitation.

Regular antenatal check-ups are extremely important throughout your pregnancy. During these visits, your doctor will monitor your blood pressure, weight, blood sugar levels, and your baby's growth. Periodic scans and blood tests help detect any concerns early. Vaccinations recommended during pregnancy, such as tetanus and others advised by your doctor, should not be missed.

Avoid self-medication during pregnancy. Even common medicines for fever or cold should only be taken after consulting your doctor. Certain medications that are safe otherwise may not be suitable during pregnancy.

Most importantly, listen to your body. Rest when you feel tired. Sleep adequately. Wear comfortable clothing. Avoid heavy lifting. Maintain personal hygiene and stay in a clean, safe environment.

Pregnancy is not an illness it is a natural and powerful phase of life. Every pregnancy is unique, and comparisons with others are unnecessary. Trust your body's strength. Stay informed, but don't let excessive online information create fear.

With proper medical guidance, balanced nutrition, emotional support, and regular check-ups, you can enjoy this precious journey with confidence. In just a few months, you will hold your little one in your arms and every step of this journey will feel worth it.

You are stronger than you think. And you are not alone.`
  },
  {
    id: 4,
    category: "Orthopaedics",
    featuredImage: orthopaedicsImg,
    articleTitle: "That Nagging Knee Pain: When to Rest and When to See a Doctor",
    preview: "Knee pain has quietly become an unwanted companion for many. Understanding when to rest and when to seek medical help can protect your joints and maintain an active lifestyle.",
    description: "Understanding knee pain, warning signs, treatment options, and when to consult an orthopaedic specialist.",
    authorName: "Dr. Rakesh Verma",
    publishDate: "Feb 22, 2026",
    fullContent: `For many of us in our city, knee pain has quietly become an unwanted companion. It may begin as a mild discomfort while climbing the stairs at the local temple, squatting to do household work, or getting up after sitting cross-legged during a family function. At first, we brush it aside. "It's just age," we say. "It will go away." But when that small ache slowly becomes a daily struggle, it starts affecting not just mobility, but confidence and independence.

Understanding your knee pain is the first step toward protecting your joints and maintaining an active lifestyle for years to come.

The knee is one of the most hardworking joints in the human body. It acts like a hinge, allowing us to walk, bend, sit, climb, run, and even kneel. Every step we take puts pressure on it sometimes up to three to four times our body weight. Inside the joint, smooth cartilage cushions the bones and helps them glide comfortably. Strong ligaments, muscles, and tendons support movement and stability.

Over time, especially after the age of 40, this cushioning cartilage can gradually wear down. This condition is commonly known as osteoarthritis. However, not all knee pain is arthritis. Sometimes, the pain arises from strained muscles, ligament injuries, vitamin deficiencies, excess weight, or even improper posture. Younger individuals may experience knee pain due to sports injuries, sudden twisting movements, or overexertion.

So how do you know when knee pain is simply temporary fatigue and when it requires medical attention?

If your knee feels mildly sore after a long day of walking, standing for hours, or doing physical work, it may just need rest. In such cases, simple home care can help. Elevate your leg while resting. Apply an ice pack wrapped in a cloth for 15–20 minutes to reduce inflammation. Avoid putting excessive strain on the joint for a day or two. Gentle stretching exercises can also relieve stiffness. This type of pain typically improves within 24 to 48 hours.

However, certain warning signs should not be ignored.

If the pain persists for several days and does not improve with rest, it is advisable to consult an orthopaedic specialist. Continuous pain is often a sign that something deeper needs evaluation. Swelling around the knee, especially if it appears suddenly, may indicate inflammation or fluid accumulation inside the joint.

If the knee feels warm to the touch or appears visibly red, this could suggest infection or significant inflammation. Sharp, stabbing pain that prevents you from putting weight on the leg is another serious sign. In cases of injury, if you heard a "pop" sound at the moment of impact followed by pain and instability, it may indicate a ligament tear, such as an ACL injury.

Another important symptom to notice is stiffness in the morning that lasts more than 30 minutes. Difficulty in bending or straightening the knee fully can also indicate joint damage. Ignoring these symptoms and continuing daily activities without evaluation may worsen the condition over time.

The good news is that treatment for knee pain does not always mean surgery. In fact, most patients improve with conservative management. After proper examination, your orthopaedic doctor may suggest physiotherapy to strengthen the muscles around the knee. Strong thigh muscles (quadriceps and hamstrings) act as natural support for the joint, reducing pressure and improving stability.

Weight management is another crucial factor. Even a small reduction in body weight can significantly decrease stress on the knees. For example, losing just 5 kilograms can reduce the load on the knee joint by several times during movement.

Simple lifestyle modifications can also make a big difference. Instead of sitting cross-legged on the floor, use a chair with proper back support. Avoid using Indian-style toilets if knee pain is severe; consider using a western toilet for less strain. Wear comfortable footwear with proper cushioning rather than flat, hard sandals. Avoid high heels, which increase pressure on the knees.

For early-stage arthritis, medications to reduce pain and inflammation, along with joint supplements, may be recommended. In some cases, injections may provide relief. Surgical procedures such as arthroscopy or knee replacement are considered only when conservative treatments fail and pain significantly affects quality of life.

It is also important not to rely solely on painkillers bought over the counter. While they may provide temporary relief, they do not address the root cause of the problem. Prolonged unsupervised use can also lead to side effects.

Knee pain should never be seen as an unavoidable part of ageing. With early diagnosis, proper treatment, and small adjustments in daily habits, most people can continue walking, travelling, working, and enjoying family life comfortably.

Do not wait until the pain becomes unbearable. Listening to your body and seeking timely medical advice can prevent long-term damage and improve your quality of life. Your knees carry you through every stage of life — taking care of them today ensures they support you tomorrow.`
  },
  {
    id: 5,
    category: "General Medicine",
    featuredImage: generalMedicineImg,
    articleTitle: "Beating the Monsoon Blues: Don't Let the Rain Dampen Your Health",
    preview: "The monsoon brings relief from heat but also brings seasonal illnesses. Understanding prevention and knowing when to seek medical help can keep you and your family healthy.",
    description: "Essential tips for preventing monsoon-related illnesses and maintaining good health during rainy season.",
    authorName: "Dr. Monica Mahajan",
    publishDate: "Feb 20, 2026",
    fullContent: `The first showers of the monsoon are always special, aren't they? After months of heat and dust, the cool breeze feels like a blessing. The smell of wet soil, children playing in puddles, hot tea in the evening it's a season many of us look forward to every year. But here in our city, we also know that the rainy season brings more than just relief from the summer. It quietly brings a wave of seasonal illnesses.

Suddenly, someone in the family has a cold that refuses to go away. A neighbour is down with high fever. Schools report viral infections spreading among children. Pharmacies become crowded. While this may feel routine every year, it's important to understand why it happens and what we can do to protect ourselves and our loved ones.

During monsoon, the air becomes humid and temperatures fluctuate frequently. This creates an ideal environment for viruses and bacteria to multiply. At the same time, waterlogging in certain areas becomes common. Stagnant water becomes a breeding ground for mosquitoes, increasing the risk of diseases like dengue and malaria. Contaminated water sources can also lead to stomach infections, typhoid, and hepatitis A.

The good news is that most monsoon-related illnesses can be prevented with simple and consistent habits.

Let's start with water safety one of the most important precautions during this season. Always drink boiled or properly purified water at home. Even if the water looks clean, contamination can occur due to damaged pipelines or mixing of drainage water during heavy rains. If you are travelling or outside for long hours, carry your own water bottle. Avoid consuming water or juices from roadside vendors unless you are absolutely sure of their hygiene standards.

Food hygiene is equally important. During monsoon, our digestive system tends to be more sensitive. Avoid raw salads, cut fruits from street stalls, and uncovered food items that may have been exposed to flies and moisture. Instead, prefer freshly prepared, hot meals. Steam-cooked foods like idlis, upma, khichdi, or soups are gentle on the stomach. If you enjoy snacks like samosas or pakoras during rainy evenings, make sure they are freshly fried and from a trusted place. Heat helps kill many harmful microorganisms.

Mosquito control should become a weekly routine at home. Take five to ten minutes every Sunday to inspect your surroundings. Empty flower pots, buckets, coolers, coconut shells, or any container that may collect rainwater. Ensure overhead tanks are covered properly. Use mosquito nets or repellents, especially for children and elderly family members. These small preventive steps can significantly reduce the risk of mosquito-borne illnesses.

Personal hygiene should never be compromised. Wash your hands frequently with soap, especially before eating and after returning home. Keep your feet clean and dry to prevent fungal infections, which are common during humid weather. Change out of wet clothes as soon as possible to avoid skin infections and colds.

Another important aspect is immunity. Many people fall sick during monsoon because their immunity is already low. Ensure your diet includes seasonal fruits (properly washed and peeled), green vegetables, lentils, and adequate protein. Stay hydrated, even if you don't feel as thirsty as in summer. Warm soups and herbal drinks can be comforting and beneficial. Proper sleep and regular light exercise at home can also strengthen your immune system.

Despite precautions, if you develop symptoms like persistent fever, severe body pain, headache behind the eyes, vomiting, loose motions, or unusual fatigue, do not ignore them. High fever lasting more than two days needs medical evaluation. Avoid self-medication, especially antibiotics. Taking leftover medicines from a previous illness or following advice from neighbours can sometimes worsen the condition or delay proper diagnosis.

Viral fevers, dengue, malaria, typhoid each requires different treatment approaches. A simple blood test and timely consultation with a physician can help identify the exact cause and start appropriate care. Early diagnosis not only ensures faster recovery but also prevents complications.

Special care should be taken for children, elderly individuals, pregnant women, and people with chronic conditions like diabetes, hypertension, or asthma. Their bodies may not respond to infections as quickly, and even mild symptoms should be evaluated promptly.

The monsoon season is meant to be enjoyed watching the rain from your balcony, sharing hot snacks with family, and celebrating festivals that fall during this time. Illness should not become a part of that experience.

By following simple precautions safe water, hygienic food, mosquito control, good personal hygiene, and timely medical consultation you can keep most seasonal illnesses away. Prevention truly is better than cure, especially during the rainy months.

Let's welcome the monsoon with awareness and care, ensuring that the only thing spreading this season is joy not infection.`
  },
  {
    id: 6,
    category: "Neurology and Neurosurgery",
    featuredImage: neurologyImg,
    articleTitle: "Understanding Brain and Nerve Health: When to Seek Expert Care",
    preview: "Our brain and nervous system control everything we do. A sudden severe headache, weakness in one arm, or persistent back pain can be alarming. Understanding when expert care is needed can make a life-changing difference.",
    description: "Comprehensive guide to understanding neurological conditions, warning signs, and when to consult a specialist.",
    authorName: "Dr. Vikram Seth",
    publishDate: "Feb 18, 2026",
    fullContent: `Our brain and nervous system control everything we do – from thinking, speaking, and walking to breathing and feeling emotions. Yet, we often take this complex system for granted until something goes wrong. A sudden severe headache, weakness in one arm, persistent back pain, or frequent episodes of dizziness can be alarming. Understanding the role of Neurology and Neurosurgery can help you recognize when expert care is needed and how early treatment can make a life-changing difference.

Neurology is the branch of medicine that deals with disorders of the brain, spinal cord, and nerves. A neurologist treats conditions using medications and non-surgical approaches. Neurosurgery, on the other hand, involves surgical treatment of problems affecting the brain, spine, and nervous system. While the two specialties are closely related, not all neurological conditions require surgery.

Common neurological conditions include stroke, epilepsy (seizure disorders), migraine, Parkinson's disease, multiple sclerosis, neuropathy, memory disorders, and chronic headaches. Spine-related issues such as slipped discs and nerve compression also fall under this field. Neurosurgeons handle cases like brain tumors, spinal cord injuries, severe head injuries, certain types of stroke, and complex spine surgeries.

One of the most serious neurological emergencies is a stroke. A stroke occurs when blood supply to a part of the brain is interrupted, either due to a clot or bleeding. Warning signs include sudden weakness or numbness on one side of the body, slurred speech, confusion, difficulty seeing, severe headache, or loss of balance. Stroke is a medical emergency. Immediate treatment within the first few hours can prevent permanent brain damage and disability.

Head injuries are another major concern, especially due to road traffic accidents. Even a fall at home can cause serious brain injury, particularly in elderly individuals. Symptoms such as persistent vomiting, drowsiness, seizures, or loss of consciousness after a head injury require urgent medical evaluation.

Not all neurological problems are sudden. Some develop gradually. For example, recurring headaches may simply be migraines, but severe or unusual headaches should not be ignored. Similarly, frequent seizures, memory loss, tremors, or changes in behavior need medical attention. Early diagnosis can prevent complications and improve quality of life.

Spine problems are increasingly common due to sedentary lifestyles, long hours of sitting, and improper posture. Lower back pain radiating to the legs, neck pain spreading to the arms, tingling sensations, or weakness may indicate nerve compression or disc problems. Many of these conditions can be treated with medications, physiotherapy, and lifestyle changes. Surgery is recommended only when conservative treatment fails or if there is significant nerve damage.

Modern neurology relies on advanced diagnostic tools such as MRI scans, CT scans, EEG (to study brain electrical activity), nerve conduction studies, and specialized blood tests. These investigations help identify the exact cause of symptoms and guide appropriate treatment.

In neurosurgery, technological advancements have made procedures safer and more precise. Minimally invasive spine surgeries, microscopic brain surgeries, and image-guided techniques allow faster recovery and reduced hospital stay. However, surgery is always considered carefully, weighing benefits and risks.

Preventive care plays a key role in brain health. Controlling blood pressure, diabetes, and cholesterol reduces the risk of stroke. Wearing helmets while riding two-wheelers and using seat belts in cars prevent head injuries. Maintaining a healthy lifestyle with regular exercise, balanced diet, adequate sleep, and stress management supports overall neurological well-being.

Mental health is also closely connected to brain health. Anxiety, depression, and chronic stress can affect concentration, memory, and overall functioning. Seeking help early and discussing symptoms openly with a healthcare provider is important.

Family members often feel anxious when a loved one is diagnosed with a neurological condition. Clear communication with doctors helps in understanding the condition, treatment plan, and recovery expectations. Rehabilitation therapies such as physiotherapy, speech therapy, and occupational therapy are often part of neurological recovery and significantly improve outcomes.

The brain is delicate but remarkably resilient. With timely medical intervention and proper care, many neurological conditions can be managed effectively. Advances in medicine continue to improve survival rates and quality of life for patients with complex neurological disorders.

Listening to your body is essential. Sudden symptoms should never be ignored, and persistent discomfort deserves evaluation. Early diagnosis not only improves treatment success but also prevents long-term disability.

Neurology and Neurosurgery work together to protect and restore one of the body's most vital systems. Whether managing migraines, treating seizures, addressing spine problems, or performing life-saving brain surgery, the goal remains the same – preserving function, relieving suffering, and improving quality of life.`
  },
  {
    id: 7,
    category: "Infertility and Reproductive Medicine",
    featuredImage: infertilityImg,
    articleTitle: "Understanding Infertility: Hope, Options, and the Journey to Parenthood",
    preview: "For many couples, the dream of parenthood is deeply heartfelt. Understanding that infertility is a medical condition, not a personal failure, and knowing the treatment options can bring hope and clarity.",
    description: "Comprehensive guide to understanding infertility causes, treatment options, and emotional support for couples.",
    authorName: "Dr. Priya Sharma",
    publishDate: "Feb 15, 2026",
    fullContent: `For many couples, the dream of holding their own child is one of life's most heartfelt desires. When months pass and pregnancy does not happen as expected, it can bring confusion, stress, and even self-doubt. In our communities, where family and parenthood are deeply valued, the emotional pressure can feel overwhelming. It is important to understand that infertility is a medical condition – not a personal failure – and in many cases, it is treatable.

Infertility is generally defined as the inability to conceive after one year of regular, unprotected intercourse. For women above the age of 35, evaluation is recommended after six months. Both partners should be evaluated because infertility can result from factors affecting the woman, the man, or sometimes both.

In women, common causes include irregular ovulation, polycystic ovarian syndrome (PCOS), thyroid disorders, blocked fallopian tubes, endometriosis, or age-related decline in egg quality. In men, low sperm count, poor sperm motility, hormonal imbalance, infections, or lifestyle factors such as smoking and alcohol use can contribute to fertility challenges.

One of the biggest misconceptions is that infertility is always a woman's issue. In reality, male factors contribute to nearly half of infertility cases. That is why both partners must approach evaluation together, with openness and mutual support.

The first step in infertility management is a detailed consultation. Your doctor will review your medical history, menstrual history, previous pregnancies (if any), lifestyle habits, and any underlying medical conditions. Basic investigations may include blood tests to check hormone levels, ultrasound scans to examine the uterus and ovaries, and semen analysis for the male partner.

In many cases, simple treatment can make a big difference. If irregular ovulation is the issue, medications can help stimulate egg release. Hormonal imbalances such as thyroid disorders can be corrected with appropriate treatment. Lifestyle changes such as maintaining a healthy weight, reducing stress, quitting smoking, limiting alcohol, and improving diet can significantly improve fertility outcomes.

For couples who need additional assistance, several advanced reproductive options are available.

One commonly used treatment is Intrauterine Insemination (IUI). In this procedure, prepared sperm is placed directly into the uterus around the time of ovulation to increase the chances of fertilization. IUI is often recommended for mild male factor infertility, unexplained infertility, or ovulation-related issues.

In cases where IUI is not successful or if there are more complex issues such as blocked tubes or very low sperm count, In Vitro Fertilization (IVF) may be advised. IVF involves stimulating the ovaries to produce multiple eggs, retrieving those eggs, fertilizing them with sperm in a laboratory, and then transferring the resulting embryo into the uterus. IVF has helped millions of couples worldwide achieve pregnancy.

Modern reproductive medicine also offers options such as Intracytoplasmic Sperm Injection (ICSI), where a single healthy sperm is directly injected into an egg, particularly helpful in severe male infertility cases. For certain medical conditions, egg freezing, sperm freezing, or embryo freezing may be recommended.

While medical treatments are important, emotional well-being is equally crucial. Infertility can bring feelings of anxiety, frustration, guilt, or isolation. Couples may face questions from relatives or social pressure, which can add to emotional strain. Open communication between partners, emotional support from family, and counseling when needed can help maintain mental strength during this journey.

It is also important to remember that age plays a significant role in fertility, especially for women. Egg quality and quantity naturally decline after the age of 35. Seeking timely medical advice rather than delaying evaluation can improve treatment success rates.

Not every couple requires advanced treatment. Sometimes, proper timing of intercourse based on ovulation tracking, lifestyle improvement, and minor medical corrections are enough to achieve pregnancy.

Patience is essential. Fertility treatments may require multiple cycles, and success is not always immediate. However, advancements in reproductive medicine have dramatically improved outcomes, offering hope to many families who once thought parenthood was out of reach.

Choosing a qualified fertility specialist and a well-equipped center ensures proper diagnosis, ethical guidance, and individualized care. Each couple's situation is unique, and treatment plans should be tailored accordingly.

Infertility is a journey – sometimes challenging, often emotional, but filled with possibilities. With the right medical support, informed decisions, and emotional resilience, many couples are able to achieve their dream of becoming parents.

You are not alone in this journey. Modern medicine, combined with compassionate care, offers real hope and practical solutions.`
  },
  {
    id: 8,
    category: "Emergency and Critical Care",
    featuredImage: emergencyImg,
    articleTitle: "When Every Second Counts: Understanding Emergency and Critical Care",
    preview: "Medical emergencies rarely come with a warning. In such situations, what matters most is immediate medical attention. Understanding when and how to seek emergency care can save lives.",
    description: "Essential guide to understanding emergency department functions, when to seek help, and what to expect in critical care.",
    authorName: "Dr. Arjun Nair",
    publishDate: "Feb 12, 2026",
    fullContent: `Medical emergencies rarely come with a warning. One moment everything feels normal, and the next, there is panic – a sudden chest pain, a road accident, difficulty breathing, high fever with seizures, or an unconscious loved one. In such situations, what matters most is immediate medical attention. This is where the Department of Emergency and Critical Care plays a lifesaving role.

The Emergency Department is often described as the "front door" of the hospital. It operates 24 hours a day, 7 days a week, ready to respond to urgent and life-threatening conditions. Whether it is a child with severe dehydration, an elderly patient with stroke symptoms, or a trauma victim from a road accident, the emergency team is trained to act quickly and efficiently.

In an emergency, time is critical. The first few minutes – sometimes called the "golden minutes" – can determine outcomes. For example, in a heart attack or stroke, early treatment can prevent permanent damage and significantly improve survival chances. Quick assessment, rapid diagnosis, and prompt treatment are the foundations of emergency care.

When a patient arrives at the emergency department, the first step is triage. Triage is a system used to prioritize patients based on the severity of their condition. Those with life-threatening problems are attended to immediately, while less critical cases may wait briefly. This ensures that the sickest patients receive urgent care without delay.

Common emergencies treated in this department include chest pain, breathing difficulty, severe infections, high fever in infants, uncontrolled bleeding, fractures, poisoning, burns, seizures, severe allergic reactions, and sudden unconsciousness. Emergency physicians are trained to handle a wide range of medical and surgical crises. They work closely with specialists such as cardiologists, neurologists, surgeons, and intensivists when advanced care is required.

Critical Care, often provided in the Intensive Care Unit (ICU), is the next level of support for patients who are severely ill or unstable. Not all emergency patients require ICU admission, but those with serious conditions such as severe infections (sepsis), major trauma, respiratory failure, organ failure, or post-major surgery complications may need close monitoring in a critical care setting.

In the ICU, patients are monitored continuously. Advanced equipment tracks heart rate, blood pressure, oxygen levels, breathing patterns, and other vital signs. Some patients may require ventilators to support breathing, medications to maintain blood pressure, or dialysis if kidney function is affected. The goal of critical care is to stabilize the patient, support failing organs, and provide intensive treatment until recovery begins.

Family members often feel overwhelmed when a loved one is admitted to the ICU. The environment, with its machines and alarms, can be intimidating. It is important to understand that these monitors are there to ensure safety and immediate response to any change in condition. Critical care teams consist of specially trained doctors, nurses, and technicians who work round the clock to provide expert care.

Prevention and awareness also play an important role in reducing emergency situations. Recognizing warning signs early can prevent complications. For instance, sudden weakness on one side of the body, slurred speech, and facial drooping may indicate a stroke and require immediate medical attention. Persistent chest pain or pressure should never be ignored. Severe abdominal pain, high fever with rash in children, or sudden confusion in elderly individuals are also signs that urgent care may be needed.

It is equally important not to delay seeking help due to fear or hesitation. Some people try home remedies or wait for symptoms to improve, losing valuable time. In emergencies, early hospital arrival can make the difference between full recovery and long-term complications.

Emergency departments are also prepared for mass casualty incidents and disaster situations. Coordination, teamwork, and well-established protocols ensure organized and efficient response even during high-pressure situations.

While emergency and critical care focus on urgent treatment, communication and compassion remain central to patient care. Medical teams understand that families are anxious and distressed. Clear explanations, timely updates, and emotional support are essential parts of the healing process.

Modern emergency medicine combines speed with precision. Rapid diagnostic tools such as blood tests, ECG, imaging scans, and bedside ultrasound help doctors make quick and accurate decisions. Early intervention often reduces the need for prolonged hospitalization.

Ultimately, the Department of Emergency and Critical Care exists to protect life during its most vulnerable moments. Whether it is stabilizing a patient after an accident, managing a sudden medical crisis, or providing intensive monitoring for a critically ill individual, the goal remains the same – to act swiftly, effectively, and compassionately.

Emergencies are unpredictable, but preparedness saves lives. Knowing when to seek help and trusting trained professionals during critical moments ensures the best possible outcome for you and your loved ones.`
  }
];

/* ================= MOST READ ================= */

const mostReadData = [
  {
    id: 6,
    category: "Neurology and Neurosurgery",
    featuredImage: neurologyImg,
    articleTitle: "Understanding Brain and Nerve Health: When to Seek Expert Care",
    preview: "Our brain and nervous system control everything we do. A sudden severe headache, weakness in one arm, or persistent back pain can be alarming. Understanding when expert care is needed can make a life-changing difference.",
    description: "Comprehensive guide to understanding neurological conditions, warning signs, and when to consult a specialist.",
    authorName: "Dr. Vikram Seth",
    publishDate: "Feb 18, 2026",
    fullContent: `Our brain and nervous system control everything we do – from thinking, speaking, and walking to breathing and feeling emotions. Yet, we often take this complex system for granted until something goes wrong. A sudden severe headache, weakness in one arm, persistent back pain, or frequent episodes of dizziness can be alarming. Understanding the role of Neurology and Neurosurgery can help you recognize when expert care is needed and how early treatment can make a life-changing difference.

Neurology is the branch of medicine that deals with disorders of the brain, spinal cord, and nerves. A neurologist treats conditions using medications and non-surgical approaches. Neurosurgery, on the other hand, involves surgical treatment of problems affecting the brain, spine, and nervous system. While the two specialties are closely related, not all neurological conditions require surgery.

Common neurological conditions include stroke, epilepsy (seizure disorders), migraine, Parkinson's disease, multiple sclerosis, neuropathy, memory disorders, and chronic headaches. Spine-related issues such as slipped discs and nerve compression also fall under this field. Neurosurgeons handle cases like brain tumors, spinal cord injuries, severe head injuries, certain types of stroke, and complex spine surgeries.

One of the most serious neurological emergencies is a stroke. A stroke occurs when blood supply to a part of the brain is interrupted, either due to a clot or bleeding. Warning signs include sudden weakness or numbness on one side of the body, slurred speech, confusion, difficulty seeing, severe headache, or loss of balance. Stroke is a medical emergency. Immediate treatment within the first few hours can prevent permanent brain damage and disability.

Head injuries are another major concern, especially due to road traffic accidents. Even a fall at home can cause serious brain injury, particularly in elderly individuals. Symptoms such as persistent vomiting, drowsiness, seizures, or loss of consciousness after a head injury require urgent medical evaluation.

Not all neurological problems are sudden. Some develop gradually. For example, recurring headaches may simply be migraines, but severe or unusual headaches should not be ignored. Similarly, frequent seizures, memory loss, tremors, or changes in behavior need medical attention. Early diagnosis can prevent complications and improve quality of life.

Spine problems are increasingly common due to sedentary lifestyles, long hours of sitting, and improper posture. Lower back pain radiating to the legs, neck pain spreading to the arms, tingling sensations, or weakness may indicate nerve compression or disc problems. Many of these conditions can be treated with medications, physiotherapy, and lifestyle changes. Surgery is recommended only when conservative treatment fails or if there is significant nerve damage.

Modern neurology relies on advanced diagnostic tools such as MRI scans, CT scans, EEG (to study brain electrical activity), nerve conduction studies, and specialized blood tests. These investigations help identify the exact cause of symptoms and guide appropriate treatment.

In neurosurgery, technological advancements have made procedures safer and more precise. Minimally invasive spine surgeries, microscopic brain surgeries, and image-guided techniques allow faster recovery and reduced hospital stay. However, surgery is always considered carefully, weighing benefits and risks.

Preventive care plays a key role in brain health. Controlling blood pressure, diabetes, and cholesterol reduces the risk of stroke. Wearing helmets while riding two-wheelers and using seat belts in cars prevent head injuries. Maintaining a healthy lifestyle with regular exercise, balanced diet, adequate sleep, and stress management supports overall neurological well-being.

Mental health is also closely connected to brain health. Anxiety, depression, and chronic stress can affect concentration, memory, and overall functioning. Seeking help early and discussing symptoms openly with a healthcare provider is important.

Family members often feel anxious when a loved one is diagnosed with a neurological condition. Clear communication with doctors helps in understanding the condition, treatment plan, and recovery expectations. Rehabilitation therapies such as physiotherapy, speech therapy, and occupational therapy are often part of neurological recovery and significantly improve outcomes.

The brain is delicate but remarkably resilient. With timely medical intervention and proper care, many neurological conditions can be managed effectively. Advances in medicine continue to improve survival rates and quality of life for patients with complex neurological disorders.

Listening to your body is essential. Sudden symptoms should never be ignored, and persistent discomfort deserves evaluation. Early diagnosis not only improves treatment success but also prevents long-term disability.

Neurology and Neurosurgery work together to protect and restore one of the body's most vital systems. Whether managing migraines, treating seizures, addressing spine problems, or performing life-saving brain surgery, the goal remains the same – preserving function, relieving suffering, and improving quality of life.`
  },
  {
    id: 1,
    category: "Anaesthesia and Pain Medicine",
    featuredImage: anaesthesiaImg, 
    articleTitle: "Safe Surgery and Comfortable Recovery – Understanding Anaesthesia and Pain Care",
    preview: "For many patients, the thought of surgery brings one major fear – 'Will I be awake?' or 'Will it hurt?' Understanding how anaesthesia works and how modern pain medicine ensures your comfort can help reduce that fear.",
    description: "Understanding anaesthesia and pain management for safe surgery and comfortable recovery.",
    authorName: "Dr. Meenu Walia",
    publishDate: "Mar 03, 2026",
    fullContent: `For many patients, the thought of surgery brings one major fear "Will I be awake?" or "Will it hurt?" It is completely natural to feel anxious about anaesthesia. In fact, many people worry more about anaesthesia than the surgery itself. Understanding how anaesthesia works and how modern pain medicine ensures your comfort can help reduce that fear and build confidence before any procedure.

Anaesthesia is a specialized branch of medicine focused on relieving pain and ensuring patient safety during surgical or medical procedures. An anaesthesiologist is a trained doctor who carefully monitors you before, during, and after surgery. Their role is not limited to "putting you to sleep." They are responsible for managing your breathing, heart rate, blood pressure, oxygen levels, and overall stability throughout the procedure.

There are different types of anaesthesia, and the choice depends on the type of surgery, your health condition, and your doctor's recommendation.

The first type is general anaesthesia. This is used for major surgeries. Under general anaesthesia, you are completely unconscious and do not feel pain during the procedure. Medications are given through an injection or through a mask to make you sleep. Throughout the surgery, the anaesthesiologist continuously monitors your vital signs to ensure everything remains stable.

The second type is regional anaesthesia, such as spinal or epidural anaesthesia. This is commonly used for procedures involving the lower half of the body, such as caesarean sections, orthopaedic surgeries, or certain abdominal operations. In this method, medication is injected near the spinal nerves to numb a specific part of the body. You may remain awake, but you will not feel pain in the surgical area.

The third type is local anaesthesia, which is used for minor procedures like stitching a wound or removing a small lump. Only a small area is numbed, and you remain fully awake.

Many patients worry about safety. It is important to know that modern anaesthesia is extremely safe. Before surgery, you will undergo a pre-anaesthesia check-up. During this consultation, the anaesthesiologist reviews your medical history, allergies, previous surgeries, ongoing medications, and existing conditions like diabetes, hypertension, asthma, or heart disease. This assessment helps plan the safest anaesthesia approach tailored specifically for you.

You may be advised to avoid eating or drinking for several hours before surgery. This is to prevent complications such as vomiting while under anaesthesia. Following these instructions carefully is very important for your safety.

After surgery, some patients may experience mild side effects such as nausea, sore throat, dizziness, or temporary confusion. These are usually short-lived and manageable. Serious complications are rare, especially when the procedure is conducted in a properly equipped hospital under expert supervision.

Apart from surgical anaesthesia, pain medicine is another vital part of this department.

Pain is not something that should simply be tolerated. Whether it is post-surgical pain, back pain, joint pain, nerve pain, or cancer-related pain, effective management improves quality of life significantly. Chronic pain can affect sleep, mood, appetite, and daily functioning. Addressing it properly allows patients to return to their normal routines faster.

Modern pain medicine offers various treatment options. These include medications, nerve blocks, physiotherapy guidance, epidural injections, and minimally invasive procedures. The goal is not just to mask pain temporarily but to identify its cause and treat it appropriately.

For example, patients suffering from chronic lower back pain due to slipped discs or arthritis may benefit from targeted injections that reduce inflammation around the affected nerves. Similarly, nerve blocks can help patients with severe nerve pain by interrupting pain signals.

Post-operative pain management is equally important. Today, hospitals use multimodal pain relief techniques. This means combining different types of medications and methods to control pain effectively while minimizing side effects. Good pain control helps patients move earlier, breathe better, and recover faster after surgery.

In recent years, patient comfort and safety have become the central focus of anaesthesia and pain care. Continuous monitoring systems, advanced medications, and trained specialists ensure high standards of care.

Communication is key. If you are scheduled for surgery, do not hesitate to ask questions. Inform your anaesthesiologist about any fears, previous reactions to anaesthesia, or medical conditions. Being open helps the medical team provide safer and more personalized care.

It is also important not to ignore persistent pain. Many people continue suffering silently, assuming pain is a normal part of ageing or consulting a doctor. Seeking consultation early can prevent pain from becoming chronic and difficult to treat.

Anaesthesia and pain medicine work quietly behind the scenes, but their role is crucial in modern healthcare. They make surgeries possible, reduce suffering, and ensure comfort during some of life's most challenging medical moments.

With proper evaluation, expert care, and open communication, patients can approach surgery and pain treatment with confidence rather than fear.`
  }
  
];


/* ================= COMPONENT ================= */

export default function BlogList() {
  const navigate = useNavigate();

  const [recentPage, setRecentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [mostPage, setMostPage] = useState(1);
  const [isHovering, setIsHovering] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const RECENT_PER_PAGE = 4;
  const intervalRef = useRef(null);

  /* categories */
  const categories = useMemo(() => {
    const cats = recentArticlesData.map((a) => a.category);
    return ["All", ...new Set(cats)];
  }, []);

  /* filter */
  const filteredArticles = useMemo(() => {
    return recentArticlesData.filter((item) => {
      const matchesSearch =
        item.articleTitle.toLowerCase().includes(search.toLowerCase()) ||
        item.description.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        category === "All" || item.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  /* SAFE pagination */
  const totalRecentPages = Math.max(
    1,
    Math.ceil(filteredArticles.length / RECENT_PER_PAGE)
  );

  useEffect(() => {
    if (recentPage > totalRecentPages) {
      setRecentPage(totalRecentPages);
    }
  }, [totalRecentPages, recentPage]);

  const recentStart = (recentPage - 1) * RECENT_PER_PAGE;
  const recentItems = filteredArticles.slice(
    recentStart,
    recentStart + RECENT_PER_PAGE
  );

  /* MOST READ AUTO */
  useEffect(() => {
    if (isHovering) return;

    intervalRef.current = setInterval(() => {
      setMostPage((prev) =>
        prev === mostReadData.length ? 1 : prev + 1
      );
    }, 4000);

    return () => clearInterval(intervalRef.current);
  }, [isHovering]);

  const goPrevMost = () =>
    setMostPage((p) => (p === 1 ? mostReadData.length : p - 1));

  const goNextMost = () =>
    setMostPage((p) => (p === mostReadData.length ? 1 : p + 1));

  const mostItem = mostReadData[mostPage - 1];

  const handleReadMore = (article) => {
    setSelectedArticle(article);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedArticle(null);
  };

  /* ================= UI ================= */

  return (
    <>
      <Helmet>
        <title>Health Blogs & Articles | Hospital</title>
        <meta
          name="description"
          content="Read expert health blogs, medical tips and latest updates."
        />
      </Helmet>

      <Header />

      {/* Modal */}
      <BlogModal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        article={selectedArticle} 
      />

      <main className="bg-[#fff8f0] min-h-screen">
        {/* HERO */}
        <section className="relative w-full">
          <div className="relative h-[240px] sm:h-[300px] lg:h-[360px] w-full overflow-hidden">
            <img
              src={blogHero}
              alt="Health Blogs"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20" />
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 pt-[70px]">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                Health Blogs & Articles
              </h1>
              <p className="text-white/90 mt-3 max-w-2xl text-sm sm:text-base font-semibold">
                Stay informed with expert medical insights.
              </p>
            </div>
          </div>
        </section>

        {/* CONTENT */}
        <section className="py-10 sm:py-12 px-4 sm:px-6">
          <div className="max-w-[1200px] mx-auto">

            {/* CONTROLS */}
            <div className="flex flex-col md:flex-row gap-4 justify-between mb-10">
              <input
                aria-label="Search articles"
                type="text"
                placeholder="Search articles..."
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setRecentPage(1);
                }}
                className="w-full md:w-[350px] px-4 py-3 border border-gray-200 rounded-xl bg-white shadow-sm"
              />

              <select
                aria-label="Filter by category"
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                  setRecentPage(1);
                }}
                className="w-full md:w-[220px] px-4 py-3 border border-gray-200 rounded-xl bg-white shadow-sm"
              >
                {categories.map((cat) => (
                  <option key={cat}>{cat}</option>
                ))}
              </select>
            </div>

            {/* RECENT */}
            <section className="mb-20">
              <h2 className="text-center text-2xl sm:text-3xl font-bold text-emerald-800 mb-8">
                Recent Articles
              </h2>

              <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
                {recentItems.map((item) => (
                  <article
                    key={item.id}
                    className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition p-5 flex flex-col"
                  >
                    <img
                      src={item.featuredImage}
                      alt={item.articleTitle}
                      loading="lazy"
                      className="w-full h-[190px] sm:h-[210px] object-cover rounded-lg mb-4"
                    />

                    <div className="text-xs text-[#005c52] font-bold uppercase mb-1">
                      {item.category}
                    </div>

                    <h3 className="text-lg font-bold mb-2 text-gray-800">
                      {item.articleTitle}
                    </h3>

                    <p className="text-sm text-gray-600 mb-4 flex-grow">
                      {item.preview}
                    </p>

                    <div className="text-xs text-gray-500 font-medium mb-4">
                      {item.authorName} | {item.publishDate}
                    </div>

                    <button
                      onClick={() => handleReadMore(item)}
                      className="mt-auto w-full py-2 px-4 bg-[#005c52] text-white rounded-lg hover:bg-[#004d44] transition-colors font-medium text-sm"
                    >
                      Read More
                    </button>
                  </article>
                ))}
              </div>

              {/* PAGINATION */}
              <div className="flex justify-center mt-10 gap-4 items-center">
                <button
                  onClick={() =>
                    setRecentPage((p) => Math.max(p - 1, 1))
                  }
                  disabled={recentPage === 1}
                  className="px-4 py-2 rounded-full border border-gray-300 bg-white hover:bg-gray-100 disabled:opacity-40"
                >
                  Prev
                </button>

                <span className="font-semibold text-sm sm:text-base">
                  Page {recentPage} / {totalRecentPages}
                </span>

                <button
                  onClick={() =>
                    setRecentPage((p) =>
                      Math.min(p + 1, totalRecentPages)
                    )
                  }
                  disabled={recentPage >= totalRecentPages}
                  className="px-4 py-2 rounded-full border border-gray-300 bg-white hover:bg-gray-100 disabled:opacity-40"
                >
                  Next
                </button>
              </div>
            </section>

            {/* MOST READ */}
            <section className="mb-10">
              <h2 className="text-center text-2xl sm:text-3xl font-bold text-emerald-800 mb-8">
                Most Read Blogs
              </h2>

              {mostItem && (
                <div
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                  className="relative bg-white rounded-2xl shadow-lg p-6 flex flex-col md:flex-row gap-6 items-center"
                >
                  {/* LEFT ARROW */}
                  <button
                    aria-label="Previous"
                    onClick={goPrevMost}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md hover:shadow-lg flex items-center justify-center"
                  >
                    ‹
                  </button>

                  <div className="flex flex-col md:flex-row gap-6 items-center cursor-pointer w-full">
                    <img
                      src={mostItem.featuredImage}
                      alt={mostItem.articleTitle}
                      className="w-full md:w-[320px] h-[220px] object-cover rounded-xl"
                    />

                    <div className="flex-1 text-center md:text-left">
                      <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-800">
                        {mostItem.articleTitle}
                      </h3>

                      <p className="text-gray-600 mb-4">
                        {mostItem.preview}
                      </p>

                      <div className="text-gray-500 font-semibold text-sm mb-4">
                        {mostItem.authorName}
                        <br />
                        {mostItem.publishDate}
                      </div>

                      <button
                        onClick={() => handleReadMore(mostItem)}
                        className="px-6 py-2 bg-[#005c52] text-white rounded-lg hover:bg-[#004d44] transition-colors font-medium"
                      >
                        Read Full Article
                      </button>
                    </div>
                  </div>

                  {/* RIGHT ARROW */}
                  <button
                    aria-label="Next"
                    onClick={goNextMost}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md hover:shadow-lg flex items-center justify-center"
                  >
                    ›
                  </button>
                </div>
              )}
            </section>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}