"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface HotspotData {
  id: string;
  x: number; // percentage from left
  y: number; // percentage from top
  title: string;
  description: string;
}

// Hotspot data based on the green circular icons in the image
const hotspots: HotspotData[] = [
  {
    id: 'entrance-main',
    x: 15,
    y: 75,
    title: 'Entrada Principal',
    description: 'Porta de entrada principal do edifício com controle de acesso e recepção.'
  },
  {
    id: 'security-office',
    x: 25,
    y: 65,
    title: 'Segurança',
    description: 'Posto de segurança e monitoramento com controle de acesso às áreas restritas.'
  },
  {
    id: 'meeting-room-1',
    x: 35,
    y: 55,
    title: 'Sala de Reuniões 1',
    description: 'Sala de reuniões equipada com sistema audiovisual e capacidade para 8 pessoas.'
  },
  {
    id: 'office-area-1',
    x: 45,
    y: 45,
    title: 'Área de Escritórios',
    description: 'Espaço de trabalho colaborativo com estações individuais e área comum.'
  },
  {
    id: 'conference-room',
    x: 55,
    y: 35,
    title: 'Sala de Conferências',
    description: 'Sala principal de conferências com equipamentos de videoconferência e projeção.'
  },
  {
    id: 'executive-office',
    x: 65,
    y: 25,
    title: 'Escritório Executivo',
    description: 'Escritório privativo da diretoria com sala de reuniões anexa.'
  },
  {
    id: 'break-room',
    x: 75,
    y: 35,
    title: 'Copa/Cozinha',
    description: 'Área de descanso com cozinha equipada, geladeira e espaço para refeições.'
  },
  {
    id: 'storage-room',
    x: 85,
    y: 45,
    title: 'Almoxarifado',
    description: 'Depósito para materiais de escritório e equipamentos diversos.'
  },
  {
    id: 'it-room',
    x: 75,
    y: 55,
    title: 'Sala de TI',
    description: 'Centro de tecnologia da informação com servidores e equipamentos de rede.'
  },
  {
    id: 'archive-room',
    x: 65,
    y: 65,
    title: 'Arquivo',
    description: 'Sala de arquivos e documentos com sistema de organização e controle.'
  },
  {
    id: 'emergency-exit',
    x: 55,
    y: 75,
    title: 'Saída de Emergência',
    description: 'Saída de emergência com acesso direto ao exterior e sistema de alarme.'
  }
];

const Hotspot: React.FC<{ hotspot: HotspotData; isActive: boolean; onHover: (id: string | null) => void }> = ({ 
  hotspot, 
  isActive, 
  onHover 
}) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            className={`absolute w-8 h-8 rounded-full transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50 ${
              isActive 
                ? 'bg-green-400 shadow-lg shadow-green-400/50 animate-pulse' 
                : 'bg-green-500 hover:bg-green-400 shadow-md'
            }`}
            style={{
              left: `${hotspot.x}%`,
              top: `${hotspot.y}%`,
              transform: 'translate(-50%, -50%)'
            }}
            onMouseEnter={() => onHover(hotspot.id)}
            onMouseLeave={() => onHover(null)}
            aria-label={hotspot.title}
          >
            <div className="w-full h-full flex items-center justify-center">
              <svg 
                className="w-4 h-4 text-white" 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </div>
          </button>
        </TooltipTrigger>
        <TooltipContent 
          side="top" 
          className="max-w-xs p-3 bg-white border border-gray-200 shadow-lg rounded-lg"
        >
          <div className="space-y-1">
            <h4 className="font-semibold text-gray-900">{hotspot.title}</h4>
            <p className="text-sm text-gray-600">{hotspot.description}</p>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

const InteractiveMap: React.FC = () => {
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <div className="relative w-full bg-gray-100 rounded-lg overflow-hidden shadow-lg">
        {/* Map Image Container */}
        <div className="relative aspect-[4/3] w-full">
          {/* Placeholder for the image - we'll use a placeholder until the actual image is available */}
          <div className="w-full h-full bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center">
            <div className="text-center p-8">
              <div className="w-32 h-32 mx-auto mb-4 bg-white rounded-lg shadow-md flex items-center justify-center">
                <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m0 0H5m0 0h2M7 7h10M7 11h6m-6 4h6" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Mapa Interativo do Edifício</h3>
              <p className="text-sm text-gray-500">Passe o mouse sobre os pontos verdes para ver as informações</p>
            </div>
          </div>
          
          {/* Interactive Hotspots */}
          {hotspots.map((hotspot) => (
            <Hotspot
              key={hotspot.id}
              hotspot={hotspot}
              isActive={activeHotspot === hotspot.id}
              onHover={setActiveHotspot}
            />
          ))}
        </div>
        
        {/* Legend */}
        <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-md">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-green-500 rounded-full"></div>
            <span className="text-sm font-medium text-gray-700">Pontos Interativos</span>
          </div>
          <p className="text-xs text-gray-500 mt-1">Clique ou passe o mouse para mais informações</p>
        </div>
      </div>
    </div>
  );
};

export default InteractiveMap;
