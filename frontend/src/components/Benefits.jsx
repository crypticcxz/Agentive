import React from 'react';

const Benefits = () => {
  const benefits = [
    {
      number: '01',
      title: 'CRYPTO FOUNDERS',
      description: 'Launch faster with secure, scalable Web3 solutions—from tokenomics to smart contracts.',
    },
    {
      number: '02',
      title: 'AI APP CREATORS',
      description: 'Bring your machine learning and LLM ideas to life with expert-backed development and deployment.',
    },
    {
      number: '03',
      title: 'DIGITAL ENTREPRENEURS',
      description: 'Grow your brand with high-performance websites, custom apps, and full-funnel marketing strategies.',
    },
    {
      number: '04',
      title: 'TECH STARTUPS',
      description: 'Get end-to-end support from MVP to market with cutting-edge tools and agile development.',
    }
  ];

  return (
    <section className="py-20 px-6 bg-white dark:bg-black text-white">
      <div className="flex flex-col items-center justify-center mb-12">
        <div className="flex flex-col md:flex-row items-center justify-center gap-50">
          <h2 className="text-black dark:text-white text-4xl font-bold text-center">
            Who Benefits <br /> from Agentive
          </h2>
          <p className="text-black dark:text-gray-400 italic text-center">
            Smart Tech. Real Results. <br /> Built for Visionaries.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {benefits.map((benefit, index) => (
          <div key={index} className="bg-[#191919] rounded-4xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
            <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
            <div className="flex flex-col md:flex-row items-center justify-between flex-grow">
              <div className="text-transparent bg-clip-text bg-gradient-to-b from-[#4E349A] to-[#9392FD] text-9xl font-bold mb-4 md:mb-0 flex items-center">
                {benefit.number}
              </div>
              <div className="flex-1 md:pl-4">
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;
