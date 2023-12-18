require "./lib/challenge_3"

RSpec.describe "challenge 3" do
  it "handles a single char" do
    expect(challenge_3 "a").to eq("a")
  end

  it "handles a single repeated char" do
    expect(challenge_3 "aaa").to eq("a")
  end

  it "handles the empty string" do
    expect(challenge_3 "").to eq("")
  end

  it "handles 'bbbaaaverylongstrapo'" do
    expect(challenge_3 "bbbaaaverylongstrapo").to eq("averylongst")
  end

  it "handles overlapping candidates" do
    expect(challenge_3 "abcada").to eq("bcad")
  end

  it "handles overlapping candidates 2" do
    expect(challenge_3 "abcada").to eq("bcad")
  end
end
