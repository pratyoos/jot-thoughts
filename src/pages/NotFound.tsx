import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';

const NotFound = () => {
  return (
    <>
      <Navbar />

      <div className="min-h-screen flex items-center justify-center bg-background px-6 py-12">
        <Card className="w-full max-w-md text-center">
          <CardHeader className="space-y-4">
            <div className="mx-auto w-32 h-32 bg-muted/20 rounded-full flex items-center justify-center">
              <Search className="h-16 w-16 text-muted-foreground" />
            </div>
            <CardTitle className="text-4xl font-bold text-foreground">404 Not Found</CardTitle>
            <CardDescription className="text-xl">
              Oops! The page you're looking for doesn't exist.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-muted-foreground">
              It looks like you've wandered off the beaten path. Don't worry, we'll help you get back on track.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                asChild
                size="lg"
                className="flex items-center gap-2"
              >
                <Link
                  to="/"
                  className="flex items-center gap-2"
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                >
                  <Home className="h-5 w-5 inline-flex" />
                  <span>Go Home</span>
                </Link>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="flex items-center gap-2"
                onClick={() => window.history.back()}
              >
                <ArrowLeft className="h-5 w-5" />
                <span>Go Back</span>
              </Button>
            </div>

            <div className="pt-4 border-t border-gray-300">
              <p className="text-sm text-muted-foreground mb-3">
                Or explore some of our popular content:
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <Button variant="ghost" size="sm" asChild className='hover:text-blue-500'>
                  <Link to="/blog">Blog</Link>
                </Button>
                <Button variant="ghost" size="sm" asChild className='hover:text-blue-500'>
                  <Link to="/about">About</Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </>
  );
};

export default NotFound;