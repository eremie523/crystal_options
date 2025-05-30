import { useActiveMember } from "@/contexts/ActiveMember";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

const MemberDetailsModal = () => {
    const { member, setDetailsIsOpen } = useActiveMember();

    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 z-50 flex items-end sm:items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
            >
                {/* Backdrop */}
                <motion.div
                    className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setDetailsIsOpen(false)}
                />

                {/* Details Panel */}
                <motion.div
                    className="member-details relative bg-white px-6 py-8 rounded-t-3xl sm:rounded-3xl shadow-xl w-full max-w-md z-10"
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "100%" }}
                    transition={{
                        type: "spring",
                        damping: 25,
                        stiffness: 300
                    }}
                    drag="y"
                    dragConstraints={{ top: 0, bottom: 0 }}
                    dragElastic={{ top: 0, bottom: 0.5 }}
                    onDragEnd={(_, info) => {
                        if (info.offset.y > 100 || info.velocity.y > 500) {
                            setDetailsIsOpen(false);
                        }
                    }}
                >
                    {/* Drag handle */}
                    <div className="absolute top-3 left-1/2 transform -translate-x-1/2">
                        <div className="w-10 h-1 bg-gray-300 rounded-full"></div>
                    </div>

                    {/* Close button */}
                    <button
                        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                        onClick={() => setDetailsIsOpen(false)}
                    >
                        <X size={20} />
                    </button>

                    {member ? (
                        <div className="flex flex-col items-center">
                            <motion.div
                                className="w-32 h-32 mb-4 rounded-full overflow-hidden border-4 border-white shadow-lg"
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.1 }}
                            >
                                <img
                                    src={member.photo}
                                    alt={member.name}
                                    className="w-full h-full object-cover flex items-center justify-center"
                                />
                            </motion.div>

                            <motion.div
                                className="text-center mb-6"
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                            >
                                <h1 className="font-bold text-2xl text-gray-800">{member.name}</h1>
                                <p className="font-medium text-gray-600">{member.jobTitle}</p>
                                <div className="flex justify-center items-center gap-2 mt-1">
                                    <span className="bg-gray-100 px-2 py-1 rounded-full text-xs text-gray-600">
                                        {member.department}
                                    </span>
                                    <span className="bg-gray-100 px-2 py-1 rounded-full text-xs text-gray-600">
                                        {member.type}
                                    </span>
                                </div>
                            </motion.div>

                            <motion.div
                                className="mb-6 text-center"
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.3 }}
                            >
                                <p className="text-gray-600 leading-relaxed">
                                    {member.description || "No description available."}
                                </p>
                            </motion.div>

                            <motion.div
                                className="flex justify-center gap-4"
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.4 }}
                            >
                                {
                                    member.socials.map(({ icon, href }, i) => (
                                        <motion.a key={i}
                                            href={href}
                                            target="_blank"
                                            whileHover={{ y: -3 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="p-3 rounded-full bg-primary text-white shadow"
                                        >
                                            {icon}
                                        </motion.a>
                                    ))
                                }
                            </motion.div>

                            {member.phone && (
                                <motion.div
                                    className="mt-6 text-center"
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                                >
                                    <a
                                        href={`tel:${member.phone}`}
                                        className="text-primary font-medium hover:underline"
                                    >
                                        {member.phone}
                                    </a>
                                </motion.div>
                            )}
                        </div>
                    ) : (
                        <p>No member selected</p>
                    )}
                </motion.div>
            </motion.div>
        </AnimatePresence>
    )
}

export default MemberDetailsModal;