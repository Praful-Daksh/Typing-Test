const paragraphs = [
  "Artificial intelligence, encompassing machine learning and neural networks, epitomizes the zenith of technological innovation. Its multifaceted applications, ranging from autonomous vehicles to advanced medical diagnostics, elucidate its transformative potential in redefining contemporary paradigms across disparate sectors.",
  "Renewable energy sources like solar and wind power are crucial in mitigating climate change. Investments in green technology are essential for a sustainable future, reducing reliance on fossil fuels and minimizing carbon footprints.",
  "Germany's robust economy is bolstered by its automotive industry. Renowned for engineering excellence, German car manufacturers like BMW and Mercedes-Benz continue to innovate, driving global standards in automotive technology and sustainable transportation solutions.",
  "India, a burgeoning economic powerhouse, grapples with myriad infrastructural challenges amidst its rapid urbanization. The confluence of its demographic dividend and technological advancements predicates a transformative epoch poised to redefine its socioeconomic landscape.",
  "The advent of quantum computing heralds a new era of computational prowess. By leveraging quantum superposition and entanglement, these systems transcend classical limitations, promising revolutionary advancements in cryptographic security and complex system simulations.",
  "Australia is famous for its natural wonders, including the Great Barrier Reef and diverse wildlife. Efforts to conserve these unique ecosystems are vital, as they face threats from climate change and human activities.",
  "China's Belt and Road Initiative seeks to enhance global trade. By investing in infrastructure projects across Asia, Europe, and Africa, China aims to foster economic cooperation, creating new trade routes and boosting regional development.",
  "Cybersecurity threats necessitate robust countermeasures to safeguard digital assets. As cyber adversaries employ increasingly sophisticated tactics, it becomes imperative for organizations to fortify their defense mechanisms through advanced encryption, intrusion detection systems, and comprehensive risk management strategies.",
  "Finland's education system is renowned for its innovation and student-centric approach. With a focus on critical thinking and holistic development, Finnish schools consistently rank among the best globally, offering valuable lessons in educational reform.",
  "Japan blends tradition with cutting-edge technology. From ancient temples to high-tech cities, it offers a unique experience for visitors. The country's commitment to innovation continues to drive advancements in robotics and automation.",
  "Climate change is causing sea levels to rise, endangering coastal communities. Governments worldwide are working on policies to reduce greenhouse gas emissions and invest in renewable energy to combat these environmental challenges.",
  "Hey Everyone, It's Praful who made this. This project is made for People who want to increase their typing speed , It helps a lot to increasing your typing speed. It has Over 15 different paragraphs Low to High Level . For any  suggestions or advice you can contact with me. Just Drop you message at 'prafuldaksh@proton.me' I'll Reach you soon and you can also explore my other prohects on guthub - Praful-Daksh , there is some kind of games , you can freely with your freinds. Goodbye !",
  "The discovery of gravitational waves by LIGO has revolutionized astrophysics. This groundbreaking achievement provides insights into cosmic events such as black hole mergers, enabling scientists to explore the universe's fundamental properties and the fabric of spacetime itself.",
  "Blockchain technology underpins cryptocurrencies like Bitcoin, ensuring secure and transparent transactions. By eliminating intermediaries, blockchain promotes trust and efficiency in various sectors, from finance to supply chain management.",
  "Brazil, known for its Amazon rainforest, faces significant deforestation challenges. Conservation efforts are critical to preserving its biodiversity, which plays a vital role in global ecological balance and climate regulation.",
  "The geopolitical ramifications of emerging technologies necessitate astute policy formulations. Nations must navigate the complexities of digital sovereignty, cybersecurity, and ethical considerations to harness these innovations' benefits while mitigating potential adversities.",
  // Easy paragraphs (60-80 words)
  "Technology is evolving rapidly, changing the way we live and work. Innovations like artificial intelligence and blockchain are transforming industries. Praful recently explored a new AI tool that can predict weather patterns with high accuracy. This tool helps farmers plan their activities better, leading to increased crop yields and reduced losses.",
  
  "Video games have become a major part of modern entertainment. Games like Fortnite and Minecraft attract millions of players worldwide. Praful enjoys playing these games with his friends, as they provide a fun way to relax and improve strategic thinking. The gaming industry continues to grow, with new titles released regularly.",
  
  "Renewable energy sources, such as solar and wind power, are crucial for a sustainable future. Praful is passionate about green technology and recently installed solar panels at his home. This not only reduces his carbon footprint but also saves on electricity bills. More people are adopting renewable energy solutions to combat climate change.",
  
  "Social media platforms like Instagram and TikTok are trending, with millions of users sharing their lives online. Praful uses these platforms to stay connected with friends and discover new trends. These platforms are not just for fun; they also provide opportunities for businesses to reach wider audiences through targeted advertising.",
  
  "The healthcare sector is benefiting from technological advancements. Telemedicine allows patients to consult doctors remotely, improving access to medical care. Praful recently used a telemedicine service to get a prescription refill without visiting the clinic. This convenience is especially valuable during the ongoing pandemic, reducing the risk of exposure.",
  
  "The popularity of esports has skyrocketed in recent years. Competitive gaming tournaments draw large audiences, both online and in-person. Praful follows several esports teams and enjoys watching their matches. The industry offers career opportunities for players, coaches, and commentators, making it a viable profession for gaming enthusiasts.",
  
  "Electric vehicles (EVs) are gaining traction as a sustainable transportation option. Praful is considering purchasing an EV to reduce his carbon footprint and save on fuel costs. With advancements in battery technology, EVs offer longer ranges and faster charging times, making them more practical for everyday use.",
  
  "Artificial intelligence is being integrated into various applications, from virtual assistants to smart home devices. Praful recently set up a smart home system that uses AI to control lighting, temperature, and security. This system learns his preferences over time, providing a personalized and efficient living experience.",
  
  "Online learning platforms have become essential, especially during the pandemic. Praful enrolled in a coding course on one such platform to enhance his skills. These platforms offer a wide range of courses, from basic to advanced levels, enabling learners to acquire new knowledge and improve their career prospects.",
  
  "Augmented reality (AR) is creating immersive experiences in gaming, education, and retail. Praful tried an AR app that overlays digital information on the real world through his smartphone. This technology is being used to enhance learning experiences, provide interactive product demos, and create engaging marketing campaigns.",
  
  // Medium paragraphs (50 words)
  "The rise of 5G technology promises faster internet speeds and improved connectivity. Praful is excited about the potential applications, such as smart cities and autonomous vehicles. This technology will enable seamless communication between devices, leading to innovations in various sectors and enhancing overall quality of life.",
  
  "The gig economy is growing, with more people opting for freelance work. Praful recently started offering his graphic design services online, enjoying the flexibility it offers. This shift in employment patterns is driven by technology, allowing individuals to work remotely and connect with clients globally.",
  
  "Smartwatches are popular for tracking fitness and health metrics. Praful wears his smartwatch daily to monitor his steps, heart rate, and sleep patterns. These devices help users stay motivated and achieve their fitness goals by providing real-time feedback and personalized recommendations based on their activity levels.",
  
  "Virtual reality (VR) is revolutionizing gaming and entertainment. Praful experienced a VR game that transported him to a different world, offering a fully immersive experience. This technology is also being used in education and training, providing realistic simulations for learners and professionals to practice their skills.",
  
  "Sustainable fashion is trending, with consumers demanding eco-friendly products. Praful prefers buying clothes made from organic materials and supports brands that use ethical manufacturing practices. This movement is driving change in the fashion industry, encouraging companies to adopt more sustainable methods and reduce their environmental impact.",
  
  "The latest iPhone model features advanced camera technology and enhanced processing power. Praful upgraded to this new device to take high-quality photos and enjoy faster performance. Smartphones continue to evolve, offering users improved functionality and connectivity, making them indispensable tools for communication and entertainment.",
  
  "The resurgence of vinyl records is notable in the music industry. Praful started collecting vinyl albums, appreciating the superior sound quality and tangible connection to the music. This trend reflects a broader desire for analog experiences in a digital world, blending nostalgia with modern musical appreciation.",
  
  "Streaming services dominate entertainment, offering vast libraries of movies and shows. Praful subscribes to multiple platforms to access exclusive content and avoid traditional cable. This shift has transformed viewing habits, giving users more control over what they watch and when, catering to diverse tastes and preferences.",
  
  "Wearable technology, such as fitness trackers, is enhancing personal health monitoring. Praful uses his fitness tracker to set and achieve workout goals, track sleep patterns, and monitor his heart rate. These devices provide valuable insights into daily activities and overall well-being, encouraging healthier lifestyles.",
  
  "Cryptocurrencies like Bitcoin are revolutionizing finance. Praful invested in Bitcoin, intrigued by its potential for high returns and the underlying blockchain technology. This digital currency offers a decentralized alternative to traditional banking, though it carries significant risks due to market volatility and regulatory challenges.",
  
  // Quotes (40-80 words)
  "The future belongs to those who believe in the beauty of their dreams. Praful often reflects on this quote, finding inspiration to pursue his ambitions in technology. He believes that innovative thinking and perseverance can lead to breakthroughs that shape the future, driving progress and creating opportunities.",
  
  "Technology is best when it brings people together. Praful resonates with this idea, as he uses social media and communication tools to stay connected with friends and family. Technology's true value lies in its ability to bridge distances and foster meaningful relationships, enhancing our lives in profound ways.",
  
  "The only limit to our realization of tomorrow is our doubts of today. Praful finds this quote motivating as he tackles new challenges in his tech career. Overcoming self-doubt and embracing innovation are key to unlocking potential and achieving success in an ever-evolving technological landscape.",
  
  "In the midst of chaos, there is also opportunity. Praful sees this reflected in the tech industry's rapid growth during uncertain times. Adaptability and resilience are essential traits, enabling individuals and businesses to navigate challenges and seize new opportunities, driving progress even in the face of adversity.",
  
  "Success is not final, failure is not fatal: It is the courage to continue that counts. Praful embraces this mindset in his gaming pursuits. Whether he wins or loses, he remains committed to improving his skills and enjoying the journey, embodying the spirit of perseverance and continuous learning.",
  
  "Innovation distinguishes between a leader and a follower. Praful strives to be a leader in his field, continually seeking new ways to apply technology creatively. By staying ahead of trends and embracing change, he aims to make a significant impact and inspire others to think outside the box.",
  
  "The best way to predict the future is to invent it. Praful is driven by this belief, working on projects that push the boundaries of current technology. He understands that proactive innovation and visionary thinking are crucial for shaping the future and addressing the world's complex challenges.",
  
  "Technology is nothing. What's important is that you have a faith in people, that they're basically good and smart, and if you give them tools, they'll do wonderful things with them. Praful values this perspective, recognizing the human element behind technological advancements and the potential for positive impact.",
  
  "The great growling engine of change – technology. Praful finds this analogy fitting as he witnesses the rapid technological advancements transforming society. Embracing change and leveraging new tools are essential for staying relevant and competitive in an increasingly digital world, where technology drives progress and innovation.",
  
  "The real problem is not whether machines think but whether men do. Praful believes in the importance of critical thinking and creativity in the age of automation. While technology can augment human capabilities, it is our unique ability to innovate and solve problems that truly sets us apart.",
  
  // Hard paragraphs (60-80 words)
  "The proliferation of artificial intelligence has engendered unprecedented advancements across diverse sectors, from healthcare to finance. Praful, an ardent advocate of AI, recently developed a machine learning model to predict stock market trends. This model utilizes complex algorithms to analyze vast datasets, providing valuable insights that inform investment strategies and optimize financial decision-making.",
  
  "The advent of blockchain technology heralds a paradigm shift in data security and transaction transparency. Praful is exploring decentralized finance (DeFi) platforms that leverage blockchain to offer innovative financial services. These platforms eliminate intermediaries, reduce costs, and enhance security, representing a significant departure from traditional banking systems and revolutionizing the financial landscape.",
  
  "Quantum computing represents a monumental leap in computational capabilities, leveraging quantum mechanics to solve problems intractable for classical computers. Praful is particularly interested in quantum cryptography, which promises unbreakable encryption methods. The implications for cybersecurity are profound, as quantum-resistant"

];
