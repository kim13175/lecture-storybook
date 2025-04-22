import TagButton from "./TagButton.tsx";
import React from "react";

interface TagListProps<T extends string> {
    /* 동적인 타입 할당 : 제너릭 사용 */
    tagList: T[];
    onTagClick: (tag: T) => void;
}

export default function TagList<T extends string>({
    tagList,
    onTagClick,
}: TagListProps<T>) {
    const [selectedTag, setSelectedTag] = React.useState<T>(tagList[0]);

    return (
        /* 이벤트 버블링 -> 자식 컴포넌트에서 부모 컴포넌트까지 이벤트 전달되는 것 */
        <div className='flex gap-x-4' onClick={() => {
            const eventTarget = event.target as HTMLButtonElement;
            const tag = eventTarget.textContent as T;
            onTagClick(tag);
        }}>
            {tagList.map((tag) => (
                <TagButton
                    key={tag}
                    isChecked={tag === selectedTag}
                    onClick={() => {setSelectedTag(tag)}}
                >
                    {tag}
                </TagButton>
            ))}
        </div>
    )
}
