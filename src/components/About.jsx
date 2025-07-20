import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-[#0D1117] text-[#E6EDF3] flex flex-col items-center justify-center px-4 py-10">
      <div className="w-full max-w-2xl bg-[#161B22] p-8 rounded-2xl shadow-lg border border-[#2D333B] space-y-6">
        <h1 className="text-3xl font-bold text-[#00ADB5] text-center">About My Password Manager</h1>

        <p className="text-sm md:text-base leading-relaxed text-[#C9D1D9]">
          <strong>My Password Manager</strong> is a secure and minimalistic tool designed to help you store, manage,
          and access your credentials with confidence. Built with privacy and user experience at its core, it ensures
          your sensitive information stays protected behind robust encryption and a sleek, distraction-free interface.
        </p>

        <p className="text-sm md:text-base leading-relaxed text-[#C9D1D9]">
          Whether you're managing accounts for personal use or professional work, My Password Manager offers a dark,
          modern UI and essential features without unnecessary clutter. It’s designed to be fast, intuitive, and
          reliable — so you spend less time resetting passwords and more time doing what matters.
        </p>

        <p className="text-xs text-gray-500 text-center">
          Need a more technical or audience-specific version? We’ve got you covered.
        </p>
      </div>
    </div>
  );
};

export default About;
