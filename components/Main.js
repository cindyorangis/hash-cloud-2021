import features from '../features';

import Center from './Features/Center';
import Item from './Features/Item';
import CTA from './CTA';

export default function Main() {
  return (
    <main>
      <div className="bg-gray-50">
        <CTA />
      </div>

      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <Center />
            </div>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {features.map((feature) => (
                <Item
                  key={feature.id}
                  id={feature.id}
                  feature={feature.feature}
                  description={feature.description}
                  icon={feature.icon}
                />
              ))}
            </dl>
          </div>
        </div>
      </div>
    </main>
  );
}
