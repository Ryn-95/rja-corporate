import { motion } from 'framer-motion';

interface ProfileData {
  founder: {
    label: string;
    value: string;
    icon: string;
  };
  group: {
    label: string;
    value: string;
    subtext: string;
  };
  experience: {
    label: string;
    value: string;
    subtext: string;
  };
  location: {
    label: string;
    value: string;
    subtext: string;
  };
  sector: {
    label: string;
    value: string;
    subtext: string;
  };
  status: {
    label: string;
    value: string;
    subtext: string;
  };
}

interface ProfileBarProps {
  data: ProfileData;
  className?: string;
}

export const ProfileBar = ({ data, className = '' }: ProfileBarProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`bg-black/85 backdrop-blur-md ${className}`}
      style={{
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        height: '64px',
        borderTop: '1px solid rgba(255,255,255,0.1)'
      }}
    >
      <div className="flex w-full h-full items-stretch">
        {/* Fondateur & CEO Section */}
        <div className="flex-1 px-4 py-3 border-r border-white/15 flex flex-col justify-center min-w-0">
          <div 
            className="text-white/60 font-light mb-1" 
            style={{ fontSize: '11px', letterSpacing: '0.5px' }}
          >
            {data.founder.label}
          </div>
          <div 
            className="text-white font-normal truncate" 
            style={{ fontSize: '13px', lineHeight: '1.2' }}
          >
            {data.founder.value}
          </div>
        </div>

        {/* Groupe Section */}
        <div className="flex-1 px-4 py-3 border-r border-white/15 flex flex-col justify-center min-w-0">
          <div 
            className="text-white/60 font-light mb-1" 
            style={{ fontSize: '11px', letterSpacing: '0.5px' }}
          >
            {data.group.label}
          </div>
          <div 
            className="text-white font-normal truncate mb-0.5" 
            style={{ fontSize: '13px', lineHeight: '1.2' }}
          >
            {data.group.value}
          </div>
          <div 
            className="text-white/50 font-light truncate" 
            style={{ fontSize: '10px' }}
          >
            {data.group.subtext}
          </div>
        </div>

        {/* Expérience Section */}
        <div className="flex-1 px-4 py-3 border-r border-white/15 flex flex-col justify-center min-w-0">
          <div 
            className="text-white/60 font-light mb-1" 
            style={{ fontSize: '11px', letterSpacing: '0.5px' }}
          >
            {data.experience.label}
          </div>
          <div 
            className="text-white font-normal truncate mb-0.5" 
            style={{ fontSize: '13px', lineHeight: '1.2' }}
          >
            {data.experience.value}
          </div>
          <div 
            className="text-white/50 font-light truncate" 
            style={{ fontSize: '10px' }}
          >
            {data.experience.subtext}
          </div>
        </div>

        {/* Siège Social Section */}
        <div className="flex-1 px-4 py-3 border-r border-white/15 flex flex-col justify-center min-w-0">
          <div 
            className="text-white/60 font-light mb-1" 
            style={{ fontSize: '11px', letterSpacing: '0.5px' }}
          >
            {data.location.label}
          </div>
          <div 
            className="text-white font-normal truncate mb-0.5" 
            style={{ fontSize: '13px', lineHeight: '1.2' }}
          >
            {data.location.value}
          </div>
          <div 
            className="text-white/50 font-light truncate" 
            style={{ fontSize: '10px' }}
          >
            {data.location.subtext}
          </div>
        </div>

        {/* Secteur Section */}
        <div className="flex-1 px-4 py-3 border-r border-white/15 flex flex-col justify-center min-w-0">
          <div 
            className="text-white/60 font-light mb-1" 
            style={{ fontSize: '11px', letterSpacing: '0.5px' }}
          >
            {data.sector.label}
          </div>
          <div 
            className="text-white font-normal truncate" 
            style={{ fontSize: '13px', lineHeight: '1.2' }}
          >
            {data.sector.value}
          </div>
          {data.sector.subtext && (
            <div 
              className="text-white/50 font-light truncate" 
              style={{ fontSize: '10px' }}
            >
              {data.sector.subtext}
            </div>
          )}
        </div>

        {/* Statut Section */}
        <div className="flex-1 px-4 py-3 flex flex-col justify-center min-w-0">
          <div 
            className="text-white/60 font-light mb-1" 
            style={{ fontSize: '11px', letterSpacing: '0.5px' }}
          >
            {data.status.label}
          </div>
          <div 
            className="text-white font-normal truncate" 
            style={{ fontSize: '13px', lineHeight: '1.2' }}
          >
            {data.status.value}
          </div>
          {data.status.subtext && (
            <div 
              className="text-white/50 font-light truncate" 
              style={{ fontSize: '10px' }}
            >
              {data.status.subtext}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};
