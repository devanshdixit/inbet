import { motion } from "framer-motion"
import Image from "next/image"
export default function BetOption() {
    const cardMotion = {
        hover: {
            scale: 1.05
        }
      };
    const arrowMotion = {
        hover: {
            x: 18
        }
      };


    return (
        <section class="bg-white dark:bg-gray-900">
            <div class=" items-center py-8 px-4 mx-auto max-w-screen-xl">
                <div className="py-4 max-w-screen-sm mx-auto">
                    <motion.div whileHover="hover" variants={cardMotion} className="border-[1px] px-6 sm:text-5xl text-4xl justify-between items-center text-center neonText boxshadow my-2 h-40 mx-6  border-gray-600  py-2  rounded-2xl flex">
                        Gold
                        <motion.span variants={arrowMotion} className="h-20 sm:h-32 sm:w-32 w-20 items-center text-center align-middle flex">
                            <Image src='/fast-forward.png' alt="" height="100%" width="100%" />
                        </motion.span>
                    </motion.div>

                    <motion.div whileHover="hover" variants={cardMotion} className="border-[1px] px-6 sm:text-5xl text-4xl justify-between items-center text-center neonText boxshadow my-12 h-40 mx-6  border-gray-600  py-2  rounded-2xl flex">
                        Silver
                        <motion.span variants={arrowMotion} className="h-20 sm:h-32 sm:w-32 w-20 items-center text-center align-middle flex">
                            <Image src='/fast-forward.png' alt="" height="100%" width="100%" />
                        </motion.span>
                    </motion.div>
                    <motion.div whileHover="hover" variants={cardMotion} className="border-[1px] px-6 sm:text-5xl text-2xl justify-between items-center text-center neonText boxshadow my-2 h-40 mx-6  border-gray-600  py-2  rounded-2xl flex">
                        Platinum
                        <motion.span variants={arrowMotion} className="h-20 sm:h-32 sm:w-32 w-20 items-center text-center align-middle flex">
                            <Image src='/fast-forward.png' alt="" height="100%" width="100%" />
                        </motion.span>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}