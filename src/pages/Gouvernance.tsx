import { motion } from 'framer-motion';

const directoireTeam = [
  {
    id: 'walter-butler',
    name: 'Walter Butler',
    role: 'Président du directoire'
  },
  {
    id: 'bertrand-grenier',
    name: 'Bertrand Grenier',
    role: 'DG Finances & autres fonctions support'
  },
  {
    id: 'jean-david-sarfati',
    name: 'Jean David Sarfati',
    role: 'Directeur général des marques Noto & Casa Amor'
  }
];

const conseilSurveillance = [
  {
    id: 'benjamin-patou',
    name: 'Benjamin Patou',
    role: 'Président du conseil de surveillance'
  },
  {
    id: 'patrick-bruel',
    name: 'Patrick Bruel',
    role: 'Artiste & Entrepreneur'
  },
  {
    id: 'eleonore-butler',
    name: 'Éléonore Butler',
    role: 'Butler Industries'
  },
  {
    id: 'laurent-parquet',
    name: 'Laurent Parquet',
    role: 'Partner - Butler Industries'
  },
  {
    id: 'adam-bensouda',
    name: 'Adam Bensouda',
    role: 'Butler Industries'
  }
];

const Gouvernance = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Directoire Section */}
      <section className="pt-32 pb-24">
        <div className="container mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-6xl md:text-8xl font-light mb-12" style={{ 
              fontFamily: 'serif', 
              lineHeight: '0.9',
              fontWeight: '300'
            }}>
              Directoire
            </h1>
          </motion.div>

          {/* Directoire Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {directoireTeam.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                {/* Card container */}
                <div className="bg-gray-900 border border-gray-700 rounded-lg p-8 h-[500px] flex flex-col justify-center space-y-6">
                  {/* Member Info */}
                  <div className="space-y-6">
                    <h3 className="text-3xl font-light" style={{ 
                      fontFamily: '"Playfair Display", "Crimson Text", "Cormorant Garamond", Georgia, serif',
                      color: '#ffffff'
                    }}>
                      {member.name}
                    </h3>
                    
                    <p className="text-gray-300 text-lg leading-relaxed" style={{ 
                      fontFamily: '"Source Serif Pro", "Crimson Text", "Lora", Georgia, serif',
                      maxWidth: '280px',
                      margin: '0 auto'
                    }}>
                      {member.role}
                    </p>

                    {/* Bouton En savoir plus */}
                    <button 
                      style={{ 
                        backgroundColor: 'transparent',
                        color: '#ffffff',
                        border: '1px solid #ffffff',
                        padding: '12px 24px',
                        fontSize: '14px',
                        fontFamily: '"Inter", "Source Sans Pro", system-ui, sans-serif',
                        fontWeight: '400',
                        letterSpacing: '0.05em',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        marginTop: '1rem'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = '#ffffff';
                        e.target.style.color = '#000000';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = 'transparent';
                        e.target.style.color = '#ffffff';
                      }}
                    >
                      En savoir plus
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Conseil de surveillance Section */}
      <section className="py-24">
        <div className="container mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-6xl md:text-8xl font-light mb-12" style={{ 
              fontFamily: 'serif', 
              lineHeight: '0.9',
              fontWeight: '300'
            }}>
              Conseil de surveillance
            </h2>
          </motion.div>

          {/* Conseil de surveillance Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 max-w-7xl mx-auto">
            {conseilSurveillance.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                {/* Card container */}
                <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 h-[400px] flex flex-col justify-center space-y-4">
                  {/* Member Info */}
                  <div className="space-y-4">
                    <h3 className="text-2xl font-light" style={{ 
                      fontFamily: '"Playfair Display", "Crimson Text", "Cormorant Garamond", Georgia, serif',
                      color: '#ffffff'
                    }}>
                      {member.name}
                    </h3>
                    
                    <p className="text-gray-300 text-base leading-relaxed" style={{ 
                      fontFamily: '"Source Serif Pro", "Crimson Text", "Lora", Georgia, serif'
                    }}>
                      {member.role}
                    </p>

                    {/* Bouton En savoir plus */}
                    <button 
                      style={{ 
                        backgroundColor: 'transparent',
                        color: '#ffffff',
                        border: '1px solid #ffffff',
                        padding: '10px 20px',
                        fontSize: '12px',
                        fontFamily: '"Inter", "Source Sans Pro", system-ui, sans-serif',
                        fontWeight: '400',
                        letterSpacing: '0.05em',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        marginTop: '1rem'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = '#ffffff';
                        e.target.style.color = '#000000';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = 'transparent';
                        e.target.style.color = '#ffffff';
                      }}
                    >
                      En savoir plus
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gouvernance;