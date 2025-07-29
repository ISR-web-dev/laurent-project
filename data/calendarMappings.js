// Import all PDFs
import tamponA from '../assets/calendriers/TAMPON/TAMPON - SECTEUR A.pdf'
import tamponB from '../assets/calendriers/TAMPON/TAMPON - SECTEUR B.pdf'
import tamponC from '../assets/calendriers/TAMPON/TAMPON - SECTEUR C.pdf'
import tamponD from '../assets/calendriers/TAMPON/TAMPON - SECTEUR D.pdf'
import tamponE from '../assets/calendriers/TAMPON/TAMPON - SECTEUR E.pdf'
import tamponF from '../assets/calendriers/TAMPON/TAMPON - SECTEUR F.pdf'
import tamponG from '../assets/calendriers/TAMPON/TAMPON - SECTEUR G.pdf'
import tamponH from '../assets/calendriers/TAMPON/TAMPON - SECTEUR H.pdf'
import tamponI from '../assets/calendriers/TAMPON/TAMPON - SECTEUR I.pdf'
import tamponCentreVille from '../assets/calendriers/TAMPON/TAMPON - SECTEUR CENTRE-VILLE.pdf'

import entreDeuxA from "../assets/calendriers/L'ENTRE-DEUX/COMMUNE DE L'ENTRE-DEUX - SECTEUR A.pdf"
import entreDeuxB from "../assets/calendriers/L'ENTRE-DEUX/COMMUNE DE L'ENTRE-DEUX - SECTEUR B.pdf"

import saintJosephA from '../assets/calendriers/SAINT JOSEPH/COMMUNE DE SAINT-JOSEPH - SECTEUR A.pdf'
import saintJosephB from '../assets/calendriers/SAINT JOSEPH/COMMUNE DE SAINT-JOSEPH - SECTEUR B.pdf'
import saintJosephC from '../assets/calendriers/SAINT JOSEPH/COMMUNE DE SAINT-JOSEPH - SECTEUR C.pdf'
import saintJosephD from '../assets/calendriers/SAINT JOSEPH/COMMUNE DE SAINT-JOSEPH - SECTEUR D.pdf'
import saintJosephE from '../assets/calendriers/SAINT JOSEPH/COMMUNE DE SAINT-JOSEPH - SECTEUR E.pdf'
import saintJosephF from '../assets/calendriers/SAINT JOSEPH/COMMUNE DE SAINT-JOSEPH - SECTEUR F.pdf'
import saintJosephG from '../assets/calendriers/SAINT JOSEPH/COMMUNE DE SAINT-JOSEPH - SECTEUR G.pdf'
import saintJosephH from '../assets/calendriers/SAINT JOSEPH/COMMUNE DE SAINT-JOSEPH - SECTEUR H.pdf'
import saintJosephI from '../assets/calendriers/SAINT JOSEPH/COMMUNE DE SAINT-JOSEPH - SECTEUR I.pdf'
import saintJosephJ from '../assets/calendriers/SAINT JOSEPH/COMMUNE DE SAINT-JOSEPH - SECTEUR J.pdf'
import saintJosephK from '../assets/calendriers/SAINT JOSEPH/COMMUNE DE SAINT-JOSEPH - SECTEUR K.pdf'
import saintJosephL from '../assets/calendriers/SAINT JOSEPH/COMMUNE DE SAINT-JOSEPH - SECTEUR L.pdf'
import saintJosephM from '../assets/calendriers/SAINT JOSEPH/COMMUNE DE SAINT-JOSEPH - SECTEUR M.pdf'
import saintJosephN from '../assets/calendriers/SAINT JOSEPH/COMMUNE DE SAINT-JOSEPH - SECTEUR N.pdf'
import saintJosephO from '../assets/calendriers/SAINT JOSEPH/COMMUNE DE SAINT-JOSEPH - SECTEUR O.pdf'
import saintJosephP from '../assets/calendriers/SAINT JOSEPH/COMUNE DE SAINT-JOSEPH - SECTEUR P.pdf'
import saintJosephT from '../assets/calendriers/SAINT JOSEPH/COMMUNE DE SAINT-JOSEPH - SECTEUR T.pdf'

import saintPhilippeR from '../assets/calendriers/SAINT PHILPPE/COMMUNE DE SAINT-PHILPPE - SECTEUR R.pdf'
import saintPhilippeS from '../assets/calendriers/SAINT PHILPPE/COMMUNE DE SAINT-PHILPPE - SECTEUR S.pdf'
import saintPhilippeT from '../assets/calendriers/SAINT PHILPPE/COMMUNE DE SAINT-PHILPPE - SECTEUR T.pdf'

export const calendarMappings = {
  'leTampon': {
    'A': tamponA,
    'B': tamponB, 
    'C': tamponC,
    'D': tamponD,
    'E': tamponE,
    'F': tamponF,
    'G': tamponG,
    'H': tamponH,
    'I': tamponI,
    'CENTRE-VILLE': tamponCentreVille
  },
  'entreDeux': {
    'A': entreDeuxA,
    'B': entreDeuxB
  },
  'saintJoseph': {
    'A': saintJosephA,
    'B': saintJosephB,
    'C': saintJosephC,
    'D': saintJosephD,
    'E': saintJosephE,
    'F': saintJosephF,
    'G': saintJosephG,
    'H': saintJosephH,
    'I': saintJosephI,
    'J': saintJosephJ,
    'K': saintJosephK,
    'L': saintJosephL,
    'M': saintJosephM,
    'N': saintJosephN,
    'O': saintJosephO,
    'P': saintJosephP,
    'T': saintJosephT
  },
  'saintPhilippe': {
    'R': saintPhilippeR,
    'S': saintPhilippeS,
    'T': saintPhilippeT
  }
}

export const getCalendarPath = (commune, sector) => {
  if (!calendarMappings[commune] || !calendarMappings[commune][sector]) {
    return null
  }
  return calendarMappings[commune][sector]
}