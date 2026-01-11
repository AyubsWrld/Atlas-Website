import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center gap-20 bg-gradient-to-b from-transparent to-white rounded-[32px] overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #FFF 100%), url('https://api.builder.io/api/v1/image/assets/TEMP/3d78ecf9c6e66c24197a6a0b62d353c4818f7c42?width=2800')`,
            backgroundSize: '148.116% 100%',
            backgroundPosition: '-336.81px -263.758px'
          }}
        />
        
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center gap-20 py-20 px-5">
          {/* Navigation */}
          <nav className="flex items-center gap-8 px-3 py-3 rounded-[20px]">
            <div className="flex items-center gap-2 px-1">
              <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.1415 10.1657C12.6788 8.6848 12.4696 6.61238 12.0129 4.66178H12.0029C11.8179 5.45581 11.5689 6.23518 11.3896 7.03068C10.8233 9.55076 9.4787 11.152 7.01284 11.7876C6.26014 11.9549 5.40641 12.156 4.65797 12.3409C5.49036 12.5728 6.33413 12.7592 7.16367 12.9999C8.98353 13.5298 10.395 14.5425 10.9912 16.5019C11.7439 18.975 10.9941 21.1061 8.91239 22.2436C6.64005 23.4868 3.38165 23.2387 1.52336 21.137C-0.154214 19.2392 -0.57681 16.4916 0.917216 13.8556C2.98609 10.2054 5.0265 6.53753 7.08541 2.88143C9.23396 -0.933183 14.6793 -0.968408 16.8222 2.82419C19.0163 6.70631 21.2815 10.5488 23.3447 14.5014C24.9838 17.6394 23.3817 21.4173 20.3837 22.543C18.5467 23.2329 16.7411 23.1492 15.0322 22.2407C12.2192 20.7466 11.8336 16.6912 14.2098 14.4089C15.3765 13.2876 16.8535 12.9764 18.3162 12.6022C18.6662 12.5126 19.0063 12.3849 19.362 12.3233C17.5493 11.77 15.5615 11.6056 14.1386 10.1657H14.1415Z" fill="black"/>
              </svg>
              <span className="font-inter-tight text-xl font-semibold text-black">Atlas</span>
            </div>
            
            <div className="flex items-center gap-5 px-2.5">
              <Link to="#" className="font-inter-tight text-sm font-medium text-black">Customers</Link>
              <Link to="#" className="font-inter-tight text-sm font-medium text-black">About</Link>
              <Link to="#" className="font-inter-tight text-sm font-medium text-black">Blog</Link>
              <Link to="#" className="font-inter-tight text-sm font-medium text-black">Contact</Link>
            </div>
            
            <button className="flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-[#212121] border-t-2 border-[#333] shadow-[0_-3px_0_0_#1A1A1A_inset,0_0_0_1px_#1A1A1A]">
              <span style={{ display: "block", color: "rgb(255, 255, 255)", font: '500 14px/20px "Inter Tight", -apple-system, Roboto, Helvetica, sans-serif' }}>Join us today</span>
            </button>
          </nav>

          {/* Hero Content */}
          <div className="flex flex-col items-center gap-5 max-w-[1034px] w-full px-4">
            <div className="flex flex-col items-center gap-8 w-full">
              <h1 style={{ font: '600 96px/120% "Inter Tight", -apple-system, Roboto, Helvetica, sans-serif', backgroundClip: "text", backgroundImage: "linear-gradient(rgb(0, 0, 0), rgb(51, 51, 51))", color: "rgba(0, 0, 0, 0)", letterSpacing: "-3.36px", textAlign: "center", display: "block" }} className="w-full">
                Reliable Compute, Anywhere, Guaranteed.
              </h1>
              <p style={{ font: '500 24px/32px "Inter Tight", -apple-system, Roboto, Helvetica, sans-serif', color: "rgb(0, 0, 0)", textAlign: "center", maxWidth: "646px" }} className="w-full">
                Submit your workload once. We route it across the best available infrastructure — decentralized or cloud — and guarantee it finishes.
              </p>
            </div>
            
            <button className="flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-[#212121] border-t-2 border-[#333] shadow-[0_-3px_0_0_#1A1A1A_inset,0_0_0_1px_#1A1A1A]">
              <span style={{ display: "block", color: "rgb(255, 255, 255)", font: '500 14px/20px "Inter Tight", -apple-system, Roboto, Helvetica, sans-serif' }}>Preorder for $40</span>
            </button>
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="relative w-full h-[728px] overflow-hidden px-4 flex flex-col justify-center items-center">
          <div className="inline-flex flex-col items-center gap-2.5 p-2.5 rounded-[32px] border border-[#E4E7EC] bg-black/5 max-w-[1172px] mx-auto">
            <div className="w-full rounded-[25.6px] border-[0.8px] border-[#E4E7EC] bg-white overflow-hidden">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/c9da7aa9b3b031b3aca5293a13ff8e1509a28538?width=1843"
                alt="Dashboard Preview"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <div className="flex items-center justify-center py-12 px-4 overflow-hidden bg-white">
        <div className="flex items-center gap-12 md:gap-16 lg:gap-24 flex-wrap justify-center max-w-7xl">
          <img src="https://api.builder.io/api/v1/image/assets/TEMP/33e89fb12180183a6dd30eb6a70971443d9d6a9f?width=137" alt="Salesforce" className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity" />
          <img src="https://api.builder.io/api/v1/image/assets/TEMP/ad33659c33381eac40061641b81f19d65a13ad9f?width=223" alt="Vimeo" className="h-8 w-auto opacity-80 hover:opacity-100 transition-opacity" />
          <svg width="84" height="32" viewBox="0 0 84 32" fill="none" className="opacity-80 hover:opacity-100 transition-opacity">
            <path d="M0.336914 0.445312H6.3077V6.4161H0.336914V0.445312Z" fill="#0068B5"/>
            <path d="M6.15889 31.5538V10.0505H0.506836V31.5538H6.15889ZM43.726 31.7663V26.4967C42.8973 26.4967 42.1961 26.4542 41.6861 26.3692C41.0912 26.2842 40.645 26.0717 40.3475 25.7742C40.05 25.4768 39.8588 25.0518 39.7525 24.4993C39.6675 23.9681 39.625 23.2669 39.625 22.417V14.8951H43.726V10.0505H39.625V1.65737H33.9517V22.4595C33.9517 24.2231 34.1005 25.7105 34.3979 26.9004C34.6954 28.0691 35.2054 29.0252 35.9066 29.7477C36.6078 30.4701 37.5427 30.9801 38.6689 31.2988C39.8163 31.6175 41.2612 31.7663 42.9823 31.7663H43.726ZM76.1934 31.5538V0H70.5201V31.5538H76.1934ZM28.4909 12.154C26.9185 10.4542 24.7087 9.60425 21.9039 9.60425C20.544 9.60425 19.3116 9.88048 18.1855 10.4329C17.0805 10.9854 16.1244 11.7503 15.3807 12.7278L15.062 13.1315V10.0505H9.47364V31.5538H15.1044V20.1009V20.5046C15.1682 18.4861 15.6569 16.9987 16.5918 16.0425C17.5905 15.0226 18.8017 14.5126 20.1828 14.5126C21.8189 14.5126 23.0726 15.0226 23.9013 16C24.7087 16.9774 25.1337 18.3586 25.1337 20.1222V31.5325H30.8495V19.336C30.8707 16.2762 30.0633 13.8539 28.4909 12.154ZM67.5879 20.7596C67.5879 19.2085 67.3116 17.7636 66.7804 16.4037C66.228 15.0651 65.463 13.8752 64.5068 12.8552C63.5294 11.8353 62.3608 11.0491 61.0009 10.4754C59.641 9.90173 58.1323 9.6255 56.4962 9.6255C54.9451 9.6255 53.479 9.92297 52.1191 10.4967C50.7592 11.0916 49.5693 11.8778 48.5706 12.8765C47.5719 13.8752 46.7645 15.0651 46.1908 16.425C45.5958 17.7849 45.3196 19.251 45.3196 20.8021C45.3196 22.3533 45.5958 23.8194 46.1483 25.1793C46.7007 26.5392 47.4869 27.7291 48.4643 28.7278C49.4418 29.7264 50.6529 30.5339 52.0553 31.1076C53.4577 31.7025 55.0088 32 56.6662 32C61.4683 32 64.4431 29.8114 66.228 27.7716L62.1483 24.6693C61.2983 25.6892 59.2585 27.0704 56.7087 27.0704C55.1151 27.0704 53.7977 26.7092 52.799 25.9655C51.8003 25.243 51.1204 24.2231 50.7592 22.9695L50.6954 22.7782H67.5879V20.7596ZM50.7379 18.7835C50.7379 17.2112 52.544 14.4701 56.4325 14.4489C60.3209 14.4489 62.1483 17.1899 62.1483 18.7623L50.7379 18.7835ZM82.6529 28.749C82.5467 28.494 82.3979 28.2815 82.2067 28.0903C82.0155 27.8991 81.803 27.7503 81.548 27.6441C81.293 27.5378 81.0168 27.4741 80.7406 27.4741C80.4431 27.4741 80.1881 27.5378 79.9331 27.6441C79.6782 27.7503 79.4657 27.8991 79.2744 28.0903C79.0832 28.2815 78.9345 28.494 78.8282 28.749C78.722 29.004 78.6582 29.2802 78.6582 29.5564C78.6582 29.8539 78.722 30.1089 78.8282 30.3639C78.9345 30.6189 79.0832 30.8313 79.2744 31.0226C79.4657 31.2138 79.6782 31.3625 79.9331 31.4688C80.1881 31.575 80.4643 31.6388 80.7406 31.6388C81.0381 31.6388 81.293 31.575 81.548 31.4688C81.803 31.3625 82.0155 31.2138 82.2067 31.0226C82.3979 30.8313 82.5467 30.6189 82.6529 30.3639C82.7592 30.1089 82.8229 29.8327 82.8229 29.5564C82.8229 29.2802 82.7592 29.004 82.6529 28.749Z" fill="black"/>
          </svg>
        </div>
      </div>

      {/* How It Works Section */}
      <section className="flex flex-col items-center gap-20 py-20 px-4 md:px-10 rounded-[32px] border border-[#F1F1F1] bg-gradient-to-b from-transparent via-white to-white/40 overflow-hidden my-10">
        <div className="flex flex-col items-center gap-5 max-w-4xl">
          <div className="flex items-center justify-center gap-2.5 px-4 py-4 rounded-lg border border-[#E4E7EC] bg-black/5">
            <span className="font-inter-tight text-sm font-bold uppercase tracking-wide text-black">How It Works</span>
          </div>
          <h2 className="text-center font-inter-tight text-4xl md:text-5xl lg:text-6xl font-semibold leading-[120%] tracking-[-0.025em] bg-gradient-to-b from-black to-[#333] bg-clip-text text-transparent">
            Compute, Treated Like a Utility.
          </h2>
          <p className="max-w-[646px] text-center font-inter-tight text-lg md:text-xl font-medium leading-[140%] text-black">
            You define what needs to run and what matters (deadline, budget, region). We handle where it runs, how it's verified, and what happens if it fails — automatically.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="w-full max-w-7xl">
          <div className="p-2.5 rounded-[32px] border border-[#E4E7EC] bg-black/5 backdrop-blur-sm">
            {/* Row 1 */}
            <div className="flex flex-col md:flex-row gap-2.5 mb-2.5">
              <div className="flex-1 flex flex-col items-start gap-10 p-10 rounded-3xl border border-[#E4E7EC] bg-white">
                <div className="flex flex-col items-start gap-2.5">
                  <h3 className="font-inter-tight text-3xl font-semibold leading-[150%] text-black">Upload your source</h3>
                  <p className="font-inter-tight text-xl font-medium leading-[140%] text-black">Start with a screen recording or a statically uploaded file</p>
                </div>
                <img src="https://api.builder.io/api/v1/image/assets/TEMP/4bdcd61008dc68115564026baab99d13249735a6?width=1072" alt="Upload" className="w-full h-auto rounded-lg" />
              </div>
              <div className="flex-1 flex flex-col items-start gap-10 p-10 rounded-3xl border border-[#E4E7EC] bg-white">
                <div className="flex flex-col items-start gap-2.5">
                  <h3 className="font-inter-tight text-3xl font-semibold leading-[150%] text-black">Identify Origin</h3>
                  <p className="font-inter-tight text-xl font-medium leading-[140%] text-black">Watch as the Atlas helps you find the exact origin of the media derived from your source</p>
                </div>
                <img src="https://api.builder.io/api/v1/image/assets/TEMP/5c380b76afab7934571c8c24b203c2ea80fd9333?width=1072" alt="Identify" className="w-full h-auto rounded-lg" />
              </div>
            </div>

            {/* Row 2 */}
            <div className="flex flex-col p-10 gap-10 rounded-3xl border border-[#E4E7EC] bg-white">
              <div className="max-w-md">
                <h3 className="font-inter-tight text-3xl font-semibold leading-[150%] text-black mb-10">Metadata</h3>
                <button className="flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-[#212121] border-t-2 border-[#333] shadow-[0_-3px_0_0_#1A1A1A_inset,0_0_0_1px_#1A1A1A]">
                  <span className="font-inter-tight text-sm font-medium text-white">Preorder for $40</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Execution Layer Section */}
      <section className="flex flex-col items-center gap-20 py-20 px-4 md:px-10 rounded-[32px] bg-gradient-to-b from-transparent to-white overflow-hidden my-10">
        <div className="flex flex-col items-center gap-20">
          <div className="relative w-full max-w-6xl h-[339px] flex items-center justify-center">
            <svg className="absolute" width="339" height="339" viewBox="0 0 339 339">
              <circle cx="169.5" cy="169.5" r="146" fill="black" fillOpacity="0.02" stroke="#E6E6E6"/>
              <circle cx="169.5" cy="169.5" r="169" fill="black" fillOpacity="0.02" stroke="#E6E6E6"/>
              <rect x="45.5" y="44.5" width="249" height="249" rx="124.5" fill="black" fillOpacity="0.02" stroke="#E6E6E6"/>
              <circle cx="170" cy="169" r="104.5" stroke="#CCCCCC"/>
            </svg>
            <svg className="absolute z-10" width="106" height="99" viewBox="0 0 106 99">
              <path d="M62.4582 43.7569C55.9979 37.3824 55.074 28.462 53.0568 20.0659H53.0128C52.1958 23.4837 51.096 26.8384 50.3042 30.2625C47.803 41.1098 41.8642 48.0023 30.9734 50.7378C27.6489 51.458 23.8783 52.3235 20.5727 53.1195C24.2491 54.1177 27.9757 54.92 31.6395 55.9561C39.6773 58.2368 45.9114 62.5959 48.5446 71.0299C51.869 81.675 48.5571 90.8482 39.3631 95.7443C29.3269 101.095 14.9356 100.028 6.72819 90.9809C-0.681111 82.8122 -2.54758 70.9857 4.05104 59.6393C13.1886 43.9274 22.2004 28.1398 31.2939 12.4027C40.7833 -4.01674 64.8337 -4.16837 74.298 12.1563C83.9886 28.8663 93.9933 45.4058 103.106 62.419C110.345 75.926 103.269 92.1875 90.0279 97.0331C81.9147 100.002 73.9398 99.6423 66.3922 95.7317C53.968 89.3004 52.2649 71.8449 62.7599 62.021C67.9131 57.1944 74.4363 55.8551 80.8966 54.2441C82.4426 53.8587 83.9446 53.3091 85.5157 53.0437C77.5093 50.662 68.73 49.9544 62.4456 43.7569H62.4582Z" fill="black"/>
            </svg>
            <img src="https://api.builder.io/api/v1/image/assets/TEMP/0467341421c2d847b58dff6ee197fed5756593c5?width=576" alt="" className="absolute left-0 w-72 h-64" />
            <img src="https://api.builder.io/api/v1/image/assets/TEMP/ba6feb8ff2f4246d6f73e794dd512a9d87b33768?width=576" alt="" className="absolute right-0 w-72 h-64" />
          </div>

          <div className="flex flex-col items-center gap-5 max-w-4xl">
            <h2 className="text-center font-inter-tight text-4xl md:text-5xl lg:text-6xl font-semibold leading-[100%] tracking-[-0.025em] bg-gradient-to-b from-black to-[#333] bg-clip-text text-transparent">
              A Single Execution Layer Across All Compute
            </h2>
            <p className="max-w-[646px] text-center font-inter-tight text-lg md:text-xl font-medium leading-[140%] text-black">
              We unify centralized clouds and decentralized compute into one execution fabric. Jobs run on the most cost-effective resources first, with automatic fallback to trusted providers when reliability matters.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="w-full max-w-7xl p-2.5 rounded-[32px] border border-[#E4E7EC] bg-black/5 backdrop-blur-sm">
          <div className="flex flex-col gap-2.5">
            {/* Row 1 */}
            <div className="flex flex-col md:flex-row gap-2.5">
              <div className="flex-1 flex flex-col items-start gap-10 p-10 rounded-3xl border border-[#E4E7EC] bg-white">
                <div className="flex flex-col items-start gap-2.5">
                  <h3 className="font-inter-tight text-3xl font-semibold leading-[150%] text-black">Multi-Media Creation</h3>
                  <p className="font-inter-tight text-xl font-medium leading-[140%] text-black">Generate anything from static images to animated videos with a single prompt. Embrace the true potential of creative diversity.</p>
                </div>
                <img src="https://api.builder.io/api/v1/image/assets/TEMP/65b822875e0835aac59e48e21298d6ba52654539?width=688" alt="Multi-Media" className="w-full h-auto" />
              </div>
              <div className="md:w-[808px] flex flex-col items-start gap-10 p-10 rounded-3xl border border-[#E4E7EC] bg-white">
                <div className="max-w-lg flex flex-col items-start gap-2.5">
                  <h3 className="font-inter-tight text-3xl font-semibold leading-[150%] text-black">Speed and Efficiency</h3>
                  <p className="font-inter-tight text-xl font-medium leading-[140%] text-black">Within seconds, see your ideas turn into reality. No more waiting for inspiration to strike.</p>
                </div>
                <img src="https://api.builder.io/api/v1/image/assets/TEMP/166d218f50c9a3d1bb25238a7660bc45fc7061c9?width=1456" alt="Speed" className="w-full h-auto rounded-3xl border border-[#F1F1F1]" />
              </div>
            </div>

            {/* Row 2 */}
            <div className="flex flex-col md:flex-row gap-2.5">
              <div className="flex-1 flex flex-col items-start gap-10 p-10 rounded-3xl border border-[#E4E7EC] bg-white">
                <div className="flex flex-col items-start gap-2.5">
                  <h3 className="font-inter-tight text-3xl font-semibold leading-[150%] text-black">Advanced Creation Analytics</h3>
                  <p className="font-inter-tight text-xl font-medium leading-[140%] text-black">Our advanced analytics tools track your most used prompts and successful outputs, giving you valuable insights into your creative trends and preferences.</p>
                </div>
                <img src="https://api.builder.io/api/v1/image/assets/TEMP/01ae270fb6e0b1552f8b3aa8b42f25d118813a69?width=1072" alt="Analytics" className="w-full h-auto rounded-3xl" />
              </div>
              <div className="flex-1 flex flex-col items-start gap-10 p-10 rounded-3xl border border-[#E4E7EC] bg-white">
                <div className="flex flex-col items-start gap-2.5">
                  <h3 className="font-inter-tight text-3xl font-semibold leading-[150%] text-black">100 Free Prompts</h3>
                  <p className="font-inter-tight text-xl font-medium leading-[140%] text-black">Start with up to 100 free prompts when you sign up. Explore and experiment without limits.</p>
                </div>
                <img src="https://api.builder.io/api/v1/image/assets/TEMP/8fb774637cb9b4ea4fe8fa93749c9e65d370573c?width=1072" alt="Free Prompts" className="w-full h-auto rounded-xl border border-[#F1F1F1]" />
              </div>
            </div>

            {/* Row 3 */}
            <div className="flex flex-col items-start gap-10 p-10 rounded-3xl border border-[#E4E7EC] bg-white">
              <div className="max-w-3xl flex flex-col items-start gap-2.5">
                <h3 className="font-inter-tight text-3xl font-semibold leading-[150%] text-black">Real-Time Shared Workspaces</h3>
                <p className="font-inter-tight text-xl font-medium leading-[140%] text-black">Creativity is often a team effort. Invite team members to join your workspace for real-time collaboration. Share prompts, provide feedback, and create collectively.</p>
              </div>
              <img src="https://api.builder.io/api/v1/image/assets/TEMP/a371667c89e8bbd2bf38b50467bdcd5066bbcadb?width=2324" alt="Workspaces" className="w-full h-auto rounded-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Reliability Section */}
      <section className="flex flex-col items-center gap-20 py-20 px-4 md:px-10 rounded-[32px] border border-[#F1F1F1] bg-gradient-to-b from-transparent via-white to-white/40 overflow-hidden my-10">
        <div className="max-w-4xl flex flex-col items-center gap-5">
          <h2 className="text-center font-inter-tight text-4xl md:text-5xl lg:text-6xl font-semibold leading-[120%] tracking-[-0.025em] bg-gradient-to-b from-black to-[#333] bg-clip-text text-transparent">
            Reliability You Can Measure
          </h2>
          <p className="max-w-[646px] text-center font-inter-tight text-lg md:text-xl font-medium leading-[140%] text-black">
            Make informed decisions with real execution data. Track job completion rates, retries, fallbacks, and cost efficiency — all without managing infrastructure or vendor lock-in.
          </p>
        </div>

        <div className="w-full max-w-7xl p-2.5 rounded-[32px] border border-[#E4E7EC] bg-black/5 backdrop-blur-sm">
          <div className="h-[960px] flex flex-col items-center justify-center p-10 gap-10 rounded-3xl border border-[#E4E7EC] bg-white bg-cover bg-center" style={{ backgroundImage: "url('https://api.builder.io/api/v1/image/assets/TEMP/698276ae2d8ac9026c9e7b52cafa82dc924aac55?width=2520')" }}>
            <div className="w-full max-w-4xl p-2 rounded-[25.6px] border-[0.8px] border-[#E4E7EC] bg-black/5">
              <img src="https://api.builder.io/api/v1/image/assets/TEMP/c9da7aa9b3b031b3aca5293a13ff8e1509a28538?width=1843" alt="Dashboard" className="w-full h-auto rounded-[22px]" />
            </div>
          </div>
        </div>

        <p className="max-w-[646px] text-center font-inter-tight text-2xl font-medium leading-[140%] text-black">
          Use this data to streamline your creative process and optimize your future projects.
        </p>
      </section>

      {/* CTA Section */}
      <section className="flex flex-col items-center gap-16 py-20 px-2 md:px-10 pt-20 pb-2.5 rounded-[32px] bg-cover bg-center bg-[#121212] overflow-hidden my-10" style={{ backgroundImage: "url('https://api.builder.io/api/v1/image/assets/TEMP/8d3ea67259f0ca31e920a54537772406d4071a7a?width=2800')" }}>
        <div className="flex flex-col items-center gap-10">
          <svg width="106" height="99" viewBox="0 0 106 99" fill="none">
            <path d="M62.4582 43.7569C55.9979 37.3824 55.074 28.462 53.0568 20.0659H53.0128C52.1958 23.4837 51.096 26.8384 50.3042 30.2625C47.803 41.1098 41.8642 48.0023 30.9734 50.7378C27.6489 51.458 23.8783 52.3235 20.5727 53.1195C24.2491 54.1177 27.9757 54.92 31.6395 55.9561C39.6773 58.2368 45.9114 62.5959 48.5446 71.0299C51.869 81.675 48.5571 90.8482 39.3631 95.7443C29.3269 101.095 14.9356 100.028 6.72819 90.9809C-0.681111 82.8122 -2.54758 70.9857 4.05104 59.6393C13.1886 43.9274 22.2004 28.1398 31.2939 12.4027C40.7833 -4.01674 64.8337 -4.16837 74.298 12.1563C83.9886 28.8663 93.9933 45.4058 103.106 62.419C110.345 75.926 103.269 92.1875 90.0279 97.0331C81.9147 100.002 73.9398 99.6423 66.3922 95.7317C53.968 89.3004 52.2649 71.8449 62.7599 62.021C67.9131 57.1944 74.4363 55.8551 80.8966 54.2441C82.4426 53.8587 83.9446 53.3091 85.5157 53.0437C77.5093 50.662 68.73 49.9544 62.4456 43.7569H62.4582Z" fill="white"/>
          </svg>

          <div className="flex flex-col items-center gap-5 max-w-2xl">
            <h2 className="max-w-[1425px] text-center font-inter-tight text-4xl md:text-5xl lg:text-[56px] font-semibold leading-[100%] tracking-[-0.025em] text-white">
              Ready for Compute Without Lock-In or Guesswork?
            </h2>
            <p className="max-w-[455px] text-center font-inter-tight text-xl font-medium leading-[140%] text-white">
              Talk to the founder · Join as a design partner · Tell us about your workload
            </p>
            <button className="flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-white border-t-2 border-[#E6E6E6] shadow-[0_-3px_0_0_#E6E6E6_inset,0_0_0_1px_#E6E6E6]">
              <span className="font-inter-tight text-sm font-medium text-[#121212]">Preorder for $40</span>
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="w-full max-w-7xl flex flex-col md:flex-row items-end gap-12 md:gap-48 p-10 md:p-20 rounded-[22px] border border-[#262626] bg-gradient-to-b from-[#121212] to-[#1A1A1A]">
          <div className="flex flex-col items-start gap-5 max-w-md">
            <p className="font-inter-tight text-lg font-medium leading-[150%] text-white">
              The Pavyon template lets businesses show off their products with a really eye-catching design and a fun online experience.
            </p>
            <div className="flex items-center gap-4">
              <svg width="37" height="35" viewBox="0 0 37 35" fill="none">
                <path d="M21.8015 15.4696C19.5464 13.216 19.224 10.0623 18.5198 7.09401H18.5045C18.2193 8.30233 17.8354 9.48831 17.559 10.6989C16.686 14.5338 14.613 16.9705 10.8115 17.9376C9.65105 18.1922 8.33488 18.4982 7.18104 18.7796C8.4643 19.1325 9.76512 19.4162 11.044 19.7825C13.8496 20.5888 16.0257 22.1299 16.9448 25.1116C18.1052 28.875 16.9492 32.118 13.7399 33.849C10.2367 35.7408 5.21337 35.3633 2.34852 32.1649C-0.237746 29.277 -0.889248 25.0959 1.41404 21.0846C4.60355 15.5299 7.74919 9.94841 10.9233 4.38478C14.2357 -1.42006 22.6306 -1.47366 25.9342 4.29768C29.3168 10.2053 32.809 16.0525 35.9897 22.0673C38.5168 26.8425 36.0468 32.5915 31.4248 34.3046C28.5929 35.3544 25.8092 35.2271 23.1747 33.8445C18.8379 31.5708 18.2434 25.3997 21.9067 21.9266C23.7055 20.2202 25.9825 19.7467 28.2375 19.1772C28.7771 19.041 29.3014 18.8466 29.8498 18.7528C27.0551 17.9108 23.9907 17.6607 21.7971 15.4696H21.8015Z" fill="white"/>
              </svg>
              <span className="font-inter-tight text-2xl font-semibold text-white">Atlas</span>
            </div>
          </div>

          <div className="flex items-end gap-12 md:gap-48">
            <div className="flex flex-col items-start gap-10">
              <div className="flex flex-col items-start gap-5">
                <Link to="#" className="font-inter-tight text-lg font-medium text-[#999]">Home</Link>
                <Link to="#" className="font-inter-tight text-lg font-medium text-[#999]">About</Link>
                <Link to="#" className="font-inter-tight text-lg font-medium text-[#999]">Features</Link>
                <Link to="#" className="font-inter-tight text-lg font-medium text-[#999]">Pricing</Link>
                <Link to="#" className="font-inter-tight text-lg font-medium text-[#999]">Blogs</Link>
                <Link to="#" className="font-inter-tight text-lg font-medium text-[#999]">Contact</Link>
              </div>
              <span className="font-inter-tight text-2xl font-medium text-white">Menu</span>
            </div>

            <div className="flex flex-col items-start gap-10">
              <div className="flex flex-col items-start gap-5">
                <Link to="#" className="font-inter-tight text-lg font-medium text-[#999]">Sign in</Link>
                <Link to="#" className="font-inter-tight text-lg font-medium text-[#999]">Create an account</Link>
                <Link to="#" className="font-inter-tight text-lg font-medium text-[#999]">404</Link>
                <Link to="#" className="font-inter-tight text-lg font-medium text-[#999]">Privacy Policy</Link>
                <Link to="#" className="font-inter-tight text-lg font-medium text-[#999]">Terms and Condition</Link>
              </div>
              <span className="font-inter-tight text-2xl font-medium text-white">Utilities</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
