import dot from '../assets/dot.png';

const Blogs = () => {
  return (
    <section className="py-16 px-6 bg-white dark:bg-black">
      
      {/* Top section */}
      <div className="container mx-auto text-center">
        <div className="inline-block bg-gray-400 dark:bg-black border border-purple-950 rounded-full px-6 py-2 mb-8">
          <span className="flex items-center gap-2 text-black dark:text-white text-sm font-medium">
            <img src={dot} className="w-5 h-5" />
            Blogs
          </span>
        </div>

        {/*grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="aspect-video bg-gray-900 rounded-lg border border-gray-800 hover:border-blue-500/50 transition-colors"
            >
              <div className="w-full h-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
