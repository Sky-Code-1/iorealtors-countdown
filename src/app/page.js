"use client"

import React, { useState, useEffect } from 'react';
import { Building, Calendar, Clock, Sparkles, X, User, Mail, Users } from 'lucide-react';

const RealEstateCountdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  useEffect(() => {
    // Set target date to 30 days from now
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 30);
    
    const updateCountdown = () => {
      const now = new Date().getTime();
      const target = targetDate.getTime();
      const difference = target - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num) => num.toString().padStart(2, '0');

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setShowForm(false);
      setIsSubmitted(false);
      setFormData({ name: '', email: '', role: '' });
    }, 2000);
  };

  const openForm = () => {
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
    setFormData({ name: '', email: '', role: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 left-40 w-60 h-60 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Header */}
        <div className="mb-12 space-y-6">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-6 shadow-2xl">
            <Building className="w-10 h-10 text-white" />
          </div>
          
          <h1 className=" text:2xl sm:text-6xl md:text-8xl font-bold text-white mb-2 tracking-tight">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              IOREALTORS
            </span>
          </h1>
          
          <p className="text-2xl md:text-3xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-4">
            Coming Soon
          </p>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Revolutionary Real Estate Platform
          </p>
          
          <div className="flex items-center justify-center space-x-2 text-slate-400">
            <Sparkles className="w-5 h-5" />
            <span className="text-lg">Launching in</span>
            <Sparkles className="w-5 h-5" />
          </div>
        </div>

        {/* Countdown */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {[
            { value: timeLeft.days, label: 'Days', icon: Calendar },
            { value: timeLeft.hours, label: 'Hours', icon: Clock },
            { value: timeLeft.minutes, label: 'Minutes', icon: Clock },
            { value: timeLeft.seconds, label: 'Seconds', icon: Clock }
          ].map((item, index) => (
            <div key={index} className="group">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-purple-500/25">
                <div className="flex flex-col items-center space-y-4">
                  <item.icon className="w-8 h-8 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
                  <div className="text-4xl md:text-5xl font-bold text-white font-mono tracking-wider">
                    {formatNumber(item.value)}
                  </div>
                  <div className="text-slate-300 text-lg font-medium uppercase tracking-widest">
                    {item.label}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Features preview */}
        <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 mb-12 border border-white/10 shadow-2xl">
          <h3 className="text-2xl font-bold text-white mb-6">What's Coming</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-slate-300 mb-8">
            <div className="space-y-2">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white">AI-Powered Search</h4>
              <p className="text-sm">Smart property recommendations tailored to your preferences using advanced AI</p>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Building className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white">Location-Based Search</h4>
              <p className="text-sm">Find rentals and properties for sale by owner in your exact location with smart filtering</p>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white">Virtual Tours</h4>
              <p className="text-sm">Immersive 3D property tours from anywhere in the world</p>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-red-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white">Market Analytics</h4>
              <p className="text-sm">Real-time market insights and investment opportunities</p>
            </div>
          </div>
          
          {/* Communication Features */}
          <div className="border-t border-white/10 pt-8">
            <h4 className="text-xl font-bold text-white mb-6">Direct Communication</h4>
            <div className="grid md:grid-cols-2 gap-6 text-slate-300">
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                    <Building className="w-5 h-5 text-white" />
                  </div>
                  <h5 className="text-lg font-semibold text-white">Connect with Landlords</h5>
                </div>
                <p className="text-sm">Browse landlord listings and communicate directly with property owners for rentals and inquiries</p>
              </div>
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-yellow-600 rounded-lg flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-white" />
                  </div>
                  <h5 className="text-lg font-semibold text-white">Connect with Agents</h5>
                </div>
                <p className="text-sm">Access agent listings and get professional assistance for buying, selling, or renting properties</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="space-y-6">
          <p className="text-slate-400 text-lg">
            Be the first to experience the future of real estate
          </p>
          <button 
            onClick={openForm}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-2xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 group"
          >
            <span>Get Notified</span>
            <Sparkles className="ml-2 w-5 h-5 group-hover:animate-spin" />
          </button>
        </div>
      </div>

      {/* Notification Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 max-w-md w-full border border-white/20 shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-white">Get Early Access</h3>
              <button 
                onClick={closeForm}
                className="text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-slate-300 text-sm font-medium mb-2">
                    <User className="w-4 h-4 inline mr-2" />
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 text-sm font-medium mb-2">
                    <Mail className="w-4 h-4 inline mr-2" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 text-sm font-medium mb-2">
                    <Users className="w-4 h-4 inline mr-2" />
                    Your Role Interest
                  </label>
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  >
                    <option value="" className="bg-slate-800 text-slate-300">Select your primary interest</option>
                    <option value="tenant" className="bg-slate-800 text-white">Property Explorer - Looking for rentals</option>
                    <option value="buyer" className="bg-slate-800 text-white">Buyer - Looking to purchase</option>
                    <option value="landlord" className="bg-slate-800 text-white">Landlord - Property owner</option>
                    <option value="agent" className="bg-slate-800 text-white">Real Estate Agent</option>
                    <option value="investor" className="bg-slate-800 text-white">Property Investor</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105"
                >
                  Notify Me When Live!
                </button>
              </form>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">You're All Set!</h4>
                <p className="text-slate-300">We'll notify you as soon as IOREALTORS launches.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default RealEstateCountdown;