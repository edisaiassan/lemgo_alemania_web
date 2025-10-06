type SkeletonType = {
    color?: string,
    borderRadius?: string,
    className?: string,
}

export const Skeleton = ({color = 'bg-outline', borderRadius = 'rounded-3xl', className }: SkeletonType) => {
    return (
        <div className={`${color} ${borderRadius} animate-pulse ${className}`} />
    )
}