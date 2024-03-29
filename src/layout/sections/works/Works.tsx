import React, {useState} from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {TabMenu} from "./tabMenu/TabMenu";
import {Work} from "./work/Work";
import socialImg from "../../../assets/images/project3.jpeg"
import todolistImg from "../../../assets/images/project2.jpeg"
import rickmorthyImg from "../../../assets/images/project4.jpg"
import cardsImg from "../../../assets/images/project1.jpeg"
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {S} from "./Works_Styles"
import {motion, AnimatePresence} from "framer-motion"

const tabsItems: Array<{ status: "all" | "next" | "react", title: string }> = [
    {
        status: "all",
        title: "All"

    },
    {
        status: "next",
        title: "Next js",

    },
    {
        status: "react",
        title: "React SPA"

    },
]
const worksData = [
    {
        src: todolistImg,
        title: "Task manager",
        text: "React, Redux Toolkit, TypeScript, Formik, MUI, Axios, Redux-thunk, Unit-Tests, Storybook, React-Router-dom, Yup.",
        type: "react",
        demo: "https://chik1313.github.io/todolist-project/",
        code: "https://github.com/chik1313/todolist-project",
        id: 1
    },
    {
        src: cardsImg,
        title: "Study cards",
        text: "React, Redux, TypeScript, Formik, Axios, Redux-thunk, React-Router-dom, Yup, MUI, Sass.",
        type: "react",
        demo: "https://kiri1111.github.io/project/",
        code: "https://github.com/Kiri1111/project",
        id: 2
    },
    {
        src: rickmorthyImg,
        title: "Rick & Morty",
        text: "NextJS , React-Query, Axios , React-Router-dom, Sass.",
        type: "next",
        demo: "https://rickand-morty-alpha.vercel.app/characters",
        code: "https://github.com/chik1313/RickandMorty",
        id: 3

    },
    {
        src: socialImg,
        title: "Communication platform",
        text: "React, Redux, TypeScript, Axios, Redux-thunk,  React-Router-dom.",
        type: "react",
        demo: "https://chik1313.github.io/samurai-way-main/",
        code: "https://github.com/chik1313/samurai-way-main",
        id: 4

    },
]
export const Works: React.FC = () => {
    const [currentFilterStatus, setCurrentFilterStatus] = useState<"all" | "next" | "react">("all")

    let filteredWorks = worksData

    if (currentFilterStatus === "next") {
        filteredWorks = worksData.filter(work => work.type === "next")
    }
    if (currentFilterStatus === "react") {
        filteredWorks = worksData.filter(work => work.type === "react")
    }

    const changeFilterStatus = (value: "all" | "next" | "react") => {
        setCurrentFilterStatus(value)
    }

    return (
        <S.StyledWorks id="works">
            <Container>
                <SectionTitle> My Works </SectionTitle>
                <TabMenu tabsItems={tabsItems}
                         changeFilterStatus={changeFilterStatus}
                         currentFilterStatus={currentFilterStatus}
                />
                <FlexWrapper justify={"space-between"} align={"flex-start"} wrap={'wrap'}>
                    <AnimatePresence>
                        {filteredWorks.map((work, index) => {
                            return (
                                <motion.div style={{
                                    width: "400px",
                                    flexGrow: "1",
                                    maxWidth: "540px",
                                }}
                                    layout
                                    initial={{opacity: 0}}
                                    animate={{opacity: 1}}
                                    exit={{opacity: 0}}
                                    key={work.id}
                                >
                                    <Work title={work.title} text={work.text} src={work.src} key={work.id} demo={work.demo} code={work.code}/>
                                </motion.div>
                            )
                        })}
                    </AnimatePresence>
                </FlexWrapper>
            </Container>
        </S.StyledWorks>
    );
};


