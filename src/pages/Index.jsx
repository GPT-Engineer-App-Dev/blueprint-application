import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Welcome to Our Project</h1>
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Getting Started</CardTitle>
          <CardDescription>Here's what you need to know</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            This is a basic component using Shadcn UI components. You can customize it further based on your project needs.
          </p>
          <ul className="list-disc list-inside">
            <li>Edit this component</li>
            <li>Add more pages</li>
            <li>Implement your features</li>
          </ul>
        </CardContent>
        <CardFooter>
          <Button>Get Started</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Index;