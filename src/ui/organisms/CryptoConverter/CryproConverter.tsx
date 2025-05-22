import { useState } from 'react'
import {
  TabGroup,
  TabList,
  TabPanels,
  TabPanel,
  Tab,
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from '@headlessui/react'
import { ChevronDown } from 'lucide-react'

const currencies = [
  { name: 'Bitcoin', symbol: 'BTC', icon: '🟠' },
  { name: 'Ethereum', symbol: 'ETH', icon: '🟣' },
  { name: 'Tether', symbol: 'USDT', icon: '🟢' },
]

type Mode = 'Buy' | 'Sell'

function CryptoForm({
  mode,
  selectedCurrency,
  setSelectedCurrency,
  amountUSD,
  setAmountUSD,
  amountCrypto,
  setAmountCrypto,
}: {
  mode: Mode
  selectedCurrency: (typeof currencies)[0]
  setSelectedCurrency: (c: (typeof currencies)[0]) => void
  amountUSD: string
  setAmountUSD: (val: string) => void
  amountCrypto: string
  setAmountCrypto: (val: string) => void
}) {
  return (
    <div className="space-y-4">
      {/* Currency select */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1">Coin Name</label>
        <Listbox value={selectedCurrency} onChange={setSelectedCurrency}>
          <div className="relative mt-1 z-20">
            <ListboxButton className="relative w-full cursor-default rounded-lg bg-[#2b2c30] py-2 pl-3 pr-10 text-left border border-gray-600 shadow-md focus:outline-none text-white">
              <span className="block truncate">
                {selectedCurrency.icon} {selectedCurrency.name} ({selectedCurrency.symbol})
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronDown size={16} className="text-gray-400" />
              </span>
            </ListboxButton>
            <ListboxOptions className="absolute z-30 mt-1 w-full rounded-md bg-[#2b2c30] shadow-lg max-h-60 overflow-auto ring-1 ring-black ring-opacity-5 focus:outline-none text-sm">
              {currencies.map((currency) => (
                <ListboxOption
                  key={currency.symbol}
                  value={currency}
                  className="cursor-default select-none py-2 pl-4 pr-4 text-gray-100 data-active:bg-emerald-600 data-active:text-white"
                >
                  {currency.icon} {currency.name} ({currency.symbol})
                </ListboxOption>
              ))}
            </ListboxOptions>
          </div>
        </Listbox>
      </div>

      {/* USD amount input */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1">Amount (USD)</label>
        <div className="relative">
          <input
            type="text"
            className="w-full rounded-md border border-gray-600 bg-[#2b2c30] px-4 py-2 pr-16 shadow-sm text-white focus:border-emerald-500 focus:ring-emerald-500"
            value={`$${amountUSD}`}
            onChange={(e) => setAmountUSD(e.target.value.replace('$', ''))}
          />
          <span className="absolute inset-y-0 right-4 flex items-center text-green-400 font-semibold">
            USD
          </span>
        </div>
      </div>

      {/* Crypto amount input */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1">
          Amount ({selectedCurrency.symbol})
        </label>
        <div className="relative">
          <input
            type="text"
            className="w-full rounded-md border border-gray-600 bg-[#2b2c30] px-4 py-2 pr-16 shadow-sm text-white focus:border-emerald-500 focus:ring-emerald-500"
            value={amountCrypto}
            onChange={(e) => setAmountCrypto(e.target.value)}
          />
          <span className="absolute inset-y-0 right-4 flex items-center text-emerald-400 font-semibold">
            {selectedCurrency.symbol}
          </span>
        </div>
      </div>

      <button className="w-full mt-4 bg-emerald-600 hover:bg-emerald-500 text-white py-2 rounded-lg shadow transition">
        {mode} {selectedCurrency.symbol}
      </button>
    </div>
  )
}

export const CryptoConverter = () => {
  const [mode, setMode] = useState<Mode>('Buy')
  const [selectedCurrency, setSelectedCurrency] = useState(currencies[0])
  const [amountUSD, setAmountUSD] = useState('5696.24')
  const [amountCrypto, setAmountCrypto] = useState('0.17321536')

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-[#3f4046] rounded-2xl shadow-lg text-white">
      <TabGroup
        selectedIndex={mode === 'Buy' ? 0 : 1}
        onChange={(index) => setMode(index === 0 ? 'Buy' : 'Sell')}
      >
        <TabList className="flex space-x-1 rounded-xl bg-[#2b2c30] p-1">
          {['Buy', 'Sell'].map((tab) => (
            <Tab
              key={tab}
              className="data-selected:bg-emerald-500 data-selected:text-white w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-gray-300 data-hover:bg-emerald-700/20 data-hover:text-white focus:outline-none"
            >
              {tab}
            </Tab>
          ))}
        </TabList>
        <TabPanels className="mt-4">
          <TabPanel>
            <CryptoForm
              mode={mode}
              selectedCurrency={selectedCurrency}
              setSelectedCurrency={setSelectedCurrency}
              amountUSD={amountUSD}
              setAmountUSD={setAmountUSD}
              amountCrypto={amountCrypto}
              setAmountCrypto={setAmountCrypto}
            />
          </TabPanel>
          <TabPanel>
            <CryptoForm
              mode={mode}
              selectedCurrency={selectedCurrency}
              setSelectedCurrency={setSelectedCurrency}
              amountUSD={amountUSD}
              setAmountUSD={setAmountUSD}
              amountCrypto={amountCrypto}
              setAmountCrypto={setAmountCrypto}
            />
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  )
}
