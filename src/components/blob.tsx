interface BlobType {
  name: string;
  transform: string;
  fill: string;
  animate: string;
  path: string;
}

const Blob = ({
  blobs,
  size,
  centerCircleColor = '#939CE2',
}: {
  blobs: BlobType[];
  size: number;
  centerCircleColor?: string;
}) => {
  return (
    <div className='flex items-center justify-center rounded-xl'>
      <svg
        id='visual'
        viewBox={`0 0 ${size} ${size}`}
        width={size}
        height={size}
        xmlns='http://www.w3.org/2000/svg'
        version='1.1'
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          fill={centerCircleColor}
          r={size * 0.4}
        />

        {blobs.map((blob) => (
          <g key={blob.name} transform={blob.transform}>
            <path d={blob.path} fill={blob.fill} className={blob.animate} />
          </g>
        ))}
      </svg>
    </div>
  );
};

export default Blob;
