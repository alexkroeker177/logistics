interface FeatureItemProps {
  icon: React.ReactNode;
  text: string;
}

export function FeatureItem({ icon, text }: FeatureItemProps) {
  return (
    <li className="flex items-center">
      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3">
        {icon}
      </div>
      <span>{text}</span>
    </li>
  );
}