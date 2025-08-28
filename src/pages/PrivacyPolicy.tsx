import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { privacyTopics } from '../data/privacyPolicyData';

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />

      <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">Privacy Policy</h1>
          <p className="text-lg text-gray-600">
            This blog is a personal side project. Please read the following carefully.
          </p>
        </div>

        {/* Privacy Topics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-8 mb-16 max-w-5xl mx-auto">
          {privacyTopics.map((topic, index) => (
            <Card
              key={index}
              className="text-center border-blue-500/20 hover:shadow-xl transition-shadow duration-300"
            >
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  {topic.icon}
                </div>
                <CardTitle className="text-lg font-semibold text-black">{topic.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">{topic.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default PrivacyPolicy;