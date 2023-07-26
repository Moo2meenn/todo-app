import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";
import Task from "./Task";
import { Divider } from "./Divider";

export const RenderGroups = ({
  groupedTasks,
  expandedCategories,
  setExpandedCategories,
  toggleCategory,
  setTasks,
  setHistory,
}) => {
  return Object.entries(groupedTasks)
    .map(([category, tasks]) => (
      <CategoryWrapper
        key={category}
        initial={{ height: "auto" }} // Set initial height to auto
        animate={{ height: expandedCategories[category] ? "auto" : 15 }} // Animate height to 'auto' when expanded, or 0 when collapsed
        transition={{ duration: 0.5 }} // Set the duration of the animation
      >
        <TitleWrapper onClick={() => toggleCategory(category)}>
          <StyledCategoryTitle
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 100, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {category}
          </StyledCategoryTitle>
          <TitleDivider />
          <StyledSVG
            animate={{ rotate: expandedCategories[category] ? 0 : 180 }} // Apply the rotation animation based on the 'expanded' state
            width="13"
            height="8"
            viewBox="0 0 13 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.632 7.34286C12.401 7.57249 12.0885 7.70138 11.7628 7.70138C11.4371 7.70138 11.1246 7.57249 10.8936 7.34286L6.46751 2.97842L2.10307 7.34286C1.87207 7.57249 1.55959 7.70138 1.23388 7.70138C0.908164 7.70138 0.595686 7.57249 0.364688 7.34286C0.249131 7.22825 0.15741 7.09189 0.0948177 6.94165C0.0322254 6.79141 0 6.63026 0 6.46751C0 6.30475 0.0322254 6.14361 0.0948177 5.99337C0.15741 5.84313 0.249131 5.70677 0.364688 5.59215L5.59215 0.364688C5.70677 0.249131 5.84313 0.157411 5.99337 0.0948184C6.14361 0.032226 6.30475 8.81573e-08 6.46751 8.81573e-08C6.63026 8.81573e-08 6.79141 0.032226 6.94165 0.0948184C7.09189 0.157411 7.22825 0.249131 7.34286 0.364688L12.632 5.59215C12.7475 5.70677 12.8393 5.84313 12.9018 5.99337C12.9644 6.14361 12.9967 6.30475 12.9967 6.46751C12.9967 6.63026 12.9644 6.79141 12.9018 6.94165C12.8393 7.09189 12.7475 7.22825 12.632 7.34286Z"
              fill="#969696"
            />
          </StyledSVG>
        </TitleWrapper>
        <AnimatePresence>
          {expandedCategories[category] &&
            tasks
              .map((task, index) => (
                <StyledCategory
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 100, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{
                    duration: 0.2,
                  }}
                  key={task.id}
                >
                  <Task
                    task={task}
                    setTasks={setTasks}
                    setHistory={setHistory}
                    setExpandedCategories={setExpandedCategories}
                  />
                  {index !== 0 && <Divider />}
                </StyledCategory>
              ))
              .reverse()}
        </AnimatePresence>
      </CategoryWrapper>
    ))
    .reverse();
};

const StyledSVG = styled(motion.svg)`
  height: 1.5rem;
  aspect-ratio: 1;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  background-color: transparent;
  margin-bottom: 1rem;
`;

const TitleDivider = styled.div`
  height: 0.1rem;
  width: 100%;
  margin-inline: 1rem;
  background-color: #d5d5d5;
`;

const StyledCategoryTitle = styled(motion.h1)`
  color: #303547;
  text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.2);
`;

const CategoryWrapper = styled(motion.div)`
  margin-bottom: 2rem;
`;

const StyledCategory = styled(motion.div)``;
