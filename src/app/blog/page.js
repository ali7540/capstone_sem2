"use client";

// import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React, { useState } from "react";
import { blogPosts } from "@/lib/sample-data.js";

export default function BlogPage() {
  const pageSize = 3;
  const [currentTab, setCurrentTab] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  const handleTabChange = (value) => {
    setCurrentTab(value);
    setCurrentPage(1);
  };

  const filteredPosts = blogPosts.filter((post) =>
    currentTab === "all" ? true : post.category.toLowerCase() === currentTab
  );
  const totalPages = Math.ceil(filteredPosts.length / pageSize);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-800">
      <main className="flex-1">
        <section className="py-12 md:py-24 lg:py-32 bg-gradient-to-br from-[#F5F3FF] to-[#EDE9FE]">
          <div className="mx-auto max-w-4xl px-4 md:px-6 text-center">
            <h1 className="text-3xl sm:text-5xl font-bold">
              Financial <span className="text-[#9333EA]">Insights</span> Blog
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Expert advice and insights to help you make smarter financial
              decisions.
            </p>
            <div className="mt-8 max-w-sm mx-auto relative">
              <Input
                type="search"
                placeholder="Search articles..."
                className="w-full rounded-full pr-14"
              />
              <Button className="absolute right-1 top-1 h-10 rounded-full px-4 gradient-bg">
                Search
              </Button>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 lg:py-32">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <Tabs defaultValue="all" onValueChange={handleTabChange}>
              <div className="flex justify-center mb-8">
                <TabsList className="justify-center mb-8 space-x-2">
                  {["all", "budgeting", "investing", "saving", "debt"].map(
                    (v) => (
                      <TabsTrigger
                        key={v}
                        value={v}
                        className={
                          currentTab === v
                            ? "gradient-bg text-purple-700"
                            : "border border-purple-200 text-purple-700 hover:bg-purple-50"
                        }
                      >
                        {v === "all" ? "All" : v[0].toUpperCase() + v.slice(1)}
                      </TabsTrigger>
                    )
                  )}
                </TabsList>
              </div>

              <TabsContent value={currentTab} className="mt-0">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {paginatedPosts.map((post) => (
                    <Card
                      key={post.id}
                      className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                    >
                      <img
                        src={post.image}
                        width={400}
                        height={200}
                        alt={post.title}
                        className="w-full h-48 object-cover"
                      />
                      <CardContent className="p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-xs bg-purple-100 text-[#9333EA] px-2 py-1 rounded-full">
                            {post.category}
                          </span>
                          <span className="text-xs text-slate-400">
                            {post.date}
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold mb-2">
                          {post.title}
                        </h3>
                        <p className="text-slate-600 line-clamp-2 mb-4">
                          {post.excerpt}
                        </p>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <img
                              src={post.authorImage}
                              width={30}
                              height={30}
                              alt={post.author}
                              className="rounded-full"
                            />
                            <span className="text-sm text-slate-500">
                              {post.author}
                            </span>
                          </div>
                          <span className="text-sm text-slate-500">
                            {post.readTime}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="flex justify-center items-center space-x-2 mt-10">
                  <Button
                    variant="outline"
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                  >
                    Prev
                  </Button>

                  {[...Array(totalPages)].map((_, i) => {
                    const page = i + 1;
                    return (
                      <Button
                        key={page}
                        size="sm"
                        variant={page === currentPage ? undefined : "outline"}
                        className={
                          page === currentPage ? "gradient-bg text-white" : ""
                        }
                        onClick={() => setCurrentPage(page)}
                      >
                        {page}
                      </Button>
                    );
                  })}

                  <Button
                    variant="outline"
                    disabled={currentPage === totalPages}
                    onClick={() =>
                      setCurrentPage((p) => Math.min(p + 1, totalPages))
                    }
                  >
                    Next
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section className="py-12 md:py-24 lg:py-32 bg-purple-50">
          <div className="mx-auto max-w-4xl px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold">
              Subscribe to our{" "}
              <span className="text-[#9333EA]">Newsletter</span>
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Get the latest financial tips and insights straight to your inbox.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-2">
              <Input
                type="email"
                placeholder="Your email"
                className="flex-1 rounded-full"
              />
              <Button className="gradient-bg text-white rounded-full px-8">
                Subscribe
              </Button>
            </div>
            <p className="mt-2 text-xs text-slate-400">
              We respect your privacy. Unsubscribe anytime.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
