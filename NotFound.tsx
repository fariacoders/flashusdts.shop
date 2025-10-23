const NotFound = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404 - Not Found</h1>
        <p className="text-muted-foreground mb-8">The page you're looking for doesn't exist.</p>
        <a href="/" className="text-primary hover:underline">
          Go back to the homepage
        </a>
      </div>
    </div>
  );
};

export default NotFound;
