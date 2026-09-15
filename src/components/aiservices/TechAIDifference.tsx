import CompHeader from "../shared/CompHeader";

const TechAIDifference = () => {

    const renderCard = () => {
      return (
        <section className="w-full mx-auto flex flex-col items-center">
          <CompHeader
            highlighter="Software Difference"
            title={<p className="bg-[linear-gradient(to_right,#6025F5,#E40CD3,#FF5555)] bg-clip-text text-transparent">Traditional Software vs AI-Powered Systems</p>}
            subheading="Explore how AI-powered systems deliver greater intelligence, automation, and adaptability."
            variant="pinkdefault"
          />
          <div className="w-full overflow-x-auto rounded-lg border border-gray-200 shadow-md">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                    Feature
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                    Traditional Software
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                    AI-Powered Solutions
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200 bg-white">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-sm font-medium text-gray-900">Automation</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Rule-based</td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    Self-learning, intelligent
                  </td>
                </tr>

                <tr className="bg-gray-50 hover:bg-gray-100">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">Decision-Making</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Manual</td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    Predictive, data-driven
                  </td>
                </tr>

                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">Accuracy</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Limited</td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    Improves over time
                  </td>
                </tr>

                <tr className="bg-gray-50 hover:bg-gray-100">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">Personalization</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Static</td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    Dynamic, real-time
                  </td>
                </tr>

                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">Efficiency</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Human-dependent</td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    Highly automated
                  </td>
                </tr>

                <tr className="bg-gray-50 hover:bg-gray-100">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">Scalability</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Requires upgrades</td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    Automatically adapts
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      );
    }

  const renderGreyCard = () => {
    return <div className="py-6 md:py-16 bg-[#f9f9f9]">
      <div className='container-wrapper-transparent'>
        {renderCard()}
      </div>
    </div>
  }

  return renderGreyCard()
};

export default TechAIDifference;
