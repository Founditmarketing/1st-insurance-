import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ARTICLES } from '../constants';
import Section from '../components/ui/Section';
import TextReveal from '../components/ui/TextReveal';
import { motion } from 'framer-motion';
import { Clock, Tag, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import SEO from '../components/SEO';

const BlogPost: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const article = ARTICLES.find(a => a.slug === slug);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!article) {
        return <Navigate to="/resources" replace />;
    }

    return (
        <div className="pt-20">
            <SEO
                title={article.title}
                description={article.excerpt}
                canonical={`/resources/${article.slug}`}
            />

            {/* Hero Section */}
            <Section className="bg-brand-navy relative overflow-hidden text-white min-h-[60vh] flex items-center pt-32 pb-20">
                <div className="absolute inset-0 opacity-40">
                    <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/60 to-transparent"></div>

                <div className="relative z-10 max-w-4xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-4 mb-6"
                    >
                        <Link
                            to="/resources"
                            className="bg-white/10 hover:bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 transition-all"
                        >
                            <ArrowLeft size={16} /> Back to Resources
                        </Link>
                        <div className="bg-brand-gold/90 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-brand-navy flex items-center gap-1">
                            <Tag size={12} />
                            {article.category}
                        </div>
                    </motion.div>

                    <TextReveal className="text-4xl md:text-7xl font-heading font-extrabold leading-tight mb-8">
                        {article.title}
                    </TextReveal>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="flex flex-wrap items-center gap-6 text-slate-300"
                    >
                        <div className="flex items-center gap-2">
                            <Clock size={18} className="text-brand-gold" />
                            <span>{article.date}</span>
                        </div>
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-gold/50 hidden md:block"></span>
                        <div className="flex items-center gap-2">
                            <span className="font-medium text-white">{article.readTime}</span>
                        </div>
                    </motion.div>
                </div>
            </Section>

            {/* Content Section */}
            <Section className="bg-white pb-32">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
                    {/* Main Content */}
                    <article className="lg:col-span-8">
                        <div className="prose prose-slate max-w-none">
                            <div className="text-slate-600 leading-relaxed space-y-6 text-base md:text-lg">
                                {article.content.split('\n\n').map((block, i) => {
                                    const lines = block.split('\n').filter(line => line.trim() !== '');

                                    return (
                                        <div key={i} className="space-y-4">
                                            {lines.map((line, li) => {
                                                // Handle Heading
                                                if (line.startsWith('### ')) {
                                                    return (
                                                        <h2 key={li} className="text-2xl md:text-3xl font-heading font-bold text-brand-navy mt-12 mb-6">
                                                            {line.replace('### ', '').trim()}
                                                        </h2>
                                                    );
                                                }

                                                // Handle Blockquote/Italic
                                                if (line.startsWith('*') && line.endsWith('*')) {
                                                    return (
                                                        <p key={li} className="italic text-slate-500 text-sm md:text-base border-l-4 border-brand-gold pl-6 py-2 bg-slate-50 rounded-r-xl">
                                                            {line.replace(/\*/g, '').trim()}
                                                        </p>
                                                    );
                                                }

                                                // Handle List Item
                                                if (line.startsWith('- ')) {
                                                    return (
                                                        <div key={li} className="flex items-start gap-3 my-4">
                                                            <span className="mt-2 w-2 h-2 rounded-full bg-brand-gold flex-shrink-0" />
                                                            <span dangerouslySetInnerHTML={{
                                                                __html: line.replace('- ', '').replace(/\*\*(.*?)\*\*/g, '<strong class="text-brand-navy font-bold">$1</strong>')
                                                            }} />
                                                        </div>
                                                    );
                                                }

                                                // Default Paragraph
                                                return (
                                                    <p
                                                        key={li}
                                                        className="mb-4"
                                                        dangerouslySetInnerHTML={{
                                                            __html: line
                                                                .replace(/\*\*(.*?)\*\*/g, '<strong class="text-brand-navy font-bold">$1</strong>')
                                                                .replace(/“|”/g, '"')
                                                                .replace(/’/g, "'")
                                                        }}
                                                    />
                                                );
                                            })}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* CTA Section */}
                        <div className="mt-20 pt-10 border-t border-slate-100 flex justify-center">
                            <Link
                                to="/contact"
                                className="bg-brand-gold text-brand-navy font-bold px-10 py-5 rounded-full hover:shadow-xl hover:-translate-y-1 transition-all shadow-lg"
                            >
                                Get a Custom Quote
                            </Link>
                        </div>
                    </article>

                    {/* Sidebar */}
                    <aside className="lg:col-span-4 space-y-12">
                        {/* CTA Card */}
                        <div className="bg-brand-navy rounded-3xl p-8 text-white relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/10 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-700"></div>
                            <h3 className="text-2xl font-heading font-bold mb-4 relative z-10">Need Expert Advice?</h3>
                            <p className="text-slate-300 mb-8 relative z-10">
                                Our local agents are ready to help you find the perfect coverage for your needs.
                            </p>
                            <Link
                                to="/contact"
                                className="w-full bg-white text-brand-navy font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-brand-gold transition-colors relative z-10"
                            >
                                Talk to an Agent
                            </Link>
                        </div>

                        {/* Related Posts */}
                        <div>
                            <h3 className="text-xl font-heading font-bold text-brand-navy mb-6">Recent Articles</h3>
                            <div className="space-y-6">
                                {ARTICLES.filter(a => a.id !== article.id).slice(0, 3).map(related => (
                                    <Link
                                        key={related.id}
                                        to={`/resources/${related.slug}`}
                                        className="group flex gap-4"
                                    >
                                        <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                                            <img src={related.image} alt={related.title} className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-brand-navy group-hover:text-brand-gold transition-colors line-clamp-2 mb-1">
                                                {related.title}
                                            </h4>
                                            <span className="text-xs text-slate-400">{related.date}</span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </aside>
                </div>
            </Section>
        </div>
    );
};

export default BlogPost;
