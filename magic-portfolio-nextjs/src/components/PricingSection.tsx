"use client";

import { Column, Row, Heading, Text, Button, Icon, Line } from "@once-ui-system/core";

const plans = [
  {
    name: "Starter Plan",
    price: "$99",
    description: "Perfecto para pequeños lanzamientos y sitios personales que necesitan una presencia online rápida.",
    features: [
      "Sitio web de una página",
      "Diseño y estructura visual a medida",
      "Experiencia responsiva Mobile-first",
      "Entrega rápida (menos de 7 días)",
      "SEO básico integrado"
    ],
    highlight: false
  },
  {
    name: "Growth Plan",
    price: "$299",
    description: "Diseñado para marcas en crecimiento que necesitan flexibilidad y soporte CMS avanzado.",
    features: [
      "Hasta 5 páginas",
      "Secciones administrables por CMS",
      "Estructura basada en componentes",
      "Diseño de movimiento y transiciones",
      "Interfaces enfocadas en UX estricto",
      "Guía de estilos (Design System)"
    ],
    highlight: true // Borde un poco más fuerte
  },
  {
    name: "Full Scope Plan",
    price: "$899",
    description: "Ideal para equipos o sistemas empresariales que necesitan estructura compleja y ejecución de alto nivel.",
    features: [
      "10+ páginas con panel CMS",
      "Estrategia de diseño avanzada",
      "Soporte completo de sistema de marca",
      "Dirección de animaciones fluidas",
      "Componentes construidos a la medida",
      "Soporte y QA post-lanzamiento"
    ],
    highlight: false
  }
];

export const PricingSection = () => {
  return (
    <Column fillWidth paddingY="xl" gap="l" horizontal="center" align="center">
      <Heading as="h2" variant="display-strong-xs" marginBottom="24" wrap="balance" align="center">
        Planes y Arquitectura de Sistemas
      </Heading>
      
      <Row fillWidth gap="16" s={{ direction: "column" }} horizontal="center" align="stretch">
        {plans.map((plan, index) => (
          <Column 
            key={index}
            flex={1} 
            padding="32" 
            radius="l" 
            border={plan.highlight ? "brand-strong" : "neutral-alpha-weak"} 
            background="surface"
            gap="32"
            minWidth="300"
          >
            <Column gap="12">
               <Row vertical="center" gap="8">
                 <Heading variant="display-strong-xl">{plan.price}</Heading>
                 <Text variant="body-default-s" onBackground="brand-medium">/mes</Text>
               </Row>
               <Heading variant="heading-strong-l" marginTop="8">{plan.name}</Heading>
               <Text variant="body-default-s" onBackground="neutral-weak">
                 {plan.description}
               </Text>
            </Column>
            
            <Line background="neutral-alpha-weak" />
            
            <Column gap="16">
              {plan.features.map(feature => (
                <Row key={feature} gap="12" vertical="start">
                  <Icon name="check" size="s" onBackground="brand-strong" />
                  <Text variant="body-default-s" onBackground="neutral-strong">{feature}</Text>
                </Row>
              ))}
            </Column>
            
            <Row flex={1} vertical="end">
                <Button 
                    variant={plan.highlight ? "primary" : "secondary"} 
                    size="l" 
                    fillWidth 
                    marginTop="24"
                >
                Comenzar
                </Button>
            </Row>
          </Column>
        ))}
      </Row>
    </Column>
  );
};
