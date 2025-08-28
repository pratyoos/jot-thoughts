import {Phone, Mail } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { helpTopics } from '../data/helpCentreData';

const HelpCenter = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-black mb-6">
            Help <span className="text-blue-500">Center</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to your questions or contact our Customer Care for assistance.
          </p>
        </div>
      </section>

      {/* Help Topics Section */}
      <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8">
            {helpTopics.map((topic, index) => (
              <Card
                key={index}
                className="text-center border-blue-500/20 hover:shadow-xl transition-shadow duration-300"
                aria-labelledby={`help-topic-title-${index}`}
              >
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    {topic.icon}
                  </div>
                  <CardTitle
                    id={`help-topic-title-${index}`}
                    className="text-lg sm:text-xl font-semibold text-black"
                  >
                    {topic.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-sm sm:text-base">
                    {topic.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Customer Care Section */}
          <div className="mt-16 text-center bg-white p-8 rounded-xl shadow-md max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-black mb-4">Contact Customer Care</h2>
            <p className="text-gray-600 mb-6">
              Our support team is here to help you with any question or issue you have. Reach out to us through any of the channels below.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-6 text-gray-800">
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-blue-500" />
                <a href="tel:+9779863481055" className="text-blue-500 hover:underline">
                  +977 9863481055
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-blue-500" />
                <a href="mailto:pratyoospanta@gmail.com" className="text-blue-500 hover:underline">
                  pratyoospanta@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HelpCenter;